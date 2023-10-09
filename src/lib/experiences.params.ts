import Assets from './data/assets';
import { getSkills } from './skills.params';
import { ContractType, type Experience } from './types';

const MY_EXPERIENCES: Array<Experience> = [
  {
    slug: 'wolfjaw-studios',
    company: 'Wolfjaw Studios',
    description: 'Developing online services for games.',
    contract: ContractType.FullTime,
    type: 'Software Development',
    location: 'Home',
    period: { from: new Date('12-05-2022') },
    skills: getSkills('cpp', 'go'),
    name: 'Associate Software Engineer',
    color: '#ffffff',
    links: [],
    logo: Assets.Wolf,
    shortDescription: ''
  },
  {
    slug: 'continental-engineering-services',
    company: 'Continental Engineering Services',
    description: 'Creating and maintaining legacy tools for project managers and engineers using C#, .NET, and Visual Studio Tools for Office.',
    contract: ContractType.FullTime,
    type: 'Software Development',
    location: 'Auburn Hills, MI',
    period: { from: new Date('April 2021'), to: new Date('November 2022') },
    skills: getSkills('csharp', 'dotnet', 'sql'),
    name: 'Associate Software Tools Engineer',
    color: '#ffffff',
    links: [],
    logo: Assets.Gears,
    shortDescription: ''
  },
  {
    slug: 'finys',
    company: 'Finys',
    description: 'Maintaining and developing new features for a property and casualty insurance software tools sweet.',
    contract: ContractType.FullTime,
    type: 'Software Development',
    location: 'Troy, MI',
    period: { from: new Date('11/5/2020'), to: new Date('3/5/2021') },
    skills: getSkills('angular', 'csharp', 'css', 'typescript'),
    name: 'Fullstack Software Engineer',
    color: '#ffffff',
    links: [],
    logo: Assets.Insurance,
    shortDescription: ''
  },
  {
    slug: 'dreaming-door-studios',
    company: 'Dreaming Door Studios',
    description: 'Created a tool to extract game dialogue for translation by a 3rd party and then return the translated dialogue to the game, provided bug fixes for upcoming DLC expansion.',
    contract: ContractType.Contract,
    type: 'Software Development',
    location: 'Home',
    period: { from: new Date('October 2020'), to: new Date('November 2020') },
    skills: getSkills('csharp', 'unity'),
    name: 'Tools Devloper',
    color: '#ffffff',
    links: [],
    logo: Assets.Door,
    shortDescription: ''
  },
  {
    slug: 'spud-software',
    company: 'Spud Software',
    description: 'Creating front-ends for web applications and a mobile application for medium-sized businesses.',
    contract: ContractType.FullTime,
    type: 'Software Development',
    location: 'Grand Blanc, MI',
    period: { from: new Date('April 2019'), to: new Date('September 2020') },
    skills: getSkills('react', 'csharp', 'css', 'typescript', 'javascript'),
    name: 'Front-End Developer',
    color: '#ffffff',
    links: [],
    logo: Assets.Potato,
    shortDescription: ''
  }
];

export default MY_EXPERIENCES;
