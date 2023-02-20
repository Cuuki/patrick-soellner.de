import { useRouter } from 'next/router';
import type { I18nRecord, Locale } from '../../types/i18n';
import { withI18n } from '../i18n';

const useI18n = <T extends I18nRecord>(i18nRecord: T) => {
  const router = useRouter();
  const locale = router.locale as Locale;

  const t = withI18n(i18nRecord, locale);

  return {
    locale,
    t,
  };
};

export default useI18n;
