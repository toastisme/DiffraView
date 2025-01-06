import json
from os.path import isfile, join, basename
from app_types import (
	AlgorithmType,
    BackendAlgorithm,
    Status,
    AlgorithmStatus)
from typing import List, Dict, Tuple
import asyncio
from iotbx.xds import spot_xds
from dials.array_family import flex
from dxtbx.serialize import load

class XDSInterface:
    def __init__(self,  file_dir: str, filenames: list[str] | None):

        self.filenames = self.get_filenames(file_dir, filenames)
        self.file_paths = [join(file_dir, filename) for filename in self.filenames]
        self.current_expt_file = None
        self.current_refl_file = None
        self.file_dir = file_dir
        self.setup_algorithms(filenames)

    def setup_algorithms(self, filenames: list[str]):
        self.algorithms = {
            AlgorithmType.xds_find_spots: BackendAlgorithm(
                name=AlgorithmType.dials_find_spots,
                command="xds/xds",
                args={},
                log="",
                status=Status.Default,
                output_log_files=["dials.find_spots.log"],
                selected_files=[],
                required_files=["imported.expt"],
                output_experiment_file="imported.expt",
                output_reflections_file="strong.refl",
            ),
        }

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
        with open(spot_xds_path, "r") as g:
            lines = g.readlines()

        centroid_mm = []
        intensity = []
        panel = []

        for line in lines:
            ls = line.split()
            centroid_mm.append(tuple([float(t) for t in ls[0:3]]))
            intensity.append(float(ls[3]))
            try:
                panel.append(int(ls[-1]))
            except ValueError:
                panel.append(0)
        
        table = flex.reflection_table()
        table["id"] = flex.int(len(centroid_mm), 0)
        table["panel"] = flex.size_t(panel)
        table["xyzobs.px.value"] = flex.vec3_double(centroid_mm)
        table["intensity.sum.value"] = flex.double(intensity)

        rt = flex.reflection_table.empty_standard(len(table))
        rt.update(table)
        table = rt
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
                with open(join(self.file_dir, "xds/XDS.INP"), "r") as g:
                    lines = g.readlines()
                with open(join(self.file_dir, "xds/XDS.INP"), "w") as g:
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
                stdout, stderr = await self.active_process.communicate()

                # Convert to DIALS .refl
                self.generate_dials_reflection_table(
                    join(self.file_dir, "xds/SPOT.XDS")
                )

                log = stdout.decode()
                self.last_algorithm_status = AlgorithmStatus.finished
                self.last_algorithm_output = log
                self.algorithms[algorithm_type].log = log
                self.algorithms[algorithm_type].status = Status.Default
                self.current_expt_file = join(self.file_dir, "imported.expt")
                self.current_refl_file = join(self.file_dir, "strong.refl")

    def set_args(self, algorithm_type: AlgorithmType, args: Dict[str, str]) -> None:
        return




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