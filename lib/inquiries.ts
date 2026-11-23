import { LINKS } from "./links";

export const INQUIRIES = {
  join: {
    label: "Join a chapter",
    guidance: "Tell us your city, state and, if you know it, the chapter you want to join. We use this to check which chapters can welcome new members.",
    prompt: "Which city, school or chapter are you interested in?",
  },
  start: {
    label: "Start a chapter",
    guidance: "Tell us where you would like to start, who would help organise it and what you would like your group to do first.",
    prompt: "Tell us about your school or community and your first workshop idea.",
  },
  host: {
    label: "Host a workshop",
    guidance: "Tell us about your school or organisation, your audience and any dates you have in mind.",
    prompt: "Who is the workshop for and where would you like to host it?",
  },
} as const;

export type InquiryIntent = keyof typeof INQUIRIES;

export function inquiryHref(intent: InquiryIntent, chapterId?: string) {
  const params = new URLSearchParams({ intent });
  if (chapterId) params.set("chapter", chapterId);
  return `${LINKS.contact}?${params}`;
}

export function inquiryEmail(intent: InquiryIntent, chapter?: string) {
  const subject = `[CWP India] ${INQUIRIES[intent].label}`;
  const body = [chapter && `Chapter: ${chapter}`, INQUIRIES[intent].prompt, "", "City / state: "]
    .filter((line) => line !== undefined)
    .join("\r\n");
  return `${LINKS.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
