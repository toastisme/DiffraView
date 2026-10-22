"""HTML report of the processing so far (dials.report)."""

from __future__ import annotations

from os import remove
from os.path import isfile, join, relpath

from ...processing.runner import run_command

REPORT_FILE = "dials.report.html"


async def generate_report(expt: str, refl: str | None, processing_dir: str) -> str:
    """Write REPORT_FILE for expt (and refl); returns its path."""
    report_path = join(processing_dir, REPORT_FILE)
    if isfile(report_path):
        remove(report_path)
    files = [relpath(f, processing_dir) for f in (expt, refl) if f]
    argv = ["dials.report", *files, f"output.html={REPORT_FILE}"]
    stdout, stderr = await run_command(argv, cwd=processing_dir)
    if not isfile(report_path):
        raise RuntimeError(f"dials.report failed:\n{stderr or stdout}")
    return report_path
