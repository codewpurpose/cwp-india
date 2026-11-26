import Link from "next/link";
import { inquiryHref } from "@/lib/inquiries";
import { LINKS } from "@/lib/links";
import type { Chapter } from "@/lib/sanity/types";

export function ChaptersSection({
  chapters,
  title,
}: {
  chapters: Chapter[];
  title?: string;
}) {
  return (
    <section id="chapters" aria-labelledby="chapters-title" className="scroll-mt-28">
      <div className="mx-auto w-full max-w-[85rem] px-5 md:px-10">
        <div className="rounded-2xl bg-[#e7eee7] p-6 md:p-10">
          <h2 id="chapters-title" className="home-serif text-2xl md:text-3xl">
            {title ?? "Find or start a local chapter"}
          </h2>
          <p className="mt-3 max-w-2xl text-[var(--home-ink-soft)]">
            Tell us your city or school and whether you want to join or start a chapter.
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <a href={LINKS.discord} target="_blank" rel="noreferrer" className="chapter-contact chapter-discord">
              <span className="chapter-contact-icon" aria-hidden="true"><DiscordIcon /></span>
              <span><strong>Join Discord</strong></span>
            </a>
            <a href={LINKS.email} className="chapter-contact chapter-email">
              <span className="chapter-contact-icon" aria-hidden="true"><MailIcon /></span>
              <span><strong>Email the team</strong><span>team@codewithpurpose.org</span></span>
            </a>
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

function DiscordIcon() {
  return <svg viewBox="0 0 24 24" fill="currentColor"><path d="M19.7 5.3A18 18 0 0 0 15.3 4l-.5 1a16 16 0 0 0-5.6 0l-.5-1a18 18 0 0 0-4.4 1.3C1.5 9.5.8 13.7 1.2 17.8a18 18 0 0 0 5.4 2.7l1.2-1.9-1.8-.9.4-.3a13 13 0 0 0 11.2 0l.4.3-1.8.9 1.2 1.9a18 18 0 0 0 5.4-2.7c.5-4.7-.8-8.8-3.1-12.5ZM8.6 15.4c-1.1 0-2-1-2-2.2 0-1.3.9-2.3 2-2.3s2 1 2 2.3c0 1.2-.9 2.2-2 2.2Zm6.8 0c-1.1 0-2-1-2-2.2 0-1.3.9-2.3 2-2.3s2 1 2 2.3c0 1.2-.9 2.2-2 2.2Z" /></svg>;
}

function MailIcon() {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m4 7 8 6 8-6" /></svg>;
}
