const skillGroups = [
  {
    title: "Programming",
    skills: ["JavaScript", "Python", "C#", "SQL", "VBA"],
  },
  {
    title: "Frameworks",
    skills: [
      "Next.js",
      "Vue.js",
      "ASP.NET",
      "Fastify",
      "Bootstrap",
      "SQLAlchemy",
      "Sequelize",
    ],
  },
  {
    title: "Databases",
    skills: ["MySQL", "Microsoft SQL Server"],
  },
  {
    title: "Business tools",
    skills: ["Power Apps", "Power Automate", "SharePoint", "Microsoft Excel"],
  },
  {
    title: "Creative",
    skills: ["Figma", "Visual design", "Video editing"],
  },
];

function CloverMark() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 40 40"
      className="h-5 w-5 transition-transform duration-300 group-hover:rotate-45 sm:h-6 sm:w-6"
      fill="currentColor"
    >
      <path d="M19.98 18.37C14.9 14.74 11.06 11.56 12.7 7.28c1.32-4.29 7.69-4.34 8.28 1.04.31 3.42-.48 6.6-1 10.05Zm1.65 1.48c3.42-5.09 6.6-8.93 10.88-7.29 4.29 1.32 4.34 7.69-1.04 8.28-3.42.31-6.6-.48-10.05-.99Zm-1.6 1.67c5.08 3.42 8.92 6.6 7.28 10.88-1.32 4.29-7.69 4.34-8.28-1.04-.31-3.42.48-6.6 1-10.05Zm-1.67-1.61c-3.42 5.08-6.6 8.92-10.88 7.28-4.29-1.32-4.34-7.69 1.04-8.28 3.42-.31 6.6.48 10.05 1Z" />
      <path d="M19.7 21.2c-2.57 4.24-4.11 7.84-2.9 11.12.44 1.2 1.56 1.89 2.77 1.89s2.34-.69 2.78-1.89c1.2-3.28-.34-6.88-2.91-11.12Z" />
      <circle cx="20" cy="20" r="2.6" />
    </svg>
  );
}

export default function SkillsetSection() {
  return (
    <section
      id="skillset"
      className="px-5 py-24 sm:px-10 sm:py-32"
      aria-labelledby="skillset-title"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-7 flex items-end justify-between gap-5 border-b pb-5 sm:mb-9">
          <div>
            <h2
              id="skillset-title"
              className="text-4xl tracking-wide sm:text-5xl"
              style={{ color: "var(--color-text)" }}
            >
              Skillset
            </h2>
          </div>
          <span
            className="hidden rounded-full border px-3 py-1.5 text-[0.65rem] uppercase tracking-[0.14em] sm:inline-flex"
            style={{
              color: "var(--color-text-secondary)",
              borderColor: "var(--color-border)",
            }}
          >
            Skills in practice
          </span>
        </div>

        <div className="divide-y" style={{ borderColor: "var(--color-border)" }}>
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="group grid gap-3 py-5 transition-colors sm:grid-cols-[3.5rem_minmax(12rem,0.8fr)_1.4fr] sm:items-center sm:gap-5 sm:py-6"
              style={{ borderColor: "var(--color-border)" }}
            >
              <span
                className="flex h-8 w-8 items-center justify-center rounded-full transition-colors duration-300"
                style={{
                  color: "var(--color-text)",
                  backgroundColor: "var(--color-bg-secondary)",
                  border: "1px solid var(--color-border)",
                }}
              >
                <CloverMark />
              </span>
              <h3
                className="font-[var(--font-body)] text-lg font-medium uppercase tracking-tight sm:text-xl"
                style={{
                  color: "var(--color-text)",
                  fontFamily: "var(--font-body)",
                }}
              >
                {group.title}
              </h3>
              <ul
                className="flex flex-wrap gap-2 sm:justify-start"
                aria-label={`${group.title} skills`}
              >
                {group.skills.map((skill, index) => (
                  <li
                    key={skill}
                    className="rounded-full border px-3 py-1.5 text-xs transition-colors duration-200 group-hover:border-[var(--color-text-secondary)] sm:text-[0.78rem]"
                    style={{
                      color:
                        index === 0
                          ? "var(--color-text)"
                          : "var(--color-text-secondary)",
                      backgroundColor:
                        index === 0
                          ? "color-mix(in srgb, var(--color-text) 5%, transparent)"
                          : "transparent",
                      borderColor: "var(--color-border)",
                    }}
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p
          className="mt-5 text-xs leading-relaxed"
          style={{ color: "var(--color-text-secondary)" }}
        >
          Technologies and tools used across my projects and professional experience.
        </p>
      </div>
    </section>
  );
}
