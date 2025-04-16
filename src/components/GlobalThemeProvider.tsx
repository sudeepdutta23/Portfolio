// import { ThemeProvider } from 'next-themes'
"use client";
import React, { createContext, useState } from "react";

export const THEMES = {
  DARK: 'dark',
  LIGHT: 'light',
}

export const ThemeContext = createContext({});
export const GlobalThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(THEMES.LIGHT);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
