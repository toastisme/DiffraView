"""Image data shared by all experiment types."""

from __future__ import annotations

import os

import lz4.frame
import numpy as np
from dials.array_family import flex
from dials.util.image_viewer.spotfinder_frame import (
    DispersionExtendedThresholdDebug,
    DispersionThresholdDebug,
    RadialProfileThresholdDebug,
)
from dxtbx import flumpy
from typing import List, Tuple
from ..processing.steps import StepId


class ImageModel:
    def get_pixel_spectra(
        self, panel_idx: int, panel_pos: Tuple[int, int], expt_id: int
    ) -> Tuple[Tuple[float], Tuple[float]]:
        fmt_instance = self._get_fmt_instance(expt_id)
        x, y = fmt_instance.get_flattened_pixel_data(
            panel_idx, panel_pos[0], panel_pos[1]
        )
        return x, y

    def compress_image_data(self, image_data):
        assert image_data.dtype in (np.float16, np.float32, np.int32)
        return {
            "type": "image",
            "dtype": str(image_data.dtype),
            "shape": list(image_data.shape),
            "data": lz4.frame.compress(image_data.tobytes()),
        }

    def panel_is_flipped(self, fmt_instance, panel_idx):
        if panel_idx != 0:
            return False
        try:
            if fmt_instance.get_instrument_name() != "SXD":
                return False
            start_date = fmt_instance.get_start_date()
            assert start_date is not None
            year, _, _ = start_date.split("-")
            if int(year) < 2024:
                return True
            return False
        except Exception:
            return False

    def get_flattened_image_data(
        self,
        tof_range=None,
        update_find_spots_range=False,
        expt_id=0,
        panel_idx=None,
        image_range=None,
    ) -> Tuple[List]:
        """
        Images image_range[0] to image_range[1] - 1 (imageset indices) summed,
        by default all of them. Each panel is sent as float32 counts with the
        mode's display scale (the viewer shows min(counts * scale, 1)).
        """

        if image_range is None and tof_range is not None:
            image_range = self.mode.tof_range_to_image_range(tof_range)

            if update_find_spots_range:
                self.update_arg(
                    StepId.FIND_SPOTS,
                    "scan_range",
                    f"{image_range[0]},{image_range[1]}",
                )

        if image_range is None:
            image_range = (0, self.get_num_images())

        imageset, fmt_instance = self._get_image_source(expt_id)

        image_data = list(imageset.get_corrected_data(image_range[0]))
        for i in range(image_range[0] + 1, image_range[1]):
            img_data = imageset.get_corrected_data(i)
            for j in range(len(image_data)):
                image_data[j] += img_data[j]

        image_data = [flumpy.to_numpy(i) for i in image_data]
        scales = self.mode.display_scales(image_data)

        if panel_idx is not None:
            panel_data = image_data[panel_idx]
            if panel_idx == 0:
                panel_flipped = self.panel_is_flipped(
                    fmt_instance=fmt_instance, panel_idx=panel_idx
                )
                if panel_flipped:
                    panel_data = np.flipud(panel_data)
            panel_data = self.compress_image_data(
                image_data=panel_data.astype(np.float32)
            )
            panel_data["scale"] = scales[panel_idx]
            return panel_data

        for i in range(len(image_data)):
            image_data[i] = np.flipud(image_data[i].T)
            if i == 0:
                panel_flipped = self.panel_is_flipped(
                    fmt_instance=fmt_instance, panel_idx=i
                )
                if panel_flipped:
                    image_data[i] = np.flipud(image_data[i])
            image_data[i] = self.compress_image_data(
                image_data=image_data[i].astype(np.float32)
            )
            image_data[i]["scale"] = scales[i]

        return tuple(image_data)

    def get_num_images(self, expt_id=0) -> int:
        return len(self._get_image_source(expt_id)[0])

    def _get_image_source(self, expt_id):
        """
        (imageset, format instance), kept while the expt file is unchanged.
        """
        key = (self.current_expt_file, os.stat(self.current_expt_file).st_mtime_ns)
        cache = getattr(self, "_image_sources", None)
        if cache is None or cache[0] != key:
            cache = self._image_sources = (key, {})
        sources = cache[1]
        if expt_id not in sources:
            sources[expt_id] = (
                self._get_experiment(expt_id).imageset,
                self._get_fmt_instance(expt_id),
            )
        return sources[expt_id]

    def get_threshold_debug_data(
        self, expt_id, idx=None, threshold_algorithm=None, algorithm_params=None
    ):

        if threshold_algorithm is None or algorithm_params is None:
            assert self.last_experiment_viewer_debug_settings is not None
            idx, threshold_algorithm, algorithm_params = (
                self.last_experiment_viewer_debug_settings
            )
        else:
            self.last_experiment_viewer_debug_settings = (
                idx,
                threshold_algorithm,
                algorithm_params,
            )

        experiment = self._get_experiment(expt_id)
        detector_name = self.get_instrument_name(expt_id)
        imageset = experiment.imageset
        image_data = imageset.get_corrected_data(idx)
        mask_data = imageset.get_mask(idx)

        debug_list = []

        if threshold_algorithm == "radial_profile":
            blur = None
            if algorithm_params["blur"] != "none":
                blur = algorithm_params["blur"]

            algorithm = RadialProfileThresholdDebug(
                imageset,
                int(algorithm_params["n_iqr"]),
                blur,
                int(algorithm_params["n_bins"]),
            )

            mock_gain_map = flex.double(image_data[0].accessor(), 1.0)
            # RadialProfileThresholdDebug still needs dispersion arguments
            # Even though they are not used
            for i in range(len(image_data)):
                debug_list.append(
                    algorithm(
                        image_data[i].as_double(),
                        mask_data[i],
                        mock_gain_map,
                        (1, 1),
                        1.0,
                        1.0,
                        1.0,
                        0,
                    )
                )

        else:
            if threshold_algorithm == "dispersion_extended":
                algorithm = DispersionExtendedThresholdDebug
            elif threshold_algorithm == "dispersion":
                algorithm = DispersionThresholdDebug

            gain_map = flex.double(
                image_data[0].accessor(), float(algorithm_params["gain"])
            )
            kernel_size = algorithm_params["kernel_size"].split(",")
            kernel_size = (int(kernel_size[0]), int(kernel_size[1]))

            for i in range(len(image_data)):
                debug_list.append(
                    algorithm(
                        image_data[i].as_double(),
                        mask_data[i],
                        gain_map,
                        kernel_size,
                        float(algorithm_params["nsigma_b"]),
                        float(algorithm_params["nsigma_s"]),
                        float(algorithm_params["global_threshold"]),
                        int(algorithm_params["min_local"]),
                    )
                )

        images_lst = []
        for idx, i in enumerate(image_data):
            i_npy = flumpy.to_numpy(i)
            i_npy /= np.max(i_npy)
            if detector_name == "SXD" and idx != 0:
                images_lst.append(
                    self.compress_image_data(np.flipud(i_npy.T).astype(np.float16))
                )
            else:
                images_lst.append(self.compress_image_data(i_npy.T.astype(np.float16)))
        mask_lst = []
        for idx, i in enumerate(debug_list):
            if detector_name == "SXD" and idx != 0:
                i_npy = np.flipud(flumpy.to_numpy(i.final_mask()).astype(np.int32).T)
            else:
                i_npy = flumpy.to_numpy(i.final_mask()).astype(np.int32).T
            mask_lst.append(self.compress_image_data(i_npy))

        return images_lst, mask_lst

    def get_images_at_idx(self, expt_id, idx):
        experiment = self._get_experiment(expt_id)
        imageset = experiment.imageset
        images = imageset.get_corrected_data(idx)
        images_lst = []
        for i in images:
            i_npy = flumpy.to_numpy(i)
            i_npy /= np.max(i_npy)
            images_lst.append(i_npy.tolist())

        return images_lst
