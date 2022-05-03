import { IconType } from 'react-icons';
import { BsGithub, BsInstagram, BsLinkedin } from 'react-icons/bs';
import { FaSteam } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';

interface Social {
  name: string;
  href: string;
  icon: IconType;
}

export const whoImI: string = "Sup, I'm Felipe Schmidt";
export const whatImI: string = "I'm a Brazilian Front-end Developer";
export const whoIWannaBe: Array<string> = [
  'Studying to became a FullStack Developer',
  'Studying to became a Better Person',
  'Studying to became a Better Professional',
  'Studying to became a Computer Scientist',
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
    name: 'steam',
    href: 'https://steamcommunity.com/id/TheJodes/',
    icon: FaSteam,
  },
  {
    name: 'email',
    href: 'mailto:contact@felipeschmidt.me?subject=Contact from website&body=Your message',
    icon: FiMail,
  },
];
