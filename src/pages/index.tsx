/** @jsxImportSource theme-ui */
import type { GetStaticProps, InferGetStaticPropsType } from 'next';
import pageConfig from '../data/page.config';
import { calcDiffInYears } from '../utils/date';
import { PageHead } from '../components/PageHead';
import { Layout } from '../components/Layout';
import { Header } from '../components/Header';
import { ProfilePortrait } from '../components/ProfilePortrait';
import { SocialButtonList } from '../components/SocialButtonList';
import { ExperienceEntry } from '../components/ExperienceEntry';
import { ProfileDataListItem } from '../components/ProfileDataListItem';
import { PageHeading } from '../components/PageHeading';
import { PageFooter } from '../components/PageFooter';
import { ProfileDataList } from '../components/ProfileDataList';
import { DurationText } from '../components/DurationText';

export const getStaticProps: GetStaticProps<typeof pageConfig> = async () => {
  return {
    props: pageConfig,
  };
};

const myAge = Math.round(calcDiffInYears('1995-11-18'));
const cvSectionStyle = {
  ml: 'auto',
  pb: 4,
  pl: [0, 0, 3],
  width: ['100%', null, '70%'],
  borderLeft: [null, null, '2px dashed currentColor'],
};
const cvLinkStyle = {
  'color': 'text',
  'textDecoration': 'none',
  '&:hover': {
    color: 'primary',
  },
};

export default function Home({
  tagline,
  nickname,
  social,
  metadata,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Layout header={<Header siteTitle={metadata.title} maxWidth={1280} />} maxWidth={1280}>
      <PageHead pageTitle="CV" metadata={metadata} />

      <div
        sx={{
          maxWidth: 280,
          mx: 'auto',
          mb: 3,
        }}
      >
        <ProfilePortrait />
      </div>
      <article>
        <PageHeading title={metadata.title} nickname={nickname} />
        <div
          sx={{
            mx: 'auto',
            mb: 4,
            maxWidth: 620,
            width: '100%',
            textAlign: ['left', 'justify'],
          }}
        >
          <strong>{tagline}</strong>
          <p>{metadata.description}</p>
        </div>
        <hr
          sx={{
            borderColor: 'accent',
          }}
        />
        <div
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            mx: 'auto',
            py: 4,
            maxWidth: 980,
          }}
        >
          <aside sx={{ mb: [4, null], pr: [0, 0, 3], width: ['100%', null, '30%'] }}>
            <h2 sx={{ mt: 0 }}>Profile</h2>
            <ProfileDataList>
              <ProfileDataListItem title="Living in:" items={['Bonn / Cologne area']} />
              <ProfileDataListItem title="Age:" items={[myAge.toString()]} />
              <ProfileDataListItem
                title="Languages:"
                items={['German (Native)', 'English (Fluid)', 'French (Basics)']}
              />
            </ProfileDataList>
            <SocialButtonList socialData={social} size={16} />
            <hr
              sx={{
                mt: 4,
                borderWidth: '2px',
                borderColor: 'accent',
                borderStyle: 'solid',
              }}
            />
          </aside>
          <div sx={cvSectionStyle}>
            <h2 sx={{ mt: 0 }}>Experience</h2>
            <ExperienceEntry
              duration={
                <DurationText dateStartIsoString="2022-06-01" dateEndIsoString="2022-12-13">
                  06/2022 - 12/2022
                </DurationText>
              }
              companyName="Breuninger"
              jobTitle="Software Developer"
              areas={[
                <>
                  <strong>Fashion E-Commerce product</strong>
                </>,
                'Frontend application development',
                'Build system based on Vite and Node to generate self-contained components',
                'Campaign & Content modules built with Web Components, Storybook and Go Templates',
                'Support to continually improve the Breuninger Design System',
                'TypeScript, Web Components, Tailwind, Go Templates / Hugo SSG, Self-Contained Systems',
                'E2E testing automation (Testcafe, Playwright)',
              ]}
            />
            <ExperienceEntry
              duration={
                <DurationText dateStartIsoString="2021-01-01" dateEndIsoString="2022-05-31">
                  01/2021 - 05/2022
                </DurationText>
              }
              companyName="i22 Digitalagentur GmbH"
              jobTitle="Senior Frontend Developer"
              areas={[
                <>
                  <strong>Telekom E-Commerce platform</strong>
                </>,
                'Frontend application development',
                'Tech recruiting support',
                'Mentoring and training of junior developers',
                'Frontend and accessibility tech talks',
                'Vue / Nuxt, TypeScript, CSS3 / Sass, Clean architecture',
                'E2E testing automation (Cypress)',
              ]}
            />
            <ExperienceEntry
              duration={
                <DurationText dateStartIsoString="2020-07-01" dateEndIsoString="2020-12-31">
                  07/2020 - 12/2020
                </DurationText>
              }
              companyName="ISO Public Services GmbH"
              jobTitle="Frontend Developer"
              areas={[
                <>
                  <strong>Public administration, In-House product development</strong>
                </>,
                'Frontend application development',
                'Angular / Stencil, TypeScript, CSS3 / Sass, TDD',
              ]}
            />
            <ExperienceEntry
              duration={
                <DurationText dateStartIsoString="2018-03-01" dateEndIsoString="2020-06-30">
                  03/2018 - 06/2020
                </DurationText>
              }
              companyName="LottaLeben Media GmbH"
              jobTitle="Software Developer"
              areas={[
                <>
                  <strong>Tourism, medicine, In-House product development</strong>
                </>,
                'Fullstack web development (Focus Frontend)',
                'React, JavaScript / jQuery, CSS3 / Sass, Wordpress',
              ]}
            />
            <ExperienceEntry
              duration={
                <DurationText dateStartIsoString="2015-09-01" dateEndIsoString="2018-02-28">
                  09/2015 - 02/2018
                </DurationText>
              }
              companyName="DROW GmbH"
              jobTitle="Software Developer"
              areas={[
                <>
                  <strong>E-commerce (Shopware, WooCommerce)</strong>
                </>,
                'Fullstack web development (Focus Frontend)',
                'HTML5, JavaScript / jQuery, CSS3 / Sass, Wordpress, Shopware',
              ]}
            />
            <ExperienceEntry
              duration={
                <DurationText dateStartIsoString="2012-09-01" dateEndIsoString="2015-08-31">
                  09/2012 - 08/2015
                </DurationText>
              }
              companyName="Publicis Groupe S.A."
              jobTitle="Trainee - IT specialist for application development"
              areas={['Web development']}
            />
          </div>
          <div sx={cvSectionStyle}>
            <h2 sx={{ mt: 0 }}>Training</h2>
            <ExperienceEntry
              duration="09/2012 - 08/2015"
              companyName="Publicis Groupe S.A."
              jobTitle="Vocational school Erlangen"
              areas={[
                <>
                  <strong>Graduation:</strong> IT specialist for application development (IHK)
                </>,
              ]}
            />
          </div>
          <div sx={cvSectionStyle}>
            <h2 sx={{ mt: 0 }}>Skills and qualities</h2>
            <em>(1) - Basics, (2) - Extended knowledge, (3) - Long term experience</em>
            <div
              sx={{
                display: 'grid',
                gridTemplateColumns: ['1fr', '1fr 1fr'],
              }}
            >
              <dl>
                <dt>
                  <h3 sx={{ mt: 0 }}>Languages</h3>
                </dt>
                <dd>
                  JavaScript (<em>3</em>)
                </dd>
                <dd>
                  TypeScript (<em>3</em>)
                </dd>
                <dd>
                  PHP (<em>2</em>)
                </dd>
                <dd>
                  Go (<em>1</em>)
                </dd>
                <dd>
                  Java (<em>1</em>)
                </dd>
                <dd>
                  CSS3 (<em>3</em>)
                </dd>
                <dd>
                  Sass (<em>3</em>)
                </dd>
                <dd>
                  HTML5 (<em>3</em>)
                </dd>
                <dd>
                  Markdown (<em>3</em>)
                </dd>
                <dd>
                  GraphQL (<em>2</em>)
                </dd>
              </dl>
              <dl>
                <dt>
                  <h3 sx={{ mt: 0 }}>Methods</h3>
                </dt>
                <dd>
                  Scrum (<em>3</em>)
                </dd>
                <dd>
                  Kanban (<em>2</em>)
                </dd>
                <dd>
                  Refactoring (<em>3</em>)
                </dd>
                <dd>
                  Code Reviews (<em>3</em>)
                </dd>
                <dd>
                  Pair Programming (<em>3</em>)
                </dd>
                <dd>
                  Mob Programming (<em>3</em>)
                </dd>
                <dd>
                  Test Driven Development (<em>2</em>)
                </dd>
                <dd>
                  Clean Code (<em>2</em>)
                </dd>
                <dd>
                  SOLID (<em>1</em>)
                </dd>
                <dd>
                  Object Oriented Programming (<em>2</em>)
                </dd>
                <dd>
                  Functional Programming (<em>2</em>)
                </dd>
                <dd>
                  Clean Architecture (<em>2</em>)
                </dd>
                <dd>
                  Self-contained Systems (<em>2</em>)
                </dd>
                <dd>
                  Continuous Integration (<em>2</em>)
                </dd>
              </dl>
              <dl>
                <dt>
                  <h3 sx={{ mt: 0 }}>Tools</h3>
                </dt>
                <dd>
                  Git (<em>3</em>)
                </dd>
                <dd>
                  npm / yarn / pnpm (<em>2</em>)
                </dd>
                <dd>
                  Vite (<em>3</em>)
                </dd>
                <dd>
                  Webpack (<em>2</em>)
                </dd>
                <dd>
                  Docker (<em>1</em>)
                </dd>
                <dd>
                  Travis CI (<em>1</em>)
                </dd>
                <dd>
                  Github Actions (<em>1</em>)
                </dd>
                <dd>
                  Gitlab CI (<em>2</em>)
                </dd>
                <dd>
                  Storybook (<em>3</em>)
                </dd>
              </dl>
              <dl>
                <dt>
                  <h3 sx={{ mt: 0 }}>Frameworks / Libraries</h3>
                </dt>
                <dd>
                  React (<em>3</em>)
                </dd>
                <dd>
                  Next.js (<em>2</em>)
                </dd>
                <dd>
                  Vue 2 (<em>3</em>)
                </dd>
                <dd>
                  Vue 3 (<em>2</em>)
                </dd>
                <dd>
                  Nuxt (<em>2</em>)
                </dd>
                <dd>
                  Redux / Vuex (<em>3</em>)
                </dd>
                <dd>
                  Angular 2 (<em>2</em>)
                </dd>
                <dd>
                  LIT (<em>2</em>)
                </dd>
                <dd>
                  Apollo Client (<em>1</em>)
                </dd>
                <dd>
                  Node.js (<em>2</em>)
                </dd>
                <dd>
                  Jest (<em>3</em>)
                </dd>
                <dd>
                  Testing Library (<em>3</em>)
                </dd>
                <dd>
                  Cypress (<em>2</em>)
                </dd>
                <dd>
                  Testcafe (<em>2</em>)
                </dd>
                <dd>
                  Playwright (<em>1</em>)
                </dd>
                <dd>
                  Tailwind CSS (<em>3</em>)
                </dd>
                <dd>
                  Bootstrap 4 (<em>3</em>)
                </dd>
              </dl>
              <dl>
                <dt>
                  <h3 sx={{ mt: 0 }}>Other</h3>
                </dt>
                <dd>
                  Shopware (<em>2</em>)
                </dd>
                <dd>
                  WooCommerce (<em>2</em>)
                </dd>
                <dd>
                  Jira (<em>2</em>)
                </dd>
                <dd>
                  Confluence (<em>3</em>)
                </dd>
                <dd>
                  Figma (<em>1</em>)
                </dd>
              </dl>
            </div>
            <div
              sx={{
                display: 'grid',
                gridTemplateColumns: ['1fr', '1fr 1fr'],
              }}
            >
              <dl>
                <dt>
                  <h3 sx={{ mt: 0 }}>Strengths</h3>
                </dt>
                <dd>Mentoring</dd>
                <dd>Knowledge transfer</dd>
                <dd>Organisation</dd>
                <dd>Teamwork</dd>
                <dd>Communication</dd>
                <dd>Reliability</dd>
                <dd>Honesty</dd>
                <dd>Stress resistance</dd>
                <dd>Attention to detail</dd>
                <dd>Accessibility</dd>
                <dd>Semantics</dd>
                <dd>User driven testing</dd>
                <dd>User driven development</dd>
              </dl>
              <dl>
                <dt>
                  <h3 sx={{ mt: 0 }}>Interests</h3>
                </dt>
                <dd>TV shows and movies</dd>
                <dd>Motorcycles / Harley Davidson</dd>
                <dd>Music and singing</dd>
                <dd>Cross-country trekking</dd>
                <dd>Nature traveling</dd>
                <dd>Smart Home</dd>
                <dd>Web technologies</dd>
              </dl>
            </div>
          </div>
          <div sx={cvSectionStyle}>
            <h2 sx={{ mt: 0 }}>Sample projects</h2>
            <ul>
              <li>
                <a href="https://smarthome.de" target="_blank" rel="noreferrer" sx={cvLinkStyle}>
                  smarthome.de
                </a>
              </li>
              <li>
                <a href="https://shop.telekom.de" target="_blank" rel="noreferrer" sx={cvLinkStyle}>
                  shop.telekom.de
                </a>
              </li>
              <li>
                <a href="https://www.lindau.de" target="_blank" rel="noreferrer" sx={cvLinkStyle}>
                  lindau.de
                </a>
              </li>
              <li>
                <a
                  href="https://www.lindau.de/aroundme"
                  target="_blank"
                  rel="noreferrer"
                  sx={cvLinkStyle}
                >
                  lindau.de/aroundme
                </a>
              </li>
              <li>
                <a
                  href="https://www.insel-sylt.de"
                  target="_blank"
                  rel="noreferrer"
                  sx={cvLinkStyle}
                >
                  insel-sylt.de
                </a>
              </li>
              <li>
                <a href="https://www.canvayo.com" target="_blank" rel="noreferrer" sx={cvLinkStyle}>
                  canvayo.com
                </a>
              </li>
            </ul>
          </div>
          <div sx={{ ...cvSectionStyle, pb: 0 }}>
            <h2 sx={{ mt: 0 }}>Certificates</h2>
            <ul>
              <li>ISTQB® Certified Tester - Foundation level</li>
              <li>ITIL® Foundation Certificate in IT Service Management</li>
            </ul>
          </div>
        </div>
        <hr
          sx={{
            borderColor: 'accent',
          }}
        />
        <PageFooter socialData={social} />
      </article>
    </Layout>
  );
}
