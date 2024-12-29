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

  const { serverWS } = useRootContext();

  const { 
    browseImagesEnabled, 
    setBrowseImagesEnabled,
    softwareBackend,
    setSoftwareBackend
   } = useImportContext();



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
        <MenubarRadioGroup value="DIALS" onValueChange={(value: string) => setSoftwareBackend(value as SoftwareBackend)}>
            <MenubarRadioItem value="DIALS">DIALS</MenubarRadioItem>
            <MenubarRadioItem disabled value="Mantid">Mantid</MenubarRadioItem>
            <MenubarRadioItem disabled value="XDS">XDS</MenubarRadioItem>
          </MenubarRadioGroup>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  )
}