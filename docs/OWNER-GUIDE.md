# A&P Concrete Website Owner Guide

## How to Log In

Open `/studio` on the website and sign in with the Sanity account provided by the developer. Do not store passwords in this repository.

## Updating Homepage Content

In Sanity, open **Homepage**. Update the hero headline, subheadline, hero image, CTA text, featured services, featured projects, and why-choose-us items. Publish when finished.

## Adding a Project

Open **Project** and create a new project. Add the title, project type, owner-confirmed location, description, featured image, gallery images, services used, and featured setting. Add clear alt text for every important image, then publish.

## Editing Services

Open **Service**. Edit the title, short description, full description, category, benefits, process steps, FAQs, service image, and SEO title or description. Use only owner-approved service details.

## Adding Testimonials

Open **Testimonial**. Add only real testimonials from customers. Include customer name, customer type, quote, optional rating, related service, and whether it should show on the homepage.

## Updating Contact Info

Open **Site Settings**. Update the phone number, email, general location, service area summary, social links, logo, and default SEO fields.

## Quote Request Workflow

Visitors submit the quote form on the Contact page. The site validates the request server-side. If Supabase is configured, the lead is stored in the `quote_requests` table. If Resend is configured, an email notification is sent to the configured owner email.

If quote emails stop arriving, check the Resend account, sender verification, `QUOTE_NOTIFICATION_EMAIL`, and spam folder.

## Image Best Practices

Use clear project photos. Avoid blurry, dark, unrelated, or heavily cropped images. Add descriptive alt text such as "Concrete driveway finishing project" instead of "image1".

## What Not to Edit

Do not edit code, environment variables, API keys, deployment settings, database schema, or form processing logic unless a developer asks you to.
