/** @jsx jsx */
import {jsx} from 'theme-ui';
import React from 'react';
import {darken} from '@theme-ui/color';

const Footer: React.FC = () => (
  <footer
    sx={{
      mt: 4,
      py: 4,
      textAlign: 'right',
      '@media print': {
        display: 'none',
      },
    }}
  >
    {`© ${new Date().getFullYear()}, Built with `}
    <a
      href="https://www.gatsbyjs.com"
      target="_blank"
      rel="noopener noreferrer"
      sx={{
        color: 'text',
        textDecoration: 'none',
        '&:hover': {
          color: darken('text', 0.1),
        },
      }}
    >
      Gatsby
    </a>
  </footer>
);

export default Footer;
