# Environment Variables

This file lists expected environment variables. Claude should adapt names to the existing project conventions where appropriate.

## Sanity

```text
NEXT_PUBLIC_SANITY_PROJECT_ID=
NEXT_PUBLIC_SANITY_DATASET=
NEXT_PUBLIC_SANITY_API_VERSION=
SANITY_API_READ_TOKEN=
SANITY_REVALIDATE_SECRET=
```

Notes:

- Public Sanity project ID and dataset can be exposed.
- Private tokens must not be exposed to browser code.

## Supabase

```text
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
```

Notes:

- The service role key must only be used server-side.
- Do not expose the service role key to the browser.

## Resend

```text
RESEND_API_KEY=
QUOTE_NOTIFICATION_EMAIL=
QUOTE_FROM_EMAIL=
```

Notes:

- `QUOTE_NOTIFICATION_EMAIL` is the owner/business email that receives quote requests.
- `QUOTE_FROM_EMAIL` should be a verified sender/domain in Resend.

## Spam Protection

If using Cloudflare Turnstile:

```text
NEXT_PUBLIC_TURNSTILE_SITE_KEY=
TURNSTILE_SECRET_KEY=
```

## Site URL

```text
NEXT_PUBLIC_SITE_URL=
```

Used for:

- Metadata
- Canonical URLs
- Sitemap
- Open Graph URLs

## Validation Requirement

Claude should create or use an environment validation helper so missing required variables are caught early.

Example behavior:

- During build or server startup, fail clearly if required production variables are missing.
- Do not fail local development for optional services unless the relevant feature is being used.
