import { IconArrowLeft } from "@tabler/icons-react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | State of Dominion",
};

export default function PrivacyPolicy() {
  return (
    <article className="mx-auto max-w-[1440px] px-[6%] pt-12 pb-20 sm:pt-20 sm:pb-28 lg:pt-24 lg:pb-36">
      <Link
        href="/"
        className="group mb-16 inline-flex min-h-11 items-center gap-3 text-xs text-muted transition-colors hover:text-foreground sm:mb-24"
      >
        <IconArrowLeft
          size={17}
          stroke={1.3}
          aria-hidden="true"
          className="transition-transform group-hover:-translate-x-1 motion-reduce:transform-none"
        />
        Return to the beginning
      </Link>

      <p className="eyebrow mb-7 text-muted">State of Dominion / Privacy</p>
      <div className="grid gap-10 border-t border-border pt-9 sm:gap-14 sm:pt-12 lg:grid-cols-[1fr_1.1fr] lg:gap-24">
        <h1 className="font-display text-[64px] leading-[0.95] font-normal tracking-[-0.055em] sm:text-[88px] lg:text-[104px]">
          Privacy
          <br />
          <em className="font-normal text-accent">Policy</em>
        </h1>
        <div className="max-w-lg lg:pt-2">
          <p className="text-[15px] leading-[1.95] text-muted sm:text-base">
            State of Dominion respects your privacy. Details you submit through
            this site — such as your name and email address — are used only to
            keep you informed about our launch and are never sold or shared with
            third parties.
          </p>
          <span
            aria-hidden="true"
            className="mt-10 block h-px w-12 bg-accent/60 sm:mt-14"
          />
        </div>
      </div>
    </article>
  );
}
