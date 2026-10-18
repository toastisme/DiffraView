"""Loading third-party plugins."""

from ..dialogs import select_paths
from ..plugin_manager import PluginLoadError
from ..router import Run, command


class PluginHandlers:
    @command("plugin.load", run=Run.TASK)
    async def run_browse_folder_for_plugin(self, msg):
        folders = select_paths(msg, "Select a plugin folder", directory=True)
        if not folders:
            return
        try:
            plugin_info = self.plugin_manager.load(folders[0])
            await self.update_state("plugin", plugin_info)
        except PluginLoadError as e:
            await self.update_state("root", {"userMessage": str(e)})

    @command("plugin.unload", run=Run.INLINE)
    async def run_unload_plugin(self, msg):
        self.plugin_manager.unload()
        await self.update_state(
            "plugin",
            {
                "name": None,
                "viewerUrl": None,
                "actionsUrl": None,
                "logoUrl": None,
            },
        )
