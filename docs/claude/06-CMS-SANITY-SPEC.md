# Sanity CMS Specification

## CMS Goal

The CMS should allow the owner to update website content without needing a developer for basic changes.

## Owner Should Be Able To Edit

- Homepage content
- Homepage images
- Services
- Project/gallery photos
- Project descriptions
- Testimonials
- Contact information
- Service areas
- Blog/resource posts
- SEO titles and descriptions

## Owner Should Not Directly Control

- Website layout
- Form processing logic
- API keys
- Database schema
- Authentication rules
- Core SEO schema code
- Deployment settings

## Required Sanity Documents

### 1. Site Settings

Purpose:

Global business information used across the website.

Fields:

- businessName
- phoneNumber
- email
- generalLocation
- serviceAreaSummary
- logo
- footerLogo
- facebookUrl
- instagramUrl
- googleBusinessProfileUrl
- defaultSeoTitle
- defaultSeoDescription

### 2. Homepage

Purpose:

Editable homepage content.

Fields:

- heroHeadline
- heroSubheadline
- heroImage
- primaryCtaText
- primaryCtaLink
- secondaryCtaText
- secondaryCtaLink
- featuredServices
- featuredProjects
- residentialSectionTitle
- residentialSectionBody
- commercialSectionTitle
- commercialSectionBody
- whyChooseUsItems

### 3. Service

Purpose:

Individual CMS-driven service pages.

Fields:

- title
- slug
- shortDescription
- fullDescription
- category
- heroImage
- galleryImages
- benefits
- processSteps
- faqs
- relatedProjects
- seoTitle
- seoDescription

Allowed category values:

- Residential
- Commercial
- Industrial

### 4. Project

Purpose:

Gallery and project portfolio content.

Fields:

- title
- slug
- projectType
- location
- completionDate
- description
- featuredImage
- images
- servicesUsed
- isFeatured

Recommended project type values:

- Driveway
- Patio
- Garage Pad
- Concrete Pumping
- Concrete Placing
- Concrete Finishing
- Commercial
- Industrial

### 5. Testimonial

Purpose:

Customer proof and trust.

Fields:

- customerName
- customerType
- quote
- rating
- relatedService
- displayOnHomepage

Do not invent testimonials. Use only real owner-provided testimonials.

### 6. Service Area

Purpose:

Local SEO pages.

Fields:

- name
- slug
- intro
- servicesOffered
- seoTitle
- seoDescription

Do not create service area pages until real target areas are confirmed.

### 7. Resource / Blog Post

Purpose:

Optional long-term SEO content.

Fields:

- title
- slug
- author
- publishedAt
- featuredImage
- body
- relatedServices
- seoTitle
- seoDescription

## Required CMS UX

Sanity Studio should be owner-friendly.

Use:

- Clear field names
- Descriptions for confusing fields
- Validation for required fields
- Slug generation from title
- Image alt text fields
- Preview fields where useful

## Example Implementation Tasks for Claude

1. Install and configure Sanity.
2. Create schema files for each document type.
3. Create a schema index.
4. Add Sanity client helper.
5. Add GROQ queries.
6. Replace hardcoded content gradually.
7. Add image URL helper.
8. Add TypeScript types if appropriate.
9. Add preview or draft mode only if needed after MVP.
