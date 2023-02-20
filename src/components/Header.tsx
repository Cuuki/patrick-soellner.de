/** @jsxImportSource theme-ui */
import Link from 'next/link';
import { User } from 'emotion-icons/fa-solid';
import { darken } from '@theme-ui/color';
import { ColorModeToggle } from './ColorModeToggle';
import { LocaleToggle } from './LocaleToggle';
import type { I18nRecord } from '../types/i18n';
import useI18n from '../utils/hooks/useI18n';

export type HeaderProps = {
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
    titleText: (siteTitle: HeaderProps['siteTitle']) => `Gehe zu ${siteTitle}'s CV`,
  },
  en: {
    titleText: (siteTitle: HeaderProps['siteTitle']) => `Go to ${siteTitle}'s CV`,
  },
} satisfies I18nRecord;

// @TODO: theme color mode changes after router navigation
export const Header = ({ siteTitle, maxWidth = 960 }: HeaderProps) => {
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
