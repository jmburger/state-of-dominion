import { IconArrowUpRight } from "@tabler/icons-react";
import Link from "next/link";
import styles from "./WaitlistFooter.module.css";

export default function Footer() {
  return (
    <footer className={styles["footer-section"]}>
      <div className={styles["footer-topline"]}>
        <p>Considered denim. A state of mind.</p>
        <Link href="/#top" className={styles["footer-back-top"]}>
          Back to top{" "}
          <IconArrowUpRight size={17} stroke={1.3} aria-hidden="true" />
        </Link>
      </div>

      <Link
        href="/"
        className={styles["footer-wordmark"]}
        aria-label="State of Dominion home"
      >
        <span className={styles["footer-wordmark-prefix"]}>
          STATE <em>of</em>
        </span>
        <span className={styles["footer-wordmark-name"]}>DOMINION</span>
      </Link>

      <div className={styles["footer-bottomline"]}>
        <p>© {new Date().getFullYear()} State of Dominion</p>
        <p className={styles["footer-origin"]}>South Africa</p>
        <Link href="/privacy-policy">Privacy policy</Link>
      </div>
    </footer>
  );
}
