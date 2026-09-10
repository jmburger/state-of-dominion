import Link from "next/link";
import styles from "./WaitlistFooter.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>© {new Date().getFullYear()} State of Dominion</p>
      <Link href="/privacy-policy">Privacy policy</Link>
    </footer>
  );
}
