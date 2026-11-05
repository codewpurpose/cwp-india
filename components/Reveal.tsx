"use client";

import type { ReactNode } from "react";

/**
 * Content is visible immediately, including during hydration and without
 * JavaScript. `delay` is still accepted so existing call sites keep working,
 * but nothing staggers any more — the global theme dropped scroll-reveal.
 */
export function Reveal({
  children,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return <div className={className}>{children}</div>;
}
