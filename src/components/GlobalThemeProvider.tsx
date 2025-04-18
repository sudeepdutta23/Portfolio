// import { ThemeProvider } from 'next-themes'
"use client";
import React, {
  createContext,
  ReactNode,
  useReducer,
} from "react";

export const THEMES = {
  DARK: "dark",
  LIGHT: "light",
};

export const TOGGLE_THEME = "TOGGLE_THEME";
type Theme = "light" | "dark";

interface ThemeState {
  theme: Theme;
}

interface ThemeProvider {
  children?: ReactNode;
}

interface ToggleThemeAction {
  type: typeof TOGGLE_THEME;
}

type ThemeAction = ToggleThemeAction;
interface ThemeContextType {
  theme: Theme
  setTheme: React.Dispatch<ThemeAction>;
}

const defaultThemeContext: ThemeContextType = {
  theme: "light",
  setTheme: () => {},
};

const themeReducer = (state: ThemeState, action: ThemeAction): ThemeState  => {
  switch (action.type) {
    case TOGGLE_THEME:
      return {
        ...state,
        theme: state.theme === THEMES.LIGHT ? THEMES.DARK as Theme : THEMES.LIGHT as Theme,
      };
    default:
      return state;
  }
};

export const ThemeContext = createContext(defaultThemeContext);
export const GlobalThemeProvider = ({ children }: ThemeProvider) => {
  const [state, setTheme] = useReducer(themeReducer,  { theme: "light" });

  return (
    <ThemeContext.Provider value={{ theme: state.theme , setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
