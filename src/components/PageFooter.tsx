/** @jsxImportSource theme-ui */
import { SocialButtonList } from './SocialButtonList';
import pageConfig from '../data/page.config';

type PageFooterProps = {
  socialData: typeof pageConfig['en' | 'de']['social'];
};

export const PageFooter = ({ socialData }: PageFooterProps) => (
  <footer>
    <SocialButtonList socialData={socialData} />
  </footer>
);
