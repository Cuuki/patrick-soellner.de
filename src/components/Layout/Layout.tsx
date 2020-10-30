/** @jsx jsx */
/** @jsxFrag React.Fragment */
import {jsx} from 'theme-ui';
import React from 'react';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import {darken} from '@theme-ui/color';
import {graphql, useStaticQuery} from 'gatsby';
import Header from '../Header/Header';

const Layout: React.FC = ({children}) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div
        sx={{
          mx: 'auto',
          px: 3,
          maxWidth: 960,
        }}
      >
        <main>{children}</main>
        <footer
          sx={{
            mt: 4,
          }}
        >
          © {new Date().getFullYear()}, Built with
          {` `}
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
      </div>
    </>
  );
};

export default Layout;
