import type { I18nData } from '../types/i18n';

interface Experience {
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
  projects?: { text: string; link: string }[];
}

const e1: Experience = {
  duration: { startDate: '2023-02-01', startDisplay: '02/2023' },
  company: 'New Monday GmbH',
  jobTitle: 'Senior Frontend Developer',
  areas: ['Design Systems / Component Libraries', 'Knowledge transfer'],
  technologies: ['React', 'TypeScript'],
};

const e2: Experience = {
  duration: {
    startDate: '2022-06-01',
    startDisplay: '06/2022',
    endDate: '2022-12-13',
    endDisplay: '12/2022',
  },
  company: 'E. Breuninger GmbH & Co.',
  jobTitle: 'Software Developer',
  description:
    'Replacement of the existing content & campaign architecture within the Breuninger fashion e-commerce product. Development of React based UI extensions for the new headless contentmanagement system.',
  areas: [
    'Frontend application development',
    'Creation of a build system based on Vite and Node to generate self-containedcomponents',
    'Development of campaign pages & content modules built with Web Components,Storybook and Go Templates',
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
  duration: {
    startDate: '2021-01-01',
    startDisplay: '01/2021',
    endDate: '2022-05-31',
    endDisplay: '05/2022',
  },
  company: 'i22 Digitalagentur GmbH',
  jobTitle: 'Senior Frontend Developer',
  description:
    'Development of many projects inside the Telekom e-commerce multi-client platform within thei22 shop product team.',
  areas: [
    'Frontend application development',
    'E2E testing automation as a service',
    'Tech recruiting support',
    'Mentoring and training of junior developers',
    'Company wide frontend and accessibility tech talks',
    'Company wide accessibility working group initiative',
  ],
  technologies: ['Vue', 'Nuxt', 'TypeScript', 'CSS3', 'Sass', 'Clean architecture', 'Cypress'],
  projects: [
    { link: 'https://smarthome.de', text: 'smarthome.de' },
    {
      link: 'https://shop.telekom.de',
      text: 'shop.telekom.de',
    },
  ],
};

const e4: Experience = {
  duration: {
    startDate: '2020-07-01',
    startDisplay: '07/2020',
    endDate: '2020-12-31',
    endDisplay: '12/2020',
  },
  company: 'ISO Public Services GmbH',
  jobTitle: 'Frontend Developer',
  description:
    'Development of an internal tool to streamline the employee profile generation process. In-houseproduct development.',
  areas: [
    'Frontend application development',
    'Leadership, technical planning and coordination of frontend for a new product',
  ],
  technologies: ['Angular', 'Stencil', 'TypeScript', 'CSS3', 'Sass', 'Test-driven development'],
};

const e5: Experience = {
  duration: {
    startDate: '2018-03-01',
    startDisplay: '03/2018',
    endDate: '2020-06-30',
    endDisplay: '06/2020',
  },
  company: 'LottaLeben Media GmbH',
  jobTitle: 'Software Developer',
  description:
    'Multiple projects in tourism & medicine as well as the development of a Wordpress basedwebsite builder as a product.',
  areas: [
    'Fullstack web development (Focus Frontend)',
    'Coordination and communication with brasil-based development team',
  ],
  technologies: ['React', 'JavaScript', 'jQuery', 'CSS3', 'Sass', 'Wordpress'],
  projects: [
    { link: 'https://www.lindau.de', text: 'lindau.de' },
    {
      link: 'https://www.lindau.de/aroundme',
      text: 'lindau.de/aroundme',
    },
    {
      link: 'https://www.insel-sylt.de',
      text: 'insel-sylt.de',
    },
    {
      link: 'https://www.canvayo.com',
      text: 'canvayo.com',
    },
  ],
};

const e6: Experience = {
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

const experience = [e1, e2, e3, e4, e5, e6, e7];

const experienceDataI18n = {
  en: experience,
  de: [
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
} satisfies I18nData<typeof experience>;

export default experienceDataI18n;
