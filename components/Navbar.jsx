import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-[#f3faff]/80  backdrop-blur-md border-b border-[#e3bfb2]/15 shadow-[0_12px_32px_rgba(0,0,0,0.06)]">
      <div className="flex justify-around items-center max-w-7xl mx-auto px-6 h-20">
        <Link href="/">
          <Image src="/A&P-Logo.png" alt="A&P Construction" width={175} height={100} />
        </Link>
        <div className="hidden md:flex items-center space-x-8 font-['Space_Grotesk'] font-bold tracking-tight">
          <Link href="/" className="text-[#a43700] border-b-2 border-[#a43700] pb-1">Home</Link>
          <Link href="/services" className="text-[#4c616c] hover:text-[#a43700] transition-colors">Services</Link>
          <Link href="/portfolio" className="text-[#4c616c] hover:text-[#a43700] transition-colors">Portfolio</Link>
          <Link href="/contact" className="text-[#4c616c] hover:text-[#a43700] transition-colors">Contact</Link>
        </div>
        <Link href="/contact">
          <button className="bg-gradient-to-r from-primary to-primary-container text-on-primary px-6 py-2.5 rounded-lg font-headline font-bold active:scale-95 transition-all shadow-lg shadow-primary/20">
            Get a Quote
          </button>
        </Link>
      </div>
    </nav>
  );
}
