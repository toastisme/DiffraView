import { Button } from "@/components/ui/button"
import { Label, LineChart, Line, XAxis, YAxis, ReferenceDot } from 'recharts';
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
import { BravaisLattice } from "@/types"
import { useState, useRef, useEffect } from "react"
import { useIndexContext } from "@/contexts/IndexContext";
import { useRootContext } from "@/contexts/RootContext";
import { Status } from "@/types";

export function DetectSymmetrySheet(
  props: {
    selectedCrystalID: string
  }) {

  const {
    serverWS
  } = useRootContext();

  const {
    bravaisLattices,
    selectedBravaisLatticeID,
    setSelectedBravaisLatticeID,
    detectSymmetryOpen,
    setDetectSymmetryOpen,
  } = useIndexContext();

  function updateBravaisLattice(id: string): void {
    setSelectedBravaisLatticeID(id);
    serverWS.current?.send(JSON.stringify({
      "channel": "server",
      "command": "dials.reindex",
      "id": id,
      "crystal_id" : props.selectedCrystalID
    }))
  }


  useEffect(() => {
    setSelectedBravaisLatticeID("");
  }, [setDetectSymmetryOpen]);

  return (
    <Sheet modal={false} open={detectSymmetryOpen}>
      <SheetContent id="detect-symmetry-sheet" className="w-[50vw] sm:max-w-none overflow-hidden" setIsOpen={setDetectSymmetryOpen}>
        <SheetHeader>
          <SheetTitle>Bravais Lattice Candidates</SheetTitle>
          <SheetDescription  style={{ marginBottom: '5px' }}>
            Select a Bravais Lattice to reindex observed reflections.
          </SheetDescription>
        </SheetHeader>
        <Card className={"h-[64vh] overflow-y-scroll"}>
          <BravaisLatticeTable
            selectedCrystalID={props.selectedCrystalID}></BravaisLatticeTable>
        </Card>
        <div className="flex" style={{ marginTop: '25px' }}>
          <LineChart
            width={440}
            height={200}
            data={bravaisLattices}
            margin={{
              top: 20,
              left: 20,
              right: 10
            }}>
            <XAxis dataKey="id" type="number" domain={[1, bravaisLattices.length]}>
              <Label value="id" position='bottom' />
            </XAxis>
            <YAxis dataKey="metricFit" type="number">
              <Label value="Metric Fit" angle={-90} position="left" style={{ textAnchor: 'middle' }} />
            </YAxis>
            <Line type="monotone" strokeWidth={3} dataKey="metricFit" stroke="#ffffff" animationDuration={300} />
            {bravaisLattices.map((entry, index) => (
              <ReferenceDot
                key={`annotation-${index}`}
                x={entry.id}
                y={entry.metricFit}
                stroke={selectedBravaisLatticeID == entry.id ? "#59b578" : 'white'}
                fill={selectedBravaisLatticeID == entry.id ? "#59b578" : 'white'}
                r={6}
                onClick={() => updateBravaisLattice(entry.id)}
              />
            ))}
          </LineChart>
          <LineChart
            width={440}
            height={200}
            data={bravaisLattices}
            margin={{
              top: 20,
              left: 50,
              right: 10
            }}>
            <XAxis dataKey="id" type="number" domain={[1, bravaisLattices.length]}>
              <Label value="id" position='bottom' />
            </XAxis>
            <YAxis dataKey="RMSD" type="number" allowDataOverflow domain={['dataMin', 'dataMax']}>
              <Label value="RMSD" angle={-90} position="left" style={{ textAnchor: 'middle' }} />
            </YAxis>
            <Line type="monotone" strokeWidth={3} dataKey="RMSD" stroke="#ffffff" dot={false} activeDot={false} animationDuration={300} />
            {bravaisLattices.map((entry, index) => (
              <ReferenceDot
                key={`annotation-${index}`}
                x={entry.id}
                y={entry.RMSD}
                stroke={selectedBravaisLatticeID == entry.id ? "#59b578" : 'white'}
                fill={selectedBravaisLatticeID == entry.id ? "#59b578" : 'white'}
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
  selectedCrystalID: string
}) {

  const {
    serverWS
  } = useRootContext();

  const {
    bravaisLattices,
    selectedBravaisLatticeID,
    setSelectedBravaisLatticeID,
    setStatus,
  } = useIndexContext();

  var sheetContentElement = document.getElementById("detect-symmetry-sheet");
  const [showScrollButton, setShowScrollButton] = useState(false);

  function clickedBravaisLattice(bravaisLattice: BravaisLattice) {

    setSelectedBravaisLatticeID(bravaisLattice.id);
    serverWS.current?.send(JSON.stringify({
      "channel": "server",
      "command": "dials.reindex",
      "id": bravaisLattice.id,
      "crystal_id": props.selectedCrystalID
    }))
    setStatus(Status.Loading);
  }
  const selectedRowElement: React.MutableRefObject<null | HTMLTableRowElement> = useRef(null);

  useEffect(() => {
    if (selectedRowElement.current) {
      selectedRowElement.current.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
    }
  }, [selectedBravaisLatticeID]);

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

  function scrollToTop() {
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
            <TableHead className="text-center" > Recommend</TableHead>
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
          </TableRow>
        </TableHeader>
        <TableBody>
          {bravaisLattices.map((bravaisLattice) => {
            return (
              <SelectableTableRow
                onClick={() => clickedBravaisLattice(bravaisLattice)}
                isSelected={selectedBravaisLatticeID == bravaisLattice.id}
                ref={selectedBravaisLatticeID === bravaisLattice.id ? selectedRowElement : null}
                key={bravaisLattice.id}
                className={(selectedBravaisLatticeID === bravaisLattice.id) && props.loading ? "bg-white/60 border border-white" : ""}
              >
                <TableCell className="text-center">{bravaisLattice.id}</TableCell>
                <TableCell className="text-center">{bravaisLattice.recommended}</TableCell>
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
              </SelectableTableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}
