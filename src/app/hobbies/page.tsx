import type { Metadata } from "next";
import CollectionPage, { type CollectionItem } from "@/components/CollectionPage";

export const metadata: Metadata = {
  title: "Hobbies | RRAP",
};

const hobbies: CollectionItem[] = [
  {
    title: "Drawing",
    description: "Sketching ideas and creating visual artwork and I'm interested in.",
    label: "Creative",
    mark: "DRAW",
    accent: "#f0a5a5",
    details: [],
    href: "/hobbies/drawing",
  },
  {
    title: "Video Editing",
    description: "Putting together footage, motion, and music into a story.",
    label: "Media",
    mark: "VIDEO",
    accent: "#a7c7ff",
    details: [],
    href: "/hobbies/video-editing",
  },
  {
    title: "Visual Design",
    description: "Exploring layouts, interfaces, and visual styles for the web.",
    label: "Design",
    mark: "DESIGN",
    accent: "#c2a5ff",
    details: [],
    href: "/hobbies/design",
  },
];

export default function HobbiesPage() {
  return (
    <CollectionPage
      title="Hobbies"
      eyebrow="Outside of work · RRAP"
      intro="A few simple things I enjoy in my free time."
      items={hobbies}
      simple
    />
  );
}
