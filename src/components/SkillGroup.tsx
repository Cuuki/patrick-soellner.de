/** @jsxImportSource theme-ui */
import type { ReactElement } from 'react';
import type { Skill } from '../data/skill.config';

type SkillGroupProps = {
  title: string | ReactElement;
  skills: Pick<Skill, 'id' | 'rating' | 'text'>[];
};

export const SkillGroup = ({ title, skills }: SkillGroupProps) => (
  <dl>
    <dt>{title}</dt>
    {skills.map((skill) => (
      <dd key={skill.id}>{skill.rating ? `${skill.text} (${skill.rating})` : skill.text}</dd>
    ))}
  </dl>
);
