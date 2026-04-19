/** @jsxImportSource theme-ui */
'use client';
import { useParams, useRouter, usePathname } from 'next/navigation';
import type { I18nRecord, Locale } from '../types/i18n';
import { withI18n } from '../utils/i18n';

const locales = ['en', 'de'];

const i18n = {
  de: {
    labelText: 'Sprache wählen',
  },
  en: {
    labelText: 'Select language',
  },
} satisfies I18nRecord;

export const LocaleToggle = () => {
  const params = useParams();
  const activeLocale = ((params?.locale as Locale) || 'en') as Locale;
  const router = useRouter();
  const pathname = usePathname();
  const t = withI18n(i18n, activeLocale);

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
        value={activeLocale}
        onChange={(e) => {
          const newLocale = e.currentTarget.value;
          const newPath = pathname.replace(`/${activeLocale}`, `/${newLocale}`);
          router.push(newPath);
        }}
      >
        {locales.map((locale) => (
          <option key={locale} value={locale}>
            {locale.toUpperCase()}
          </option>
        ))}
      </select>
    </label>
  );
};
