import { defineField, defineType } from "sanity";

export const chapter = defineType({
  name: "chapter",
  title: "Chapter",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Chapter name",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "location",
      title: "City and state",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "acceptingMembers",
      title: "List this chapter as accepting members",
      type: "boolean",
      initialValue: false,
      description: "Enable after confirming that the chapter is active and its organisers can respond to introductions.",
    }),
  ],
  preview: {
    select: { title: "name", subtitle: "location" },
  },
});
