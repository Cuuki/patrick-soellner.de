import type { Theme } from 'theme-ui';
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
      dark: {
        ...deep.colors,
        primary: '#f59e0b',
      },
      light: {
        ...swiss.colors,
        primary: '#1d4ed8',
      },
    },
  },
  breakpoints: ['40em', '48em', '64em', '80em'],
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
};

export default merge(deep, theme);
