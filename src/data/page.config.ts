import type { I18nData } from '../types/i18n';

const experienceInYears = new Date().getFullYear() - 2015;

const page = {
  metadata: {
    url: 'https://patrick-soellner.de',
    title: 'Patrick Söllner',
    description: `I am a Senior Frontend Engineer with over ${experienceInYears} years of professional experience in agile environments, specializing in modular Software Design, Design Systems, and Component Driven Development using React, Vue, or Web Components. My expertise extends to UI testing and advocating for web accessibility, ensuring inclusive and reliable user experiences. Driven by curiosity and a commitment to growth, I thrive on challenging the status quo, embracing diverse perspectives, and continuously learning to deliver meaningful, innovative solutions.`,
    twitterAuthor: '@PatrickSllner',
  },
  nickname: '@Cuuki',
  social: {
    github: 'https://github.com/Cuuki',
    linkedIn: 'https://www.linkedin.com/in/patrick-s%C3%B6llner-8360a1184/',
  },
};

const pageDataI18n = {
  de: {
    ...page,
    metadata: {
      ...page.metadata,
      description: `Ich bin ein Senior Frontend Engineer mit über ${experienceInYears} Jahren Berufserfahrung im agilen Umfeld, spezialisiert auf modulares Software-Design, Design Systeme und komponentenbasierte Entwicklung mit React, Vue oder Web Components. Meine Expertise umfasst außerdem UI-Testing und Förderung der Barrierefreiheit im Web, um inklusive und zuverlässige Nutzererfahrungen zu gewährleisten. Getrieben von Neugier und dem Streben nach persönlichem Wachstum, hinterfrage ich gerne den Status quo, integriere unterschiedliche Perspektiven und lerne kontinuierlich, um bedeutungsvolle und innovative Lösungen zu schaffen.`,
    },
  },
  en: {
    ...page,
  },
} satisfies I18nData<typeof page>;

export default pageDataI18n;
