import certificates from './assets/certificates.png';
import blog from './assets/blog.png';
import library from './assets/library.png';
import portfolio from './assets/portfolio.png';
import teams_picker from './assets/teams_picker.png';
import teams_picker_gif from './assets/teams_picker.gif';
import ctf from './assets/ctf.png';
import ctf_gif from './assets/ctf.gif';

interface ProjectType {
  main: string;
  minor: string;
  link: string;
  repo: string;
  name: string;
  description?: string;
}

export const projects: Array<ProjectType> = [
  {
    name: 'portfolio',
    link: 'https://felipeschmidt.me',
    repo: 'https://github.com/FelipeESchmidt/my-portfolio',
    main: portfolio,
    minor: portfolio,
    description: 'React parallax app to show my portfolio. (This one)',
  },
  {
    name: 'capstone project',
    link: 'https://computing-theory-forge.felipeschmidt.me/',
    repo: 'https://github.com/FelipeESchmidt/computing-theory-forge',
    main: ctf_gif,
    minor: ctf,
    description: 'Capstone project to help students understand computing theory concepts.',
  },
  {
    name: 'blog',
    link: 'http://blog.felipeschmidt.me',
    repo: 'https://github.com/FelipeESchmidt/React--Sistema--Blog',
    main: blog,
    minor: blog,
    description: 'React app to create post and commentaries on them.',
  },
  {
    name: 'certificates',
    link: 'http://certificates.felipeschmidt.me',
    repo: 'https://github.com/FelipeESchmidt/React-CertificatesPage-Typescript',
    main: certificates,
    minor: certificates,
    description: 'React app to show my certificates.',
  },
  {
    name: 'library',
    link: 'http://library.felipeschmidt.me',
    repo: 'https://github.com/FelipeESchmidt/React--Sistema--Biblioteca',
    main: library,
    minor: library,
    description: 'React app to sort books in some shelves.',
  },
  {
    name: 'teams-picker',
    link: 'http://teams-picker.felipeschmidt.me',
    repo: 'https://github.com/FelipeESchmidt/Teams-picker',
    main: teams_picker_gif,
    minor: teams_picker,
    description: 'React app to create teams from some players list.',
  },
];
