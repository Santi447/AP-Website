# Codebase Audit Instructions

Before implementing production features, Claude must audit the existing Next.js project.

## Required Audit Output

Claude must provide a written audit covering the following.

## 1. Project Setup

Identify:

- Next.js version
- React version
- TypeScript usage
- App Router or Pages Router
- Package manager
- Styling approach
- Existing dependencies
- Current build scripts

## 2. Current Routing

List all existing routes/pages.

For each route, identify:

- File path
- Purpose
- Whether it should remain
- Whether content is hardcoded
- Whether it needs CMS integration

## 3. Component Structure

Identify:

- Layout components
- Navbar/header
- Footer
- Hero sections
- Service cards
- Gallery components
- Contact/CTA components
- Form components
- Shared UI components

## 4. Styling

Identify:

- Tailwind usage
- CSS modules
- Global CSS
- Component-level styles
- Design consistency issues
- Responsive issues

## 5. Content Audit

Identify content that should become CMS-controlled:

- Homepage hero text
- Homepage hero images
- Service text
- Gallery images
- Project descriptions
- Testimonials
- About page content
- Contact information
- Service areas
- SEO metadata

## 6. SEO Audit

Identify current support for:

- Metadata
- Page titles
- Meta descriptions
- Open Graph
- Sitemap
- Robots.txt
- Semantic headings
- Alt text
- Schema markup

## 7. Form Audit

Identify:

- Existing forms
- Validation
- API routes
- Email sending
- Database storage
- Spam protection
- Error states
- Success states

## 8. Production Risk Audit

Identify anything that could block production:

- Broken routes
- Missing environment variables
- Hardcoded secrets
- Poor mobile behavior
- Unoptimized images
- Missing validation
- Accessibility issues
- Deployment problems

## Required Claude Response Format

Claude should respond with:

```md
# Audit Summary

## Current Project Structure

## What Is Working

## What Needs Refactoring

## What Should Become CMS-Controlled

## SEO Gaps

## Form / Lead Gaps

## Production Risks

## Recommended Implementation Plan

## Files Likely To Change
```

Claude must not begin implementation until this audit is complete.
