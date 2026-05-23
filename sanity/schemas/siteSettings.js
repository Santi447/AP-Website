const siteSettings = {
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  fields: [
    { name: "businessName", title: "Business Name", type: "string", validation: (Rule) => Rule.required() },
    { name: "phoneNumber", title: "Phone Number", type: "string" },
    { name: "email", title: "Email", type: "string" },
    { name: "generalLocation", title: "General Location", type: "string" },
    { name: "serviceAreaSummary", title: "Service Area Summary", type: "text" },
    { name: "logo", title: "Logo", type: "image", fields: [{ name: "alt", title: "Alt Text", type: "string" }] },
    { name: "footerLogo", title: "Footer Logo", type: "image", fields: [{ name: "alt", title: "Alt Text", type: "string" }] },
    { name: "facebookUrl", title: "Facebook URL", type: "url" },
    { name: "instagramUrl", title: "Instagram URL", type: "url" },
    { name: "googleBusinessProfileUrl", title: "Google Business Profile URL", type: "url" },
    { name: "defaultSeoTitle", title: "Default SEO Title", type: "string" },
    { name: "defaultSeoDescription", title: "Default SEO Description", type: "text" },
  ],
};

export default siteSettings;
