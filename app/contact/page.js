import React from "react";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function Contact() {
  return (
    <div className="bg-background font-body text-on-background selection:bg-primary selection:text-on-primary min-h-screen">
      <Navbar />

      <main className="pt-32 pb-24 relative overflow-hidden">
        <div className="grain-overlay absolute inset-0 z-0"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          
          {/* Hero Section */}
          <div className="mb-20">
            <span className="text-primary font-headline font-bold uppercase tracking-[0.2em] text-sm block mb-4">A&P Construction Service</span>
            <h1 className="text-6xl md:text-8xl font-headline font-black text-on-surface leading-[0.9] tracking-tighter max-w-4xl">
              Let's Build Something Together.
            </h1>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Contact Form Section (Bento Style) */}
            <div className="lg:col-span-7 bg-surface-container-lowest p-8 md:p-12 shadow-[0_32px_64px_rgba(0,0,0,0.04)] relative">
              <div className="absolute top-0 left-0 w-2 h-full bg-primary"></div>
              <form action="#" className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="flex flex-col">
                    <label className="font-label text-xs font-bold uppercase tracking-widest text-secondary mb-2">Name</label>
                    <input className="bg-surface-container-high border-0 border-b-2 border-outline-variant focus:border-primary focus:ring-0 transition-all px-4 py-3 placeholder:text-secondary/40" placeholder="Your full name" type="text" />
                  </div>
                  <div className="flex flex-col">
                    <label className="font-label text-xs font-bold uppercase tracking-widest text-secondary mb-2">Email Address</label>
                    <input className="bg-surface-container-high border-0 border-b-2 border-outline-variant focus:border-primary focus:ring-0 transition-all px-4 py-3 placeholder:text-secondary/40" placeholder="email@example.com" type="email" />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="flex flex-col">
                    <label className="font-label text-xs font-bold uppercase tracking-widest text-secondary mb-2">Phone</label>
                    <input className="bg-surface-container-high border-0 border-b-2 border-outline-variant focus:border-primary focus:ring-0 transition-all px-4 py-3 placeholder:text-secondary/40" placeholder="(403) 000-0000" type="tel" />
                  </div>
                  <div className="flex flex-col">
                    <label className="font-label text-xs font-bold uppercase tracking-widest text-secondary mb-2">Project Type</label>
                    <select className="bg-surface-container-high border-0 border-b-2 border-outline-variant focus:border-primary focus:ring-0 transition-all px-4 py-3 appearance-none">
                      <option>Concrete Pumping</option>
                      <option>Commercial</option>
                      <option>Residential</option>
                    </select>
                  </div>
                </div>
                <div className="flex flex-col">
                  <label className="font-label text-xs font-bold uppercase tracking-widest text-secondary mb-2">Project Location</label>
                  <div className="flex flex-wrap gap-4">
                    <label className="flex items-center gap-2 cursor-pointer group">
                      <input className="w-5 h-5 text-primary focus:ring-primary border-outline-variant" name="location" type="radio" />
                      <span className="text-secondary group-hover:text-primary transition-colors">Calgary</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer group">
                      <input className="w-5 h-5 text-primary focus:ring-primary border-outline-variant" name="location" type="radio" />
                      <span className="text-secondary group-hover:text-primary transition-colors">Elsewhere in Alberta</span>
                    </label>
                  </div>
                </div>
                <div className="flex flex-col">
                  <label className="font-label text-xs font-bold uppercase tracking-widest text-secondary mb-2">Project Details</label>
                  <textarea className="bg-surface-container-high border-0 border-b-2 border-outline-variant focus:border-primary focus:ring-0 transition-all px-4 py-3 placeholder:text-secondary/40 resize-none" placeholder="Tell us about your project goals and scope..." rows={5}></textarea>
                </div>
                <button className="w-full md:w-auto bg-primary text-on-primary font-headline font-bold text-lg px-12 py-5 rounded hover:bg-primary-container transition-colors shadow-lg shadow-primary/20 flex items-center justify-center gap-3" type="button">
                  Request Quote
                  <span className="material-symbols-outlined ml-2">arrow_forward</span>
                </button>
              </form>
            </div>

            {/* Info Sidebar */}
            <div className="lg:col-span-5 space-y-12">
              {/* Contact Info Slab */}
              <div className="bg-surface-container-low p-8 shadow-sm">
                <h3 className="font-headline font-bold text-2xl mb-8 border-b-4 border-primary inline-block">Our Base</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary-container text-on-primary-container p-3 rounded-lg">
                      <span className="material-symbols-outlined">call</span>
                    </div>
                    <div>
                      <p className="font-label text-xs font-bold uppercase tracking-widest text-secondary">Call Us</p>
                      <p className="text-xl font-headline font-bold">403.555.0123</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-primary-container text-on-primary-container p-3 rounded-lg">
                      <span className="material-symbols-outlined">mail</span>
                    </div>
                    <div>
                      <p className="font-label text-xs font-bold uppercase tracking-widest text-secondary">Email</p>
                      <p className="text-xl font-headline font-bold">quotes@apconstruction.ca</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map/Service Area Slab */}
              <div className="bg-on-background text-surface p-8 relative overflow-hidden">
                <div className="relative z-10">
                  <h3 className="font-headline font-bold text-2xl mb-4 text-primary-fixed">Serving All Alberta</h3>
                  <p className="text-surface-variant font-light leading-relaxed mb-8">
                      From our main yards in <strong className="text-surface-container-highest">Calgary</strong>, we mobilize crews and specialized concrete equipment to job sites across the entire province. Whether it's a bridge in Lethbridge or a commercial slab in Edmonton, we deliver.
                  </p>
                  {/* Static Map Placeholder */}
                  <div className="aspect-video bg-secondary/20 rounded border border-white/10 relative overflow-hidden group">
                    <img alt="Calgary map location" className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-80 transition-all duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD_Mr5Ic5VSIpazb_l6AmigCdmYBK63r7eGRDv96RUH8kNfmt-QMtlukUBW1N_5vleiJNv1lfeqC_zA3kdVRAGF2YFiXkMEbowql3v8cW6H8MW4Yl2ZtOFPh1kDy2qR3d_WufC2Psoh5B4DrOwnGEuKEt3_GUPu_eEu4JsSDGDpKuXTgG7JylYLHyLDR3m11Ojm2DXtOMJKk0Cm0UNhGD9jy2YtzH74tkejU88Ugw-kWoWPxcnpimVl-w-oGUrk6taWflrcSCY8-KM9" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-4 h-4 bg-primary rounded-full animate-ping"></div>
                      <div className="w-4 h-4 bg-primary rounded-full absolute"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Badge/Trust Slab */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-6 border-l-4 border-secondary shadow-sm">
                  <span className="material-symbols-outlined text-primary mb-2">verified</span>
                  <p className="font-headline font-bold text-sm">COR Certified</p>
                </div>
                <div className="bg-white p-6 border-l-4 border-secondary shadow-sm">
                  <span className="material-symbols-outlined text-primary mb-2">engineering</span>
                  <p className="font-headline font-bold text-sm">Licensed & Insured</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
