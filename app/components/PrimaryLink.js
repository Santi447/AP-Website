export default function PrimaryLink({ href, children, variant = "solid" }) {
  const styles =
    variant === "outline"
      ? "border border-white/30 bg-white/10 text-white hover:border-white hover:bg-white/15"
      : "bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/20 hover:bg-amber-400";

  return (
    <a
      href={href}
      className={`inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition duration-300 ${styles}`}
    >
      {children}
    </a>
  );
}
