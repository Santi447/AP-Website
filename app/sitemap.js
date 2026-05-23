import { getSiteUrl } from "../lib/env";
import { projects, services } from "../lib/fallbackData";
import { sanityFetch } from "../sanity/client";
import { projectsQuery, servicesQuery } from "../sanity/queries";

export default async function sitemap() {
  const siteUrl = getSiteUrl();
  const serviceItems = await sanityFetch(servicesQuery, {}, services);
  const projectItems = await sanityFetch(projectsQuery, {}, projects);

  const staticRoutes = ["", "/services", "/projects", "/contact"];
  const serviceRoutes = serviceItems.map((service) => `/services/${service.slug}`);
  const projectRoutes = projectItems.map((project) => `/projects/${project.slug}`);

  return [...staticRoutes, ...serviceRoutes, ...projectRoutes].map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
