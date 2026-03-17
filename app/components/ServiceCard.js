export default function ServiceCard({ service }) {
  return (
    <article className="group rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/70">
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-900 text-sm font-semibold text-white">
        {service.icon}
      </div>
      <h3 className="mt-5 text-xl font-semibold text-slate-900">{service.title}</h3>
      <p className="mt-3 text-base leading-7 text-slate-600">{service.description}</p>
      <a
        href="#contact"
        className="mt-6 inline-flex items-center text-sm font-semibold text-amber-600 transition group-hover:text-amber-700"
      >
        Learn More
      </a>
    </article>
  );
}
