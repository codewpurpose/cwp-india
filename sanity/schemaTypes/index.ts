import type { SchemaTypeDefinition } from "sanity";
import { workshop } from "./workshop";
import { faq } from "./faq";
import { siteContent } from "./siteContent";

export const schemaTypes: SchemaTypeDefinition[] = [workshop, faq, siteContent];
