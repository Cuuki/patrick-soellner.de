/** @jsx jsx */
import {jsx} from 'theme-ui';
import React from 'react';
import {graphql, useStaticQuery} from 'gatsby';
import SocialButton from './SocialButton';

const PageHeading: React.FC = () => {
  const {site} = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          social {
            github
            twitter
            xing
            linkedIn
          }
        }
      }
    }
  `);
  const {social} = site.siteMetadata;

  return (
    <footer
      sx={{
        display: 'flex',
        justifyContent: 'space-evenly',
        mx: 'auto',
        mt: 4,
        maxWidth: 480,
        width: '100%',
      }}
    >
      <SocialButton
        url={social.xing}
        type="xing"
        sx={{
          mx: 2,
        }}
      />
      <SocialButton
        url={social.linkedIn}
        type="linkedIn"
        sx={{
          mx: 2,
        }}
      />
      <SocialButton
        url={social.github}
        type="github"
        sx={{
          mx: 2,
        }}
      />
      <SocialButton
        url={social.twitter}
        type="twitter"
        sx={{
          mx: 2,
        }}
      />
    </footer>
  );
};

export default PageHeading;
