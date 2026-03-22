'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();
  const [isSelected, setIsSelected] = useState(pathname || '/');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/portfolio', label: 'Portfolio' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#f3faff]/80 backdrop-blur-md border-b border-[#e3bfb2]/15 shadow-[0_12px_32px_rgba(0,0,0,0.06)]">
      <div className="flex justify-between items-center max-w-7xl mx-auto px-6 h-20 relative">
        {/* Logo */}
        <Link href="/" className="absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0 order-last md:order-first">
          <Image src="/A&P-Logo.png" alt="A&P Construction" width={175} height={100} />
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8 font-['Space_Grotesk'] font-bold tracking-tight">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsSelected(link.href)}
              className={`pb-1 transition-colors ${
                isSelected === link.href
                  ? 'text-[#a43700] border-b-2 border-[#a43700]'
                  : 'text-[#4c616c] border-b-2 border-transparent hover:text-[#a43700]'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop Button */}
        <div className="hidden md:block">
          <Link href="/contact">
            <button className="bg-gradient-to-r from-primary to-primary-container text-on-primary px-6 py-2.5 rounded-lg font-headline font-bold active:scale-95 transition-all shadow-lg shadow-primary/20">
              Get a Quote
            </button>
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          className="md:hidden p-2 text-[#4c616c]"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span className="material-symbols-outlined text-3xl">
            {isMobileMenuOpen ? 'close' : 'menu'}
          </span>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-[#f3faff] border-b border-[#e3bfb2]/15 shadow-xl flex flex-col items-center py-8 space-y-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => {
                setIsSelected(link.href);
                setIsMobileMenuOpen(false);
              }}
              className={`text-xl font-['Space_Grotesk'] font-bold transition-colors ${
                isSelected === link.href ? 'text-[#a43700]' : 'text-[#4c616c]'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
            <button className="mt-4 bg-gradient-to-r from-primary to-primary-container text-on-primary px-8 py-3 rounded-lg font-headline font-bold active:scale-95 transition-all shadow-lg shadow-primary/20">
              Get a Quote
            </button>
          </Link>
        </div>
      )}
    </nav>
  );
}
