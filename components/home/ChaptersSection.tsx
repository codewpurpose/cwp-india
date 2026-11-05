import { IndiaMap3D } from "@/components/home/IndiaMap3D";
import { LINKS } from "@/lib/links";

export function ChaptersSection({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title?: string;
  description?: string;
}) {
  return (
    <section id="chapters" className="scroll-mt-24">
      <div className="mx-auto w-full max-w-[85rem] px-5 md:px-10">
        <div className="overflow-hidden rounded-xl bg-[var(--home-grey-450)]">
          <figure className="grid md:grid-cols-[2fr_3fr]">
            <div className="p-5 sm:p-6 md:p-8">
              <div className="flex h-full items-center justify-center overflow-hidden rounded-lg border-[0.5px] border-[var(--home-hairline)] bg-[var(--home-page)] p-6">
                <IndiaMap3D />
              </div>
            </div>
            <figcaption className="flex flex-col justify-center p-5 sm:p-6 md:p-8">
              <p className="text-[11px] uppercase tracking-[0.12em] text-[var(--home-ink-quiet)]">
                {eyebrow ?? "Chapters, not audiences"}
              </p>
              <h2 className="mt-3 text-lg leading-[1.15] md:text-[1.375rem]">
                {title ??
                  "CWP India is growing across cities — and you can start the next one"}
              </h2>
              <p className="mt-3 max-w-[40rem] text-sm leading-[1.5] text-[var(--home-ink-soft)]">
                {description ??
                  "From Delhi to Bengaluru, Kolkata to Mumbai — our chapters are run by students just like you. We send the material, the mentors, and whatever else you need — you bring the classroom."}
              </p>
              <a href={LINKS.join} className="home-arrow-link mt-5 self-start">
                Start a chapter <span className="home-arrow">→</span>
              </a>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
