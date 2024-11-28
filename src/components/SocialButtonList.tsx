/** @jsxImportSource theme-ui */
import type { Locale } from '../types/i18n';
import { SocialButton } from './SocialButton';
import pageDataI18n from '../data/page.config';

type SocialButtonListProps = { socialData: (typeof pageDataI18n)[Locale]['social']; size?: number };

export const SocialButtonList = ({ socialData, size = 30 }: SocialButtonListProps) => {
  return (
    <div
      sx={{
        display: 'flex',
        justifyContent: 'space-evenly',
        mx: 'auto',
        mt: 4,
        maxWidth: 480,
        width: '100%',
      }}
    >
      <SocialButton
        url={socialData.xing}
        type="xing"
        size={size}
        styles={{
          mx: 2,
        }}
      />
      <SocialButton
        url={socialData.linkedIn}
        type="linkedIn"
        size={size}
        styles={{
          mx: 2,
        }}
      />
      <SocialButton
        url={socialData.github}
        type="github"
        size={size}
        styles={{
          mx: 2,
        }}
      />
      <SocialButton
        url={socialData.twitter}
        type="twitter"
        size={size}
        styles={{
          mx: 2,
        }}
      />
    </div>
  );
};
