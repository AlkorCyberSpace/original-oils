import AboutUs from "@/components/AboutUs";
import AboutStory from "@/components/AboutStory";
import AboutProductsShowcase from "@/components/AboutProductsShowcase";
import Review from "@/components/Review";
export default function AboutPage() {
  return (
    <main className="mx-auto">
      <AboutUs />
      <AboutStory />
      <AboutProductsShowcase />
      <Review />
    </main>
  );
}
