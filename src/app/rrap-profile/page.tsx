import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "RRAP Profile",
  description:
    "Rizky Ryu Aditya Putra's professional, community, organizational, and academic experience.",
};

const experienceSections = [
  {
    id: "professional-experience",
    label: "01 / PROFESSIONAL EXPERIENCE",
    title: "Professional Experience",
    entries: [
      {
        title: "IT Developer · PT Mattel Indonesia",
        date: "May – November 2025",
        description:
          "Developed and maintained internal applications, including Safety Patrol, 5S Shift Schedule, and the PTW system. Also supported five Power Apps and managed SQL Server data and Excel reports using ASP.NET, SharePoint, Power Automate, Bootstrap, and Excel VBA.",
      },
      {
        title: "Software Engineer · Quantum Teknologi Nusantara",
        date: "September 2024 – April 2025",
        description:
          "Built and updated client websites, applications, and internal products. Projects included rebuilding the BSMR and Avian websites and developing tools for Meepo, working across frontend, backend, and database technologies.",
      },
    ],
  },
  {
    id: "community-experience",
    label: "02 / CUSTOMER & COMMUNITY",
    title: "Customer Service",
    entries: [
      {
        title: "Customer Service · AkunImpact",
        date: "April – June 2024",
        description:
          "Supported customers buying and selling social media accounts through Instagram and other channels. Responded to customer inquiries, organized seller information, and collaborated with a small customer service team.",
      },
    ],
  },
  {
    id: "organization-experience",
    label: "03 / ORGANIZATIONS & EVENTS",
    title: "Organizational Experience",
    entries: [
      {
        title: "Design Team Member · Computing Atmosphere 2023",
        date: "April – November 2023 · Cikarang, Indonesia",
        description:
          "Contributed to the design team for a campus-hosted technology education event featuring founders and industry practitioners. Independently learned and used Canva, Adobe Illustrator, Adobe After Effects, and Alight Motion to create promotional materials, including posters, lanyards, postcards, and merchandise. Collaborated with a five-member team on promotional content and social media operations to help increase audience engagement.",
      },
      {
        title: "Member · Google Developer Student Club ITB",
        date: "October 2023 – October 2024 · Bandung, Indonesia",
        description:
          "Joined GDSC ITB, a student community focused on technology and developer learning, as a member.",
      },
      {
        title: "Dormitory Security & Discipline Team Member · PUSH",
        description:
          "Helped maintain security and uphold dormitory rules at President University Student Housing (PUSH), supporting a safe, orderly living environment and encouraging residents to follow community standards.",
      },
    ],
  },
  {
    id: "academic-experience",
    label: "04 / ACADEMIC EXPERIENCE",
    title: "Education",
    entries: [
      {
        title: "President University",
        date: "Information Technology · Artificial Intelligence",
        description:
          "Studying Information Technology with a focus on Artificial Intelligence. Outside the classroom, I enjoy exploring web design, drawing, and video editing.",
      },
    ],
  },
];

export default function RrapProfilePage() {
  return (
    <main className="relative min-h-[100svh] px-5 py-10 font-[var(--font-body)] sm:px-8 sm:py-14">
      <div className="mx-auto max-w-6xl">
        <Link
          href="/"
          className="mb-10 inline-flex items-center gap-2 text-sm transition-opacity hover:opacity-70 sm:mb-14"
          style={{ color: "var(--color-text-secondary)" }}
        >
          <span aria-hidden="true">&larr;</span>
          Back to home
        </Link>

        <div className="grid items-start gap-10 md:grid-cols-[minmax(260px,0.8fr)_minmax(0,1.2fr)] md:gap-16">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden bg-[var(--color-bg-secondary)] md:sticky md:top-10">
            <Image
              src="/images/Background/RRAP.png"
              alt="Rizky Ryu Aditya Putra"
              fill
              priority
              sizes="(max-width: 767px) 100vw, 40vw"
              className="object-cover object-[center_30%]"
            />
            <div className="pointer-events-none absolute inset-0 border border-[var(--color-border)]" />
          </div>

          <div className="min-w-0">
            <p
              className="mb-4 text-xs uppercase tracking-[0.24em]"
              style={{ color: "var(--color-text-secondary)" }}
            >
              RRAP · PROFILE
            </p>
            <h1
              className="mb-5 text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl"
              style={{
                fontFamily: "var(--font-body)",
                color: "var(--color-text)",
              }}
            >
              Rizky Ryu Aditya Putra
            </h1>
            <p
              className="mb-10 max-w-2xl text-base leading-7 sm:text-lg sm:leading-8"
              style={{ color: "var(--color-text-secondary)" }}
            >
              I am an Information Technology student specializing in Artificial
              Intelligence, as well as a software engineer and creative
              designer. I enjoy building digital solutions, collaborating with
              others, and continuing to grow my technical and creative skills.
            </p>

            <div className="space-y-9">
              {experienceSections.map((section) => (
                <section key={section.id} aria-labelledby={section.id}>
                  <p
                    className="mb-2 text-[0.65rem] font-medium tracking-[0.2em]"
                    style={{ color: "var(--color-text-secondary)" }}
                  >
                    {section.label}
                  </p>
                  <h2
                    id={section.id}
                    className="mb-4 text-2xl font-semibold sm:text-3xl"
                    style={{
                      fontFamily: "var(--font-body)",
                      color: "var(--color-text)",
                    }}
                  >
                    {section.title}
                  </h2>
                  <div className="space-y-3">
                    {section.entries.map((entry) => (
                      <article
                        key={entry.title}
                        className="border p-4 sm:p-5"
                        style={{
                          borderColor: "var(--color-border)",
                          backgroundColor: "var(--color-card-bg)",
                        }}
                      >
                        <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                          <h3
                            className="text-base font-semibold"
                            style={{
                              fontFamily: "var(--font-body)",
                              color: "var(--color-text)",
                            }}
                          >
                            {entry.title}
                          </h3>
                          {entry.date && (
                            <p
                              className="text-xs"
                              style={{ color: "var(--color-text-secondary)" }}
                            >
                              {entry.date}
                            </p>
                          )}
                        </div>
                        <p
                          className="mt-3 text-sm leading-6"
                          style={{ color: "var(--color-text-secondary)" }}
                        >
                          {entry.description}
                        </p>
                      </article>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
