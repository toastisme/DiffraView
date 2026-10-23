"""Tools in the Utils menu."""

from ..router import command


class UtilsHandlers:
    @command("utils.generate_report")
    async def generate_report(self, msg):
        """dials.report of the current files, sent as generalReport."""
        try:
            path = await self.file_manager.selected_file.generate_report()
            with open(path, encoding="utf-8") as f:
                params = {"generalReport": f.read()}
        except (RuntimeError, OSError) as e:
            params = {"generalReportError": str(e)}
        await self.update_state("utils", params)
