import { Button } from "@/components/ui/button"
import { Label, LineChart, Line, XAxis, YAxis, ReferenceDot } from 'recharts';
import { Card } from "@/components/ui/card"
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
import { useEffect, useState } from "react"
import { Status, SymmetryCandidate } from "@/types"
import { useTheme } from "@/hooks/useTheme";

// dials.symmetry results; the selected subgroup is applied by reindexing the
// integrated reflections
export function ToFLaueSymmetryResultsSheet(props: {
  candidates: SymmetryCandidate[];
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  status: Status;
  applySymmetry: (id: string) => void;
}) {
  const { candidates, open, setOpen, status, applySymmetry } = props;
  const { colors: themeColors } = useTheme();
  const [selectedID, setSelectedID] = useState<string>("");

  // Applying re-sends the same candidates; keep the selection then
  const candidateGroups = candidates.map((c) => c.pattersonGroup).join();
  useEffect(() => {
    setSelectedID("");
  }, [candidateGroups]);

  const dotProps = (entry: SymmetryCandidate) => ({
    stroke: selectedID === entry.id ? themeColors.logoGreenEdge : themeColors.linePlot,
    fill: selectedID === entry.id ? themeColors.logoGreen : themeColors.linePlot,
    strokeWidth: 2,
    r: 6,
    onClick: () => setSelectedID(entry.id),
  });

  return (
    <Sheet modal={false} open={open}>
      <SheetContent className="w-[50vw] sm:max-w-none overflow-hidden" setIsOpen={setOpen}>
        <SheetHeader>
          <SheetTitle>Symmetry Candidates</SheetTitle>
          <div className="flex items-center justify-between gap-4" style={{ marginBottom: '5px' }}>
            <SheetDescription>
              Select a symmetry, then apply it to reindex the integrated reflections.
            </SheetDescription>
            <Button
              onClick={() => applySymmetry(selectedID)}
              disabled={selectedID === "" || status === Status.Loading}>
              Apply Symmetry
            </Button>
          </div>
        </SheetHeader>
        <Card className={"h-[64vh] overflow-auto"}>
          <Table wrapperClassName="overflow-visible">
            <TableHeader>
              <TableRow>
                <TableHead className="text-center">id</TableHead>
                <TableHead className="text-center">Recommend</TableHead>
                <TableHead className="text-center">Patterson Group</TableHead>
                <TableHead className="text-center">Space Group</TableHead>
                <TableHead className="text-center">Likelihood</TableHead>
                <TableHead className="text-center">Confidence</TableHead>
                <TableHead className="text-center">Net Z-CC</TableHead>
                <TableHead className="text-center">CC+</TableHead>
                <TableHead className="text-center">CC-</TableHead>
                <TableHead className="text-center">Δ (°)</TableHead>
                <TableHead className="text-center">Reindex</TableHead>
                <TableHead className="text-center">a</TableHead>
                <TableHead className="text-center">b</TableHead>
                <TableHead className="text-center">c</TableHead>
                <TableHead className="text-center">α</TableHead>
                <TableHead className="text-center">β</TableHead>
                <TableHead className="text-center">γ</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {candidates.map((candidate) => (
                <SelectableTableRow
                  onClick={() => setSelectedID(candidate.id)}
                  isSelected={selectedID === candidate.id}
                  key={candidate.id}
                  className={(selectedID === candidate.id) && status === Status.Loading ? "bg-foreground/15 dark:bg-white/60 border border-foreground" : ""}
                >
                  <TableCell className="text-center">{candidate.id}</TableCell>
                  <TableCell className="text-center">{candidate.recommended}</TableCell>
                  <TableCell className="text-center">{candidate.pattersonGroup}</TableCell>
                  <TableCell className="text-center">{candidate.spaceGroup}</TableCell>
                  <TableCell className="text-center">{candidate.likelihood}</TableCell>
                  <TableCell className="text-center">{candidate.confidence}</TableCell>
                  <TableCell className="text-center">{candidate.netZcc}</TableCell>
                  <TableCell className="text-center">{candidate.ccFor}</TableCell>
                  <TableCell className="text-center">{candidate.ccAgainst}</TableCell>
                  <TableCell className="text-center">{candidate.delta}</TableCell>
                  <TableCell className="text-center">{candidate.cbOp}</TableCell>
                  <TableCell className="text-center">{candidate.a}</TableCell>
                  <TableCell className="text-center">{candidate.b}</TableCell>
                  <TableCell className="text-center">{candidate.c}</TableCell>
                  <TableCell className="text-center">{candidate.alpha}</TableCell>
                  <TableCell className="text-center">{candidate.beta}</TableCell>
                  <TableCell className="text-center">{candidate.gamma}</TableCell>
                </SelectableTableRow>
              ))}
            </TableBody>
          </Table>
        </Card>
        <div className="flex" style={{ marginTop: '25px' }}>
          <LineChart width={440} height={200} data={candidates} margin={{ top: 20, left: 20, right: 10 }}>
            <XAxis dataKey="id" type="number" domain={[1, Math.max(candidates.length, 2)]} allowDecimals={false}>
              <Label value="id" position='bottom' />
            </XAxis>
            <YAxis dataKey="likelihood" type="number" domain={[0, 1]}>
              <Label value="Likelihood" angle={-90} position="left" style={{ textAnchor: 'middle' }} />
            </YAxis>
            <Line type="monotone" strokeWidth={3} dataKey="likelihood" stroke={themeColors.linePlot} animationDuration={300} />
            {candidates.map((entry) => (
              <ReferenceDot key={`likelihood-${entry.id}`} x={Number(entry.id)} y={entry.likelihood} {...dotProps(entry)} />
            ))}
          </LineChart>
          <LineChart width={440} height={200} data={candidates} margin={{ top: 20, left: 50, right: 10 }}>
            <XAxis dataKey="id" type="number" domain={[1, Math.max(candidates.length, 2)]} allowDecimals={false}>
              <Label value="id" position='bottom' />
            </XAxis>
            <YAxis dataKey="netZcc" type="number" allowDataOverflow domain={['dataMin', 'dataMax']}>
              <Label value="Net Z-CC" angle={-90} position="left" style={{ textAnchor: 'middle' }} />
            </YAxis>
            <Line type="monotone" strokeWidth={3} dataKey="netZcc" stroke={themeColors.linePlot} dot={false} activeDot={false} animationDuration={300} />
            {candidates.map((entry) => (
              <ReferenceDot key={`netZcc-${entry.id}`} x={Number(entry.id)} y={entry.netZcc} {...dotProps(entry)} />
            ))}
          </LineChart>
        </div>
      </SheetContent>
    </Sheet>
  )
}
