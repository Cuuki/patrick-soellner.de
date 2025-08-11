/** @jsxImportSource theme-ui */
import type { ReactElement } from 'react';
import type { Skill } from '../data/skill.config';

type SkillGroupProps = {
  title: string | ReactElement;
  skills: Pick<Skill, 'id' | 'rating' | 'text'>[];
};

export const SkillGroup = ({ title, skills }: SkillGroupProps) => (
  <dl>
    <dt sx={{ mb: 2 }}>{title}</dt>
    {skills.map((skill) => (
      <dd key={skill.id} sx={{ ml: 2 }}>
        {skill.rating ? (
          <>
            {skill.text} <em>({skill.rating})</em>
          </>
        ) : (
          skill.text
        )}
      </dd>
    ))}
  </dl>
);
