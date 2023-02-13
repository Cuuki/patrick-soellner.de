import type { Locale, I18nRecord } from '../types/i18n';
import { withI18n } from './i18n';

const i18n = {
  de: {
    monthText: 'Monat',
    monthsText: 'Monate',
    yearText: 'Jahr',
    yearsText: 'Jahre',
  },
  en: {
    monthText: 'month',
    monthsText: 'months',
    yearText: 'year',
    yearsText: 'years',
  },
} satisfies I18nRecord;

export const calcDiffInYears = (
  startDateString: string,
  endDateTimestamp: number = Date.now(),
): number => {
  const yearInMs = 1000 * 60 * 60 * 24 * 365;

  return (endDateTimestamp - Date.parse(startDateString)) / yearInMs;
};

export const formatDurationString = (years: number, locale: Locale = 'en'): string => {
  const t = withI18n(i18n, locale);

  if (years < 1) {
    const yearsInFullMonths = Math.floor(years * 12);
    const monthString = yearsInFullMonths.toLocaleString(locale, {
      style: 'decimal',
      minimumFractionDigits: 0,
      maximumFractionDigits: 1,
    });

    const monthSuffix = monthString === '1' ? t('monthText') : t('monthsText');

    return `${monthString} ${monthSuffix}`;
  }

  const yearString = years.toLocaleString(locale, {
    style: 'decimal',
    minimumFractionDigits: 0,
    maximumFractionDigits: 1,
  });
  const yearSuffix = yearString === '1' ? t('yearText') : t('yearsText');

  return `${yearString} ${yearSuffix}`;
};
