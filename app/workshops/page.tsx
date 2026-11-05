import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { PageHero, PageSection } from "@/components/PageHero";
import { WorkshopCard } from "@/components/WorkshopCard";
import { Reveal } from "@/components/Reveal";
import { getSiteContent, getWorkshops } from "@/lib/sanity/queries";
import { LINKS } from "@/lib/links";

export const metadata: Metadata = {
  title: "Workshops",
  description:
    "Free coding workshops and community events run by CodeWithPurpose India chapters across the country.",
};

export default async function WorkshopsPage() {
  const [workshops, content] = await Promise.all([
    getWorkshops(),
    getSiteContent(),
  ]);

  const upcoming = workshops.filter((w) => w.status === "upcoming");
  const past = workshops.filter((w) => w.status === "past");

  return (
    <PageShell>
      <PageHero
        eyebrow={content?.workshopsEyebrow ?? "Workshops & events"}
        title={content?.workshopsTitle ?? "Learn by building, together."}
        description={
          content?.workshopsDescription ??
          "Free, hands-on workshops run by our student chapters across India. Pick a city, show up, and write your first lines of code with us."
        }
      />

      <PageSection>
        <Reveal>
          <h2 className="home-serif text-xl md:text-2xl">Upcoming</h2>
        </Reveal>
        {upcoming.length > 0 ? (
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {upcoming.map((w) => (
              <WorkshopCard key={w._id} workshop={w} />
            ))}
          </div>
        ) : (
          <div className="home-card home-card-accent mt-6 rounded-2xl p-7">
            <p className="text-sm leading-[1.6] text-[var(--home-ink-soft)]">
              No upcoming workshops right now — new ones are announced on our
              socials. Want to host one in your city?
            </p>
            <a href={LINKS.contact} className="home-arrow-link mt-4 inline-flex">
              Get in touch <span className="home-arrow">→</span>
            </a>
          </div>
        )}
      </PageSection>

      {past.length > 0 && (
        <PageSection className="pt-0 md:pt-0">
          <Reveal>
            <h2 className="home-serif text-xl md:text-2xl">Past events</h2>
          </Reveal>
          <div className="mt-6 grid gap-5 opacity-75 sm:grid-cols-2 lg:grid-cols-3">
            {past.map((w) => (
              <WorkshopCard key={w._id} workshop={w} />
            ))}
          </div>
        </PageSection>
      )}
    </PageShell>
  );
}
