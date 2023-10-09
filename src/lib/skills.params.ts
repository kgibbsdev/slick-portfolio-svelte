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
    description: 'I\'ve been using C++ on and off since 2016. Most recently I\'ve utilized C++ to add online and social features to a large, unnanounced AAA game.',
    logo: Assets.Cpp,
    name: 'C++'
  }),
  s({
    slug: 'csharp',
    color: 'blue',
    description: 'C# is currently my weapon of choice for solving programming problems. I\'ve used it to create web applications, desktop applications, and games with the Unity game engine.',
    logo: Assets.Csharp,
    name: 'C#'
  }),
  s({
    slug: 'dotnet',
    color: 'blue',
    description: '.NET is my favorite web framework at the moment. I\'ve used it to create web applications and web APIs in both a professional and personal context.',
    logo: Assets.DotNet,
    name: '.NET'
  }),
  s({
    slug: 'go',
    color: 'blue',
    description: `I used Golang briefly to assist with developing a Matchmaking Logic Service (MLS) for a large unnanounced AAA game. The MLS worked alongside ${createAnchorString('https://open-match.dev/site/', 'Open Match')} to facilitate matching players together.`,
    logo: Assets.Go,
    name: 'Go'
  }),
  s({
    slug: 'javascript',
    color: 'blue',
    description: 'I\'ve used Javascript to create front-end web applications, webscrapers, and Discord bots. While I prefer Typescript overall, I still use Javasript for smaller, web-based projects.',
    logo: Assets.JavaScript,
    name: 'Javascript'
  }),
  s({
    slug: 'typescript',
    color: 'blue',
    description: 'Like Javascript, I\'ve used Typescript to create front-end web applications. I enjoy the type safety it provides and find it makes working with Javascript more enjoyable. ',
    logo: Assets.TypeScript,
    name: 'Typescript'
  }),
  s({
    slug: 'angular',
    color: 'red',
    description: 'My experience with Angular is rather limited, but I spent about 5 months using it to develop and maintain web tools to assist with the creation of Property and Casualty insurance policies.',
    logo: Assets.Angular,
    name: 'Angular'
  }),
  s({
    slug: 'react',
    color: 'blue',
    description: 'Used in tandem with Javascript and Typescript, I used React to create front-ends for both web and mobile applications including a recruitment tool and an application to help non-profits raise money through holding can drives.',
    logo: Assets.ReactJs,
    name: 'React'
  }),
  s({
    slug: 'sql',
    color: 'blue',
    description: 'While creating full-stack applications, I\'ve used SQL (via Oracle and Microsoft SQL Server) to create and maintain both large corporate databases and small databases for personal projects.',
    logo: Assets.SQL,
    name: 'SQL'
  }),
  s({
    slug: 'gamemaker',
    color: 'blue',
    description: 'Gamemaker was the first game engine I used to create games, and it\'s still my favorite. I\'ve created a released several games with it, mostly for 48-hour game jams.',
    logo: Assets.GameMaker,
    name: 'GameMaker'
  }),
  s({
    slug: 'unity',
    color: 'white',
    description: `I\'ve used Unity to assist ${createAnchorString('https://www.dreamingdoor.net/', 'Dreaming Door Studios')} in updating their game, Golden Treasure: The Great Green. I\'ve also used it to create small games and personal projects including 48-hour game jams.`,
    logo: Assets.Unity,
    name: 'Unity'
  }),
  s({
    slug: 'blazor',
    color: 'blue',
    description: 'I\'ve used Blazor and my experience with .NET to make a personal web application and stretch my web development muscle while working in the games industry. I enjoy working with it because it provides a way to create a full-stack webapp using only C#.',
    logo: Assets.Blazor,
    name: 'Blazor'
  }),
  s({
    slug: 'docker',
    color: 'blue',
    description: 'My experience with Docker is currently limited, but I\'m working to expand it through the development of personal projects hosted on my local network at home. I enjoy using it and love the flexibility it provides for setting up hosting environments.',
    logo: Assets.Docker,
    name: 'Docker'
  }),
  s({
    slug: 'firebase',
    color: 'orange',
    description: 'I\'ve used Firebase to host both professional web applications, including my previous portfolio website. It\'s very flexible and easy to use and provides the power of Google Cloud Platform via a simple interface.',
    logo: Assets.Firebase,
    name: 'Firebase'
  }),
  s({
    slug: 'css',
    color: 'blue',
    description: 'CSS and I have a complicated relationship. While I\'ve used it often for web applications, I prefer to use a framework like Bootstrap or Material UI.',
    logo: Assets.CSS,
    name: 'CSS'
  })

];

export default MY_SKILLS;

export const getSkills = (...slugs: Array<string>): Array<Skill> =>
  MY_SKILLS.filter((it) => slugs.includes(it.slug));

function createAnchorString(url: string, text: string): string {
  return `<a href="${url}" target="_blank" rel="noopener noreferrer">${text}</a>`;
}