/** @jsx jsx */
import { jsx } from 'theme-ui';
import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import SocialButton from './SocialButton';

const SocialButtonList: React.FC<{ size?: number }> = ({ size = 30 }) => {
  const { site } = useStaticQuery(graphql`
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
  const { social } = site.siteMetadata;

  return (
    <div
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
        size={size}
        sx={{
          mx: 2,
        }}
      />
      <SocialButton
        url={social.linkedIn}
        type="linkedIn"
        size={size}
        sx={{
          mx: 2,
        }}
      />
      <SocialButton
        url={social.github}
        type="github"
        size={size}
        sx={{
          mx: 2,
        }}
      />
      <SocialButton
        url={social.twitter}
        type="twitter"
        size={size}
        sx={{
          mx: 2,
        }}
      />
    </div>
  );
};

export default SocialButtonList;
