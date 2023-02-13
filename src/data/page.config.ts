import type { I18nContent } from '../types/i18n';

const experienceInYears = new Date().getFullYear() - 2015;

const metadata = {
  url: 'https://patrick-soellner.de',
  title: 'Patrick Söllner',
  description: `I'm a passionate web developer with around ${experienceInYears} years of professional experience, specializing in frontend technologies. My personal focus lies in e-commerce with Vue/React and I am an advocate for accessibility on the web. Continuously questioning the status quo, being open to new perspectives, and trying to learn as much as possible is what drives me on a daily basis.`,
  twitterAuthor: '@PatrickSllner',
};
const nickname = '@Cuuki';
const social = {
  github: 'https://github.com/Cuuki',
  twitter: 'https://twitter.com/PatrickSllner',
  xing: 'https://www.xing.com/profile/Patrick_Soellner/',
  linkedIn: 'https://www.linkedin.com/in/patrick-s%C3%B6llner-8360a1184/',
};

const page = {
  metadata,
  nickname,
  social,
};

const pageConfig = {
  de: {
    ...page,
    metadata: {
      ...page.metadata,
      description: `Ich bin leidenschaftlicher Webentwickler mit rund ${experienceInYears} Jahren Berufserfahrung, spezialisiert auf Frontend-Technologien. Mein persönlicher Schwerpunkt liegt im E-Commerce mit Vue/React und ich setze mich für Barrierefreiheit im Web ein. Kontinuierlich den Status quo zu hinterfragen, offen für neue Perspektiven zu sein und so viel wie möglich zu lernen, treibt mich täglich an.`,
    },
  },
  en: {
    ...page,
  },
} satisfies I18nContent<typeof page>;

export default pageConfig;
