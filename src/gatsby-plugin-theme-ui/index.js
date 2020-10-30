import {merge} from 'theme-ui';
import {deep, swiss} from '@theme-ui/presets';

export default merge(deep, {
  colors: {
    modes: {
      light: {...swiss.colors},
    },
  },
  breakpoints: ['40em', '48em', '64em', '80em'],
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
});
