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
    description: `My coding journey started with an electrical subject on C programming, and it was at that moment that I found exactly what I love to do,
      what makes me happy and makes me feel free.`,
  },
  {
    year: 2018,
    title: 'College',
    description: `After high school I had to choose what I would do with my life, keeping in mind that I found programming something that I really like, I 
      chose Computer Science as my college course.`,
  },
  {
    year: 2018,
    title: 'Graduated',
    description: 'I got graduated at high school with a technical course in electrical.',
  },
  {
    year: 2018,
    title: 'First Job',
    description:
      'My professional career started at PCE Engineer as intern, working with electronics.',
  },
  {
    year: 2019,
    title: 'Programmer',
    description: `After almost a year working with electronics I received an offer at the same company to work as an automation developer and 2D equipment image maker.
      Stacks: C++, TIA Portal and Corel Draw.`,
  },
  {
    year: 2020,
    title: 'Life Change',
    description: `After one year and a few months working as automation developer I decided to quit and focus in web development and something closer to my college curse.`,
  },
  {
    year: 2020,
    title: 'Web development',
    description: `So I started studying web development. My initial focus was on Front-End with basic HTML, CSS and Javascript websites. After that completed I started to
      study about Back-End with PHP and SQL.`,
  },
  {
    year: 2021,
    title: 'React Scholarship',
    description: `Within my college I was able to do a 3 months scholarship with Compass UOL to learn React JS development.`,
  },
  {
    year: 2021,
    title: 'Front-End Junior Developer',
    description: `After my scholarship I received a proposal to work as a Front-End developer at Compass UOL. Stacks: React, Typescript, Jest, Git and Storybook.`,
  },
  {
    year: 2023,
    title: 'Front-End Mid-Level Developer',
    description: `With one year working at Compass UOl, I've received a proposal to incorporate Terra Investimentos team, and became Terra's Front-End chapter leader as well.`,
  },
];
