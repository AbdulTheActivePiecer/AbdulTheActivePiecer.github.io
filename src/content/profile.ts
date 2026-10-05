import type { InlineLink } from '@/components/custom/linked-text';

const profile: Profile = {
  name: 'Abdul-Rahman Al-Hussien',
  role: 'Senior Product Engineer',
  company: 'Activepieces',
  hook: 'Full-stack TypeScript engineer, from the interface people click to the backend that runs their work.',
  email: 'abdulrahmanyki.1998@gmail.com',
  links: {
    github: 'https://github.com/AbdulTheActivePiecer',
    linkedin: 'https://jo.linkedin.com/in/abdul-rahman-al-hussien-21a074198',
    booking: 'https://cal.com/abdul-rahman-al-hussein-dn0uel/30min',
  },
};

const about: AboutParagraph[] = [
  {
    text: "I'm a product engineer with high ownership: I take features from first sketch to release, and I stay with them after they ship, fixing what users run into and improving what they use most. I joined Activepieces in July 2022, before it went open source, and have spent four years helping turn it into the product it is today.",
  },
  {
    text: "I work across the whole stack. On the surface, I've helped shape the flow builder and the tools that let other SaaS products embed Activepieces. Underneath, I build what they never see, like billing and translation pipelines.",
  },
  {
    text: 'My work with AI at Activepieces started early, with a code copilot that writes the code for automation steps. It grew into letting users pick their own AI providers for the {link}, adding image generation with Nano Banana and other AI tools to automations, building MCP servers and an agent builder, and billing AI by usage. I keep up with new ways of working with AI agents and use them every day to ship better work, faster.',
    link: {
      label: 'universal AI step',
      href: 'https://www.activepieces.com/pieces/ai',
    },
  },
];

const traits: Trait[] = [
  { title: 'End to end', detail: 'Idea, UI, API, runtime, release' },
  { title: 'Detail-minded', detail: 'The interactions people use every day' },
  {
    title: 'Builds the foundations',
    detail: 'Billing, translations, upgrades, CI',
  },
];

const stats: Stat[] = [
  { value: 1243, label: 'pull requests merged' },
  { value: 4225, label: 'commits, translations excluded' },
  {
    display: 'Jul 2022',
    label: 'on the team from day one, before open source',
  },
  { value: 57, label: 'releases shipped' },
];

const heatmapSummary = {
  activeDays: 820,
  since: 'Dec 2022',
  longestStreak: 14,
  start: '2022-11-27',
  end: '2026-09-26',
};

export { profile, about, traits, stats, heatmapSummary };
export type Profile = {
  name: string;
  role: string;
  company: string;
  hook: string;
  email: string;
  links: { github: string; linkedin: string; booking: string };
};
export type AboutParagraph = { text: string; link?: InlineLink };
export type Trait = { title: string; detail: string };
export type Stat =
  | { value: number; label: string; display?: undefined }
  | { display: string; label: string; value?: undefined };
