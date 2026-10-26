import { useEffect, useRef } from "react"
import { Label } from "@/components/ui/label"
import { ParamSearch } from "@/components/ui/ParamSearch"
import { useRootContext } from "@/contexts/RootContext"
import { serverMessage, StepName } from "@/lib/protocol"
import { AdvancedOption, ParamDefinition } from "@/types"

interface AdvancedOptionsSearchProps {
  step: StepName;
  // The tab's context: definitions arrive as advancedDefinitions
  enabled: boolean;
  definitions: ParamDefinition[] | null;
  options: AdvancedOption[];
  onChange: (options: AdvancedOption[]) => void;
}

// An algorithm tab's Advanced Options
export function AdvancedOptionsSearch({ step, enabled, definitions, options, onChange }: AdvancedOptionsSearchProps) {
  const { serverWS, stepPayload } = useRootContext();
  const requested = useRef(false);

  const request = () => {
    if (definitions !== null || requested.current) return;
    requested.current = true;
    serverWS.current?.send(serverMessage("workflow.param_definitions", stepPayload(step)));
  };

  // After import, and again after a reset
  useEffect(() => {
    if (definitions === null) requested.current = false;
    if (enabled) request();
  }, [enabled, definitions]);

  const id = `${step}_advanced_options`;
  return (
    <div>
      <Label htmlFor={id}>Advanced Options</Label>
      <ParamSearch id={id} definitions={definitions} options={options} onChange={onChange} onFocus={request} />
    </div>
  );
}
