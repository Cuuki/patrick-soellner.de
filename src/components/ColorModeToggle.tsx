/** @jsxImportSource theme-ui */
import { useColorMode } from 'theme-ui';
import { darken } from '@theme-ui/color';
import { Lightbulb as LightbulbOutline } from 'emotion-icons/fa-regular';
import { Lightbulb as LightbulbFilled } from 'emotion-icons/fa-solid';

export const ColorModeToggle = () => {
  const [colorMode, setColorMode] = useColorMode<'light' | 'dark'>();

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
      title={`Turn ${colorMode === 'dark' ? 'on' : 'off'} the lights`}
      aria-label={`Turn ${colorMode === 'dark' ? 'on' : 'off'} the lights`}
    >
      {colorMode === 'dark' ? <LightbulbOutline size={30} /> : <LightbulbFilled size={30} />}
    </button>
  );
};
