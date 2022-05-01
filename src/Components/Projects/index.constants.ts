import certificates from './assets/certificates.png';
import blog from './assets/blog.png';
import library from './assets/library.png';
import portfolio from './assets/portfolio.png';

interface ProjectType {
  main: string;
  minor: string;
  link: string;
  repo: string;
  name: string;
}

export const projects: Array<ProjectType> = [
  { name: 'certificates', link: '#a', repo: '#j', main: certificates, minor: certificates },
  { name: 'portfolio', link: '#b', repo: '#j', main: portfolio, minor: portfolio },
  { name: 'blog', link: '#c', repo: '#j', main: blog, minor: blog },
  { name: 'library', link: '#d', repo: '#j', main: library, minor: library },
];
