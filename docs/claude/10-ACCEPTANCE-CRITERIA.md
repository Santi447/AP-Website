# Acceptance Criteria

## Overall Website

The website is acceptable when:

- It builds successfully.
- It works on desktop and mobile.
- Navigation is clear.
- The owner can update key content through Sanity.
- Quote requests can be submitted successfully.
- Leads are emailed to the owner.
- Leads are stored in Supabase if configured.
- Important pages have SEO metadata.
- Sitemap and robots.txt exist.
- Images are optimized.
- No secret keys are exposed.

## Homepage Acceptance Criteria

- Hero content comes from CMS or approved source.
- Hero image can be changed by owner.
- Services are clearly shown.
- Residential and commercial/industrial sections are clear.
- Featured projects can come from CMS.
- Primary CTA leads to quote/contact.
- Page has metadata.

## Services Acceptance Criteria

- Services overview page exists.
- Individual service pages exist for approved services.
- Service pages use CMS content.
- Service pages have CTAs.
- Service pages have metadata.
- Related projects can be displayed where available.

## Projects Acceptance Criteria

- Projects/gallery page exists.
- Owner can add projects in CMS.
- Owner can upload project images.
- Projects can be marked featured.
- Project images have alt text.
- Page is mobile friendly.

## Contact / Quote Acceptance Criteria

- Quote form exists.
- Form validates required fields.
- User gets success/error feedback.
- Form does not expose secrets.
- Owner receives email notification.
- Lead is stored in Supabase if database is configured.
- Spam protection exists.

## CMS Acceptance Criteria

- Sanity Studio is available.
- Schemas are clear and owner-friendly.
- Required fields have validation.
- Slugs can be generated.
- Images support alt text.
- Site settings are editable.

## SEO Acceptance Criteria

- Every main page has a title and description.
- Dynamic CMS pages can generate metadata.
- Sitemap includes static and CMS pages.
- Robots.txt exists.
- Structured data is added where appropriate.
- Page headings are semantic.
- Local keywords are used naturally.

## Performance Acceptance Criteria

- Large images are optimized.
- Gallery does not load all huge images eagerly.
- Pages are reasonably fast on mobile.
- Unnecessary client-side JavaScript is avoided.

## Accessibility Acceptance Criteria

- Buttons and links have clear labels.
- Forms have labels.
- Errors are readable.
- Images have alt text where meaningful.
- Keyboard navigation is not broken.
- Heading order is reasonable.

## Do Not Mark Complete If

- Content is still mostly hardcoded when it should be owner-editable.
- Quote form only works as a visual demo.
- Secrets are exposed to browser code.
- Service pages are missing metadata.
- Owner cannot update project photos.
- The site only works on desktop.
