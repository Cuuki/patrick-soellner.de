import type { I18nData } from '../types/i18n';

type SkillGroup = 'languages' | 'frameworks' | 'tools' | 'methods' | 'strengths' | 'interests';
export type SkillRating = 1 | 2 | 3;

export interface Skill {
  id: string;
  text: string;
  isTop: boolean;
  group: SkillGroup;
  rating?: SkillRating;
}

export const SKILL_MAX_RATING: SkillRating = 3;

const technical: Skill[] = [
  { id: 't0', text: 'JavaScript', rating: 3, group: 'languages', isTop: true },
  { id: 't1', text: 'TypeScript', rating: 3, group: 'languages', isTop: true },
  { id: 't2', text: 'Go', rating: 1, group: 'languages', isTop: false },
  { id: 't3', text: 'CSS3', rating: 3, group: 'languages', isTop: true },
  { id: 't4', text: 'Sass', rating: 3, group: 'languages', isTop: true },
  { id: 't5', text: 'HTML5', rating: 3, group: 'languages', isTop: true },
  { id: 't6', text: 'Markdown', rating: 3, group: 'languages', isTop: false },
  { id: 't7', text: 'GraphQL', rating: 2, group: 'languages', isTop: false },

  { id: 't8', text: 'React', rating: 3, group: 'frameworks', isTop: true },
  { id: 't9', text: 'Vue.js', rating: 3, group: 'frameworks', isTop: true },
  { id: 't10', text: 'Web Components / Lit', rating: 2, group: 'frameworks', isTop: false },
  { id: 't11', text: 'Next.js', rating: 2, group: 'frameworks', isTop: true },
  { id: 't12', text: 'Nuxt', rating: 2, group: 'frameworks', isTop: false },
  { id: 't13', text: 'Redux / Vuex', rating: 3, group: 'frameworks', isTop: true },
  { id: 't14', text: 'Apollo Client', rating: 1, group: 'frameworks', isTop: false },
  { id: 't15', text: 'Node.js', rating: 2, group: 'frameworks', isTop: false },
  { id: 't16', text: 'Tailwind CSS', rating: 3, group: 'frameworks', isTop: true },
  { id: 't17', text: 'Bootstrap 4', rating: 3, group: 'frameworks', isTop: false },
  { id: 't18', text: 'Tailwind UI / Headless UI', rating: 2, group: 'frameworks', isTop: false },
  { id: 't19', text: 'Emotion', rating: 2, group: 'frameworks', isTop: false },
  { id: 't20', text: 'Styled Components', rating: 2, group: 'frameworks', isTop: true },

  { id: 't21', text: 'Storybook', rating: 3, group: 'tools', isTop: true },
  { id: 't22', text: 'Jest', rating: 3, group: 'tools', isTop: true },
  { id: 't23', text: 'Testing Library', rating: 3, group: 'tools', isTop: true },
  { id: 't24', text: 'Cypress', rating: 3, group: 'tools', isTop: true },
  { id: 't25', text: 'Testcafe', rating: 2, group: 'tools', isTop: false },
  { id: 't26', text: 'Playwright', rating: 1, group: 'tools', isTop: true },
  { id: 't27', text: 'Jira', rating: 3, group: 'tools', isTop: false },
  { id: 't28', text: 'Confluence', rating: 3, group: 'tools', isTop: false },
  { id: 't29', text: 'Figma', rating: 2, group: 'tools', isTop: false },
  { id: 't30', text: 'Github', rating: 2, group: 'tools', isTop: false },
  { id: 't31', text: 'Gitlab', rating: 3, group: 'tools', isTop: false },
  { id: 't32', text: 'npm', rating: 3, group: 'tools', isTop: false },
  { id: 't33', text: 'yarn / pnpm', rating: 2, group: 'tools', isTop: false },
  { id: 't34', text: 'Vite', rating: 3, group: 'tools', isTop: false },
  { id: 't35', text: 'Docker', rating: 1, group: 'tools', isTop: true },
  { id: 't36', text: 'AWS', rating: 1, group: 'tools', isTop: false },

  { id: 't37', text: 'Scrum', rating: 3, group: 'methods', isTop: false },
  { id: 't38', text: 'Kanban', rating: 2, group: 'methods', isTop: false },
  { id: 't39', text: 'OKRs', rating: 1, group: 'methods', isTop: false },
  { id: 't40', text: 'Atomic Design', rating: 3, group: 'methods', isTop: false },
  { id: 't41', text: 'Block Element Modifier (BEM)', rating: 3, group: 'methods', isTop: false },
  { id: 't42', text: 'Self-contained Systems (SCS)', rating: 2, group: 'methods', isTop: false },
  {
    id: 't43',
    text: 'Component-driven Development (CDD)',
    rating: 3,
    group: 'methods',
    isTop: false,
  },
  { id: 't44', text: 'Test-driven Development (TDD)', rating: 2, group: 'methods', isTop: false },
  { id: 't45', text: 'End-to-End Testing', rating: 3, group: 'methods', isTop: false },
  { id: 't46', text: 'Monorepo', rating: 2, group: 'methods', isTop: false },
  { id: 't47', text: 'Micro Frontends', rating: 1, group: 'methods', isTop: false },
  { id: 't48', text: 'Responsive Design', rating: 3, group: 'methods', isTop: false },
  { id: 't49', text: 'Refactoring', rating: 3, group: 'methods', isTop: false },
  { id: 't50', text: 'Code Reviews', rating: 3, group: 'methods', isTop: false },
  { id: 't51', text: 'Pair Programming', rating: 3, group: 'methods', isTop: false },
  { id: 't52', text: 'Mob Programming', rating: 3, group: 'methods', isTop: false },
  { id: 't53', text: 'Clean Code', rating: 2, group: 'methods', isTop: false },
  { id: 't54', text: 'SOLID', rating: 1, group: 'methods', isTop: false },
  { id: 't55', text: 'Object Oriented Programming', rating: 2, group: 'methods', isTop: false },
  { id: 't56', text: 'Functional Programming', rating: 2, group: 'methods', isTop: false },
  { id: 't57', text: 'Clean Architecture', rating: 2, group: 'methods', isTop: false },
  { id: 't58', text: 'Continuous Integration', rating: 2, group: 'methods', isTop: false },
];

const strengths: Skill[] = [
  { id: 's1', text: 'Mentoring', group: 'strengths', isTop: false },
  { id: 's2', text: 'Wissenstransfer', group: 'strengths', isTop: false },
  { id: 's3', text: 'Organisation', group: 'strengths', isTop: false },
  { id: 's4', text: 'Kommunikation', group: 'strengths', isTop: false },
  { id: 's5', text: 'Verlässlichkeit', group: 'strengths', isTop: false },
  { id: 's6', text: 'Detailtreue', group: 'strengths', isTop: false },
  { id: 's7', text: 'Semantik & Barrierefreiheit', group: 'strengths', isTop: false },
  { id: 's8', text: 'User-driven Testing', group: 'strengths', isTop: false },
];
const strengthsEn: Skill[] = [
  { id: 's1', text: 'Mentoring', group: 'strengths', isTop: false },
  { id: 's2', text: 'Knowledge transfer', group: 'strengths', isTop: false },
  { id: 's3', text: 'Organisation', group: 'strengths', isTop: false },
  { id: 's4', text: 'Communication', group: 'strengths', isTop: false },
  { id: 's5', text: 'Reliability', group: 'strengths', isTop: false },
  { id: 's6', text: 'Attention to detail', group: 'strengths', isTop: false },
  { id: 's7', text: 'Semantics & Accessibility', group: 'strengths', isTop: false },
  { id: 's8', text: 'User-driven Testing', group: 'strengths', isTop: false },
];

const interests: Skill[] = [
  { id: 'i1', text: 'Serien, Filme & Video Games', group: 'interests', isTop: false },
  { id: 'i2', text: 'Motorräder / Harley Davidson', group: 'interests', isTop: false },
  { id: 'i3', text: 'Musik & Gesang', group: 'interests', isTop: false },
  { id: 'i4', text: 'Cross-country Trekking', group: 'interests', isTop: false },
  { id: 'i5', text: 'Reisen in der Natur', group: 'interests', isTop: false },
  { id: 'i6', text: 'Smart Home', group: 'interests', isTop: false },
  { id: 'i7', text: 'Pflanzen', group: 'interests', isTop: false },
  { id: 'i8', text: 'Frontend Technologien & Methoden', group: 'interests', isTop: false },
];
const interestsEn: Skill[] = [
  { id: 'i1', text: 'TV Shows, Movies & Video Games', group: 'interests', isTop: false },
  { id: 'i2', text: 'Motorcycles / Harley Davidson', group: 'interests', isTop: false },
  { id: 'i3', text: 'Music & Singing', group: 'interests', isTop: false },
  { id: 'i4', text: 'Cross-country Trekking', group: 'interests', isTop: false },
  { id: 'i5', text: 'Nature traveling', group: 'interests', isTop: false },
  { id: 'i6', text: 'Smart Home', group: 'interests', isTop: false },
  { id: 'i7', text: 'Plants', group: 'interests', isTop: false },
  { id: 'i8', text: 'Frontend Technologies & Methods', group: 'interests', isTop: false },
];

const skillDataI18n = {
  en: [...technical, ...strengthsEn, ...interestsEn],
  de: [...technical, ...strengths, ...interests],
} satisfies I18nData<Skill[]>;

export default skillDataI18n;
