import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { PageHero } from "@/components/PageHero";
import { FaqAccordion } from "@/components/FaqAccordion";
import { LINKS } from "@/lib/links";
import { getFaqs } from "@/lib/sanity/queries";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Frequently asked questions about CodeWithPurpose India — free workshops, events, chapters, and projects.",
};

export default async function FaqPage() {
  const faqs = await getFaqs();
  return (
    <PageShell>
      <PageHero
        eyebrow="FAQ"
        title="Questions students ask us."
        description="Everything about workshops, chapters, courses, and how the free-forever promise actually works."
      >
        <a href={LINKS.contact} className="home-btn home-btn-fill">
          Ask us anything
        </a>
      </PageHero>

      {/* pb matches the landing's final-CTA spacing so the accordion never
          sits flush against the footer. */}
      <section className="mx-auto w-full max-w-[85rem] px-5 pb-16 pt-12 md:px-10 md:pb-32 md:pt-20">
        <div className="mx-auto max-w-[51rem]">
          <FaqAccordion items={faqs} />
        </div>
      </section>
    </PageShell>
  );
}
