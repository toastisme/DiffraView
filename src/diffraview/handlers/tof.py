"""Time-of-flight specific features."""

import numpy as np
from dxtbx import flumpy
from ..processing.steps import StepId
from ..router import Run, command


class TOFHandlers:
    @command("tof.set_range", run=Run.INLINE, requires="tof_range")
    async def update_tof_range(self, msg):

        try:
            if "current_wavelength_min" in msg and "current_wavelength_max" in msg:
                wavelength_range = (
                    msg["current_wavelength_min"],
                    msg["current_wavelength_max"],
                )
                fr1, fr2 = self.file_manager.tof_range_to_scan_range(
                    wavelength_range=wavelength_range
                )
            else:
                tof_range = (msg["current_tof_min"], msg["current_tof_max"])
                fr1, fr2 = self.file_manager.tof_range_to_scan_range(
                    tof_range=tof_range
                )

            self.file_manager.update_selected_file_arg(
                step_id=StepId.FIND_SPOTS,
                param_name="scan_range",
                param_value=f"{fr1},{fr2}",
            )

            tof_min_val, tof_max_val = self.file_manager.scan_range_to_tof_range(
                (fr1, fr2)
            )
            wl_min, wl_max = self.file_manager.tof_range_to_wavelength(
                (tof_min_val, tof_max_val)
            )
            await self.update_state("find_spots", {
                        "currentMinTOF": tof_min_val,
                        "currentMaxTOF": tof_max_val,
                        "currentMinWavelength": round(wl_min, 4),
                        "currentMaxWavelength": round(wl_max, 4),
                    })
        except (KeyError, ValueError, ZeroDivisionError):
            pass

    @command("lineplot.update", run=Run.TASK, requires="lineplot")
    async def update_lineplot(self, msg):
        await self.send(
            "experiment_viewer", {"expt_id": msg["expt_id"]}, command="select_expt"
        )
        coords = (int(msg["panel_pos"][0]), int(msg["panel_pos"][1]))
        print(f"{msg=}")
        reflection_type = "observed"
        if "type" in msg:
            reflection_type = msg["type"]
        (
            x,
            y,
            bbox_pos,
            centroid_pos,
            calculated_bbox_pos,
        ) = await self.file_manager.get_lineplot_data(
            int(msg["panel_idx"]), coords, int(msg["expt_id"]), reflection_type
        )

        root_params = {}

        if "reflection_id" in msg:
            root_params["selectedReflectionID"] = msg["reflection_id"]

        elif len(centroid_pos) > 0:
            root_params["selectedReflectionID"] = centroid_pos[0]["id"]

        experiment_viewer_params = {
            "lineplot": {
                "x": x,
                "y": y,
            },
            "bboxPos": bbox_pos,
            "calculatedBboxPos": calculated_bbox_pos,
            "centroidPos": centroid_pos,
            "title": f"{msg['name']} {coords}",
        }

        if "expt_id" in msg:
            root_params["selectedReflectionTableExptID"] = msg["expt_id"]

        if "remove_reflection" in msg and msg["remove_reflection"] is True:
            await self.update_state("experiment_viewer", experiment_viewer_params)
            return

        await self.update_state("experiment_viewer", experiment_viewer_params)
        await self.update_state("root", root_params)

        if "highlight_on_panel" in msg and msg["highlight_on_panel"] is True:
            experiment_viewer_msg = {
                "name": msg["name"],
                "panelIdx": msg["panel_idx"],
                "panelPos": msg["panel_pos"],
            }
            await self.send(
                "experiment_viewer",
                experiment_viewer_msg, command="highlight_reflection"
            )

            if "reflection_id" in msg:
                rlp = self.file_manager.get_rlp_for_reflection(
                    int(msg["reflection_id"])
                )
                if rlp is not None:
                    await self.send("rlv", {"rlp": rlp}, command="highlight_reflection")

        if "update_integration_profiler" in msg and msg["update_integration_profiler"]:
            assert "reflection_id" in msg
            await self.update_integration_profiler(msg)

    @command(
        "profiler.update", run=Run.TASK, requires="integration_profiler"
    )
    async def update_integration_profiler(self, msg):

        self.active_task_name = "integration_profiler"
        integration_profiler_params = {}
        integrate_params = {}

        # Clear data
        if "erase_data" in msg and msg["erase_data"]:
            integration_profiler_params["summationValue"] = 0
            integration_profiler_params["summationSigma"] = 0
            integration_profiler_params["profile1DIBIXValue"] = 0
            integration_profiler_params["profile1DIBIXSigma"] = 0
            integration_profiler_params["profile1DICValue"] = 0
            integration_profiler_params["profile1DICSigma"] = 0
            integration_profiler_params["profile3DGutmannValue"] = 0
            integration_profiler_params["profile3DGutmannSigma"] = 0
            integration_profiler_params["profile3DICValue"] = 0
            integration_profiler_params["profile3DICSigma"] = 0
            integration_profiler_params["profile3DIBIXValue"] = 0
            integration_profiler_params["profile3DIBIXSigma"] = 0
            await self.send("shoebox_viewer", {}, command="clear_shoebox")
            await self.update_state("integration_profiler", {
                        "shoebox2D": [],
                        "shoeboxMaskEllipse2D": [],
                        "shoeboxMaskSeedSkewness2D": [],
                        "shoeboxMaskProfile1D2D": [],
                        "shoeboxMaskProfile3D2D": [],
                        "lineProfile1DIBIX": [],
                        "lineProfile1DIC": [],
                        "lineProfile3DGutmann": [],
                        "lineProfile3DIC": [],
                        "lineProfile3DIBIX": [],
                    })

        refl_id = msg["reflection_id"]

        results = self.file_manager.get_line_integration_for_reflection(refl_id, msg)
        success = results["success"]
        tof = results["tof"]
        raw_intensity = results["projected_raw_intensity"]
        projected_intensity = results["projected_corrected_intensity"]
        projected_background = results["projected_background"]
        fit_intensity = results["prf_intensity"]
        fit_sigma = results["prf_sigma"]
        summation_intensity = results["sum_intensity"]
        summation_sigma = results["sum_sigma"]
        refl = results["refl"]
        profile_failure_summary = results["profile_failure_summary"]

        if not success:
            integration_profiler_params["status"] = "Failed"
            if profile_failure_summary is not None:
                await self.update_state(
                    "root", {"userMessage": profile_failure_summary}
                )
            await self.update_state("integration_profiler", integration_profiler_params)
            return

        mask_model = msg["mask_model"]
        integration_method = msg["method"]

        integration_profiler_params["tOF"] = tof.tolist()
        integration_profiler_params["rawIntensity"] = raw_intensity.tolist()
        integration_profiler_params["intensity"] = projected_intensity.tolist()
        integration_profiler_params["background"] = projected_background.tolist()
        integration_profiler_params["partiality"] = refl[0]["partiality"]
        shoebox = refl[0]["shoebox"]
        if fit_sigma <= 0 and integration_method != "summation":
            if profile_failure_summary is not None:
                msg = profile_failure_summary
            else:
                msg = "Failed to optimise to a non-trivial solution"
            await self.update_state("root", {"userMessage": msg})
            await self.update_state("integration_profiler", {
                        "status": "Failed",
                    })
            return

        profile_mask_data = None
        profile_mask_data_2d = None

        if integration_method == "profile_1d_ibix":
            line_profile = np.array(results["line_profile"])
            integration_profiler_params["lineProfile1DIBIX"] = tuple(line_profile)
            integration_profiler_params["profile1DIBIXValue"] = fit_intensity
            integration_profiler_params["profile1DIBIXSigma"] = fit_sigma
            _, profile_mask_data, _, profile_mask_data_2d = (
                self.file_manager.get_shoebox_mask_using_profile1d(
                    shoebox, line_profile
                )
            )
            integrate_params["profile1DIBIXAlpha"] = round(
                results["profile_1d_ibix_alpha"], 3
            )
            integrate_params["profile1DIBIXBeta"] = round(
                results["profile_1d_ibix_beta"], 3
            )
            integrate_params["profile1DIBIXA"] = round(results["profile_1d_ibix_A"], 3)

        elif integration_method == "profile_1d_ic":
            line_profile = np.array(results["line_profile"])
            integration_profiler_params["lineProfile1DIC"] = tuple(line_profile)
            integration_profiler_params["profile1DICValue"] = fit_intensity
            integration_profiler_params["profile1DICSigma"] = fit_sigma
            _, profile_mask_data, _, profile_mask_data_2d = (
                self.file_manager.get_shoebox_mask_using_profile1d(
                    shoebox, line_profile
                )
            )
            integrate_params["profile1DICA"] = round(results["profile_1d_ic_A"], 3)
            integrate_params["profile1DICB"] = round(results["profile_1d_ic_B"], 3)
            integrate_params["profile1DICR"] = round(results["profile_1d_ic_R"], 3)

        elif integration_method == "profile_3d_gutmann":
            line_profile_3d = flumpy.to_numpy(results["profile_3d_gutmann"]).sum(
                axis=(0, 1)
            )
            integration_profiler_params["lineProfile3DGutmann"] = tuple(line_profile_3d)
            integration_profiler_params["profile3DGutmannValue"] = fit_intensity
            integration_profiler_params["profile3DGutmannSigma"] = fit_sigma
            integrate_params["profile3DGutmannAlpha"] = round(
                results["profile_3d_gutmann_alpha"], 3
            )
            integrate_params["profile3DGutmannBeta"] = round(
                results["profile_3d_gutmann_beta"], 3
            )
            profile_3d = flumpy.to_numpy(results["profile_3d_gutmann"])
            profile_3d = np.transpose(profile_3d, axes=(2, 1, 0))
            _, profile_mask_data, _, profile_mask_data_2d = (
                self.file_manager.get_shoebox_mask_using_profile3d(shoebox, profile_3d)
            )

        elif integration_method == "profile_3d_ic":
            line_profile_3d_ic = flumpy.to_numpy(results["profile_3d_ic"]).sum(
                axis=(0, 1)
            )
            integration_profiler_params["lineProfile3DIC"] = tuple(line_profile_3d_ic)
            integration_profiler_params["profile3DICValue"] = fit_intensity
            integration_profiler_params["profile3DICSigma"] = fit_sigma
            integrate_params["profile3DICInitA"] = round(
                results["profile_3d_ic_init_A"], 3
            )
            integrate_params["profile3DICInitB"] = round(
                results["profile_3d_ic_init_B"], 3
            )
            profile_3d = flumpy.to_numpy(results["profile_3d_ic"])
            profile_3d = np.transpose(profile_3d, axes=(2, 1, 0))
            _, profile_mask_data, _, profile_mask_data_2d = (
                self.file_manager.get_shoebox_mask_using_profile3d(shoebox, profile_3d)
            )

        elif integration_method == "profile_3d_ibix":
            line_profile_3d_ibix = flumpy.to_numpy(results["profile_3d_ibix"]).sum(
                axis=(0, 1)
            )
            integration_profiler_params["lineProfile3DIBIX"] = tuple(
                line_profile_3d_ibix
            )
            integration_profiler_params["profile3DIBIXValue"] = fit_intensity
            integration_profiler_params["profile3DIBIXSigma"] = fit_sigma
            integrate_params["profile3DIBIXAlpha"] = round(
                results["profile_3d_ibix_alpha"], 3
            )
            integrate_params["profile3DIBIXBeta"] = round(
                results["profile_3d_ibix_beta"], 3
            )
            profile_3d = flumpy.to_numpy(results["profile_3d_ibix"])
            profile_3d = np.transpose(profile_3d, axes=(2, 1, 0))
            _, profile_mask_data, _, profile_mask_data_2d = (
                self.file_manager.get_shoebox_mask_using_profile3d(shoebox, profile_3d)
            )

        integration_profiler_params["summationValue"] = summation_intensity
        integration_profiler_params["summationSigma"] = summation_sigma

        await self.update_state("integration_profiler", integration_profiler_params)
        await self.update_state("integrate", integrate_params)

        x0, x1, y0, y1, z0, z1 = shoebox.bbox
        bbox_lengths = [z1 - z0, y1 - y0, x1 - x0]

        shoebox_data, mask_data = self.file_manager.get_normalised_shoebox_data(shoebox)
        shoebox_data_2d, mask_data_2d = self.file_manager.get_shoebox_data_2d(shoebox)

        # Always send the summation (geometric-mask) view first so the 3D
        # viewer has a baseline, then overlay the profile mask when available.
        await self.send(
            "shoebox_viewer",
            {
                "data": shoebox_data,
                "mask": mask_data,
                "bbox_lengths": bbox_lengths,
                "integration_method": "summation",
            },
            command="update_reflection",
        )
        if profile_mask_data is not None:
            await self.send(
                "shoebox_viewer",
                {
                    "data": shoebox_data,
                    "mask": profile_mask_data,
                    "bbox_lengths": bbox_lengths,
                    "integration_method": integration_method,
                },
                command="update_reflection",
            )

        # 2D heatmap – geometric mask is determined by mask_model; profile
        # mask (if computed) is added on top for profile integration methods.
        heatmap_params = {"shoebox2D": shoebox_data_2d}
        if mask_model == "seed_skewness":
            heatmap_params["shoeboxMaskSeedSkewness2D"] = mask_data_2d
        else:
            heatmap_params["shoeboxMaskEllipse2D"] = mask_data_2d

        if integration_method in ("profile_1d_ibix", "profile_1d_ic"):
            heatmap_params["shoeboxMaskProfile1D2D"] = profile_mask_data_2d
        elif integration_method in (
            "profile_3d_gutmann",
            "profile_3d_ic",
            "profile_3d_ibix",
        ):
            heatmap_params["shoeboxMaskProfile3D2D"] = profile_mask_data_2d

        await self.update_state("integration_profiler", heatmap_params)
