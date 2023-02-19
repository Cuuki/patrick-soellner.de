import type { I18nData } from '../types/i18n';

const certificates = [
  { id: 'c1', name: 'ISTQB® Certified Tester - Foundation level' },
  { id: 'c2', name: 'ITIL® Foundation Certificate in IT Service Management' },
];

const certificatesDataI18n = {
  en: certificates,
  de: certificates,
} satisfies I18nData<typeof certificates>;

export default certificatesDataI18n;
