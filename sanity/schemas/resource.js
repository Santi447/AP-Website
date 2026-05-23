const resource = {
  name: "resource",
  title: "Resource / Blog Post",
  type: "document",
  fields: [
    { name: "title", title: "Title", type: "string", validation: (Rule) => Rule.required() },
    { name: "slug", title: "Slug", type: "slug", options: { source: "title" }, validation: (Rule) => Rule.required() },
    { name: "author", title: "Author", type: "string" },
    { name: "publishedAt", title: "Published At", type: "datetime" },
    { name: "featuredImage", title: "Featured Image", type: "image", fields: [{ name: "alt", title: "Alt Text", type: "string" }] },
    { name: "body", title: "Body", type: "array", of: [{ type: "block" }] },
    { name: "relatedServices", title: "Related Services", type: "array", of: [{ type: "reference", to: [{ type: "service" }] }] },
    { name: "seoTitle", title: "SEO Title", type: "string" },
    { name: "seoDescription", title: "SEO Description", type: "text" },
  ],
};

export default resource;
