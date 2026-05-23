import Image from "next/image";
import Link from "next/link";
import { imageAlt, imageSource } from "../../sanity/image";

export default function ServiceCard({ service }) {
  const image = imageSource(service.heroImage);

  return (
    <article className="group overflow-hidden rounded-lg bg-surface-container-lowest shadow-[0_12px_32px_rgba(0,0,0,0.06)]">
      {image ? (
        <div className="relative h-56">
          <Image
            src={image}
            alt={imageAlt(service.heroImage, service.title)}
            fill
            sizes="(min-width: 768px) 33vw, 100vw"
            className="object-cover grayscale transition-all duration-500 group-hover:grayscale-0"
          />
        </div>
      ) : null}
      <div className="p-7">
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-primary">{service.category || "Concrete Service"}</p>
        <h3 className="mb-4 font-headline text-2xl font-black text-on-background">{service.title}</h3>
        <p className="mb-6 text-sm leading-relaxed text-secondary">{service.shortDescription}</p>
        <Link href={`/services/${service.slug}`} className="font-headline text-sm font-bold uppercase tracking-widest text-primary">
          View Service
        </Link>
      </div>
    </article>
  );
}
