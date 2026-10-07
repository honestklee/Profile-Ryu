import Link from "next/link";

interface CardItem {
  id: number;
  title: string;
  subtitle: string;
  image: string;
  href: string;
}

const cards: CardItem[] = [
  {
    id: 1,
    title: "PROJECTS",
    subtitle: "Projects By: RRAP",
    image: "/images/1.png",
    href: "/projects",
  },
  {
    id: 2,
    title: "HOBBIES",
    subtitle: "Hobbies By: RRAP",
    image: "/images/2.png",
    href: "/hobbies",
  },
  {
    id: 3,
    title: "CERTIFICATIONS",
    subtitle: "Certifications By: RRAP",
    image: "/images/3.png",
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
            className="absolute inset-0 h-full w-full object-cover opacity-30 transition duration-500 group-hover:scale-100 group-hover:opacity-70"
          />

          <span className="absolute inset-0 flex items-center justify-center transition-opacity group-hover:opacity-0 group-focus-visible:opacity-0">
            <span
              className="flex h-12 w-12 items-center justify-center rounded-full text-base font-semibold sm:h-14 sm:w-14 sm:text-lg"
              style={{
                backgroundColor:
                  "color-mix(in srgb, var(--color-card-bg) 65%, transparent)",
                color: "var(--color-text)",
                fontFamily: "var(--font-body)",
                backdropFilter: "blur(12px)",
                border: "1px solid var(--color-border)",
              }}
            >
              {card.id}
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
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-base font-semibold sm:h-14 sm:w-14 sm:text-lg"
                style={{
                  backgroundColor:
                    "color-mix(in srgb, var(--color-card-bg) 65%, transparent)",
                  color: "var(--color-text)",
                  fontFamily: "var(--font-body)",
                  border: "1px solid var(--color-border)",
                }}
                aria-hidden="true"
              >
                {card.id}
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
