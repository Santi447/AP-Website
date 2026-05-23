# Technical Architecture

## Recommended Stack

- Next.js
- TypeScript
- Tailwind CSS
- Sanity CMS
- Supabase
- Resend
- Vercel

## Frontend

The frontend should be built with Next.js and TypeScript.

Use:

- Server components where practical.
- Static generation for CMS-driven marketing pages.
- ISR or on-demand revalidation for CMS updates.
- Client components only when interactivity is required.

## CMS

Use Sanity CMS for owner-editable website content.

CMS-controlled content should include:

- Site settings
- Homepage content
- Services
- Projects/gallery
- Testimonials
- Service areas
- Blog/resource posts
- SEO metadata

## Lead Handling

Quote request flow:

1. User submits quote form.
2. Frontend sends request to a Next.js API route or server action.
3. Server validates input.
4. Server checks spam protection.
5. Server saves lead to Supabase.
6. Server sends email notification using Resend.
7. User sees success message.

## Hosting

Recommended:

- Vercel for Next.js
- Sanity hosted CMS
- Supabase hosted database
- Resend for transactional email

## Image Handling

Use Sanity for CMS images.

Requirements:

- Use Next.js Image where possible.
- Use Sanity image URL builder.
- Use alt text from CMS.
- Lazy load gallery images.
- Avoid loading full-resolution images unnecessarily.

## Data Fetching

Use a clean Sanity client module.

Recommended folder examples:

```text
/src/sanity/client.ts
/src/sanity/queries.ts
/src/sanity/image.ts
```

Avoid scattering GROQ queries across many components.

## Suggested Project Structure

```text
/src
  /app
    /(site)
      /page.tsx
      /services
      /projects
      /about
      /contact
      /service-areas
      /resources
    /api
      /quote
        /route.ts
  /components
    /layout
    /sections
    /cards
    /forms
    /seo
    /ui
  /lib
    /env.ts
    /validation.ts
    /resend.ts
    /supabase.ts
  /sanity
    /client.ts
    /queries.ts
    /image.ts
/sanity
  /schemas
```

Claude should adapt this to the existing codebase instead of forcing this exact structure if the existing project is already organized well.

## Security Requirements

- Validate all quote form inputs server-side.
- Never expose private API keys.
- Store secrets in environment variables.
- Add spam protection.
- Add rate limiting if possible.
- Keep CMS permissions limited.
- Do not allow arbitrary file uploads without restrictions.

## Performance Requirements

- Optimize images.
- Use static rendering where possible.
- Avoid unnecessary JavaScript.
- Keep animations minimal.
- Make pages fast on mobile.
- Use semantic HTML.
