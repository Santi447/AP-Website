# Implementation Phases

## Phase 0: Audit

Goal:

Understand the current Next.js project before making changes.

Tasks:

- Complete codebase audit.
- Identify hardcoded content.
- Identify reusable components.
- Identify routing structure.
- Identify SEO gaps.
- Identify form gaps.
- Propose implementation plan.

Deliverable:

- Written audit and implementation plan.

No large code changes should happen in this phase.

## Phase 1: Foundation Cleanup

Goal:

Prepare the project for production features.

Tasks:

- Clean project structure where needed.
- Standardize layout components.
- Standardize shared sections.
- Confirm route structure.
- Improve basic responsive issues.
- Add environment variable validation helper if needed.

Deliverable:

- Cleaner project foundation without changing core design unnecessarily.

## Phase 2: Sanity CMS Setup

Goal:

Add owner-editable content management.

Tasks:

- Install Sanity dependencies.
- Configure Sanity client.
- Add Sanity Studio.
- Create schemas.
- Add sample content.
- Add image helper.
- Add CMS queries.

Deliverable:

- Working Sanity CMS with schemas for site settings, homepage, services, projects, testimonials, service areas, and resources.

## Phase 3: CMS Frontend Integration

Goal:

Replace hardcoded content with CMS-driven content.

Tasks:

- Connect homepage to CMS.
- Connect services to CMS.
- Add dynamic service pages.
- Connect projects/gallery to CMS.
- Add dynamic project pages if needed.
- Connect testimonials.
- Connect site settings.

Deliverable:

- Owner can control core website content through Sanity.

## Phase 4: Lead Generation System

Goal:

Make the website generate and store leads.

Tasks:

- Build quote form UI.
- Add server-side validation.
- Add Supabase lead storage.
- Add Resend email notifications.
- Add spam protection.
- Add success/error states.

Deliverable:

- Production-ready quote form flow.

## Phase 5: SEO and Local Optimization

Goal:

Make the website indexable and optimized for local service searches.

Tasks:

- Add metadata helpers.
- Add dynamic metadata from CMS.
- Add sitemap.
- Add robots.txt.
- Add schema markup.
- Add image alt text support.
- Check heading structure.
- Add internal links.

Deliverable:

- SEO-ready site structure.

## Phase 6: Production Hardening

Goal:

Make the site ready for deployment.

Tasks:

- Check build errors.
- Check TypeScript errors.
- Check responsive layout.
- Check empty states.
- Check error states.
- Check form validation.
- Check environment variables.
- Check performance.
- Check accessibility basics.

Deliverable:

- Production deployment candidate.

## Phase 7: Owner Handoff

Goal:

Make sure the owner can use the CMS.

Tasks:

- Create owner editing guide.
- Explain how to add projects.
- Explain how to update images.
- Explain how to edit services.
- Explain how to update contact info.
- Explain quote form lead flow.

Deliverable:

- Owner handoff documentation.
