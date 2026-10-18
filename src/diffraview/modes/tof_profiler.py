"""Integration profiler: integrating single TOF reflections."""

from __future__ import annotations

import numpy as np

from copy import deepcopy
from dials.algorithms.profile_model.gaussian_rs.calculator import (
    ComputeEsdBeamDivergence,
)
from dials.array_family import flex
from dials.command_line.tof_integrate import (
    compute_partiality,
    phil_scope as tof_integrate_phil_scope,
)
from dials.extensions.simple_background_ext import SimpleBackgroundExt
from dials_algorithms_tof_integration_ext import (
    TOFProfile1DIBIXParams,
    TOFProfile1DICParams,
    TOFProfile3DGutmannParams,
    TOFProfile3DIBIXParams,
    TOFProfile3DICParams,
    calculate_line_profile_for_reflection,
    calculate_line_profile_for_reflection_3d,
    tof_calculate_ellipse_shoebox_mask,
    tof_calculate_seed_skewness_shoebox_mask,
)
from dials_tof_scaling_ext import (
    TOFAbsorptionParams,
    TOFIncidentSpectrumParams,
    tof_extract_shoeboxes_to_reflection_table,
)
from dxtbx import flumpy
from math import ceil, floor
from os.path import isabs, isfile, join
from typing import List, Tuple
from .. import utils
from ..processing.steps import StepId


class TOFProfiler:
    """Mixed into TOFMode; state is set up in TOFMode.__init__."""

    def shift_bbox(self, bbox: Tuple, centroid: Tuple, new_centroid: Tuple):

        diff_centroid = (
            new_centroid[0] - centroid[0],
            new_centroid[1] - centroid[1],
            new_centroid[2] - centroid[2],
        )

        updated_bbox = list(deepcopy(bbox))

        updated_bbox[0] += diff_centroid[0]
        updated_bbox[1] += diff_centroid[0]
        updated_bbox[2] += diff_centroid[1]
        updated_bbox[3] += diff_centroid[1]
        updated_bbox[4] += diff_centroid[2]
        updated_bbox[5] += diff_centroid[2]

        return tuple(updated_bbox)

    def pad_bbox(
        self,
        bbox: Tuple,
        padding: Tuple,  # x,y,z
    ):

        updated_bbox = list(deepcopy(bbox))

        updated_bbox[0] -= padding[0]
        updated_bbox[1] += padding[0]
        updated_bbox[2] = -padding[1]
        updated_bbox[3] += padding[1]
        updated_bbox[4] -= padding[2]
        updated_bbox[5] += padding[2]

        return tuple(updated_bbox)

    def clip_bbox(self, bbox: Tuple, image_size: Tuple):

        updated_bbox = list(deepcopy(bbox))
        updated_bbox[0] = max(floor(updated_bbox[0]), image_size[0])
        updated_bbox[1] = min(ceil(updated_bbox[1]), image_size[1])
        updated_bbox[2] = max(floor(updated_bbox[2]), image_size[2])
        updated_bbox[3] = min(ceil(updated_bbox[3]), image_size[3])
        updated_bbox[4] = max(floor(updated_bbox[4]), image_size[4])
        updated_bbox[5] = min(ceil(updated_bbox[5]), image_size[5])

        return tuple(updated_bbox)

    def get_line_integration_for_reflection(
        self, refl_id: int, msg
    ) -> Tuple[List[float], List[float], float]:
        """
        Profile fitters report why a fit failed on stderr, which is
        captured here so that the reason can be shown to the user
        """

        with utils.capture_stderr() as captured_output:
            results = self._get_line_integration_for_reflection(refl_id, msg)

        results["profile_failure_summary"] = utils.get_profile_failure_summary(
            captured_output[0]
        )
        return results

    def _get_line_integration_for_reflection(
        self, refl_id: int, msg
    ) -> Tuple[List[float], List[float], float]:

        # Get reflection
        if "type" in msg:
            reflection_type = msg["type"]
        else:
            reflection_type = "observed"

        if reflection_type == "calculated_integrated":
            integration_refl_table = self.af.step_output(StepId.INTEGRATE, "refl")
            assert integration_refl_table and isfile(integration_refl_table)
            reflection_table = self.af._get_reflection_table_raw(
                refl_file=integration_refl_table
            )
            refl = reflection_table.select(reflection_table["idx"] == refl_id)
            centroid = refl["xyzcal.px"][0]
        else:
            integration_refl_table = self.af.step_output(StepId.REFINE, "refl")
            assert integration_refl_table and isfile(integration_refl_table)
            reflection_table = self.af._get_reflection_table_raw(
                refl_file=integration_refl_table
            )
            refl = reflection_table.select(reflection_table["idx"] == refl_id)
            centroid = refl["xyzobs.px.value"][0]
        tof_padding = float(msg["tof_padding"])
        xy_padding = float(msg["xy_padding"])
        new_centroid = refl["xyzcal.px"][0]
        assert len(refl) == 1

        expt_id = refl["id"][0]
        expt = self.af._get_experiment(expt_id)
        data = expt.imageset

        # Get shoebox

        bbox = refl["bbox"][0]
        bbox = self.shift_bbox(bbox, centroid, new_centroid)
        image_size = expt.detector[0].get_image_size()
        tof_size = len(expt.scan.get_property("time_of_flight"))
        image_range = (0, image_size[0], 0, image_size[1], 0, tof_size)
        partiality = compute_partiality(bbox, image_range)
        refl["partiality"] = flex.double(1, partiality)

        mask_model = msg["mask_model"]
        ellipse_mask_scale = float(msg.get("ellipse_mask_scale", 1.0))
        background_model = msg["background_model"]

        predicted_shoebox = self.get_predicted_shoebox(
            refl=refl,
            tof_padding=tof_padding,
            xy_padding=xy_padding,
            reflection_type=reflection_type,
            mask_model=mask_model,
            ellipse_mask_scale=ellipse_mask_scale,
            background_model=background_model,
            return_expt_id=False,
        )
        refl["shoebox"] = flex.shoebox(1, predicted_shoebox)

        apply_lorentz = bool(msg["apply_lorentz"])
        integration_method = msg["method"]

        # Check if doing incident correction
        incident_params = None
        incident_dict = {"incident_run": None, "empty_run": None}
        applying_incident = msg["apply_incident_spectrum"]
        if applying_incident:
            for i in incident_dict:
                if i in msg and msg[i] != "" and msg[i] != "None":
                    run_path = msg[i]
                    if not isabs(run_path):
                        run_path = join(self.af.processing_dir, run_path)
                    incident_dict[i] = run_path
                else:
                    applying_incident = False
                    break

        if applying_incident:
            experiment_cls = expt.imageset.get_format_class()
            incident_fmt_class = experiment_cls.get_instance(
                incident_dict["incident_run"]
            )
            empty_fmt_class = experiment_cls.get_instance(incident_dict["empty_run"])
            incident_data = experiment_cls(incident_dict["incident_run"]).get_imageset(
                incident_dict["incident_run"]
            )
            empty_data = experiment_cls(incident_dict["empty_run"]).get_imageset(
                incident_dict["empty_run"]
            )
            incident_proton_charge = incident_fmt_class.get_proton_charge()
            empty_proton_charge = empty_fmt_class.get_proton_charge()
            expt_proton_charge = experiment_cls.get_instance(
                expt.imageset.paths()[0], **expt.imageset.data().get_params()
            ).get_proton_charge()

            incident_params = TOFIncidentSpectrumParams(
                incident_data,
                empty_data,
                expt_proton_charge,
                incident_proton_charge,
                empty_proton_charge,
            )

        # Check if doing absorption correction
        absorption_params = None
        absorption_dict = {
            "vanadium_sample_radius": None,
            "vanadium_sample_number_density": None,
            "vanadium_scattering_x_section": None,
            "vanadium_absorption_x_section": None,
            "sample_radius": None,
            "sample_number_density": None,
            "scattering_x_section": None,
            "absorption_x_section": None,
        }

        applying_absorption = msg["apply_spherical_absorption"]
        if applying_absorption:
            for i in absorption_dict:
                if i in msg and msg[i] != "" and msg[i] != "None":
                    absorption_dict[i] = float(msg[i])
                else:
                    applying_absorption = False
                    break

        if applying_absorption:
            absorption_params = TOFAbsorptionParams(
                absorption_dict["sample_radius"],
                absorption_dict["scattering_x_section"],
                absorption_dict["absorption_x_section"],
                absorption_dict["sample_number_density"],
                absorption_dict["vanadium_sample_radius"],
                absorption_dict["vanadium_scattering_x_section"],
                absorption_dict["vanadium_absorption_x_section"],
                absorption_dict["vanadium_sample_number_density"],
            )

        shoebox_zsize = refl[0]["shoebox"].zsize()
        projected_corrected_intensity = flex.double(shoebox_zsize)
        projected_raw_intensity = flex.double(shoebox_zsize)
        projected_background = flex.double(shoebox_zsize)
        line_profile = flex.double(shoebox_zsize)
        tof = flex.double(shoebox_zsize)
        overall_results = {"refl": refl}
        optimize_profile = bool(msg["optimize_profile"])
        _phil_defaults = tof_integrate_phil_scope.fetch().extract()

        if integration_method == "summation":
            result = calculate_line_profile_for_reflection(
                refl,
                expt,
                data,
                incident_params,
                absorption_params,
                projected_raw_intensity,
                projected_corrected_intensity,
                projected_background,
                tof,
                apply_lorentz,
            )

            sum_intensity, sum_variance, success = result
            overall_results["prf_intensity"] = 0.0
            overall_results["prf_sigma"] = 0.0
            overall_results["sum_intensity"] = sum_intensity
            overall_results["sum_sigma"] = np.sqrt(sum_variance)
            overall_results["success"] = success

        elif integration_method == "profile_1d_ibix":
            alpha_min = _phil_defaults.profile_1d_ibix.min_alpha
            alpha_max = _phil_defaults.profile_1d_ibix.max_alpha
            beta_min = _phil_defaults.profile_1d_ibix.min_beta
            beta_max = _phil_defaults.profile_1d_ibix.max_beta
            A = float(msg["profile_1d_ibix_A"])
            alpha = float(msg["profile_1d_ibix_alpha"])
            beta = float(msg["profile_1d_ibix_beta"])
            n_restarts = int(msg["profile_1d_ibix_n_restarts"])
            optimize_profile = bool(msg["optimize_profile"])
            debug_output = True

            # A is not given directly to the profile; it is fitted starting
            # from A_min, so the given value is used as the lower bound
            A_min = A
            A_max = max(_phil_defaults.profile_1d_ibix.max_A, A_min)
            if not optimize_profile:
                A_max = A_min
                alpha_min = 0.0
                alpha_max = alpha + 1.0
                beta_min = 0.0
                beta_max = beta + 1

            profile_params = TOFProfile1DIBIXParams(
                A_min,
                A_max,
                alpha,
                alpha_min,
                alpha_max,
                beta,
                beta_min,
                beta_max,
                n_restarts,
                optimize_profile,
                debug_output,
            )

            result = calculate_line_profile_for_reflection(
                refl,
                expt,
                data,
                incident_params,
                absorption_params,
                projected_raw_intensity,
                projected_corrected_intensity,
                projected_background,
                tof,
                line_profile,
                apply_lorentz,
                profile_params,
            )

            prf_intensity, _, sum_intensity, sum_variance, success = result
            overall_results["prf_intensity"] = prf_intensity
            overall_results["prf_sigma"] = np.sqrt(sum_variance)
            overall_results["sum_intensity"] = sum_intensity
            overall_results["sum_sigma"] = np.sqrt(sum_variance)
            overall_results["success"] = success
            overall_results["line_profile"] = line_profile
            overall_results["profile_1d_ibix_alpha"] = profile_params.alpha
            overall_results["profile_1d_ibix_beta"] = profile_params.beta
            overall_results["profile_1d_ibix_A"] = profile_params.A

        elif integration_method == "profile_1d_ic":
            A_min = _phil_defaults.profile_1d_ic.min_A
            A_max = _phil_defaults.profile_1d_ic.max_A
            B_min = _phil_defaults.profile_1d_ic.min_B
            B_max = _phil_defaults.profile_1d_ic.max_B
            R_min = _phil_defaults.profile_1d_ic.min_R
            R_max = _phil_defaults.profile_1d_ic.max_R
            A = float(msg["profile_1d_ic_A"])
            B = float(msg["profile_1d_ic_B"])
            R = float(msg["profile_1d_ic_R"])
            n_restarts = int(msg["profile_1d_ic_n_restarts"])
            optimize_profile = bool(msg["optimize_profile"])
            debug_output = True
            if not optimize_profile:
                A_min = 0.0
                A_max = A + 1.0
                B_min = 0.0
                B_max = B + 1.0
                R_min = 0.0
                R_max = 1.0

            profile_params = TOFProfile1DICParams(
                dict(
                    A=A,
                    A_min=A_min,
                    A_max=A_max,
                    B=B,
                    B_min=B_min,
                    B_max=B_max,
                    R=R,
                    R_min=R_min,
                    R_max=R_max,
                    HatWidth=_phil_defaults.profile_1d_ic.hat_width,
                    KConv=_phil_defaults.profile_1d_ic.kconv,
                    n_restarts=n_restarts,
                    optimize_profile=optimize_profile,
                    show_profile_failures=debug_output,
                )
            )

            result = calculate_line_profile_for_reflection(
                refl,
                expt,
                data,
                incident_params,
                absorption_params,
                projected_raw_intensity,
                projected_corrected_intensity,
                projected_background,
                tof,
                line_profile,
                apply_lorentz,
                profile_params,
            )

            prf_intensity, _, sum_intensity, sum_variance, success = result
            overall_results["prf_intensity"] = prf_intensity
            overall_results["prf_sigma"] = np.sqrt(sum_variance)
            overall_results["sum_intensity"] = sum_intensity
            overall_results["sum_sigma"] = np.sqrt(sum_variance)
            overall_results["success"] = success
            overall_results["line_profile"] = line_profile
            overall_results["profile_1d_ic_A"] = profile_params.A
            overall_results["profile_1d_ic_B"] = profile_params.B
            overall_results["profile_1d_ic_R"] = profile_params.R

        elif integration_method == "profile_3d_gutmann":
            alpha_min = _phil_defaults.profile_3d_gutmann.min_alpha
            alpha_max = _phil_defaults.profile_3d_gutmann.max_alpha
            beta_min = _phil_defaults.profile_3d_gutmann.min_beta
            beta_max = _phil_defaults.profile_3d_gutmann.max_beta
            alpha = float(msg["profile_3d_gutmann_alpha"])
            beta = float(msg["profile_3d_gutmann_beta"])
            n_restarts = int(msg["profile_3d_gutmann_n_restarts"])
            optimize_profile = bool(msg["optimize_profile"])
            profile_params = TOFProfile3DGutmannParams(
                alpha,
                alpha_min,
                alpha_max,
                beta,
                beta_min,
                beta_max,
                n_restarts,
                optimize_profile,
                False,
                True,
            )

            result = calculate_line_profile_for_reflection_3d(
                refl,
                expt,
                data,
                incident_params,
                absorption_params,
                projected_raw_intensity,
                projected_corrected_intensity,
                projected_background,
                tof,
                apply_lorentz,
                profile_params,
            )

            prf_intensity, _, sum_intensity, sum_variance, success, profile_3d = result
            overall_results["prf_intensity"] = prf_intensity
            overall_results["prf_sigma"] = np.sqrt(sum_variance)
            overall_results["sum_intensity"] = sum_intensity
            overall_results["sum_sigma"] = np.sqrt(sum_variance)
            overall_results["success"] = success
            overall_results["profile_3d_gutmann"] = profile_3d
            overall_results["profile_3d_gutmann_alpha"] = profile_params.alpha
            overall_results["profile_3d_gutmann_beta"] = profile_params.beta

        elif integration_method == "profile_3d_ic":
            init_A = float(msg["profile_3d_ic_init_A"])
            init_B = float(msg["profile_3d_ic_init_B"])
            n_restarts = int(msg["profile_3d_ic_n_restarts"])
            optimize_profile = bool(msg["optimize_profile"])
            _p = _phil_defaults.profile_3d_ic
            profile_params = TOFProfile3DICParams(
                dict(
                    A=init_A,
                    A_min=_p.min_A,
                    A_max=_p.max_A,
                    B=init_B,
                    B_min=_p.min_B,
                    B_max=_p.max_B,
                    R=_p.init_R,
                    R_min=_p.min_R,
                    R_max=_p.max_R,
                    SigX_min=_p.min_sig_x,
                    SigX_max=_p.max_sig_x,
                    SigY_min=_p.min_sig_y,
                    SigY_max=_p.max_sig_y,
                    SigP=_p.init_sig_p,
                    SigP_min=_p.min_sig_p,
                    SigP_max=_p.max_sig_p,
                    HatWidth=_p.hat_width,
                    KConv=_p.kconv,
                    n_restarts=n_restarts,
                    optimize_profile=optimize_profile,
                    max_drift_factor=_p.max_drift_factor,
                    show_profile_failures=True,
                )
            )

            result = calculate_line_profile_for_reflection_3d(
                refl,
                expt,
                data,
                incident_params,
                absorption_params,
                projected_raw_intensity,
                projected_corrected_intensity,
                projected_background,
                tof,
                apply_lorentz,
                profile_params,
            )

            prf_intensity, _, sum_intensity, sum_variance, success, profile_3d = result
            overall_results["prf_intensity"] = prf_intensity
            overall_results["prf_sigma"] = np.sqrt(sum_variance)
            overall_results["sum_intensity"] = sum_intensity
            overall_results["sum_sigma"] = np.sqrt(sum_variance)
            overall_results["success"] = success
            overall_results["profile_3d_ic"] = profile_3d
            overall_results["profile_3d_ic_init_A"] = profile_params.A
            overall_results["profile_3d_ic_init_B"] = profile_params.B

        elif integration_method == "profile_3d_ibix":
            init_alpha = float(msg["profile_3d_ibix_alpha"])
            init_beta = float(msg["profile_3d_ibix_beta"])
            n_restarts = int(msg["profile_3d_ibix_n_restarts"])
            optimize_profile = bool(msg["optimize_profile"])
            _p = _phil_defaults.profile_3d_ibix
            profile_params = TOFProfile3DIBIXParams(
                dict(
                    alpha=init_alpha,
                    alpha_min=_p.min_alpha,
                    alpha_max=_p.max_alpha,
                    beta=init_beta,
                    beta_min=_p.min_beta,
                    beta_max=_p.max_beta,
                    sigma_min=_p.min_sigma,
                    sigma_max=_p.max_sigma,
                    SigX_min=_p.min_sig_x,
                    SigX_max=_p.max_sig_x,
                    SigY_min=_p.min_sig_y,
                    SigY_max=_p.max_sig_y,
                    SigP=_p.init_sig_p,
                    SigP_min=_p.min_sig_p,
                    SigP_max=_p.max_sig_p,
                    n_restarts=n_restarts,
                    optimize_profile=optimize_profile,
                    max_drift_factor=_p.max_drift_factor,
                    show_profile_failures=True,
                )
            )

            result = calculate_line_profile_for_reflection_3d(
                refl,
                expt,
                data,
                incident_params,
                absorption_params,
                projected_raw_intensity,
                projected_corrected_intensity,
                projected_background,
                tof,
                apply_lorentz,
                profile_params,
            )

            prf_intensity, _, sum_intensity, sum_variance, success, profile_3d = result
            overall_results["prf_intensity"] = prf_intensity
            overall_results["prf_sigma"] = np.sqrt(sum_variance)
            overall_results["sum_intensity"] = sum_intensity
            overall_results["sum_sigma"] = np.sqrt(sum_variance)
            overall_results["success"] = success
            overall_results["profile_3d_ibix"] = profile_3d
            overall_results["profile_3d_ibix_alpha"] = profile_params.alpha
            overall_results["profile_3d_ibix_beta"] = profile_params.beta

        else:
            raise NotImplementedError(
                f"Unknown integration method {integration_method}"
            )

        overall_results["tof"] = flumpy.to_numpy(tof)
        overall_results["projected_raw_intensity"] = flumpy.to_numpy(
            projected_raw_intensity
        )
        overall_results["projected_corrected_intensity"] = flumpy.to_numpy(
            projected_corrected_intensity
        )
        overall_results["projected_background"] = flumpy.to_numpy(projected_background)

        return overall_results

    def clear_shoebox_cache(self):
        self.shoebox_cache = {}

    def update_integration_profiler_params(
        self, A, alpha, beta, sigma, tof_padding, xy_padding
    ):
        if tof_padding != self.integration_profiler_params["tof_padding"]:
            self.clear_shoebox_cache()
        if xy_padding != self.integration_profiler_params["xy_padding"]:
            self.clear_shoebox_cache()
        self.integration_profiler_params["A"] = A
        self.integration_profiler_params["alpha"] = alpha
        self.integration_profiler_params["beta"] = beta
        self.integration_profiler_params["sigma"] = sigma
        self.integration_profiler_params["tof_padding"] = tof_padding
        self.integration_profiler_params["xy_padding"] = xy_padding

    def get_predicted_shoebox(
        self,
        refl,
        tof_padding=30,
        xy_padding=5,
        save_to_cache=True,
        return_expt_id=True,
        reflection_type="observed",
        mask_model="ellipse",
        ellipse_mask_scale=1.0,
        background_model="linear2d",
    ):

        assert len(refl) == 1
        self.clear_shoebox_cache()

        refl_id = refl[0]["idx"]
        centroid = refl[0]["xyzcal.px"]
        if refl_id in self.shoebox_cache:
            if return_expt_id:
                return self.shoebox_cache[refl_id], refl["id"][0]
            return self.shoebox_cache[refl_id]

        refl = deepcopy(refl)
        refl["shoebox"] = flex.shoebox(
            refl["panel"],
            refl["bbox"],
            allocate=False,
            flatten=False,
        )
        experiment = self.af._get_experiments()[int(refl["id"][0])]

        refl["id"] = flex.int(1, 0)

        image_size = experiment.detector[0].get_image_size()
        tof_size = len(experiment.scan.get_property("time_of_flight"))
        if reflection_type == "observed":
            bbox = self.update_bounding_box(
                refl["bbox"][0],
                refl["xyzobs.px.value"][0],
                refl["xyzcal.px"][0],
                (int(xy_padding), int(xy_padding), int(tof_padding)),
                (0, image_size[0], 0, image_size[1], 0, tof_size),
            )
        else:
            bbox = self.update_bounding_box(
                refl["bbox"][0],
                refl["xyzcal.px"][0],
                refl["xyzcal.px"][0],
                (int(xy_padding), int(xy_padding), int(tof_padding)),
                (0, image_size[0], 0, image_size[1], 0, tof_size),
            )

        refl["bbox"] = flex.int6(1, bbox)

        refl["shoebox"] = flex.shoebox(
            refl["panel"], flex.int6(1, refl["bbox"][0]), allocate=False, flatten=False
        )

        tof_extract_shoeboxes_to_reflection_table(
            refl,
            experiment,
            experiment.imageset,
            False,
        )

        if mask_model == "seed_skewness":
            tof_calculate_seed_skewness_shoebox_mask(refl, experiment, 1e-7, 10)
        elif mask_model == "ellipse":
            tof_calculate_ellipse_shoebox_mask(refl, experiment, 1, ellipse_mask_scale)
        else:
            raise NotImplementedError(f"Unknown mask model {mask_model}")

        params = tof_integrate_phil_scope.fetch().extract()
        params.integration.background.simple.model.algorithm = background_model
        background_algorithm = SimpleBackgroundExt(
            params=params, experiments=[experiment]
        )
        success = background_algorithm.compute_background(refl)
        refl.set_flags(~success, refl.flags.failed_during_background_modelling)

        shoebox = refl["shoebox"][0]
        if save_to_cache:
            self.shoebox_cache[refl_id] = shoebox

        if return_expt_id:
            return shoebox, refl["id"][0], centroid
        return shoebox

    def calculate_bbox_sigma_b(self):
        reflections = self.af._get_reflection_table_raw()
        used_in_ref = reflections.get_flags(reflections.flags.used_in_refinement)
        model_reflections = reflections.select(used_in_ref)
        assert len(model_reflections) != 0
        experiment = self.af._get_experiment(0)

        self.bbox_sigma_b = ComputeEsdBeamDivergence(
            experiment.detector, model_reflections, centroid_definition="s1"
        ).sigma()

    def get_shoebox_mask_using_profile1d(self, shoebox, profile):
        data = flumpy.to_numpy(shoebox.data).copy()
        data = data - shoebox.background[0]
        profile_data = data * np.array(profile)[:, np.newaxis, np.newaxis]
        mask_data = flumpy.to_numpy(shoebox.mask)
        profile_mask_data = np.zeros_like(profile_data, dtype=mask_data.dtype)
        mask_data_2d = np.zeros(mask_data.shape[1:], dtype=mask_data.dtype)

        profile_data_2d = np.sum(profile_data, 0)
        profile_data_2d /= np.max(profile_data_2d)
        profile_data_2d = profile_data_2d.tolist()

        profile_mask_data[profile_data > 1] |= 1 << 2
        profile_mask_data[profile_data <= 1] |= 1 << 1

        # Add values from current mask_data
        profile_mask_data[mask_data & (1 << 0) != 0] |= 1 << 0
        profile_mask_data[mask_data & (1 << 3) != 0] |= 1 << 3
        profile_mask_data[mask_data & (1 << 5) != 0] |= 1 << 5

        # Check for Foreground (1 << 2 = 4) along z-axis
        foreground_any = np.any(profile_mask_data & (1 << 2), axis=0)
        # Check for Background (1 << 1 = 2) along z-axis
        background_any = np.any(profile_mask_data & (1 << 1), axis=0)

        # Set Foreground first (takes precedence)
        mask_data_2d[foreground_any] |= 1 << 2
        # Set Background where there's no Foreground
        mask_data_2d[~foreground_any & background_any] |= 1 << 1

        # Always set Valid bit where we set either Foreground or Background
        mask_data_2d[foreground_any | background_any] |= 1 << 0
        mask_data_2d = mask_data_2d.tolist()
        return (
            profile_data.tolist(),
            profile_mask_data.tolist(),
            profile_data_2d,
            mask_data_2d,
        )

    def get_shoebox_mask_using_profile3d(self, shoebox, profile_data):
        data = flumpy.to_numpy(shoebox.data).copy()
        data = data - shoebox.background[0]
        mask_data = flumpy.to_numpy(shoebox.mask)
        profile_data = np.reshape(profile_data, data.shape)
        profile_mask_data = np.zeros_like(profile_data, dtype=mask_data.dtype)
        mask_data_2d = np.zeros(mask_data.shape[1:], dtype=mask_data.dtype)

        profile_data_2d = np.sum(profile_data, 0)
        profile_data_2d /= np.max(profile_data_2d)
        profile_data_2d = profile_data_2d.tolist()

        profile_mask_data[profile_data > 1e-3] |= 1 << 2
        profile_mask_data[profile_data <= 1] |= 1 << 1

        # Add values from current mask_data
        profile_mask_data[mask_data & (1 << 0) != 0] |= 1 << 0
        profile_mask_data[mask_data & (1 << 3) != 0] |= 1 << 3
        profile_mask_data[mask_data & (1 << 5) != 0] |= 1 << 5

        # Check for Foreground (1 << 2 = 4) along z-axis
        foreground_any = np.any(profile_mask_data & (1 << 2), axis=0)
        # Check for Background (1 << 1 = 2) along z-axis
        background_any = np.any(profile_mask_data & (1 << 1), axis=0)

        # Set Foreground first (takes precedence)
        mask_data_2d[foreground_any] |= 1 << 2
        # Set Background where there's no Foreground
        mask_data_2d[~foreground_any & background_any] |= 1 << 1

        # Always set Valid bit where we set either Foreground or Background
        mask_data_2d[foreground_any | background_any] |= 1 << 0
        mask_data_2d = mask_data_2d.tolist()
        return (
            profile_data.tolist(),
            profile_mask_data.tolist(),
            profile_data_2d,
            mask_data_2d,
        )

    def get_shoebox_data_2d(self, shoebox):
        shoebox_data = flumpy.to_numpy(shoebox.data).copy()
        shoebox_data_2d = np.sum(shoebox_data, 0)
        shoebox_data_2d /= np.max(shoebox_data_2d)
        shoebox_data_2d = shoebox_data_2d.tolist()
        mask_data = flumpy.to_numpy(shoebox.mask)
        mask_data_2d = np.zeros(mask_data.shape[1:], dtype=mask_data.dtype)

        # Check for Foreground (1 << 2 = 4) along z-axis
        foreground_any = np.any(mask_data & (1 << 2), axis=0)
        # Check for Background (1 << 1 = 2) along z-axis
        background_any = np.any(mask_data & (1 << 1), axis=0)

        # Set Foreground first (takes precedence)
        mask_data_2d[foreground_any] |= 1 << 2
        # Set Background where there's no Foreground
        mask_data_2d[~foreground_any & background_any] |= 1 << 1

        # Always set Valid bit where we set either Foreground or Background
        mask_data_2d[foreground_any | background_any] |= 1 << 0
        mask_data_2d = mask_data_2d.tolist()
        return shoebox_data_2d, mask_data_2d

    def get_normalised_shoebox_data(self, shoebox):
        shoebox_data = flumpy.to_numpy(shoebox.data).copy()
        shoebox_data /= np.max(shoebox_data)
        shoebox_data = shoebox_data.tolist()
        mask_data = flumpy.to_numpy(shoebox.mask)
        mask_data = mask_data.tolist()
        return shoebox_data, mask_data

    def update_bounding_box(self, bbox, centroid, new_centroid, padding, image_size):
        diff_centroid = (
            new_centroid[0] - centroid[0],
            new_centroid[1] - centroid[1],
            new_centroid[2] - centroid[2],
        )

        updated_bbox = list(deepcopy(bbox))

        updated_bbox[0] += diff_centroid[0] - padding[0]
        updated_bbox[1] += diff_centroid[0] + padding[0]
        updated_bbox[2] += diff_centroid[1] - padding[1]
        updated_bbox[3] += diff_centroid[1] + padding[1]
        updated_bbox[4] += diff_centroid[2] - padding[2]
        updated_bbox[5] += diff_centroid[2] + padding[2]

        updated_bbox[0] = max(floor(updated_bbox[0]), image_size[0])
        updated_bbox[1] = min(ceil(updated_bbox[1]), image_size[1])
        updated_bbox[2] = max(floor(updated_bbox[2]), image_size[2])
        updated_bbox[3] = min(ceil(updated_bbox[3]), image_size[3])
        updated_bbox[4] = max(floor(updated_bbox[4]), image_size[4])
        updated_bbox[5] = min(ceil(updated_bbox[5]), image_size[5])

        return tuple(updated_bbox)
