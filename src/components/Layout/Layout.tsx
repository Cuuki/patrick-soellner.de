/** @jsx jsx */
import {jsx} from 'theme-ui';
import React from 'react';
import {graphql, useStaticQuery} from 'gatsby';
import Header from '../Header';
import Footer from '../Footer';

const Layout: React.FC = ({children = null}) => {
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
    <div
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }}
    >
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div
        sx={{
          display: 'flex',
          flexDirection: 'column',
          mx: 'auto',
          px: 3,
          maxWidth: 960,
          width: '100%',
          flex: '1 0 auto',
        }}
      >
        <main
          sx={{
            my: 'auto',
            p: 4,
            borderRadius: 25,
            bg: 'muted',
            boxShadow: theme => `0 0 40px ${theme.colors.muted}`,
          }}
        >
          {children}
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
