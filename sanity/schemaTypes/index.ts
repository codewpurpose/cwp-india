import type { SchemaTypeDefinition } from "sanity";
import { chapter } from "./chapter";
import { workshop } from "./workshop";
import { faq } from "./faq";
import { siteContent } from "./siteContent";

export const schemaTypes: SchemaTypeDefinition[] = [chapter, workshop, faq, siteContent];
