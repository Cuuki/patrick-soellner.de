import type { I18nRecord, Locale } from '../types/i18n';
import type { Skill } from '../data/skill.config';
import useI18n from '../utils/hooks/useI18n';

type SkillRating = NonNullable<Skill['rating']>;
type I18nKeys = keyof (typeof i18n)[Locale];
type SkillRatingTextProps = {
  rating: SkillRating;
};

const i18n = {
  de: {
    skillsRatingBasicText: 'Grundwissen',
    skillsRatingExtendedText: 'Vertiefte Kenntnisse',
    skillsRatingExpertText: 'Spezialwissen',
  },
  en: {
    skillsRatingBasicText: 'Basic knowledge',
    skillsRatingExtendedText: 'In-depth knowledge',
    skillsRatingExpertText: 'Specialized knowledge',
  },
} satisfies I18nRecord;

const ratingTextMap = new Map<SkillRating, I18nKeys>();

ratingTextMap.set(1, 'skillsRatingBasicText');
ratingTextMap.set(2, 'skillsRatingExtendedText');
ratingTextMap.set(3, 'skillsRatingExpertText');

export const SkillRatingText = ({ rating }: SkillRatingTextProps) => {
  const { t } = useI18n(i18n);
  const ratingTextKey = ratingTextMap.get(rating) as I18nKeys;

  return <>{t(ratingTextKey)}</>;
};
