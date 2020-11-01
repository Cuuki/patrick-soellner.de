/** @jsx jsx */
import {jsx} from 'theme-ui';
import React from 'react';
import {darken} from '@theme-ui/color';
import {Lightbulb as LightbulbOutline} from '@emotion-icons/fa-regular';
import {Lightbulb as LightbulbFilled} from '@emotion-icons/fa-solid';

const ColorModeToggle: React.FC<{
  mode: string;
  handleClick: (mode: string) => void;
}> = ({mode = 'default', handleClick = () => {}}) => (
  <button
    type="button"
    sx={{
      p: 1,
      ml: 2,
      border: 'none',
      boxShadow: 'none',
      color: 'text',
      '&:hover': {
        color: darken('text', 0.1),
      },
      bg: 'transparent',
      cursor: 'pointer',
    }}
    onClick={() => {
      handleClick(mode === 'dark' ? 'light' : 'dark');
    }}
    aria-label={`Toggle ${mode === 'dark' ? 'light' : 'dark'} mode`}
  >
    {mode === 'dark' ? (
      <LightbulbOutline size={30} />
    ) : (
      <LightbulbFilled size={30} />
    )}
  </button>
);

export default ColorModeToggle;
