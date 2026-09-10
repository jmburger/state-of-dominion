import Hero from "@/components/Hero";
import StorySection from "@/components/StorySection";
import WaitlistSection from "@/components/WaitlistSection";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="campaign-content">
        <StorySection />
        <WaitlistSection />
      </div>
    </>
  );
}
