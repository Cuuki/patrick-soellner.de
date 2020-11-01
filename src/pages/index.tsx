/** @jsx jsx */
import {jsx} from 'theme-ui';
import React from 'react';
import {graphql, useStaticQuery} from 'gatsby';
import Layout from '../components/Layout';
import Image from '../components/Image';
import Seo from '../components/Seo';
import SocialButton from '../components/SocialButton';

const IndexPage: React.FC = () => {
  const {site} = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          nickname
          tagline
          description
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
  const {title, nickname, tagline, description, social} = site.siteMetadata;
  console.log(title, nickname, tagline, description, social);

  return (
    <Layout>
      <Seo title="Home" />
      <div
        sx={{
          maxWidth: 280,
          mx: 'auto',
          mb: 3,
        }}
      >
        <Image relativePath="portrait.jpg" round bordered />
      </div>
      <article>
        <h1
          sx={{
            textAlign: 'center',
          }}
        >
          {`${title} (${nickname})`}
        </h1>
        <div
          sx={{
            mx: 'auto',
            mb: 4,
            maxWidth: 480,
            width: '100%',
          }}
        >
          <p>{tagline}</p>
          <p>{description}</p>
        </div>
        <footer
          sx={{
            display: 'flex',
            justifyContent: 'space-evenly',
            mx: 'auto',
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
      </article>
    </Layout>
  );
};

export default IndexPage;
