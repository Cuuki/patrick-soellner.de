/** @jsxImportSource theme-ui */
import type { GetStaticProps, InferGetStaticPropsType } from 'next';
import type { I18nRecord, Locale } from '../types/i18n';
import { useThemeUI } from 'theme-ui';
import pageDataI18n from '../data/page.config';
import profileDataI18n from '../data/profile.config';
import experienceDataI18n from '../data/experience.config';
import trainingDataI18n from '../data/training.config';
import skillDataI18n from '../data/skill.config';
import certificatesDataI18n from '../data/certificate.config';
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
import { SkillGroup } from '../components/SkillGroup';
import { TopSkillList } from '../components/TopSkillList';

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
  skillData: typeof skillDataI18n[Locale];
  certificatesData: typeof certificatesDataI18n[Locale];
}> = async ({ locale = 'en' }) => {
  const l = locale as Locale;

  return {
    props: {
      locale: l,
      pageData: pageDataI18n[l],
      profileData: profileDataI18n[l],
      experienceData: experienceDataI18n[l],
      trainingData: trainingDataI18n[l],
      skillData: skillDataI18n[l],
      certificatesData: certificatesDataI18n[l],
    },
  };
};

export default function Home({
  locale,
  pageData,
  profileData,
  experienceData,
  trainingData,
  skillData,
  certificatesData,
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
            <TopSkillList
              ratingText={t('skillsRatingExpertText')}
              rating={3}
              skills={skillData.filter((skill) => skill.rating === 3 && skill.isTop)}
            />
            <TopSkillList
              ratingText={t('skillsRatingExtendedText')}
              rating={2}
              skills={skillData.filter((skill) => skill.rating === 2 && skill.isTop)}
            />
            <TopSkillList
              ratingText={t('skillsRatingBasicText')}
              rating={1}
              skills={skillData.filter((skill) => skill.rating === 1 && skill.isTop)}
            />

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
            <h2 sx={{ mt: 0 }}>{t('skillsHeading')}</h2>
            {/* TODO: extract into typed rating legend component */}
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
              <SkillGroup
                title={<h3 sx={{ mt: 0 }}>{t('skillsLanguagesTitle')}</h3>}
                skills={skillData.filter((skill) => skill.group === 'languages')}
              />
              <SkillGroup
                title={<h3 sx={{ mt: 0 }}>{t('skillsFrameworksTitle')}</h3>}
                skills={skillData.filter((skill) => skill.group === 'frameworks')}
              />
              <SkillGroup
                title={<h3 sx={{ mt: 0 }}>{t('skillsToolsTitle')}</h3>}
                skills={skillData.filter((skill) => skill.group === 'tools')}
              />
              <SkillGroup
                title={<h3 sx={{ mt: 0 }}>{t('skillsMethodsTitle')}</h3>}
                skills={skillData.filter((skill) => skill.group === 'methods')}
              />
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
              <SkillGroup
                title={<h3 sx={{ mt: 0 }}>{t('skillsStrengthsTitle')}</h3>}
                skills={skillData.filter((skill) => skill.group === 'strengths')}
              />
              <SkillGroup
                title={<h3 sx={{ mt: 0 }}>{t('skillsInterestsTitle')}</h3>}
                skills={skillData.filter((skill) => skill.group === 'interests')}
              />
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
              {certificatesData.map((certificate) => {
                return <li key={certificate.id}>{certificate.name}</li>;
              })}
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
