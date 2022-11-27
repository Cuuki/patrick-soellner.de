/** @jsxImportSource theme-ui */
import React from 'react';
import { Clock } from 'emotion-icons/fa-solid';
import { formatYearString, calcDiffInYears } from '../utils/date';

type DurationTextProps = {
  dateStartIsoString: string;
  dateEndIsoString?: string;
  children: React.ReactElement | string;
};

export const DurationText = ({
  dateStartIsoString,
  dateEndIsoString,
  children,
}: DurationTextProps) => {
  return (
    <span
      sx={{
        display: ['inline-flex', 'block', 'inline-flex', 'block'],
        alignItems: 'center',
      }}
    >
      {children}
      {', '}
      <span
        sx={{
          display: ['inline-flex', 'flex', 'inline-flex', 'flex'],
          alignItems: 'center',
          ml: [1, 0, 1, 0],
        }}
      >
        <Clock
          aria-label="Duration"
          size={16}
          sx={{
            mr: 1,
          }}
        />{' '}
        {dateEndIsoString
          ? formatYearString(calcDiffInYears(dateStartIsoString, Date.parse(dateEndIsoString)))
          : formatYearString(calcDiffInYears(dateStartIsoString))}
      </span>
    </span>
  );
};
