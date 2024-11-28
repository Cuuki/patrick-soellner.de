import type { I18nData } from '../types/i18n';

export interface Skill {
  id: string;
  text: string;
  isTopSkill: boolean;
  group: 'languages' | 'frameworks' | 'tools' | 'methods' | 'strengths' | 'interests';
  rating?: 1 | 2 | 3;
}

export const SKILL_MAX_RATING: NonNullable<Skill['rating']> = 3;

const technical: Skill[] = [
  { id: 't0', text: 'JavaScript', rating: 3, group: 'languages', isTopSkill: true },
  { id: 't1', text: 'TypeScript', rating: 3, group: 'languages', isTopSkill: true },
  { id: 't2', text: 'Go', rating: 1, group: 'languages', isTopSkill: false },
  { id: 't3', text: 'CSS3', rating: 3, group: 'languages', isTopSkill: true },
  { id: 't4', text: 'Sass', rating: 3, group: 'languages', isTopSkill: false },
  { id: 't5', text: 'HTML5', rating: 3, group: 'languages', isTopSkill: true },
  { id: 't6', text: 'Markdown', rating: 3, group: 'languages', isTopSkill: false },
  { id: 't7', text: 'GraphQL', rating: 2, group: 'languages', isTopSkill: false },

  { id: 't8', text: 'React', rating: 3, group: 'frameworks', isTopSkill: true },
  { id: 't9', text: 'Vue.js', rating: 3, group: 'frameworks', isTopSkill: false },
  { id: 't10', text: 'Web Components', rating: 2, group: 'frameworks', isTopSkill: false },
  { id: 't11', text: 'Next.js', rating: 2, group: 'frameworks', isTopSkill: true },
  { id: 't12', text: 'Nuxt', rating: 2, group: 'frameworks', isTopSkill: false },
  { id: 't13', text: 'Redux / Vuex', rating: 3, group: 'frameworks', isTopSkill: false },
  { id: 't14', text: 'Apollo Client', rating: 1, group: 'frameworks', isTopSkill: false },
  { id: 't15', text: 'Node.js', rating: 2, group: 'frameworks', isTopSkill: false },
  { id: 't16', text: 'Tailwind CSS', rating: 3, group: 'frameworks', isTopSkill: false },
  { id: 't17', text: 'Bootstrap 4', rating: 3, group: 'frameworks', isTopSkill: false },
  {
    id: 't18',
    text: 'Tailwind UI / Headless UI',
    rating: 2,
    group: 'frameworks',
    isTopSkill: false,
  },
  { id: 't19', text: 'Emotion', rating: 3, group: 'frameworks', isTopSkill: true },
  { id: 't20', text: 'Styled Components', rating: 2, group: 'frameworks', isTopSkill: false },
  { id: 't201', text: 'React Aria', rating: 3, group: 'frameworks', isTopSkill: true },

  { id: 't21', text: 'Storybook', rating: 3, group: 'tools', isTopSkill: true },
  { id: 't22', text: 'Vitest', rating: 3, group: 'tools', isTopSkill: true },
  { id: 't59', text: 'Jest', rating: 3, group: 'tools', isTopSkill: false },
  { id: 't23', text: 'Testing Library', rating: 3, group: 'tools', isTopSkill: true },
  { id: 't24', text: 'Cypress', rating: 3, group: 'tools', isTopSkill: false },
  { id: 't25', text: 'Testcafe', rating: 2, group: 'tools', isTopSkill: false },
  { id: 't26', text: 'Playwright', rating: 2, group: 'tools', isTopSkill: true },
  { id: 't27', text: 'Jira', rating: 3, group: 'tools', isTopSkill: false },
  { id: 't28', text: 'Confluence', rating: 3, group: 'tools', isTopSkill: false },
  { id: 't29', text: 'Figma', rating: 2, group: 'tools', isTopSkill: true },
  { id: 't30', text: 'GitHub', rating: 3, group: 'tools', isTopSkill: false },
  { id: 't31', text: 'GitLab', rating: 3, group: 'tools', isTopSkill: false },
  { id: 't32', text: 'npm', rating: 3, group: 'tools', isTopSkill: false },
  { id: 't33', text: 'pnpm', rating: 3, group: 'tools', isTopSkill: false },
  { id: 't34', text: 'Vite', rating: 3, group: 'tools', isTopSkill: false },
  { id: 't35', text: 'Docker', rating: 1, group: 'tools', isTopSkill: false },
  { id: 't36', text: 'AWS', rating: 1, group: 'tools', isTopSkill: true },
  { id: 't361', text: 'CircleCI', rating: 1, group: 'tools', isTopSkill: true },
  { id: 't362', text: 'GitHub Actions', rating: 2, group: 'tools', isTopSkill: true },
  { id: 't363', text: 'Chromatic', rating: 2, group: 'tools', isTopSkill: true },
  { id: 't364', text: 'Turborepo', rating: 2, group: 'tools', isTopSkill: true },
  { id: 't365', text: 'Changesets', rating: 1, group: 'tools', isTopSkill: true },

  { id: 't37', text: 'Scrum', rating: 3, group: 'methods', isTopSkill: false },
  { id: 't38', text: 'Kanban', rating: 2, group: 'methods', isTopSkill: false },
  { id: 't39', text: 'OKRs', rating: 1, group: 'methods', isTopSkill: false },
  { id: 't40', text: 'Atomic Design', rating: 3, group: 'methods', isTopSkill: true },
  {
    id: 't41',
    text: 'Block Element Modifier (BEM)',
    rating: 3,
    group: 'methods',
    isTopSkill: false,
  },
  {
    id: 't42',
    text: 'Self-contained Systems (SCS)',
    rating: 2,
    group: 'methods',
    isTopSkill: false,
  },
  {
    id: 't43',
    text: 'Component-driven Development (CDD)',
    rating: 3,
    group: 'methods',
    isTopSkill: false,
  },
  {
    id: 't44',
    text: 'Test-driven Development (TDD)',
    rating: 2,
    group: 'methods',
    isTopSkill: false,
  },
  { id: 't45', text: 'End-to-End Testing', rating: 3, group: 'methods', isTopSkill: false },
  { id: 't46', text: 'Monorepo', rating: 2, group: 'methods', isTopSkill: false },
  { id: 't47', text: 'Micro Frontends', rating: 1, group: 'methods', isTopSkill: false },
  { id: 't48', text: 'Responsive Design', rating: 3, group: 'methods', isTopSkill: false },
  { id: 't49', text: 'Refactoring', rating: 3, group: 'methods', isTopSkill: false },
  { id: 't50', text: 'Code Reviews', rating: 3, group: 'methods', isTopSkill: false },
  { id: 't51', text: 'Pair Programming', rating: 3, group: 'methods', isTopSkill: false },
  { id: 't52', text: 'Mob Programming', rating: 3, group: 'methods', isTopSkill: false },
  { id: 't53', text: 'Clean Code', rating: 2, group: 'methods', isTopSkill: false },
  { id: 't54', text: 'SOLID', rating: 1, group: 'methods', isTopSkill: false },
  {
    id: 't55',
    text: 'Object Oriented Programming',
    rating: 2,
    group: 'methods',
    isTopSkill: false,
  },
  { id: 't56', text: 'Functional Programming', rating: 2, group: 'methods', isTopSkill: false },
  { id: 't57', text: 'Clean Architecture', rating: 2, group: 'methods', isTopSkill: false },
  { id: 't58', text: 'Continuous Integration', rating: 2, group: 'methods', isTopSkill: false },
];

const strengths: Skill[] = [
  { id: 's1', text: 'Mentoring', group: 'strengths', isTopSkill: false },
  { id: 's2', text: 'Wissenstransfer', group: 'strengths', isTopSkill: false },
  { id: 's3', text: 'Organisation & Strategisches Denken', group: 'strengths', isTopSkill: false },
  { id: 's4', text: 'Kommunikation', group: 'strengths', isTopSkill: false },
  { id: 's5', text: 'Verlässlichkeit', group: 'strengths', isTopSkill: false },
  { id: 's6', text: 'Detailtreue', group: 'strengths', isTopSkill: false },
  { id: 's7', text: 'Semantik & Barrierefreiheit', group: 'strengths', isTopSkill: false },
  { id: 's8', text: 'User-driven Testing', group: 'strengths', isTopSkill: false },
];
const strengthsEn: Skill[] = [
  { id: 's1', text: 'Mentoring', group: 'strengths', isTopSkill: false },
  { id: 's2', text: 'Knowledge transfer', group: 'strengths', isTopSkill: false },
  { id: 's3', text: 'Organisation & Strategic Thinking', group: 'strengths', isTopSkill: false },
  { id: 's4', text: 'Communication', group: 'strengths', isTopSkill: false },
  { id: 's5', text: 'Reliability', group: 'strengths', isTopSkill: false },
  { id: 's6', text: 'Attention to detail', group: 'strengths', isTopSkill: false },
  { id: 's7', text: 'Semantics & Accessibility', group: 'strengths', isTopSkill: false },
  { id: 's8', text: 'User-driven Testing', group: 'strengths', isTopSkill: false },
];

const interests: Skill[] = [
  { id: 'i1', text: 'TV-Shows & Videospiele (RPGs)', group: 'interests', isTopSkill: false },
  { id: 'i8', text: 'Kreatives Schreiben', group: 'interests', isTopSkill: false },
  { id: 'i3', text: 'Musik & Gesang', group: 'interests', isTopSkill: false },
  { id: 'i2', text: 'Mountainbikes', group: 'interests', isTopSkill: false },
  { id: 'i4', text: 'Cross-country Wanderungen', group: 'interests', isTopSkill: false },
  { id: 'i5', text: 'Roadtrips & Abenteuerreisen', group: 'interests', isTopSkill: false },
  { id: 'i7', text: 'Pflanzen', group: 'interests', isTopSkill: false },
  { id: 'i6', text: 'Smart Home', group: 'interests', isTopSkill: false },
];
const interestsEn: Skill[] = [
  { id: 'i1', text: 'TV Shows & Video Games (RPGs)', group: 'interests', isTopSkill: false },
  { id: 'i8', text: 'Creative Writing', group: 'interests', isTopSkill: false },
  { id: 'i3', text: 'Music & Singing', group: 'interests', isTopSkill: false },
  { id: 'i2', text: 'Mountain Bikes', group: 'interests', isTopSkill: false },
  { id: 'i4', text: 'Cross-country Trekking', group: 'interests', isTopSkill: false },
  { id: 'i5', text: 'Roadtrips & Adventure Travel', group: 'interests', isTopSkill: false },
  { id: 'i7', text: 'Plants', group: 'interests', isTopSkill: false },
  { id: 'i6', text: 'Smart Home', group: 'interests', isTopSkill: false },
];

const skillDataI18n = {
  en: [...technical, ...strengthsEn, ...interestsEn],
  de: [...technical, ...strengths, ...interests],
} satisfies I18nData<Skill[]>;

export default skillDataI18n;
