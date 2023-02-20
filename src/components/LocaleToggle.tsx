/** @jsxImportSource theme-ui */
import { useRouter } from 'next/router';
import { Children } from 'react';

export const LocaleToggle = () => {
  const router = useRouter();
  const { locales, locale: activeLocale, route } = router;

  return (
    <label
      sx={{
        ml: 2,
      }}
    >
      <strong>Select language: </strong>
      <select
        sx={{
          backgroundColor: 'transparent',
          border: 'none',
          color: 'primary',
          fontSize: 'inherit',
        }}
        defaultValue={activeLocale}
        onChange={(e) => {
          router.push(route, route, { locale: e.currentTarget.value });
        }}
      >
        {Children.toArray(
          locales?.map((locale) => <option value={locale}>{locale.toUpperCase()}</option>),
        )}
      </select>
    </label>
  );
};
