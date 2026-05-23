import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Footer from "../../../components/Footer";
import Navbar from "../../../components/Navbar";
import { projects, siteSettings } from "../../../lib/fallbackData";
import { imageAlt, imageSource } from "../../../sanity/image";
import { sanityFetch } from "../../../sanity/client";
import { projectBySlugQuery, projectsQuery, siteSettingsQuery } from "../../../sanity/queries";

export async function generateStaticParams() {
  const projectItems = await sanityFetch(projectsQuery, {}, projects);
  return projectItems.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const fallback = projects.find((project) => project.slug === slug);
  const project = await sanityFetch(projectBySlugQuery, { slug }, fallback);

  if (!project) {
    return {};
  }

  return {
    title: project.title,
    description: project.description,
  };
}

export default async function ProjectDetail({ params }) {
  const { slug } = await params;
  const fallback = projects.find((project) => project.slug === slug);
  const project = await sanityFetch(projectBySlugQuery, { slug }, fallback);
  const settings = await sanityFetch(siteSettingsQuery, {}, siteSettings);

  if (!project) {
    notFound();
  }

  const image = imageSource(project.featuredImage, fallback?.featuredImage);
  const gallery = project.images?.length ? project.images : [];

  return (
    <div className="min-h-screen bg-background text-on-background">
      <Navbar />
      <main className="pt-20">
        <section className="grid grid-cols-1 bg-surface-container-low lg:grid-cols-2">
          <div className="px-6 py-20 md:px-12 lg:px-20">
            <p className="mb-6 text-sm font-bold uppercase tracking-[0.3em] text-primary">{project.projectType || "Project"}</p>
            <h1 className="mb-8 font-headline text-5xl font-black leading-tight tracking-tight md:text-7xl">{project.title}</h1>
            <p className="mb-4 text-secondary">{project.location}</p>
            <p className="mb-10 max-w-2xl text-xl leading-relaxed text-secondary">{project.description}</p>
            <Link href="/contact" className="rounded bg-primary px-8 py-4 font-headline font-bold text-on-primary shadow-xl transition-colors hover:bg-primary-container">
              Request Similar Work
            </Link>
          </div>
          <div className="relative min-h-[420px]">
            {image ? (
              <Image src={image} alt={imageAlt(project.featuredImage, project.title)} fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
            ) : null}
          </div>
        </section>

        {gallery.length ? (
          <section className="mx-auto max-w-7xl px-6 py-20">
            <h2 className="mb-10 font-headline text-4xl font-black">Project Images</h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {gallery.map((imageItem, index) => (
                <div key={`${project.slug}-${index}`} className="relative h-80 overflow-hidden rounded-lg">
                  <Image src={imageSource(imageItem)} alt={imageAlt(imageItem, project.title)} fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover" />
                </div>
              ))}
            </div>
          </section>
        ) : null}
      </main>
      <Footer settings={settings} />
    </div>
  );
}
