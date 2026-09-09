import { IconArrowDownRight } from "@tabler/icons-react";
import Reveal from "./Reveal";

export default function ManifestoSection() {
  return (
    <section className="manifesto-section" aria-labelledby="manifesto-title">
      <div className="section-index eyebrow">
        <span>Our point of view</span>
        <span>Wear it your way</span>
      </div>
      <Reveal>
        <h2 id="manifesto-title">
          Less noise.
          <br />
          <em>More presence.</em>
          <span className="manifesto-dot">●</span>
        </h2>
      </Reveal>
      <div className="manifesto-bottom">
        <p>
          Something that lasts
          <br />
          is worth waiting for.
        </p>
        <a href="#subscribe" aria-label="Join the State of Dominion waitlist">
          <IconArrowDownRight size={58} stroke={1} />
        </a>
      </div>
    </section>
  );
}
