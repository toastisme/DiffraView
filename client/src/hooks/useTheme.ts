import { useState, useEffect } from "react";

type Theme = "dark" | "light";

export function useTheme() {
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

  const colors = {
    linePlot: theme === "light" ? "#374151" : "#ffffff",
    grey: theme === "light" ? "#6b7280" : "#aaa9a9",
    green: theme === "light" ? "#5a8a4a" : "#c8e0a0",
    background: theme === "light" ? "#374151" : "#c8e0a0",
    foreground: theme === "light" ? "#5a8a4a" : "#c8e0a0",
    blue: theme === "light" ? "#2060aa" : "#80C7FF",
    red: theme === "light" ? "#b03030" : "#FF8080",
    orange: theme === "light" ? "#c06010" : "#FFB347",
    purple: theme === "light" ? "#7040a0" : "#C79BFF",
    teal: theme === "light" ? "#0f766e" : "#5EEAD4",
  };

  return { theme, isDark: theme === "dark", isLight: theme === "light", colors };
}
