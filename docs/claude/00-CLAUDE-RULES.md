# Claude Code Rules for A&P Concrete Website

## Core Rule

Do not treat this as a one-prompt website generation task. This project must be built in controlled phases.

## Before Writing Code

Claude must first:

1. Read all files in `/docs/claude`.
2. Audit the existing Next.js project.
3. Identify the current routing structure.
4. Identify hardcoded content.
5. Identify reusable components.
6. Identify current styling conventions.
7. Identify what should become CMS-controlled.
8. Provide a written implementation plan.
9. Wait for developer approval before making large structural changes.

## Implementation Rules

- Do not rewrite the entire project unless the audit proves it is necessary.
- Preserve existing working UI where reasonable.
- Prefer incremental refactors.
- Use TypeScript.
- Keep components reusable and readable.
- Avoid overengineering.
- Avoid unnecessary animations.
- Prioritize mobile usability.
- Prioritize SEO, performance, and lead generation.
- Keep business content editable through the CMS where appropriate.
- Keep layout, logic, forms, schema, and security developer-controlled.
- Do not hardcode service content that belongs in the CMS.
- Do not expose secret environment variables to the browser.
- Do not create fake APIs or placeholder production logic without clearly marking them.

## Development Style

When making changes, Claude should work in this order:

1. Explain the specific change.
2. Modify the minimum required files.
3. Keep changes focused.
4. Run or suggest relevant checks.
5. Summarize what changed.
6. List any follow-up tasks.

## Do Not Do

- Do not create a full website from scratch in one response.
- Do not add random libraries without explaining why.
- Do not use fake testimonials as if they are real.
- Do not invent business addresses, phone numbers, or certifications.
- Do not add SEO pages for cities unless the service areas are confirmed.
- Do not create admin functionality outside the CMS unless requested.
- Do not store quote form submissions only in email if database storage is part of the phase.
- Do not skip validation on forms.
- Do not skip accessibility basics.

## Required Production Mindset

This website is for a real concrete pumping, placing, and finishing business. It should be maintainable, easy for the owner to update, and optimized to convert visitors into quote requests.
