/** @jsxImportSource theme-ui */
import type { ReactElement } from 'react';
import type { I18nRecord } from '../types/i18n';
import { Children } from 'react';
import useI18n from '../utils/hooks/useI18n';
import { markdownLinkToHtml } from '../utils/markdown';

type ExperienceEntryProps = {
  duration: string | ReactElement;
  companyName: string;
  jobTitle?: string;
  description?: string | ReactElement;
  areas: string[];
  technologies?: string[];
  projects?: string[];
  hasSeparator?: boolean;
};

const i18n = {
  de: {
    jobAtText: 'bei',
    descriptionHeading: 'Beschreibung',
    areasHeading: 'Fachgebiete',
    technologiesHeading: 'Technologien',
    projectsHeading: 'Öffentliche Projekte',
  },
  en: {
    jobAtText: 'at',
    descriptionHeading: 'Description',
    areasHeading: 'Areas',
    technologiesHeading: 'Technologies',
    projectsHeading: 'Public projects',
  },
} satisfies I18nRecord;

const cvLinkStyle = {
  'color': 'text',
  'textDecoration': 'none',
  '&:hover': {
    color: 'primary',
  },
};

export const ExperienceEntry = ({
  duration,
  companyName,
  jobTitle,
  description,
  areas,
  technologies = [],
  projects = [],
  hasSeparator = true,
}: ExperienceEntryProps) => {
  const { t } = useI18n(i18n);
  return (
    <>
      <div
        sx={{
          display: 'flex',
          alignItems: 'flex-start',
          flexWrap: ['wrap', 'nowrap', 'wrap', 'nowrap'],
          gap: [1, 3, 1, 3],
        }}
      >
        <strong sx={{ width: ['100%', '30%', '100%', '30%'] }}>{duration}</strong>
        <div sx={{ width: ['100%', '70%', '100%', '70%'] }}>
          <h3 sx={{ mt: 0 }}>
            {!!jobTitle && (
              <>
                <strong>{jobTitle}</strong> {t('jobAtText')}
              </>
            )}{' '}
            {companyName}
          </h3>
          {!!description && (
            <div>
              <h4 sx={{ mb: 1 }}>{t('descriptionHeading')}:</h4>
              <p sx={{ mt: 0 }}>{description}</p>
            </div>
          )}
          <div>
            <h4 sx={{ mb: 1 }}>{t('areasHeading')}:</h4>
            <ul sx={{ mt: 0 }}>
              {Children.toArray(
                areas.map((area) => (
                  <li
                    sx={{ '> a': cvLinkStyle }}
                    dangerouslySetInnerHTML={{
                      __html: markdownLinkToHtml(area),
                    }}
                  />
                )),
              )}
            </ul>
          </div>
          {technologies.length > 0 && (
            <div>
              <h4 sx={{ mb: 1 }}>{t('technologiesHeading')}:</h4>
              <ul
                sx={{
                  mt: 0,
                  display: ['block', 'grid'],
                  gridTemplateColumns: '1fr 1fr',
                }}
              >
                {Children.toArray(technologies.map((technology) => <li>{technology}</li>))}
              </ul>
            </div>
          )}
          {projects.length > 0 && (
            <div>
              <h4 sx={{ mb: 1 }}>{t('projectsHeading')}:</h4>
              <ul sx={{ mt: 0 }}>
                {Children.toArray(
                  projects.map((project) => (
                    <li
                      sx={{ '> a': cvLinkStyle }}
                      dangerouslySetInnerHTML={{
                        __html: markdownLinkToHtml(project),
                      }}
                    />
                  )),
                )}
              </ul>
            </div>
          )}
        </div>
      </div>
      {hasSeparator && (
        <hr
          sx={{
            mb: 3,
            borderWidth: '1px',
            borderColor: 'primary',
            borderStyle: 'solid',
          }}
        />
      )}
    </>
  );
};
