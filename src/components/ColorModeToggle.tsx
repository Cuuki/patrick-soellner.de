/** @jsxImportSource theme-ui */
import { useColorMode } from 'theme-ui';
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
        'color': 'accent',
        '&:hover': {
          color: 'accentActive',
        },
        'bg': 'transparent',
        'cursor': 'pointer',
      }}
      onClick={() => {
        setColorMode(colorMode === 'dark' ? 'light' : 'dark');
      }}
      title={`Activate ${colorMode === 'dark' ? 'light' : 'dark'} mode`}
      aria-label={`Activate ${colorMode === 'dark' ? 'light' : 'dark'} mode`}
    >
      {colorMode === 'dark' ? <LightbulbOutline size={30} /> : <LightbulbFilled size={30} />}
    </button>
  );
};
