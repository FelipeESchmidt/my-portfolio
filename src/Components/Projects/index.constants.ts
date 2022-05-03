import certificates from './assets/certificates.png';
import blog from './assets/blog.png';
import library from './assets/library.png';
import portfolio from './assets/portfolio.png';
import teams_picker from './assets/teams_picker.png';
import teams_picker_gif from './assets/teams_picker.gif';

interface ProjectType {
  main: string;
  minor: string;
  link: string;
  repo: string;
  name: string;
}

export const projects: Array<ProjectType> = [
  {
    name: 'certificates',
    link: 'http://certificates.felipeschmidt.me',
    repo: 'https://github.com/FelipeESchmidt/React-CertificatesPage-Typescript',
    main: certificates,
    minor: certificates,
  },
  {
    name: 'portfolio',
    link: 'https://felipeschmidt.me',
    repo: 'https://github.com/FelipeESchmidt/my-portfolio',
    main: portfolio,
    minor: portfolio,
  },
  {
    name: 'blog',
    link: 'http://blog.felipeschmidt.me',
    repo: 'https://github.com/FelipeESchmidt/React--Sistema--Blog',
    main: blog,
    minor: blog,
  },
  {
    name: 'library',
    link: 'http://library.felipeschmidt.me',
    repo: 'https://github.com/FelipeESchmidt/React--Sistema--Biblioteca',
    main: library,
    minor: library,
  },
  {
    name: 'teams-picker',
    link: 'http://teams-picker.felipeschmidt.me',
    repo: 'https://github.com/FelipeESchmidt/Teams-picker',
    main: teams_picker_gif,
    minor: teams_picker,
  },
];
