/** @jsx jsx */
/** @jsxFrag React.Fragment */
import { jsx } from 'theme-ui';
import React from 'react';

const ExperienceEntry: React.FC<{
  duration: string | JSX.Element;
  companyName: string;
  jobTitle?: string;
  areas: (JSX.Element | string)[];
}> = ({ duration, companyName, jobTitle, areas }) => (
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
    <hr
      sx={{
        mb: 3,
        borderWidth: '2px',
        borderColor: 'accent',
        borderStyle: 'solid',
      }}
    />
  </>
);

export default ExperienceEntry;
