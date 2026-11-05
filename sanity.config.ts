import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { schemaTypes } from "./sanity/schemaTypes";

export default defineConfig({
  name: "cwp-india",
  title: "CWP India",
  basePath: "/studio",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? "placeholder",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production",
  schema: { types: schemaTypes },
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title("Content")
          .items([
            S.listItem()
              .title("Site Content")
              .id("siteContent")
              .child(
                S.document().schemaType("siteContent").documentId("siteContent")
              ),
            S.divider(),
            S.documentTypeListItem("workshop").title("Workshops"),
            S.documentTypeListItem("faq").title("FAQs"),
          ]),
    }),
  ],
});
