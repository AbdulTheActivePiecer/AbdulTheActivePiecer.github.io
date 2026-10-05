function assetUrl(path: string) {
  return `${import.meta.env.BASE_URL}${path}`;
}

function monthsBetween(start: string, end: string) {
  const [startYear, startMonth] = start.split('-').map(Number);
  const [endYear, endMonth] = end.split('-').map(Number);
  return (endYear - startYear) * 12 + (endMonth - startMonth) + 1;
}

function formatDuration(months: number) {
  if (months < 12) return `${months}mo`;
  const years = Math.floor(months / 12);
  const rest = months % 12;
  return rest ? `${years}y ${rest}mo` : `${years}y`;
}

function formatRange(start: string, end: string) {
  return `${start} → ${end}`;
}

function prUrl(pr: number) {
  return `${REPO_URL}/pull/${pr}`;
}

// One PR opens directly; several open the repo's PR list filtered to just
// those numbers (GitHub search matches bare PR numbers).
function prsUrl(prs: number[]) {
  if (prs.length === 1) return prUrl(prs[0]);
  const query = `is:pr ${prs.join(' ')}`;
  return `${REPO_URL}/pulls?q=${encodeURIComponent(query)}`;
}

const REPO_URL = 'https://github.com/activepieces/activepieces';

export {
  assetUrl,
  monthsBetween,
  formatDuration,
  formatRange,
  prUrl,
  prsUrl,
  REPO_URL,
};
