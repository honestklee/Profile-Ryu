import type { Metadata } from "next";
import CollectionPage, { type CollectionItem } from "@/components/CollectionPage";

export const metadata: Metadata = {
  title: "Certifications | RRAP",
};

const certifications: CollectionItem[] = [
  {
    title: "Certification 01",
    description: "Replace this text with the certification name and description.",
    label: "Placeholder · Add year",
    mark: "CERT 01",
    accent: "#a7c7ff",
    details: ["Issuing organization"],
  },
  {
    title: "Certification 02",
    description: "Replace this text with the certification name and description.",
    label: "Placeholder · Add year",
    mark: "CERT 02",
    accent: "#c2a5ff",
    details: ["Issuing organization"],
  },
  {
    title: "Certification 03",
    description: "Replace this text with the certification name and description.",
    label: "Placeholder · Add year",
    mark: "CERT 03",
    accent: "#f3c779",
    details: ["Issuing organization"],
  },
];

export default function CertificationsPage() {
  return (
    <CollectionPage
      title="Certifications"
      eyebrow="Learning & credentials · RRAP"
      intro="Three editable placeholders. Replace each title and description with your certification details."
      items={certifications}
    />
  );
}
