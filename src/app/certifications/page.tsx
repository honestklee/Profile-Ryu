import type { Metadata } from "next";
import CollectionPage, { type CollectionItem } from "@/components/CollectionPage";

export const metadata: Metadata = {
  title: "Certifications | RRAP",
};

const certifications: CollectionItem[] = [
  {
    title: "Spec-Driven Development dengan Kiro",
    description:
      "A Dicoding completion certificate for the Spec-Driven Development with Kiro course.",
    label: "Awarded · 10 October 2026",
    mark: "KIRO",
    accent: "#7dd3fc",
    image: "/images/Certificate/KiroDevelopment.png",
    downloadUrl: "/images/Certificate/KiroDevelopmentSertifikat.pdf",
    details: ["Dicoding", "Kiro", "2026"],
  },
  {
    title: "Belajar Dasar Cloud dan Gen AI di AWS",
    description:
      "A Dicoding completion certificate for the fundamentals of cloud computing and generative AI on AWS.",
    label: "Awarded · 10 October 2026",
    mark: "AWS",
    accent: "#fbbf24",
    image: "/images/Certificate/AWSDasarCloud.png",
    downloadUrl: "/images/Certificate/AWSCloudDevSertifikat.pdf",
    details: ["Dicoding", "AWS Cloud", "Generative AI", "2026"],
  },
  {
    title: "Memulai Pemrograman dengan Python",
    description:
      "A Dicoding completion certificate for learning the fundamentals of programming with Python.",
    label: "Awarded · 11 October 2026",
    mark: "PYTHON",
    accent: "#7dd3fc",
    image: "/images/Certificate/Python.png",
    downloadUrl: "/images/Certificate/PythonDasar.pdf",
    details: ["Dicoding", "Python", "2026"],
  },
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
      intro="A collection of course completion certificates and verified language assessment results."
      items={certifications}
      equalItemHeights
    />
  );
}
