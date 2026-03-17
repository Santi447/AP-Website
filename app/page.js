import SectionHeading from "./components/SectionHeading";
import PrimaryLink from "./components/PrimaryLink";
import ServiceCard from "./components/ServiceCard";

const navigation = [
  "Home",
  "Services",
  "Projects",
  "Reviews",
  "Process",
  "Service Areas",
  "Contact",
];

const trustPoints = [
  "Local family-owned business",
  "Fully insured",
  "Free estimates",
  "High-quality workmanship",
];

const stats = [
  { value: "18+", label: "Years serving Calgary homeowners" },
  { value: "450+", label: "Residential projects completed" },
  { value: "30K+", label: "Square feet of commercial flooring completed" },
  { value: "5", label: "Communities served across the region" },
];

const services = [
  {
    title: "Concrete Driveways",
    description:
      "New pours and replacements designed for curb appeal, drainage, and long-term durability.",
    icon: "D",
  },
  {
    title: "Patios",
    description:
      "Clean, modern backyard patios built for entertaining and everyday family use.",
    icon: "P",
  },
  {
    title: "Walkways",
    description:
      "Smooth, well-finished walkways that improve access and tie your exterior together.",
    icon: "W",
  },
  {
    title: "Stamped Concrete",
    description:
      "Decorative finishes that add texture, character, and a premium look to outdoor spaces.",
    icon: "S",
  },
  {
    title: "Repairs",
    description:
      "Concrete repair solutions for damaged, uneven, or aging surfaces around your home.",
    icon: "R",
  },
  {
    title: "Sidewalks",
    description:
      "Reliable sidewalk installations with attention to grade, safety, and finish quality.",
    icon: "C",
  },
  {
    title: "Commercial Floors",
    description:
      "Large-scale concrete floor installations and finishing for commercial spaces that need durability, consistency, and professional execution.",
    icon: "F",
  },
];

const projects = [
  {
    title: "Stamped Concrete Patio",
    description:
      "A backyard patio upgrade with decorative texture, clean borders, and a warm charcoal finish.",
    location: "Calgary",
  },
  {
    title: "Driveway Replacement",
    description:
      "Full residential driveway removal and replacement with improved slope and a crisp broom finish.",
    location: "NW Calgary",
  },
  {
    title: "Decorative Walkway",
    description:
      "A front-entry walkway that improved curb appeal and created a safer path through the yard.",
    location: "Airdrie",
  },
];

const reasons = [
  {
    title: "Built for Alberta Weather",
    description:
      "We plan for freeze-thaw cycles, drainage, and surface durability so your concrete lasts.",
  },
  {
    title: "Clear, Honest Quotes",
    description:
      "Homeowners get straightforward pricing, practical recommendations, and no pressure.",
  },
  {
    title: "Detail-Driven Workmanship",
    description:
      "From prep to final finish, we take pride in crisp edges, clean pours, and consistent results.",
  },
  {
    title: "Proven Commercial Capacity",
    description:
      "From residential projects to 30,000+ square feet of commercial flooring, we have the crew and experience to handle serious scope.",
  },
  {
    title: "Reliable Communication",
    description:
      "You know what to expect, when we are arriving, and how your project is moving forward.",
  },
];

const processSteps = [
  {
    title: "Request a Quote",
    description:
      "Tell us about your driveway, patio, repair, or finishing project and we will respond promptly.",
  },
  {
    title: "On-Site Consultation",
    description:
      "We visit your property, assess the space, answer questions, and recommend the best approach.",
  },
  {
    title: "Project Planning",
    description:
      "You receive a clear scope, timeline, and quote so you can move ahead with confidence.",
  },
  {
    title: "Installation & Finishing",
    description:
      "Our crew completes the work with careful prep, quality materials, and professional finishing.",
  },
  {
    title: "Final Walkthrough",
    description:
      "We review the finished project with you to make sure everything looks right and feels complete.",
  },
];

const testimonials = [
  {
    name: "Sarah M.",
    location: "Calgary",
    quote:
      "They replaced our front driveway and made the whole process easy. The crew was respectful, on time, and the finish looks excellent.",
  },
  {
    name: "Jason and Nicole T.",
    location: "Chestermere",
    quote:
      "We wanted a patio that looked clean and high-end without overcomplicating things. The quote was honest and the result turned out better than we expected.",
  },
  {
    name: "Alyssa R.",
    location: "Cochrane",
    quote:
      "Communication stood out right away. We always knew what was happening, and the repaired walkway now looks neat, level, and professionally done.",
  },
];

const serviceAreas = ["Calgary", "Airdrie", "Cochrane", "Okotoks", "Chestermere"];



export default function Home() {
  return (
    <main className="bg-stone-50 text-slate-900">
      <section className="relative overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(245,158,11,0.25),_transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(15,23,42,0.9),_transparent_40%)]" />
        <div className="absolute inset-y-0 right-0 hidden w-1/2 bg-[linear-gradient(135deg,rgba(148,163,184,0.14),rgba(15,23,42,0))] lg:block" />

        <div className="relative mx-auto max-w-7xl px-6 pb-16 pt-6 lg:px-8 lg:pb-24">
          <header className="flex flex-col gap-4 rounded-full border border-white/10 bg-white/5 px-5 py-4 backdrop-blur md:flex-row md:items-center md:justify-between">
            <a href="#home" className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/10 text-sm font-bold tracking-[0.2em] text-amber-400">
                AP
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-white/65">
                  Calgary Concrete
                </p>
                <p className="text-base font-semibold text-white">
                  Logo Placeholder
                </p>
              </div>
            </a>

            <nav aria-label="Primary navigation" className="overflow-x-auto">
              <ul className="flex min-w-max items-center gap-5 text-sm text-white/78">
                {navigation.map((item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                      className="transition hover:text-white"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href="tel:403-555-0148"
                className="inline-flex items-center justify-center rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-white transition hover:border-white/35 hover:bg-white/10"
              >
                Call Now
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full bg-amber-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-amber-400"
              >
                Get a Free Quote
              </a>
            </div>
          </header>

          <div
            id="home"
            className="grid gap-14 pt-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:pt-20"
          >
            <div className="max-w-2xl">
              <p className="inline-flex rounded-full border border-white/10 bg-white/8 px-4 py-2 text-sm font-medium text-white/80">
                Trusted concrete contractor for residential projects and large commercial floors in Calgary
              </p>
              <h1 className="mt-8 text-5xl font-semibold tracking-tight text-white sm:text-6xl">
                Professional Concrete Finishing and Commercial Flooring in Calgary
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
                Premium driveways, patios, walkways, repairs, and commercial
                concrete floors built with dependable service, durable finishes,
                and the kind of workmanship that scales from homes to 30,000+
                square feet of flooring.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <PrimaryLink href="#contact">Get a Free Quote</PrimaryLink>
                <PrimaryLink href="#projects" variant="outline">
                  View Our Work
                </PrimaryLink>
              </div>

              <ul className="mt-10 grid gap-3 text-sm text-slate-200 sm:grid-cols-2">
                {trustPoints.map((point) => (
                  <li
                    key={point}
                    className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3"
                  >
                    <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative">
              <div className="absolute -left-6 top-10 hidden h-28 w-28 rounded-full bg-amber-400/20 blur-3xl lg:block" />
              <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/8 shadow-2xl shadow-slate-950/40">
                <div className="border-b border-white/10 p-5">
                  <p className="text-sm font-semibold uppercase tracking-[0.28em] text-amber-400">
                    Featured Project
                  </p>
                  <h2 className="mt-2 text-2xl font-semibold text-white">
                    Exposed aggregate driveway with custom border detail
                  </h2>
                </div>
                <div className="aspect-[4/5] bg-[linear-gradient(160deg,#cbd5e1_0%,#94a3b8_20%,#334155_20%,#0f172a_100%)] p-6">
                  <div className="flex h-full flex-col justify-between rounded-[1.5rem] border border-white/15 bg-[linear-gradient(180deg,rgba(255,255,255,0.18),rgba(255,255,255,0.05))] p-6">
                    <div className="max-w-xs rounded-2xl bg-slate-950/45 p-4 backdrop-blur">
                      <p className="text-sm font-semibold uppercase tracking-[0.25em] text-white/60">
                        Residential Upgrade
                      </p>
                      <p className="mt-2 text-lg font-semibold text-white">
                        Strong curb appeal, durable finish, clean install.
                      </p>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="rounded-2xl border border-white/15 bg-slate-950/45 p-4 backdrop-blur">
                        <p className="text-xs uppercase tracking-[0.2em] text-white/55">
                          Location
                        </p>
                        <p className="mt-2 text-sm font-semibold text-white">
                          SW Calgary
                        </p>
                      </div>
                      <div className="rounded-2xl border border-white/15 bg-slate-950/45 p-4 backdrop-blur">
                        <p className="text-xs uppercase tracking-[0.2em] text-white/55">
                          Finish
                        </p>
                        <p className="mt-2 text-sm font-semibold text-white">
                          Exposed Aggregate
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section aria-label="Credibility stats" className="-mt-8 relative z-10 px-6 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-4 rounded-[2rem] border border-slate-200 bg-white p-5 shadow-xl shadow-slate-200/70 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="rounded-[1.5rem] bg-stone-50 p-5">
              <p className="text-3xl font-semibold tracking-tight text-slate-900">
                {stat.value}
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="services" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <SectionHeading
          eyebrow="Services"
          title="Concrete services for homeowners and commercial spaces"
          description="Whether you are improving curb appeal at home or planning a larger commercial floor, we deliver clean finishes, dependable timelines, and workmanship built to last."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
      </section>

      <section id="projects" className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading
              eyebrow="Featured Projects"
              title="Recent work that shows the finish, detail, and care we bring to every job"
              description="Use this section to highlight both residential transformations and larger-scope commercial flooring work so visitors can immediately see the range of your experience."
            />
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-900 transition hover:border-slate-900 hover:bg-slate-50"
            >
              View All Projects
            </a>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {projects.map((project, index) => (
              <article
                key={project.title}
                className="overflow-hidden rounded-[2rem] border border-slate-200 bg-stone-50"
              >
                <div
                  className={`aspect-[5/4] ${
                    index === 0
                      ? "bg-[linear-gradient(145deg,#1e293b,#475569,#d6d3d1)]"
                      : index === 1
                        ? "bg-[linear-gradient(145deg,#0f172a,#334155,#94a3b8)]"
                        : "bg-[linear-gradient(145deg,#44403c,#78716c,#e7e5e4)]"
                  }`}
                />
                <div className="p-6">
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-600">
                    {project.location}
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold text-slate-900">
                    {project.title}
                  </h3>
                  <p className="mt-3 text-base leading-7 text-slate-600">
                    {project.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-6 py-24 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
        <div className="rounded-[2rem] bg-slate-900 p-8 text-white">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-amber-400">
            Before & After
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight">
            Show the transformation homeowners care about most
          </h2>
          <p className="mt-4 text-lg leading-8 text-slate-300">
            This layout is ready for real project photography so visitors can
            see the difference between worn, damaged concrete and a clean,
            professionally finished result.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-[1.5rem] border border-white/10 bg-white/6 p-5">
              <p className="text-xs uppercase tracking-[0.25em] text-white/55">
                Before
              </p>
              <p className="mt-3 text-lg font-semibold">Cracked, uneven, faded surface</p>
            </div>
            <div className="rounded-[1.5rem] border border-white/10 bg-white/6 p-5">
              <p className="text-xs uppercase tracking-[0.25em] text-white/55">
                After
              </p>
              <p className="mt-3 text-lg font-semibold">
                Clean lines, durable finish, stronger curb appeal
              </p>
            </div>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-stone-100">
            <div className="aspect-[4/5] bg-[linear-gradient(150deg,#44403c,#78716c,#a8a29e)]" />
            <div className="border-t border-slate-200 p-5">
              <p className="text-sm font-semibold text-slate-500">Before</p>
              <p className="mt-2 text-lg font-semibold text-slate-900">
                Worn concrete with visible settling and surface damage
              </p>
            </div>
          </div>
          <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white">
            <div className="aspect-[4/5] bg-[linear-gradient(150deg,#e7e5e4,#cbd5e1,#475569)]" />
            <div className="border-t border-slate-200 p-5">
              <p className="text-sm font-semibold text-amber-600">After</p>
              <p className="mt-2 text-lg font-semibold text-slate-900">
                Upgraded finish with crisp borders and a polished residential look
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            eyebrow="Why Choose Us"
            title="The kind of concrete company homeowners feel comfortable hiring"
            description="We built this page to answer the questions that matter most: Can they handle the job professionally, communicate clearly, and deliver quality whether the project is residential or large commercial?"
            align="center"
          />

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {reasons.map((reason) => (
              <article
                key={reason.title}
                className="rounded-[2rem] border border-slate-200 bg-stone-50 p-6"
              >
                <div className="h-11 w-11 rounded-2xl bg-amber-100" />
                <h3 className="mt-5 text-xl font-semibold text-slate-900">
                  {reason.title}
                </h3>
                <p className="mt-3 text-base leading-7 text-slate-600">
                  {reason.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHeading
            eyebrow="Our Process"
            title="A straightforward process that makes it easy to move forward"
            description="A simple, well-communicated experience helps homeowners feel comfortable from the first call to the final walkthrough."
          />

          <div className="space-y-4">
            {processSteps.map((step, index) => (
              <article
                key={step.title}
                className="flex gap-5 rounded-[2rem] border border-slate-200 bg-white p-5 shadow-sm"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-slate-900 text-sm font-semibold text-white">
                  {index + 1}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-900">{step.title}</h3>
                  <p className="mt-2 text-base leading-7 text-slate-600">
                    {step.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="bg-slate-950 py-24 text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading
              eyebrow="Reviews"
              title="What homeowners say after the job is done"
              description="Strong reviews help remove hesitation. These testimonials are written to feel realistic, reassuring, and conversion-focused."
              tone="light"
            />
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-amber-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-amber-400"
            >
              Request Your Quote
            </a>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <article
                key={testimonial.name}
                className="rounded-[2rem] border border-white/10 bg-white/6 p-6 backdrop-blur"
              >
                <p className="text-amber-400">★★★★★</p>
                <p className="mt-4 text-lg leading-8 text-slate-200">
                  “{testimonial.quote}”
                </p>
                <div className="mt-6">
                  <p className="font-semibold text-white">{testimonial.name}</p>
                  <p className="text-sm text-slate-400">{testimonial.location}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="service-areas" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="grid gap-10 rounded-[2rem] border border-slate-200 bg-white p-8 lg:grid-cols-[0.9fr_1.1fr] lg:p-10">
          <SectionHeading
            eyebrow="Service Areas"
            title="Proudly serving Calgary and nearby communities"
            description="Local focus matters. Homeowners want a contractor who knows the area, shows up reliably, and understands the climate and expectations in southern Alberta."
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {serviceAreas.map((area) => (
              <div
                key={area}
                className="rounded-[1.5rem] border border-slate-200 bg-stone-50 px-5 py-4 text-base font-semibold text-slate-900"
              >
                {area}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="px-6 pb-12 lg:px-8 lg:pb-16">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-[linear-gradient(135deg,#0f172a,#1e293b_55%,#78350f)] px-8 py-12 text-white lg:px-12 lg:py-16">
          <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-amber-300">
                Ready to Start?
              </p>
              <h2 className="mt-4 text-4xl font-semibold tracking-tight">
                Ready to start your concrete project?
              </h2>
              <p className="mt-4 text-lg leading-8 text-slate-200">
                Request a free quote today and let&apos;s talk about your
                driveway, patio, walkway, repair, or commercial flooring
                project. We are here to make the next step feel simple.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row lg:flex-col">
              <a
                href="mailto:quotes@apconcrete.ca"
                className="inline-flex items-center justify-center rounded-full bg-amber-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-amber-400"
              >
                Get a Free Quote
              </a>
              <a
                href="tel:403-555-0148"
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/40 hover:bg-white/15"
              >
                Call 403-555-0148
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 lg:grid-cols-[1.2fr_0.9fr_0.9fr_1fr] lg:px-8">
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-slate-900 text-sm font-bold tracking-[0.2em] text-amber-400">
                AP
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                  Logo Placeholder
                </p>
                <p className="text-lg font-semibold text-slate-900">
                  Calgary Concrete Finishing
                </p>
              </div>
            </div>
            <p className="mt-5 max-w-sm text-base leading-7 text-slate-600">
              Family-owned concrete finishing for homeowners, builders, and
              commercial spaces in Calgary and surrounding communities.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-3 text-base text-slate-700">
              {navigation.map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                    className="transition hover:text-slate-950"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
              Services
            </h3>
            <ul className="mt-4 space-y-3 text-base text-slate-700">
              {services.map((service) => (
                <li key={service.title}>{service.title}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
              Contact
            </h3>
            <ul className="mt-4 space-y-3 text-base text-slate-700">
              <li>403-555-0148</li>
              <li>quotes@apconcrete.ca</li>
              <li>Calgary, Alberta</li>
              <li>Serving Calgary, Airdrie, Cochrane, Okotoks, and Chestermere</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-200 px-6 py-5 text-center text-sm text-slate-500 lg:px-8">
          © 2026 Calgary Concrete Finishing. All rights reserved.
        </div>
      </footer>
    </main>
  );
}
