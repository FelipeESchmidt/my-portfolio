import certificates from './assets/certificates.png';
import blog from './assets/blog.png';
import library from './assets/library.png';
import portfolio from './assets/portfolio.png';

interface ProjectType {
  main: string;
  minor: string;
  link: string;
  name: string;
}

export const projects: Array<ProjectType> = [
  { name: 'certificates', link: '#a', main: certificates, minor: certificates },
  { name: 'portfolio', link: '#c', main: portfolio, minor: portfolio },
  { name: 'blog', link: '#b', main: blog, minor: blog },
  { name: 'library', link: '#c', main: library, minor: library },
];
