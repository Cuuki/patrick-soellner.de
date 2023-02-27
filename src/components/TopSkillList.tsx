/** @jsxImportSource theme-ui */
import { useId } from 'react';
import { useThemeUI } from 'theme-ui';
import type { Skill } from '../data/skill.config';
import { SKILL_MAX_RATING } from '../data/skill.config';
import { SkillRatingText } from './SkillRatingText';

type TopSkillListProps = {
  rating: NonNullable<Skill['rating']>;
  skills: Pick<Skill, 'id' | 'text'>[];
};

export const TopSkillList = ({ rating, skills }: TopSkillListProps) => {
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
        <SkillRatingText rating={rating} />
      </progress>
      <ul aria-describedby={id}>
        {skills.map((skill) => (
          <li key={skill.id}>{skill.text}</li>
        ))}
      </ul>
    </>
  );
};
