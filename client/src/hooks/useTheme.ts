import { useState, useEffect } from "react";

type Theme = "dark" | "light";

export function useTheme(forceDark = false) {
  const [theme, setTheme] = useState<Theme>(() =>
    document.documentElement.classList.contains("dark") ? "dark" : "light"
  );

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setTheme(document.documentElement.classList.contains("dark") ? "dark" : "light");
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);

  const colorTheme: Theme = forceDark ? "dark" : theme;
  const colors = {
    linePlot: colorTheme === "light" ? "#374151" : "#ffffff",
    grey: colorTheme === "light" ? "#6b7280" : "#aaa9a9",
    green: colorTheme === "light" ? "#5a8a4a" : "#c8e0a0",
    background: colorTheme === "light" ? "#374151" : "#c8e0a0",
    foreground: colorTheme === "light" ? "#5a8a4a" : "#c8e0a0",
    blue: colorTheme === "light" ? "#2060aa" : "#80C7FF",
    red: colorTheme === "light" ? "#b03030" : "#FF8080",
    orange: colorTheme === "light" ? "#c06010" : "#FFB347",
    purple: colorTheme === "light" ? "#7040a0" : "#C79BFF",
    teal: colorTheme === "light" ? "#0f766e" : "#5EEAD4",
    logoGreen: "#96f97b",
    logoGreenEdge: colorTheme === "light" ? "#3a7f2a" : "#96f97b",
  };

  return { theme, isDark: theme === "dark", isLight: theme === "light", colors };
}
