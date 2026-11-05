import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { PageHero } from "@/components/PageHero";
import { ContactForm } from "@/components/ContactForm";
import { LINKS } from "@/lib/links";
import { CONTACT_REASONS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with CodeWithPurpose India. Start a chapter, host a workshop, or just say hello.",
};

export default function ContactPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Contact us"
        title="Let's build something."
        description="Want to start a chapter, host a workshop, partner with us, or just ask a question? We'd love to hear from you."
      />

      {/* pb matches the landing's final-CTA spacing so the form never sits
          flush against the footer. */}
              <section className="mx-auto w-full max-w-[85rem] px-5 pb-16 pt-12 md:px-10 md:pb-32 md:pt-20">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-5">
            <div className="home-card home-card-accent rounded-2xl p-7">
              <h2 className="home-serif text-xl">
                What are you reaching out about?
              </h2>
              <ul className="mt-4 space-y-3">
                {CONTACT_REASONS.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 text-[var(--home-ink-soft)]"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="var(--home-fern)"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mt-1 h-4 w-4 flex-none"
                      aria-hidden="true"
                    >
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="home-card rounded-2xl p-7">
              <p className="home-mono text-xs text-[var(--home-ink-quiet)]">
                Direct channels
              </p>
              <div className="mt-3 space-y-3 text-[var(--home-ink-soft)]">
                <p>
                  Email us at{" "}
                  <a
                    href={LINKS.email}
                    className="text-[var(--home-link-green)] underline underline-offset-2"
                  >
                    team@codewithpurpose.org
                  </a>
                </p>
                <p>
                  Join the global community on{" "}
                  <a
                    href={LINKS.discord}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[var(--home-link-green)] underline underline-offset-2"
                  >
                    Discord
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className="home-card home-card-accent rounded-2xl p-8 md:p-10">
            <ContactForm />
          </div>
        </div>
      </section>
    </PageShell>
  );
}
