import type { Locale, I18nRecord } from '../types/i18n';
import { withI18n } from './i18n';

const i18n = {
  de: {
    monthText: 'Monat',
    monthsText: 'Monate',
    yearText: 'Jahr',
    yearsText: 'Jahre',
    lessThanOneMonth: '< 1 Monat',
  },
  en: {
    monthText: 'month',
    monthsText: 'months',
    yearText: 'year',
    yearsText: 'years',
    lessThanOneMonth: '< 1 month',
  },
} satisfies I18nRecord;

const getEndOfMonthTimestamp = () => {
  const today = new Date();
  const endOfMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0);
  return endOfMonth.getTime();
};

export const calcDiffInMonths = (
  startDateString: string,
  endDateTimestamp: number = getEndOfMonthTimestamp(),
  { inclusiveEndMonth = true }: { inclusiveEndMonth?: boolean } = {},
): number => {
  const start = new Date(startDateString);
  const end = new Date(endDateTimestamp);
  let months = (end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth());

  if (end.getDate() >= start.getDate()) {
    months += 1;
  }

  if (inclusiveEndMonth && end.getDate() < start.getDate()) {
    months += 1;
  }

  return Math.max(0, months);
};

export const formatDurationFromMonths = (totalMonths: number, locale: Locale = 'en'): string => {
  const t = withI18n(i18n, locale);

  if (totalMonths < 1) return t('lessThanOneMonth');

  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;

  const parts: string[] = [];

  if (years > 0) {
    parts.push(`${years.toLocaleString(locale)} ${years === 1 ? t('yearText') : t('yearsText')}`);
  }
  if (months > 0) {
    parts.push(
      `${months.toLocaleString(locale)} ${months === 1 ? t('monthText') : t('monthsText')}`,
    );
  }

  return parts.join(', ');
};
