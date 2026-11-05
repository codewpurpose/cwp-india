import { LINKS } from "@/lib/links";

const HERO_STATS = [
  { value: "2,000+", label: "Students Reached" },
  { value: "14+", label: "States & UTs" },
  { value: "50+", label: "Workshops Held" },
  { value: "10+", label: "Cities Active" },
  { value: "₹0", label: "What Students Pay" },
];

export function HeroSection({
  title,
  description,
}: {
  title?: string;
  description?: string;
}) {
  return (
    <section className="overflow-x-clip pt-8 md:pt-[3.69rem]">
      <div className="mx-auto w-full max-w-[85rem] px-5 md:px-10">
        <h1 className="home-display text-center text-[2rem] leading-[1.05] tracking-[-0.02em] md:text-[2.75rem] lg:text-[3.5rem] xl:text-[4rem]">
          {title ?? (
            <>
              India has no shortage of talent.{" "}
              <br className="hidden sm:block" />
              Just of on-ramps.
            </>
          )}
        </h1>
        <p className="mx-auto mt-5 max-w-[44rem] text-center text-base text-[var(--home-ink-soft)] sm:text-lg">
          {description ??
            "CWP India is the India chapter of CodeWithPurpose — students running free coding workshops, hackathons, and school chapters across the country. Taught by students, open to every student, priced at nothing."}
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
          <a href={LINKS.courses} className="home-btn home-btn-fill">
            Explore courses
          </a>
          <a href={LINKS.about} className="home-btn home-btn-outline">
            Our Story
          </a>
        </div>
      </div>

      <div className="home-stats-roadmap mt-10 md:mt-14">
        <svg
          className="home-stats-route home-stats-route-wide"
          viewBox="0 0 1000 200"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            className="home-stats-route-base"
            d="M0 110 C40 78 64 78 100 110 S164 142 200 110 S264 78 300 110 S364 142 400 110 S464 78 500 110 S564 142 600 110 S664 78 700 110 S764 142 800 110 S864 78 900 110 S964 142 1000 110"
          />
          <path
            className="home-stats-route-center"
            d="M0 110 C40 78 64 78 100 110 S164 142 200 110 S264 78 300 110 S364 142 400 110 S464 78 500 110 S564 142 600 110 S664 78 700 110 S764 142 800 110 S864 78 900 110 S964 142 1000 110"
          />
        </svg>
        <svg
          className="home-stats-route home-stats-route-mobile"
          viewBox="0 0 64 500"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            className="home-stats-route-base"
            d="M32 0 C48 20 16 30 32 50 S48 80 32 100 S16 130 32 150 S48 180 32 200 S16 230 32 250 S48 280 32 300 S16 330 32 350 S48 380 32 400 S16 430 32 450 S48 480 32 500"
          />
          <path
            className="home-stats-route-center"
            d="M32 0 C48 20 16 30 32 50 S48 80 32 100 S16 130 32 150 S48 180 32 200 S16 230 32 250 S48 280 32 300 S16 330 32 350 S48 380 32 400 S16 430 32 450 S48 480 32 500"
          />
        </svg>
        <ul className="home-stats-list" aria-label="Impact statistics">
          {HERO_STATS.map((stat) => (
            <li key={stat.label} className="home-stat-stop">
              <div className="home-stat-content">
                <p className="home-stat-value home-serif">{stat.value}</p>
                <p className="home-stat-label">{stat.label}</p>
              </div>
              <span className="home-stat-marker" aria-hidden="true" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
