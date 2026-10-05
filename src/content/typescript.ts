const typescriptPoints: TypescriptPoint[] = [
  {
    title: 'Full stack',
    detail:
      'React in the browser, Fastify APIs on Node.js, and the runtime that executes every automation',
  },
  {
    title: 'Typed contracts',
    detail:
      'API request schemas shared by frontend and backend (Zod), so a breaking change fails the build, not production',
  },
  {
    title: 'Predictable editor state',
    detail:
      "I designed the editor's state layer: typed stores for the flow being edited, live test runs, selection and notes, so a change made in one place shows up everywhere at once",
  },
  {
    title: 'Types that model the product',
    detail:
      'Every shape on the editor (steps, loops, branches, error paths) is its own typed variant, so the compiler checks the layout logic before anyone sees it',
  },
];

const typescriptStack = [
  'TypeScript',
  'React',
  'Zustand',
  'TanStack Query',
  'Fastify',
  'Zod',
  'Node.js',
];

// Verbatim from packages/web/src/app/builder/flow-canvas/utils/flow-canvas-utils.ts
const codeSample: CodeSample = {
  file: 'builder/flow-canvas/utils/flow-canvas-utils.ts',
  note: 'verbatim excerpt',
  code: `const buildFlowGraph: (params: {
  step: FlowAction | FlowTrigger | undefined;
  orientation: CanvasOrientation;
}) => ApGraph = ({ step, orientation }) => {
  if (isNil(step)) {
    return {
      nodes: [],
      edges: [],
    };
  }
  const layout = getLayout(orientation);
  const graph: ApGraph = createStepGraph({
    step,
    graphAlongSize: layout.stepAlongSize + layout.spaceAlongBetweenSteps,
    orientation,
  });
  const childGraph =
    step.type === FlowActionType.LOOP_ON_ITEMS
      ? buildLoopChildGraph({ step, orientation })
      : step.type === FlowActionType.ROUTER
      ? buildRouterChildGraph({ step, orientation })
      : sharedFlowCanvasUtils.hasContinueOnFailureBranches(step)
      ? buildContinueOnFailureBranchesGraph({ step, orientation })
      : null;

  const graphWithChild = childGraph ? mergeGraph(graph, childGraph) : graph;
  const nextStepGraph = buildFlowGraph({
    step: step.nextAction,
    orientation,
  });
  return mergeGraph(
    graphWithChild,
    offsetGraph(nextStepGraph, {
      x: 0,
      y: calculateGraphBoundingBox({ graph: graphWithChild, orientation })
        .height,
    }),
  );
};`,
};

export { typescriptPoints, typescriptStack, codeSample };
export type TypescriptPoint = { title: string; detail: string };
export type CodeSample = { file: string; note: string; code: string };
