import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import QuoteForm from "../../components/forms/QuoteForm";
import { siteSettings } from "../../lib/fallbackData";
import { sanityFetch } from "../../sanity/client";
import { siteSettingsQuery } from "../../sanity/queries";

export const metadata = {
  title: "Contact and Quote Request",
  description: "Request a quote for concrete pumping, placing, finishing, prep work, or crew support.",
};

export default async function Contact() {
  const settings = await sanityFetch(siteSettingsQuery, {}, siteSettings);

  return (
    <div className="min-h-screen bg-background text-on-background selection:bg-primary selection:text-on-primary">
      <Navbar />
      <main className="relative overflow-hidden pb-24 pt-32">
        <div className="grain-overlay absolute inset-0 z-0" />
        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <div className="mb-16">
            <p className="mb-4 block text-sm font-bold uppercase tracking-[0.2em] text-primary">{settings.businessName}</p>
            <h1 className="max-w-4xl font-headline text-5xl font-black leading-[0.95] tracking-tight text-on-surface md:text-7xl">
              Send your concrete project details.
            </h1>
          </div>

          <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12">
            <div className="relative bg-surface-container-lowest p-8 shadow-[0_32px_64px_rgba(0,0,0,0.04)] md:p-12 lg:col-span-7">
              <div className="absolute left-0 top-0 h-full w-2 bg-primary" />
              <QuoteForm sourcePage="/contact" />
            </div>

            <aside className="space-y-8 lg:col-span-5">
              <div className="bg-surface-container-low p-8 shadow-sm">
                <h2 className="mb-8 inline-block border-b-4 border-primary font-headline text-2xl font-bold">Contact</h2>
                <div className="space-y-6">
                  {settings.phoneNumber ? (
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest text-secondary">Call</p>
                      <p className="text-xl font-bold">{settings.phoneNumber}</p>
                    </div>
                  ) : null}
                  {settings.email ? (
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest text-secondary">Email</p>
                      <p className="break-all text-xl font-bold">{settings.email}</p>
                    </div>
                  ) : null}
                </div>
              </div>

              <div className="bg-on-background p-8 text-surface">
                <h2 className="mb-4 font-headline text-2xl font-bold text-primary-fixed">Service Area</h2>
                <p className="leading-relaxed text-surface-variant">{settings.serviceAreaSummary}</p>
                <p className="mt-6 text-sm text-surface-variant">
                  Exact service areas should be confirmed by the owner before publishing local SEO pages.
                </p>
              </div>
            </aside>
          </div>
        </div>
      </main>
      <Footer settings={settings} />
    </div>
  );
}
