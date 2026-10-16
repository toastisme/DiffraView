import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarTrigger,
} from "@/components/ui/menubar"
import { useImportContext } from "@/contexts/ImportContext";
import { useRootContext } from "@/contexts/RootContext"
import { usePluginContext } from "@/contexts/PluginContext"
import { SoftwareBackend } from "@/types";
import { useState, useEffect } from "react";
import { ipcRenderer, isMacDesktop, withSelectedPaths } from "@/lib/electron";

type Theme = "dark" | "light";

function applyTheme(theme: Theme) {
  const root = document.documentElement;
  if (theme === "dark") {
    root.classList.add("dark");
  } else {
    root.classList.remove("dark");
  }
  localStorage.setItem("diffraview-theme", theme);
}

export function AppMenubar(){

  const { serverWS } = useRootContext();
  const [isMaximized, setIsMaximized] = useState(true);
  const [theme, setTheme] = useState<Theme>(() => {
    const saved = localStorage.getItem("diffraview-theme") as Theme | null;
    return saved ?? "dark";
  });

  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  const {
    browseImagesEnabled,
    setBrowseImagesEnabled,
    softwareBackend,
    setSoftwareBackend
   } = useImportContext();

  const { pluginName, activePlugin, selectPlugin } = usePluginContext();

  async function loadPlugin() {
    serverWS.current?.send(await withSelectedPaths({
      "channel": "server",
      "command": "browse_folder_for_plugin",
    }, { title: "Select a plugin folder", directory: true }));
  }

  useEffect(() => {
    if (!ipcRenderer) return;
    const handler = (_: unknown, maximized: boolean) => setIsMaximized(maximized);
    ipcRenderer.on('window-maximized', handler);
    return () => ipcRenderer.removeListener('window-maximized', handler);
  }, []);

  async function browseImagesForImport() {
        setBrowseImagesEnabled(false);
        serverWS.current?.send(await withSelectedPaths({
          "channel": "server",
          "command": "browse_files_for_import",
          "args": {},
          "softwareBackend" : softwareBackend
        }, { title: "Select files", multiple: true }));
  }

  async function browseProcessingFolderForImport() {
        setBrowseImagesEnabled(false);
        serverWS.current?.send(await withSelectedPaths({
          "channel": "server",
          "command": "browse_processing_folder_for_import",
          "softwareBackend" : softwareBackend,
          "args": {}
        }, { title: "Select a folder for processing", directory: true }));
  }

  const dragStyle: React.CSSProperties = { WebkitAppRegion: 'drag' } as React.CSSProperties;
  const noDragStyle: React.CSSProperties = { WebkitAppRegion: 'no-drag' } as React.CSSProperties;

  return (
    <div style={dragStyle} className="flex items-center w-full">
      <div style={noDragStyle} className="flex h-10 items-center rounded-md border bg-background w-full">
        {/* Room for the native macOS window buttons, and somewhere to drag the window by. */}
        {isMacDesktop && <div style={dragStyle} className="w-[72px] h-full shrink-0" />}
        <Menubar className="border-0 rounded-none bg-transparent shadow-none">
          <MenubarMenu>
            <MenubarTrigger>File</MenubarTrigger>
            <MenubarContent>
              <MenubarItem disabled={!browseImagesEnabled} onClick={browseImagesForImport}>
                Load Images
              </MenubarItem>
              <MenubarItem disabled={!browseImagesEnabled} onClick={browseProcessingFolderForImport}>
                Load Data Processing Folder
              </MenubarItem>
              <MenubarItem onClick={() => ipcRenderer?.send('quit-app')}>
                Quit
              </MenubarItem>
            </MenubarContent>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger>Help</MenubarTrigger>
            <MenubarContent>
              <MenubarItem disabled>
                Documentation
              </MenubarItem>
              <MenubarItem disabled>
                Tutorials
              </MenubarItem>
            </MenubarContent>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger>Appearance</MenubarTrigger>
            <MenubarContent>
              <MenubarRadioGroup value={theme} onValueChange={(value: string) => setTheme(value as Theme)}>
                <MenubarRadioItem value="dark">Dark</MenubarRadioItem>
                <MenubarRadioItem value="light">Light</MenubarRadioItem>
              </MenubarRadioGroup>
            </MenubarContent>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger>Software</MenubarTrigger>
            <MenubarContent>
              <MenubarRadioGroup value="DIALS" onValueChange={(value: string) => setSoftwareBackend(value as SoftwareBackend)}>
                <MenubarRadioItem value="DIALS">DIALS</MenubarRadioItem>
                <MenubarRadioItem disabled value="Mantid">Mantid</MenubarRadioItem>
                <MenubarRadioItem disabled value="XDS">XDS</MenubarRadioItem>
              </MenubarRadioGroup>
            </MenubarContent>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger>Plugins</MenubarTrigger>
            <MenubarContent>
              <MenubarRadioGroup
                value={activePlugin ?? "None"}
                onValueChange={(value: string) => selectPlugin(value === "None" ? null : value)}
              >
                <MenubarRadioItem value="None">None</MenubarRadioItem>
                {pluginName && (
                  <MenubarRadioItem value={pluginName}>{pluginName}</MenubarRadioItem>
                )}
              </MenubarRadioGroup>
              <MenubarSeparator />
              <MenubarItem onClick={loadPlugin}>
                Load Plugin...
              </MenubarItem>
            </MenubarContent>
          </MenubarMenu>
        </Menubar>

        {!isMacDesktop && <div className="flex items-center ml-auto">
          <button
            onClick={() => ipcRenderer?.send('minimize-window')}
            className="w-10 h-10 flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
            title="Minimise"
          >
            &#x2212;
          </button>
          <button
            onClick={() => ipcRenderer?.send('maximize-window')}
            className="w-10 h-10 flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-accent transition-colors text-xs"
            title={isMaximized ? "Restore" : "Maximise"}
          >
            {isMaximized ? '❐' : '□'}
          </button>
          <button
            onClick={() => ipcRenderer?.send('close-window')}
            className="w-10 h-10 flex items-center justify-center rounded-r-md text-muted-foreground hover:text-white hover:bg-red-600 transition-colors"
            title="Close"
          >
            &#x2715;
          </button>
        </div>}
      </div>
    </div>
  )
}
