import { IconArrowDown, IconArrowUpRight } from "@tabler/icons-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-copy">
        <p className="eyebrow hero-intro">
          <span className="status-dot" /> A new chapter in denim
        </p>
        <h1 id="hero-title" className="hero-title">
          <span className="hero-line">
            <span>A state of</span>
          </span>
          <span className="hero-line">
            <em>your own.</em>
          </span>
        </h1>
        <div className="hero-description">
          <p>
            For the way you stand.
            <br />
            And everything you stand for.
          </p>
          <p className="hero-small-copy">
            Considered denim. Longer lengths.
            <br />A quiet confidence that feels like you.
          </p>
          <a href="#subscribe" className="button button-dark">
            Join the waitlist <IconArrowUpRight size={19} stroke={1.5} />
          </a>
          <span className="hero-launch-note">
            The first collection is on its way.
          </span>
        </div>
        <a href="#story" className="hero-discover">
          <span className="circle-arrow">
            <IconArrowDown size={17} stroke={1.5} />
          </span>
          Discover our state of mind
        </a>
      </div>
      <div className="hero-visual">
        <div className="hero-image-wrap">
          <Image
            src="/hero.jpg"
            alt="State of Dominion denim styled with a white shirt in the South African afternoon light"
            fill
            priority
            sizes="(max-width: 700px) 100vw, 55vw"
            className="hero-image"
          />
        </div>
        <div className="hero-image-top eyebrow">
          <span>State of Dominion</span>
          <span>Est. 2025</span>
        </div>
        <span className="hero-image-side eyebrow">
          Presence, in every thread.
        </span>
        <div className="hero-image-bottom">
          <span>Denim with intention.</span>
          <span className="eyebrow">South Africa · Chapter 01</span>
        </div>
        <a
          href="#details"
          className="hero-seal"
          aria-label="Explore the details: made to feel like yours"
        >
          <span className="sr-only">Explore the details</span>
          <svg viewBox="0 0 120 120" className="seal-ring" aria-hidden="true">
            <defs>
              <path
                id="seal-circle"
                d="M60,60 m-43,0 a43,43 0 1,1 86,0 a43,43 0 1,1 -86,0"
              />
            </defs>
            <text>
              <textPath href="#seal-circle" textLength="270">
                MADE TO FEEL LIKE YOURS · STATE OF DOMINION ·{" "}
              </textPath>
            </text>
          </svg>
          <span className="seal-monogram" aria-hidden="true">
            S<span>/</span>D
          </span>
        </a>
      </div>
      <div className="hero-footnote eyebrow">
        <span>Rooted in South Africa</span>
        <span className="hero-footnote-center">
          Good things take their time.
        </span>
        <span>
          <span className="status-dot" /> Coming soon
        </span>
      </div>
    </section>
  );
}
