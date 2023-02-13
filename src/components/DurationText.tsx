/** @jsxImportSource theme-ui */
import React from 'react';
import { Clock } from 'emotion-icons/fa-solid';
import { calcDiffInYears, formatDurationString } from '../utils/date';
import { useRouter } from 'next/router';
import type { Locale } from '../types/i18n';

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
  const router = useRouter();
  const locale = router.locale as Locale;

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
          ? formatDurationString(
              calcDiffInYears(dateStartIsoString, Date.parse(dateEndIsoString)),
              locale,
            )
          : formatDurationString(calcDiffInYears(dateStartIsoString), locale)}
      </span>
    </span>
  );
};
