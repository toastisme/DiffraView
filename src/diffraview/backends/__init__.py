"""Processing backends. Each converts its output to DIALS .expt/.refl files."""

from ..app_types import SoftwareBackend
from ..processing.backend import Backend


def get_backend(software_backend: SoftwareBackend) -> Backend:
    match software_backend:
        case SoftwareBackend.DIALS:
            from .dials.backend import DIALSBackend

            return DIALSBackend()
    raise NotImplementedError(f"{software_backend.value} backend")
