import { CallToActionSection } from "@/components/CallToActionSection";
import { Hero } from "@/components/hero";
import { Reveal } from "@/components/Reveal";
import { ResultsGallery } from "@/components/ResultsGallery";
import { ShowcaseBanner } from "@/components/ShowcaseBanner";
import { TestimonialSection } from "@/components/TestimonialSection";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Hero />
      <CallToActionSection />
      <Reveal delay={100}>
        <ShowcaseBanner />
      </Reveal>
      <Reveal delay={150}>
        <ResultsGallery />
      </Reveal>
      <Reveal delay={200}>
        <TestimonialSection />
      </Reveal>
    </main>
  );
}
