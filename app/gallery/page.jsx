import GallerySection2 from "@/components/GallerySection2";
import VideoSection from "../../components/VideoSection";

export const metadata = {
  title: "Gallery | Original Oils",
};

export default function GalleryPage() {
  return (
    <main >
      <GallerySection2 />
      <VideoSection />
    </main>
  );
}
