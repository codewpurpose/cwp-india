import { defineField, defineType } from "sanity";

export const siteContent = defineType({
  name: "siteContent",
  title: "Site Content",
  type: "document",
  fields: [
    defineField({ name: "heroEyebrow", title: "Home — hero eyebrow", type: "string" }),
    defineField({ name: "heroTitle", title: "Home — hero title", type: "string" }),
    defineField({ name: "heroDescription", title: "Home — hero description", type: "text", rows: 3 }),
    defineField({ name: "chaptersEyebrow", title: "Home — chapters eyebrow", type: "string" }),
    defineField({ name: "chaptersTitle", title: "Home — chapters title", type: "string" }),
    defineField({ name: "chaptersDescription", title: "Home — chapters description", type: "text", rows: 3 }),
    defineField({ name: "ctaTitle", title: "Final CTA — title", type: "string" }),
    defineField({ name: "ctaDescription", title: "Final CTA — description", type: "text", rows: 3 }),
    defineField({ name: "workshopsEyebrow", title: "Workshops page — eyebrow", type: "string" }),
    defineField({ name: "workshopsTitle", title: "Workshops page — title", type: "string" }),
    defineField({ name: "workshopsDescription", title: "Workshops page — description", type: "text", rows: 3 }),
  ],
});
