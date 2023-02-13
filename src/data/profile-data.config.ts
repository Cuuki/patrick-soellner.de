import type { I18nContent } from '../types/i18n';

const profileData = {
  addressItems: ['Am Südhang 11', '53809 Ruppichteroth', 'Germany'],
  phoneItems: ['+49 151 68836502'],
  mailItems: ['mail@patrick-soellner.de'],
  birthdayItems: ['18.11.1995'],
  languagesItems: ['German (Native)', 'English (Fluid)', 'French (Basics)'],
};

const profileDataConfig = {
  en: profileData,
  de: {
    ...profileData,
    addressItems: ['Am Südhang 11', '53809 Ruppichteroth', 'Deutschland'],
    languagesItems: [
      'Deutsch (Muttersprache)',
      'Englisch (Fließend)',
      'Französisch (Grundkenntnisse)',
    ],
  },
} satisfies I18nContent<typeof profileData>;

export default profileDataConfig;
