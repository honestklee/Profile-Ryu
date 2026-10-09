"use client";

import { useEffect, useState } from "react";

const experiences = [
  {
    company: "PT. Mattel Indonesia",
    initials: "M",
    date: "May 2025 – Nov 2025",
    role: "EHS & CA (IT Developer)",
    side: "left",
    highlights: [
      "Developed a Safety Patrol website using ASP.NET, Power Automate, SharePoint, Bootstrap, and SQL Server.",
      "Created a 5S Shift Schedule website using ASP.NET, Bootstrap, and SQL Server, and built a Shift Walk Schedule in Excel VBA.",
      "Maintained the PTW system, built with ASP.NET, Power Automate, SharePoint, Bootstrap, and SQL Server.",
      "Maintained five Power Apps: Audit Lens, PTW Audit, 5S Audit, Equipment Certification, and Seat Belt Audit.",
      "Managed SQL Server data and prepared Microsoft Excel reports for Near Miss Recognition and 5S data.",
    ],
  },
  {
    company: "Quantum Teknologi Nusantara",
    initials: "Q",
    date: "Sep 2024 – Apr 2025 extended Dec 2025 - Sep 2026",
    role: "Software Engineer",
    side: "right",
    highlights: [
      "Developed and updated client-facing websites and applications, as well as products for Quantum, including Meepo and Kenangan.",
      "Remade the BSMR website using Next.js, Python, SQLAlchemy, and MySQL.",
      "Created tools for Meepo using Next.js, Fastify, Sequelize, and MySQL.",
      "Remade the Avian website using Next.js and Vue.js.",
      "Worked across frontend, backend, and database technologies to deliver products for client needs and Quantum's product portfolio.",
    ],
  },
  {
    company: "AkunImpact",
    initials: "AI",
    date: "Apr 2024 – Jun 2024",
    role: "Customer Service",
    side: "left",
    highlights: [
      "Supported customers buying and selling social media accounts through Instagram and other social media channels.",
      "Assisted both sellers and buyers by responding to inquiries and providing customer service throughout their interactions.",
      "Managed and organized seller information in Microsoft Excel.",
      "Collaborated with a two-member customer service team to handle customer support responsibilities.",
    ],
  },
];

export default function ExperienceSection() {
  const [timelineProgress, setTimelineProgress] = useState(0);

  useEffect(() => {
    let frame = 0;

    const updateProgress = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const timeline = document.querySelector("#experience ol");
        if (!timeline) return;

        const { top, height } = timeline.getBoundingClientRect();
        const progress = (window.innerHeight - top) / (window.innerHeight + height);
        setTimelineProgress(Math.min(1, Math.max(0, progress)));
      });
    };

    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, []);

  return (
    <section
      id="experience"
      className="px-5 py-24 sm:px-10 sm:py-32"
      aria-labelledby="experience-title"
    >
      <div className="mx-auto max-w-5xl">
        <h2
          id="experience-title"
          className="mb-16 text-center text-4xl tracking-wide sm:mb-20 sm:text-5xl"
          style={{ color: "var(--color-text)" }}
        >
          Experiences
        </h2>

        <div className="relative">
          <span
            aria-hidden="true"
            className="pointer-events-none absolute bottom-0 left-[0.4375rem] top-0 w-px bg-[var(--color-border)] md:left-1/2"
          />
          <span
            aria-hidden="true"
            className="pointer-events-none absolute left-[0.4375rem] top-0 z-[1] w-px origin-top bg-[var(--color-text-secondary)] md:left-1/2"
            style={{
              height: `${timelineProgress * 100}%`,
              boxShadow: "0 0 10px 2px var(--color-text-secondary)",
            }}
          />
          <span
            aria-hidden="true"
            className="pointer-events-none absolute left-[calc(0.4375rem-3px)] z-[1] h-2 w-[7px] rounded-full bg-[var(--color-text)] shadow-[0_0_10px_2px_var(--color-text-secondary)] md:left-[calc(50%-3px)]"
            style={{ top: `${timelineProgress * 100}%` }}
          />
          <ol className="relative space-y-8 md:space-y-12">
            {experiences.map((experience) => {
              const isLeft = experience.side === "left";

              return (
                <li
                  key={experience.company}
                  className="relative grid pl-8 md:grid-cols-[minmax(0,1fr)_3rem_minmax(0,1fr)] md:pl-0"
                >
                  <span
                    aria-hidden="true"
                    className="absolute left-0 top-6 z-10 h-4 w-4 rounded-full border-2 bg-[var(--color-bg)] md:static md:col-start-2 md:row-start-1 md:mt-6 md:justify-self-center"
                    style={{ borderColor: "var(--color-text-secondary)" }}
                  />

                  <article
                    className={`rounded-sm border p-5 shadow-[0_12px_35px_-24px_var(--color-text)] transition-colors sm:p-7 ${
                      isLeft ? "md:col-start-1" : "md:col-start-3"
                    } md:row-start-1`}
                    style={{
                      backgroundColor: "var(--color-card-bg)",
                      borderColor: "var(--color-border)",
                    }}
                  >
                    <header className="mb-5 flex flex-wrap items-start justify-between gap-x-4 gap-y-3">
                      <div className="flex min-w-0 items-center gap-3">
                        <span
                          aria-hidden="true"
                          className="flex h-10 w-10 shrink-0 items-center justify-center border text-xs font-medium tracking-wide"
                          style={{
                            backgroundColor: "var(--color-bg-secondary)",
                            borderColor: "var(--color-border)",
                            color: "var(--color-text)",
                          }}
                        >
                          {experience.initials}
                        </span>
                        <div className="min-w-0">
                          <h3
                            className="font-[var(--font-body)] text-lg uppercase leading-tight tracking-wide sm:text-xl"
                            style={{
                              color: "var(--color-text)",
                              fontFamily: "var(--font-body)",
                            }}
                          >
                            {experience.company}
                          </h3>
                          <p
                            className="mt-1 text-sm"
                            style={{ color: "var(--color-text-secondary)" }}
                          >
                            {experience.role}
                          </p>
                        </div>
                      </div>
                      <time
                        className="pt-1 text-[0.65rem] uppercase tracking-[0.12em]"
                        style={{ color: "var(--color-text-secondary)" }}
                      >
                        {experience.date}
                      </time>
                    </header>

                    <ul
                      className="space-y-2.5 text-sm leading-relaxed"
                      style={{ color: "var(--color-text-secondary)" }}
                    >
                      {experience.highlights.map((highlight) => (
                        <li key={highlight} className="relative pl-5">
                          <span
                            aria-hidden="true"
                            className="absolute left-0 top-[0.55em] h-1.5 w-1.5 rounded-full"
                            style={{ backgroundColor: "var(--color-text)" }}
                          />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </article>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
