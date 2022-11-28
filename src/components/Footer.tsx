/** @jsxImportSource theme-ui */
import { darken } from '@theme-ui/color';

export const Footer = () => (
  <footer
    sx={{
      'mt': 4,
      'py': 4,
      'textAlign': 'right',
      '@media print': {
        display: 'none',
      },
    }}
  >
    {`© ${new Date().getFullYear()}, Built with `}
    <a
      href="https://nextjs.org"
      target="_blank"
      rel="noopener noreferrer"
      sx={{
        'color': 'text',
        'textDecoration': 'none',
        '&:hover': {
          color: darken('text', 0.1),
        },
      }}
    >
      Next.js
    </a>
    {' and deployed on '}
    <a
      href="https://vercel.com"
      target="_blank"
      rel="noopener noreferrer"
      sx={{
        'color': 'text',
        'textDecoration': 'none',
        '&:hover': {
          color: darken('text', 0.1),
        },
      }}
    >
      Vercel
    </a>
  </footer>
);
