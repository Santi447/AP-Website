import { groq } from "next-sanity";

export const siteSettingsQuery = groq`
  *[_type == "siteSettings"][0]{
    businessName,
    phoneNumber,
    email,
    generalLocation,
    serviceAreaSummary,
    logo{alt, asset->{url}},
    footerLogo{alt, asset->{url}},
    facebookUrl,
    instagramUrl,
    googleBusinessProfileUrl,
    defaultSeoTitle,
    defaultSeoDescription
  }
`;

export const homepageQuery = groq`
  *[_type == "homepage"][0]{
    heroHeadline,
    heroSubheadline,
    heroImage{alt, asset},
    primaryCtaText,
    primaryCtaLink,
    secondaryCtaText,
    secondaryCtaLink,
    residentialSectionTitle,
    residentialSectionBody,
    commercialSectionTitle,
    commercialSectionBody,
    whyChooseUsItems[]{title, description},
    featuredServices[]->{title, "slug": slug.current, category, shortDescription, heroImage{alt, asset}},
    featuredProjects[]->{title, "slug": slug.current, projectType, location, description, featuredImage{alt, asset}, isFeatured}
  }
`;

export const servicesQuery = groq`
  *[_type == "service"] | order(title asc){
    title,
    "slug": slug.current,
    category,
    shortDescription,
    fullDescription,
    heroImage{alt, asset},
    benefits,
    processSteps,
    faqs[]{question, answer},
    seoTitle,
    seoDescription
  }
`;

export const serviceBySlugQuery = groq`
  *[_type == "service" && slug.current == $slug][0]{
    title,
    "slug": slug.current,
    category,
    shortDescription,
    fullDescription,
    heroImage{alt, asset},
    galleryImages[]{alt, asset},
    benefits,
    processSteps,
    faqs[]{question, answer},
    relatedProjects[]->{title, "slug": slug.current, projectType, featuredImage{alt, asset}},
    seoTitle,
    seoDescription
  }
`;

export const projectsQuery = groq`
  *[_type == "project"] | order(isFeatured desc, title asc){
    title,
    "slug": slug.current,
    projectType,
    location,
    completionDate,
    description,
    featuredImage{alt, asset},
    images[]{alt, asset},
    isFeatured
  }
`;

export const projectBySlugQuery = groq`
  *[_type == "project" && slug.current == $slug][0]{
    title,
    "slug": slug.current,
    projectType,
    location,
    completionDate,
    description,
    featuredImage{alt, asset},
    images[]{alt, asset},
    servicesUsed[]->{title, "slug": slug.current},
    isFeatured
  }
`;
