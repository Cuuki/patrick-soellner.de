/** @jsx jsx */
import {jsx, useColorMode} from 'theme-ui';
import React, {useEffect} from 'react';
import {darken} from '@theme-ui/color';
import {Link} from 'gatsby';
import {Home} from '@emotion-icons/fa-solid';
import ColorModeToggle from '../ColorModeToggle';

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
        <Link
          to="/"
          title={`Go to "${siteTitle}" home`}
          sx={{
            display: 'inline-flex',
            mr: 'auto',
            p: 1,
            color: 'text',
            textDecoration: 'none',
            '&:hover': {
              color: darken('text', 0.1),
            },
          }}
        >
          <Home size={30} />
        </Link>
        <ColorModeToggle mode={colorMode} handleClick={setColorMode} />
      </div>
    </header>
  );
};

export default Header;
