import React from 'react';
import { GlobalStyle } from '@lib/components/provider/web/CSSReset';
import _merge from 'lodash/merge';
import { theme as baseTheme, Theme } from '@lib/core/theme/theme';

interface ThemeProviderProps {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}
const ThemeContext = React.createContext<ThemeProviderProps>({
  theme: baseTheme,
  setTheme: () => {
    return undefined;
  },
});

export const useTheme = () => React.useContext(ThemeContext);

interface ProviderProps {
  theme: Theme;
  children: React.ReactNode;
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function Provider({ theme, children }: ProviderProps) {
  // 1) fazer o merge das props
  // 2) fazer o exemplo no componente botao
  const mergedTheme = _merge(baseTheme, theme);
  const [currentTheme, setCurrentTheme] = React.useState<Theme>(mergedTheme);

  const providerValue = React.useMemo(() => {
    return {
      theme: currentTheme,
      setTheme: setCurrentTheme,
    };
  }, [currentTheme]);

  return (
    <ThemeContext.Provider value={providerValue}>
      <GlobalStyle />
      {children}
    </ThemeContext.Provider>
  );
}
