import Reveal from "./Reveal";

export default function StorySection() {
  return (
    <section className="relative bg-background py-24 sm:py-32">
      <div className="max-w-2xl mx-auto px-5 sm:px-8 text-center">
        <Reveal>
          <h2 className="font-display text-3xl sm:text-4xl">Dominion</h2>
        </Reveal>
        <Reveal delay={100}>
          <p className="mt-5 text-xs sm:text-sm tracking-[0.2em] uppercase text-foreground/85">
            Authority. Sovereignty. Command over your own domain.
          </p>
        </Reveal>

        <Reveal delay={180}>
          <p className="mt-10 text-muted text-sm sm:text-base leading-relaxed">
            To us, Dominion is about knowing yourself. Your presence, your
            choices, your sense of self. A quiet confidence that doesn&rsquo;t
            need to announce itself.
          </p>
        </Reveal>
        <Reveal delay={240}>
          <p className="mt-6 text-muted text-sm sm:text-base leading-relaxed">
            State of Dominion was built with that same intention. Denim for the
            tall-ish frame that South African denim forgot. Heavy fabric. Real
            structure. Longer lengths and considered fits that hold their shape.
          </p>
        </Reveal>

        <Reveal delay={320}>
          <p className="mt-10 font-display italic text-lg sm:text-xl text-foreground/90">
            Made to feel like yours
          </p>
        </Reveal>
      </div>
    </section>
  );
}
