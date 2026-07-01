"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";

type Theme = "dark" | "light";

interface ThemeCtx {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (t: Theme) => void;
}

const ThemeContext = createContext<ThemeCtx>({
  theme: "dark",
  toggleTheme: () => {},
  setTheme: () => {},
});

export function useTheme() {
  return useContext(ThemeContext);
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<Theme>("dark");

  useEffect(() => {
    const saved = localStorage.getItem("theme") as Theme | null;
    const initial: Theme = saved === "light" ? "light" : "dark";
    setThemeState(initial);
    document.documentElement.classList.toggle("light", initial === "light");
  }, []);

  function applyTheme(next: Theme) {
    setThemeState(next);
    localStorage.setItem("theme", next);
    document.documentElement.classList.toggle("light", next === "light");
  }

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme: () => applyTheme(theme === "dark" ? "light" : "dark"),
        setTheme: applyTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}
