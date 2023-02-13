import type { I18nRecord, Locale } from '../types/i18n';

export const withI18n =
  <T extends I18nRecord>(i18nRecord: T, locale: Locale) =>
  (key: keyof T[Locale]) =>
    (i18nRecord[locale] as T[Locale])[key];
