"use client";

import { IconArrowUpRight, IconMenu2, IconX } from "@tabler/icons-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const links = [
  { href: "/#story", label: "The story" },
  { href: "/#details", label: "The details" },
];

export default function Navbar() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 701px)");
    const handleResize = () => {
      if (desktop.matches) dialogRef.current?.close();
    };
    desktop.addEventListener("change", handleResize);
    return () => desktop.removeEventListener("change", handleResize);
  }, []);

  function closeMenu() {
    dialogRef.current?.close();
  }

  return (
    <header className="site-header">
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>
      <Link href="/" className="wordmark" aria-label="State of Dominion home">
        <span>
          STATE <i>of</i>
        </span>
        <span>
          DOMINION<span className="wordmark-period">.</span>
        </span>
      </Link>
      <span className="header-note eyebrow">A quiet kind of confidence.</span>
      <nav className="desktop-nav" aria-label="Main navigation">
        {links.map((link) => (
          <Link key={link.href} href={link.href} className="nav-link">
            {link.label}
          </Link>
        ))}
        <Link href="/#subscribe" className="nav-cta">
          Join the waitlist <IconArrowUpRight size={17} stroke={1.5} />
        </Link>
      </nav>
      <button
        ref={triggerRef}
        className="menu-toggle"
        type="button"
        aria-label="Open menu"
        aria-haspopup="dialog"
        aria-controls="mobile-menu"
        aria-expanded={menuOpen}
        onClick={() => {
          dialogRef.current?.showModal();
          setMenuOpen(true);
        }}
      >
        <IconMenu2 size={25} stroke={1.5} />
      </button>
      <dialog
        ref={dialogRef}
        id="mobile-menu"
        className="mobile-menu"
        aria-label="Navigation menu"
        onKeyDown={(event) => {
          if (event.key !== "Tab") return;
          const focusable = event.currentTarget.querySelectorAll<HTMLElement>(
            "a[href], button:not([disabled])",
          );
          const first = focusable[0];
          const last = focusable[focusable.length - 1];
          if (event.shiftKey && document.activeElement === first) {
            event.preventDefault();
            last?.focus();
          } else if (!event.shiftKey && document.activeElement === last) {
            event.preventDefault();
            first?.focus();
          }
        }}
        onClose={() => {
          setMenuOpen(false);
          triggerRef.current?.focus({ preventScroll: true });
        }}
      >
        <div className="mobile-menu-top">
          <span className="eyebrow">State of Dominion</span>
          <button
            type="button"
            className="menu-toggle"
            aria-label="Close menu"
            onClick={closeMenu}
          >
            <IconX size={25} stroke={1.5} />
          </button>
        </div>
        <nav aria-label="Mobile navigation">
          {[...links, { href: "/#subscribe", label: "Join the waitlist" }].map(
            (link, index) => (
              <Link key={link.href} href={link.href} onClick={closeMenu}>
                <span className="eyebrow">0{index + 1}</span>
                {link.label}
                <IconArrowUpRight size={25} stroke={1} />
              </Link>
            ),
          )}
        </nav>
        <p className="mobile-menu-note">Made to feel like yours.</p>
        <span className="eyebrow">South Africa · Est. 2025</span>
      </dialog>
    </header>
  );
}
