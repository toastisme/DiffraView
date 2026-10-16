"""Converts between DIALS Phil files and client tab params."""

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


def parse_phil(content: str) -> dict[str, str]:
    """Flatten nested Phil content to {dotted.key: value}."""
    result = {}
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
            # Strip leading * used by Phil to mark the selected enum value
            if value.startswith("*"):
                value = value[1:]
            full_key = ".".join(scope_stack + [key]) if scope_stack else key
            result[full_key] = value
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


def params_from_phil(tab: str, content: str, file_manager) -> dict:
    """Client params for tab from Phil content; unknown keys go to advancedOptions."""
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


def find_spots_phil_with_scan_range(content: str, tof_range, file_manager) -> str:
    """Append the scan_range matching tof_range to find_spots Phil content."""
    try:
        min_tof, max_tof, step_tof = file_manager.get_tof_range()
        num_images = (max_tof - min_tof) / step_tof
        tof_min_val, tof_max_val = tof_range
        fr1 = int(((tof_min_val - min_tof) / (max_tof - min_tof)) * (num_images - 1) + 1)
        fr2 = int(((tof_max_val - min_tof) / (max_tof - min_tof)) * (num_images - 1) + 1)
    except (KeyError, ZeroDivisionError):
        return content
    return content + f"\nspotfinder {{\n  scan_range = {fr1},{fr2}\n}}"
