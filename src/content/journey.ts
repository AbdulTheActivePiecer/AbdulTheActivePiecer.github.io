const eras: Era[] = [
  {
    id: 1,
    title: 'Day One: Founding the Builder',
    summary:
      'On the team from day one, before Activepieces went open source, and author of PR #1: the first flow builder frontend.',
    start: '2022-07',
    end: '2023-03',
    prs: 61,
    screenshot: {
      src: 'shots/data-selector-v3.webp',
      alt: 'The data selector with real sample data from a webhook',
      width: 1600,
      height: 1200,
    },
    milestones: [
      {
        date: '2022-12',
        title: 'The first flow builder',
        story:
          "Activepieces needed a visual editor from day one. I brought in the Angular frontend that became the first flow builder, stripped out what didn't fit, and wired it to the new integrations model. It was the first PR in the repo and the base for every builder screen that followed.",
        prs: [1, 31],
      },
      {
        date: '2022-12',
        title: 'The first integrations',
        story:
          'Integrations (called pieces) are how Activepieces talks to other apps. I rewrote Gmail, Google Sheets and HubSpot for the new integration framework, then added Mailchimp, Drip, Calendly, Airtable, WordPress and Intercom. They became early examples other integrations were modelled on.',
        prs: [69],
      },
      {
        date: '2023-01',
        title: 'Mapping data between steps',
        story:
          "The heart of any automation is passing data from one step to the next. I built inline autocomplete so you can reference an earlier step's output while typing, plus inputs that accept lists.",
        prs: [340, 345, 445, 654],
      },
      {
        date: '2023-02',
        title: 'Smarter step inputs',
        story:
          'I built the frontend for OAuth2 connections ("Connect your Google account"), dropdowns that load their options live from the connected app, and single and multi-select inputs. Step forms stopped being plain text boxes.',
        prs: [571, 636, 657, 696],
      },
    ],
  },
  {
    id: 2,
    title: 'Testing, Drag and Drop & Versioned Flows',
    summary:
      'Made the builder feel alive: step testing, drag and drop, draft and published versions, templates.',
    start: '2023-04',
    end: '2023-09',
    prs: 124,
    milestones: [
      {
        date: '2023-04',
        title: 'Testing while you build',
        story:
          'You can test a trigger or a single step right in the builder and get real sample data back. Later steps map against that data, so you build on real payloads instead of guessing their shape.',
        prs: [982, 1061],
      },
      {
        date: '2023-05',
        title: 'Drag and drop steps',
        story:
          'Rearranging a flow used to mean deleting and recreating steps. Now you pick a step up, drop it somewhere else on the canvas, and the flow reconnects around it.',
        prs: [1307],
      },
      {
        date: '2023-05',
        title: 'Drafts and published versions',
        story:
          'Editing a live automation is risky. The builder now keeps a draft separate from the published version, so you can change things safely, see what is live, and switch between versions.',
        prs: [1390],
      },
      {
        date: '2023-06',
        title: 'Templates and import',
        story:
          'A template gallery and flow import, so new users start from a working flow instead of an empty canvas, and teams can move flows between projects.',
        prs: [1431, 1448, 2503],
      },
    ],
  },
  {
    id: 3,
    title: 'White-labelling Activepieces & Embedding',
    summary:
      'Built the tools for businesses: white-label platforms, embedding the editor in other apps, and a public SDK.',
    start: '2023-10',
    end: '2024-06',
    prs: 222,
    milestones: [
      {
        date: '2023-11',
        title: 'Embedding the builder',
        story:
          'SaaS companies wanted to offer automations inside their own product. I built iframe embedding secured with JWT signing keys, plus the embedded client, so a host app can drop the builder in and sign its users in automatically.',
        prs: [3085, 3063, 3361],
      },
      {
        date: '2023-11',
        title: 'Bring your own OAuth apps',
        story:
          "Platform owners can plug in their own OAuth2 apps, so their customers see the platform's brand on Google's consent screen. They also choose which integrations their users can see.",
        prs: [3171, 3152, 3401],
      },
      {
        date: '2024-03',
        title: 'The embed SDK',
        story:
          'A public JavaScript SDK for embedders: open the connections dialog from the host app, hide folders, and control navigation, without reaching into the iframe.',
        prs: [4115, 4122, 4140, 4500],
      },
    ],
  },
  {
    id: 4,
    title: 'The React Rewrite',
    summary:
      'Top contributor to the Angular to React rewrite, then shipped branching and multi-step copy and paste in the new editor.',
    start: '2024-07',
    end: '2024-12',
    prs: 180,
    screenshot: {
      src: 'shots/router-loop-v4.webp',
      alt: 'A Router with three branches, one of them a loop',
      width: 1600,
      height: 1200,
    },
    milestones: [
      {
        date: '2024-09',
        title: 'Permissions across the UI',
        story:
          'Role-based access control in the React app. Pages, buttons and actions adapt to what each member is allowed to do, so viewers, editors and admins each get the right product.',
        prs: [5464, 5024],
      },
      {
        date: '2024-09',
        title: 'One place for AI keys',
        story:
          'Platform admins set up OpenAI, Anthropic and other providers once, and every AI step uses them. No more pasting API keys into each step.',
        prs: [5673],
      },
      {
        date: '2024-11',
        title: 'The Router',
        story:
          'Branching used to be a single if/else. The Router splits a flow into any number of branches, each with its own conditions, plus a fallback. I built it end to end: the editor, the execution logic and the settings.',
        prs: [5955],
      },
      {
        date: '2024-12',
        title: 'Copy, paste and the step context menu',
        story:
          'Select one or more steps and copy them, paste them somewhere else in the flow, or delete them in one go. A right-click context menu on the canvas puts these actions next to the steps, so editing big flows feels like a design tool instead of a form.',
        prs: [6245, 6315],
      },
    ],
  },
  {
    id: 5,
    title: 'Google Sheets-like Tables & Going Multilingual',
    summary:
      'Shipped built-in spreadsheet-style tables, a new step picker, and translations for every integration.',
    start: '2025-01',
    end: '2025-11',
    prs: 368,
    screenshot: {
      src: 'shots/step-picker-43.webp',
      alt: 'The tabbed step picker',
      width: 1200,
      height: 900,
    },
    milestones: [
      {
        date: '2025-01',
        title: 'Move steps anywhere',
        story:
          'Steps can be dragged anywhere on the canvas, with branches and connections following along.',
        prs: [6531, 6514],
      },
      {
        date: '2025-04',
        title: 'Google Sheets-like tables',
        story:
          'Activepieces has its own spreadsheet-style table editor built in: rows, typed columns and a grid that flows can read from and write to. I worked on dropdown fields, row limits and CSV import.',
        prs: [7142, 7144, 7224, 7327],
      },
      {
        date: '2025-05',
        title: 'Testing webhooks properly',
        story:
          'Testing a webhook trigger now waits for the next real request and uses it as sample data. It closed long-standing community issues.',
        prs: [7544],
      },
      {
        date: '2025-07',
        title: 'A new step picker',
        story:
          'With hundreds of integrations, finding the right step had become hard. I redesigned the step picker with tabs for Explore, AI and Apps, plus curated suggestions.',
        prs: [8191, 8312, 8317, 8364],
      },
      {
        date: '2025-07',
        title: 'Every integration in every language',
        story:
          "I designed the translation pipeline: every integration became translatable, synced through Crowdin and split up so it scales. It's also why most of my raw commit count is translation syncs.",
        prs: [8462],
      },
    ],
  },
  {
    id: 6,
    title: 'A Redesigned Editor & Error Handling',
    summary:
      'Redesigned the editor: new visuals, a clearer run view, success and failure paths for steps, and a left-to-right layout.',
    start: '2025-12',
    end: '2026-06',
    prs: 263,
    screenshot: {
      src: 'shots/error-handler-v4.webp',
      alt: 'An error handler: Success and Failure branches, with a Slack alert on failure',
      width: 1600,
      height: 1200,
    },
    milestones: [
      {
        date: '2025-12',
        title: 'More than one way to connect',
        story:
          'Integrations can offer several ways to sign in, for example Google Sheets through a Google account or a service account. Supporting it meant reworking the shared integration framework and migrating every integration to it.',
        prs: [10012, 10307, 10308, 10330],
      },
      {
        date: '2025-12',
        title: 'A redesigned editor',
        story:
          'A redesign of the builder: new canvas visuals, a run view that shows what happened at every step, a clearer publish flow, and a minimap for large flows.',
        prs: [10495, 10596, 10637, 10636],
      },
      {
        date: '2026-01',
        title: "The editor's toolbox",
        story:
          'The tools you reach for while building, most of which I built: the canvas toolbar with zoom, fit to view, and switching between moving the canvas and selecting steps, a minimap to find your way around big flows, sticky notes to document a flow, a left-to-right layout toggle, and exporting a flow as an image.',
        prs: [10678, 10779, 11191, 13661, 13688],
      },
      {
        date: '2026-06',
        title: 'Error branches and a horizontal canvas',
        story:
          'Steps can now have on-success and on-failure paths, so a failed API call can alert someone instead of stopping the whole flow. I also added a left-to-right layout and exporting a flow as an image.',
        prs: [13074, 13661, 13688],
      },
    ],
  },
  {
    id: 7,
    title: 'Billing & Pay-As-You-Go AI',
    summary:
      'Moved billing to Autumn and made AI steps charge what they actually cost.',
    start: '2026-07',
    end: '2026-09',
    prs: 35,
    screenshot: {
      src: 'shots/billing-v4.webp',
      alt: 'Plan and credit usage on the billing page',
      width: 1600,
      height: 1200,
    },
    milestones: [
      {
        date: '2026-08',
        title: 'Billing on Autumn',
        story:
          "I moved billing from hand-built license-key and Stripe logic to Autumn, a billing platform. Each customer's plan and limits now come from one place, so the same billing model serves Cloud and self-hosted customers.",
        prs: [14436],
      },
      {
        date: '2026-08',
        title: 'Credits and trials',
        story:
          'Customers see a warning in the dashboard before their credits run out, and trials can be activated from a link, without an engineer in the loop.',
        prs: [14729, 14918, 15101],
      },
      {
        date: '2026-09',
        title: 'AI billed on real cost',
        story:
          'AI steps (Ask AI, Summarize, Classify, Extract, Generate Image) now record what every call really costs, so customers pay for what they actually use. Shipped as a stack of small PRs.',
        prs: [15488, 15489, 15491, 15492],
      },
    ],
  },
];

const beforeRoles: BeforeRole[] = [
  {
    start: '2021-01',
    end: '2022-07',
    role: 'Web & Game Developer',
    company: 'Babil Games',
    description:
      "Maintained and built the company's websites, wrote Unreal Engine 4 tools for the art team, prototyped multiplayer games in C++ and Blueprints, and built integrations and browser extensions that other teams relied on.",
  },
  {
    start: '2018-07',
    end: '2019-09',
    role: 'Junior Software Engineer',
    company: 'Sky Software',
    description:
      "Full-stack work on QMS, Sky's hotel management product: an Angular single-page app on a .NET REST API. I also streamlined how the product was packaged and deployed with Advanced Installer.",
  },
];

const beforeSummary =
  'Four years across hotel software and games, with Angular since 2018. That is how I could ship the first flow builder on day one.';

export { eras, beforeRoles, beforeSummary };
export type Screenshot = {
  src: string;
  alt: string;
  width: number;
  height: number;
};
export type Milestone = {
  date: string;
  title: string;
  story: string;
  prs: number[];
};
export type Era = {
  id: number;
  title: string;
  summary: string;
  start: string;
  end: string;
  prs: number;
  screenshot?: Screenshot;
  milestones: Milestone[];
};
export type BeforeRole = {
  start: string;
  end: string;
  role: string;
  company: string;
  description: string;
};
