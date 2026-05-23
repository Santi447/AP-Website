# Quote Form and Lead Generation Specification

## Goal

The quote form should make it easy for residential, commercial, and industrial customers to contact A&P.

## Primary Calls to Action

Use CTAs such as:

- Request a Quote
- Call Now
- Send Project Details
- View Our Work

## Form Locations

Quote CTAs should appear:

- Header
- Homepage hero
- Services section
- Service pages
- Projects page
- Contact page
- Footer
- Sticky mobile CTA if appropriate

## Main Quote Form Fields

Recommended fields:

- name
- phone
- email
- customerType
- serviceNeeded
- projectLocation
- timeline
- message
- photoUpload optional, can be later phase

## Customer Type Options

- Residential
- Commercial
- Industrial
- Not sure

## Service Needed Options

- Concrete pumping
- Concrete placing
- Concrete finishing
- Driveway
- Patio
- Garage pad
- Commercial concrete
- Industrial concrete
- Manpower / crew support
- Not sure

## Validation Rules

Server-side validation is required.

Minimum validation:

- name required
- phone or email required
- message required
- serviceNeeded required
- email must be valid if provided
- phone should have basic validation if provided
- message should have max length
- reject obvious spam

## Spam Protection

Recommended MVP protection:

- Honeypot field
- Cloudflare Turnstile
- Basic rate limiting if practical

## Lead Storage

Use Supabase to store quote requests.

Suggested table: `quote_requests`

Suggested columns:

- id
- created_at
- name
- phone
- email
- customer_type
- service_needed
- project_location
- timeline
- message
- source_page
- status

Suggested status values:

- new
- contacted
- quoted
- won
- lost
- spam

## Email Notifications

Use Resend to email the owner when a quote request is submitted.

Email should include:

- Name
- Phone
- Email
- Customer type
- Service needed
- Project location
- Timeline
- Message
- Source page
- Submission time

## User Experience

After successful submit:

- Show a clear success message.
- Tell user A&P received the request.
- Suggest calling if urgent.

After error:

- Show a helpful error message.
- Do not expose internal error details.

## API Requirements

Claude should create a secure server-side endpoint or server action.

Requirements:

- Validate input.
- Check spam field.
- Save to Supabase.
- Send email through Resend.
- Return safe success/error response.
- Log server errors only where appropriate.

## Do Not Do

- Do not send email directly from the browser.
- Do not expose Resend API key.
- Do not expose Supabase service role key.
- Do not accept unlimited message length.
- Do not skip server validation.
