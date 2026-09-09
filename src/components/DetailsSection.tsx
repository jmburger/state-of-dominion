"use client";

import { IconArrowUpRight, IconMinus, IconPlus } from "@tabler/icons-react";
import Image from "next/image";
import { useState } from "react";
import Reveal from "./Reveal";

const details = [
  {
    title: "The weight.",
    subtitle: "Substance you can feel.",
    description:
      "Heavy fabric. Real structure. Denim with a reassuring weight and a presence of its own — the kind you reach for, again and again.",
    position: "52% 66%",
    caption: "01 / Heavy fabric. Real structure.",
  },
  {
    title: "The length.",
    subtitle: "A little more room to be you.",
    description:
      "For the tall-ish frame that South African denim forgot. Longer lengths, thoughtfully considered, so your denim feels like it was made with you in mind.",
    position: "51% 97%",
    caption: "02 / Longer lengths. Finally.",
  },
  {
    title: "The fit.",
    subtitle: "Considered from every angle.",
    description:
      "Shape that holds its own. Considered fits that give you room to move and the confidence to make them yours. Because how you feel is the whole point.",
    position: "51% 48%",
    caption: "03 / A shape of your own.",
  },
];

export default function DetailsSection() {
  const [active, setActive] = useState<number | null>(0);
  const selected = details[active ?? 0];

  return (
    <section
      id="details"
      className="details-section"
      aria-labelledby="details-title"
    >
      <div className="details-image-panel">
        <Image
          src="/hero.jpg"
          alt="A closer look at the structure and longer length of State of Dominion denim"
          fill
          sizes="(max-width: 700px) 100vw, 50vw"
          className="details-image"
          style={{ objectPosition: selected.position }}
        />
        <div className="details-image-label eyebrow">
          <span>A closer look</span>
          <IconArrowUpRight size={20} stroke={1} />
        </div>
        <div className="details-image-caption">
          <span className="eyebrow">{selected.caption}</span>
          <span className="details-image-mark" aria-hidden="true">
            S/D
          </span>
        </div>
      </div>
      <div className="details-content">
        <Reveal>
          <p className="eyebrow">02 / Nothing by accident</p>
          <h2 id="details-title">
            Every detail.
            <br />
            <em>Considered.</em>
          </h2>
          <p className="details-intro">
            Good denim is a feeling.
            <br />
            We&rsquo;re getting every part of it right.
          </p>
        </Reveal>
        <div className="detail-accordion">
          {details.map((detail, index) => (
            <div
              className={`detail-item ${active === index ? "is-open" : ""}`}
              key={detail.title}
            >
              <h3>
                <button
                  type="button"
                  aria-expanded={active === index}
                  aria-controls={`detail-panel-${index}`}
                  id={`detail-trigger-${index}`}
                  onClick={() => setActive(active === index ? null : index)}
                >
                  <span className="detail-number">0{index + 1}</span>
                  <span>{detail.title}</span>
                  {active === index ? (
                    <IconMinus size={18} stroke={1.5} />
                  ) : (
                    <IconPlus size={18} stroke={1.5} />
                  )}
                </button>
              </h3>
              <section
                id={`detail-panel-${index}`}
                aria-labelledby={`detail-trigger-${index}`}
                hidden={active !== index}
                className="detail-panel"
              >
                <p className="detail-subtitle">{detail.subtitle}</p>
                <p>{detail.description}</p>
              </section>
            </div>
          ))}
        </div>
        <span className="details-endnote eyebrow">
          Made to feel like yours. Always.
        </span>
      </div>
    </section>
  );
}
