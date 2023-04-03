import type { Skill } from '../../data/skill.config';
import type { Locale } from '../i18n';

export type CvCollectionData = {
  cvCollection: {
    items: {
      sys: {
        id: string;
      };
    }[];
  };
};

export type CvData = {
  cv: {
    sys: { id: string };
    title: string;
    skillsCollection: {
      items: (Skill & {
        sys: { id: string };
      })[];
    };
  };
};

export type CvVariables = {
  cvId: string;
  locale: Locale;
};
