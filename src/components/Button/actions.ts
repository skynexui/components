import { DefaultTheme } from 'styled-components';
import { StylesProps } from './styles';

export const actions: Record<any, any> = {
  primary({ theme, $baseColor }: { theme: DefaultTheme } & StylesProps) {
    return {
      background: theme.colors[$baseColor]['600'],
      color: theme.colors.white,
      borderColor: `${theme.colors[$baseColor]['800']}`,
      hoverfocus: {
        background: theme.colors[$baseColor]['700'],
      },
      focus: {
        // boxShadow: `0 0 0 2px ${theme.colors.white},
        //   0 0 0 4px ${theme.colors[$baseColor]['500']}`,
      },
    };
  },
  secondary({ theme, $baseColor }: { theme: DefaultTheme } & StylesProps) {
    return {
      background: theme.colors[$baseColor]['100'],
      color: theme.colors[$baseColor]['700'],
      borderColor: `${theme.colors[$baseColor]['300']}`,
      hoverfocus: {
        background: theme.colors[$baseColor]['200'],
      },
      focus: {
        // boxShadow: `0 0 0 2px ${theme.colors.white},
        //   0 0 0 4px ${theme.colors[$baseColor]['500']}`,
      },
    };
  },
  tertiary({ theme, $baseColor }: { theme: DefaultTheme } & StylesProps) {
    return {
      background: 'white',
      color: theme.colors[$baseColor]['700'],
      borderColor: `${theme.colors.neutral['100']}`,
      hoverfocus: {
        background: theme.colors.neutral['050'],
      },
      focus: {
        // boxShadow: `0 0 0 2px ${theme.colors.white},
        //   0 0 0 4px ${theme.colors[$baseColor]['500']}`,
      },
    };
  },
  quartenary({ theme, $baseColor }: { theme: DefaultTheme } & StylesProps) {
    return {
      background: 'transparent',
      color: theme.colors[$baseColor]['700'],
      borderColor: `transparent`,
      hoverfocus: {
        background: theme.colors.neutral['100'],
        borderColor: `${theme.colors.neutral['200']}`,
      },
      focus: {
        // boxShadow: `0 0 0 2px ${theme.colors.white},
        //   0 0 0 4px ${theme.colors[$baseColor]['500']}`,
      },
    };
  },
};
