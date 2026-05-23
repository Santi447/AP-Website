import Image from "next/image";
import Link from "next/link";
import { imageAlt, imageSource } from "../../sanity/image";

export default function ProjectCard({ project, featured = false }) {
  const image = imageSource(project.featuredImage);

  return (
    <article className={`group overflow-hidden rounded-lg bg-surface-container-lowest shadow-[0_12px_32px_rgba(0,0,0,0.06)] ${featured ? "md:col-span-2" : ""}`}>
      <Link href={`/projects/${project.slug}`} className="block">
        <div className="relative h-80">
          {image ? (
            <Image
              src={image}
              alt={imageAlt(project.featuredImage, project.title)}
              fill
              sizes={featured ? "(min-width: 768px) 66vw, 100vw" : "(min-width: 768px) 33vw, 100vw"}
              className="object-cover grayscale transition-all duration-500 group-hover:scale-105 group-hover:grayscale-0"
            />
          ) : null}
          <div className="absolute inset-0 bg-gradient-to-t from-on-background/80 via-on-background/20 to-transparent" />
          <div className="absolute bottom-0 left-0 p-7">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-primary-fixed">{project.projectType || "Project"}</p>
            <h3 className="mb-3 font-headline text-3xl font-black text-white">{project.title}</h3>
            <p className="max-w-xl text-sm leading-relaxed text-white/75">{project.description}</p>
          </div>
        </div>
      </Link>
    </article>
  );
}
