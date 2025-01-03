import type { I18nData } from '../types/i18n';

interface Experience {
  id: string;
  duration: {
    startDate: string;
    startDisplay: string;
    endDate?: string;
    endDisplay?: string;
  };
  company: string;
  jobTitle: string;
  description?: string;
  areas: string[];
  technologies?: string[];
  projects?: string[];
}

const eNow: Experience = {
  id: 'eNow',
  duration: {
    startDate: '2023-08-01',
    startDisplay: '08/2023',
  },
  company: 'AVIV Group',
  jobTitle: 'Senior Frontend Engineer',
  description:
    "Driving the evolution and maintenance of AVIV's centralized Design System, built with React, TypeScript, and Emotion, covering 9 brands with Figma-based tokens and themes.",
  areas: [
    'Managing inner-sourcing contributions, ensuring smooth integration, and providing consumer support for component-related issues.',
    'Driving strategic decisions and communication across teams, fostering collaboration between design and development.',
    'Spearheading technical planning and implementation of the testing strategy and data visualization initiatives.',
    'Enhancing team health by co-facilitating retrospectives, improving collaboration, and organizational practices.',
  ],
  technologies: [
    'React',
    'TypeScript',
    'React Aria',
    'Emotion',
    'Storybook',
    'Chromatic',
    'Vitest',
    'Playwright',
  ],
};

const e0: Experience = {
  id: 'e0',
  duration: {
    startDate: '2023-04-20',
    startDisplay: '05/2023',
    endDate: '2023-07-31',
    endDisplay: '07/2023',
  },
  company: 'eCommerceDB GmbH',
  jobTitle: 'Frontend Developer',
  areas: [
    'Frontend application development',
    'Creating CI / CD automation with Github Actions',
    'Migrating Nuxt from v2 to v3',
    'Improving the technical workflows and organisation',
  ],
  technologies: ['Vue', 'Nuxt', 'TypeScript', 'Github Actions'],
};

const e1: Experience = {
  id: 'e1',
  duration: {
    startDate: '2023-02-01',
    startDisplay: '02/2023',
    endDate: '2023-04-19',
    endDisplay: '04/2023',
  },
  company: 'New Monday GmbH',
  jobTitle: 'Senior Frontend Developer',
  areas: [
    'Design Systems / Component Libraries',
    'Development for UX/UI Design',
    'Accessibility talks',
  ],
  technologies: ['React', 'TypeScript'],
};

const e2: Experience = {
  id: 'e2',
  duration: {
    startDate: '2022-06-01',
    startDisplay: '06/2022',
    endDate: '2022-12-13',
    endDisplay: '12/2022',
  },
  company: 'E. Breuninger GmbH & Co.',
  jobTitle: 'Software Developer',
  description:
    'Replacement of the existing content & campaign architecture within the Breuninger fashion e-commerce product. Development of React based UI extensions for the new headless content management system.',
  areas: [
    'Frontend application development',
    'Creation of a build system based on Vite and Node to generate self-contained components',
    'Development of campaign pages & content modules built with Web Components, Storybook and Go Templates',
    'Support to continually improve the Breuninger Design System',
    'E2E testing automation for content modules',
  ],
  technologies: [
    'TypeScript',
    'Web Components',
    'Tailwind',
    'Storybook',
    'Go templates',
    'Hugo',
    'Self-contained systems',
    'Node',
    'Vite',
    'Testcafe',
    'Playwright',
    'React',
  ],
};

const e3: Experience = {
  id: 'e3',
  duration: {
    startDate: '2021-01-01',
    startDisplay: '01/2021',
    endDate: '2022-05-31',
    endDisplay: '05/2022',
  },
  company: 'i22 Digitalagentur GmbH',
  jobTitle: 'Senior Frontend Developer',
  description:
    'Development of many projects inside the Telekom e-commerce multi-client platform within the i22 shop product team.',
  areas: [
    'Frontend application development',
    'Component libraries & shared code patterns',
    'E2E testing automation as a service',
    'Tech recruiting support',
    'Mentoring and training of junior developers',
    'Company wide frontend and accessibility tech talks',
    'Company wide accessibility working group initiative',
  ],
  technologies: [
    'Vue',
    'Nuxt',
    'Vuex',
    'TypeScript',
    'CSS3',
    'Sass',
    'Clean architecture',
    'Atomic Design',
    'Storybook',
    'Cypress',
  ],
  projects: ['[smarthome.de](https://smarthome.de)', '[shop.telekom.de](https://shop.telekom.de)'],
};

const e4: Experience = {
  id: 'e4',
  duration: {
    startDate: '2020-07-01',
    startDisplay: '07/2020',
    endDate: '2020-12-31',
    endDisplay: '12/2020',
  },
  company: 'ISO Public Services GmbH',
  jobTitle: 'Frontend Developer',
  description:
    'Development of an internal tool to streamline the employee profile generation process. In-house product development.',
  areas: [
    'Frontend application development',
    'Leadership, technical planning and coordination of frontend for a new product',
  ],
  technologies: ['Angular', 'Stencil', 'TypeScript', 'CSS3', 'Sass', 'Test-driven development'],
};

const e5: Experience = {
  id: 'e5',
  duration: {
    startDate: '2018-03-01',
    startDisplay: '03/2018',
    endDate: '2020-06-30',
    endDisplay: '06/2020',
  },
  company: 'LottaLeben Media GmbH',
  jobTitle: 'Software Developer',
  description:
    'Multiple projects in tourism & medicine as well as the development of a Wordpress based website builder as a product.',
  areas: [
    'Fullstack web development (Focus Frontend)',
    'Coordination and communication with brasil-based development team',
  ],
  technologies: ['React', 'JavaScript', 'jQuery', 'CSS3', 'Sass', 'Wordpress'],
  projects: [
    '[lindau.de](https://www.lindau.de)',
    '[lindau.de/aroundme](https://www.lindau.de/aroundme)',
    '[insel-sylt.de](https://www.insel-sylt.de)',
    '[canvayo.com](https://www.canvayo.com)',
  ],
};

const e6: Experience = {
  id: 'e6',
  duration: {
    startDate: '2015-09-01',
    startDisplay: '09/2015',
    endDate: '2018-02-28',
    endDisplay: '02/2018',
  },
  company: 'DROW GmbH',
  jobTitle: 'Software Developer',
  description: 'Multiple e-commerce projects built with Shopware & WooCommerce.',
  areas: [
    'Fullstack web development (Focus Frontend)',
    'Technical project management',
    'Technical customer support',
  ],
  technologies: ['HTML5', 'JavaScript', 'jQuery', 'CSS3', 'Sass', 'Wordpress', 'Shopware'],
};

const e7: Experience = {
  id: 'e7',
  duration: {
    startDate: '2012-09-01',
    startDisplay: '09/2012',
    endDate: '2015-08-31',
    endDisplay: '08/2015',
  },
  company: 'Publicis Groupe S.A.',
  jobTitle: 'Trainee - IT specialist for application development',
  areas: ['Web development'],
};

const experience = [eNow, e0, e1, e2, e3, e4, e5, e6, e7];

const experienceDataI18n = {
  en: experience,
  de: [
    {
      ...eNow,
      description:
        'Vorantreiben der Weiterentwicklung und Wartung des zentralen Design-Systems von AVIV, entwickelt mit React, TypeScript und Emotion, welches 9 Brands mit Figma-basierten Tokens und Themes abdeckt.',
      areas: [
        'Verantwortung für die Verwaltung von Inner-Sourcing Contributions, Sicherstellung einer reibungslosen Integration und Consumer Support für Komponenten-bezogene Probleme.',
        'Vorantreiben strategischer Entscheidungen und der Kommunikation über verschiedene Teams hinweg, Förderung der Zusammenarbeit zwischen Design und Entwicklung.',
        'Leitung der technischen Planung & Umsetzung für die Initativen "Testing Strategy" und "Data Visualization".',
        'Förderung der Teamgesundheit durch Moderation von Retrospektiven, Verbesserung der Zusammenarbeit und organisatorischer Praktiken.',
      ],
    },
    {
      ...e0,
    },
    {
      ...e1,
      areas: ['Design Systeme / Component Libraries', 'Wissenstransfer'],
    },
    {
      ...e2,
      description:
        'Ablösung der bestehenden Content & Campaign Architektur innerhalb des Breuninger Fashion E-Commerce Produktes. Entwicklung von React-basierten UI-Erweiterungen für das neue Headless-Content-Management-System.',
      areas: [
        'Entwicklung von Frontend-Anwendungen',
        'Erstellung eines Build-Systems auf Basis von Vite und Node zur Generierung von Self-Contained Components',
        'Entwicklung von Kampagnenseiten und Content Modulen, die mit Web Components, Storybook und Go Templates erstellt wurden',
        'Unterstützung bei der kontinuierlichen Verbesserung des Breuninger Design Systems',
        'E2E-Testautomatisierung für Content Module',
      ],
    },
    {
      ...e3,
      description:
        'Entwicklung vieler Projekte innerhalb der Telekom E-Commerce Multi-Client Plattform im i22 Shop-Produktteam.',
      areas: [
        'Entwicklung von Frontend-Anwendungen',
        'E2E-Testautomatisierung als Service',
        'Unterstützung im Tech-Recruiting',
        'Mentoring und Training von Junior Entwicklern',
        'Unternehmensweite Tech Talks über Frontend und Barrierefreiheit',
        'Unternehmensweite Initiative "Accessibility working group"',
      ],
    },
    {
      ...e4,
      description:
        'Entwicklung eines internen Tools zur vereinfachten Erstellung von Mitarbeiterprofilen. In-house Produktentwicklung.',
      areas: [
        'Entwicklung von Frontend-Anwendungen',
        'Leadership, technische Planung und Koordination des Frontends für ein neues intern entwickeltes Produkt',
      ],
    },
    {
      ...e5,
      description:
        'Mehrere Projekte in Tourismus & Medizin sowie die Entwicklung eines WordPress-basierten Website-Builders als Produkt.',
      areas: [
        'Fullstack Webentwicklung (Fokus Frontend)',
        'Koordination und Kommunikation mit dem brasilianischen Entwicklungsteam',
      ],
    },
    {
      ...e6,
      description: 'Mehrere E-Commerce-Projekte, die mit Shopware & WooCommerce erstellt wurden.',
      areas: [
        'Fullstack Webentwicklung (Fokus Frontend)',
        'Technisches Projektmanagement',
        'Technische Kundenbetreuung',
      ],
    },
    {
      ...e7,
      jobTitle: 'Ausbildung zum Fachinformatiker für Anwendungsentwicklung',
      areas: ['Webentwicklung'],
    },
  ],
} satisfies I18nData<Experience[]>;

export default experienceDataI18n;
