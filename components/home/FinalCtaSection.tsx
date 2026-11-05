import { LINKS } from "@/lib/links";

export function FinalCtaSection({
  title,
  description,
}: {
  title?: string;
  description?: string;
}) {
  return (
    <section id="join" className="scroll-mt-24 pb-16 md:pb-32">
      <div className="mx-auto w-full max-w-[85rem] px-5 md:px-10 text-center">
        <h2 className="home-serif mx-auto max-w-4xl text-[1.75rem] leading-[1.08] text-balance md:text-[2.5rem]">
          {title ?? "Join 2,000+ students across India already learning with us."}
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-[15px] leading-[1.6] text-[var(--home-ink-soft)] md:text-base">
          {description ?? "Start learning today, or help us keep every workshop free."}
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
          <a href={LINKS.courses} className="home-btn home-btn-fill">
            Explore courses
          </a>
          <a href={LINKS.donate} className="home-btn home-btn-outline">
            Support Our Mission
          </a>
        </div>
      </div>
    </section>
  );
}
