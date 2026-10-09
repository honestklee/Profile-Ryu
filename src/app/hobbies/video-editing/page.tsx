import type { Metadata } from "next";
import HobbyGalleryPage from "@/components/hobbies/HobbyGalleryPage";
import { hobbyWorks } from "@/data/hobbies/works";

export const metadata: Metadata = {
  title: "Video Editing | Hobbies | RRAP",
};

export default function VideoEditingPage() {
  return (
    <HobbyGalleryPage
      title="Video Editing"
      intro="A gallery of my video editing work and visual stories."
      works={hobbyWorks["video-editing"]}
    />
  );
}
