import { NextResponse } from "next/server";
import { Resend } from "resend";
import { createClient } from "@supabase/supabase-js";
import { z } from "zod";
import { hasResendConfig, hasSupabaseServerConfig } from "../../../lib/env";

const quoteSchema = z
  .object({
    name: z.string().trim().min(1, "Name is required").max(120),
    phone: z.string().trim().max(40).optional().or(z.literal("")),
    email: z.string().trim().email("Email must be valid").optional().or(z.literal("")),
    customerType: z.enum(["Residential", "Commercial", "Industrial", "Not sure"]),
    serviceNeeded: z.string().trim().min(1, "Service is required").max(120),
    projectLocation: z.string().trim().max(160).optional().or(z.literal("")),
    timeline: z.string().trim().max(120).optional().or(z.literal("")),
    message: z.string().trim().min(1, "Project details are required").max(2000),
    sourcePage: z.string().trim().max(200).optional().or(z.literal("")),
    website: z.string().optional().or(z.literal("")),
  })
  .refine((data) => Boolean(data.phone || data.email), {
    message: "Phone or email is required",
    path: ["phone"],
  });

export async function POST(request) {
  let body;

  try {
    body = await request.json();
  } catch (error) {
    return NextResponse.json({ message: "Invalid request." }, { status: 400 });
  }

  const parsed = quoteSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json({ message: parsed.error.issues[0]?.message || "Please check the form." }, { status: 400 });
  }

  const lead = parsed.data;

  if (lead.website) {
    return NextResponse.json({ message: "Thanks. A&P received your project details." });
  }

  const record = {
    name: lead.name,
    phone: lead.phone || null,
    email: lead.email || null,
    customer_type: lead.customerType,
    service_needed: lead.serviceNeeded,
    project_location: lead.projectLocation || null,
    timeline: lead.timeline || null,
    message: lead.message,
    source_page: lead.sourcePage || null,
    status: "new",
  };

  try {
    if (hasSupabaseServerConfig()) {
      const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY, {
        auth: { persistSession: false },
      });
      const { error } = await supabase.from("quote_requests").insert(record);

      if (error) {
        console.error("Supabase quote insert failed:", error);
        return NextResponse.json({ message: "Could not save the request. Please call or try again." }, { status: 500 });
      }
    }

    if (hasResendConfig()) {
      const resend = new Resend(process.env.RESEND_API_KEY);
      await resend.emails.send({
        from: process.env.QUOTE_FROM_EMAIL,
        to: process.env.QUOTE_NOTIFICATION_EMAIL,
        subject: `New quote request: ${lead.serviceNeeded}`,
        text: [
          `Name: ${lead.name}`,
          `Phone: ${lead.phone || "Not provided"}`,
          `Email: ${lead.email || "Not provided"}`,
          `Customer type: ${lead.customerType}`,
          `Service needed: ${lead.serviceNeeded}`,
          `Project location: ${lead.projectLocation || "Not provided"}`,
          `Timeline: ${lead.timeline || "Not provided"}`,
          `Source page: ${lead.sourcePage || "Not provided"}`,
          "",
          lead.message,
        ].join("\n"),
      });
    }

    return NextResponse.json({
      message: "Thanks. A&P received your project details.",
      storageConfigured: hasSupabaseServerConfig(),
      emailConfigured: hasResendConfig(),
    });
  } catch (error) {
    console.error("Quote request failed:", error);
    return NextResponse.json({ message: "Something went wrong. Please call or try again." }, { status: 500 });
  }
}
