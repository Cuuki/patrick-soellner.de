/** @jsx jsx */
import {jsx} from 'theme-ui';
import React from 'react';
import {graphql, useStaticQuery} from 'gatsby';
import Layout from '../components/Layout';
import Image from '../components/Image';
import Seo from '../components/Seo';
import PageHeading from '../components/PageHeading';
import PageFooter from '../components/PageFooter';

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
  const {tagline, description} = site.siteMetadata;

  return (
    <Layout maxWidth={1280}>
      <Seo title="CV" />
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
        <PageHeading />
        <div
          sx={{
            mx: 'auto',
            mb: 4,
            maxWidth: 620,
            width: '100%',
            textAlign: 'center',
          }}
        >
          <strong>{tagline}</strong>
          <p>{description}</p>
        </div>
        <hr />
        <div
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            mx: 'auto',
            py: 4,
            maxWidth: 980,
          }}
        >
          <aside sx={{mb: [4, null], px: 3, width: ['100%', null, '30%']}}>
            <h2>Profile</h2>
            <button
              sx={{
                background: 'none',
                color: 'inherit',
                boxShadow: 'none',
                appearance: 'none',
                border: '1px solid currentColor',
                borderRadius: 6,
                px: 3,
                py: 2,
                cursor: 'pointer',
              }}
              type="button"
            >
              Reveal personal information
            </button>
            <dl>
              <dt>
                <strong>Address:</strong>
              </dt>
              <dd>
                <address>******</address>
              </dd>
              <dt>
                <strong>Mobile:</strong>
              </dt>
              <dd>******</dd>
              <dt>
                <strong>Email:</strong>
              </dt>
              <dd>******</dd>
              <dt>
                <strong>Birthday:</strong>
              </dt>
              <dd>******</dd>
              <dt>
                <strong>Languages:</strong>
              </dt>
              <dd>German (Native)</dd>
              <dd>English (Fluid)</dd>
              <dd>French (Basics)</dd>
            </dl>
          </aside>
          <div sx={{mb: 4, px: 3, width: ['100%', null, '70%']}}>
            <h2>Experience</h2>
            <div
              sx={{
                display: 'flex',
                flexWrap: ['wrap', 'nowrap', 'wrap', 'nowrap'],
                gap: [1, 4, 1, 5],
              }}
            >
              <strong>07/2020 - 12/2020</strong>
              <div sx={{width: ['100%', 'auto', '100%', 'auto']}}>
                <h3 sx={{mt: 0}}>ISO Public Services GMBH</h3>
                <strong>Frontend Developer</strong>
                <ul>
                  <li>Frontend Web Development</li>
                  <li>Angular / Stencil, TypeScript, CSS3 / Sass, TDD</li>
                  <li>Public administration</li>
                </ul>
              </div>
            </div>
          </div>
          <div sx={{ml: 'auto', px: 3, width: ['100%', null, '70%']}}>
            <h2>Skills</h2>
            <span>(1) - Basics, (2) - Extended, (3) - Experienced</span>
            <ul>
              <li>JavaScript (3)</li>
            </ul>
          </div>
        </div>
        <hr />
        <PageFooter />
      </article>
    </Layout>
  );
};

export default IndexPage;
