/** @jsxImportSource theme-ui */
import type { Skill, SkillRating } from '../data/skill.config';
import { SKILL_MAX_RATING } from '../data/skill.config';
import { useId } from 'react';
import { useThemeUI } from 'theme-ui';

type TopSkillListProps = {
  ratingText: string;
  rating: SkillRating;
  skills: Pick<Skill, 'id' | 'text'>[];
};

export const TopSkillList = ({ rating, ratingText, skills }: TopSkillListProps) => {
  const id = useId();
  const { theme } = useThemeUI();

  return (
    <>
      <progress
        id={id}
        max={SKILL_MAX_RATING}
        value={rating}
        sx={{ width: '100%', accentColor: theme.colors?.primary }}
      >
        {ratingText}
      </progress>
      <ul aria-describedby={id}>
        {skills.map((skill) => (
          <li key={skill.id}>{skill.text}</li>
        ))}
      </ul>
    </>
  );
};
