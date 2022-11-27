/** @jsxImportSource theme-ui */
import type { ThemeUICSSObject } from 'theme-ui';
import type { EmotionIconProps } from 'emotion-icons/types';
import { Github, LinkedinIn, Twitter, Xing } from 'emotion-icons/fa-brands';

const SOCIAL_TITLE_MAPPING = {
  xing: 'Xing',
  linkedIn: 'LinkedIn',
  github: 'Github',
  twitter: 'Twitter',
} as const;

type SocialIconProps = EmotionIconProps & {
  type: 'xing' | 'linkedIn' | 'github' | 'twitter';
};

const SocialIcon: React.FC<SocialIconProps> = ({ type = 'xing', ...otherProps }) => {
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
  type: 'xing' | 'linkedIn' | 'github' | 'twitter';
  size?: number;
  sx?: ThemeUICSSObject;
};

export const SocialButton = ({
  url = '',
  type = 'xing',
  size = 30,
  sx = {},
}: SocialButtonProps) => (
  <a
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    title={`Go to "${SOCIAL_TITLE_MAPPING[type]}"`}
    sx={{
      ...sx,
      'p': 1,
      'color': 'accent',
      '&:hover': {
        color: 'accentActive',
      },
    }}
  >
    <SocialIcon type={type} size={size} />
  </a>
);
