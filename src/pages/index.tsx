/** @jsxImportSource theme-ui */
import type { GetStaticProps, InferGetStaticPropsType } from 'next';
import { darken } from '@theme-ui/color';
import type { I18nRecord, Locale } from '../types/i18n';
import pageConfig from '../data/page.config';
import profileDataConfig from '../data/profile-data.config';
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
import { withI18n } from '../utils/i18n';

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

const i18n = {
  de: {
    profileHeading: 'Profil',
    profileAddressTitle: 'Anschrift',
  },
  en: {
    profileHeading: 'Profile',
    profileAddressTitle: 'Living in',
  },
} satisfies I18nRecord;

export const getStaticProps: GetStaticProps<{
  locale: Locale;
  pageConfig: typeof pageConfig[Locale];
  profileDataConfig: typeof profileDataConfig[Locale];
}> = async ({ locale = 'en' }) => {
  const l = locale as Locale;

  return {
    props: {
      locale: l,
      pageConfig: pageConfig[l],
      profileDataConfig: profileDataConfig[l],
    },
  };
};

export default function Home({
  locale,
  pageConfig: { nickname, social, metadata },
  profileDataConfig,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const t = withI18n(i18n, locale);

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
        <PageHeading title={metadata.title} nickname={nickname} githubUrl={social.github} />
        <div
          sx={{
            mx: 'auto',
            mb: 4,
            maxWidth: 620,
            width: '100%',
            textAlign: ['left', 'justify'],
          }}
        >
          <p>{metadata.description}</p>
        </div>
        <hr
          sx={{
            borderWidth: '2px',
            borderColor: 'primary',
            borderStyle: 'solid',
          }}
        />
        <div
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            mx: 'auto',
            py: 4,
            maxWidth: 1024,
          }}
        >
          <aside sx={{ mb: [4, null], pr: [0, 0, 3], width: ['100%', null, '30%'] }}>
            <h2 sx={{ mt: 0 }}>{t('profileHeading')}</h2>
            <ProfileDataList>
              <ProfileDataListItem
                title={t('profileAddressTitle')}
                items={profileDataConfig.addressItems}
              />
              <ProfileDataListItem
                title={profileDataConfig.phone.title}
                items={profileDataConfig.phone.items}
              />
              <ProfileDataListItem
                title={profileDataConfig.mail.title}
                items={profileDataConfig.mail.items}
              />
              <ProfileDataListItem
                title={profileDataConfig.birthday.title}
                items={profileDataConfig.birthday.items}
              />
              <ProfileDataListItem
                title={profileDataConfig.languages.title}
                items={profileDataConfig.languages.items}
              />
            </ProfileDataList>
            <div
              sx={{
                '@media print': {
                  display: 'none',
                },
              }}
            >
              <SocialButtonList socialData={social} size={16} />
            </div>
            <hr
              sx={{
                mt: 4,
                borderWidth: '2px',
                borderColor: 'primary',
                borderStyle: 'solid',
              }}
            />
          </aside>
          <div sx={cvSectionStyle}>
            <h2 sx={{ mt: 0 }}>Erfahrung</h2>
            <ExperienceEntry
              duration={
                <DurationText dateStartIsoString="2022-06-01" dateEndIsoString="2022-12-13">
                  06/2022 - 12/2022
                </DurationText>
              }
              companyName="E. Breuninger GmbH & Co."
              jobTitle="Software Developer"
              description="Ablösung der bestehenden Content & Campaign Architektur innerhalb des Breuninger Fashion E-Commerce Produktes. Entwicklung von React-basierten UI-Erweiterungen für das neue Headless-Content-Management-System."
              areas={[
                'Entwicklung von Frontend-Anwendungen',
                'Erstellung eines Build-Systems auf Basis von Vite und Node zur Generierung von Self-Contained Components',
                'Entwicklung von Kampagnenseiten und Content Modulen, die mit Web Components, Storybook und Go Templates erstellt wurden',
                'Unterstützung bei der kontinuierlichen Verbesserung des Breuninger Design Systems',
                'E2E-Testautomatisierung für Content Module',
              ]}
              technologies={[
                'TypeScript',
                'Web Components',
                'Tailwind',
                'Storybook',
                'Go templates',
                'Hugo',
                'Self-contained systems',
                'Node',
                'Vite',
                'Testcafe',
                'Playwright',
                'React',
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
              description={
                'Entwicklung vieler Projekte innerhalb der Telekom E-Commerce Multi-Client Plattform im i22 Shop-Produktteam.'
              }
              areas={[
                'Entwicklung von Frontend-Anwendungen',
                'E2E-Testautomatisierung als Service',
                'Unterstützung im Tech-Recruiting',
                'Mentoring und Training von Junior Entwicklern',
                'Unternehmensweite Tech Talks über Frontend und Barrierefreiheit',
                'Unternehmensweite Initiative "Accessibility working group"',
              ]}
              technologies={[
                'Vue',
                'Nuxt',
                'TypeScript',
                'CSS3',
                'Sass',
                'Clean architecture',
                'Cypress',
              ]}
              projects={[
                <a
                  href="https://smarthome.de"
                  target="_blank"
                  rel="noreferrer"
                  sx={cvLinkStyle}
                  key={0}
                >
                  smarthome.de
                </a>,
                <a
                  href="https://shop.telekom.de"
                  target="_blank"
                  rel="noreferrer"
                  sx={cvLinkStyle}
                  key={1}
                >
                  shop.telekom.de
                </a>,
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
              description={
                'Entwicklung eines internen Tools zur vereinfachten Erstellung von Mitarbeiterprofilen. In-house Produktentwicklung.'
              }
              areas={[
                'Entwicklung von Frontend-Anwendungen',
                'Leadership, technische Planung und Koordination des Frontends für ein neues intern entwickeltes Produkt',
              ]}
              technologies={[
                'Angular',
                'Stencil',
                'TypeScript',
                'CSS3',
                'Sass',
                'Test-driven development',
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
              description={
                'Mehrere Projekte in Tourismus & Medizin sowie die Entwicklung eines WordPress-basierten Website-Builders als Produkt.'
              }
              areas={[
                'Fullstack Webentwicklung (Fokus Frontend)',
                'Koordination und Kommunikation mit dem brasilianischen Entwicklungsteam',
              ]}
              technologies={['React', 'JavaScript', 'jQuery', 'CSS3', 'Sass', 'Wordpress']}
              projects={[
                <a
                  href="https://www.lindau.de"
                  target="_blank"
                  rel="noreferrer"
                  sx={cvLinkStyle}
                  key={0}
                >
                  lindau.de
                </a>,
                <a
                  href="https://www.lindau.de/aroundme"
                  target="_blank"
                  rel="noreferrer"
                  sx={cvLinkStyle}
                  key={1}
                >
                  lindau.de/aroundme
                </a>,
                <a
                  href="https://www.insel-sylt.de"
                  target="_blank"
                  rel="noreferrer"
                  sx={cvLinkStyle}
                  key={2}
                >
                  insel-sylt.de
                </a>,
                <a
                  href="https://www.canvayo.com"
                  target="_blank"
                  rel="noreferrer"
                  sx={cvLinkStyle}
                  key={3}
                >
                  canvayo.com
                </a>,
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
              description={
                'Mehrere E-Commerce-Projekte, die mit Shopware & WooCommerce erstellt wurden.'
              }
              areas={[
                'Fullstack Webentwicklung (Fokus Frontend)',
                'Technisches Projektmanagement',
                'Technische Kundenbetreuung',
              ]}
              technologies={[
                'HTML5',
                'JavaScript',
                'jQuery',
                'CSS3',
                'Sass',
                'Wordpress',
                'Shopware',
              ]}
            />
            <ExperienceEntry
              duration={
                <DurationText dateStartIsoString="2012-09-01" dateEndIsoString="2015-08-31">
                  09/2012 - 08/2015
                </DurationText>
              }
              companyName="Publicis Groupe S.A."
              jobTitle="Ausbildung zum Fachinformatiker für Anwendungsentwicklung"
              areas={['Webentwicklung']}
            />
          </div>
          <div sx={cvSectionStyle}>
            <h2 sx={{ mt: 0 }}>Ausbildung</h2>
            <ExperienceEntry
              duration="09/2012 - 08/2015"
              companyName="Staatliche Berufsschule Erlangen, Deutschland"
              areas={[
                <>
                  Fachinformatiker für Anwendungsentwicklung (
                  <a
                    href="https://www.ihk-nuernberg.de/"
                    target="_blank"
                    rel="noreferrer"
                    sx={{
                      'color': 'text',
                      'textDecoration': 'none',
                      '&:hover': {
                        color: darken('text', 0.1),
                      },
                    }}
                  >
                    IHK
                  </a>{' '}
                  zertifizierter Abschluss)
                </>,
              ]}
              hasSeparator={false}
            />
            <hr
              sx={{
                mt: 4,
                borderWidth: '2px',
                borderColor: 'primary',
                borderStyle: 'solid',
              }}
            />
          </div>
          <div sx={cvSectionStyle}>
            <h2 sx={{ mt: 0 }}>Fähigkeiten und Eigenschaften</h2>
            <em>(1) - Grundwissen, (2) - Vertiefte Kenntnisse, (3) - Fachkenntnisse</em>
            <div
              sx={{
                'display': 'grid',
                'gridTemplateColumns': ['1fr', '1fr 1fr'],
                '@media print': {
                  gridTemplateColumns: '1fr 1fr',
                },
              }}
            >
              <dl>
                <dt>
                  <h3 sx={{ mt: 0 }}>Sprachen & Notationen</h3>
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
                  <h3 sx={{ mt: 0 }}>Methoden</h3>
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
                  Test-driven Development (<em>2</em>)
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
                  <h3 sx={{ mt: 0 }}>Sonstiges</h3>
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
                'display': 'grid',
                'gridTemplateColumns': ['1fr', '1fr 1fr'],
                '@media print': {
                  gridTemplateColumns: '1fr 1fr',
                },
              }}
            >
              <dl>
                <dt>
                  <h3 sx={{ mt: 0 }}>Stärken</h3>
                </dt>
                <dd>Mentoring</dd>
                <dd>Wissenstransfer</dd>
                <dd>Organisation</dd>
                <dd>Teamwork</dd>
                <dd>Kommunikation</dd>
                <dd>Verlässlichkeit</dd>
                <dd>Ehrlichkeit</dd>
                <dd>Stressresistenz</dd>
                <dd>Detailtreue</dd>
                <dd>Barrierefreiheit</dd>
                <dd>Semantik</dd>
                <dd>User driven testing</dd>
                <dd>User driven development</dd>
              </dl>
              <dl>
                <dt>
                  <h3 sx={{ mt: 0 }}>Interessen</h3>
                </dt>
                <dd>Serien und Filme</dd>
                <dd>Motorräder / Harley Davidson</dd>
                <dd>Musik und Gesang</dd>
                <dd>Cross-country Trekking</dd>
                <dd>Reisen in der Natur</dd>
                <dd>Smart Home</dd>
                <dd>Web Technologien</dd>
              </dl>
            </div>
            <hr
              sx={{
                mt: 4,
                borderWidth: '2px',
                borderColor: 'primary',
                borderStyle: 'solid',
              }}
            />
          </div>
          <div sx={{ ...cvSectionStyle, pb: 0 }}>
            <h2 sx={{ mt: 0 }}>Zertifikate</h2>
            <ul>
              <li>ISTQB® Certified Tester - Foundation level</li>
              <li>ITIL® Foundation Certificate in IT Service Management</li>
            </ul>
          </div>
        </div>
        <hr
          sx={{
            borderWidth: '2px',
            borderColor: 'primary',
            borderStyle: 'solid',
          }}
        />
        <PageFooter socialData={social} />
      </article>
    </Layout>
  );
}
