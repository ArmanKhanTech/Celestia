"use client";

import { createContext, useEffect, useState } from "react";
import { themeColor } from "@/lib/constants";

interface ThemeContextType {
  theme?: string;
  changeTheme?: (nextTheme: string) => void;
}

export const ThemeContext = createContext<ThemeContextType>({});

export const ThemeProvider = ({ children }: any) => {
  const [theme, setTheme] = useState<string>("light");
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("theme") || "light";
      setTheme(savedTheme);
      setIsMounted(true);
    }
  }, []);

  useEffect(() => {
    if (isMounted && typeof window !== "undefined") {
      localStorage.setItem("theme", theme);

      // Apply theme to document immediately
      document.documentElement.setAttribute("data-theme", theme);

      let metaThemeColor = document.querySelector("meta[name='theme-color']");
      if (!metaThemeColor) {
        metaThemeColor = document.createElement("meta");
        metaThemeColor.setAttribute("name", "theme-color");
        document.head.appendChild(metaThemeColor);
      }
      metaThemeColor.setAttribute("content", themeColor[theme] || "#ffffff");
    }
  }, [theme, isMounted]);

  const changeTheme = (nextTheme: string) => {
    setTheme(nextTheme);
  };

  // Don't render children until theme is loaded from localStorage
  if (!isMounted) {
    return null;
  }

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
