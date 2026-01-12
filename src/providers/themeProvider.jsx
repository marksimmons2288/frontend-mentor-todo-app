import { useEffect, useMemo, useState } from "react";
import { STORAGE_KEY, ThemeContext } from "@/constants/themeConstants.js";

const initialTheme = (defaultTheme) => {
  const stored = localStorage.getItem(STORAGE_KEY);
  return stored || defaultTheme;
};
// ThemeProvider component to manage and provide theme context
function ThemeProvider({ children, defaultTheme = "system"}) {
  const [theme, setTheme] = useState(() => initialTheme(defaultTheme));
  // Sync theme changes to document root and localStorage
  useEffect(() => {
    const root = document.documentElement; //get html element
    
    const mql = window.matchMedia("(prefers-color-scheme: dark)"); //check system theme preference
    const resolved = theme === "system" ? (mql.matches ? "dark" : "light") : theme;//resolve actual theme
  //apply theme to document root
    root.classList.toggle("dark", resolved === "dark");
    localStorage.setItem(STORAGE_KEY, theme);

    // Listen to system theme changes if theme is set to "system"
    if (theme === "system") {
      const onChange = (e) => root.classList.toggle("dark", e.matches);
      mql.addEventListener("change", onChange);//add listener for system theme changes
      return () => mql.removeEventListener("change", onChange);//remove listener on unmount
    }
  }, [theme]);
// Ensure stable context value reference (avoids re-renders)
  const value = useMemo(() => ({ theme, setTheme }), [theme]);
// Provide theme Context to children components
  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export  { ThemeProvider };