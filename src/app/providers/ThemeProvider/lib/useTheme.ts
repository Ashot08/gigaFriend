import { Theme, ThemeContext } from './ThemeContext';
import { useContext } from 'react';
import { LOCAL_STORAGE_THEME_KEY } from './constants';

interface IUseThemeResult {
  theme: Theme,
  toggleTheme: () => void,
}
export const useTheme = (): IUseThemeResult => {
  const {theme, setTheme} = useContext(ThemeContext);
  const toggleTheme = () => {
    const newTheme = theme === Theme.Default ? Theme.Dark : Theme.Default;
    setTheme(newTheme);
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
  }
  return { theme, toggleTheme };
}

