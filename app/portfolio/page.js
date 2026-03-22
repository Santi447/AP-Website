import React from "react";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function Portfolio() {
  return (
    <div className="bg-background text-on-background font-body selection:bg-primary selection:text-on-primary min-h-screen">
      <Navbar />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative h-[614px] flex items-center overflow-hidden bg-surface-container-low structural-grain-before">
          <div className="absolute inset-0 z-0">
            <img alt="Construction site" className="w-full h-full object-cover opacity-20 grayscale" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB0W1bo9hn0J8lyka3FyFi-I9y0ZYJdZHWgQiS_WfFnqZk-P1DVpKkpooUa7gI93qDc09MDbkRWX-oillekz3rsYCTDHfTBN60nNVG90zNSckxRMUEWSHr1G2oT2bhBUPyATlAVogdXfiflMrIcx0Kr5V6cn0wogzDOLWsdoodcguvDJTZVLFBgdrBFthtG_P32XPoPajhXGD7jBDALuZL-ZscbTW5p-ekD8igzS_b7OdNSE0zIQITVP7UkRypGXh4UG-cBugB1iL2Q" />
            <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent"></div>
          </div>
          <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
            <div className="max-w-3xl">
              <span className="inline-block px-3 py-1 bg-secondary-container text-on-secondary-fixed-variant font-label text-xs uppercase tracking-[0.2em] mb-6 rounded-full">Project Showcase</span>
              <h1 className="text-6xl md:text-8xl font-headline font-black text-on-background leading-[0.9] tracking-tighter mb-8">
                  Our Work <br/><span className="text-primary">Across Alberta.</span>
              </h1>
              <p className="text-xl text-secondary max-w-xl leading-relaxed font-medium">
                  From monumental commercial foundations to precision residential pumping, we build the structural backbone of Western Canada.
              </p>
            </div>
          </div>
        </section>

        {/* Filter Controls */}
        <section className="bg-surface sticky top-20 z-40 border-b border-outline-variant/10">
          <div className="max-w-7xl mx-auto px-6 py-6 flex flex-wrap items-center justify-between gap-4">
            <div className="flex gap-2 p-1 bg-surface-container-low rounded-xl">
              <button className="px-6 py-2 rounded-lg bg-surface-container-lowest text-primary font-headline font-bold shadow-sm">All Projects</button>
              <button className="px-6 py-2 rounded-lg text-secondary hover:text-primary font-headline font-bold transition-colors">Commercial</button>
              <button className="px-6 py-2 rounded-lg text-secondary hover:text-primary font-headline font-bold transition-colors">Residential</button>
              <button className="px-6 py-2 rounded-lg text-secondary hover:text-primary font-headline font-bold transition-colors">Pumping Projects</button>
            </div>
            <div className="flex items-center gap-2 text-secondary/60">
              <span className="material-symbols-outlined text-lg">location_on</span>
              <span className="font-label text-sm uppercase tracking-widest">Serving Calgary & Edmonton</span>
            </div>
          </div>
        </section>

        {/* Project Grid (Bento Style) */}
        <section className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            {/* Main Feature Card */}
            <div className="md:col-span-8 group cursor-pointer">
              <div className="relative overflow-hidden rounded-xl bg-surface-container-lowest h-[500px] shadow-[0_12px_32px_rgba(0,0,0,0.06)] transition-all hover:translate-y-[-4px]">
                <img alt="Industrial Project" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuClZNqoa3WylNIa8460CkwsylJr0yYDlOY2ezL94cBW-KNkxxJj11VuUcZrARZfC6oiftffvagIPLSOLeVCJd3admf1QnAv4LnNQ8o3qrjuetFAbIdlDaZct5bYxxhXG0b7-od003XCZir2-OySaE-GEzkSFuVSUDAfHtDgsuFFA1rDzfLbWu9xe9xd56ycjK1Dv8ebQaYtwW77RwEuggB76DxMBAJ-ShgFmiIcCo8rIdetgPzg3dNmcb6HESTqJS9RZPuDlhvDvOMt" />
                <div className="absolute inset-0 bg-gradient-to-t from-on-background/90 via-on-background/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-10 text-on-tertiary-container">
                  <span className="text-primary-fixed font-label text-xs uppercase tracking-widest mb-4 block">Commercial Foundation</span>
                  <h3 className="text-4xl font-headline font-black text-white mb-4">Large-Scale Industrial Foundation</h3>
                  <p className="max-w-md text-surface-container-high opacity-80 mb-6">A multi-phase concrete pour requiring specialized pumping for a 120,000 sq ft logistics hub.</p>
                  <div className="flex items-center gap-4">
                    <span className="text-white flex items-center gap-1 font-headline font-bold text-sm bg-primary/20 backdrop-blur-md px-4 py-2 rounded-lg">
                      <span className="material-symbols-outlined text-sm">schedule</span> 2023
                    </span>
                    <span className="text-white flex items-center gap-1 font-headline font-bold text-sm bg-primary/20 backdrop-blur-md px-4 py-2 rounded-lg">
                      <span className="material-symbols-outlined text-sm" data-weight="fill">location_on</span> Calgary
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Secondary Card */}
            <div className="md:col-span-4 group cursor-pointer">
              <div className="relative overflow-hidden rounded-xl bg-surface-container-lowest h-full shadow-[0_12px_32px_rgba(0,0,0,0.06)] transition-all hover:translate-y-[-4px]">
                <img alt="High-rise project" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBYlGWgciw6y7JW0ifcvi397vck0OQbUqud-wBW5uZ-x0X7w2DWZey7C59JDYcj_mRnbDFM-qXwgmDoY3GQ87j8QdDqgqLCS4XTAomE3gi3Ov1gnfsCOCzA29TYKh1q_PwSAvx3JNgGThJofEKlIvmT0QLXpccQY4Iugu931OJONgkz8gYcPnrdUJxtsZIkY2v-3edud3Ajk_6QXT9ZAw9pVcEOd3SOi7Mhj1Zuo8mLl61tkTBIXP1IGZfrIL8zjByw3p9KebSduCYM" />
                <div className="absolute inset-0 bg-gradient-to-t from-on-background/90 via-on-background/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-8 text-on-tertiary-container">
                  <span className="text-primary-fixed font-label text-xs uppercase tracking-widest mb-3 block">Concrete Pumping</span>
                  <h3 className="text-2xl font-headline font-black text-white mb-3">High-Rise Pumping Project</h3>
                  <p className="text-sm text-surface-container-high opacity-80 mb-4">Precision vertical pumping for a 32-story residential tower in Downtown Edmonton.</p>
                  <span className="text-primary font-headline font-bold uppercase text-xs tracking-widest group-hover:underline underline-offset-4 decoration-2">View Case Study</span>
                </div>
              </div>
            </div>

            {/* Third Card */}
            <div className="md:col-span-4 group cursor-pointer">
              <div className="relative overflow-hidden rounded-xl bg-surface-container-lowest h-[400px] shadow-[0_12px_32px_rgba(0,0,0,0.06)] transition-all hover:translate-y-[-4px]">
                <img alt="Residential Patio" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDZ3Y1NzLWbL-kQixoTo-EnYbLfmBNHTNBybVIrqhaJad08ZqTFAbp0eJ6d8TOHsUJbFUqfsHppLrUCk9HeK5Yo9vv2liLcR8da4I4Bao84erGCiG8MKvWSZKBp3ofejWqRr3qCzNEEzGQiUqMeK78e7PjwNLRKCBF6f9gVX5sMJ7SdNMNduxwtT80lSmhL3BegrhKFS_JyxmlRLlfanPD90nHZltsm2VEjnUSuKCkfqAMfNMH97LC_kqnCc9tH1jOC0OrdSnjNeXzf" />
                <div className="absolute inset-0 bg-gradient-to-t from-on-background/90 via-on-background/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-8 text-on-tertiary-container">
                  <span className="text-primary-fixed font-label text-xs uppercase tracking-widest mb-3 block">Residential</span>
                  <h3 className="text-2xl font-headline font-black text-white mb-3">Custom Residential Patio</h3>
                  <p className="text-sm text-surface-container-high opacity-80">Stamped and polished concrete living space for an estate home in Bearspaw.</p>
                </div>
              </div>
            </div>

            {/* Mixed Content Card */}
            <div className="md:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="group cursor-pointer relative overflow-hidden rounded-xl h-full shadow-[0_12px_32px_rgba(0,0,0,0.06)] bg-surface-container-lowest p-8 flex flex-col justify-center border-l-4 border-primary hover:translate-y-[-4px]">
                <h3 className="text-3xl font-headline font-black text-on-background mb-4">Structural Precision.</h3>
                <p className="text-secondary mb-6 leading-relaxed">Our portfolio spans over 15 years of Alberta's infrastructure growth. Each project represents our commitment to durability and technical excellence.</p>
                <div className="flex items-center gap-2 text-primary font-headline font-bold">
                  <span>Request Details</span>
                  <span className="material-symbols-outlined">arrow_forward</span>
                </div>
              </div>
              <div className="group cursor-pointer relative overflow-hidden rounded-xl h-[400px] shadow-[0_12px_32px_rgba(0,0,0,0.06)] hover:translate-y-[-4px]">
                <img alt="Bridge Project" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC9YQIrDymtJp2EV5xzegfTJirT8TJP24qWpo3_JLUhPLKZoQD4I6IWU2cZI0lXmQfFDCQzcuKEGWhl06vJd5tkSegGetunOUaO8k1jj-Gb8WcxKoGx80B6yF-IB8ho_bSKOdlhog8rJQp-AmTLs1Re_xwkz662s7AgwoigHH8YeutiPWtTbuJeFj0isG1B2UcEF8Oe05xFUxV7-62f3Q776R-34l-9AWe1r_2Xtkd513S0wfBuraxj_p48aUnchs5MiT0tQ3co53X5" />
                <div className="absolute inset-0 bg-gradient-to-t from-on-background/90 via-on-background/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-8 text-on-tertiary-container">
                  <span className="text-primary-fixed font-label text-xs uppercase tracking-widest mb-3 block">Public Infrastructure</span>
                  <h3 className="text-2xl font-headline font-black text-white mb-2">Bridge Abutment Pour</h3>
                  <p className="text-sm text-surface-container-high opacity-80">Reinforced concrete supports for the Highway 2 expansion project.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Builder Highlights */}
        <section className="bg-secondary-container py-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
              <div>
                <h2 className="text-5xl font-headline font-black text-on-background mb-4 tracking-tighter">Trusted by Alberta's Best.</h2>
                <p className="text-secondary max-w-xl text-lg font-medium">We collaborate with the province's leading general contractors and residential developers to deliver unparalleled structural integrity.</p>
              </div>
              <div className="hidden md:block h-px flex-1 bg-outline-variant/30 mx-12 mb-6"></div>
              <div className="flex items-center gap-2">
                <span className="font-headline font-bold text-primary">Partnerships</span>
                <span className="material-symbols-outlined text-primary">verified</span>
              </div>
            </div>
            <div className="bg-white grid grid-cols-2 md:grid-cols-4 gap-4 rounded-xl">
              <div className="p-12 flex flex-col items-center justify-center rounded-xl shadow-sm text-primary group hover:bg-on-background transition-colors">
                <span className="material-symbols-outlined text-5xl mb-4" data-weight="fill">domain</span>
                <span className="font-headline font-bold text-on-surface tracking-tight text-center">Vanguard Builders</span>
              </div>
              <div className="p-12 flex flex-col items-center justify-center rounded-xl shadow-sm text-primary group hover:bg-on-background transition-colors">
                <span className="material-symbols-outlined text-5xl mb-4" data-weight="fill">architecture</span>
                <span className="font-headline font-bold text-on-surface tracking-tight text-center">Prairie Structures</span>
              </div>
              <div className="p-12 flex flex-col items-center justify-center rounded-xl shadow-sm text-primary group hover:bg-on-background transition-colors">
                <span className="material-symbols-outlined text-5xl mb-4" data-weight="fill">construction</span>
                <span className="font-headline font-bold text-on-surface tracking-tight text-center">Summit Group</span>
              </div>
              <div className="p-12 flex flex-col items-center justify-center rounded-xl shadow-sm text-primary group hover:bg-on-background transition-colors">
                <span className="material-symbols-outlined text-5xl mb-4" data-weight="fill">engineering</span>
                <span className="font-headline font-bold text-on-surface tracking-tight text-center">Apex Contractors</span>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 max-w-7xl mx-auto px-6">
          <div className="bg-on-background rounded-xl p-12 md:p-20 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/10 -skew-x-12 transform translate-x-20"></div>
            <div className="relative z-10">
              <h2 className="text-4xl md:text-6xl font-headline font-black text-white mb-8 leading-tight tracking-tighter">Ready to lay the <br/><span className="text-primary">foundation</span> for your project?</h2>
              <div className="flex flex-wrap gap-6">
                <Link href="/contact">
                  <button className="bg-primary hover:bg-primary-container text-on-primary px-10 py-5 rounded-md font-headline font-black text-lg transition-all transform active:scale-95 shadow-xl">
                      Start a Quote
                  </button>
                </Link>
                <Link href="/services">
                  <button className="border-2 border-outline-variant/30 text-white px-10 py-5 rounded-md font-headline font-black text-lg hover:bg-white/10 transition-all">
                      View Services
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
