# Owner Handoff Guide Requirements

Claude should create a simple owner handoff guide before the project is considered complete.

## Purpose

The owner should understand how to update the website without needing the developer for routine content changes.

## Required Owner Guide Sections

### 1. How to Log In

Explain how the owner accesses Sanity Studio.

Do not include passwords in the repository.

### 2. How to Update Homepage Content

Include:

- Hero headline
- Hero image
- CTA text if editable
- Featured projects
- Featured services

### 3. How to Add a Project

Include:

- Add project title
- Add project type
- Upload images
- Set featured image
- Add description
- Mark as featured if desired
- Publish

### 4. How to Edit Services

Include:

- Edit service title
- Edit short description
- Edit full description
- Add benefits
- Add FAQs
- Update service image
- Update SEO title/description

### 5. How to Add Testimonials

Include:

- Customer name
- Quote
- Rating if used
- Related service
- Display on homepage option

### 6. How to Update Contact Info

Include:

- Phone number
- Email
- Social links
- Service area summary

### 7. Quote Request Workflow

Explain:

- What happens when someone submits the quote form.
- Where the owner receives the email.
- Whether leads are stored in Supabase.
- What to do if quote emails stop arriving.

### 8. Image Best Practices

Explain:

- Use clear project photos.
- Avoid blurry photos.
- Upload reasonable image sizes.
- Add descriptive alt text.
- Do not upload unrelated photos.

### 9. What Not to Edit

Explain that the owner should not edit:

- Environment variables
- Code
- Deployment settings
- API keys
- Database schema

## Deliverable

Claude should create a final file such as:

```text
/docs/OWNER-GUIDE.md
```

This guide should be written for a non-technical business owner.
