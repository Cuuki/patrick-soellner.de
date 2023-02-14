import type { I18nData } from '../types/i18n';

interface Training {
  duration: {
    startDisplay: string;
    endDisplay?: string;
  };
  school: string;
  focus: string[];
}

const t1: Training = {
  duration: { startDisplay: '09/2012', endDisplay: '08/2015' },
  school: 'Vocational school in Erlangen, Germany',
  focus: [
    'IT specialist for application development ([IHK](https://www.ihk-nuernberg.de/) certified graduation)',
  ],
};

const training = [t1];

const trainingDataI18n = {
  en: training,
  de: [
    {
      ...t1,
      school: 'Staatliche Berufsschule Erlangen, Deutschland',
      focus: [
        'Fachinformatiker für Anwendungsentwicklung ([IHK](https://www.ihk-nuernberg.de/) zertifizierter Abschluss)',
      ],
    },
  ],
} satisfies I18nData<typeof training>;

export default trainingDataI18n;
