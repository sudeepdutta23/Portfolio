// import { ThemeProvider } from 'next-themes'
"use client";
import React, { createContext, ReactNode, useState } from "react";

export const THEMES = {
  DARK: 'dark',
  LIGHT: 'light',
}

interface ThemeProvider {
  children?: ReactNode; // '?' makes it optional
  // Other props for your component
}

export const ThemeContext = createContext({});
export const GlobalThemeProvider = ({ children }: ThemeProvider) => {
  const [theme, setTheme] = useState(THEMES.LIGHT);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
