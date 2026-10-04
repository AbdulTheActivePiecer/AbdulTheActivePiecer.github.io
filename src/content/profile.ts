const profile: Profile = {
  name: 'Abdul-rahman Khalil',
  title: 'Software Engineer',
  summary: 'Placeholder summary.',
  location: 'Placeholder',
  email: 'abdulyki@activepieces.com',
  links: [{ label: 'GitHub', url: 'https://github.com/' }],
};

export { profile };
export type ProfileLink = { label: string; url: string };
export type Profile = {
  name: string;
  title: string;
  summary: string;
  location: string;
  email: string;
  links: ProfileLink[];
};
