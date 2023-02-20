import type { I18nData } from '../types/i18n';

const profile = {
  mailItems: ['mail@patrick-soellner.de'],
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
