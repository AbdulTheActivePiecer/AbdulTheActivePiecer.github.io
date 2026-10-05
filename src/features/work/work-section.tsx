import { SectionHeading } from '@/components/custom/section-heading';
import { caseStudies } from '@/content/work';

import { CaseCard } from './case-card';

function WorkSection() {
  return (
    <section id="work" className="scroll-mt-16 pt-16 md:pt-20">
      <SectionHeading
        label="My major work at Activepieces"
        title="Three things I'd walk you through"
      />
      <div className="grid gap-4">
        {caseStudies.map((study) => (
          <CaseCard key={study.title} study={study} />
        ))}
      </div>
    </section>
  );
}

export { WorkSection };
