const testimonial = {
  name: "testimonial",
  title: "Testimonial",
  type: "document",
  fields: [
    { name: "customerName", title: "Customer Name", type: "string", validation: (Rule) => Rule.required() },
    { name: "customerType", title: "Customer Type", type: "string", options: { list: ["Residential", "Commercial", "Industrial"] } },
    { name: "quote", title: "Quote", type: "text", validation: (Rule) => Rule.required() },
    { name: "rating", title: "Rating", type: "number", validation: (Rule) => Rule.min(1).max(5) },
    { name: "relatedService", title: "Related Service", type: "reference", to: [{ type: "service" }] },
    { name: "displayOnHomepage", title: "Display on Homepage", type: "boolean", initialValue: false },
  ],
};

export default testimonial;
