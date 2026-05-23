export const siteSettings = {
  businessName: "A&P Concrete",
  phoneNumber: "(403) 464-1336",
  phoneHref: "tel:+14034641336",
  email: "apconstructionserv@gmail.com",
  generalLocation: "Calgary area",
  serviceAreaSummary: "Serving confirmed local project areas. Add exact service areas in Sanity after owner approval.",
  defaultSeoTitle: "A&P Concrete | Concrete Pumping, Placing, and Finishing",
  defaultSeoDescription:
    "Concrete pumping, placing, finishing, prep work, and crew support for residential, commercial, and industrial projects.",
};

export const homepageContent = {
  heroHeadline: "Concrete pumping, placing, and finishing for real jobsite needs.",
  heroSubheadline:
    "A&P supports residential concrete work and larger commercial or industrial pours with practical crews, clear communication, and quote-ready project intake.",
  primaryCtaText: "Request a Quote",
  primaryCtaLink: "/contact",
  secondaryCtaText: "View Projects",
  secondaryCtaLink: "/projects",
  heroImage: {
    src: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1800&auto=format&fit=crop",
    alt: "Concrete construction crew working on a jobsite",
  },
  whyChooseUsItems: [
    {
      title: "Residential and commercial support",
      description: "One site can explain driveway, patio, garage pad, commercial, and industrial capabilities clearly.",
    },
    {
      title: "Quote-first experience",
      description: "Every major page points visitors toward a simple project detail form or direct phone contact.",
    },
    {
      title: "Owner-editable content",
      description: "Services, projects, contact info, images, and SEO fields are prepared for Sanity updates.",
    },
  ],
};

export const services = [
  {
    title: "Concrete Pumping",
    slug: "concrete-pumping",
    category: "Commercial",
    shortDescription: "Pumping coordination for pours where access, reach, or jobsite timing matters.",
    fullDescription:
      "Concrete pumping content is ready to be edited in Sanity with specific equipment notes, reach details, project types, and confirmed service areas.",
    heroImage: {
      src: "https://images.unsplash.com/photo-1590496793929-36417d3117de?q=80&w=1600&auto=format&fit=crop",
      alt: "Concrete pump truck on a construction site",
    },
    benefits: ["Better access on tight sites", "Cleaner pour coordination", "Useful for residential and commercial work"],
    processSteps: ["Share project details", "Confirm site access and timing", "Coordinate pour support"],
    faqs: [
      {
        question: "Can A&P help with tight access pours?",
        answer: "Add confirmed equipment and access details in Sanity once the owner verifies capabilities.",
      },
    ],
  },
  {
    title: "Concrete Placing",
    slug: "concrete-placing",
    category: "Commercial",
    shortDescription: "Crew support for residential, commercial, and industrial concrete placing.",
    fullDescription:
      "Use this page to describe placing crews, manpower support, commercial pours, and jobsite coordination once owner-approved details are available.",
    heroImage: {
      src: "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?q=80&w=1600&auto=format&fit=crop",
      alt: "Construction workers placing concrete",
    },
    benefits: ["Crew support", "Pour coordination", "Scales from smaller jobs to larger sites"],
    processSteps: ["Review scope", "Schedule crew support", "Complete pour coordination"],
    faqs: [],
  },
  {
    title: "Concrete Finishing",
    slug: "concrete-finishing",
    category: "Residential",
    shortDescription: "Finishing support for driveways, patios, garage pads, slabs, and larger flatwork.",
    fullDescription:
      "Concrete finishing content should be updated in Sanity with real finish types, project photos, and owner-approved quality statements.",
    heroImage: {
      src: "https://images.unsplash.com/photo-1621905251918-48416bd8575a?q=80&w=1600&auto=format&fit=crop",
      alt: "Fresh concrete slab being finished",
    },
    benefits: ["Clean surfaces", "Residential flatwork support", "Commercial slab support"],
    processSteps: ["Confirm finish requirements", "Prepare for pour day", "Finish and review work"],
    faqs: [],
  },
  {
    title: "Driveways, Patios, and Garage Pads",
    slug: "residential-concrete",
    category: "Residential",
    shortDescription: "Prep, placing, and finishing support for common residential concrete projects.",
    fullDescription:
      "Residential content should include owner-approved service areas, photo examples, and any specific prep or finishing options.",
    heroImage: {
      src: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1600&auto=format&fit=crop",
      alt: "Residential driveway and garage exterior",
    },
    benefits: ["Driveway work", "Patio work", "Garage pad prep and finishing"],
    processSteps: ["Send project details", "Confirm location and timeline", "Prepare quote"],
    faqs: [],
  },
  {
    title: "Concrete Manpower",
    slug: "concrete-manpower",
    category: "Industrial",
    shortDescription: "Crew and manpower support for larger commercial and industrial concrete jobs.",
    fullDescription:
      "This page is prepared for owner-confirmed manpower, crew size, safety, and subcontractor support details.",
    heroImage: {
      src: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=1600&auto=format&fit=crop",
      alt: "Construction crew working on a commercial jobsite",
    },
    benefits: ["Extra jobsite support", "Commercial project help", "Industrial project help"],
    processSteps: ["Describe crew needs", "Confirm schedule", "Coordinate support"],
    faqs: [],
  },
];

export const projects = [
  {
    title: "Residential Concrete Project",
    slug: "residential-concrete-project",
    projectType: "Residential",
    location: "Owner-confirmed location pending",
    description: "Add real project photos, descriptions, and service details in Sanity.",
    featuredImage: {
      src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1600&auto=format&fit=crop",
      alt: "Residential exterior concrete project",
    },
    isFeatured: true,
  },
  {
    title: "Commercial Concrete Support",
    slug: "commercial-concrete-support",
    projectType: "Commercial",
    location: "Owner-confirmed location pending",
    description: "Use Sanity to publish verified commercial project examples.",
    featuredImage: {
      src: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1600&auto=format&fit=crop",
      alt: "Commercial concrete construction site",
    },
    isFeatured: true,
  },
  {
    title: "Concrete Pumping Coordination",
    slug: "concrete-pumping-coordination",
    projectType: "Concrete Pumping",
    location: "Owner-confirmed location pending",
    description: "Replace this placeholder with a real pumping project once approved.",
    featuredImage: {
      src: "https://images.unsplash.com/photo-1590247813693-5541d1c609fd?q=80&w=1600&auto=format&fit=crop",
      alt: "Concrete equipment on a construction site",
    },
    isFeatured: false,
  },
];
