/** @jsxImportSource theme-ui */
import Link from 'next/link';
import { Home } from 'emotion-icons/fa-solid';
import { darken } from '@theme-ui/color';
import { ColorModeToggle } from './ColorModeToggle';
import { LocaleToggle } from './LocaleToggle';

export type HeaderProps = {
  siteTitle: string;
  maxWidth?: number;
};

const linkStyle = {
  'display': 'inline-flex',
  'mr': 'auto',
  'p': 1,
  'textDecoration': 'none',
  'color': 'primary',
  '&:hover': {
    color: darken('primary', 0.1),
  },
};

export const Header = ({ siteTitle, maxWidth = 960 }: HeaderProps) => {
  return (
    <header
      sx={{
        'color': 'text',
        '@media print': {
          display: 'none',
        },
      }}
    >
      <div
        sx={{
          display: 'flex',
          alignItems: 'center',
          mx: 'auto',
          px: 3,
          py: 4,
          maxWidth,
        }}
      >
        <Link href="/" title={`Go to "${siteTitle}" cv page`} sx={linkStyle}>
          <Home size={30} />
        </Link>
        <LocaleToggle />
        <ColorModeToggle />
      </div>
    </header>
  );
};
