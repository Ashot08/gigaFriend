import { FC, PropsWithChildren, useMemo, useState } from 'react';
import { LOCAL_STORAGE_THEME_KEY } from '../constants';
import { Theme, ThemeContext } from '../lib/ThemeContext';

interface Props {}

const currentTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.Default;

export const ThemeProvider: FC<PropsWithChildren<Props>> = ({children}) => {
  const [theme, setTheme] = useState<Theme>(currentTheme);
  const defaultProps = useMemo(() => ({
    theme,
    setTheme,
  }), [theme])
  return (
    <ThemeContext.Provider value={defaultProps}>
      {children}
    </ThemeContext.Provider>
  );
};
