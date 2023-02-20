/** @jsxImportSource theme-ui */
import type { Locale } from '../types/i18n';
import { SocialButtonList } from './SocialButtonList';
import pageDataI18n from '../data/page.config';

type PageFooterProps = {
  socialData: typeof pageDataI18n[Locale]['social'];
};

export const PageFooter = ({ socialData }: PageFooterProps) => (
  <footer>
    <SocialButtonList socialData={socialData} />
  </footer>
);
