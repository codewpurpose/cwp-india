"use client";

import { Fragment, useState, type ReactNode } from "react";
import { LINKS } from "@/lib/links";

interface ImpactDetail {
  title: string;
  body: string;
  scenario: string;
}

interface ImpactItem {
  label: string;
  icon: ReactNode;
  detail: ImpactDetail;
}

const items: ImpactItem[] = [
  {
    label: "Nothing behind a paywall",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true">
        <path d="M2 10c0-1.6 1.4-2.8 3.2-2.8 3 0 6.6 5.6 9.6 5.6 1.8 0 3.2-1.2 3.2-2.8s-1.4-2.8-3.2-2.8c-3 0-6.6 5.6-9.6 5.6C3.4 12.8 2 11.6 2 10Z" strokeLinejoin="round" />
      </svg>
    ),
    detail: {
      title: "Free means free",
      body: "Every workshop, course, and resource costs nothing — not on the global platform, not at any India chapter. No trial that expires, no certificate locked behind a payment.",
      scenario:
        "A student in Patna opens the Python course on a borrowed laptop. She never sees a card form or a paywall — just lesson one.",
    },
  },
  {
    label: "Students teach students",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true">
        <path d="M10 3.5 2.5 7 10 10.5 17.5 7 10 3.5Z" strokeLinejoin="round" />
        <path d="M5.5 9v3c0 1.4 2 2.5 4.5 2.5s4.5-1.1 4.5-2.5V9" />
        <path d="M17.5 7v4.5" strokeLinecap="round" />
      </svg>
    ),
    detail: {
      title: "Taught by someone one grade ahead",
      body: "CWP India is run by students, not a company. The person explaining loops to you finished learning them last year — probably in a classroom like yours.",
      scenario:
        "A workshop in a Jaipur school, led by a class 12 student who attended the same workshop as a beginner the year before.",
    },
  },
  {
    label: "Chapters across India",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true">
        <circle cx="10" cy="10" r="7.5" />
        <ellipse cx="10" cy="10" rx="3.2" ry="7.5" />
        <path d="M2.5 10h15" />
      </svg>
    ),
    detail: {
      title: "Students in 14+ states",
      body: "From Bengaluru to Guwahati, chapters meet in classrooms, libraries, and online — wherever students can gather. A chapter is usually 5–15 students and one teacher who says yes.",
      scenario:
        "2,000+ students across 10+ cities have learned with us. Every new city started with one student who asked.",
    },
  },
  {
    label: "Recognized worldwide",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" aria-hidden="true">
        <path d="M10 3 3 7.5h14L10 3Z" />
        <path d="M5 10v4.5M8.33 10v4.5M11.67 10v4.5M15 10v4.5" strokeLinecap="round" />
        <path d="M3 17h14" strokeLinecap="round" />
      </svg>
    ),
    detail: {
      title: "Backed by a global nonprofit",
      body: "CodeWithPurpose — the organization CWP India chapters belong to — was recognized by the U.S. House of Representatives in 2026 for leadership and service to students in 150+ countries.",
      scenario:
        "When a school principal asks who is behind the workshop, there is a real, internationally recognized nonprofit standing behind it.",
    },
  },
  {
    label: "Proof of work, not attendance",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M6.5 6.5 3 10l3.5 3.5" />
        <path d="M13.5 6.5 17 10l-3.5 3.5" />
        <path d="M11.5 4.5l-3 11" />
      </svg>
    ),
    detail: {
      title: "You leave with something built",
      body: "Sessions are the start, not the finish. Every track ends in a deployed site, a trained model, or a repo with your name on it — the kind of thing that goes in a college application or an internship email.",
      scenario:
        "A student who had never written code in September demos her own quiz app at the chapter's demo day in March.",
    },
  },
  {
    label: "Volunteer-powered",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" aria-hidden="true">
        <path d="M10 16.5s-6.5-3.8-6.5-8.2C3.5 5.9 5.4 4.5 7.3 4.5c1.1 0 2.1.5 2.7 1.4.6-.9 1.6-1.4 2.7-1.4 1.9 0 3.8 1.4 3.8 3.8 0 4.4-6.5 8.2-6.5 8.2Z" />
      </svg>
    ),
    detail: {
      title: "Mentors who sit next to you",
      body: "Our volunteers don't lecture from a podium. They read your error message with you, troubleshoot beside you, and celebrate when it finally runs.",
      scenario:
        "A mentor pulls up a chair next to a stuck student in a Chennai workshop. Ten minutes later the program runs — and the room hears about it.",
    },
  },
  {
    label: "India, globally connected",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" aria-hidden="true">
        <path d="M3 3.5h9V9H7.5L5 11.5V9H3V3.5Z" />
        <path d="M17 16.5H8V11h4.5L15 8.5V11h2v5.5Z" />
      </svg>
    ),
    detail: {
      title: "One chapter of 150+ countries",
      body: "Every CWP India member joins the global CodeWithPurpose community — shared courses, events, and a Discord full of students learning the same things on every continent.",
      scenario:
        "A chapter lead in Indore swaps curriculum notes with an instructor in California. Same lessons, same mission, same price: nothing.",
    },
  },
];

function DetailContent({ detail }: { detail: ImpactDetail }) {
  return (
    <>
      <h4 className="pr-8 text-lg leading-[1.2] md:text-xl">{detail.title}</h4>
      <p className="mt-4 text-[15px] leading-[1.55] text-[var(--home-ink-soft)]">
        {detail.body}
      </p>
      <div className="mt-5 border-t-[0.5px] border-[var(--home-hairline)] pt-4">
        <p className="text-[11px] font-medium uppercase tracking-[0.12em] text-[var(--home-ink-quiet)]">
          In the field
        </p>
        <p className="mt-2 text-[14px] leading-[1.55] text-[#15120c]">
          {detail.scenario}
        </p>
      </div>
    </>
  );
}

export function ImpactSection() {
  const [open, setOpen] = useState<number | null>(null);
  const [lastIndex, setLastIndex] = useState(0);
  const activeDetail = items[lastIndex].detail;

  return (
    <div id="impact" className="mt-16 scroll-mt-28 md:mt-44 md:scroll-mt-24">
      <div className="mx-auto w-full max-w-[85rem] px-5 md:px-10">
        <div className="relative flex overflow-hidden rounded-[20px] md:min-h-[760px] md:rounded-[24px]">
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(120% 90% at 18% 22%, #2c4636 0%, transparent 55%), radial-gradient(110% 80% at 85% 75%, #20303f 0%, transparent 60%), radial-gradient(70% 60% at 60% 35%, #3a3128 0%, transparent 65%), #11161c",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/15 to-black/30" />
          <div className="relative z-[1] flex w-full flex-col justify-between gap-8 p-5 sm:gap-10 sm:p-7 md:flex-row md:p-[46px]">
            <h3 className="home-serif text-[1.75rem] leading-[1.05] text-white md:text-[2.75rem]">
              What we
              <br />
              stand for
            </h3>
            <div className="flex min-w-0 w-full flex-col md:w-auto md:flex-row md:self-stretch">
              <div className="flex min-w-0 w-full flex-col rounded-xl bg-white/95 p-2 backdrop-blur-[10px] md:w-[452px] md:max-w-none">
                {items.map((item, index) => (
                  <Fragment key={item.label}>
                    <button
                      type="button"
                      onClick={() => {
                        if (open === index) {
                          setOpen(null);
                        } else {
                          setLastIndex(index);
                          setOpen(index);
                        }
                      }}
                      aria-expanded={open === index}
                      aria-controls={`impact-detail impact-detail-${index}`}
                      className={[
                        "home-template-row group flex min-h-12 flex-1 items-center gap-3 border-t-[0.5px] border-[var(--home-hairline)] px-3 py-3.5 text-left first:border-t-0 sm:px-4 sm:py-4",
                        open === index ? "rounded-lg bg-[#f3f3f1]" : "",
                      ].join(" ")}
                    >
                      <span className="shrink-0 text-[#15120c]">
                        {item.icon}
                      </span>
                      <span className="min-w-0 flex-1 text-[15px] leading-snug">{item.label}</span>
                      <span className="home-row-arrow shrink-0 text-[#397554]">→</span>
                    </button>
                    <div
                      id={`impact-detail-${index}`}
                      className={[
                        "home-detail min-[1200px]:hidden",
                        open === index ? "home-detail-open" : "",
                      ].join(" ")}
                      aria-hidden={open !== index}
                    >
                      <div className="home-detail-inner">
                        <div className="rounded-lg bg-[#f3f3f1] px-4 py-5">
                          <DetailContent detail={item.detail} />
                        </div>
                      </div>
                    </div>
                  </Fragment>
                ))}
              </div>
              <aside
                id="impact-detail"
                className={[
                  "home-detail hidden shrink-0 min-[1200px]:block",
                  open !== null ? "home-detail-open" : "",
                ].join(" ")}
                aria-hidden={open === null}
              >
                <div className="home-detail-inner">
                  <div className="relative h-full rounded-xl bg-white/95 p-6 backdrop-blur-[10px] md:p-7">
                    <button
                      type="button"
                      onClick={() => setOpen(null)}
                      aria-label="Close detail window"
                      className="absolute right-3 top-3 flex h-10 w-10 items-center justify-center text-xl leading-none text-[var(--home-ink-quiet)] transition-colors hover:text-[#15120c] sm:right-5 sm:top-5"
                      tabIndex={open === null ? -1 : 0}
                    >
                      ×
                    </button>
                    <DetailContent detail={activeDetail} />
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </div>
        <div className="mt-5 flex justify-end">
          <a href={LINKS.donate} className="home-arrow-link">
            Support our mission <span className="home-arrow">→</span>
          </a>
        </div>
      </div>
    </div>
  );
}
