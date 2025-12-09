import type { I18nData } from '../types/i18n';

const experienceInYears = new Date().getFullYear() - 2015;

const page = {
  metadata: {
    url: 'https://patrick-soellner.de',
    title: 'Patrick Söllner',
    description: `I am a Senior Frontend Engineer with ${experienceInYears}+ years of professional experience in agile product development and consulting. My focus lies in modular software design, design systems, and component-driven architecture. I prioritize customer and user needs, always choosing the right tool for the job — be that with my personal favorite React, Vue, or custom solutions with Web Components. My expertise extends to UI testing and advocating for accessibility, ensuring inclusive and resilient experiences for all users. Driven by curiosity and a commitment to continuous learning and personal growth, I challenge assumptions, embrace diverse perspectives, and deliver meaningful, maintainable solutions.`,
    twitterAuthor: '@PatrickSllner',
  },
  social: {
    github: 'https://github.com/Cuuki',
    linkedIn: 'https://www.linkedin.com/in/patrick-s%C3%B6llner-8360a1184/',
    medium: 'https://patricksoellner.medium.com/',
  },
};

const pageDataI18n = {
  de: {
    ...page,
    metadata: {
      ...page.metadata,
      description: `Ich bin Senior Frontend Engineer mit ${experienceInYears}+ Jahren Berufserfahrung in agiler Produktentwicklung und Beratung. Mein Schwerpunkt liegt auf modularem Software-Design, Designsystemen und komponentenorientierter Architektur. Ich stelle die Bedürfnisse von Kunden und Nutzern in den Vordergrund und wähle stets das richtige Werkzeug für die jeweilige Aufgabe – sei es mein persönlicher Favorit React, Vue oder maßgeschneiderte Lösungen mit Web Components. Meine Expertise erstreckt sich auch auf UI-Tests und die Förderung von Barrierefreiheit, um allen Nutzern ein inklusives und robustes Erlebnis zu garantieren. Angetrieben von Neugier und dem Wunsch nach kontinuierlichem Lernen und persönlichem Wachstum hinterfrage ich Annahmen, begrüße unterschiedliche Perspektiven und liefere sinnvolle, wartbare Lösungen.`,
    },
  },
  en: {
    ...page,
  },
} satisfies I18nData<typeof page>;

export default pageDataI18n;
