"""Converts between DIALS Phil files and client tab params."""

from ...app_types import ExperimentType
from .params import full_path

# Flat/nested Phil keys to client context param names, per tab
PHIL_KEY_MAPS: dict[str, dict[str, str]] = {
    "find_spots": {
        "threshold.algorithm": "algorithm",
        "spotfinder.threshold.algorithm": "algorithm",
        "gain": "gain",
        "spotfinder.threshold.dispersion.gain": "gain",
        "sigma_strong": "sigmaStrong",
        "spotfinder.threshold.dispersion.sigma_strong": "sigmaStrong",
        "sigma_background": "sigmaBackground",
        "spotfinder.threshold.dispersion.sigma_background": "sigmaBackground",
        "global_threshold": "globalThreshold",
        "spotfinder.threshold.dispersion.global_threshold": "globalThreshold",
        "kernel_size": "kernelSize",
        "spotfinder.threshold.dispersion.kernel_size": "kernelSize",
        "min_local": "minLocal",
        "spotfinder.threshold.dispersion.min_local": "minLocal",
        "radial_profile.n_iqr": "iQR",
        "spotfinder.threshold.radial_profile.n_iqr": "iQR",
        "radial_profile.n_bins": "nBins",
        "spotfinder.threshold.radial_profile.n_bins": "nBins",
        "radial_profile.blur": "blur",
        "spotfinder.threshold.radial_profile.blur": "blur",
    },
    "index": {
        "indexing.method": "indexingMethod",
        "method": "indexingMethod",
        "indexing.known_symmetry.space_group": "initialSpacegroup",
        "known_symmetry.space_group": "initialSpacegroup",
        "space_group": "initialSpacegroup",
        "indexing.known_symmetry.unit_cell": "initialUnitCell",
        "known_symmetry.unit_cell": "initialUnitCell",
        "unit_cell": "initialUnitCell",
        "indexing.index_assignment.simple.hkl_tolerance": "hKLTolerance",
        "index_assignment.simple.hkl_tolerance": "hKLTolerance",
        "hkl_tolerance": "hKLTolerance",
        "refinement.reflections.outlier.algorithm": "outlierAlgorithm",
        "reflections.outlier.algorithm": "outlierAlgorithm",
    },
    "refine": {
        "refinement.parameterisation.beam.fix": "beamFix",
        "parameterisation.beam.fix": "beamFix",
        "beam.fix": "beamFix",
        "refinement.parameterisation.crystal.fix": "crystalFix",
        "parameterisation.crystal.fix": "crystalFix",
        "crystal.fix": "crystalFix",
        "refinement.parameterisation.detector.fix": "detectorFix",
        "parameterisation.detector.fix": "detectorFix",
        "detector.fix": "detectorFix",
        "refinement.parameterisation.goniometer.fix": "goniometerFix",
        "parameterisation.goniometer.fix": "goniometerFix",
        "goniometer.fix": "goniometerFix",
        "refinement.reflections.outlier.algorithm": "outlierAlgorithm",
        "reflections.outlier.algorithm": "outlierAlgorithm",
        "outlier.algorithm": "outlierAlgorithm",
    },
    "integrate": {
        "method": "integrateMethod",
        "integration_type": "integrateType",
        "calculated.dmin": "dmin",
        "mask": "maskModel",
        "background_model": "backgroundModel",
        "bbox_tof_padding": "tOFBBoxPadding",
        "bbox_xy_padding": "xYBBoxPadding",
        "corrections.lorentz": "applyLorentz",
        "corrections.incident_run": "vanadiumRun",
        "corrections.empty_run": "emptyRun",
        "corrections.absorption.incident_spectrum.sample_radius": "vanadiumRadius",
        "corrections.absorption.incident_spectrum.sample_number_density": "vanadiumDensity",
        "corrections.absorption.incident_spectrum.scattering_x_section": "vanadiumScatteringXSection",
        "corrections.absorption.incident_spectrum.absorption_x_section": "vanadiumAbsorptionXSection",
        "corrections.absorption.target_spectrum.sample_radius": "sampleRadius",
        "corrections.absorption.target_spectrum.sample_number_density": "sampleDensity",
        "corrections.absorption.target_spectrum.scattering_x_section": "sampleScatteringXSection",
        "corrections.absorption.target_spectrum.absorption_x_section": "sampleAbsorptionXSection",
    },
}

ROTATION_PHIL_KEY_MAPS: dict[str, dict[str, str]] = {
    "integrate": {
        "integration.profile.fitting": "profileFitting",
        "profile.fitting": "profileFitting",
        "integration.background.algorithm": "backgroundAlgorithm",
        "background.algorithm": "backgroundAlgorithm",
        "prediction.d_min": "dmin",
        "d_min": "dmin",
    },
    "scale": {
        "model": "model",
        "anomalous": "anomalous",
        "overwrite_existing_models": "overwriteExistingModels",
        "reflection_selection.method": "reflectionSelectionMethod",
        "reflection_selection.random.multi_dataset.Isigma_cutoff": "isigmaCutoff",
        "reflection_selection.best_unit_cell": "bestUnitCell",
        "weighting.error_model.basic.stills.min_Isigma": "stillsMinIsigma",
        "weighting.error_model.basic.stills.min_multiplicity": "stillsMinMultiplicity",
        "weighting.error_model.reset_error_model": "resetErrorModel",
        "weighting.error_model.error_model_group": "errorModelGroup",
        "scaling_options.check_consistent_indexing": "checkConsistentIndexing",
        "filtering.method": "filteringMethod",
        "filtering.deltacchalf.max_cycles": "maxCycles",
        "filtering.deltacchalf.max_percent_removed": "maxPercentRemoved",
        "filtering.deltacchalf.min_completeness": "minCompleteness",
        "filtering.deltacchalf.mode": "deltaCCHalfMode",
        "filtering.deltacchalf.group_size": "groupSize",
        "filtering.deltacchalf.stdcutoff": "stdCutoff",
    },
}

# Rotation tabs whose advanced options are a list of {path, value}, by program
_ROTATION_SEARCHABLE_TABS = {"find_spots": "dials.find_spots"}

# Rotation params set by a switch
_ROTATION_BOOL_PARAMS = (
    "profileFitting",
    "anomalous",
    "overwriteExistingModels",
    "resetErrorModel",
    "checkConsistentIndexing",
)
# Rotation params whose None is a choice, not an empty field
_ROTATION_NONE_VALUES = {"model": "Auto", "filteringMethod": "None"}

_ABSORPTION_PARAMS = (
    "vanadiumRadius",
    "vanadiumDensity",
    "vanadiumScatteringXSection",
    "vanadiumAbsorptionXSection",
    "sampleRadius",
    "sampleDensity",
    "sampleScatteringXSection",
    "sampleAbsorptionXSection",
)


def tab_phil_keys(tab: str, experiment_type=None) -> list[str]:
    """Phil keys set by the tab's own controls."""
    if experiment_type == ExperimentType.ROTATION:
        return list(ROTATION_PHIL_KEY_MAPS.get(tab) or PHIL_KEY_MAPS.get(tab, {}))
    return list(PHIL_KEY_MAPS.get(tab, {}))


def parse_phil(content: str) -> dict[str, str]:
    """Flatten nested Phil content to {dotted.key: value}."""
    return dict(parse_phil_items(content))


def parse_phil_items(content: str) -> list[tuple[str, str]]:
    """Flatten nested Phil content to (dotted.key, value) pairs, keeping repeats."""
    result = []
    scope_stack = []
    for line in content.splitlines():
        line = line.strip()
        if not line or line.startswith("#"):
            continue
        if line.endswith("{"):
            scope_stack.append(line[:-1].strip())
        elif line == "}":
            if scope_stack:
                scope_stack.pop()
        elif "=" in line:
            key, _, value = line.partition("=")
            key = key.strip()
            value = value.strip()
            # The choice Phil marks with * (e.g. "a *b c")
            starred = [v for v in value.split() if v.startswith("*")]
            if starred:
                value = starred[0][1:]
            full_key = ".".join(scope_stack + [key]) if scope_stack else key
            result.append((full_key, value))
    return result


def _special_find_spots(phil_key, value, params, file_manager) -> bool:
    if phil_key not in ("scan_range", "spotfinder.scan_range"):
        return False
    fr1_str, fr2_str = value.split(",")
    fr1, fr2 = int(fr1_str.strip()), int(fr2_str.strip())
    tof_min_val, tof_max_val = file_manager.scan_range_to_tof_range((fr1, fr2))
    params["currentMinTOF"] = tof_min_val
    params["currentMaxTOF"] = tof_max_val
    wl_min, wl_max = file_manager.tof_range_to_wavelength((tof_min_val, tof_max_val))
    params["currentMinWavelength"] = round(wl_min, 4)
    params["currentMaxWavelength"] = round(wl_max, 4)
    return True


def _special_refine(phil_key, value, params, file_manager) -> bool:
    if phil_key != "detector.hierarchy_level":
        return False
    params["optimizePanelsSeparately"] = value == "1"
    return True


def _special_integrate(phil_key, value, params, file_manager) -> bool:
    if phil_key != "wavelength_range":
        return False
    min_wl_str, max_wl_str = value.split(",")
    min_wl, max_wl = float(min_wl_str), float(max_wl_str)
    min_tof, max_tof = file_manager.wavelength_range_to_tof((min_wl, max_wl))
    params["currentMinWavelength"] = round(min_wl, 4)
    params["currentMaxWavelength"] = round(max_wl, 4)
    params["currentMinTOF"] = round(min_tof, 3)
    params["currentMaxTOF"] = round(max_tof, 3)
    return True


# Keys needing more than a rename; return True if handled
_SPECIAL_KEYS = {
    "find_spots": _special_find_spots,
    "refine": _special_refine,
    "integrate": _special_integrate,
}


def params_from_phil(
    tab: str, content: str, file_manager, experiment_type=None
) -> dict:
    """Client params for tab from Phil content; unknown keys go to advancedOptions."""
    if experiment_type == ExperimentType.ROTATION:
        return _rotation_params_from_phil(tab, content)
    key_map = PHIL_KEY_MAPS[tab]
    special = _SPECIAL_KEYS.get(tab)
    params = {}
    advanced_parts = []

    for phil_key, value in parse_phil(content).items():
        if phil_key in key_map:
            context_key = key_map[phil_key]
            if context_key == "applyLorentz":
                params[context_key] = value.lower() == "true"
            else:
                params[context_key] = value
            continue
        try:
            if special is not None and special(phil_key, value, params, file_manager):
                continue
        except (KeyError, ValueError, ZeroDivisionError):
            pass
        advanced_parts.append(f"{phil_key}={value}")

    if tab == "integrate":
        if "vanadiumRun" in params or "emptyRun" in params:
            params["applyIncidentSpectrum"] = True
        if any(k in params for k in _ABSORPTION_PARAMS):
            params["applyIncidentSpectrum"] = True
            params["applySphericalAbsorption"] = True

    params["advancedOptions"] = " ".join(advanced_parts)
    return params


def _rotation_params_from_phil(tab: str, content: str) -> dict:
    key_map = ROTATION_PHIL_KEY_MAPS.get(tab) or PHIL_KEY_MAPS[tab]
    params = {}
    advanced = []
    for phil_key, value in parse_phil_items(content):
        if phil_key not in key_map:
            advanced.append((phil_key, value))
            continue
        context_key = key_map[phil_key]
        if context_key in _ROTATION_BOOL_PARAMS:
            params[context_key] = value.lower() == "true"
        elif value == "None":
            params[context_key] = _ROTATION_NONE_VALUES.get(context_key, "")
        else:
            params[context_key] = value
    command = _ROTATION_SEARCHABLE_TABS.get(tab)
    if command is None:
        params["advancedOptions"] = " ".join(f"{k}={v}" for k, v in advanced)
    else:
        # Keys DIALS does not know are kept, so the tab can show them as invalid
        params["advancedOptions"] = [
            {"path": full_path(command, k) or k, "value": v} for k, v in advanced
        ]
    return params


def find_spots_phil_with_scan_range(content: str, tof_range, file_manager) -> str:
    """Append the scan_range matching tof_range to find_spots Phil content."""
    try:
        min_tof, max_tof, step_tof = file_manager.get_tof_range()
        num_images = (max_tof - min_tof) / step_tof
        tof_min_val, tof_max_val = tof_range
        fr1 = int(
            ((tof_min_val - min_tof) / (max_tof - min_tof)) * (num_images - 1) + 1
        )
        fr2 = int(
            ((tof_max_val - min_tof) / (max_tof - min_tof)) * (num_images - 1) + 1
        )
    except (KeyError, ZeroDivisionError):
        return content
    return content + f"\nspotfinder {{\n  scan_range = {fr1},{fr2}\n}}"
