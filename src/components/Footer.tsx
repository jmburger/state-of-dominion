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

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-[0.65rem] tracking-[0.2em] uppercase text-muted">
          © {new Date().getFullYear()} State of Dominion. All rights reserved.
        </p>

        <div className="flex items-center gap-4">
          {socialLinks.map(({ href, label, icon: Icon }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              className="text-foreground/70 hover:text-foreground transition-colors"
            >
              <Icon size={15} stroke={1.5} />
            </a>
          ))}
        </div>

        <a
          href="/privacy-policy"
          className="text-[0.65rem] tracking-[0.2em] uppercase text-muted hover:text-foreground transition-colors"
        >
          Privacy Policy
        </a>
      </div>
    </footer>
  );
}
