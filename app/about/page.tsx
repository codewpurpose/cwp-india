import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { PageHero, PageSection } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { FinalCtaSection } from "@/components/home/FinalCtaSection";
import { FaqAccordion } from "@/components/FaqAccordion";
import { getFaqs } from "@/lib/sanity/queries";
import { LINKS } from "@/lib/links";
import { ABOUT_TIMELINE, LEADERSHIP } from "@/lib/data";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "CodeWithPurpose India is the India chapter of a student-run nonprofit teaching real coding skills for free — workshops, chapters, and projects across the country.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Us | CodeWithPurpose India",
    description:
      "Students teaching students, at India's scale. Free workshops, school chapters, and real projects — part of CodeWithPurpose's global community in 150+ countries.",
    type: "website",
  },
};

export default async function AboutPage() {
  const faqs = await getFaqs();

  return (
    <PageShell>
      <PageHero
        title="About CodeWithPurpose India"
        description="We’re the India chapter of CodeWithPurpose, a student-run nonprofit that offers free coding education. We run workshops and help students organise chapters at their schools and colleges."
      >
        <a href={LINKS.chapters} className="home-btn home-btn-fill">
          Join or start a chapter
        </a>
        <a href={LINKS.home} className="text-sm underline underline-offset-4">
          Visit CodeWithPurpose
        </a>
      </PageHero>

      {/* Team — first thing after the hero, mirroring the global about page. */}
      <PageSection id="team">
        <Reveal>
          <div className="mb-8 max-w-2xl md:mb-10">
            <h2 className="home-serif text-[1.75rem] leading-[1.08] md:text-[2.5rem]">
              The CWP India team
            </h2>
            <p className="mt-4 text-lg text-[var(--home-ink-soft)]">
              Our India chapter is led by Manit Mishra, with support from CodeWithPurpose’s co-founders.
            </p>
          </div>
        </Reveal>
        {LEADERSHIP.map((person) => (
          <Reveal key={person.name} delay={80}>
            <div className="home-card flex flex-col gap-8 rounded-[20px] p-6 sm:flex-row sm:items-center md:p-10">
              <div className="relative w-full max-w-[240px] shrink-0 self-center sm:self-start">
                <div
                  aria-hidden="true"
                  className="absolute -inset-2 rotate-[1.4deg] rounded-[20px] border-[0.5px] border-[#cde4cd] bg-[#dbefdb]/60"
                />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={person.photo}
                  alt={`${person.name}, ${person.role}`}
                  loading="lazy"
                  decoding="async"
                  className="home-card relative aspect-square w-full rounded-2xl object-cover"
                />
              </div>
              <div className="min-w-0">
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <h3 className="home-serif text-[1.6rem]">{person.name}</h3>
                  <span className="home-mono text-[0.68rem] tracking-wider uppercase text-[var(--home-ink-quiet)]">
                    {person.role}
                  </span>
                </div>
                <p className="mt-3 max-w-2xl leading-relaxed text-[var(--home-ink-soft)]">
                  {person.bio}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  <a
                    href={person.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="home-chip rounded-full border border-[var(--home-hairline-strong)] bg-[var(--home-white)] px-3.5 py-1.5 text-xs font-medium text-[var(--home-ink-soft)]"
                  >
                    LinkedIn
                  </a>
                  <a
                    href={person.instagram}
                    target="_blank"
                    rel="noreferrer"
                    className="home-chip rounded-full border border-[var(--home-hairline-strong)] bg-[var(--home-white)] px-3.5 py-1.5 text-xs font-medium text-[var(--home-ink-soft)]"
                  >
                    Instagram
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
        <div className="mt-6 rounded-xl border border-[var(--home-hairline)] p-6 md:p-8">
          <h3 className="home-serif text-xl">CodeWithPurpose co-founders</h3>
          <p className="mt-3 text-[var(--home-ink-soft)]">
            Samanyu Goyal, Shreyan Mitra, and Bruhatt Rao are part of the CWP India team.
          </p>
          <a href={LINKS.aboutGlobal} className="home-arrow-link mt-4 inline-block">Meet the global team</a>
        </div>
      </PageSection>

      {/* How we got here — one card, hairline-divided rows, like the main
          site's product grid: no floating card grid. */}
      <PageSection className="pt-0 md:pt-0" id="story">
        <Reveal>
          <div className="mb-8 max-w-2xl md:mb-10">
            <p className="home-eyebrow mb-4">How we got here</p>
            <h2 className="home-serif text-[1.75rem] leading-[1.08] md:text-[2.5rem]">
              From one classroom in California to chapters across India.
            </h2>
          </div>
        </Reveal>
        <Reveal delay={100}>
          <div className="home-card overflow-hidden rounded-[20px]">
            {ABOUT_TIMELINE.map((t, i) => (
              <div
                key={t.title}
                className={`grid gap-2 px-5 py-7 sm:px-6 sm:py-8 md:grid-cols-[10rem_1fr] md:gap-8 md:px-10 md:py-10 ${
                  i > 0
                    ? "border-t-[0.5px] border-t-[var(--home-hairline)]"
                    : ""
                }`}
              >
                <p className="home-mono text-[0.72rem] tracking-wider uppercase text-[var(--home-ink-quiet)] md:pt-1.5">
                  {t.when}
                </p>
                <div>
                  <h3 className="home-serif text-[1.3rem] leading-snug md:text-[1.5rem]">
                    {t.title}
                  </h3>
                  <p className="mt-3 max-w-2xl text-[15px] leading-[1.6] text-[var(--home-ink-soft)] md:text-base">
                    {t.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
        <Reveal delay={160}>
          <a href={LINKS.aboutGlobal} className="home-arrow-link mt-8">
            Meet the full global team on codewithpurpose.org
            <span className="home-arrow">→</span>
          </a>
        </Reveal>
      </PageSection>

      <PageSection className="pt-0 md:pt-0" id="faq">
        <div className="mx-auto max-w-3xl">
          <h2 className="home-serif mb-6 text-3xl">Frequently asked questions</h2>
          <FaqAccordion items={faqs} />
        </div>
      </PageSection>

      <FinalCtaSection />
    </PageShell>
  );
}
