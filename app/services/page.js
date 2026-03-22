import React from "react";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function Services() {
  return (
    <div className="bg-background text-on-background font-body selection:bg-primary-container selection:text-on-primary-container min-h-screen">
      <Navbar />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative min-h-[614px] flex items-center overflow-hidden bg-surface-container-low py-24">
          <div className="absolute inset-0 structural-grain pointer-events-none"></div>
          <div className="max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-8">
              <span className="inline-block px-3 py-1 bg-secondary-container text-on-secondary-fixed-variant font-label text-xs font-bold tracking-[0.2em] uppercase mb-6 rounded-full">Established Excellence</span>
              <h1 className="font-headline text-4xl sm:text-5xl lg:text-8xl font-black text-on-surface leading-[0.9] tracking-tighter mb-8">
                CONCRETE SERVICES <br/>
                <span className="text-primary">THAT BUILD COMMUNITIES.</span>
              </h1>
              <p className="text-secondary max-w-xl text-lg leading-relaxed mb-10">
                From massive commercial foundations to bespoke residential driveways, we deliver the structural integrity Alberta relies on. Engineered for longevity, poured with precision.
              </p>
            </div>
          </div>
          {/* Structural Accent */}
          <div className="absolute -right-20 top-1/2 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        </section>

        {/* Services Grid: Asymmetric Layout */}
        <section className="max-w-7xl mx-auto px-6 py-24 space-y-32">
          {/* 01 Commercial Concrete */}
          <div id="commercial" className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start scroll-mt-32">
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="relative group">
                <div className="absolute -inset-4 bg-surface-container-high rounded-xl -z-10 transition-transform group-hover:scale-105"></div>
                <img alt="Commercial construction site" className="w-full h-[500px] object-cover rounded shadow-2xl grayscale hover:grayscale-0 transition-all duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDaBnLhT7J4M9LFP5Q3i6F--wsLh2DkIXB54iG5DVjdmVBTuov96r565_tcq6hayzbhPBEbdTQI3pzgc9hLKyrfIw3ow5EtxqoeHqYmZbLFxe-C5TQfovgmVyRy5G1K6vNv-JSeiOIr9zcYIeuf-rELMwLeEUzCxPg4_vwmOqJtzBnWJS9OEkILf6eOH4zsBtGUey3nbYt9Qk6aEIb6amXYP899iHMUppnp93c40q6-kQUqWkKBMgh1EWxT-YGJr_Af_Nat-8KNTwun" />
              </div>
            </div>
            <div className="lg:col-span-7 order-1 lg:order-2 lg:pl-12">
              <div className="flex items-center gap-4 mb-6">
                <span className="font-headline text-5xl font-black text-outline-variant/30">01</span>
                <div className="h-px flex-1 bg-outline-variant/20"></div>
              </div>
              <h2 className="font-headline text-4xl lg:text-5xl font-bold text-on-background mb-8 leading-tight">Commercial <br/>Concrete Solutions</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h3 className="font-headline text-xl font-bold text-primary flex items-center gap-2">
                    <span className="material-symbols-outlined text-2xl">foundation</span>
                    Massive Foundations
                  </h3>
                  <p className="text-secondary leading-relaxed">Engineered structural foundations for high-rise developments and industrial complexes. We ensure the base of your investment is immutable.</p>
                </div>
                <div className="space-y-4">
                  <h3 className="font-headline text-xl font-bold text-primary flex items-center gap-2">
                    <span className="material-symbols-outlined text-2xl">layers</span>
                    Precision Flatwork
                  </h3>
                  <p className="text-secondary leading-relaxed">High-tolerance industrial floors and warehouse slabs designed for heavy machinery and constant logistical flow.</p>
                </div>
              </div>
              <div className="mt-12 p-8 bg-surface-container-low rounded-lg border-l-4 border-primary">
                <p className="italic text-on-surface font-medium">"A&P handled our 40,000 sq ft warehouse pour with surgical precision. The finish is flawless."</p>
                <span className="block mt-4 text-sm font-label uppercase tracking-widest font-bold text-secondary">— Lead Project Manager, Calgary Logistics</span>
              </div>
            </div>
          </div>

          {/* 02 Residential Concrete */}
          <div id="residential" className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center scroll-mt-32">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-4 mb-6">
                <span className="font-headline text-5xl font-black text-outline-variant/30">02</span>
                <div className="h-px flex-1 bg-outline-variant/20"></div>
              </div>
              <h2 className="font-headline text-4xl lg:text-5xl font-bold text-on-background mb-8 leading-tight text-right lg:text-left">Residential <br/>Craftsmanship</h2>
              <div className="space-y-8">
                <div className="flex gap-6 items-start">
                  <div className="w-12 h-12 flex-shrink-0 bg-secondary-container rounded flex items-center justify-center">
                    <span className="material-symbols-outlined text-primary">garage</span>
                  </div>
                  <div>
                    <h4 className="font-headline text-xl font-bold mb-2">Driveways & Patios</h4>
                    <p className="text-secondary">Transform your home's exterior with durable, high-curb-appeal concrete surfaces that withstand Alberta's freeze-thaw cycles.</p>
                  </div>
                </div>
                <div className="flex gap-6 items-start">
                  <div className="w-12 h-12 flex-shrink-0 bg-secondary-container rounded flex items-center justify-center">
                    <span className="material-symbols-outlined text-primary">architecture</span>
                  </div>
                  <div>
                    <h4 className="font-headline text-xl font-bold mb-2">Decorative Concrete</h4>
                    <p className="text-secondary">Custom stamped and exposed aggregate finishes that mimic stone or brick with the strength of reinforced concrete.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-5 relative">
              <img alt="Residential concrete driveway" className="w-full h-[500px] object-cover rounded shadow-2xl relative z-10" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBTTJhSz_I_zreSCYwFi7Pi9zCi1N-ZycNVqZ_Tl_9XDxEIJI10qGE6An4nhyhWbd1oOUTGsDUUs62TbybLxLwX04E-3_6abws9WwSNkFd4Y29oUc9KzGkAcQZJOo10c5bIHQhSuEW6QsTTpExzRZxTzrerNZpi8_GeIkW9CpPZTJ1nE_hPvpPyfGLLQVjATswDM-x-65hEbYD1ziSakJ_PBtT96wOKGFcpKrWVvaLfcfaK-0rUwfYIJdIiigX82IpziM_KSzTfwH2I" />
              <div className="absolute -bottom-6 -right-6 w-full h-full border-4 border-outline-variant/20 -z-10"></div>
            </div>
          </div>

          {/* 03 Specialized Pumping */}
          <div id="concrete-pumping" className="bg-surface-container-highest p-12 lg:p-20 relative overflow-hidden group scroll-mt-32">
            <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/10 -skew-x-12 translate-x-12"></div>
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <span className="font-headline text-5xl font-black text-on-surface-variant/20">03</span>
                  <span className="font-label text-xs font-bold tracking-[0.3em] uppercase text-primary">Specialized Service</span>
                </div>
                <h2 className="font-headline text-4xl lg:text-5xl font-bold text-on-background mb-6 leading-tight">Professional Concrete Pumping</h2>
                <p className="text-on-surface-variant text-lg mb-8 leading-relaxed">
                  Difficult reach? Remote location? Our specialized pumping fleet navigates tight urban sites and long-distance reaches where traditional trucks can't go. We ensure consistent flow for perfect pours every time.
                </p>
                <ul className="space-y-4 font-bold text-on-background">
                  <li className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                    Line Pumping for tight access
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                    High-rise boom capabilities
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                    Certified expert operators
                  </li>
                </ul>
              </div>
              <div className="relative aspect-square">
                <img alt="Concrete pumping truck" className="w-full h-full object-cover rounded shadow-xl" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA-qRbh_Fo0WRIsk2qjbDdFoFAAiWrvbHws_4L0hNABOKK8HOZjeurHybtKxQvoXrMvXMaof9hykyFGib0b0ZpVSrD2oS4dcBxnWXlDCHTwgUhAapiKFSTXUS7rT_wTMtJmwkvcX5En91OJE4vXIQ_cr_JGPXtcUGk1jo_LK4exeEfOrzJaVlYKmujSjV2e1N6HzAqjzqPVyD3Vclfkk_XH0T4EsAQWLMYSuSpkpcRjhnitnki24RX4oKZszc9q0u7jtqzGuJ7QdHAZ" />
                <div className="absolute inset-0 bg-primary/20 mix-blend-multiply rounded group-hover:opacity-0 transition-opacity duration-500"></div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-[#021f29] py-24 relative overflow-hidden">
          <div className="absolute inset-0 structural-grain"></div>
          <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
            <h2 className="font-headline text-5xl md:text-6xl font-black text-white mb-8 tracking-tight">READY TO POUR?</h2>
            <p className="text-surface-container-high text-xl mb-12 max-w-2xl mx-auto">
              Whether it's a multi-unit development or a custom home project, A&P Construction delivers the structural backbone you need.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/contact">
                <button className="bg-primary text-on-primary px-10 py-5 rounded font-headline font-black text-xl uppercase tracking-widest hover:bg-tertiary transition-colors shadow-xl active:scale-95">
                  Request a Custom Quote
                </button>
              </Link>
              <Link href="/portfolio">
                <button className="bg-transparent border-2 border-surface-container text-surface-container px-10 py-5 rounded font-headline font-black text-xl uppercase tracking-widest hover:bg-surface-container hover:text-on-surface transition-all active:scale-95">
                  View Portfolio
                </button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
