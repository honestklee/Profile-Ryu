import Link from "next/link";
import HobbyWorkCard from "@/components/hobbies/HobbyWorkCard";
import type { HobbyWork } from "@/data/hobbies/works";

interface HobbyGalleryPageProps {
  title: string;
  intro: string;
  works: HobbyWork[];
}

export default function HobbyGalleryPage({
  title,
  intro,
  works,
}: HobbyGalleryPageProps) {
  return (
    <main className="min-h-screen px-5 py-8 sm:px-10 sm:py-12">
      <div className="mx-auto max-w-6xl">
        <Link
          href="/hobbies"
          className="inline-flex items-center gap-2 text-xs tracking-[0.18em] transition-opacity hover:opacity-60 sm:text-sm"
          style={{
            color: "var(--color-text)",
            fontFamily: "var(--font-body)",
          }}
        >
          <span aria-hidden="true">←</span> BACK TO HOBBIES
        </Link>

        <header className="mb-10 mt-16 max-w-3xl sm:mb-14 sm:mt-20">
          <p
            className="mb-4 text-[0.65rem] uppercase tracking-[0.24em]"
            style={{
              color: "var(--color-text-secondary)",
              fontFamily: "var(--font-body)",
            }}
          >
            Creative portfolio · RRAP
          </p>
          <h1
            className="break-words text-5xl font-semibold uppercase leading-[0.95] tracking-[-0.06em] sm:text-7xl"
            style={{
              color: "var(--color-text)",
              fontFamily: "var(--font-body)",
            }}
          >
            {title}
          </h1>
          <p
            className="mt-5 max-w-2xl text-sm leading-relaxed sm:mt-6 sm:text-base"
            style={{
              color: "var(--color-text-secondary)",
              fontFamily: "var(--font-body)",
            }}
          >
            {intro}
          </p>
        </header>

        {works.length > 0 ? (
          <div className="grid gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
            {works.map((work) => (
              <HobbyWorkCard key={`${work.title}-${work.year}`} work={work} />
            ))}
          </div>
        ) : (
          <div
            className="rounded-2xl border px-6 py-16 text-center sm:px-10"
            style={{
              backgroundColor: "var(--color-card-bg)",
              borderColor: "var(--color-border)",
            }}
          >
            <p
              className="text-lg"
              style={{
                color: "var(--color-text)",
                fontFamily: "var(--font-body)",
              }}
            >
              Karya untuk galeri ini belum ditambahkan.
            </p>
            <p
              className="mt-2 text-sm"
              style={{
                color: "var(--color-text-secondary)",
                fontFamily: "var(--font-body)",
              }}
            >
              Setelah ditambahkan, setiap karya akan tampil dengan gambar,
              judul, dan tahun.
            </p>
          </div>
        )}
      </div>
    </main>
  );
}
