import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarTrigger,
} from "@/components/ui/menubar"
import { useImportContext } from "@/contexts/ImportContext";
import { useRootContext } from "@/contexts/RootContext"
import { SoftwareBackend } from "@/types";
import { useState, useEffect } from "react";

const electron = typeof window !== 'undefined' && (window as any).require
  ? (window as any).require('electron')
  : null;
const ipcRenderer = electron?.ipcRenderer;

export function AppMenubar(){

  const { serverWS } = useRootContext();
  const [isMaximized, setIsMaximized] = useState(true);

  const {
    browseImagesEnabled,
    setBrowseImagesEnabled,
    softwareBackend,
    setSoftwareBackend
   } = useImportContext();

  useEffect(() => {
    if (!ipcRenderer) return;
    const handler = (_: unknown, maximized: boolean) => setIsMaximized(maximized);
    ipcRenderer.on('window-maximized', handler);
    return () => ipcRenderer.removeListener('window-maximized', handler);
  }, []);

  function browseImagesForImport() {
        serverWS.current?.send(JSON.stringify({
          "channel": "server",
          "command": "browse_files_for_import",
          "args": {},
          "softwareBackend" : softwareBackend
        }));
        setBrowseImagesEnabled(false);
  }

  function browseProcessingFolderForImport() {
        serverWS.current?.send(JSON.stringify({
          "channel": "server",
          "command": "browse_processing_folder_for_import",
          "softwareBackend" : softwareBackend,
          "args": {}
        }));
        setBrowseImagesEnabled(false);
  }

  const dragStyle: React.CSSProperties = { WebkitAppRegion: 'drag' } as React.CSSProperties;
  const noDragStyle: React.CSSProperties = { WebkitAppRegion: 'no-drag' } as React.CSSProperties;

  return (
    <div style={dragStyle} className="flex items-center w-full">
      <div style={noDragStyle} className="flex h-10 items-center rounded-md border bg-background w-full">
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
              <MenubarItem onClick={() => ipcRenderer?.send('close-window')}>
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
            <MenubarTrigger>Software</MenubarTrigger>
            <MenubarContent>
              <MenubarRadioGroup value="DIALS" onValueChange={(value: string) => setSoftwareBackend(value as SoftwareBackend)}>
                <MenubarRadioItem value="DIALS">DIALS</MenubarRadioItem>
                <MenubarRadioItem disabled value="Mantid">Mantid</MenubarRadioItem>
                <MenubarRadioItem disabled value="XDS">XDS</MenubarRadioItem>
              </MenubarRadioGroup>
            </MenubarContent>
          </MenubarMenu>
        </Menubar>

        <div className="flex items-center ml-auto">
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
        </div>
      </div>
    </div>
  )
}
