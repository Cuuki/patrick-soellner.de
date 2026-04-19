/** @jsxImportSource theme-ui */
'use client';
import { darken } from '@theme-ui/color';
import Link from 'next/link';
import type { I18nRecord } from '../types/i18n';
import useI18n from '../utils/hooks/useI18n';

const linkStyle = {
  'color': 'text',
  'textDecoration': 'none',
  '&:hover': {
    color: darken('text', 0.1),
  },
};

const i18n = {
  de: {
    privacyText: 'Datenschutz',
    privacyTitleText: 'Gehe zu "Datenschutz"',
    imprintText: 'Impressum',
    imprintTitleText: 'Gehe zu "Impressum"',
  },
  en: {
    privacyText: 'Privacy',
    privacyTitleText: 'Go to "Privacy"',
    imprintText: 'Imprint',
    imprintTitleText: 'Go to "Imprint"',
  },
} satisfies I18nRecord;

export const SiteFooter = () => {
  const { t } = useI18n(i18n);

  return (
    <footer
      sx={{
        'mt': 4,
        'py': 4,
        'display': 'flex',
        'justifyContent': 'flex-end',
        'flexWrap': 'wrap',
        'gap': 2,
        '@media print': {
          display: 'none',
        },
      }}
    >
      <div>
        {`© ${new Date().getFullYear()}, Built with `}
        <a href="https://www.nextjs.org" target="_blank" rel="noopener noreferrer" sx={linkStyle}>
          Next.js
        </a>
        {' & deployed on '}
        <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" sx={linkStyle}>
          Vercel
        </a>
      </div>
      <Link href="/de/privacy" title={t('privacyTitleText')} sx={linkStyle}>
        | {t('privacyText')} (DE)
      </Link>
      <Link href="/de/imprint" title={t('imprintTitleText')} sx={linkStyle}>
        | {t('imprintText')} (DE)
      </Link>
    </footer>
  );
};
