import json
from os.path import isfile, join, basename
from algorithm_types import AlgorithmType
from typing import List, Dict, Tuple
import asyncio
from dials.command_line.import_xds import SpotXDSImporter
from iotbx.xds import spot_xds
from dials.array_family import flex

class XDSInterface:
    def __init__(self,  file_dir: str, filenames: list[str] | None):

        self.filenames = self.get_filenames(file_dir, filenames)
        self.file_paths = [join(file_dir, filename) for filename in self.filenames]
        self.file_dir = file_dir

    def get_expt_json(self, expt_file=None):
        if expt_file is None:
            expt_file = self.current_expt_file
        with open(expt_file, "r") as g:
            expt_file = json.load(g)
        return expt_file

    def get_filenames(self, file_dir: str , filenames: list[str] | None):
        if filenames is not None:
            return filenames
        imported_filepath = join(file_dir, "imported.expt")
        assert isfile(imported_filepath), "No filenames given and imported.expt does not exist"
        expt_json = self.get_expt_json(imported_filepath)
        return [basename(i["template"]) for i in expt_json["imageset"]]

    def generate_dials_reflection_table(self, spot_xds_path: str) -> None:
        handle = spot_xds.reader()
        handle.read_file(spot_xds_path)
        centroid = handle.centroid
        intensity = handle.intensity
        try:
            miller_index = handle.miller_index
        except AttributeError:
            miller_index = None

        table = flex.reflection_table()
        table["id"] = flex.int(len(centroid), 0)
        table["panel"] = flex.size_t(len(centroid), 0)
        if miller_index:
            table["miller_index"] = flex.miller_index(miller_index)
        table["xyzobs.px.value"] = flex.vec3_double(centroid)
        table["intensity.sum.value"] = flex.double(intensity)

        rt = flex.reflection_table.empty_standard(len(table))
        rt.update(table)
        table = rt
        # set variances to unity
        table["xyzobs.mm.variance"] = flex.vec3_double(len(table), (1, 1, 1))
        table["xyzobs.px.variance"] = flex.vec3_double(len(table), (1, 1, 1))

        table.as_file(join(self.file_dir, "strong.refl"))


    async def run(self, algorithm_type: AlgorithmType) -> Tuple[str, bool]:

        match algorithm_type:
            case AlgorithmType.xds_find_spots:

                # Convert imported.expt to XDS format
                algorithm_args = ["imported.expt", "format=xds"]
                self.active_process = await asyncio.create_subprocess_exec(
                    "dials.export",
                    *algorithm_args,
                    cwd=self.file_dir,
                    stdout=asyncio.subprocess.PIPE,
                    stderr=asyncio.subprocess.PIPE,
                )

                # Update input file
                with open(join(self.file_dir, "xds/XDS.INP", "r")) as g:
                    lines = g.readlines()
                with open(join(self.file_dir, "xds/XDS.INP", "w")) as g:
                    for line in lines:
                        if line.startswith("JOB="):
                            g.write("JOB=XYCORR INIT COLSPOT \n")
                        else:
                            g.write(line)

                # Run command
                self.active_process = await asyncio.create_subprocess_exec(
                    "/home/davidmcdonagh/XDS-INTEL64_Linux_x86_64/xds",
                    cwd=join(self.file_dir, "xds"),
                    stdout=asyncio.subprocess.PIPE,
                    stderr=asyncio.subprocess.PIPE,
                )

                # Convert to DIALS .refl
                self.generate_dials_reflection_table(
                    join(self.file_dir, "xds/SPOT.XDS")
                )




        """
        procrunner wrapper for xds commands.
        Converts log to html and returns it
        """

    """
    rerport -> update template .INP file,
    run XDSFileImporter
    ---> get_image_data then the same as dials interface
    run find_spots -> COLSPOT
    run SpotXDSImporter
    ---> get refl data per panel then same as dials interface
    run index -> IDXREF
    run XDSFileImporter
    ---> get crystal params 
    """