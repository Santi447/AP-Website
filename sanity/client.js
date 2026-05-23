import { createClient } from "next-sanity";
import { hasSanityConfig } from "../lib/env";

export const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2026-05-21";
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "missing-project-id";
const token = typeof window === "undefined" ? process.env.SANITY_API_READ_TOKEN : undefined;

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  token,
  useCdn: !token,
});

export async function sanityFetch(query, params = {}, fallback = null) {
  if (!hasSanityConfig()) {
    return fallback;
  }

  try {
    const data = await client.fetch(query, params);
    return data ?? fallback;
  } catch (error) {
    console.warn("Sanity fetch failed, using fallback content.", error);
    return fallback;
  }
}
