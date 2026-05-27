import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Footer from "../../../components/Footer";
import Navbar from "../../../components/Navbar";
import ProjectCard from "../../../components/cards/ProjectCard";
import { services, siteSettings } from "../../../lib/fallbackData";
import { imageAlt, imageSource } from "../../../sanity/image";
import { sanityFetch } from "../../../sanity/client";
import { serviceBySlugQuery, servicesQuery, siteSettingsQuery } from "../../../sanity/queries";

export async function generateStaticParams() {
  const serviceItems = await sanityFetch(servicesQuery, {}, services);
  return serviceItems.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const fallback = services.find((service) => service.slug === slug);
  const service = await sanityFetch(serviceBySlugQuery, { slug }, fallback);

  if (!service) {
    return {};
  }

  return {
    title: service.seoTitle || service.title,
    description: service.seoDescription || service.shortDescription,
  };
}

export default async function ServiceDetail({ params }) {
  const { slug } = await params;
  const fallback = services.find((service) => service.slug === slug);
  const service = await sanityFetch(serviceBySlugQuery, { slug }, fallback);
  const settings = await sanityFetch(siteSettingsQuery, {}, siteSettings);

  if (!service) {
    notFound();
  }

  const image = imageSource(service.heroImage, fallback?.heroImage);

  return (
    <div className="min-h-screen bg-background text-on-background">
      <Navbar settings={settings} />
      <main className="pt-20">
        <section className="grid grid-cols-1 bg-surface-container-low lg:grid-cols-2">
          <div className="px-6 py-20 md:px-12 lg:px-20">
            <p className="mb-6 text-sm font-bold uppercase tracking-[0.3em] text-primary">{service.category || "Concrete Service"}</p>
            <h1 className="mb-8 font-headline text-5xl font-black leading-tight tracking-tight md:text-7xl">{service.title}</h1>
            <p className="mb-10 max-w-2xl text-xl leading-relaxed text-secondary">{service.shortDescription}</p>
            <Link href="/contact" className="rounded bg-primary px-8 py-4 font-headline font-bold text-on-primary shadow-xl transition-colors hover:bg-primary-container">
              Request a Quote
            </Link>
          </div>
          <div className="relative min-h-[420px]">
            {image ? (
              <Image src={image} alt={imageAlt(service.heroImage, service.title)} fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
            ) : null}
          </div>
        </section>

        <section className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 py-20 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <h2 className="mb-6 font-headline text-3xl font-black">Service Overview</h2>
            <p className="text-lg leading-relaxed text-secondary">{service.fullDescription || service.shortDescription}</p>
          </div>
          <aside className="rounded-lg bg-surface-container-lowest p-8 shadow-sm lg:col-span-5">
            <h2 className="mb-6 font-headline text-2xl font-black">Useful For</h2>
            <ul className="space-y-4">
              {(service.benefits || []).map((benefit) => (
                <li key={benefit} className="border-l-4 border-primary pl-4 font-bold text-secondary">{benefit}</li>
              ))}
            </ul>
          </aside>
        </section>

        {service.processSteps?.length ? (
          <section className="bg-surface-container-highest py-20">
            <div className="mx-auto max-w-7xl px-6">
              <h2 className="mb-10 font-headline text-4xl font-black">Quote Process</h2>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                {service.processSteps.map((step, index) => (
                  <article key={step} className="rounded-lg bg-white p-8 shadow-sm">
                    <p className="mb-4 text-4xl font-black text-primary">{String(index + 1).padStart(2, "0")}</p>
                    <p className="font-bold text-secondary">{step}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>
        ) : null}

        {service.relatedProjects?.length ? (
          <section className="mx-auto max-w-7xl px-6 py-20">
            <h2 className="mb-10 font-headline text-4xl font-black">Related Projects</h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {service.relatedProjects.map((project) => <ProjectCard key={project.slug} project={project} />)}
            </div>
          </section>
        ) : null}
      </main>
      <Footer settings={settings} />
    </div>
  );
}
