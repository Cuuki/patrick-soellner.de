/** @jsxImportSource theme-ui */
import Link from 'next/link';
import { User } from 'emotion-icons/fa-solid';
import { darken } from '@theme-ui/color';
import { ColorModeToggle } from './ColorModeToggle';
import { LocaleToggle } from './LocaleToggle';
import type { I18nRecord } from '../types/i18n';
import useI18n from '../utils/hooks/useI18n';

type SiteHeaderProps = {
  siteTitle: string;
  maxWidth?: number;
};

const linkStyle = {
  'display': 'inline-flex',
  'mr': 'auto',
  'p': 1,
  'textDecoration': 'none',
  'color': 'primary',
  '&:hover': {
    color: darken('primary', 0.1),
  },
};

const i18n = {
  de: {
    titleText: (siteTitle: SiteHeaderProps['siteTitle']) => `Gehe zu ${siteTitle}'s CV`,
  },
  en: {
    titleText: (siteTitle: SiteHeaderProps['siteTitle']) => `Go to ${siteTitle}'s CV`,
  },
} satisfies I18nRecord;

// @TODO: #6 - theme color mode changes after router navigation
export const SiteHeader = ({ siteTitle, maxWidth = 960 }: SiteHeaderProps) => {
  const { t } = useI18n(i18n);

  return (
    <header
      sx={{
        'color': 'text',
        '@media print': {
          display: 'none',
        },
      }}
    >
      <div
        sx={{
          display: 'flex',
          alignItems: 'center',
          mx: 'auto',
          px: 3,
          py: 4,
          maxWidth,
        }}
      >
        <Link href="/" title={t('titleText')(siteTitle)} sx={linkStyle}>
          <User size={30} />
        </Link>
        <LocaleToggle />
        <ColorModeToggle />
      </div>
    </header>
  );
};
