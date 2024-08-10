"use client";

import { createContext, useEffect, useState } from "react";

interface ThemeContextType {
  theme?: string;
  changeTheme?: (nextTheme: string) => void;
}

export const ThemeContext = createContext<ThemeContextType>({});

export const ThemeProvider = ({ children }: any) => {
  const [theme, setTheme] = useState<string>(
    () => localStorage.getItem("theme") || "light",
  );

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  const changeTheme = (nextTheme: string) => {
    setTheme(nextTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
