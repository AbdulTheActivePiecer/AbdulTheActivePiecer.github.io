import { LinkedText } from '@/components/custom/linked-text';
import { Reveal } from '@/components/custom/reveal';
import { SectionHeading } from '@/components/custom/section-heading';
import { about, traits } from '@/content/profile';

function AboutSection() {
  return (
    <section id="about" className="scroll-mt-16 pt-16 md:pt-20">
      <SectionHeading label="About" title="The kind of engineer I am" />
      <Reveal className="grid gap-5">
        <div className="grid max-w-[68ch] gap-3 text-lg leading-relaxed text-pretty">
          {about.map((paragraph) => (
            <p key={paragraph.text.slice(0, 24)}>
              <LinkedText text={paragraph.text} link={paragraph.link} />
            </p>
          ))}
        </div>
        <ul className="grid gap-2.5 sm:grid-cols-3">
          {traits.map((trait) => (
            <li
              key={trait.title}
              className="border-brand grid min-w-0 gap-0.5 border-l-2 py-1 pl-3"
            >
              <b className="text-base">{trait.title}</b>
              <span className="text-muted-foreground text-sm">
                {trait.detail}
              </span>
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}

export { AboutSection };
