const sideQuests: SideQuest[] = [
  {
    title: 'White-labelling Activepieces',
    date: '2023-10',
    description:
      'Companies that offer Activepieces to their own customers can set their branding, email server, terms and default language.',
    prs: [3010, 3136, 3184],
  },
  {
    title: "Long dropdowns that don't freeze the browser",
    date: '2023-12',
    description:
      'Dropdowns that load thousands of options from a connected app no longer freeze the page, thanks to virtualization.',
    prs: [3395],
  },
  {
    title: 'Navigation between project and platform dashboards',
    date: '2024-01',
    description:
      'One-click switching between projects and the platform dashboards, plus quick actions on the flows list and past runs inside the editor.',
    prs: [3726, 3746, 3773],
  },
  {
    title: "Rebuilding every step's settings form",
    date: '2024-03',
    description:
      'Rewrote the code that draws the settings form for every step, a 142-file change that gave all integrations a cleaner, more reliable form.',
    prs: [4205],
  },
  {
    title: 'Code copilot, an early AI experiment',
    date: '2024-12',
    description:
      'An assistant that writes the code for a code step from a plain-English request, with telemetry on how well its code worked.',
    prs: [6061],
  },
  {
    title: 'More control for SaaS products that embed Activepieces',
    date: '2025-04',
    description:
      'SaaS products that embed Activepieces can call its API through the SDK and set the language, theme, navigation and header.',
    prs: [7405, 7794, 7803],
  },
  {
    title: 'Faster platform analytics',
    date: '2025-07',
    description:
      'Helped revamp platform-wide usage analytics into a saved report that refreshes in the background and shows the last results while new ones load.',
    prs: [8378],
  },
  {
    title: 'Sticky notes on flows',
    date: '2026-01',
    description:
      'Teams can leave sticky notes on a flow to document it, built on a reworked editor state that is easier to extend.',
    prs: [10709, 10779, 10806],
  },
  {
    title: 'AI-assisted engineering setup',
    date: '2026-03',
    description:
      "Set up the team's AI coding workflow: one AGENTS.md for Claude and Cursor rules and skills, a pre-push lint and test gate, and a skill that flags duplicate features before they get built.",
    prs: [12100, 12113, 12564],
  },
  {
    title: 'Safe piece upgrades',
    date: '2026-04',
    description:
      'Each step keeps the exact piece version it was added with, and users can upgrade or downgrade it from the step settings. A piece is an integration with a third-party app like Gmail or Airtable.',
    prs: [12214],
  },
  {
    title: 'One-click flows for platform events',
    date: '2026-05',
    description:
      'Generates a webhook flow that listens to the platform events an admin picks, so they can stream their audit logs anywhere.',
    prs: [13105, 13203, 13204],
  },
  {
    title: 'Telemetry you can switch off',
    date: '2026-09',
    description:
      'Turned telemetry from a server-wide switch into a per-company setting on a new Configurations page, built to hold more settings later, with a safe upgrade path and a list of every tracked event.',
    prs: [15159, 15170, 15187],
  },
  {
    title: 'Required actions in piece sets',
    date: '2026-09',
    description:
      'Piece sets decide which integrations a project can use. I added required actions that every flow must include before it can publish, enforced on every publish path, and reworked the piece sets admin around them.',
    prs: [15952, 15953, 15954],
  },
];

export { sideQuests };
export type SideQuest = {
  title: string;
  date: string;
  description: string;
  prs: number[];
};
