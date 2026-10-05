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

const REPO_URL = 'https://github.com/activepieces/activepieces';

export {
  assetUrl,
  monthsBetween,
  formatDuration,
  formatRange,
  prUrl,
  REPO_URL,
};
