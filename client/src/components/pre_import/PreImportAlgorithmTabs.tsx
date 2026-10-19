import {
  Tabs,
  TabsContent,
  TabsList,
} from "@/components/ui/tabs"
import { ProgressTabTrigger } from "@/components/ui/ProgressTabTrigger"
import { ImportTab } from "@/components/ImportTab"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faImages } from '@fortawesome/free-solid-svg-icons';
import { TabLoadingIndicator } from "@/components/ui/TabLoadingIndicator"
import { useImportContext } from "@/contexts/ImportContext";
import { Status } from "@/types";

// Before import no mode is known, so only the Import tab is shown
export function PreImportAlgorithmTabs() {

  const { status, progress } = useImportContext();
  const className = status === Status.Loading ? "border border-foreground flex-1"
    : status === Status.Failed ? "border border-red-500 flex-1" : "flex-1";

  return (
    <Tabs className="h-full flex flex-col" value="import">
      <TabsList className="flex gap-2 xl:gap-10 w-full">
        <ProgressTabTrigger value="import" progress={progress} className={className}>
          <TabLoadingIndicator loading={status === Status.Loading} />
          <FontAwesomeIcon icon={faImages} style={{ marginRight: '5px', marginTop: "0px" }} />Import
        </ProgressTabTrigger>
      </TabsList>
      <div className="pt-2 flex-1 min-h-0 grid grid-rows-1 grid-cols-1 min-w-0">
      <TabsContent className="mt-0 h-full" value="import" >
        <ImportTab/>
      </TabsContent>
      </div>
    </Tabs>
  )
}
