import MY_EXPERIENCES from './experiences.params';
import MY_PROJECTS from './projects.params';
import MY_SKILLS from './skills.params';
import {
  Platform,
  type HomePageParams,
  type ProjectPageParams,
  type ExperiencePageParams,
  type SkillsPageParams,
  type ResumePageParams,
  type SearchPageParams
} from './types';
import { Icons } from './utils';

export const TITLE_SUFFIX = 'Kyle Gibbs';

export const NavBar = {
  home: 'Home',
  personal: 'Projects',
  career: 'Experiences',
  resume: 'Resume',
  skills: 'Skills'
};

export const getPlatfromIcon = (platform: Platform): Icons => {
  switch (platform) {
    case Platform.GitHub:
      return Icons.GitHub;
    case Platform.Linkedin:
      return Icons.LinkedIn;
    case Platform.StackOverflow:
      return Icons.StackOverflow;
    case Platform.Facebook:
      return Icons.Facebook;
    case Platform.Email:
      return Icons.Email;
    case Platform.Twitter:
      return Icons.Twitter;
    case Platform.Youtube:
      return Icons.Youtube;
  }
};

export const HOME: HomePageParams = {
  title: 'Home',
  name: 'Kyle',
  lastName: 'Gibbs',
  description:
    'Hey there! Thanks for checking out my portfolio. I am a game developer and software engineer with a passion ' +
    'for learning and creating. I have a degree in Computer Science with a focus in Software Engineering from the University of Michigan - Flint. ' +
    'I am currently working as a software engineer at Wolfjaw Studios. ',
  links: [
    { platform: Platform.GitHub, link: 'https://github.com/kgibbsdev' },
    {
      platform: Platform.Email,
      link: 'kyle@kylegibbs.dev'
    },
    {
      platform: Platform.Linkedin,
      link: 'https://www.linkedin.com/'
    }
  ]
};

export const PROJECTS: ProjectPageParams = {
  title: 'Projects',
  items: MY_PROJECTS
};

export const EXPERIENCES: ExperiencePageParams = {
  title: 'Experiences',
  items: MY_EXPERIENCES
};

export const SKILLS: SkillsPageParams = {
  title: 'Skills',
  items: MY_SKILLS
};

export const RESUME: ResumePageParams = {
  title: 'Resumé',
  item: ''
};

export const SEARCH: SearchPageParams = {
  title: 'Search'
};
