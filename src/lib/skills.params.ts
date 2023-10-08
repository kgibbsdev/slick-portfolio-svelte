import Assets from './data/assets';
import type { Skill } from './types';
import svelte from './md/svelte.md?raw';

const s = (skill: Skill) => skill;

export type ArrayElementType<ArrayType extends readonly unknown[]> =
  ArrayType extends readonly (infer ElementType)[] ? ElementType : never;

const MY_SKILLS = [
  s({
    slug: 'C++',
    color: 'blue',
    description: 'C++',
    logo: Assets.Cpp,
    name: 'C++'
  }),
  s({
    slug: 'Csharp',
    color: 'blue',
    description: 'C#',
    logo: Assets.Csharp,
    name: 'C#'
  }),
  s({
    slug: 'Docker',
    color: 'blue',
    description: 'Docker',
    logo: Assets.Docker,
    name: 'Docker'
  }),
];

export default MY_SKILLS;

export const getSkills = (...slugs: Array<string>): Array<Skill> =>
  MY_SKILLS.filter((it) => slugs.includes(it.slug));
