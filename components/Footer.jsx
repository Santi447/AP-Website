import React from 'react';
import Link from 'next/link';


export default function Footer() {
  return (
    <footer className="bg-[#f3faff]">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-7xl mx-auto px-8 py-16">
        <div className="space-y-6">
          <div className="text-lg font-bold text-[#4c616c] font-['Work_Sans'] uppercase tracking-[0.2em]">
              A&P Construction Service
          </div>
          <p className="text-secondary text-sm leading-relaxed max-w-xs">
              Building Alberta's future with the strength of reinforced concrete and the precision of expert craftsmanship.
          </p>
          <div className="flex gap-4">
            <Link href="#" className="w-10 h-10 rounded bg-surface-container flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all">
              <span className="material-symbols-outlined">share</span>
            </Link>
          </div>
          <div className="flex gap-4">
            <Link href="#" className="w-10 h-10 rounded bg-surface-container flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all">
              <span className="material-symbols-outlined">share</span>
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-8">
          <div>
            <h4 className="font-['Work_Sans'] text-sm uppercase tracking-widest font-bold text-[#a43700] mb-6">Services</h4>
            <ul className="space-y-4">
              <li><Link href="/services#commercial" className="text-[#4c616c] text-sm hover:underline decoration-[#a43700] decoration-2 underline-offset-4 transition-opacity">Commercial</Link></li>
              <li><Link href="/services#residential" className="text-[#4c616c] text-sm hover:underline decoration-[#a43700] decoration-2 underline-offset-4 transition-opacity">Residential</Link></li>
              <li><Link href="/services#concrete-pumping" className="text-[#4c616c] text-sm hover:underline decoration-[#a43700] decoration-2 underline-offset-4 transition-opacity">Concrete Pumping</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-['Work_Sans'] text-sm uppercase tracking-widest font-bold text-[#a43700] mb-6">Company</h4>
            <ul className="space-y-4">
              <li><Link href="/portfolio" className="text-[#4c616c] text-sm hover:underline decoration-[#a43700] decoration-2 underline-offset-4 transition-opacity">Portfolio</Link></li>
              <li><Link href="/contact" className="text-[#4c616c] text-sm hover:underline decoration-[#a43700] decoration-2 underline-offset-4 transition-opacity">Contact</Link></li>
              <li><Link href="#" className="text-[#4c616c] text-sm hover:underline decoration-[#a43700] decoration-2 underline-offset-4 transition-opacity">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>
        <div className="bg-surface-container-low p-8 rounded-xl border border-outline-variant/10">
          <h4 className="font-headline font-bold text-on-surface mb-4">Alberta Headquarters</h4>
          <p className="text-secondary text-sm mb-2">320 Marquis Hts SE</p>
          <p className="text-secondary text-sm mb-6">Calgary, AB T3M 2A7</p>
          <div className="flex items-center gap-2 text-primary font-bold">
            <span className="material-symbols-outlined text-sm">mail</span>
            <span className="text-sm">apconstructionserv@gmail.com</span>
          </div>
        </div>
      </div>
      <div className="bg-[#e6f6ff] py-8">
        <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-['Work_Sans'] text-sm uppercase tracking-widest text-[#4c616c]">
              © 2024 A&P Construction Service. Calgary-based, serving Alberta.
          </p>
          <div className="flex gap-6">
            <span className="text-[10px] text-secondary/50 font-bold uppercase tracking-tighter">Certified Alberta Contractor</span>
            <span className="text-[10px] text-secondary/50 font-bold uppercase tracking-tighter">WCB Insured</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
