"use client";

import { useEffect, useRef } from "react";

export default function Reveal({
  children,
  className = "",
  delay = 0,
  as: Tag = "div",
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "span" | "li";
}) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!el || reducedMotion.matches || !("IntersectionObserver" in window))
      return;
    if (
      el.getBoundingClientRect().top < window.innerHeight * 0.92 ||
      el.contains(document.activeElement)
    )
      return;

    const previousDuration = el.style.transitionDuration;
    const previousDelay = el.style.transitionDelay;
    el.classList.add("reveal-pending");
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) reveal();
      },
      { threshold: 0.05, rootMargin: "0px 0px -24px 0px" },
    );

    function reveal() {
      el?.classList.remove("reveal-pending");
      observer.disconnect();
    }

    function revealImmediately() {
      if (!el) return;
      el.style.transitionDuration = "0ms";
      el.style.transitionDelay = "0ms";
      reveal();
    }

    function handleMotionChange(event: MediaQueryListEvent) {
      if (event.matches) revealImmediately();
    }

    el.addEventListener("focusin", revealImmediately);
    reducedMotion.addEventListener("change", handleMotionChange);
    observer.observe(el);
    return () => {
      observer.disconnect();
      el.removeEventListener("focusin", revealImmediately);
      reducedMotion.removeEventListener("change", handleMotionChange);
      el.classList.remove("reveal-pending");
      el.style.transitionDuration = previousDuration;
      el.style.transitionDelay = previousDelay;
    };
  }, []);

  const Component = Tag as "div";

  return (
    <Component
      ref={ref}
      className={`reveal ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Component>
  );
}
