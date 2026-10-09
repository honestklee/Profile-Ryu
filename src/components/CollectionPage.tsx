import Link from "next/link";

export interface CollectionItem {
  title: string;
  description: string;
  label: string;
  mark: string;
  accent: string;
  details: string[];
  href?: string;
}

interface CollectionPageProps {
  title: string;
  eyebrow: string;
  intro: string;
  items: CollectionItem[];
  simple?: boolean;
}

export default function CollectionPage({
  title,
  eyebrow,
  intro,
  items,
  simple = false,
}: CollectionPageProps) {
  return (
    <main className="min-h-screen px-5 py-8 sm:px-10 sm:py-12">
      <div className="mx-auto max-w-6xl">
        <Link
          href="/#about"
          className="inline-flex items-center gap-2 text-xs tracking-[0.18em] transition-opacity hover:opacity-60 sm:text-sm"
          style={{
            color: "var(--color-text)",
            fontFamily: "var(--font-body)",
          }}
        >
          <span aria-hidden="true">←</span> BACK TO ABOUT
        </Link>

        <header className="mb-10 mt-16 max-w-3xl sm:mb-14 sm:mt-20">
          <p
            className="mb-4 text-[0.65rem] uppercase tracking-[0.24em]"
            style={{
              color: "var(--color-text-secondary)",
              fontFamily: "var(--font-body)",
            }}
          >
            {eyebrow}
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

        <div
          className={`grid gap-5 sm:gap-6 ${simple ? "md:grid-cols-3" : "lg:grid-cols-2"}`}
        >
          {items.map((item, index) => {
            const card = (
              <article
                className={`overflow-hidden rounded-2xl border ${simple ? "" : "lg:grid lg:grid-cols-[0.9fr_1.1fr]"}`}
                style={{
                  backgroundColor: "var(--color-card-bg)",
                  borderColor: "var(--color-border)",
                  boxShadow: "0 18px 48px -38px var(--color-text)",
                }}
              >
              <div
                className={`relative flex items-center justify-center overflow-hidden border-b ${simple ? "min-h-36" : "min-h-52 lg:min-h-full"}`}
                style={{
                  borderColor: "var(--color-border)",
                  background: `radial-gradient(ellipse at 50% 48%, color-mix(in srgb, ${item.accent} 24%, transparent), transparent 62%), repeating-linear-gradient(0deg, transparent, transparent 31px, color-mix(in srgb, var(--color-border) 42%, transparent) 32px), repeating-linear-gradient(90deg, transparent, transparent 31px, color-mix(in srgb, var(--color-border) 42%, transparent) 32px), var(--color-bg-secondary)`,
                }}
              >
                <span
                  className={`select-none text-center font-black uppercase tracking-[-0.08em] ${simple ? "text-3xl sm:text-4xl" : "text-5xl sm:text-6xl"}`}
                  style={{
                    color: item.accent,
                    textShadow: `0 0 36px color-mix(in srgb, ${item.accent} 38%, transparent)`,
                    fontFamily: "var(--font-body)",
                  }}
                  aria-hidden="true"
                >
                  {item.mark}
                </span>
                <span
                  className="absolute left-4 top-4 text-[0.55rem] uppercase tracking-[0.18em]"
                  style={{ color: "var(--color-text-secondary)" }}
                >
                  {String(index + 1).padStart(2, "0")} /{" "}
                  {String(items.length).padStart(2, "0")}
                </span>
                <span
                  className="absolute bottom-4 right-4 h-2 w-2 rounded-full"
                  style={{ backgroundColor: item.accent }}
                  aria-hidden="true"
                />
              </div>

              <div className={simple ? "p-5 sm:p-6" : "p-5 sm:p-7"}>
                <p
                  className="mb-2 text-[0.6rem] uppercase tracking-[0.18em]"
                  style={{
                    color: "var(--color-text-secondary)",
                    fontFamily: "var(--font-body)",
                  }}
                >
                  {item.label}
                </p>
                <h2
                  className="break-words text-2xl font-semibold uppercase leading-tight tracking-[-0.04em] sm:text-3xl"
                  style={{
                    color: "var(--color-text)",
                    fontFamily: "var(--font-body)",
                  }}
                >
                  {item.title}
                </h2>
                <p
                  className="mt-3 text-sm leading-relaxed"
                  style={{
                    color: "var(--color-text-secondary)",
                    fontFamily: "var(--font-body)",
                  }}
                >
                  {item.description}
                </p>

                {item.href && (
                  <span
                    className="mt-5 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.16em]"
                    style={{
                      color: "var(--color-text)",
                      fontFamily: "var(--font-body)",
                    }}
                  >
                    View works <span aria-hidden="true">→</span>
                  </span>
                )}

                {item.details.length > 0 && (
                  <ul
                    className="mt-5 flex flex-wrap gap-2 border-t pt-4"
                    style={{ borderColor: "var(--color-border)" }}
                    aria-label={`${item.title} details`}
                  >
                    {item.details.map((detail) => (
                      <li
                        key={detail}
                        className="rounded-full border px-3 py-1.5 text-[0.68rem]"
                        style={{
                          color: "var(--color-text)",
                          backgroundColor: "var(--color-bg-secondary)",
                          borderColor: "var(--color-border)",
                          fontFamily: "var(--font-body)",
                        }}
                      >
                        {detail}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              </article>
            );

            return item.href ? (
              <Link
                key={`${item.title}-${index}`}
                href={item.href}
                className="group block rounded-2xl transition-transform duration-300 hover:-translate-y-1 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-text-secondary)]"
                aria-label={`View ${item.title} works`}
              >
                {card}
              </Link>
            ) : (
              <div key={`${item.title}-${index}`}>{card}</div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
