import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { PageHero } from "@/components/PageHero";
import { ContactForm } from "@/components/ContactForm";
import { CONTACT_EMAIL, LINKS } from "@/lib/links";
import { inquiryEmail, type InquiryIntent } from "@/lib/inquiries";
import { getChapters } from "@/lib/sanity/queries";

export const metadata: Metadata = {
  alternates: { canonical: "/contact" },
  title: "Contact",
  description:
    "Get in touch with CodeWithPurpose India. Start a chapter, host a workshop, or just say hello.",
};

export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{ intent?: string | string[]; chapter?: string | string[] }>;
}) {
  const params = await searchParams;
  const intent: InquiryIntent | undefined =
    params.intent === "join" || params.intent === "start" || params.intent === "host"
      ? params.intent
      : undefined;
  const chapter =
    intent === "join" && typeof params.chapter === "string"
      ? (await getChapters()).find(({ _id }) => _id === params.chapter)?.name
      : undefined;
  const email = intent ? inquiryEmail(intent, chapter) : LINKS.email;
  const hasContactForm = Boolean(process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY);

  return (
    <PageShell>
      <PageHero
        eyebrow="Contact us"
        title="Connect with CodeWithPurpose India"
        description={
          "Join our Discord or email the team about chapters, workshops, mentoring, or working together."
        }
      />

      {/* pb matches the landing's final-CTA spacing so the form never sits
          flush against the footer. */}
      <section className="mx-auto w-full max-w-[85rem] px-5 pb-16 pt-12 md:px-10 md:pb-32 md:pt-20">
        <div className={hasContactForm ? "grid gap-10 lg:grid-cols-[0.9fr_1.1fr]" : "max-w-2xl"}>
          <div className="space-y-5">
            <div className="home-card rounded-2xl p-7">
              <h2 className="home-serif text-xl">Email the India team</h2>
              <div className="mt-3 space-y-3 text-[var(--home-ink-soft)]">
                <p>
                  <a
                    href={email}
                    className="text-[var(--home-link-green)] underline underline-offset-2"
                  >
                    {CONTACT_EMAIL}
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

          {hasContactForm && (
            <div className="home-card home-card-accent rounded-2xl p-8 md:p-10">
              <ContactForm intent={intent} chapter={chapter} />
            </div>
          )}
        </div>
      </section>
    </PageShell>
  );
}
