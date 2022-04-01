/** @jsx jsx */
/** @jsxFrag React.Fragment */
import {jsx} from 'theme-ui';
import React from 'react';
import {graphql, useStaticQuery} from 'gatsby';
import Layout from '../components/Layout';
import Image from '../components/Image';
import Seo from '../components/Seo';
import PageHeading from '../components/PageHeading';
import PageFooter from '../components/PageFooter';
import ProfileDataList from '../components/ProfileDataList';
import ProfileDataListItem from '../components/ProfileDataListItem';
import ExperienceEntry from '../components/ExperienceEntry';
import SocialButtonList from '../components/SocialButtonList';

const IndexPage: React.FC = () => {
  const {site} = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          nickname
          tagline
          description
        }
      }
    }
  `);
  const {tagline, description} = site.siteMetadata;
  const myAge = new Date().getFullYear() - 1995;
  const cvSectionStyle = {
    ml: 'auto',
    pb: 4,
    px: 3,
    width: ['100%', null, '70%'],
    borderLeft: [null, null, '2px dashed currentColor'],
  };

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
            <h2 sx={{mt: 0}}>Profile</h2>
            <ProfileDataList>
              <ProfileDataListItem
                title="Living in:"
                items={['Bonn / Cologne area']}
              />
              <ProfileDataListItem title="Age:" items={[myAge.toString()]} />
              <ProfileDataListItem
                title="Languages:"
                items={[
                  'German (Native)',
                  'English (Fluid)',
                  'French (Basics)',
                ]}
              />
            </ProfileDataList>
            <SocialButtonList size={16} />
            <hr
              sx={{
                mt: 4,
                borderWidth: '2px',
                borderColor: 'currentColor',
                borderStyle: 'solid',
              }}
            />
          </aside>
          <div sx={cvSectionStyle}>
            <h2 sx={{mt: 0}}>Experience</h2>
            <ExperienceEntry
              duration="01/2021 - now"
              companyName="i22 Digitalagentur GmbH"
              jobTitle="Senior Frontend Developer"
              areas={[
                'Frontend application development',
                'Tech recruiting support',
                'Mentoring and training of junior developers',
                'Frontend and accessibility tech talks',
                'Vue / Nuxt, TypeScript, CSS3 / Sass, Clean architecture',
                'E2E testing automation (Cypress)',
                <strong>Telekom e-commerce platform</strong>,
              ]}
            />
            <ExperienceEntry
              duration="07/2020 - 12/2020"
              companyName="ISO Public Services GmbH"
              jobTitle="Frontend Developer"
              areas={[
                'Frontend application development',
                'Angular / Stencil, TypeScript, CSS3 / Sass, TDD',
                <strong>Public administration, In-House product development</strong>,
              ]}
            />
            <ExperienceEntry
              duration="03/2018 - 06/2020"
              companyName="LottaLeben Media GmbH"
              jobTitle="Software Developer"
              areas={[
                'Fullstack web development (Focus Frontend)',
                'React, JavaScript / jQuery, CSS3 / Sass, Wordpress',
                <strong>Tourism, medicine, In-House product development</strong>,
              ]}
            />
            <ExperienceEntry
              duration="09/2015 - 02/2018"
              companyName="DROW GmbH"
              jobTitle="Software Developer"
              areas={[
                'Fullstack web development (Focus Frontend)',
                'HTML5, JavaScript / jQuery, CSS3 / Sass, Wordpress, Shopware',
                <strong>E-commerce (Shopware, WooCommerce)</strong>,
              ]}
            />
            <ExperienceEntry
              duration="09/2012 - 08/2015"
              companyName="Publicis Groupe S.A."
              jobTitle="Trainee - IT specialist for application development"
              areas={['Web development']}
            />
          </div>
          <div sx={cvSectionStyle}>
            <h2 sx={{mt: 0}}>Training</h2>
            <ExperienceEntry
              duration="09/2012 - 08/2015"
              companyName="Publicis Groupe S.A."
              jobTitle="Vocational school Erlangen"
              areas={[
                <>
                  <strong>Graduation:</strong>
                  {' '}
                  IT specialist for application development (IHK)
                </>
              ]}
            />
          </div>
          <div sx={cvSectionStyle}>
            <h2 sx={{mt: 0}}>Skills and qualities</h2>
            <span>(1) - Basics, (2) - Extended, (3) - Experienced</span>
            <ul>
              <li>JavaScript (3)</li>
            </ul>
          </div>
          <div sx={cvSectionStyle}>
            <h2 sx={{mt: 0}}>Projects</h2>
          </div>
          <div sx={{...cvSectionStyle, pb: 0}}>
            <h2 sx={{mt: 0}}>Certificates</h2>
          </div>
        </div>
        <hr />
        <PageFooter />
      </article>
    </Layout>
  );
};

export default IndexPage;
