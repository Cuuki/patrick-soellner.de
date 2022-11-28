/** @jsxImportSource theme-ui */
import { darken } from '@theme-ui/color';
import Link from 'next/link';

const linkStyle = {
  'color': 'text',
  'textDecoration': 'none',
  '&:hover': {
    color: darken('text', 0.1),
  },
};

export const Footer = () => (
  <footer
    sx={{
      'mt': 4,
      'py': 4,
      'display': 'flex',
      'justifyContent': 'flex-end',
      'flexWrap': 'wrap',
      'gap': 2,
      '@media print': {
        display: 'none',
      },
    }}
  >
    <div>
      {`© ${new Date().getFullYear()}, Built with `}
      <a href="https://www.gatsbyjs.com" target="_blank" rel="noopener noreferrer" sx={linkStyle}>
        Gatsby
      </a>
      {' and deployed on '}
      <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" sx={linkStyle}>
        Vercel
      </a>
    </div>
    <Link href="/privacy" locale="de" title="Go to privacy page" sx={linkStyle}>
      | Privacy (DE)
    </Link>
    <Link href="/imprint" locale="de" title="Go to imprint page" sx={linkStyle}>
      | Imprint (DE)
    </Link>
  </footer>
);
