/** @jsxImportSource theme-ui */
import Link from 'next/link';
import { Home } from 'emotion-icons/fa-solid';
import { ColorModeToggle } from './ColorModeToggle';

export type HeaderProps = {
  siteTitle: string;
  maxWidth?: number;
};

export const Header = ({ siteTitle, maxWidth = 960 }: HeaderProps) =>  (
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
        <Link
          href="/"
          title={`Go to "${siteTitle}" cv page`}
          locale="en"
          sx={{
            'display': 'inline-flex',
            'mr': 'auto',
            'p': 1,
            'textDecoration': 'none',
            'color': 'accent',
            '&:hover': {
              color: 'accentActive',
            },
          }}
        >
          <Home size={30} />
        </Link>
        <ColorModeToggle />
      </div>
    </header>
  );
