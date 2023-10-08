import Assets from './data/assets';
import type { Skill } from './types';
import svelte from './md/svelte.md?raw';

const s = (skill: Skill) => skill;

export type ArrayElementType<ArrayType extends readonly unknown[]> =
  ArrayType extends readonly (infer ElementType)[] ? ElementType : never;

const MY_SKILLS = [
  s({
    slug: 'cpp',
    color: 'blue',
    description: 'C++',
    logo: Assets.Cpp,
    name: 'C++'
  }),
  s({
    slug: 'csharp',
    color: 'blue',
    description: 'C#',
    logo: Assets.Csharp,
    name: 'C#'
  }),
  s({
    slug: 'dotnet',
    color: 'blue',
    description: '.NET',
    logo: Assets.DotNet,
    name: '.NET'
  }),
  s({
    slug: 'sql',
    color: 'blue',
    description: 'SQL',
    logo: Assets.SQL,
    name: 'SQL'
  }),
  s({
    slug: 'go',
    color: 'blue',
    description: 'Go',
    logo: Assets.Go,
    name: 'Go'
  }),
  s({
    slug: 'javascript',
    color: 'blue',
    description: 'Javascript',
    logo: Assets.JavaScript,
    name: 'Javascript'
  }),
  s({
    slug: 'typescript',
    color: 'blue',
    description: 'Typescript',
    logo: Assets.TypeScript,
    name: 'Typescript'
  }),
  s({
    slug: 'angular',
    color: 'red',
    description: 'Angular',
    logo: Assets.Angular,
    name: 'Angular'
  }),
  s({
    slug: 'react',
    color: 'blue',
    description: 'React',
    logo: Assets.ReactJs,
    name: 'React'
  }),
  s({
    slug: 'gamemaker',
    color: 'blue',
    description: 'GameMaker',
    logo: Assets.GameMaker,
    name: 'GameMaker'
  }),
  s({
    slug: 'unity',
    color: 'white',
    description: 'Unity',
    logo: Assets.Unity,
    name: 'Unity'
  }),
  s({
    slug: 'blazor',
    color: 'blue',
    description: 'Blazor',
    logo: Assets.Blazor,
    name: 'Blazor'
  }),
  s({
    slug: 'docker',
    color: 'blue',
    description: 'Docker',
    logo: Assets.Docker,
    name: 'Docker'
  }),
  s({
    slug: 'firebase',
    color: 'orange',
    description: 'Firebase',
    logo: Assets.Firebase,
    name: 'Firebase'
  }),
  s({
    slug: 'css',
    color: 'blue',
    description: 'CSS',
    logo: Assets.CSS,
    name: 'CSS'
  })

];

export default MY_SKILLS;

export const getSkills = (...slugs: Array<string>): Array<Skill> =>
  MY_SKILLS.filter((it) => slugs.includes(it.slug));
