import Link from "next/link";

interface CardItem {
  id: number;
  title: string;
  subtitle: string;
  image: string;
  href: string;
}

function CloverMark({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 40 40"
      className={className}
      fill="currentColor"
    >
      <path d="M19.98 18.37C14.9 14.74 11.06 11.56 12.7 7.28c1.32-4.29 7.69-4.34 8.28 1.04.31 3.42-.48 6.6-1 10.05Zm1.65 1.48c3.42-5.09 6.6-8.93 10.88-7.29 4.29 1.32 4.34 7.69-1.04 8.28-3.42.31-6.6-.48-10.05-.99Zm-1.6 1.67c5.08 3.42 8.92 6.6 7.28 10.88-1.32 4.29-7.69 4.34-8.28-1.04-.31-3.42.48-6.6 1-10.05Zm-1.67-1.61c-3.42 5.08-6.6 8.92-10.88 7.28-4.29-1.32-4.34-7.69 1.04-8.28 3.42-.31 6.6.48 10.05 1Z" />
      <path d="M19.7 21.2c-2.57 4.24-4.11 7.84-2.9 11.12.44 1.2 1.56 1.89 2.77 1.89s2.34-.69 2.78-1.89c1.2-3.28-.34-6.88-2.91-11.12Z" />
      <circle cx="20" cy="20" r="2.6" />
    </svg>
  );
}

const cards: CardItem[] = [
  {
    id: 1,
    title: "PROJECTS",
    subtitle: "Projects By: RRAP",
    image: "/images/Hobbies/Design/cards-01.png",
    href: "/projects",
  },
  {
    id: 2,
    title: "HOBBIES",
    subtitle: "Hobbies By: RRAP",
    image: "/images/Hobbies/Design/cards-02.png",
    href: "/hobbies",
  },
  {
    id: 3,
    title: "CERTIFICATIONS",
    subtitle: "Certifications By: RRAP",
    image: "/images/Hobbies/Design/cards-03.png",
    href: "/certifications",
  },
];

export default function ExpandCards() {
  return (
    <div className="flex h-[400px] w-full max-w-4xl gap-3 px-4 sm:h-[450px] sm:gap-4 md:h-[500px]">
      {cards.map((card) => (
        <Link
          key={card.id}
          href={card.href}
          aria-label={`Open ${card.title} page`}
          className="group relative min-w-0 flex-1 cursor-pointer overflow-hidden rounded-2xl border border-[var(--color-border)] text-left transition-[flex] duration-500 ease-[cubic-bezier(0.28,-0.03,0,0.99)] hover:flex-[5] focus-visible:flex-[5] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-text-secondary)] sm:rounded-3xl"
          style={{
            backgroundColor:
              "color-mix(in srgb, var(--color-card-bg) 58%, transparent)",
            backdropFilter: "blur(18px)",
            boxShadow: "0 16px 40px -24px var(--color-text)",
          }}
        >
          <img
            src={card.image}
            alt=""
            className="absolute inset-0 h-full w-full scale-105 object-cover opacity-0 transition duration-500 group-hover:scale-100 group-hover:opacity-100 group-focus-visible:scale-100 group-focus-visible:opacity-100"
          />

          <span className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 group-hover:opacity-0 group-focus-visible:opacity-0">
            <span
              className="flex h-12 w-12 items-center justify-center rounded-full sm:h-14 sm:w-14"
              style={{
                backgroundColor:
                  "color-mix(in srgb, var(--color-card-bg) 65%, transparent)",
                color: "var(--color-text)",
                backdropFilter: "blur(12px)",
                border: "1px solid var(--color-border)",
              }}
            >
              <CloverMark className="h-6 w-6 transition-transform duration-500 ease-out group-hover:rotate-180 sm:h-7 sm:w-7" />
            </span>
          </span>

          <span
            className="absolute inset-x-0 bottom-0 flex items-end border-t p-5 opacity-0 backdrop-blur-xl transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100 sm:p-7"
            style={{
              background:
                "linear-gradient(to top, color-mix(in srgb, var(--color-card-bg) 94%, transparent), color-mix(in srgb, var(--color-card-bg) 58%, transparent))",
              borderColor: "var(--color-border)",
            }}
          >
            <span className="flex min-w-0 items-end gap-4">
              <span
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full sm:h-14 sm:w-14"
                style={{
                  backgroundColor:
                    "color-mix(in srgb, var(--color-card-bg) 65%, transparent)",
                  color: "var(--color-text)",
                  border: "1px solid var(--color-border)",
                }}
                aria-hidden="true"
              >
                <CloverMark className="h-6 w-6 sm:h-7 sm:w-7" />
              </span>
              <span className="min-w-0 overflow-hidden">
                <span
                  className="block whitespace-nowrap text-sm font-bold uppercase tracking-wider sm:text-lg"
                  style={{
                    fontFamily: "var(--font-body)",
                    color: "var(--color-text)",
                  }}
                >
                  {card.title}
                </span>
                <span
                  className="mt-1 block whitespace-nowrap text-xs sm:text-sm"
                  style={{
                    fontFamily: "var(--font-body)",
                    color: "var(--color-text-secondary)",
                  }}
                >
                  {card.subtitle}
                </span>
              </span>
            </span>
          </span>
        </Link>
      ))}
    </div>
  );
}
