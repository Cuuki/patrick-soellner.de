/** @jsx jsx */
import { jsx } from 'theme-ui';
import React from 'react';
import { darken } from '@theme-ui/color';
import { Link } from 'gatsby';

const linkStyle = {
  color: 'text',
  textDecoration: 'none',
  '&:hover': {
    color: darken('text', 0.1),
  },
};

const Footer: React.FC = () => (
  <footer
    sx={{
      mt: 4,
      py: 4,
      display: 'flex',
      justifyContent: 'flex-end',
      flexWrap: 'wrap',
      gap: 2,
      '@media print': {
        display: 'none',
      },
    }}
  >
    <div>
      {`© ${new Date().getFullYear()}, Built with `}
      <a
        href="https://www.gatsbyjs.com"
        target="_blank"
        rel="noopener noreferrer"
        sx={linkStyle}
      >
        Gatsby
      </a>
      {' and deployed on '}
      <a
        href="https://vercel.com"
        target="_blank"
        rel="noopener noreferrer"
        sx={linkStyle}
      >
        Vercel
      </a>
    </div>
    <Link to="/privacy" title="Go to privacy page" sx={linkStyle}>
      | Privacy (DE)
    </Link>
    <Link to="/imprint" title="Go to imprint page" sx={linkStyle}>
      | Imprint (DE)
    </Link>
  </footer>
);

export default Footer;
