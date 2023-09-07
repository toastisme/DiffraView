import { Button } from "@/components/ui/button"
import { ResponsiveContainer, Label, LineChart, Line, XAxis, YAxis, ReferenceArea, ReferenceDot } from 'recharts';
import {
  Card,
} from "@/components/ui/card"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"

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
 
export function DetectSymmetrySheet(
  props:{
    bravaisLattices: BravaisLattice[], 
    selectedBravaisLatticeId: string,
    setSelectedBravaisLatticeId: React.Dispatch<React.SetStateAction<string>>,
	open: boolean,
	setOpen: React.Dispatch<React.SetStateAction<boolean>>,
	selectedBravaisLatticeLoading: boolean,
	setSelectedBravaisLatticeLoading: React.Dispatch<React.SetStateAction<boolean>>,
    serverWS: React.MutableRefObject<WebSocket | null>}) {

	function updateBravaisLattice(id: string): void{
    props.setSelectedBravaisLatticeId(id);
		props.serverWS.current?.send(JSON.stringify({
					"channel" : "server",
					"command" : "dials.reindex",
					"id" : id
    }))

	}

  return (
    <Sheet modal={false} open={props.open}>
      <SheetContent id="detect-symmetry-sheet" className="w-[50vw] sm:max-w-none overflow-scroll" setIsOpen={props.setOpen}>
        <SheetHeader>
          <SheetTitle>Bravais Lattice Candidates</SheetTitle>
          <SheetDescription>
			Select a Bravais Lattice to reindex observed reflections.
          </SheetDescription>
        </SheetHeader>
		<Card className={"h-[68vh] overflow-scroll"}>
		<BravaisLatticeTable 
    bravaisLattices={props.bravaisLattices} 
    selectedBravaisLatticeId={props.selectedBravaisLatticeId}
    setSelectedBravaisLatticeId={props.setSelectedBravaisLatticeId}
    loading={props.selectedBravaisLatticeLoading}
    setLoading={props.setSelectedBravaisLatticeLoading}
    serverWS={props.serverWS}></BravaisLatticeTable>
		</Card>
		<div className="flex">
      <LineChart
        width={440}
        height={240}
        data={props.bravaisLattices}
        margin={{
          top: 20,
          left: 20,
          right: 10
        }}>
        <XAxis dataKey="id" type="number" domain={[1, props.bravaisLattices.length]}>
          <Label value="id" position='bottom'/>
        </XAxis>
        <YAxis dataKey="metricFit" type="number">
          <Label value="Metric Fit" angle={-90} position="left" style={{ textAnchor: 'middle' }}/>
        </YAxis>
        <Line type="monotone" strokeWidth={3} dataKey="metricFit" stroke="#ffffff" animationDuration={300} />
        {props.bravaisLattices.map((entry, index) => (
          <ReferenceDot
            key={`annotation-${index}`}
            x={entry.id}
            y={entry.metricFit}
	  		stroke={props.selectedBravaisLatticeId == entry.id? "#59b578" : 'white'}
	  		fill={props.selectedBravaisLatticeId == entry.id? "#59b578" : 'white'}
			r={6}
			onClick={() => updateBravaisLattice(entry.id)}
          />
		))}
		</LineChart>
      <LineChart
        width={440}
        height={240}
        data={props.bravaisLattices}
        margin={{
          top: 20,
          left: 50,
          right: 10
        }}>
        <XAxis dataKey="id" type="number" domain={[1, props.bravaisLattices.length]}>
          <Label value="id" position='bottom'/>
        </XAxis>
        <YAxis dataKey="RMSD" type="number" allowDataOverflow domain={['dataMin', 'dataMax']}>
          <Label value="RMSD" angle={-90} position="left" style={{ textAnchor: 'middle' }}/>
        </YAxis>
        <Line type="monotone" strokeWidth={3} dataKey="RMSD" stroke="#ffffff" dot={false} activeDot={false} animationDuration={300} />
        {props.bravaisLattices.map((entry, index) => (
          <ReferenceDot
            key={`annotation-${index}`}
            x={entry.id}
            y={entry.RMSD}
	  		stroke={props.selectedBravaisLatticeId == entry.id? "#59b578" : 'white'}
	  		fill={props.selectedBravaisLatticeId == entry.id? "#59b578" : 'white'}
			r={6}
			onClick={() => updateBravaisLattice(entry.id)}
          />
		))}
		</LineChart>
    </div>
      </SheetContent>
    </Sheet>

  )
}

export function BravaisLatticeTable(props: {
  bravaisLattices: BravaisLattice[], 
  selectedBravaisLatticeId: string,
  setSelectedBravaisLatticeId: React.Dispatch<React.SetStateAction<string>>,
	loading: boolean, 
  setLoading : React.Dispatch<React.SetStateAction<boolean>>,
  serverWS: React.MutableRefObject<WebSocket | null>}) {

  var sheetContentElement = document.getElementById("detect-symmetry-sheet");
  const [showScrollButton, setShowScrollButton] = useState(false);

  function clickedBravaisLattice(bravaisLattice: BravaisLattice){

    props.setSelectedBravaisLatticeId(bravaisLattice.id);
		props.serverWS.current?.send(JSON.stringify({
					"channel" : "server",
					"command" : "dials.reindex",
					"id" : bravaisLattice.id
    }))
    props.setLoading(true);
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
          <TableHead className="text-center" > Recommended</TableHead>
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
            className={(props.selectedBravaisLatticeId === bravaisLattice.id) && props.loading ? "bg-white/60 border border-white" : ""}
            >
              <TableCell  className="text-center">{bravaisLattice.id}</TableCell>
              <TableCell  className="text-center">{bravaisLattice.recommended}</TableCell>
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