import type { Locale, I18nRecord } from '../types/i18n';

const i18n = {
  de: {
    month: 'Monat',
    months: 'Monate',
    year: 'Jahr',
    years: 'Jahre',
  },
  en: {
    month: 'Month',
    months: 'Months',
    year: 'Year',
    years: 'Years',
  },
} satisfies I18nRecord;

export const calcDiffInYears = (
  startDateString: string,
  endDateTimestamp: number = Date.now(),
): number => {
  const yearInMs = 1000 * 60 * 60 * 24 * 365;

  return (endDateTimestamp - Date.parse(startDateString)) / yearInMs;
};

export const formatYearString = (year: number, locale: Locale = 'en'): string => {
  if (year < 1) {
    const monthString = Math.floor(year * 12).toLocaleString('en-GB', {
      style: 'decimal',
      minimumFractionDigits: 0,
      maximumFractionDigits: 1,
    });

    const monthSuffix = monthString === '1' ? i18n[locale].month : i18n[locale].months;

    return `${monthString} ${monthSuffix}`;
  }

  const yearString = year.toLocaleString('en-GB', {
    style: 'decimal',
    minimumFractionDigits: 0,
    maximumFractionDigits: 1,
  });
  const yearSuffix = yearString === '1' ? i18n[locale].year : i18n[locale].years;

  return `${yearString} ${yearSuffix}`;
};
