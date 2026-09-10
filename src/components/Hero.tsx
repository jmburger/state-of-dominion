"use client";

import {
  type MotionStyle,
  motion,
  useInView,
  useMotionValue,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "motion/react";
import { useAnimate } from "motion/react-mini";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import ArrowIcon from "./ArrowIcon";

export default function Hero() {
  const section = useRef<HTMLElement>(null);
  const [scope, animate] = useAnimate<HTMLElement>();
  const inView = useInView(scope, { amount: 0.1 });
  const [motionEnabled, setMotionEnabled] = useState(false);

  useEffect(() => {
    setMotionEnabled(true);
  }, []);

  const playback = useRef<ReturnType<typeof animate>[]>([]);
  const { scrollYProgress } = useScroll({
    target: section,
    offset: ["start start", "end end"],
  });
  const progress = useMotionValue(0);
  const imageCrop = useTransform(progress, [0, 0.7], [1, 0]);
  const imageScale = useTransform(progress, [0, 1], [1, 1.12]);
  const comingX = useTransform(progress, [0, 0.5], ["0%", "-35%"]);
  const soonX = useTransform(progress, [0, 0.5], ["0%", "40%"]);
  const titleOpacity = useTransform(progress, [0, 0.14, 0.43], [1, 1, 0]);
  const statementOpacity = useTransform(progress, [0.38, 0.62], [0, 1]);
  const statementY = useTransform(progress, [0.38, 0.7], [48, 0]);
  const shadeOpacity = useTransform(progress, [0.35, 0.75], [0, 0.3]);
  const scrollHintOpacity = useTransform(progress, [0, 0.12], [1, 0]);

  useMotionValueEvent(scrollYProgress, "change", (value) => {
    if (motionEnabled) progress.set(value);
  });

  useEffect(() => {
    if (!motionEnabled) return;

    const image = animate(
      ".campaign-image",
      { transform: ["scale(1)", "scale(1.025)", "scale(1)"] },
      { duration: 24, ease: "easeInOut", repeat: Infinity },
    );
    const flash = animate(
      ".campaign-flash",
      { opacity: [0, 0.22, 0, 0] },
      {
        duration: 7.8,
        times: [0, 0.055, 0.13, 1],
        ease: "easeOut",
        repeat: Infinity,
      },
    );
    playback.current = [image, flash];
    playback.current.forEach((animation) => {
      animation.pause();
    });

    const words = scope.current.querySelectorAll(".launch-word");
    const entrances = Array.from(words, (word, index) =>
      animate(
        word,
        { transform: ["translateY(110%)", "translateY(0%)"] },
        {
          duration: 1.35,
          delay: 0.2 + index * 0.2,
          ease: [0.22, 1, 0.36, 1],
        },
      ),
    );

    return () => {
      [...playback.current, ...entrances].forEach((animation) => {
        animation.cancel();
      });
      playback.current = [];
    };
  }, [animate, motionEnabled, scope]);

  useEffect(() => {
    function syncPlayback() {
      const playing = motionEnabled && inView && !document.hidden;
      playback.current.forEach((animation) => {
        if (playing) animation.play();
        else animation.pause();
      });
      if (!motionEnabled) progress.set(0);
      else if (!document.hidden) progress.set(scrollYProgress.get());
    }

    syncPlayback();
    document.addEventListener("visibilitychange", syncPlayback);
    return () => document.removeEventListener("visibilitychange", syncPlayback);
  }, [inView, motionEnabled, progress, scrollYProgress]);

  return (
    <section
      ref={section}
      className="campaign"
      data-scroll={motionEnabled ? "true" : undefined}
      aria-labelledby="campaign-title"
    >
      <figure ref={scope} className="campaign-figure">
        <span className="campaign-edition" aria-hidden="true">
          S / D — 001
        </span>
        <motion.div
          className="campaign-image-wrap"
          style={
            {
              "--campaign-crop": motionEnabled ? imageCrop : 1,
              scale: motionEnabled ? imageScale : 1,
            } as MotionStyle
          }
        >
          <Image
            src="/hero.jpg"
            alt="State of Dominion dark denim with a white shirt, photographed in South Africa"
            fill
            priority
            sizes="100vw"
            className="campaign-image"
          />
          <div className="campaign-flash" aria-hidden="true" />
          <div className="campaign-shade" aria-hidden="true" />
        </motion.div>
        <motion.div
          className="campaign-scroll-shade"
          aria-hidden="true"
          style={{ opacity: motionEnabled ? shadeOpacity : 0 }}
        />
        <figcaption className="campaign-caption">
          <p className="launch-collection">The first collection</p>
          <motion.h1
            id="campaign-title"
            className="launch-title"
            style={{ opacity: motionEnabled ? titleOpacity : 1 }}
          >
            <motion.span
              className="launch-mask"
              style={{ x: motionEnabled ? comingX : 0 }}
            >
              <span className="launch-word">Coming</span>
            </motion.span>{" "}
            <motion.span
              className="launch-mask"
              style={{ x: motionEnabled ? soonX : 0 }}
            >
              <span className="launch-word">soon</span>
            </motion.span>
          </motion.h1>
          <motion.div
            className="campaign-statement"
            aria-hidden="true"
            style={{
              opacity: motionEnabled ? statementOpacity : 0,
              y: motionEnabled ? statementY : 0,
            }}
          >
            <span className="campaign-statement-label">
              A state of your own
            </span>
            <p>
              Denim.
              <br />
              <em>On your terms.</em>
            </p>
          </motion.div>
          <a href="#subscribe" className="launch-link">
            Notify me at launch <ArrowIcon className="launch-arrow" />
          </a>
          <p className="launch-footnote">Denim. On your terms.</p>
          <motion.span
            className="campaign-scroll-hint"
            aria-hidden="true"
            style={{ opacity: motionEnabled ? scrollHintOpacity : 0 }}
          >
            Scroll to discover
            <ArrowIcon direction="down" className="scroll-arrow" />
          </motion.span>
        </figcaption>
      </figure>
    </section>
  );
}
