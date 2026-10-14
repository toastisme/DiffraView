"""Loading third-party plugins."""

from ..dialogs import select_paths
from ..plugin_manager import PluginLoadError
from ..router import Run, command


class PluginHandlers:
    @command("browse_folder_for_plugin", run=Run.TASK)
    async def run_browse_folder_for_plugin(self, msg):
        folders = select_paths(msg, "Select a plugin folder", directory=True)
        if not folders:
            return
        try:
            plugin_info = self.plugin_manager.load(folders[0])
            await self.send(
                "gui", {"params": plugin_info}, command="update_plugin_params"
            )
        except PluginLoadError as e:
            await self.send(
                "gui", {"params": {"userMessage": str(e)}}, command="update_root_params"
            )

    @command("unload_plugin", run=Run.INLINE)
    async def run_unload_plugin(self, msg):
        self.plugin_manager.unload()
        await self.send(
            "gui",
            {"params": {"name": None, "viewerUrl": None, "actionsUrl": None, "logoUrl": None}},
            command="update_plugin_params",
        )
