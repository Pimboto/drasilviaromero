import { CallToActionSection } from "@/components/CallToActionSection";
import { Hero } from "@/components/hero";
import { ResultsGallery } from "@/components/ResultsGallery";
import { ShowcaseBanner } from "@/components/ShowcaseBanner";
import { TestimonialSection } from "@/components/TestimonialSection";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Hero />
      <CallToActionSection />
      <ShowcaseBanner />
      <ResultsGallery />
      <TestimonialSection />
    </main>
  );
}
