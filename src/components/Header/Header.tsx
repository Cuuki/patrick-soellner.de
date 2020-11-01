/** @jsx jsx */
import {jsx, useColorMode} from 'theme-ui';
import React, {useEffect} from 'react';
import {darken} from '@theme-ui/color';
import {Lightbulb as LightbulbOutline} from '@emotion-icons/fa-regular';
import {Lightbulb as LightbulbFilled} from '@emotion-icons/fa-solid';
import {Link} from 'gatsby';

const Header: React.FC<{
  siteTitle: string;
}> = ({siteTitle = ''}) => {
  const [colorMode, setColorMode] = useColorMode();

  useEffect(() => {
    const isDarkMode =
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches;

    setColorMode(isDarkMode ? 'dark' : 'light');
  }, [setColorMode]);

  return (
    <header
      sx={{
        mb: 4,
        color: 'text',
        bg: 'highlight',
      }}
    >
      <div
        sx={{
          display: 'flex',
          alignItems: 'center',
          mx: 'auto',
          px: 3,
          py: 4,
          maxWidth: 960,
        }}
      >
        <h1
          sx={{
            m: 0,
            mr: 'auto',
          }}
        >
          <Link
            to="/"
            sx={{
              color: 'text',
              textDecoration: 'none',
              '&:hover': {
                color: darken('text', 0.1),
              },
            }}
          >
            {siteTitle}
          </Link>
        </h1>
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
            setColorMode(colorMode === 'dark' ? 'light' : 'dark');
          }}
          aria-label={`Toggle ${colorMode === 'dark' ? 'light' : 'dark'} mode`}
        >
          {colorMode === 'dark' ? (
            <LightbulbOutline size={30} />
          ) : (
            <LightbulbFilled size={30} />
          )}
        </button>
      </div>
    </header>
  );
};

export default Header;
