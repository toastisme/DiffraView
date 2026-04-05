import React from "react";
import { TabsTrigger } from "@/components/ui/tabs";

// Inject shimmer keyframes once at module load
const shimmerStyleEl = document.createElement("style");
shimmerStyleEl.textContent = `
  @keyframes progress-shimmer {
    0%   { background-position: 200% center; }
    100% { background-position: -200% center; }
  }
`;
document.head.appendChild(shimmerStyleEl);

interface ProgressTabTriggerProps extends React.ComponentProps<typeof TabsTrigger> {
  progress: number;
}

export function ProgressTabTrigger({ progress, style, children, ...props }: ProgressTabTriggerProps) {
  return (
    <TabsTrigger style={{ position: "relative", overflow: "hidden", ...style }} {...props}>
      {progress > 0 && (
        <span
          style={{
            position: "absolute",
            inset: 0,
            transformOrigin: "left",
            transform: `scaleX(${progress / 100})`,
            transition: "transform 0.4s ease",
            background:
              "linear-gradient(90deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.18) 40%, rgba(255,255,255,0.32) 50%, rgba(255,255,255,0.18) 60%, rgba(255,255,255,0.08) 100%)",
            backgroundSize: "200% 100%",
            animation: "progress-shimmer 2s linear infinite",
            pointerEvents: "none",
          }}
        />
      )}
      {children}
    </TabsTrigger>
  );
}
