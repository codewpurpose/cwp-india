import type { ReactNode } from "react";
import { Reveal } from "@/components/Reveal";

export function PageHero({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden border-b-[0.5px] border-[var(--home-hairline)] bg-[var(--home-page)] pt-12 pb-14 md:pt-20 md:pb-24">
      <div aria-hidden="true" className="cwp-hero-bg absolute inset-0" />
      <div className="relative mx-auto w-full max-w-[85rem] px-5 md:px-10">
        <Reveal>
          {eyebrow && (
            <p className="home-eyebrow mb-5">
              <span className="home-chip-dot" aria-hidden="true" />
              {eyebrow}
            </p>
          )}
          <h1 className="home-display max-w-4xl text-[2rem] leading-[1.05] tracking-[-0.02em] md:text-[2.75rem] lg:text-[3.25rem]">
            {title}
          </h1>
          {description && (
            <p className="mt-5 max-w-xl text-lg leading-[1.5] text-[var(--home-ink-soft)]">
              {description}
            </p>
          )}
          {children && <div className="mt-8 flex flex-wrap gap-2">{children}</div>}
        </Reveal>
      </div>
    </section>
  );
}

export function PageSection({
  children,
  className = "",
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`py-12 md:py-20 ${className}`}>
      <div className="mx-auto w-full max-w-[85rem] px-5 md:px-10">{children}</div>
    </section>
  );
}
