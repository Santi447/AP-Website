import Image from "next/image";
import Link from "next/link";
import { siteSettings } from "../lib/fallbackData";
import { imageAlt, imageSource } from "../sanity/image";

export default function Footer({ settings = siteSettings }) {
  const footerLogoSrc = imageSource(settings.footerLogo || settings.logo);
  const footerLogoAlt = imageAlt(settings.footerLogo || settings.logo, settings.businessName || "A&P Concrete");
  const socialLinks = [
    { href: settings.facebookUrl, label: "Facebook", shortLabel: "Fb" },
    { href: settings.instagramUrl, label: "Instagram", shortLabel: "Ig" },
    { href: settings.googleBusinessProfileUrl, label: "Google Business Profile", shortLabel: "G" },
  ].filter((link) => Boolean(link.href));

  return (
    <footer className="bg-[#f3faff]">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-8 py-16 md:grid-cols-3">
        <div className="space-y-6">
          {footerLogoSrc ? (
            <Image src={footerLogoSrc} alt={footerLogoAlt} width={180} height={100} className="h-auto max-h-20 w-auto" />
          ) : (
            <div className="font-body text-lg font-bold uppercase tracking-[0.2em] text-secondary">{settings.businessName}</div>
          )}
          <p className="max-w-xs text-sm leading-relaxed text-secondary">
            Concrete pumping, placing, finishing, prep work, and crew support for residential, commercial, and industrial projects.
          </p>
          {socialLinks.length ? (
            <div className="flex gap-3">
              {socialLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  aria-label={link.label}
                  className="flex h-10 w-10 items-center justify-center rounded bg-surface-container font-headline text-xs font-black uppercase text-primary transition-colors hover:bg-primary hover:text-white"
                  target="_blank"
                  rel="noreferrer"
                >
                  {link.shortLabel}
                </Link>
              ))}
            </div>
          ) : null}
        </div>

        <div className="grid grid-cols-2 gap-8">
          <div>
            <h4 className="mb-6 text-sm font-bold uppercase tracking-widest text-primary">Services</h4>
            <ul className="space-y-4">
              <li><Link href="/services/concrete-pumping" className="text-sm text-secondary hover:text-primary">Concrete Pumping</Link></li>
              <li><Link href="/services/concrete-placing" className="text-sm text-secondary hover:text-primary">Concrete Placing</Link></li>
              <li><Link href="/services/concrete-finishing" className="text-sm text-secondary hover:text-primary">Concrete Finishing</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-6 text-sm font-bold uppercase tracking-widest text-primary">Company</h4>
            <ul className="space-y-4">
              <li><Link href="/projects" className="text-sm text-secondary hover:text-primary">Projects</Link></li>
              <li><Link href="/contact" className="text-sm text-secondary hover:text-primary">Contact</Link></li>
              <li><Link href="/studio" className="text-sm text-secondary hover:text-primary">CMS Studio</Link></li>
            </ul>
          </div>
        </div>

        <div className="rounded-lg border border-outline-variant/10 bg-surface-container-low p-8">
          <h4 className="mb-4 font-headline font-bold text-on-surface">Contact</h4>
          <p className="mb-2 text-sm text-secondary">{settings.generalLocation}</p>
          <p className="mb-6 text-sm text-secondary">{settings.serviceAreaSummary}</p>
          <div className="space-y-2 text-sm font-bold text-primary">
            {settings.phoneNumber ? <p>{settings.phoneNumber}</p> : null}
            {settings.email ? <p className="break-all">{settings.email}</p> : null}
          </div>
        </div>
      </div>
      <div className="bg-[#e6f6ff] py-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-8 md:flex-row">
          <p className="text-sm uppercase tracking-widest text-secondary">© 2026 {settings.businessName}. Owner-approved content managed in Sanity.</p>
          <Link href="/contact" className="text-sm font-bold uppercase tracking-widest text-primary">Request a Quote</Link>
        </div>
      </div>
    </footer>
  );
}
