import Reveal from "./Reveal";

export default function StorySection() {
  return (
    <section id="story" className="brand-note" aria-labelledby="story-title">
      <Reveal>
        <h2 id="story-title">Made to feel like yours.</h2>
      </Reveal>
      <Reveal delay={100}>
        <p>
          Denim for the tall-ish frame. Heavy fabric, longer lengths, and
          considered fits. Designed with a quiet confidence.
        </p>
      </Reveal>
      <Reveal delay={180}>
        <span className="brand-origin">State of Dominion — South Africa</span>
      </Reveal>
    </section>
  );
}
