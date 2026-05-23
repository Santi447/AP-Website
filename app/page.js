import Image from "next/image";
import Link from "next/link";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ProjectCard from "../components/cards/ProjectCard";
import ServiceCard from "../components/cards/ServiceCard";
import { homepageContent, projects, services, siteSettings } from "../lib/fallbackData";
import { imageAlt, imageSource } from "../sanity/image";
import { sanityFetch } from "../sanity/client";
import { homepageQuery, projectsQuery, servicesQuery, siteSettingsQuery } from "../sanity/queries";

export default async function Home() {
  const settings = await sanityFetch(siteSettingsQuery, {}, siteSettings);
  const homepage = await sanityFetch(homepageQuery, {}, homepageContent);
  const serviceItems = homepage?.featuredServices?.length ? homepage.featuredServices : await sanityFetch(servicesQuery, {}, services);
  const projectItems = homepage?.featuredProjects?.length ? homepage.featuredProjects : await sanityFetch(projectsQuery, {}, projects);
  const heroImage = imageSource(homepage.heroImage, homepageContent.heroImage);

  return (
    <div className="min-h-screen bg-surface text-on-surface selection:bg-primary/30">
      <Navbar />
      <main>
        <section className="relative overflow-hidden bg-surface pt-20">
          <div className="concrete-texture absolute inset-0 pointer-events-none" />
          <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 py-24 md:py-32 lg:grid-cols-12">
            <div className="z-10 lg:col-span-7">
              <p className="mb-6 inline-block rounded-full bg-secondary-container px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-secondary">
                Concrete Services
              </p>
              <h1 className="mb-8 font-headline text-5xl font-black leading-[0.95] tracking-tight text-on-surface md:text-7xl">
                {homepage.heroHeadline}
              </h1>
              <p className="mb-10 max-w-xl text-xl leading-relaxed text-secondary">{homepage.heroSubheadline}</p>
              <div className="flex flex-wrap gap-4">
                <Link href={homepage.primaryCtaLink || "/contact"} className="rounded bg-primary px-8 py-4 font-headline font-bold text-on-primary shadow-xl transition-colors hover:bg-primary-container">
                  {homepage.primaryCtaText || "Request a Quote"}
                </Link>
                <Link href={homepage.secondaryCtaLink || "/projects"} className="rounded border-2 border-outline-variant px-8 py-4 font-headline font-bold text-on-surface transition-all hover:bg-surface-container-low">
                  {homepage.secondaryCtaText || "View Projects"}
                </Link>
              </div>
            </div>
            <div className="relative lg:col-span-5">
              <div className="relative h-[420px] overflow-hidden rounded-lg shadow-2xl md:h-[520px]">
                {heroImage ? (
                  <Image src={heroImage} alt={imageAlt(homepage.heroImage, homepageContent.heroImage.alt)} fill priority sizes="(min-width: 1024px) 40vw, 100vw" className="object-cover" />
                ) : null}
                <div className="absolute inset-0 bg-gradient-to-t from-on-background/60 to-transparent" />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-surface-container-low py-20">
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-0 border border-outline-variant/30 bg-surface-container-lowest px-0 md:grid-cols-3">
            {(homepage.whyChooseUsItems || homepageContent.whyChooseUsItems).map((item) => (
              <article key={item.title} className="border-b border-outline-variant/30 p-10 md:border-b-0 md:border-r last:md:border-r-0">
                <h2 className="mb-4 font-headline text-2xl font-bold">{item.title}</h2>
                <p className="leading-relaxed text-secondary">{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-24">
          <div className="mb-14 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-primary">Core Services</p>
              <h2 className="font-headline text-4xl font-black tracking-tight md:text-5xl">Built for the work A&P does.</h2>
            </div>
            <Link href="/services" className="font-headline font-bold text-primary">View all services</Link>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {serviceItems.slice(0, 3).map((service) => <ServiceCard key={service.slug} service={service} />)}
          </div>
        </section>

        <section className="bg-surface-container-highest py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mb-14 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-primary">Project Proof</p>
                <h2 className="font-headline text-4xl font-black tracking-tight md:text-5xl">Real projects belong here.</h2>
              </div>
              <Link href="/projects" className="font-headline font-bold text-primary">View projects</Link>
            </div>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {projectItems.slice(0, 3).map((project, index) => <ProjectCard key={project.slug} project={project} featured={index === 0} />)}
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden py-28">
          <div className="absolute inset-0 bg-[#021f29]" />
          <div className="concrete-texture absolute inset-0" />
          <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
            <h2 className="mb-8 font-headline text-5xl font-black leading-tight tracking-tight text-white md:text-6xl">Send project details and get the quote process moving.</h2>
            <p className="mx-auto mb-10 max-w-2xl text-xl text-white/70">Use the quote form for residential, commercial, or industrial concrete work.</p>
            <div className="flex flex-col items-center justify-center gap-5 md:flex-row">
              <Link href="/contact" className="rounded bg-primary px-10 py-5 font-headline text-lg font-black text-on-primary shadow-xl transition-colors hover:bg-primary-container">
                Request a Quote
              </Link>
              <a className="font-headline font-bold text-white transition-colors hover:text-primary" href={settings.phoneHref || siteSettings.phoneHref}>
                {settings.phoneNumber}
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer settings={settings} />
    </div>
  );
}
