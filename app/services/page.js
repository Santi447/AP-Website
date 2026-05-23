import Link from "next/link";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import ServiceCard from "../../components/cards/ServiceCard";
import { services, siteSettings } from "../../lib/fallbackData";
import { sanityFetch } from "../../sanity/client";
import { servicesQuery, siteSettingsQuery } from "../../sanity/queries";

export const metadata = {
  title: "Concrete Services",
  description: "Concrete pumping, placing, finishing, residential flatwork, commercial support, industrial support, and concrete manpower.",
};

export default async function Services() {
  const settings = await sanityFetch(siteSettingsQuery, {}, siteSettings);
  const serviceItems = await sanityFetch(servicesQuery, {}, services);

  return (
    <div className="min-h-screen bg-background text-on-background selection:bg-primary-container selection:text-on-background">
      <Navbar />
      <main className="pt-20">
        <section className="relative overflow-hidden bg-surface-container-low py-24">
          <div className="structural-grain absolute inset-0 pointer-events-none" />
          <div className="relative z-10 mx-auto max-w-7xl px-6">
            <p className="mb-6 inline-block rounded-full bg-secondary-container px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-secondary">
              Services
            </p>
            <h1 className="mb-8 max-w-5xl font-headline text-5xl font-black leading-[0.95] tracking-tight text-on-surface md:text-7xl">
              Concrete services for residential, commercial, and industrial jobs.
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed text-secondary">
              These pages are prepared for owner-editable Sanity content, real project photos, service-specific SEO, and clear quote calls to action.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {serviceItems.map((service) => <ServiceCard key={service.slug} service={service} />)}
          </div>
        </section>

        <section className="bg-[#021f29] py-24">
          <div className="mx-auto max-w-4xl px-6 text-center">
            <h2 className="mb-8 font-headline text-5xl font-black tracking-tight text-white">Ready to price the work?</h2>
            <p className="mx-auto mb-10 max-w-2xl text-xl text-white/70">Send the job details and A&P can follow up with the next step.</p>
            <Link href="/contact" className="rounded bg-primary px-10 py-5 font-headline text-lg font-black uppercase tracking-widest text-on-primary shadow-xl transition-colors hover:bg-primary-container">
              Request a Custom Quote
            </Link>
          </div>
        </section>
      </main>
      <Footer settings={settings} />
    </div>
  );
}
