import type { Metadata } from "next";
import CollectionPage, { type CollectionItem } from "@/components/CollectionPage";

export const metadata: Metadata = {
  title: "Certifications | RRAP",
};

const certifications: CollectionItem[] = [
  {
    title: "EF SET English Certificate",
    description:
      "Achieved an overall score of 69/100, corresponding to C1 Advanced on the CEFR scale. The certificate reports Reading at 85 (C2 Proficient) and Listening at 52 (B2 Upper Intermediate).",
    label: "Awarded · 11 August 2026",
    mark: "C1",
    accent: "#c2a5ff",
    image: "/images/Certificate/image.png",
    downloadUrl: "/images/Certificate/EF%20SET%20Certificate.pdf",
    details: ["Overall 69/100", "Reading 85 · C2", "Listening 52 · B2"],
  },
];

export default function CertificationsPage() {
  return (
    <CollectionPage
      title="Certifications"
      eyebrow="Learning & credentials · RRAP"
      intro="English proficiency certification and verified language assessment results."
      items={certifications}
    />
  );
}
