/** @jsxImportSource theme-ui */
import type { ThemeUICSSObject } from 'theme-ui';
import type { EmotionIconProps } from 'emotion-icons/types';
import { darken } from '@theme-ui/color';
import { Github, LinkedinIn, Twitter, Xing } from 'emotion-icons/fa-brands';
import type { I18nRecord } from '../types/i18n';
import useI18n from '../utils/hooks/useI18n';

const SOCIAL_TITLE_MAPPING = {
  xing: 'Xing',
  linkedIn: 'LinkedIn',
  github: 'Github',
  twitter: 'Twitter',
} as const;

type SocialIconProps = EmotionIconProps & {
  type: keyof typeof SOCIAL_TITLE_MAPPING;
};

const SocialIcon = ({ type = 'xing', ...otherProps }: SocialIconProps) => {
  return (
    <>
      {(type === 'xing' && <Xing {...otherProps} />) ||
        (type === 'linkedIn' && <LinkedinIn {...otherProps} />) ||
        (type === 'github' && <Github {...otherProps} />) ||
        (type === 'twitter' && <Twitter {...otherProps} />)}
    </>
  );
};

type SocialButtonProps = {
  url: string;
  type: SocialIconProps['type'];
  size?: number;
  sx?: ThemeUICSSObject;
};

const i18n = {
  de: {
    titleText: (type: SocialIconProps['type']) => `Gehe zu "${SOCIAL_TITLE_MAPPING[type]}"`,
  },
  en: {
    titleText: (type: SocialIconProps['type']) => `Go to "${SOCIAL_TITLE_MAPPING[type]}"`,
  },
} satisfies I18nRecord;

export const SocialButton = ({
  url = '',
  type = 'xing',
  size = 30,
  sx = {},
}: SocialButtonProps) => {
  const { t } = useI18n(i18n);

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      title={t('titleText')(type)}
      sx={{
        ...sx,
        'p': 1,
        'color': 'primary',
        '&:hover': {
          color: darken('primary', 0.1),
        },
      }}
    >
      <SocialIcon type={type} size={size} />
    </a>
  );
};
