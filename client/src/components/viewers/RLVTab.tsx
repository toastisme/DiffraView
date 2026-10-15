import { useRef } from "react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { ProgressTabTrigger } from "@/components/ui/ProgressTabTrigger"
import { TabLoadingIndicator } from "@/components/ui/TabLoadingIndicator"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTh, faThLarge } from "@fortawesome/free-solid-svg-icons"
import { useRLVContext } from "@/contexts/RLVContext"
import { useRootContext } from "@/contexts/RootContext"
import { Status } from "@/types"
import { viewerUrl } from "@/lib/server"
import { serverMessage } from "@/lib/protocol"
import { useSyncHidden } from "./useSyncHidden"

export function RLVTrigger() {
  const { serverWS } = useRootContext();
  const { status, enabled, progress } = useRLVContext();
  return (
    <ProgressTabTrigger
      progress={progress}
      className={status === Status.Loading ? "border border-white flex-1" : "flex-1"}
      value="rlv"
      disabled={!enabled}>
      <TabLoadingIndicator
        loading={status === Status.Loading}
        onCancel={() => serverWS.current?.send(serverMessage("rlv.mesh.cancel"))} />
      <FontAwesomeIcon icon={faTh} style={{ marginRight: '5px', marginTop: "0px" }} />
      Reciprocal Lattice
    </ProgressTabTrigger>
  );
}

type ColorMode = "orientation" | "crystal" | "resolution";

export function RLVPanel() {
  const { serverWS, capabilities } = useRootContext();
  const {
    status,
    setHidden,
    colorMode,
    setColorMode,
    meshVisible,
    setMeshVisible,
  } = useRLVContext();
  useSyncHidden("rlv", setHidden);

  const meshVisibleRef = useRef(meshVisible);
  const meshAvailable = capabilities.features.includes("reciprocal_space_mesh");

  function setView(view: ColorMode) {
    setColorMode(view);
    serverWS.current?.send(serverMessage("rlv.set_view", { "view": view }));
  }

  function toggleReciprocalSpaceMesh() {
    setMeshVisible(!meshVisibleRef.current);
    meshVisibleRef.current = !meshVisibleRef.current;
    serverWS.current?.send(
      serverMessage(meshVisibleRef.current ? "rlv.mesh.show" : "rlv.mesh.hide")
    );
  }

  return (
    <Card className={status === Status.Loading ? "h-full w-full overflow-y-hidden border border-white" : "h-full w-full overflow-y-hidden"}>
      <CardContent className="h-4/6 overflow-y-hidden">
        <iframe scrolling="no" src={viewerUrl("src/assets/ReciprocalLatticeViewer/ReciprocalLatticeViewerHeadless.html")} className="w-full h-full overflow-y-hidden">
        </iframe>
      </CardContent>
      <CardFooter>
        <div style={{ display: 'flex', alignItems: 'center', margin: "0px 0px 5px 5px", gap: '12px' }}>
          <span style={{ fontWeight: 'bold', fontSize: '0.875rem' }}>Color by</span>
          <Select value={colorMode} onValueChange={(value) => setView(value as ColorMode)}>
            <SelectTrigger style={{ width: '140px', height: '36px' }}>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="orientation">Orientation</SelectItem>
              <SelectItem value="crystal">Crystal</SelectItem>
              <SelectItem value="resolution">Resolution</SelectItem>
            </SelectContent>
          </Select>
        </div>
        {meshAvailable && (
          <Button disabled={false}
            onClick={toggleReciprocalSpaceMesh}
            variant="outline" style={{ margin: "0px 0px 5px 5px", padding: "0px 6px", ...(meshVisible ? { backgroundColor: '#a8d5a2', borderColor: '#a8d5a2', color: '#1a3a1a' } : {}) }}
          ><FontAwesomeIcon icon={faThLarge} style={{ marginRight: '5px', marginTop: "-2px" }} /> Reciprocal Mesh</Button>
        )}
      </CardFooter>
    </Card>
  );
}
