const PILLARS = [
  {
    title: "Workshops & Learning",
    description:
      "Beginner-friendly live sessions run by students who were beginners a year ago — small groups, working code on screen, time to ask anything.",
    topics: ["AI/ML", "Maths", "Programming", "Robotics & electronics", "Research / STEM"],
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true">
        <path d="M10 3.5 2.5 7 10 10.5 17.5 7 10 3.5Z" strokeLinejoin="round" />
        <path d="M5.5 9v3c0 1.4 2 2.5 4.5 2.5s4.5-1.1 4.5-2.5V9" />
        <path d="M17.5 7v4.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Events & Challenges",
    description:
      "Weekend builds and competitions where the point isn't winning — it's finishing something on Sunday you couldn't start on Friday.",
    topics: ["Online workshops", "Offline seminars", "Hackathons", "Competitions", "Q&A sessions", "School & college events"],
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M11 2.5 4.5 11H9l-1 6.5L14.5 9H10l1-6.5Z" />
      </svg>
    ),
  },
  {
    title: "Community & Outreach",
    description:
      "We build CWP India communities city by city — connecting schools, colleges, and student groups, and bringing mentors and speakers to them.",
    topics: ["Local chapters", "School & college partners", "Speakers & mentors", "STEM org partnerships"],
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true">
        <circle cx="10" cy="10" r="7.5" />
        <ellipse cx="10" cy="10" rx="3.2" ry="7.5" />
        <path d="M2.5 10h15" />
      </svg>
    ),
  },
  {
    title: "Projects & Proof-of-Work",
    description:
      "Sessions are the start, not the finish. We stick around afterwards and help you turn what you learned into something you can actually show.",
    topics: ["Capstone projects", "Demo days", "Open source", "Portfolio repos"],
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M6.5 6.5 3 10l3.5 3.5" />
        <path d="M13.5 6.5 17 10l-3.5 3.5" />
        <path d="M11.5 4.5l-3 11" />
      </svg>
    ),
  },
];

export function CoreFocusSection() {
  return (
    <div id="focus" className="scroll-mt-24">
      <section>
        <div className="mx-auto w-full max-w-[85rem] px-5 md:px-10">
          <div className="home-card overflow-hidden rounded-[20px]">
            <div className="px-5 pt-7 sm:px-6 sm:pt-8 md:px-10 md:pt-12">
              <p className="home-eyebrow mb-4">Core focus</p>
              <h2 className="home-serif text-[1.75rem] leading-[1.08] md:text-[2.375rem]">
                Four things, done properly.
              </h2>
              <p className="mt-4 max-w-2xl text-[15px] leading-[1.6] text-[var(--home-ink-soft)] md:text-base">
                Everything CWP India runs falls into one of these four — from
                your first workshop to the project you demo at the end.
              </p>
            </div>
            <div className="mt-8 grid border-t border-[var(--home-hairline)] md:mt-10 md:grid-cols-2">
              {PILLARS.map((p, i) => (
                <div
                  key={p.title}
                  className={`px-5 py-8 sm:px-6 sm:py-10 md:px-10 md:py-12 ${
                    i % 2 === 0
                      ? "md:border-r-[0.5px] md:border-r-[var(--home-hairline)]"
                      : ""
                  } ${
                    i < 2
                      ? "border-b-[0.5px] border-b-[var(--home-hairline)]"
                      : "max-md:border-b-[0.5px] max-md:border-b-[var(--home-hairline)] last:max-md:border-b-0"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[var(--home-pistachio)] text-[var(--home-moss)]">
                      {p.icon}
                    </span>
                    <h3 className="text-lg md:text-xl">{p.title}</h3>
                  </div>
                  <p className="mt-4 max-w-md text-[15px] leading-[1.6] text-[var(--home-ink-soft)]">
                    {p.description}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {p.topics.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-[var(--home-hairline-strong)] bg-[var(--home-white)] px-3 py-1 text-xs text-[var(--home-ink-quiet)]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
