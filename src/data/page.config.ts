import type { I18nData } from '../types/i18n';

const experienceInYears = new Date().getFullYear() - 2015;

const page = {
  metadata: {
    url: 'https://patrick-soellner.de',
    title: 'Patrick Söllner',
    description: `I'm a passionate Frontend Developer with more than ${experienceInYears} years of professional experience in agile projects. My focus lies in modular Software Design, Design Systems, Component Driven Development with React, Vue or Web Components, and UI Testing. I'm also an advocate for accessibility on the web. Continuously questioning the status quo, being open to new perspectives, and trying to learn as much as possible drive me daily.`,
    twitterAuthor: '@PatrickSllner',
  },
  nickname: '@Cuuki',
  social: {
    github: 'https://github.com/Cuuki',
    twitter: 'https://twitter.com/PatrickSllner',
    xing: 'https://www.xing.com/profile/Patrick_Soellner/',
    linkedIn: 'https://www.linkedin.com/in/patrick-s%C3%B6llner-8360a1184/',
  },
};

const pageDataI18n = {
  de: {
    ...page,
    metadata: {
      ...page.metadata,
      description: `Ich bin leidenschaftlicher Frontend-Entwickler mit mehr als ${experienceInYears} Jahren Berufserfahrung in agilen Projekten. Mein Fokus liegt auf modularem Software-Design, Design Systemen, Komponentenentwicklung mit React, Vue oder Web Komponenten und UI Testing. Ich setzte mich außerdem für Barrierefreiheit im Web ein. Kontinuierlich den Status quo zu hinterfragen, offen für neue Perspektiven zu sein und zu versuchen, so viel wie möglich dazuzulernen, treibt mich täglich an.`,
    },
  },
  en: {
    ...page,
  },
} satisfies I18nData<typeof page>;

export default pageDataI18n;
