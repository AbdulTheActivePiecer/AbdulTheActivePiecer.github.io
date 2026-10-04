const journey: Era[] = [
  {
    id: 'era-1',
    title: 'Placeholder era',
    period: '2020 - 2022',
    summary: 'Placeholder description.',
    milestones: [
      { id: 'milestone-1', date: '2020', title: 'Placeholder milestone' },
    ],
  },
];

export { journey };
export type Milestone = {
  id: string;
  date: string;
  title: string;
  description?: string;
};
export type Era = {
  id: string;
  title: string;
  period: string;
  summary: string;
  milestones: Milestone[];
};
