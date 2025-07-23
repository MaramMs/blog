import { defineType, defineField } from "sanity";
import { DocumentTextIcon } from "@sanity/icons";

export const postType = defineType({
  name: "post",
  title: "Post",
  type: "document",
  icon: DocumentTextIcon,
  fields: [
    defineField({
      name: "title",
      type: "string",
      title: "Title",
    }),
    defineField({
      name: "slug",
      type: "slug",
      title: "Slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "author",
      type: "reference",
      title: "Author",
      to: [{ type: "author" }],
    }),
    defineField({
      name: "mainImage",
      type: "image",
      title: "Main Image",
      options: { hotspot: true },
      fields: [
        defineField({
          name: "alt",
          type: "string",
          title: "Alternative Text",
        }),
      ],
    }),
    defineField({
      name: "price",
      type: "number",
      title: "سعر السيارة",
    }),
    defineField({
      name: "installment",
      type: "number",
      title: "سعر القسط",
    }),

    defineField({
      name: "buttonText",
      type: "string",
      title: "ButtonText",
    }),

    defineField({
      name: "category",
      title: "Category",
      type: "reference",
      to: [{ type: "category" }],
    }),
    defineField({
      name: "carModel",
      title: "موديل السيارة",
      type: "reference",
      to: [{ type: "carModel" }],
    }),
    defineField({
      name: "carYear",
      title: "سنة الصنع",
      type: "reference",
      to: [{ type: "carYear" }],
    }),

    defineField({
      name: "publishedAt",
      type: "datetime",
      title: "Published At",
      initialValue: () => new Date().toISOString(),
    }),
    defineField({
      name: "body",
      type: "blockContent",
      title: "Body",
    }),
  ],
  preview: {
    select: {
      title: "title",
      author: "author.name",
      media: "mainImage",
    },
    prepare(selection: { author?: string; title?: string; media?: any }) {
      const { author } = selection;
      return { ...selection, subtitle: author && `by ${author}` };
    },
  },
});
