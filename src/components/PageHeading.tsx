/** @jsx jsx */
import {jsx} from 'theme-ui';
import React from 'react';
import {graphql, useStaticQuery} from 'gatsby';

const PageHeading: React.FC = () => {
  const {site} = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          nickname
        }
      }
    }
  `);
  const {title, nickname} = site.siteMetadata;

  return (
    <h1
      sx={{
        textAlign: 'center',
      }}
    >
      {`${title} (${nickname})`}
    </h1>
  );
};

export default PageHeading;
