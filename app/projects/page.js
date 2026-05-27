import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import ProjectCard from "../../components/cards/ProjectCard";
import { projects, siteSettings } from "../../lib/fallbackData";
import { sanityFetch } from "../../sanity/client";
import { projectsQuery, siteSettingsQuery } from "../../sanity/queries";

export const metadata = {
  title: "Projects",
  description: "A&P Concrete project gallery prepared for owner-managed project photos, descriptions, and service links.",
};

export default async function Projects() {
  const settings = await sanityFetch(siteSettingsQuery, {}, siteSettings);
  const projectItems = await sanityFetch(projectsQuery, {}, projects);

  return (
    <div className="min-h-screen bg-background text-on-background selection:bg-primary selection:text-on-primary">
      <Navbar settings={settings} />
      <main className="pt-20">
        <section className="relative overflow-hidden bg-surface-container-low py-24">
          <div className="structural-grain absolute inset-0 pointer-events-none" />
          <div className="relative z-10 mx-auto max-w-7xl px-6">
            <p className="mb-6 inline-block rounded-full bg-secondary-container px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-secondary">
              Project Gallery
            </p>
            <h1 className="mb-8 max-w-4xl font-headline text-5xl font-black leading-[0.95] tracking-tight md:text-7xl">
              Project photos and proof, managed in Sanity.
            </h1>
            <p className="max-w-2xl text-xl leading-relaxed text-secondary">
              Replace these starter cards with owner-approved project photos, locations, descriptions, and related services.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-16">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {projectItems.map((project, index) => <ProjectCard key={project.slug} project={project} featured={index === 0} />)}
          </div>
        </section>
      </main>
      <Footer settings={settings} />
    </div>
  );
}
