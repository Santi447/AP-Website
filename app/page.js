import React from "react";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="bg-surface text-on-surface font-body selection:bg-primary/30 min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <header className="relative pt-20 overflow-hidden bg-surface">
        <div className="absolute inset-0 concrete-texture pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-6 py-24 md:py-32 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 z-10">
            <span className="inline-block px-3 py-1 bg-secondary-container text-on-secondary-fixed-variant text-xs font-bold tracking-[0.2em] uppercase rounded-full mb-6">Established Performance</span>
            <h1 className="text-6xl md:text-8xl font-black font-headline text-on-surface leading-[0.9] tracking-tighter mb-8">
                The Concrete <span className="text-primary italic">Standard</span> for Alberta.
            </h1>
            <p className="text-xl text-secondary max-w-xl mb-10 leading-relaxed">
                A&P Construction delivers structural integrity and precision finishing for Calgary's most ambitious commercial and residential developments.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact">
                <button className="px-8 py-4 bg-primary text-on-primary font-headline font-bold rounded shadow-xl hover:bg-tertiary transition-colors flex items-center gap-2">
                    Start Your Project Today
                    <span className="material-symbols-outlined">arrow_forward</span>
                </button>
              </Link>
              <Link href="/portfolio">
                <button className="px-8 py-4 border-2 border-outline-variant text-on-surface font-headline font-bold rounded hover:bg-surface-container-low transition-all">
                    View Portfolio
                </button>
              </Link>
            </div>
          </div>
          <div className="lg:col-span-5 relative group">
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/10 -z-10 rounded-full"></div>
            <div className="relative rounded-xl overflow-hidden shadow-2xl transform lg:rotate-2 group-hover:rotate-0 transition-transform duration-500">
              <img 
                alt="Concrete Project" 
                className="w-full h-[500px] object-cover" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB-5HlF7s7ncIQI3LcqRnQ5yGT1StGn5BK4sUxCmTeybuTAyNgr0xhxeHCGMyz2Am_PdllwesRtq5OhihCExvakpJgOzlHZcW7X5J_pImkW53etZCvM_pFZ7B6-bdViUM-E4m8IFw4ljzU_LLGWjL9Qezs9DrtFjkLD9mPFslFqutW8Ao-ncZ-WokEVq9y7sMPyzIsHIuy4JLqedeHCmZzd4Gyp-oIpnO8eCTxRmctkg7FSzwEmIj-HDYAIqTEnVe7_jC3keLvqHrS6" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-on-background/60 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <p className="font-headline font-bold text-lg">Calgary Industrial Hub</p>
                <p className="text-sm opacity-80">20,000 sq ft Structural Pour</p>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 bg-surface-container-lowest p-6 shadow-xl border border-outline-variant/15 hidden md:block">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary-fixed flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary">verified</span>
                </div>
                <div>
                  <p className="font-headline font-bold text-on-surface">15+ Years</p>
                  <p className="text-xs text-secondary uppercase tracking-widest">Experience</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Value Proposition */}
      <section className="bg-surface-container-low py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-outline-variant/30 divide-y md:divide-y-0 md:divide-x divide-outline-variant/30 bg-surface-container-lowest shadow-sm">
            <div className="p-12 group hover:bg-primary transition-colors duration-300">
              <span className="material-symbols-outlined text-4xl text-primary group-hover:text-white mb-6">location_city</span>
              <h3 className="font-headline font-bold text-2xl mb-4 group-hover:text-white transition-colors">Calgary Based</h3>
              <p className="text-secondary group-hover:text-white/80 transition-colors">Deeply rooted in the Calgary construction ecosystem with local expertise and responsive service.</p>
            </div>
            <div className="p-12 group hover:bg-primary transition-colors duration-300">
              <span className="material-symbols-outlined text-4xl text-primary group-hover:text-white mb-6">handshake</span>
              <h3 className="font-headline font-bold text-2xl mb-4 group-hover:text-white transition-colors">Trusted Partner</h3>
              <p className="text-secondary group-hover:text-white/80 transition-colors">Collaborating with Alberta's premier home builders and commercial contractors for decade-long results.</p>
            </div>
            <div className="p-12 group hover:bg-primary transition-colors duration-300">
              <span className="material-symbols-outlined text-4xl text-primary group-hover:text-white mb-6">map</span>
              <h3 className="font-headline font-bold text-2xl mb-4 group-hover:text-white transition-colors">Alberta Wide</h3>
              <p className="text-secondary group-hover:text-white/80 transition-colors">From the Rockies to the Prairies, our fleet delivers precision concrete services across the entire province.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Highlight Sections (Bento-style Grid) */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <p className="font-label text-primary font-bold tracking-[0.3em] uppercase mb-4 text-sm">Core Capabilities</p>
            <h2 className="text-5xl font-black font-headline tracking-tighter">Engineered for Permanence</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto md:h-[700px]">
            {/* Commercial */}
            <div className="md:col-span-8 relative rounded-xl overflow-hidden group">
              <img 
                alt="Commercial" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBVPDRCR0kAjpzTujjzoVAbZs9qQW5Zf754Xp4wXHY6J_n6bDTamP0iaCoZWoJXPHorG1ReEB4Tcjmu2pkwINRqBhPfoIk-svDOYvuHbDMf-dknLbc4CXc-bWOB6ShBBAb6FoP7x-lkhL2wF4aVzLtV39b5VBVNZjMCHR0AWikrSo31rJ8DwdBy_pCyDofgGKqcBIjQxXmiRGogNBRAF4UODWLJP1lluPsm72XT6LAfx5URmX__4mMp46G7ot0_IhaA5qrf-W0XWOVo" 
              />
              <div className="absolute inset-0 bg-gradient-to-r from-on-background/80 via-on-background/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-12 max-w-md">
                <h3 className="text-white font-headline font-black text-4xl mb-4">Commercial</h3>
                <p className="text-white/80 mb-6">Structural foundations, tilt-up panels, and high-tolerance industrial flooring for retail and warehouse complexes.</p>
                <Link href="/services" className="inline-flex items-center text-primary font-bold hover:gap-4 transition-all gap-2">
                    Explore Commercial <span className="material-symbols-outlined">arrow_forward</span>
                </Link>
              </div>
            </div>
            {/* Residential */}
            <div className="md:col-span-4 relative rounded-xl overflow-hidden group bg-surface-container-high">
              <img 
                alt="Residential" 
                className="absolute inset-0 w-full h-full object-cover opacity-60 transition-transform duration-700 group-hover:scale-110" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDpRMaoaBS2d5ewXacYi4l85RSvvFoStG2cIwtte0eE16vFI0WyunVdpsahr8NKST7MRZlwdhVfKF_UXXjB0ZDK8zdioNbeL8RAQ0BVlKnFqg__5Wsd4R_0xrDwDHAVZyUTmczhw8RkaE60WnXvfR1AeGNYLE9zsmQUvIT0LE9U_Lub6kFtKLisLD1V4HJSQirEvZuWybro6ZTpsbqyX4CklbrTDs7MyYVIWjO6KGuHFwYUgLOBvA-sKSihfzftFt1HmZFxQucSsdPZ" 
              />
              <div className="absolute inset-0 bg-primary/10"></div>
              <div className="absolute bottom-0 left-0 p-8">
                <h3 className="text-on-surface font-headline font-black text-3xl mb-3">Residential</h3>
                <p className="text-on-surface-variant text-sm mb-4">Custom driveways, foundations, and architectural finishes that define modern luxury living.</p>
                <Link href="/services" className="text-primary font-bold text-sm uppercase tracking-widest flex items-center gap-2">
                    Learn More <span className="material-symbols-outlined text-sm">chevron_right</span>
                </Link>
              </div>
            </div>
            {/* Pumping */}
            <div className="md:col-span-12 relative rounded-xl overflow-hidden group h-64 md:h-auto">
              <div className="absolute inset-0 bg-[#4c616c]"></div>
              <img 
                alt="Concrete Pumping" 
                className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-40" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB0CsscBcivkLjs8_q0ofrLhnof5JLaUH9DTet2uSkOnpqJ5B3udUl3LsRMRc83UTugLV4GfJS9dnfbiDze8L6yIXZhlZt5knAZEBdstLdKZJOIvxyfB0i_s42FQsRsBfOi1r8EvvSvgLdYS-zlzwX5jwqQFBNwsPO4_-0L0v_Lqd1H4BCZZdFfvTp6dl3T58cwRDh7Hcm4xpzt5qNWwMKTPsi9ySDWwlVmU7Bl5FWQ1szUOveMQXCA8xyU86ygjo5RJGs9hyrNoE_n" 
              />
              <div className="absolute inset-0 flex items-center justify-between px-12">
                <div className="max-w-xl">
                  <h3 className="text-white font-headline font-black text-4xl mb-2">Concrete Pumping</h3>
                  <p className="text-white/70">Equipped with a modern fleet of boom and line pumps to reach any corner of your jobsite.</p>
                </div>
                <button className="hidden lg:flex w-20 h-20 rounded-full bg-white items-center justify-center group-hover:bg-primary transition-colors">
                  <span className="material-symbols-outlined text-on-background group-hover:text-white text-3xl">add</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Progress / Industrial Stat Bar */}
      <section className="py-20 bg-surface-container-highest">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="space-y-4">
              <div className="flex justify-between text-sm font-headline font-bold uppercase tracking-wider">
                <span>Concrete Poured</span>
                <span>85%</span>
              </div>
              <div className="h-3 w-full bg-surface-variant rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-primary to-tertiary w-[85%]"></div>
              </div>
              <p className="text-xs text-secondary italic">Current Quarter Performance</p>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between text-sm font-headline font-bold uppercase tracking-wider">
                <span>Project Safety</span>
                <span>100%</span>
              </div>
              <div className="h-3 w-full bg-surface-variant rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-primary to-tertiary w-[100%]"></div>
              </div>
              <p className="text-xs text-secondary italic">Zero-incident track record</p>
            </div>
            <div className="md:col-span-2 flex items-center justify-center md:justify-end gap-12 border-l-0 md:border-l border-outline-variant/30 pl-0 md:pl-12">
              <div className="text-center">
                <p className="text-4xl font-black font-headline text-primary">500+</p>
                <p className="text-xs uppercase tracking-widest text-secondary font-bold">Projects Done</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-black font-headline text-primary">12</p>
                <p className="text-xs uppercase tracking-widest text-secondary font-bold">City Awards</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-on-background"></div>
        <div className="absolute inset-0 concrete-texture"></div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/10 -skew-x-12 transform translate-x-20"></div>
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <h2 className="text-5xl md:text-7xl font-black font-headline text-white mb-8 leading-tight tracking-tighter">
              Ready to Lay the <span className="text-primary">Foundation</span> of Your Success?
          </h2>
          <p className="text-white/60 text-xl mb-12 max-w-2xl mx-auto font-body">
              Our team is standing by to provide a detailed estimate and structural consultation for your next project in Alberta.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <Link href="/contact">
              <button className="w-full md:w-auto px-12 py-5 bg-primary text-on-primary font-headline font-black text-xl rounded shadow-[0_20px_40px_rgba(164,55,0,0.4)] hover:bg-tertiary transition-all hover:-translate-y-1">
                  Start Your Project Today
              </button>
            </Link>
            <a className="flex items-center gap-3 text-white font-headline font-bold hover:text-primary transition-colors" href="tel:4030000000">
              <span className="material-symbols-outlined">call</span>
              (403) 555-0192
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
