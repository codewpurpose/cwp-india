"use client";

import { useId, useState } from "react";

type FaqItem = { q: string; a: string };

function Item({ item }: { item: FaqItem }) {
  const [open, setOpen] = useState(false);
  const panelId = useId();
  return (
    <div className="home-card rounded-xl">
      <h3>
        <button
          type="button"
          onClick={() => setOpen((e) => !e)}
          aria-expanded={open}
          aria-controls={panelId}
          className="flex w-full cursor-pointer items-center justify-between gap-3 p-5 text-left sm:gap-4 sm:p-6 md:p-8"
        >
          <span className="text-lg leading-[1.2] md:text-xl">{item.q}</span>
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            stroke="var(--home-ink-quiet)"
            strokeWidth="1.5"
            strokeLinecap="round"
            aria-hidden="true"
            className={`shrink-0 transition-transform duration-300 motion-reduce:transition-none ${
              open ? "rotate-45" : ""
            }`}
          >
            <path d="M7 1v12M1 7h12" />
          </svg>
        </button>
      </h3>
      <div
        id={panelId}
        aria-hidden={!open}
        className={`grid transition-[grid-template-rows] duration-300 ease-out motion-reduce:transition-none ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <p
            className={`px-5 pb-5 text-sm leading-[1.5] text-[var(--home-ink-soft)] transition-opacity duration-300 motion-reduce:transition-none sm:px-6 sm:pb-6 md:px-8 md:pb-8 md:text-[15px] ${
              open ? "opacity-100" : "opacity-0"
            }`}
          >
            {item.a}
          </p>
        </div>
      </div>
    </div>
  );
}

export function FaqAccordion({ items }: { items: FaqItem[] }) {
  return (
    <div className="flex flex-col gap-2">
      {items.map((item) => (
        <Item key={item.q} item={item} />
      ))}
    </div>
  );
}
