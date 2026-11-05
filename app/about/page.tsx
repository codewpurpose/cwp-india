import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { PageHero, PageSection } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { FinalCtaSection } from "@/components/home/FinalCtaSection";
import { LINKS } from "@/lib/links";
import { ABOUT_BELIEFS, ABOUT_TIMELINE, LEADERSHIP } from "@/lib/data";

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

export default function AboutPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="About us"
        title={
          <>
            India&apos;s students, teaching
            <br />
            India&apos;s students.
          </>
        }
        description="CWP India is the India chapter of CodeWithPurpose — a student-run nonprofit recognized by the U.S. House of Representatives. We run free workshops, help students open chapters at their schools, and turn beginners into builders."
      >
        <a href={LINKS.join} className="home-btn home-btn-fill">
          Join Us
        </a>
        <a href={LINKS.aboutGlobal} className="home-btn home-btn-outline">
          The Global Story
        </a>
      </PageHero>

      {/* Team — first thing after the hero, mirroring the global about page. */}
      <PageSection id="team">
        <Reveal>
          <div className="mb-8 max-w-2xl md:mb-10">
            <p className="home-eyebrow mb-4">The team</p>
            <h2 className="home-serif text-[1.75rem] leading-[1.08] md:text-[2.5rem]">
              Who runs CWP India.
            </h2>
            <p className="mt-4 text-lg text-[var(--home-ink-soft)]">
              Like everything else here, the India chapter is led by a student.
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
        <Reveal delay={140}>
          <div className="home-card mt-4 flex flex-col items-center gap-4 rounded-[20px] p-6 text-center sm:flex-row sm:justify-between sm:text-left">
            <div>
              <p className="font-medium">Want your photo on this page?</p>
              <p className="mt-1 text-sm text-[var(--home-ink-soft)]">
                Chapter leads, mentors, and organisers all started with one
                message.
              </p>
            </div>
            <a
              href={LINKS.contact}
              className="home-btn home-btn-outline shrink-0"
            >
              Get in Touch
            </a>
          </div>
        </Reveal>
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

      {/* Why India */}
      <PageSection className="pt-0 md:pt-0">
        <Reveal>
          <div className="home-card-accent home-card grid items-center gap-8 rounded-[20px] p-6 sm:p-8 md:grid-cols-[1.1fr_0.9fr] md:p-12">
            <div>
              <p className="home-eyebrow mb-4 text-[var(--home-moss)]">
                Why India, why now
              </p>
              <h2 className="home-serif text-[1.75rem] leading-[1.08] md:text-[2.375rem]">
                The talent was always here. The access wasn&apos;t.
              </h2>
              <p className="mt-4 max-w-lg leading-relaxed text-[var(--home-ink-soft)]">
                India produces more engineering aspirants than any country on
                Earth — yet the first lesson in tech most students get is a
                price tag. Coaching institutes and bootcamps charge lakhs for
                skills a motivated student can pick up for free, given the
                right people around them.
              </p>
              <p className="mt-4 max-w-lg leading-relaxed text-[var(--home-ink-soft)]">
                We&apos;re those people. A workshop in a school classroom, a
                mentor one grade ahead of you, a project you built yourself —
                that&apos;s the whole model, and it works.
              </p>
            </div>
            <div className="flex items-center justify-center">
              <div className="home-card w-full max-w-xs rounded-2xl px-8 py-8 text-center">
                <p className="home-display text-5xl text-[var(--home-moss)] sm:text-6xl">
                  ₹0
                </p>
                <p className="mt-2 text-sm text-[var(--home-ink-quiet)]">
                  What any student ever pays —
                  <br />
                  for any workshop, course, or event
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </PageSection>

      {/* Beliefs — 2×2 hairline-divided grid inside one card, the main site's
          product-section idiom, rather than four separate floating cards. */}
      <PageSection className="pt-0 md:pt-0" id="beliefs">
        <Reveal>
          <div className="home-card overflow-hidden rounded-[20px]">
            <div className="px-5 pt-7 sm:px-6 sm:pt-8 md:px-10 md:pt-12">
              <p className="home-eyebrow mb-4">What we believe</p>
              <h2 className="home-serif text-[1.75rem] leading-[1.08] md:text-[2.375rem]">
                Four rules we don&apos;t bend.
              </h2>
            </div>
            <div className="mt-8 grid border-t border-[var(--home-hairline)] md:mt-10 md:grid-cols-2">
              {ABOUT_BELIEFS.map((b, i) => (
                <div
                  key={b.tag}
                  className={`px-5 py-8 sm:px-6 sm:py-10 md:px-10 md:py-12 ${
                    i % 2 === 0
                      ? "md:border-r-[0.5px] md:border-r-[var(--home-hairline)]"
                      : ""
                  } ${
                    i < 2
                      ? "border-b-[0.5px] border-b-[var(--home-hairline)]"
                      : ""
                  }`}
                >
                  <p className="home-mono text-[0.68rem] tracking-wider uppercase text-[var(--home-ink-quiet)]">
                    {b.tag}
                  </p>
                  <h3 className="home-serif mt-3 text-[1.4rem] leading-snug">
                    {b.title}
                  </h3>
                  <p className="mt-3 max-w-md text-[15px] leading-[1.6] text-[var(--home-ink-soft)]">
                    {b.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </PageSection>

      <FinalCtaSection />
    </PageShell>
  );
}
