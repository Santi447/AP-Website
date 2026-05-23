# SEO and Local Search Strategy

## SEO Goal

The website should rank for local concrete service searches and convert visitors into quote requests.

## Main Keyword Themes

Use local keywords naturally. Do not keyword-stuff.

Target keyword examples:

- concrete pumping [city]
- concrete placing [city]
- concrete finishing [city]
- concrete driveway [city]
- concrete patio [city]
- garage concrete slab [city]
- commercial concrete placing [city]
- industrial concrete finishing [city]
- concrete manpower [city]
- concrete crew support [city]

Replace `[city]` with confirmed target service areas.

## Page-Level SEO Requirements

Every important page should have:

- Unique title
- Unique meta description
- One clear H1
- Clean URL
- Proper heading structure
- Internal links
- CTA
- Image alt text
- Open Graph metadata where useful

## Required Technical SEO

Claude should implement or verify:

- `sitemap.xml`
- `robots.txt`
- Metadata generation
- Canonical URLs
- Open Graph image support
- Proper semantic HTML
- Accessible buttons and links
- Fast image loading
- Mobile responsive pages

## Schema Markup

Add structured data where appropriate.

Recommended schema types:

- LocalBusiness
- Service
- FAQPage
- BreadcrumbList

Do not invent business address, exact coordinates, or certifications.

Use placeholders or omit fields until real information is confirmed.

## Image SEO

Every important image from CMS should have alt text.

Good alt text examples:

- Concrete driveway finishing project in Calgary
- Garage pad concrete prep and finishing
- Commercial concrete placing crew on jobsite
- Concrete patio finishing project

Bad alt text examples:

- image1
- concrete pic
- photo
- upload

## Local SEO Requirements

A&P should eventually connect the website with:

- Google Business Profile
- Google Search Console
- Google Analytics 4

Recommended website elements:

- Phone number in header/footer
- Service areas in footer
- Contact page with clear service area summary
- Consistent business name
- Project photos
- Review/testimonial section

## Service Area Page Rule

Only create service area pages for confirmed locations.

Do not generate dozens of city pages with thin duplicated content.

Each service area page should be useful and specific enough to avoid feeling spammy.

## SEO Implementation Notes for Claude

Claude should:

1. Add reusable metadata helpers.
2. Pull SEO title/description from CMS where available.
3. Fall back to site defaults when page SEO fields are empty.
4. Generate sitemap entries for CMS pages.
5. Ensure dynamic service/project/service-area pages are indexable.
6. Avoid noindex unless explicitly needed.
