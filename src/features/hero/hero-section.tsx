import { profile } from '@/content/profile';

function HeroSection() {
  return (
    <section id="hero" className="scroll-mt-14 py-12 sm:py-16">
      <h2 className="text-2xl font-semibold tracking-tight">Hero</h2>
      <p className="text-muted-foreground mt-2">
        {profile.name} — {profile.title}
      </p>
    </section>
  );
}

export { HeroSection };
