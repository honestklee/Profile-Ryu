import type { Metadata } from "next";
import CollectionPage, { type CollectionItem } from "@/components/CollectionPage";

export const metadata: Metadata = {
  title: "Projects | RRAP",
};

const projects: CollectionItem[] = [
  {
    title: "BSMR Website",
    description:
      "A remake of the BSMR website, developed at Quantum Teknologi Nusantara.",
    label: "Website remake",
    mark: "BSMR",
    accent: "#a7c7ff",
    details: ["Next.js", "Python", "SQLAlchemy", "MySQL"],
  },
  {
    title: "Meepo Tools",
    description:
      "Tools created for Meepo as part of Quantum Teknologi Nusantara's product work.",
    label: "Product tools",
    mark: "MEEPO",
    accent: "#c2a5ff",
    details: ["Next.js", "Fastify", "Sequelize", "MySQL"],
  },
  {
    title: "Avian Website",
    description:
      "A remake of the Avian website, built using Next.js and Vue.js.",
    label: "Website remake",
    mark: "AVIAN",
    accent: "#f3c779",
    details: ["Next.js", "Vue.js"],
  },
];

export default function ProjectsPage() {
  return (
    <CollectionPage
      title="Projects"
      eyebrow="Selected work · RRAP"
      intro="A selection of projects and products I worked on as a Software Engineer at Quantum Teknologi Nusantara."
      items={projects}
    />
  );
}
