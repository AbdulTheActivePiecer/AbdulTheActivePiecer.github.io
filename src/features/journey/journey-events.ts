function selectJourneyStep(index: number) {
  window.dispatchEvent(
    new CustomEvent(JOURNEY_SELECT_EVENT, { detail: index }),
  );
}

const JOURNEY_SELECT_EVENT = 'journey:select';

export { selectJourneyStep, JOURNEY_SELECT_EVENT };
