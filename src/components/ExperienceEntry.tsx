/** @jsxImportSource theme-ui */
import type { ReactElement } from 'react';

type ExperienceEntryProps = {
  duration: string | ReactElement;
  companyName: string;
  jobTitle?: string;
  // @TODO: figure out why this causes JSX elements in array to throw key prop eslint error
  areas: (ReactElement | string)[];
  hasSeparator?: boolean;
};

export const ExperienceEntry = ({
  duration,
  companyName,
  jobTitle,
  areas,
  hasSeparator = true,
}: ExperienceEntryProps) => (
  <>
    <div
      sx={{
        display: 'flex',
        alignItems: 'center',
        flexWrap: ['wrap', 'nowrap', 'wrap', 'nowrap'],
        gap: [1, 4, 1, 4],
      }}
    >
      <strong sx={{ width: ['100%', '30%', '100%', '30%'] }}>{duration}</strong>
      <div sx={{ width: ['100%', '70%', '100%', '70%'] }}>
        <h3 sx={{ mt: 0 }}>{companyName}</h3>
        {!!jobTitle && <strong>{jobTitle}</strong>}
        <ul>
          {areas.map((area, index) => (
            <li key={`area-${index}`}>{area}</li>
          ))}
        </ul>
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
