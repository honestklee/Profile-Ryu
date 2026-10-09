import type { Metadata } from "next";
import HobbyGalleryPage from "@/components/hobbies/HobbyGalleryPage";
import { hobbyWorks } from "@/data/hobbies/works";

export const metadata: Metadata = {
  title: "Drawing | Hobbies | RRAP",
};

export default function DrawingPage() {
  return (
    <HobbyGalleryPage
      title="Drawing"
      intro="A gallery of my drawings and visual artwork."
      works={hobbyWorks.drawing}
    />
  );
}
