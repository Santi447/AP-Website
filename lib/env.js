export function getSiteUrl() {
  return process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
}

export function hasSanityConfig() {
  return Boolean(process.env.NEXT_PUBLIC_SANITY_PROJECT_ID && process.env.NEXT_PUBLIC_SANITY_DATASET);
}

export function hasSupabaseServerConfig() {
  return Boolean(process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.SUPABASE_SERVICE_ROLE_KEY);
}

export function hasResendConfig() {
  return Boolean(process.env.RESEND_API_KEY && process.env.QUOTE_NOTIFICATION_EMAIL && process.env.QUOTE_FROM_EMAIL);
}
