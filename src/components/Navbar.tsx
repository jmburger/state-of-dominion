import Link from "next/link";

export default function Navbar() {
  return (
    <header className="site-header">
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>
      <nav className="main-navigation" aria-label="Main navigation">
        <Link href="/#story" className="navigation-link navigation-about">
          About
        </Link>
        <Link href="/" className="wordmark" aria-label="State of Dominion home">
          State of Dominion
        </Link>
        <Link
          href="/#subscribe"
          className="navigation-link navigation-subscribe"
        >
          Subscribe
        </Link>
      </nav>
    </header>
  );
}
