import Link from "next/link";
import { CwpLogo, GitHubIcon, InstagramIcon, XIcon } from "@/components/icons";
import { LINKS } from "@/lib/links";
import {
  FOOTER_LEARN,
  FOOTER_INVOLVED,
  FOOTER_RESOURCES,
} from "@/lib/data";

function SocialLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      title={label}
      className="flex h-9 w-9 items-center justify-center rounded-full border-[0.5px] border-[var(--home-hairline)] text-[var(--home-ink-soft)] transition-colors hover:border-[var(--home-fern)] hover:bg-[#f3faf3] hover:text-[var(--home-moss)]"
    >
      {children}
    </a>
  );
}

const FOOTER_COLUMNS = [
  { heading: "Learn", items: FOOTER_LEARN },
  { heading: "Get Involved", items: FOOTER_INVOLVED },
  { heading: "Resources", items: FOOTER_RESOURCES },
];

function footerHref(key: keyof typeof LINKS) {
  return LINKS[key];
}

export function SiteFooter() {
  return (
    <footer id="contact" className="scroll-mt-24 pb-6">
      <div className="mx-auto w-full max-w-[85rem] px-5 md:px-10">
        <div className="rounded-xl bg-white p-5 shadow-[0_0_7.5rem_rgba(0,0,0,0.07)] md:p-6">
          <div className="grid items-start gap-y-10 lg:[grid-template-columns:repeat(20,minmax(0,1fr))]">
            <div className="self-start lg:col-span-8">
              <Link
                href={LINKS.index}
                className="flex flex-col gap-3"
                aria-label="CodeWithPurpose India home"
              >
                <CwpLogo className="cwp-logo-lg" />
                <p className="max-w-sm text-sm text-[var(--home-ink-soft)]">
                  A student-run nonprofit making tech education free and
                  accessible for every student in India.
                </p>
              </Link>
            </div>
            <div className="lg:col-span-12">
              <div className="grid grid-cols-2 gap-x-4 gap-y-8 sm:gap-x-6 md:grid-cols-3 lg:gap-x-8">
                {FOOTER_COLUMNS.map((col) => (
                  <div key={col.heading}>
                    <h3 className="mb-3 text-xs opacity-60">{col.heading}</h3>
                    <ul className="space-y-2.5 text-xs xl:text-base">
                      {col.items.map((item) => {
                        const href = footerHref(item.href);
                        const isLocal =
                          href.startsWith("/") && !href.startsWith("//");
                        return (
                          <li key={item.label}>
                            {isLocal ? (
                              <Link href={href} className="home-footer-link">
                                {item.label}
                              </Link>
                            ) : (
                              <a
                                href={href}
                                className="home-footer-link"
                              >
                                {item.label}
                              </a>
                            )}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-12 flex flex-wrap items-end justify-between gap-6">
            <div className="text-xs opacity-70">
              <span>© 2026 CodeWithPurpose India</span>
              <p className="mt-1">
                Made by students, for students · Free education for every
                student, everywhere.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-x-5 gap-y-3 sm:justify-end">
              <div className="flex items-center gap-2">
                <SocialLink
                  href={LINKS.instagram}
                  label="Follow us on Instagram"
                >
                  <InstagramIcon className="h-[18px] w-[18px]" />
                </SocialLink>
                <SocialLink href={LINKS.x} label="Follow us on X">
                  <XIcon className="h-[18px] w-[18px]" />
                </SocialLink>
                <SocialLink
                  href={LINKS.github}
                  label="CodeWithPurpose on GitHub"
                >
                  <GitHubIcon className="h-[18px] w-[18px]" />
                </SocialLink>
              </div>
              <span className="text-xs opacity-70">
                Student-led free education for everyone
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
