import React from "react";
import { TabsTrigger } from "@/components/ui/tabs";

interface ProgressTabTriggerProps extends React.ComponentProps<typeof TabsTrigger> {
  progress: number;
}

export function ProgressTabTrigger({ progress, style, ...props }: ProgressTabTriggerProps) {
  const progressStyle: React.CSSProperties = {
    background:
      progress > 0
        ? `linear-gradient(to right, rgba(255,255,255,0.15) ${progress}%, transparent ${progress}%)`
        : undefined,
    transition: "background 0.4s ease",
    ...style,
  };

  return <TabsTrigger style={progressStyle} {...props} />;
}
