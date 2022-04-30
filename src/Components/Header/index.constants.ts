interface LinkProps {
  name: string;
  parallaxIndex: number;
}

export const links: Array<LinkProps> = [
  { name: 'Home', parallaxIndex: 0 },
  { name: 'Stacks', parallaxIndex: 1.4 },
  { name: 'Projects', parallaxIndex: 2 },
  { name: 'Contact', parallaxIndex: 3 },
];
