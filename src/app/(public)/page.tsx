import DetailsSection from "@/components/DetailsSection";
import Hero from "@/components/Hero";
import ManifestoSection from "@/components/ManifestoSection";
import StorySection from "@/components/StorySection";
import WaitlistSection from "@/components/WaitlistSection";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <StorySection />
      <DetailsSection />
      <ManifestoSection />
      <WaitlistSection />
    </div>
  );
}
