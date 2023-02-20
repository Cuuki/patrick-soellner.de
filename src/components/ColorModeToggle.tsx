/** @jsxImportSource theme-ui */
import { useEffect } from 'react';
import { useColorMode } from 'theme-ui';
import { darken } from '@theme-ui/color';
import { Lightbulb as LightbulbOutline } from 'emotion-icons/fa-regular';
import { Lightbulb as LightbulbFilled } from 'emotion-icons/fa-solid';
import type { I18nRecord } from '../types/i18n';
import useI18n from '../utils/hooks/useI18n';

type Mode = 'light' | 'dark';

const i18n = {
  de: {
    buttonText: (mode: Mode) => `Licht ${mode === 'dark' ? 'an' : 'aus'}`,
  },
  en: {
    buttonText: (mode: Mode) => `Turn ${mode === 'dark' ? 'on' : 'off'} the lights`,
  },
} satisfies I18nRecord;

export const ColorModeToggle = () => {
  const { t } = useI18n(i18n);
  const [colorMode, setColorMode] = useColorMode<Mode>();

  useEffect(() => {
    const isDarkMode =
      window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

    setColorMode(isDarkMode ? 'dark' : 'light');
  }, [setColorMode]);

  return (
    <button
      type="button"
      sx={{
        'p': 1,
        'ml': 2,
        'border': 'none',
        'boxShadow': 'none',
        'color': 'primary',
        '&:hover': {
          color: darken('primary', 0.1),
        },
        'bg': 'transparent',
        'cursor': 'pointer',
      }}
      onClick={() => {
        setColorMode((prevColorMode) => (prevColorMode === 'dark' ? 'light' : 'dark'));
      }}
      title={t('buttonText')(colorMode)}
      aria-label={t('buttonText')(colorMode)}
    >
      {colorMode === 'dark' ? <LightbulbOutline size={30} /> : <LightbulbFilled size={30} />}
    </button>
  );
};
