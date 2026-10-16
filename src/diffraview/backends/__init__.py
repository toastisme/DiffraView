"""Processing backends. Each converts its output to DIALS .expt/.refl files."""

from ..app_types import SoftwareBackend
from ..processing.backend import Backend


def available_backends() -> list[SoftwareBackend]:
    """Backends DiffraView can run (others are not implemented yet)."""
    return [SoftwareBackend.DIALS]


def get_backend(software_backend: SoftwareBackend) -> Backend:
    match software_backend:
        case SoftwareBackend.DIALS:
            from .dials.backend import DIALSBackend

            return DIALSBackend()
    raise NotImplementedError(f"{software_backend.value} backend")
