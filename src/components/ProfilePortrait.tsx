/** @jsxImportSource theme-ui */
import Image from 'next/image';
import type { I18nRecord } from '../types/i18n';
import useI18n from '../utils/hooks/useI18n';

const i18n = {
  de: {
    altText: 'Porträt Bild von Patrick Söllner',
  },
  en: {
    altText: 'Portrait picture of Patrick Söllner',
  },
} satisfies I18nRecord;

export const ProfilePortrait = () => {
  const { t } = useI18n(i18n);

  return (
    <div
      sx={{
        maxWidth: 280,
        mx: 'auto',
        mb: 3,
        borderRadius: '100%',
        border: '0.625rem solid currentColor',
        overflow: 'hidden',
      }}
    >
      <Image
        src="/images/portrait.jpg"
        alt={t('altText')}
        priority={true}
        width={260}
        height={260}
      />
    </div>
  );
};
