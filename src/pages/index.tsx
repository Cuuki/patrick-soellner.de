/** @jsxImportSource theme-ui */
import type { GetStaticProps, InferGetStaticPropsType } from 'next';
import type { I18nRecord, Locale } from '../types/i18n';
import { useThemeUI } from 'theme-ui';
import pageDataI18n from '../data/page.config';
import profileDataI18n from '../data/profile.config';
import experienceDataI18n from '../data/experience.config';
import trainingDataI18n from '../data/training.config';
import { withI18n } from '../utils/i18n';
import { markdownLinkToHtml } from '../utils/markdown';
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
    topSkillsHeading: 'Tech Stack',
    profileHeading: 'Profil',
    profileMailTitle: 'E-Mail:',
    profileBirthdayTitle: 'Geboren am:',
    profileLanguagesTitle: 'Sprachen:',
    experienceHeading: 'Erfahrung',
    experienceDurationNowText: 'jetzt',
    trainingHeading: 'Ausbildung',
    skillsHeading: 'Fähigkeiten und Eigenschaften',
    skillsLanguagesTitle: 'Sprachen & Notationen',
    skillsMethodsTitle: 'Methoden / Vorgehensmodelle',
    skillsToolsTitle: 'Tools',
    skillsFrameworksTitle: 'Frameworks / Libraries',
    skillsStrengthsTitle: 'Stärken',
    skillsInterestsTitle: 'Interessen',
    skillsRatingBasicText: 'Grundwissen',
    skillsRatingExtendedText: 'Vertiefte Kenntnisse',
    skillsRatingExpertText: 'Spezialwissen',
    certificatesHeading: 'Zertifikate',
  },
  en: {
    topSkillsHeading: 'Tech Stack',
    profileHeading: 'Profile',
    profileMailTitle: 'Mail:',
    profileBirthdayTitle: 'Date of birth:',
    profileLanguagesTitle: 'Languages:',
    experienceHeading: 'Experience',
    experienceDurationNowText: 'now',
    trainingHeading: 'Training',
    skillsHeading: 'Skills and qualities',
    skillsLanguagesTitle: 'Languages',
    skillsMethodsTitle: 'Methods / Strategies',
    skillsToolsTitle: 'Tools',
    skillsFrameworksTitle: 'Frameworks / Libraries',
    skillsStrengthsTitle: 'Strengths',
    skillsInterestsTitle: 'Interests',
    skillsRatingBasicText: 'Basic knowledge',
    skillsRatingExtendedText: 'In-depth knowledge',
    skillsRatingExpertText: 'Specialized knowledge',
    certificatesHeading: 'Certificates',
  },
} satisfies I18nRecord;

export const getStaticProps: GetStaticProps<{
  locale: Locale;
  pageData: typeof pageDataI18n[Locale];
  profileData: typeof profileDataI18n[Locale];
  experienceData: typeof experienceDataI18n[Locale];
  trainingData: typeof trainingDataI18n[Locale];
}> = async ({ locale = 'en' }) => {
  const l = locale as Locale;

  return {
    props: {
      locale: l,
      pageData: pageDataI18n[l],
      profileData: profileDataI18n[l],
      experienceData: experienceDataI18n[l],
      trainingData: trainingDataI18n[l],
    },
  };
};

export default function Home({
  locale,
  pageData,
  profileData,
  experienceData,
  trainingData,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const { theme } = useThemeUI();
  const t = withI18n(i18n, locale);

  return (
    <Layout header={<Header siteTitle={pageData.metadata.title} maxWidth={1280} />} maxWidth={1280}>
      <PageHead pageTitle="CV" metadata={pageData.metadata} />

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
        <PageHeading
          title={pageData.metadata.title}
          nickname={pageData.nickname}
          githubUrl={pageData.social.github}
        />
        <div
          sx={{
            mx: 'auto',
            mb: 4,
            maxWidth: 620,
            width: '100%',
            textAlign: ['left', 'justify'],
          }}
        >
          <p>{pageData.metadata.description}</p>
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
            <h2 sx={{ mt: 0 }}>{t('topSkillsHeading')}</h2>
            {/* TODO: extract into component with skills from data (with topSkill=true) and auto grouping */}
            <progress
              id="progressBarExpert"
              max={3}
              value={3}
              sx={{ width: '100%', accentColor: theme.colors?.primary }}
            >
              {t('skillsRatingExpertText')}
            </progress>
            <ul aria-describedby="progressBarExpert">
              <li>React</li>
              <li>Vue.js</li>
              <li>TypeScript</li>
              <li>JavaScript</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>Tailwind CSS</li>
              <li>Sass</li>
              <li>Storybook</li>
              <li>Jest</li>
              <li>Testing Library</li>
            </ul>

            <progress
              id="progressBarExtended"
              max={3}
              value={2}
              sx={{ width: '100%', accentColor: theme.colors?.primary }}
            >
              {t('skillsRatingExtendedText')}
            </progress>
            <ul aria-describedby="progressBarExtended">
              <li>Next.js</li>
              <li>Redux</li>
              <li>Styled Components</li>
              <li>Cypress</li>
            </ul>

            <progress
              id="progressBarBasic"
              max={3}
              value={1}
              sx={{ width: '100%', accentColor: theme.colors?.primary }}
            >
              {t('skillsRatingBasicText')}
            </progress>
            <ul aria-describedby="progressBarBasic">
              <li>Playwright</li>
              <li>Docker</li>
            </ul>

            <hr
              sx={{
                mt: 4,
                borderWidth: '1px',
                borderColor: 'primary',
                borderStyle: 'solid',
              }}
            />
            <h2 sx={{ mt: 4 }}>{t('profileHeading')}</h2>
            <ProfileDataList>
              <ProfileDataListItem title={t('profileMailTitle')} items={profileData.mailItems} />
              <ProfileDataListItem
                title={t('profileBirthdayTitle')}
                items={profileData.birthdayItems}
              />
              <ProfileDataListItem
                title={t('profileLanguagesTitle')}
                items={profileData.languagesItems}
              />
            </ProfileDataList>
            <div
              sx={{
                '@media print': {
                  display: 'none',
                },
              }}
            >
              <SocialButtonList socialData={pageData.social} size={16} />
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
            <h2 sx={{ mt: 0 }}>{t('experienceHeading')}</h2>

            {experienceData.map((experienceEntry) => {
              return (
                <ExperienceEntry
                  key={experienceEntry.id}
                  duration={
                    <DurationText
                      dateStartIsoString={experienceEntry.duration.startDate}
                      dateEndIsoString={experienceEntry.duration.endDate}
                    >
                      <span>
                        {experienceEntry.duration.startDisplay} -{' '}
                        {experienceEntry.duration.endDisplay || t('experienceDurationNowText')}
                      </span>
                    </DurationText>
                  }
                  companyName={experienceEntry.company}
                  jobTitle={experienceEntry.jobTitle}
                  description={experienceEntry.description}
                  areas={experienceEntry.areas}
                  technologies={experienceEntry.technologies}
                  projects={(experienceEntry.projects || []).map((project, index) => {
                    return (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noreferrer"
                        sx={cvLinkStyle}
                        key={index}
                      >
                        {project.text}
                      </a>
                    );
                  })}
                />
              );
            })}
          </div>
          <div sx={cvSectionStyle}>
            <h2 sx={{ mt: 0 }}>{t('trainingHeading')}</h2>
            {trainingData.map((training) => {
              return (
                <ExperienceEntry
                  key={training.id}
                  duration={`${training.duration.startDisplay} - ${training.duration.endDisplay}`}
                  companyName={training.school}
                  areas={training.focus.map((focus, index) => {
                    return (
                      <div
                        key={index}
                        sx={{ '> a': cvLinkStyle }}
                        dangerouslySetInnerHTML={{
                          __html: markdownLinkToHtml(focus),
                        }}
                      />
                    );
                  })}
                  hasSeparator={false}
                />
              );
            })}
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
            {/* TODO: extract into component with skills from data and auto grouping */}
            <h2 sx={{ mt: 0 }}>{t('skillsHeading')}</h2>
            <em>
              (1) - {t('skillsRatingBasicText')}, (2) - {t('skillsRatingExtendedText')}, (3) -{' '}
              {t('skillsRatingExpertText')}
            </em>
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
                  <h3 sx={{ mt: 0 }}>{t('skillsLanguagesTitle')}</h3>
                </dt>
                <dd>
                  JavaScript (<em>3</em>)
                </dd>
                <dd>
                  TypeScript (<em>3</em>)
                </dd>
                <dd>
                  Go (<em>1</em>)
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
                  <h3 sx={{ mt: 0 }}>{t('skillsFrameworksTitle')}</h3>
                </dt>
                <dd>
                  React (<em>3</em>)
                </dd>
                <dd>
                  Vue.js (<em>3</em>)
                </dd>
                <dd>
                  Web Components / Lit (<em>2</em>)
                </dd>
                <dd>
                  Next.js (<em>2</em>)
                </dd>
                <dd>
                  Nuxt (<em>2</em>)
                </dd>
                <dd>
                  Redux / Vuex (<em>3</em>)
                </dd>
                <dd>
                  Apollo Client (<em>1</em>)
                </dd>
                <dd>
                  Node.js (<em>2</em>)
                </dd>
                <dd>
                  Tailwind CSS (<em>3</em>)
                </dd>
                <dd>
                  Bootstrap 4 (<em>3</em>)
                </dd>
                <dd>
                  Tailwind UI / Headless UI (<em>2</em>)
                </dd>
                <dd>
                  Emotion (<em>2</em>)
                </dd>
                <dd>
                  Styled Components (<em>2</em>)
                </dd>
              </dl>
              <dl>
                <dt>
                  <h3 sx={{ mt: 0 }}>{t('skillsToolsTitle')}</h3>
                </dt>
                <dd>
                  Storybook (<em>3</em>)
                </dd>
                <dd>
                  Jest (<em>3</em>)
                </dd>
                <dd>
                  Testing Library (<em>3</em>)
                </dd>
                <dd>
                  Cypress (<em>3</em>)
                </dd>
                <dd>
                  Testcafe (<em>2</em>)
                </dd>
                <dd>
                  Playwright (<em>1</em>)
                </dd>
                <dd>
                  Jira (<em>3</em>)
                </dd>
                <dd>
                  Confluence (<em>3</em>)
                </dd>
                <dd>
                  Figma (<em>2</em>)
                </dd>
                <dd>
                  Github (<em>2</em>)
                </dd>
                <dd>
                  Gitlab (<em>3</em>)
                </dd>
                <dd>
                  npm (<em>3</em>)
                </dd>
                <dd>
                  yarn / pnpm (<em>2</em>)
                </dd>
                <dd>
                  Vite (<em>3</em>)
                </dd>
                <dd>
                  Docker (<em>1</em>)
                </dd>
                <dd>
                  AWS (<em>1</em>)
                </dd>
              </dl>
              <dl>
                <dt>
                  <h3 sx={{ mt: 0 }}>{t('skillsMethodsTitle')}</h3>
                </dt>
                <dd>
                  Scrum (<em>3</em>)
                </dd>
                <dd>
                  Kanban (<em>2</em>)
                </dd>
                <dd>
                  OKRs (<em>1</em>)
                </dd>
                <dd>
                  Atomic Design (<em>3</em>)
                </dd>
                <dd>
                  Block Element Modifier (BEM) (<em>3</em>)
                </dd>
                <dd>
                  Self-contained Systems (SCS) (<em>2</em>)
                </dd>
                <dd>
                  Component-driven Development (CDD) (<em>3</em>)
                </dd>
                <dd>
                  Test-driven Development (TDD) (<em>2</em>)
                </dd>
                <dd>
                  End-to-End Testing (<em>3</em>)
                </dd>
                <dd>
                  Monorepo (<em>2</em>)
                </dd>
                <dd>
                  Micro Frontends (<em>1</em>)
                </dd>
                <dd>
                  Responsive Design (<em>3</em>)
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
                  Continuous Integration (<em>2</em>)
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
                  <h3 sx={{ mt: 0 }}>{t('skillsStrengthsTitle')}</h3>
                </dt>
                <dd>Mentoring</dd>
                <dd>Wissenstransfer</dd>
                <dd>Organisation</dd>
                <dd>Kommunikation</dd>
                <dd>Verlässlichkeit</dd>
                <dd>Detailtreue</dd>
                <dd>Semantik & Barrierefreiheit</dd>
                <dd>User-driven Testing</dd>
              </dl>
              <dl>
                <dt>
                  <h3 sx={{ mt: 0 }}>{t('skillsInterestsTitle')}</h3>
                </dt>
                <dd>Serien, Filme & Video Games</dd>
                <dd>Motorräder / Harley Davidson</dd>
                <dd>Musik und Gesang</dd>
                <dd>Cross-country Trekking</dd>
                <dd>Reisen in der Natur</dd>
                <dd>Smart Home</dd>
                <dd>Pflanzen</dd>
                <dd>Frontend Technologien & Methoden</dd>
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
            <h2 sx={{ mt: 0 }}>{t('certificatesHeading')}</h2>
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
        <PageFooter socialData={pageData.social} />
      </article>
    </Layout>
  );
}
