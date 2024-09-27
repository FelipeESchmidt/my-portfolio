export interface LinkProps {
  name: string;
  parallaxIndex: number;
  linkTo?: string;
}

export const links: Array<LinkProps> = [
  { name: 'Home', parallaxIndex: 0 },
  { name: 'Stacks', parallaxIndex: 1.4 },
  { name: 'Projects', parallaxIndex: 3.2 },
  { name: 'Lifetime', parallaxIndex: 5.05 },
  { name: 'Contact', parallaxIndex: 10, linkTo: '/contact' },
];
