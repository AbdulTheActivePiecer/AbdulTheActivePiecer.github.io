import type { InlineLink } from '@/components/custom/linked-text';

import type { Screenshot } from './journey';

const caseStudies: CaseStudy[] = [
  {
    label: 'Case 01 · Flow builder',
    title: 'A builder that can express any automation',
    problem:
      'The builder is where every flow gets made, so it has to bend to whatever the user needs: recover when a step fails, send execution down different routes based on conditions, and work through lists of data.',
    built:
      'Routers that branch execution on conditions, loops that iterate over lists, and on-success and on-failure handlers on every step. Around them, the tools that keep large flows manageable: copy and paste, a right-click step menu, the canvas toolbar, a minimap, sticky notes, a horizontal layout and exporting a flow as an image.',
    outcome:
      'Flows stopped being straight lines and became real logic, branching, looping and recovering from errors, all built visually. The Router alone was a 5.9k-line change across the editor, the execution logic and the step settings.',
    prs: [5955, 6315, 13074, 13661],
    stack: ['React', 'TypeScript', 'React Flow', 'Zustand'],
    screenshot: {
      src: 'shots/canvas-v4.webp',
      alt: 'Error handling, a 3-way Router and a loop in one flow',
      width: 1600,
      height: 1200,
    },
    demo: {
      href: 'https://cloud.activepieces.com/',
      label: 'See it live on Activepieces Cloud',
    },
  },
  {
    label: 'Case 02 · Embedding',
    title: 'Activepieces inside other products',
    problem:
      'SaaS teams wanted Activepieces inside their own app, under their own brand.',
    built:
      'iframe embedding with JWT signing keys, white-label platform settings, bring-your-own OAuth2 apps, and a JavaScript embed SDK that can call the backend.',
    outcome: 'The groundwork for the embedded and white-label offering.',
    prs: [3085, 3010, 3171, 7405],
    stack: ['Angular → React', 'JWT', 'postMessage', 'SDK design'],
    screenshot: {
      src: 'shots/embedding-43.webp',
      alt: 'The Activepieces builder embedded inside a customer’s SaaS (from the docs)',
      width: 1200,
      height: 900,
    },
    demo: {
      href: 'https://embed.activepieces.com/',
      label: 'Try the live embed demo',
    },
  },
  {
    label: 'Case 03 · Billing',
    title: 'Moving billing to Autumn',
    problem:
      'Plans, limits and credits lived in license keys and Stripe logic spread across Cloud and self-hosted.',
    built:
      'I moved billing onto {link}, one streamlined setup for both self-hosted and Cloud customers. It made billing AI usage, launching new plans and running trials a breeze.',
    outcome:
      'One billing model for Cloud and Enterprise: +12.9k / −4.6k lines across 229 files, plus a 7-PR stack for AI cost.',
    builtLink: { label: 'Autumn', href: 'https://useautumn.com' },
    prs: [14436, 14729, 15494],
    stack: ['Node.js', 'Fastify', 'PostgreSQL', 'Redis', 'Autumn'],
    screenshot: {
      src: 'shots/billing-v4.webp',
      alt: 'The billing page: current plan and credit usage',
      width: 1600,
      height: 1200,
    },
  },
];

export { caseStudies };
export type CaseStudy = {
  label: string;
  title: string;
  problem: string;
  built: string;
  builtLink?: InlineLink;
  outcome: string;
  prs: number[];
  stack: string[];
  screenshot: Screenshot;
  demo?: { href: string; label: string };
};
