import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarTrigger,
} from "@/components/ui/menubar"

export function AppMenubar(props:{
  setLog: React.Dispatch<React.SetStateAction<string>>
  log: string
  serverWS: React.MutableRefObject<WebSocket | null>
  browseImagesEnabled: boolean,
  setBrowseImagesEnabled: React.Dispatch<React.SetStateAction<boolean>>
}){

  function browseImagesForImport() {
        props.serverWS.current?.send(JSON.stringify({
          "channel": "server",
          "command": "browse_files_for_import",
          "args": {}
        }));
        props.setBrowseImagesEnabled(false);

  }

  function browseProcessingFolderForImport() {
        props.serverWS.current?.send(JSON.stringify({
          "channel": "server",
          "command": "browse_processing_folder_for_import",
          "args": {}
        }));
        props.setBrowseImagesEnabled(false);

  }

  return (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>File</MenubarTrigger>
        <MenubarContent>
          <MenubarItem disabled={!props.browseImagesEnabled} onClick={browseImagesForImport}>
            Load Images 
          </MenubarItem>
          <MenubarItem  disabled={!props.browseImagesEnabled} onClick={browseProcessingFolderForImport}>
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
        <MenubarRadioGroup value="DIALS">
            <MenubarRadioItem value="DIALS">DIALS</MenubarRadioItem>
            <MenubarRadioItem disabled value="Mantid">Mantid</MenubarRadioItem>
            <MenubarRadioItem disabled value="XDS">XDS</MenubarRadioItem>
          </MenubarRadioGroup>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  )
}