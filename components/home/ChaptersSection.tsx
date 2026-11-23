import Link from "next/link";
import { inquiryHref } from "@/lib/inquiries";
import type { Chapter } from "@/lib/sanity/types";

export function ChaptersSection({
  chapters,
  eyebrow,
  title,
  description,
}: {
  chapters: Chapter[];
  eyebrow?: string;
  title?: string;
  description?: string;
}) {
  return (
    <section id="chapters" aria-labelledby="chapters-title" className="scroll-mt-28">
      <div className="mx-auto w-full max-w-[85rem] px-5 md:px-10">
        <div className="home-card rounded-xl p-6 md:p-10">
          {eyebrow && <p className="home-eyebrow mb-3">{eyebrow}</p>}
          <h2 id="chapters-title" className="home-serif text-2xl md:text-3xl">
            {title ?? "Find or start a local chapter"}
          </h2>
          <p className="mt-3 max-w-2xl text-[var(--home-ink-soft)]">
            {description ??
              "Local chapters bring students together to learn to code, build projects and organise free workshops."}
          </p>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <div className="rounded-xl border border-[var(--home-hairline)] p-5 md:p-6">
              <h3 className="home-serif text-xl">Join a local chapter</h3>
              <p className="my-3 text-[var(--home-ink-soft)]">
                Share your city or school so we can check for a chapter nearby.
              </p>
              <Link href={inquiryHref("join")} className="home-btn home-btn-fill">
                Ask to join
              </Link>
            </div>
            <div className="rounded-xl border border-[var(--home-hairline)] p-5 md:p-6">
              <h3 className="home-serif text-xl">Start a chapter</h3>
              <p className="my-3 text-[var(--home-ink-soft)]">
                Tell us where you want to start and what you’d like to organise.
              </p>
              <Link href={inquiryHref("start")} className="home-btn home-btn-outline">
                Ask about starting a chapter
              </Link>
            </div>
          </div>
          {chapters.length > 0 && (
            <div className="mt-8">
              <h3 className="home-serif text-xl">Chapters accepting members</h3>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {chapters.map(({ _id, name, location }) => (
                  <li key={_id} className="rounded-xl border border-[var(--home-hairline)] p-4">
                    <h4 className="font-semibold">{name}</h4>
                    <p className="mt-1 text-[var(--home-ink-soft)]">{location}</p>
                    <Link
                      href={inquiryHref("join", _id)}
                      aria-label={`Ask to join ${name}`}
                      className="mt-3 inline-block underline underline-offset-2"
                    >
                      Ask to join
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
