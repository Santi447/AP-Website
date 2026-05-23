const project = {
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    { name: "title", title: "Title", type: "string", validation: (Rule) => Rule.required() },
    { name: "slug", title: "Slug", type: "slug", options: { source: "title" }, validation: (Rule) => Rule.required() },
    { name: "projectType", title: "Project Type", type: "string" },
    { name: "location", title: "Location", type: "string", description: "Use only owner-confirmed locations." },
    { name: "completionDate", title: "Completion Date", type: "date" },
    { name: "description", title: "Description", type: "text" },
    { name: "featuredImage", title: "Featured Image", type: "image", fields: [{ name: "alt", title: "Alt Text", type: "string" }] },
    { name: "images", title: "Gallery Images", type: "array", of: [{ type: "image", fields: [{ name: "alt", title: "Alt Text", type: "string" }] }] },
    { name: "servicesUsed", title: "Services Used", type: "array", of: [{ type: "reference", to: [{ type: "service" }] }] },
    { name: "isFeatured", title: "Feature on Homepage", type: "boolean", initialValue: false },
  ],
};

export default project;
