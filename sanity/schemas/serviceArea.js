const serviceArea = {
  name: "serviceArea",
  title: "Service Area",
  type: "document",
  fields: [
    { name: "name", title: "Name", type: "string", validation: (Rule) => Rule.required() },
    { name: "slug", title: "Slug", type: "slug", options: { source: "name" }, validation: (Rule) => Rule.required() },
    { name: "intro", title: "Intro", type: "text" },
    { name: "servicesOffered", title: "Services Offered", type: "array", of: [{ type: "reference", to: [{ type: "service" }] }] },
    { name: "seoTitle", title: "SEO Title", type: "string" },
    { name: "seoDescription", title: "SEO Description", type: "text" },
  ],
};

export default serviceArea;
