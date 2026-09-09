import Hero from "@/components/Hero";
import StorySection from "@/components/StorySection";
import WaitlistSection from "@/components/WaitlistSection";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <StorySection />
      <WaitlistSection />
    </div>
  );
}
