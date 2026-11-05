import Image from "next/image";
import type { Workshop } from "@/lib/sanity/types";
import { urlFor } from "@/lib/sanity/client";

function formatDate(iso: string) {
  const d = new Date(iso);
  const date = new Intl.DateTimeFormat("en-IN", {
    weekday: "short",
    day: "numeric",
    month: "short",
    year: "numeric",
    timeZone: "Asia/Kolkata",
  }).format(d);
  const time = new Intl.DateTimeFormat("en-IN", {
    hour: "numeric",
    minute: "2-digit",
    timeZone: "Asia/Kolkata",
  }).format(d);
  return { date, time };
}

export function WorkshopCard({ workshop }: { workshop: Workshop }) {
  const { date, time } = formatDate(workshop.date);
  const posterUrl = workshop.poster
    ? urlFor(workshop.poster)?.width(800).height(450).url()
    : null;

  return (
    <article className="home-card flex flex-col overflow-hidden rounded-2xl">
      {posterUrl && (
        <div className="relative aspect-[16/9] w-full">
          <Image
            src={posterUrl}
            alt={workshop.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>
      )}
      <div className="flex flex-1 flex-col p-6">
        <div className="flex flex-wrap items-center gap-2">
          <span className="home-chip">{workshop.city}</span>
          {workshop.mode && (
            <span className="home-chip">
              {workshop.mode === "online" ? "Online" : "In-person"}
            </span>
          )}
        </div>
        <h3 className="home-serif mt-4 text-lg leading-snug">
          {workshop.title}
        </h3>
        <p className="home-mono mt-2 text-xs text-[var(--home-ink-quiet)]">
          {date} · {time} IST
        </p>
        {workshop.venue && (
          <p className="mt-1 text-xs text-[var(--home-ink-quiet)]">
            {workshop.venue}
          </p>
        )}
        <p className="mt-3 flex-1 text-sm leading-[1.6] text-[var(--home-ink-soft)]">
          {workshop.description}
        </p>
        {workshop.topics && workshop.topics.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-1.5">
            {workshop.topics.map((t) => (
              <span
                key={t}
                className="rounded-full border-[0.5px] border-[var(--home-hairline)] px-2.5 py-0.5 text-[11px] text-[var(--home-ink-quiet)]"
              >
                {t}
              </span>
            ))}
          </div>
        )}
        {workshop.status === "upcoming" && workshop.registrationUrl && (
          <a
            href={workshop.registrationUrl}
            target="_blank"
            rel="noreferrer"
            className="home-arrow-link mt-5 self-start"
          >
            Register <span className="home-arrow">→</span>
          </a>
        )}
      </div>
    </article>
  );
}
