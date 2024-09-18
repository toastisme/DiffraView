import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command"
import { useRef, useState, useEffect } from "react"

export function IndexSpaceGroupSearch(
  props: {
    addEntryToBasicOptions: (key: string, value: string) => void
  }
) {

  const spaceGroups = [
    "P1", "P-1", "P121", "P1211", "C121", "P1m1", "P1c1", "C1m1", "C1c1", "P12/m1",
    "P121/m1", "C12/m1", "P12/c1", "P121/c1", "C12/c1", "P222", "P2221", "P21212",
    "P212121", "C2221", "C222", "F222", "I222", "I212121", "Pmm2", "Pmc21",
    "Pcc2", "Pma2", "Pca21", "Pnc2", "Pmn21", "Pba2", "Pna21", "Pnn2", "Cmm2",
    "Cmc21", "Ccc2", "Amm2", "Abm2", "Ama2", "Aba2", "Fmm2", "Fdd2", "Imm2",
    "Iba2", "Ima2", "Pmmm", "Pnnn:2", "Pccm", "Pban:2", "Pmma", "Pnna", "Pmna",
    "Pcca", "Pbam", "Pccn", "Pbcm", "Pnnm", "Pmmn:2", "Pbcn", "Pbca", "Pnma",
    "Cmcm", "Cmca", "Cmmm", "Cccm", "Cmma", "Ccca:2", "Fmmm", "Fddd:2", "Immm",
    "Ibam", "Ibca", "Imma", "P4", "P41", "P42", "P43", "I4", "I41",
    "P-4", "I-4", "P4/m", "P42/m", "P4/n:2", "P42/n:2", "I4/m", "I41/a:2", "P422",
    "P4212", "P4122", "P41212", "P4222", "P42212", "P4322", "P43212", "I422", "I4122",
    "P4mm", "P4bm", "P42cm", "P42nm", "P4cc", "P4nc", "P42mc", "P42bc", "I4mm",
    "I4cm", "I41md", "I41cd", "P-42m", "P-42c", "P-421m", "P-421c", "P-4m2", "P-4c2",
    "P-4b2", "P-4n2", "I-4m2", "I-4c2", "I-42m", "I-42d", "P4/mmm", "P4/mcc", "P4/nbm:2",
    "P4/nnc:2", "P4/mbm", "P4/mnc", "P4/nmm:2", "P4/ncc:2", "P42/mmc", "P42/mcm",
    "P42/nbc:2", "P42/nnm:2", "P42/mbc", "P42/mnm", "P42/nmc:2", "P42/ncm:2", "I4/mmm",
    "I4/mcm", "I41/amd:2", "I41/acd:2", "P3", "P31", "P32", "R3:h", "P-3", "R-3:h",
    "P312", "P321", "P3112", "P3121", "P3212", "P3221", "R32:h", "P3m1", "P31m",
    "P3c1", "P31c", "R3m:h", "R3c:h", "P-31m", "P-31c", "P-3m1", "P-3c1", "R-3m:h",
    "R-3c:h", "P6", "P61", "P65", "P62", "P64", "P63", "P-6", "P6/m", "P63/m", "P622",
    "P6122", "P6522", "P6222", "P6422", "P6322", "P6mm", "P6cc", "P63cm", "P63mc",
    "P-6m2", "P-6c2", "P-62m", "P-62c", "P6/mmm", "P6/mcc", "P63/mcm", "P63/mmc", "P23",
    "F23", "I23", "P213", "I213", "Pm-3", "Pn-3:2", "Fm-3", "Fd-3:2", "Im-3", "Pa-3",
    "Ia-3", "P432", "P4232", "F432", "F4132", "I432", "P4332", "P4132", "I4132", "P-43m",
    "F-43m", "I-43m", "P-43n", "F-43c", "I-43d", "Pm-3m", "Pn-3n:2", "Pm-3n", "Pn-3m:2",
    "Fm-3m", "Fm-3c", "Fd-3m:2", "Fd-3c:2", "Im-3m", "Ia-3d"
  ]


  const ref = useRef<HTMLInputElement>(null);
  const [displaySearch, setDisplaySearch] = useState<boolean>(false);
  const [selectedSpaceGroup, setSelectedSpaceGroup] = useState<string>("None")
  const [shownSpaceGroup, setShownSpaceGroup] = useState<string>("")

  function onClickOutside() {
    setDisplaySearch(false);
  }

  function onClick() {
    setDisplaySearch(true);
  }

  function onSelectSpaceGroup(value: string): void {
    const sg = value.charAt(0).toUpperCase() + value.slice(1);
    props.addEntryToBasicOptions("space_group", sg);
    setSelectedSpaceGroup(sg);
    setShownSpaceGroup(sg);
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current) {
        const target = event.target as Node;
        if (!ref.current?.contains(target)) {
          onClickOutside && onClickOutside();
        }
        else {
          event.stopPropagation();
          onClick();
        }
      }
    };
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, [onClickOutside]);

  return (
    <Command className={displaySearch ? "border w-[200px]" : "border w-[200px] h-[40px]"}>
      <CommandInput onValueChange={(value)=>setShownSpaceGroup(value)} value={shownSpaceGroup} placeholder={selectedSpaceGroup} ref={ref} className={selectedSpaceGroup == "None" ? "" : "placeholder:text-white"} />
      <CommandList hidden={!displaySearch}>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Suggestions">
          <CommandItem onSelect={(value) => onSelectSpaceGroup(value)}>
            <span>None</span>
          </CommandItem>
          <CommandItem onSelect={(value) => onSelectSpaceGroup(value)}>
            <span>P212121</span>
          </CommandItem>
          <CommandItem onSelect={(value) => onSelectSpaceGroup(value)}>
            <span>P1211</span>
          </CommandItem>
          <CommandItem onSelect={(value) => onSelectSpaceGroup(value)}>
            <span>C121</span>
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Space Groups">
          {spaceGroups.map((spaceGroup) => {
            return (
              <CommandItem key={spaceGroup} onSelect={(value) => onSelectSpaceGroup(value)}>
                <span>{spaceGroup}</span>
              </CommandItem>
            );
          })};
        </CommandGroup>
      </CommandList>
    </Command>
  )
}
