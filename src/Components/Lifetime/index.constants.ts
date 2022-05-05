interface LifeTimeProps {
  title: string;
  description: string;
  year: number;
}

export const getYears = () => {
  const years = lifetime.map((time) => time.year).sort((a, b) => a - b);
  return years.filter((year, i) => years.indexOf(year) === i);
};

export const lifetime: Array<LifeTimeProps> = [
  {
    year: 1999,
    title: 'I was born',
    description: 'On August 20th around 7 am I came into the world.',
  },
  {
    year: 2014,
    title: 'High school',
    description: 'I started my high school with a technical course in electrical.',
  },
  {
    year: 2017,
    title: 'Started programming',
    description:
      'My coding journey started with an electrical subject on C programming, and it was at that moment that I found exactly what I love to do, what makes me happy and makes me feel free.',
  },
  {
    year: 2018,
    title: 'Graduated',
    description: 'I got graduated at high school with a technical course in electrical.',
  },
  {
    year: 2018,
    title: 'Graduated',
    description: 'I got graduated at high school with a technical course in electrical.',
  },
  {
    year: 2018,
    title: 'Graduated',
    description: 'I got graduated at high school with a technical course in electrical.',
  },
  {
    year: 2018,
    title: 'Graduated',
    description: 'I got graduated at high school with a technical course in electrical.',
  },
];
