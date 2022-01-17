import React from 'react';
import { GlobalStyle } from '@lib/components/provider/react/CSSReset';
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

export const useTheme = () => React.useContext(ThemeContext).theme;

interface ProviderProps {
  theme?: Partial<Theme>;
  children: React.ReactNode;
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function Provider({ theme, children }: ProviderProps) {
  // 1) fazer o merge das props
  const mergedTheme = _merge(baseTheme, theme);

  const [currentTheme, setTheme] = React.useState<Theme>(mergedTheme);
  const memoizedProviderValue = React.useMemo(
    () => ({
      theme: currentTheme,
      setTheme,
    }),
    [currentTheme]
  );

  return (
    <ThemeContext.Provider value={memoizedProviderValue}>
      <GlobalStyle />
      {children}
    </ThemeContext.Provider>
  );
}

Provider.defaultProps = {
  theme: {},
};
