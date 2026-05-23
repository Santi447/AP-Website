"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-[#e3bfb2]/15 bg-[#f3faff]/90 shadow-[0_12px_32px_rgba(0,0,0,0.06)] backdrop-blur-md">
      <div className="relative mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <Link href="/" className="absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0">
          <Image src="/A&P-Logo.png" alt="A&P Concrete" width={175} height={100} priority />
        </Link>

        <div className="hidden items-center space-x-8 font-headline font-bold md:flex">
          {navLinks.map((link) => {
            const isActive = link.href === "/" ? pathname === "/" : pathname?.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`border-b-2 pb-1 transition-colors ${
                  isActive ? "border-primary text-primary" : "border-transparent text-secondary hover:text-primary"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        <div className="hidden md:block">
          <Link href="/contact" className="rounded-lg bg-primary px-6 py-3 font-headline font-bold text-on-primary shadow-lg shadow-primary/20 transition-colors hover:bg-primary-container">
            Get a Quote
          </Link>
        </div>

        <button
          type="button"
          className="rounded p-2 text-secondary md:hidden"
          onClick={() => setIsMobileMenuOpen((open) => !open)}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMobileMenuOpen}
        >
          <span className="text-3xl leading-none">{isMobileMenuOpen ? "x" : "="}</span>
        </button>
      </div>

      {isMobileMenuOpen ? (
        <div className="absolute left-0 top-20 flex w-full flex-col items-center space-y-6 border-b border-[#e3bfb2]/15 bg-[#f3faff] py-8 shadow-xl md:hidden">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} onClick={() => setIsMobileMenuOpen(false)} className="font-headline text-xl font-bold text-secondary">
              {link.label}
            </Link>
          ))}
          <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)} className="rounded-lg bg-primary px-8 py-3 font-headline font-bold text-on-primary">
            Get a Quote
          </Link>
        </div>
      ) : null}
    </nav>
  );
}
