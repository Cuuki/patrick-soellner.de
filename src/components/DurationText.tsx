/** @jsxImportSource theme-ui */
import type { ReactElement } from 'react';
import { Clock } from 'emotion-icons/fa-solid';
import { calcDiffInYears, formatDurationString } from '../utils/date';
import type { I18nRecord } from '../types/i18n';
import useI18n from '../utils/hooks/useI18n';

type DurationTextProps = {
  dateStartIsoString: string;
  dateEndIsoString?: string;
  children: ReactElement | string;
};

const i18n = {
  de: {
    labelText: 'Dauer',
  },
  en: {
    labelText: 'Duration',
  },
} satisfies I18nRecord;

export const DurationText = ({
  dateStartIsoString,
  dateEndIsoString,
  children,
}: DurationTextProps) => {
  const { t, locale } = useI18n(i18n);

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
          aria-label={t('labelText')}
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
