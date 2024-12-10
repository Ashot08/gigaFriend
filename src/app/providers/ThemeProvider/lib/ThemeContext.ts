import {createContext} from "react";

export enum Theme {
  Default = 'default',
  Dark = 'dark',
}

export interface ThemeContextProps {
  theme?: Theme;
  setTheme?: (theme: Theme) => void
}

export const ThemeContext = createContext<ThemeContextProps>({})

