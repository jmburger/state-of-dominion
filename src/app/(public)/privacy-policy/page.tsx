import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | State of Dominion",
};

export default function PrivacyPolicy() {
  return (
    <article className="privacy-page">
      <Link href="/" className="privacy-back">
        Back to home
      </Link>
      <h1>Privacy policy</h1>
      <p>
        State of Dominion respects your privacy. Details you submit through this
        site — such as your name and email address — are used only to keep you
        informed about our launch and are never sold or shared with third
        parties.
      </p>
    </article>
  );
}
