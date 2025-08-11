export interface StackProps {
  name: string;
  goodAt: 'advanced' | 'intermediate' | 'beginner';
}

export const stacks: Array<StackProps> = [
  { name: 'React', goodAt: 'advanced' },
  { name: 'Typescript', goodAt: 'advanced' },
  { name: 'NextJS', goodAt: 'advanced' },
  { name: 'React Native', goodAt: 'advanced' },
  { name: 'Javascript', goodAt: 'advanced' },
  { name: 'Jest', goodAt: 'advanced' },
  { name: 'StoryBook', goodAt: 'advanced' },
  { name: 'SASS', goodAt: 'advanced' },
  { name: 'PHP', goodAt: 'intermediate' },
  { name: 'NodeJS', goodAt: 'intermediate' },
  { name: 'SQL', goodAt: 'intermediate' },
  { name: 'Python', goodAt: 'beginner' },
];
