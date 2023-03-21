/** @jsxImportSource theme-ui */
import { useRouter } from 'next/router';
import { Children } from 'react';
import type { I18nRecord, Locale } from '../types/i18n';
import { withI18n } from '../utils/i18n';

const i18n = {
  de: {
    labelText: 'Sprache wählen',
  },
  en: {
    labelText: 'Select language',
  },
} satisfies I18nRecord;

export const LocaleToggle = () => {
  const router = useRouter();
  const { locales, locale: activeLocale, pathname, query, asPath } = router;
  const t = withI18n(i18n, activeLocale as Locale);

  return (
    <label
      sx={{
        ml: 2,
      }}
    >
      <strong>{t('labelText')}: </strong>
      <select
        sx={{
          backgroundColor: 'transparent',
          border: 'none',
          color: 'primary',
          fontSize: 'inherit',
        }}
        defaultValue={activeLocale}
        onChange={(e) => {
          router.push({ pathname, query }, asPath, { locale: e.currentTarget.value });
        }}
      >
        {Children.toArray(
          locales?.map((locale) => <option value={locale}>{locale.toUpperCase()}</option>),
        )}
      </select>
    </label>
  );
};
