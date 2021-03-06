/** @jsx jsx */
/** @jsxFrag React.Fragment */
import {jsx} from 'theme-ui';
import React from 'react';
import {darken} from '@theme-ui/color';
import {Github, LinkedinIn, Twitter, Xing} from '@emotion-icons/fa-brands';
import {EmotionIconProps} from '@emotion-icons/emotion-icon';

const titleMap = {
  xing: 'Xing',
  linkedIn: 'LinkedIn',
  github: 'Github',
  twitter: 'Twitter',
} as const;

interface SocialIconProps extends EmotionIconProps {
  type: 'xing' | 'linkedIn' | 'github' | 'twitter';
}

const SocialIcon: React.FC<SocialIconProps> = ({
  type = 'xing',
  ...otherProps
}) => {
  return (
    <>
      {(type === 'xing' && <Xing {...otherProps} />) ||
        (type === 'linkedIn' && <LinkedinIn {...otherProps} />) ||
        (type === 'github' && <Github {...otherProps} />) ||
        (type === 'twitter' && <Twitter {...otherProps} />)}
    </>
  );
};

const SocialButton: React.FC<{
  url: string;
  type: 'xing' | 'linkedIn' | 'github' | 'twitter';
}> = ({url = '', type = 'xing'}) => (
  <a
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    title={`Go to "${titleMap[type]}"`}
    sx={{
      p: 1,
      color: 'text',
      '&:hover': {
        color: darken('text', 0.1),
      },
    }}
  >
    <SocialIcon type={type} size={30} />
  </a>
);

export default SocialButton;
