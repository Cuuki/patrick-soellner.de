import { SkillRatingText } from './SkillRatingText';

export const SkillRatingLegend = () => (
  <em>
    (1) - <SkillRatingText rating={1} />, (2) - <SkillRatingText rating={2} />, (3) -{' '}
    <SkillRatingText rating={3} />
  </em>
);
