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

export function AppMenubar(){

  const { serverWS,
    activeSoftware,
    setActiveSoftware,
    clearActiveLog,
   } = useRootContext();

  const { 
    browseImagesEnabled, 
    setBrowseImagesEnabled,
   } = useImportContext();

   function updateActiveSoftware(value: string){
    const newSoftwareBackend = value as SoftwareBackend;
    if (newSoftwareBackend !== activeSoftware){
      clearActiveLog();
      setActiveSoftware(newSoftwareBackend);
    }
   }


  function browseImagesForImport() {
        serverWS.current?.send(JSON.stringify({
          "channel": "server",
          "command": "browse_files_for_import",
          "args": {},
          "activeSoftware" : activeSoftware
        }));
        setBrowseImagesEnabled(false);

  }

  function browseProcessingFolderForImport() {
        serverWS.current?.send(JSON.stringify({
          "channel": "server",
          "command": "browse_processing_folder_for_import",
          "activeSoftware" : activeSoftware,
          "args": {}
        }));
        setBrowseImagesEnabled(false);

  }

  return (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>File</MenubarTrigger>
        <MenubarContent>
          <MenubarItem disabled={!browseImagesEnabled} onClick={browseImagesForImport}>
            Load Images 
          </MenubarItem>
          <MenubarItem  disabled={!browseImagesEnabled} onClick={browseProcessingFolderForImport}>
            Load Data Processing Folder 
          </MenubarItem>
          <MenubarItem disabled>
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
        <MenubarRadioGroup value={activeSoftware} defaultValue="DIALS" onValueChange={(value: string) => updateActiveSoftware(value)}>
            <MenubarRadioItem value="DIALS">DIALS</MenubarRadioItem>
            <MenubarRadioItem value="XDS">XDS</MenubarRadioItem>
            <MenubarRadioItem disabled value="MANTID">Mantid</MenubarRadioItem>
          </MenubarRadioGroup>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  )
}