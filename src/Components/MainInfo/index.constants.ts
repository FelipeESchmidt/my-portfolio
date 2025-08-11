import { IconType } from 'react-icons';
import { BsGithub, BsInstagram, BsLinkedin } from 'react-icons/bs';
import { FiMail } from 'react-icons/fi';

interface Social {
  name: string;
  href: string;
  icon: IconType;
}

export const whoIAm: string = "Sup, I'm Felipe Schmidt";
export const whatIAm: string = "I'm a Brazilian Front-end Developer and a Computer Scientist";
export const whoIWannaBe: Array<string> = [
  'Graduated in Computer Science',
  'Studying to become a FullStack Developer',
  'Studying to become a Better Person',
  'Studying to become a Better Professional',
];
export const whoIWannaBeTimes: Array<number> = [1500, 1500, 1500, 5000];

export const socials: Array<Social> = [
  { name: 'github', href: 'https://github.com/FelipeESchmidt', icon: BsGithub },
  {
    name: 'linkedin',
    href: 'https://www.linkedin.com/in/felipe-ernesto-schmidt/',
    icon: BsLinkedin,
  },
  {
    name: 'instagram',
    href: 'https://www.instagram.com/feschmidt_/',
    icon: BsInstagram,
  },
  {
    name: 'email',
    href: 'mailto:contact@felipeschmidt.me?subject=Contact from website&body=Your message',
    icon: FiMail,
  },
];
