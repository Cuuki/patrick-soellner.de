import { ColorMode, merge, Theme } from 'theme-ui';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { deep, swiss } from '@theme-ui/presets';

export default merge(deep, ({
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
} as unknown) as Theme);
