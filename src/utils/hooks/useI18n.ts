import { useParams } from 'next/navigation';
import type { I18nRecord, Locale } from '../../types/i18n';
import { withI18n } from '../i18n';

const useI18n = <T extends I18nRecord>(i18nRecord: T) => {
  const params = useParams();
  const locale = ((params?.locale as Locale) || 'en') as Locale;

  const t = withI18n(i18nRecord, locale);

  return {
    locale,
    t,
  };
};

export default useI18n;
