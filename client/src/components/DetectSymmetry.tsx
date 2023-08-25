import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  SelectableTableRow
} from "@/components/ui/table"
import { BravaisLattice} from "@/types"
import { useState, useRef, useEffect } from "react"
 
export function DetectSymmetryDialog(
  props:{
    bravaisLattices: BravaisLattice[], 
    selectedBravaisLatticeId: string,
    setSelectedBravaisLatticeId: React.Dispatch<React.SetStateAction<string>>,
	open: boolean,
	setOpen: React.Dispatch<React.SetStateAction<boolean>>,
    serverWS: React.MutableRefObject<WebSocket | null>}) {

	function runRefine(){
		props.serverWS.current?.send(JSON.stringify({
					"channel" : "server",
					"command" : "dials.refine",
					"id" : props.selectedBravaisLatticeId
    }))

	}

  return (
    <Dialog open={props.open} onOpenChange={() => {props.setOpen(!props.open)}}>
      <DialogContent className="sm:max-w-[1525px] overflow-scroll h-[600px]">
        <DialogHeader>
          <DialogTitle>Bravais Lattices</DialogTitle>
          <DialogDescription>
			Select a Bravais Lattice to reindex observed reflections. Clicking
			Refine will then optimise the new model against observed reflections.
          </DialogDescription>
		<BravaisLatticeTable 
    bravaisLattices={props.bravaisLattices} 
    selectedBravaisLatticeId={props.selectedBravaisLatticeId}
    setSelectedBravaisLatticeId={props.setSelectedBravaisLatticeId}
    serverWS={props.serverWS}></BravaisLatticeTable>
        </DialogHeader>
        <DialogFooter>
          <Button onClick={runRefine}>Refine</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export function BravaisLatticeTable(props: {
  bravaisLattices: BravaisLattice[], 
  selectedBravaisLatticeId: string,
  setSelectedBravaisLatticeId: React.Dispatch<React.SetStateAction<string>>,
  serverWS: React.MutableRefObject<WebSocket | null>}) {

  var sheetContentElement = document.getElementById("detect-symmetry-sheet");
  const [showScrollButton, setShowScrollButton] = useState(false);

  function clickedBravaisLattice(bravaisLattice: BravaisLattice){

    props.setSelectedBravaisLatticeId(bravaisLattice.id);
  }
  const selectedRowElement: React.MutableRefObject<null | HTMLTableRowElement> = useRef(null);

  useEffect(() => {
      if (selectedRowElement.current) {
      selectedRowElement.current.scrollIntoView({
        behavior: 'smooth', 
        block: 'center',     
      });
    }
  }, [props.selectedBravaisLatticeId]);

  useEffect(() => {
    function handleScroll() {
      if (!sheetContentElement) return;

      if (sheetContentElement.scrollTop > 300) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    }

    sheetContentElement = document.getElementById("detect-symmetry-sheet");

    if (sheetContentElement) {
      sheetContentElement.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (sheetContentElement) {
        sheetContentElement.removeEventListener('scroll', handleScroll);
      }
    };
  }, [])

  function scrollToTop(){
    if (sheetContentElement) {
      sheetContentElement.scrollTo({ top: 0, behavior: 'smooth' });
    }

  }

  return (
    <div>
    {(showScrollButton && <Button onClick={scrollToTop} variant={"secondary"} className="fixed left-3/4 bottom-5" > Scroll to top </Button>)}
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="text-center" > id</TableHead>
          <TableHead className="text-center" >Metric Fit</TableHead>
          <TableHead className="text-center" >RMSD</TableHead>
          <TableHead className="text-center" >min/max cc</TableHead>
          <TableHead className="text-center" >Lattice</TableHead>
          <TableHead className="text-center" >a</TableHead>
          <TableHead className="text-center" >b</TableHead>
          <TableHead className="text-center" >c</TableHead>
          <TableHead className="text-center" >α</TableHead>
          <TableHead className="text-center" >β</TableHead>
          <TableHead className="text-center" >γ</TableHead>
          <TableHead className="text-center" >Volume</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {props.bravaisLattices.map((bravaisLattice) => {
          return(
            <SelectableTableRow 
            onClick={() => clickedBravaisLattice(bravaisLattice)} 
            isSelected={props.selectedBravaisLatticeId == bravaisLattice.id}
            ref={props.selectedBravaisLatticeId === bravaisLattice.id ? selectedRowElement : null}
            key={bravaisLattice.id}
            >
              <TableCell  className="text-center">{bravaisLattice.id}</TableCell>
              <TableCell className="text-center">{bravaisLattice.metricFit}</TableCell>
              <TableCell className="text-center">{bravaisLattice.RMSD}</TableCell>
              <TableCell className="text-center">{bravaisLattice.cc}</TableCell>
              <TableCell className="text-center">{bravaisLattice.lattice}</TableCell>
              <TableCell className="text-center">{bravaisLattice.a}</TableCell>
              <TableCell className="text-center">{bravaisLattice.b}</TableCell>
              <TableCell className="text-center">{bravaisLattice.c}</TableCell>
              <TableCell className="text-center">{bravaisLattice.alpha}</TableCell>
              <TableCell className="text-center">{bravaisLattice.beta}</TableCell>
              <TableCell className="text-center">{bravaisLattice.gamma}</TableCell>
              <TableCell className="text-center">{bravaisLattice.volume}</TableCell>
            </SelectableTableRow>
            );
        })}
      </TableBody>
    </Table>
  </div>
  );
}