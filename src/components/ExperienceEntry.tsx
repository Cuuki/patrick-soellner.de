/** @jsxImportSource theme-ui */
import type { ReactElement } from 'react';

type ExperienceEntryProps = {
  duration: string | ReactElement;
  companyName: string;
  jobTitle?: string;
  description?: string | ReactElement;
  // @TODO: figure out why this causes JSX elements in array to throw key prop eslint error
  areas: (ReactElement | string)[];
  technologies?: (ReactElement | string)[];
  projects?: ReactElement[];
  hasSeparator?: boolean;
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
}: ExperienceEntryProps) => (
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
              <strong>{jobTitle}</strong> bei
            </>
          )}{' '}
          {companyName}
        </h3>
        {!!description && (
          <div>
            <h4 sx={{ mb: 1 }}>Beschreibung:</h4>
            <p sx={{ mt: 0 }}>{description}</p>
          </div>
        )}
        <div>
          <h4 sx={{ mb: 1 }}>Fachgebiete:</h4>
          <ul sx={{ mt: 0 }}>
            {areas.map((area, index) => (
              <li key={`area-${index}`}>{area}</li>
            ))}
          </ul>
        </div>
        {technologies.length > 0 && (
          <div>
            <h4 sx={{ mb: 1 }}>Technologien:</h4>
            <ul
              sx={{
                mt: 0,
                display: ['block', 'grid'],
                gridTemplateColumns: '1fr 1fr',
              }}
            >
              {technologies.map((technology, index) => (
                <li key={`tech-${index}`}>{technology}</li>
              ))}
            </ul>
          </div>
        )}
        {projects.length > 0 && (
          <div>
            <h4 sx={{ mb: 1 }}>Öffentliche Projekte:</h4>
            <ul sx={{ mt: 0 }}>
              {projects.map((project, index) => (
                <li key={`project-${index}`}>{project}</li>
              ))}
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
