import Image from "next/image";
import { inquiryHref } from "@/lib/inquiries";

export function CoreFocusSection() {
  return (
    <section id="focus" className="scroll-mt-24">
      <div className="mx-auto grid w-full max-w-[85rem] items-center gap-8 px-5 md:grid-cols-2 md:gap-12 md:px-10">
        <figure>
          <Image src="/workshops/dublin-hackathon.jpg" alt="Students working together at the Dublin hackathon" width={1800} height={1200} className="aspect-[3/2] w-full rounded-2xl object-cover" />
          <figcaption className="mt-2 text-sm text-[var(--home-ink-soft)]">Students at the CodeWithPurpose Dublin hackathon</figcaption>
        </figure>
        <div>
          <h2 className="home-serif text-3xl md:text-4xl">Learn together. Build something.</h2>
          <p className="mt-4 max-w-lg leading-relaxed text-[var(--home-ink-soft)]">
            Our student-led workshops make space to ask questions, try new
            skills, and build alongside others. Want to host one at your school
            or college? Tell us about your community.
          </p>
          <a href={inquiryHref("host")} className="home-btn home-btn-fill mt-6 inline-flex">Host a workshop</a>
        </div>
      </div>
    </section>
  );
}
