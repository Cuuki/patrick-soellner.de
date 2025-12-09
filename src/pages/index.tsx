/** @jsxImportSource theme-ui */
import type { GetStaticProps, InferGetStaticPropsType } from 'next';
import type { I18nRecord, Locale } from '../types/i18n';
import pageDataI18n from '../data/page.config';
import profileDataI18n from '../data/profile.config';
import experienceDataI18n from '../data/experience.config';
import trainingDataI18n from '../data/training.config';
import skillDataI18n from '../data/skill.config';
import certificatesDataI18n from '../data/certificate.config';
import { withI18n } from '../utils/i18n';
import { SiteHead } from '../components/SiteHead';
import { DefaultLayout } from '../components/DefaultLayout';
import { SiteHeader } from '../components/SiteHeader';
import { ProfilePortrait } from '../components/ProfilePortrait';
import { SocialButtonList } from '../components/SocialButtonList';
import { ExperienceEntry } from '../components/ExperienceEntry';
import { ProfileDataListItem } from '../components/ProfileDataListItem';
import { ProfileDataList } from '../components/ProfileDataList';
import { DurationText } from '../components/DurationText';
import { SkillGroup } from '../components/SkillGroup';
import { TopSkillList } from '../components/TopSkillList';
import { SkillRatingLegend } from '../components/SkillRatingLegend';
import { fetchStaticContent } from '../utils/fetch';

const cvSectionStyle = {
  ml: 'auto',
  pb: 4,
  pl: [0, 0, 3],
  width: ['100%', null, '70%'],
  borderLeft: [null, null, '2px dashed currentColor'],
};

const i18n = {
  de: {
    topSkillsHeading: 'Tech Stack',
    profileHeading: 'Profil',
    profileMailTitle: 'E-Mail:',
    profileLanguagesTitle: 'Sprachen:',
    experienceHeading: 'Erfahrung',
    experienceDurationNowText: 'heute',
    trainingHeading: 'Ausbildung',
    skillsHeading: 'Fähigkeiten und Eigenschaften',
    skillsLanguagesTitle: 'Sprachen & Notationen',
    skillsMethodsTitle: 'Methoden / Vorgehensmodelle',
    skillsToolsTitle: 'Tools',
    skillsFrameworksTitle: 'Frameworks / Libraries',
    skillsStrengthsTitle: 'Stärken',
    skillsInterestsTitle: 'Interessen',
    certificatesHeading: 'Zertifikate',
  },
  en: {
    topSkillsHeading: 'Tech Stack',
    profileHeading: 'Profile',
    profileMailTitle: 'Mail:',
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
    certificatesHeading: 'Certificates',
  },
} satisfies I18nRecord;

export const getStaticProps: GetStaticProps<{
  locale: Locale;
  pageData: (typeof pageDataI18n)[Locale];
  profileData: (typeof profileDataI18n)[Locale];
  experienceData: (typeof experienceDataI18n)[Locale];
  trainingData: (typeof trainingDataI18n)[Locale];
  skillData: (typeof skillDataI18n)[Locale];
  certificatesData: (typeof certificatesDataI18n)[Locale];
}> = async ({ locale = 'en' }) => {
  const l = locale as Locale;
  const cvPageData = await fetchStaticContent<{ cv: { title: string } }>(`
    query {
      cv(id: "3loz5idkdut5kqsuUlBjVP", locale: "${l}") {
        title
      }
    }
  `);

  return {
    props: {
      locale: l,
      pageData: {
        ...pageDataI18n[l],
        metadata: {
          ...pageDataI18n[l].metadata,
          title: cvPageData?.cv?.title || pageDataI18n[l].metadata.title,
        },
      },
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
  const t = withI18n(i18n, locale);

  return (
    <DefaultLayout
      header={<SiteHeader siteTitle={pageData.metadata.title} maxWidth={1280} />}
      head={<SiteHead pageTitle="CV" metadata={pageData.metadata} />}
      maxWidth={1280}
    >
      <ProfilePortrait />

      <h1
        sx={{
          textAlign: 'center',
        }}
      >
        {pageData.metadata.title} (
        <a
          href={pageData.social.github}
          target="_blank"
          rel="noreferrer"
          sx={{
            'color': 'text',
            'textDecoration': 'none',
            '&:hover': {
              color: 'primary',
            },
          }}
        >
          {pageData.nickname}
        </a>
        )
      </h1>
      <p
        sx={{
          mx: 'auto',
          mb: 4,
          maxWidth: 620,
          width: '100%',
          textAlign: ['left', 'justify'],
        }}
      >
        {pageData.metadata.description}
      </p>

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
            rating={3}
            skills={skillData.filter((skill) => skill.rating === 3 && skill.isTopSkill)}
          />
          <TopSkillList
            rating={2}
            skills={skillData.filter((skill) => skill.rating === 2 && skill.isTopSkill)}
          />
          <TopSkillList
            rating={1}
            skills={skillData.filter((skill) => skill.rating === 1 && skill.isTopSkill)}
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
        <section sx={cvSectionStyle}>
          <h2 sx={{ mt: 0 }}>{t('experienceHeading')}</h2>

          {experienceData.map((experienceEntry) => {
            return (
              <ExperienceEntry
                key={experienceEntry.id}
                duration={
                  <DurationText
                    dateStart={{
                      isoString: experienceEntry.duration.startDate,
                      displayText: experienceEntry.duration.startDisplay,
                    }}
                    dateEnd={{
                      isoString:
                        experienceEntry.duration.endDate || new Date().toISOString().split('T')[0],
                      displayText:
                        experienceEntry.duration.endDisplay || t('experienceDurationNowText'),
                    }}
                  />
                }
                companyName={experienceEntry.company}
                jobTitle={experienceEntry.jobTitle}
                description={experienceEntry.description}
                areas={experienceEntry.areas}
                technologies={experienceEntry.technologies}
                projects={experienceEntry.projects}
              />
            );
          })}
        </section>
        <section sx={cvSectionStyle}>
          <h2 sx={{ mt: 0 }}>{t('trainingHeading')}</h2>
          {trainingData.map((training) => {
            return (
              <ExperienceEntry
                key={training.id}
                duration={`${training.duration.startDisplay} - ${training.duration.endDisplay}`}
                companyName={training.school}
                areas={training.focus}
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
        </section>
        <section sx={cvSectionStyle}>
          <h2 sx={{ mt: 0 }}>{t('skillsHeading')}</h2>
          <SkillRatingLegend />
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
              title={<h3 sx={{ m: 0 }}>{t('skillsLanguagesTitle')}</h3>}
              skills={skillData.filter((skill) => skill.group === 'languages')}
            />
            <SkillGroup
              title={<h3 sx={{ m: 0 }}>{t('skillsFrameworksTitle')}</h3>}
              skills={skillData.filter((skill) => skill.group === 'frameworks')}
            />
            <SkillGroup
              title={<h3 sx={{ m: 0 }}>{t('skillsToolsTitle')}</h3>}
              skills={skillData.filter((skill) => skill.group === 'tools')}
            />
            <SkillGroup
              title={<h3 sx={{ m: 0 }}>{t('skillsMethodsTitle')}</h3>}
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
              title={<h3 sx={{ m: 0 }}>{t('skillsStrengthsTitle')}</h3>}
              skills={skillData.filter((skill) => skill.group === 'strengths')}
            />
            <SkillGroup
              title={<h3 sx={{ m: 0 }}>{t('skillsInterestsTitle')}</h3>}
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
        </section>
        <section sx={{ ...cvSectionStyle, pb: 0 }}>
          <h2 sx={{ mt: 0 }}>{t('certificatesHeading')}</h2>
          <ul>
            {certificatesData.map((certificate) => {
              return <li key={certificate.id}>{certificate.name}</li>;
            })}
          </ul>
        </section>
      </div>
      <hr
        sx={{
          borderWidth: '2px',
          borderColor: 'primary',
          borderStyle: 'solid',
        }}
      />

      <SocialButtonList socialData={pageData.social} />
    </DefaultLayout>
  );
}
