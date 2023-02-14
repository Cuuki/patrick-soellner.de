import type { I18nData } from '../types/i18n';

const experience = [
  {
    duration: { startDate: '2023-02-01', startDisplay: '02/2023', endDisplay: 'now' },
    company: 'New Monday GmbH',
    jobTitle: 'Senior Frontend Developer',
    areas: ['Design Systems / Component Libraries', 'Knowledge transfer'],
    technologies: ['React', 'TypeScript'],
  },
  {
    duration: {
      startDate: '2022-06-01',
      startDisplay: '06/2022',
      endDate: '2022-12-13',
      endDisplay: '12/2022',
    },
    company: 'E. Breuninger GmbH & Co.',
    jobTitle: 'Software Developer',
    description:
      'Ablösung der bestehenden Content & Campaign Architektur innerhalb des Breuninger Fashion E-Commerce Produktes. Entwicklung von React-basierten UI-Erweiterungen für das neue Headless-Content-Management-System.',
    areas: [
      'Entwicklung von Frontend-Anwendungen',
      'Erstellung eines Build-Systems auf Basis von Vite und Node zur Generierung von Self-Contained Components',
      'Entwicklung von Kampagnenseiten und Content Modulen, die mit Web Components, Storybook und Go Templates erstellt wurden',
      'Unterstützung bei der kontinuierlichen Verbesserung des Breuninger Design Systems',
      'E2E-Testautomatisierung für Content Module',
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
  },
  {
    duration: {
      startDate: '2021-01-01',
      startDisplay: '01/2021',
      endDate: '2022-05-31',
      endDisplay: '05/2022',
    },
    company: 'i22 Digitalagentur GmbH',
    jobTitle: 'Senior Frontend Developer',
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
    technologies: ['Vue', 'Nuxt', 'TypeScript', 'CSS3', 'Sass', 'Clean architecture', 'Cypress'],
    projects: [
      { link: 'https://smarthome.de', text: 'smarthome.de' },
      {
        link: 'https://shop.telekom.de',
        text: 'shop.telekom.de',
      },
    ],
  },
  {
    duration: {
      startDate: '2020-07-01',
      startDisplay: '07/2020',
      endDate: '2020-12-31',
      endDisplay: '12/2020',
    },
    company: 'ISO Public Services GmbH',
    jobTitle: 'Frontend Developer',
    description:
      'Entwicklung eines internen Tools zur vereinfachten Erstellung von Mitarbeiterprofilen. In-house Produktentwicklung.',
    areas: [
      'Entwicklung von Frontend-Anwendungen',
      'Leadership, technische Planung und Koordination des Frontends für ein neues intern entwickeltes Produkt',
    ],
    technologies: ['Angular', 'Stencil', 'TypeScript', 'CSS3', 'Sass', 'Test-driven development'],
  },
  {
    duration: {
      startDate: '2018-03-01',
      startDisplay: '03/2018',
      endDate: '2020-06-30',
      endDisplay: '06/2020',
    },
    company: 'LottaLeben Media GmbH',
    jobTitle: 'Software Developer',
    description:
      'Mehrere Projekte in Tourismus & Medizin sowie die Entwicklung eines WordPress-basierten Website-Builders als Produkt.',
    areas: [
      'Fullstack Webentwicklung (Fokus Frontend)',
      'Koordination und Kommunikation mit dem brasilianischen Entwicklungsteam',
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
  },
  {
    duration: {
      startDate: '2015-09-01',
      startDisplay: '09/2015',
      endDate: '2018-02-28',
      endDisplay: '02/2018',
    },
    company: 'DROW GmbH',
    jobTitle: 'Software Developer',
    description: 'Mehrere E-Commerce-Projekte, die mit Shopware & WooCommerce erstellt wurden.',
    areas: [
      'Fullstack Webentwicklung (Fokus Frontend)',
      'Technisches Projektmanagement',
      'Technische Kundenbetreuung',
    ],
    technologies: ['HTML5', 'JavaScript', 'jQuery', 'CSS3', 'Sass', 'Wordpress', 'Shopware'],
  },
  {
    duration: {
      startDate: '2012-09-01',
      startDisplay: '09/2012',
      endDate: '2015-08-31',
      endDisplay: '08/2015',
    },
    company: 'Publicis Groupe S.A.',
    jobTitle: 'Ausbildung zum Fachinformatiker für Anwendungsentwicklung',
    areas: ['Webentwicklung'],
  },
];

const experienceDataI18n = {
  de: experience,
  en: experience,
} satisfies I18nData<typeof experience>;

export default experienceDataI18n;
