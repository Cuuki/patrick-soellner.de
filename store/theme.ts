import { defineStore } from 'pinia';

enum Mode {
  LIGHT = 'light',
  DARK = 'dark',
}

export const useThemeStore = defineStore('theme', {
  state: () => ({
    colorMode: Mode.LIGHT,
  }),
  actions: {
    toggleMode() {
      this.colorMode = this.colorMode === Mode.LIGHT ? Mode.DARK : Mode.LIGHT;
    },
  },
});
