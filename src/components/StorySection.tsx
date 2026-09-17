import Reveal from "./Reveal";

export default function StorySection() {
  return (
    <section id="story" className="brand-note" aria-labelledby="story-title">
      <Reveal>
        <span className="brand-note-eyebrow">Authority. Sovereignty.</span>
      </Reveal>
      <Reveal delay={60}>
        <h2 id="story-title">Command over your own domain.</h2>
      </Reveal>
      <Reveal delay={140}>
        <p>
          To us, Dominion is about knowing yourself. Your presence, your
          choices, your sense of self. A quiet confidence that doesn&rsquo;t
          need to announce itself.
        </p>
      </Reveal>
      <Reveal delay={160}>
        <p>
          State of Dominion was built with that same intention. Denim for the
          tall-ish frame that South African denim forgot. Heavy fabric. Real
          structure. Longer lengths and considered fits that hold their
          shape.
        </p>
      </Reveal>
      <Reveal delay={200}>
        <span className="brand-origin">Made to feel like yours</span>
      </Reveal>
    </section>
  );
}
