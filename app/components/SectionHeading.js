export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "dark",
}) {
  const alignment = align === "center" ? "mx-auto text-center" : "";
  const titleClass = tone === "light" ? "text-white" : "text-slate-900";
  const descriptionClass = tone === "light" ? "text-slate-300" : "text-slate-600";

  return (
    <div className={`max-w-3xl ${alignment}`}>
      <p className="text-sm font-semibold uppercase tracking-[0.25em] text-amber-600">
        {eyebrow}
      </p>
      <h2
        className={`mt-4 text-3xl font-semibold tracking-tight sm:text-4xl ${titleClass}`}
      >
        {title}
      </h2>
      <p className={`mt-4 text-lg leading-8 ${descriptionClass}`}>{description}</p>
    </div>
  );
}
