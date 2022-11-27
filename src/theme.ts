import type { ColorMode, Theme } from 'theme-ui';
import { merge } from 'theme-ui';
import { deep, swiss } from '@theme-ui/presets';

const theme: Theme = {
  config: {
    useColorSchemeMediaQuery: true,
    initialColorModeName: 'dark',
    useLocalStorage: false,
  },
  colors: {
    modes: {
      light: {
        ...swiss.colors,
        accent: '#1d4ed8',
        accentActive: '#1e3a8a',
      } as ColorMode,
      dark: {
        ...deep.colors,
        accent: '#f59e0b',
        accentActive: '#b45309',
      } as ColorMode,
    },
  },
  breakpoints: ['40em', '48em', '64em', '80em'],
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
};

export default merge(deep, theme);
