import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { PageHero, PageSection } from "@/components/PageHero";
import { WorkshopCard } from "@/components/WorkshopCard";
import { Reveal } from "@/components/Reveal";
import { getSiteContent, getWorkshopSchedule } from "@/lib/sanity/queries";
import { inquiryHref } from "@/lib/inquiries";
import { LINKS } from "@/lib/links";

export const metadata: Metadata = {
  alternates: { canonical: "/workshops" },
  title: "Events",
  description:
    "Free coding workshops and community events run by CodeWithPurpose India chapters across the country.",
};

export default async function WorkshopsPage() {
  const [schedule, content] = await Promise.all([
    getWorkshopSchedule(),
    getSiteContent(),
  ]);
  const { upcoming, past } = schedule ?? { upcoming: [], past: [] };

  return (
    <PageShell>
      <PageHero
        eyebrow={content?.workshopsEyebrow ?? "Workshops & events"}
        title={content?.workshopsTitle ?? "Learn by building, together."}
        description={
          content?.workshopsDescription ??
          "Find free online and in-person coding workshops from CodeWithPurpose India."
        }
      >
        <a href={inquiryHref("host")} className="home-btn home-btn-outline">
          Host a workshop
        </a>
      </PageHero>

      <PageSection>
        <Reveal>
          <h2 className="home-serif text-xl md:text-2xl">Upcoming events</h2>
        </Reveal>
        {upcoming.length > 0 ? (
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {upcoming.map((workshop) => (
              <WorkshopCard key={workshop._id} workshop={workshop} upcoming />
            ))}
          </div>
        ) : (
          <div className="home-card home-card-accent mt-6 rounded-2xl p-7">
            <p className="text-sm leading-[1.6] text-[var(--home-ink-soft)]">
              {schedule === null
                ? "The event calendar is currently unavailable. Contact us to ask about upcoming workshops."
                : "There are no upcoming events listed. You can still take a free course or ask about hosting a workshop."}
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <a href={LINKS.contact} className="home-btn home-btn-outline">
                Ask about events
              </a>
              <a href={LINKS.courses} className="home-btn home-btn-outline">
                Explore free courses
              </a>
            </div>
          </div>
        )}
      </PageSection>

      {past.length > 0 && (
        <PageSection className="pt-0 md:pt-0">
          <Reveal>
            <h2 className="home-serif text-xl md:text-2xl">Past events</h2>
          </Reveal>
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {past.map((workshop) => (
              <WorkshopCard key={workshop._id} workshop={workshop} />
            ))}
          </div>
        </PageSection>
      )}
    </PageShell>
  );
}
