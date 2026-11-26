import Image from "next/image";
import { LINKS } from "@/lib/links";

export function HeroSection() {
  return (
    <section className="mx-auto grid w-full max-w-[85rem] items-center gap-8 px-5 pt-8 md:grid-cols-2 md:gap-12 md:px-10 md:pt-16">
      <div>
        <h1 className="home-display text-[2.5rem] leading-[1.05] md:text-[3.5rem] xl:text-[4rem]">
          Free coding workshops across India
        </h1>
        <p className="mt-5 max-w-xl text-base leading-relaxed text-[var(--home-ink-soft)] sm:text-lg">
          CodeWithPurpose India brings free coding workshops to students across
          the country. Learn together, build projects, and bring a workshop to your community.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href={LINKS.workshops} className="home-btn home-btn-fill">Find a workshop</a>
          <a href={LINKS.chapters} className="home-btn home-btn-outline">Join or start a chapter</a>
        </div>
      </div>
      <figure>
        <Image src="/workshops/community-workshop.jpg" alt="Students learning together at a CodeWithPurpose workshop" width={1400} height={1050} priority className="aspect-[4/3] w-full rounded-2xl object-cover" />
        <figcaption className="mt-2 text-sm text-[var(--home-ink-soft)]">A CodeWithPurpose workshop</figcaption>
      </figure>
    </section>
  );
}
