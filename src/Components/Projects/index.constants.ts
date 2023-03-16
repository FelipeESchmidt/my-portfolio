import certificates from './assets/certificates.png';
import blog from './assets/blog.png';
import library from './assets/library.png';
import portfolio from './assets/portfolio.png';
import teams_picker from './assets/teams_picker.png';
import teams_picker_gif from './assets/teams_picker.gif';
import teoric_machine_maker from './assets/teoric_machine_maker.png';
import teoric_machine_maker_gif from './assets/teoric_machine_maker.gif';

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
    name: 'certificates',
    link: 'http://certificates.felipeschmidt.me',
    repo: 'https://github.com/FelipeESchmidt/React-CertificatesPage-Typescript',
    main: certificates,
    minor: certificates,
    description: 'React app to show my certificates.',
  },
  {
    name: 'teoric-machine-maker',
    link: 'https://teoric-machine-maker.felipeschmidt.me',
    repo: 'https://github.com/FelipeESchmidt/teoric-machine-maker',
    main: teoric_machine_maker_gif,
    minor: teoric_machine_maker,
    description: 'React app that makes it possible to create, program and run universal machines.',
  },
  {
    name: 'portfolio',
    link: 'https://felipeschmidt.me',
    repo: 'https://github.com/FelipeESchmidt/my-portfolio',
    main: portfolio,
    minor: portfolio,
    description: 'React parallax app to show my portfolio. (This one)',
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
