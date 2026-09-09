import { IconArrowUpRight } from "@tabler/icons-react";
import Reveal from "./Reveal";

export default function StorySection() {
  return (
    <section id="story" className="story-section" aria-labelledby="story-title">
      <div className="section-index eyebrow">
        <span>01 / The state of mind</span>
        <span>More than a name</span>
      </div>
      <div className="story-grid">
        <Reveal className="story-heading">
          <div className="dictionary-word">
            <h2 id="story-title">Dominion</h2>
            <span className="eyebrow">/ dəˈmɪnjən / &nbsp; noun</span>
          </div>
          <p className="story-definition">
            Authority. Sovereignty.
            <br />
            <em>Command over your own domain.</em>
          </p>
          <span className="story-asterisk" aria-hidden="true">
            ✳
          </span>
        </Reveal>
        <Reveal delay={120} className="story-copy">
          <p className="story-lead">
            It starts with
            <br />
            knowing <em>yourself.</em>
          </p>
          <p>
            Your presence. Your choices. Your sense of self. A quiet confidence
            that doesn&rsquo;t need to announce itself.
          </p>
          <p>
            State of Dominion was built with that same intention. Denim for the
            tall-ish frame that South African denim forgot. Heavy fabric. Real
            structure. Longer lengths and considered fits that hold their shape.
          </p>
          <a href="#details" className="text-link">
            Get to know the details <IconArrowUpRight size={18} stroke={1.5} />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
