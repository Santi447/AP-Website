const homepage = {
  name: "homepage",
  title: "Homepage",
  type: "document",
  fields: [
    { name: "heroHeadline", title: "Hero Headline", type: "string", validation: (Rule) => Rule.required() },
    { name: "heroSubheadline", title: "Hero Subheadline", type: "text" },
    { name: "heroImage", title: "Hero Image", type: "image", fields: [{ name: "alt", title: "Alt Text", type: "string" }] },
    { name: "primaryCtaText", title: "Primary CTA Text", type: "string" },
    { name: "primaryCtaLink", title: "Primary CTA Link", type: "string" },
    { name: "secondaryCtaText", title: "Secondary CTA Text", type: "string" },
    { name: "secondaryCtaLink", title: "Secondary CTA Link", type: "string" },
    { name: "featuredServices", title: "Featured Services", type: "array", of: [{ type: "reference", to: [{ type: "service" }] }] },
    { name: "featuredProjects", title: "Featured Projects", type: "array", of: [{ type: "reference", to: [{ type: "project" }] }] },
    { name: "residentialSectionTitle", title: "Residential Section Title", type: "string" },
    { name: "residentialSectionBody", title: "Residential Section Body", type: "text" },
    { name: "commercialSectionTitle", title: "Commercial Section Title", type: "string" },
    { name: "commercialSectionBody", title: "Commercial Section Body", type: "text" },
    {
      name: "whyChooseUsItems",
      title: "Why Choose Us Items",
      type: "array",
      of: [{ type: "object", fields: [{ name: "title", title: "Title", type: "string" }, { name: "description", title: "Description", type: "text" }] }],
    },
  ],
};

export default homepage;
