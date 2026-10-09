import type { Metadata } from "next";
import HobbyGalleryPage from "@/components/hobbies/HobbyGalleryPage";
import { hobbyWorks } from "@/data/hobbies/works";

export const metadata: Metadata = {
  title: "Design | Hobbies | RRAP",
};

export default function DesignPage() {
  return (
    <HobbyGalleryPage
      title="Design"
      intro="A gallery of my web and visual design work."
      works={hobbyWorks.design}
    />
  );
}
