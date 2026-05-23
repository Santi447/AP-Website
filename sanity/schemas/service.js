const service = {
  name: "service",
  title: "Service",
  type: "document",
  fields: [
    { name: "title", title: "Title", type: "string", validation: (Rule) => Rule.required() },
    { name: "slug", title: "Slug", type: "slug", options: { source: "title" }, validation: (Rule) => Rule.required() },
    { name: "shortDescription", title: "Short Description", type: "text" },
    { name: "fullDescription", title: "Full Description", type: "text" },
    { name: "category", title: "Category", type: "string", options: { list: ["Residential", "Commercial", "Industrial"] } },
    { name: "heroImage", title: "Hero Image", type: "image", fields: [{ name: "alt", title: "Alt Text", type: "string" }] },
    { name: "galleryImages", title: "Gallery Images", type: "array", of: [{ type: "image", fields: [{ name: "alt", title: "Alt Text", type: "string" }] }] },
    { name: "benefits", title: "Benefits", type: "array", of: [{ type: "string" }] },
    { name: "processSteps", title: "Process Steps", type: "array", of: [{ type: "string" }] },
    { name: "faqs", title: "FAQs", type: "array", of: [{ type: "object", fields: [{ name: "question", title: "Question", type: "string" }, { name: "answer", title: "Answer", type: "text" }] }] },
    { name: "relatedProjects", title: "Related Projects", type: "array", of: [{ type: "reference", to: [{ type: "project" }] }] },
    { name: "seoTitle", title: "SEO Title", type: "string" },
    { name: "seoDescription", title: "SEO Description", type: "text" },
  ],
};

export default service;
