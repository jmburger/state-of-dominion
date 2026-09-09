"use client";

import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandX,
} from "@tabler/icons-react";

const socialLinks = [
  { href: "#", label: "X (Twitter)", icon: IconBrandX },
  { href: "#", label: "Instagram", icon: IconBrandInstagram },
  { href: "#", label: "Facebook", icon: IconBrandFacebook },
];

export default function Navbar() {
  return (
    <header className="absolute top-0 inset-x-0 z-50">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="flex items-center justify-end h-20 gap-6">
          <a
            href="#subscribe"
            className="text-xs tracking-[0.2em] uppercase text-foreground/85 hover:text-foreground transition-colors"
          >
            Subscribe
          </a>
          <div className="flex items-center gap-4">
            {socialLinks.map(({ href, label, icon: Icon }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="text-foreground/85 hover:text-foreground transition-colors"
              >
                <Icon size={16} stroke={1.5} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
