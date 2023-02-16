import type { I18nData } from '../types/i18n';

const profile = {
  mailItems: ['mail@patrick-soellner.de'],
  birthdayItems: ['18.11.1995'],
  languagesItems: ['German (Native)', 'English (Fluid)', 'French (Basics)'],
};

const profileDataI18n = {
  en: profile,
  de: {
    ...profile,
    languagesItems: [
      'Deutsch (Muttersprache)',
      'Englisch (Fließend)',
      'Französisch (Grundkenntnisse)',
    ],
  },
} satisfies I18nData<typeof profile>;

export default profileDataI18n;
