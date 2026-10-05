// Renders copy with an optional inline link at the `{link}` placeholder.
function LinkedText({ text, link }: LinkedTextProps) {
  if (!link) return text;
  const [before, after] = text.split('{link}');
  return (
    <>
      {before}
      <a
        href={link.href}
        target="_blank"
        rel="noopener"
        className="text-brand underline underline-offset-4"
      >
        {link.label}
      </a>
      {after}
    </>
  );
}

export { LinkedText };
export type InlineLink = { label: string; href: string };
type LinkedTextProps = { text: string; link?: InlineLink };
