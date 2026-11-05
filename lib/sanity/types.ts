export type Workshop = {
  _id: string;
  title: string;
  slug?: { current: string };
  city: string;
  date: string;
  mode?: "in-person" | "online";
  venue?: string;
  description: string;
  topics?: string[];
  poster?: { asset: { _ref: string } };
  status: "upcoming" | "past";
  registrationUrl?: string;
};

export type FaqItem = {
  q: string;
  a: string;
};

export type SiteContent = {
  heroEyebrow?: string;
  heroTitle?: string;
  heroDescription?: string;
  chaptersEyebrow?: string;
  chaptersTitle?: string;
  chaptersDescription?: string;
  ctaTitle?: string;
  ctaDescription?: string;
  workshopsEyebrow?: string;
  workshopsTitle?: string;
  workshopsDescription?: string;
};
