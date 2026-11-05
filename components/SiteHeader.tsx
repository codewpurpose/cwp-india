"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { CwpLogo, GitHubIcon, InstagramIcon, XIcon } from "@/components/icons";
import { LINKS } from "@/lib/links";

const NAV_LINKS = [
  { href: LINKS.workshops, label: "Workshops" },
  { href: LINKS.contact, label: "Contact" },
  { href: LINKS.faq, label: "FAQ" },
  { href: LINKS.about, label: "About Us" },
];

const GLASS_STYLE = {
  background:
    "linear-gradient(rgba(206,206,206,0.3),rgba(206,206,206,0.3)), rgba(255,255,255,0.85)",
  border: "0.5px solid rgba(206,206,206,0.22)",
};

function LogoLink() {
  return (
    <Link
      href={LINKS.index}
      className="home-hit-expand flex items-center"
      aria-label="CodeWithPurpose India home"
    >
      <CwpLogo className="cwp-logo-header" />
    </Link>
  );
}

/**
 * The strip above the header: who to follow, what we have done, and one way in.
 * One stable claim rather than a rotating one — no timer, no re-render.
 */
function ProofPointStrip() {
  return (
    <div className="proof-point-strip">
      <div className="proof-point-inner">
        <div className="proof-point-side">
          <span className="proof-point-label" aria-hidden="true">Follow</span>
          <a
            href={LINKS.instagram}
            target="_blank"
            rel="noreferrer"
            aria-label="CodeWithPurpose on Instagram"
            className="proof-point-icon"
          >
            <InstagramIcon />
          </a>
          <a
            href={LINKS.x}
            target="_blank"
            rel="noreferrer"
            aria-label="CodeWithPurpose on X"
            className="proof-point-icon"
          >
            <XIcon />
          </a>
          <a
            href={LINKS.github}
            target="_blank"
            rel="noreferrer"
            aria-label="CodeWithPurpose on GitHub"
            className="proof-point-icon"
          >
            <GitHubIcon />
          </a>
        </div>
        <p className="proof-point-centre">
          <span aria-hidden="true">✦</span>
          <span className="proof-point-text">2,000+ students</span>
          <span aria-hidden="true">✦</span>
        </p>
        <div className="proof-point-side proof-point-side-end">
          <a href={LINKS.join} className="proof-point-join">
            Join us <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!menuOpen) return;

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setMenuOpen(false);
        triggerRef.current?.focus();
      }
    }

    function onClickOutside(e: MouseEvent) {
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target as Node) &&
        triggerRef.current &&
        !triggerRef.current.contains(e.target as Node)
      ) {
        setMenuOpen(false);
      }
    }

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("mousedown", onClickOutside);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("mousedown", onClickOutside);
    };
  }, [menuOpen]);

  return (
    <>
      <ProofPointStrip />
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-[var(--home-moss)] focus:px-4 focus:py-3 focus:text-sm focus:text-white focus:outline-none focus:ring-2 focus:ring-[var(--home-fern)] focus:ring-offset-2"
      >
        Skip to main content
      </a>
      <header className="sticky top-0 z-10">
        <div className="mx-auto flex w-full max-w-[85rem] items-center justify-between gap-3 px-4 py-4 sm:px-5 md:px-10 min-[1200px]:grid min-[1200px]:grid-cols-[1fr_auto_1fr] min-[1200px]:gap-4 min-[1200px]:py-8">
          <div className="min-w-0 min-[1200px]:justify-self-start">
            <LogoLink />
          </div>
          <nav
            aria-label="Primary"
            className="home-nav-pill hidden items-center gap-1 justify-self-center rounded-lg text-[1rem] min-[1200px]:flex"
            style={GLASS_STYLE}
          >
            {NAV_LINKS.map((link) => (
              <a key={link.href} href={link.href} className="px-3 py-2">
                {link.label}
              </a>
            ))}
          </nav>
          <div className="flex shrink-0 items-center gap-2 min-[1200px]:col-start-3 min-[1200px]:justify-self-end">
            <div className="hidden min-[1200px]:block">
              <a
                href={LINKS.join}
                className="home-btn home-btn-glass whitespace-nowrap"
              >
                Volunteer
              </a>
            </div>
            <a
              href={LINKS.donate}
              className="home-btn home-btn-compact home-btn-glass whitespace-nowrap"
            >
              Donate<span className="hidden min-[420px]:inline"> Now</span>
            </a>
            <div className="min-[1200px]:hidden">
              <button
                ref={triggerRef}
                type="button"
                onClick={() => setMenuOpen((open) => !open)}
                aria-expanded={menuOpen}
                aria-controls="home-mobile-menu"
                aria-label={menuOpen ? "Close menu" : "Open menu"}
                className="home-btn home-btn-compact home-btn-glass"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  aria-hidden="true"
                >
                  {menuOpen ? (
                    <path d="M3 3l10 10M13 3L3 13" />
                  ) : (
                    <path d="M2 4.5h12M2 8h12M2 11.5h12" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
        {menuOpen && (
          <>
            <div
              className="fixed inset-0 z-[-1] bg-black/30 min-[1200px]:hidden"
              aria-hidden="true"
            />
            <nav
              ref={menuRef}
              id="home-mobile-menu"
              aria-label="Primary"
              className="absolute inset-x-0 top-full z-20 mx-4 flex flex-col rounded-xl p-2 backdrop-blur-[10px] sm:mx-5 md:mx-10 min-[1200px]:hidden"
              style={GLASS_STYLE}
            >
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-lg px-3 py-3.5 text-[1rem]"
                >
                  {link.label}
                </a>
              ))}
              <a
                href={LINKS.join}
                onClick={() => setMenuOpen(false)}
                className="mt-1 rounded-lg border-t-[0.5px] border-[var(--home-hairline)] px-3 py-3.5 text-[1rem]"
              >
                Volunteer
              </a>
            </nav>
          </>
        )}
      </header>
    </>
  );
}
