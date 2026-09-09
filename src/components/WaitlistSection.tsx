"use client";

import {
  IconAlertCircle,
  IconArrowUpRight,
  IconCheck,
  IconLoader2,
} from "@tabler/icons-react";
import Link from "next/link";
import { type FormEvent, useState } from "react";
import Reveal from "./Reveal";
import styles from "./WaitlistFooter.module.css";

type Status = "idle" | "submitting" | "success" | "error";

export default function WaitlistSection() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "submitting") return;

    const formData = new FormData(event.currentTarget);
    setStatus("submitting");
    setErrorMessage("");

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: String(formData.get("firstName") ?? "").trim(),
          lastName: String(formData.get("lastName") ?? "").trim(),
          email: String(formData.get("email") ?? "").trim(),
        }),
      });
      const data = await response.json().catch(() => null);

      if (!response.ok || !data?.ok) {
        throw new Error(
          typeof data?.error === "string"
            ? data.error
            : "We couldn’t save your details. Please try again.",
        );
      }

      setStatus("success");
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "We couldn’t save your details. Please try again.",
      );
    }
  }

  return (
    <section
      id="subscribe"
      className={styles["waitlist-section"]}
      aria-labelledby="waitlist-title"
    >
      <div className={styles["waitlist-layout"]}>
        <Reveal className={styles["waitlist-introduction"]}>
          <p className={styles["waitlist-eyebrow"]}>03 / The first chapter</p>
          <h2 id="waitlist-title" className={styles["waitlist-title"]}>
            Good things.
            <br />
            <em>Worth the wait.</em>
          </h2>
          <p className={styles["waitlist-description"]}>
            Your next favourite denim is taking shape. Join the waitlist to hear
            from State of Dominion as our first chapter unfolds.
          </p>
          <span className={styles["waitlist-flourish"]} aria-hidden="true">
            S<span>of</span>D
          </span>
        </Reveal>

        <Reveal delay={120} className={styles["waitlist-form-panel"]}>
          <div aria-live="polite" aria-atomic="true">
            {status === "success" && (
              <div className={styles["waitlist-success"]}>
                <span className={styles["waitlist-success-icon"]}>
                  <IconCheck size={24} stroke={1.3} aria-hidden="true" />
                </span>
                <p className={styles["waitlist-eyebrow"]}>You’re on the list</p>
                <h3>A little anticipation.</h3>
                <p>
                  Thank you for joining us. We’ll be in touch as the next
                  chapter begins.
                </p>
              </div>
            )}
          </div>

          {status !== "success" && (
            <form
              onSubmit={handleSubmit}
              className={styles["waitlist-form"]}
              aria-busy={status === "submitting"}
            >
              <p className={styles["waitlist-form-intro"]}>
                Be part of what comes next.
              </p>
              <div className={styles["waitlist-name-fields"]}>
                <div className={styles["waitlist-field"]}>
                  <label htmlFor="waitlist-first-name">First name</label>
                  <input
                    id="waitlist-first-name"
                    name="firstName"
                    type="text"
                    autoComplete="given-name"
                    placeholder="Your first name"
                    required
                    disabled={status === "submitting"}
                  />
                </div>
                <div className={styles["waitlist-field"]}>
                  <label htmlFor="waitlist-last-name">
                    Last name <span>(optional)</span>
                  </label>
                  <input
                    id="waitlist-last-name"
                    name="lastName"
                    type="text"
                    autoComplete="family-name"
                    placeholder="Your last name"
                    disabled={status === "submitting"}
                  />
                </div>
              </div>

              <div className={styles["waitlist-field"]}>
                <label htmlFor="waitlist-email">Email address</label>
                <input
                  id="waitlist-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="you@example.com"
                  required
                  disabled={status === "submitting"}
                  aria-describedby="waitlist-consent"
                />
              </div>

              {status === "error" && (
                <p className={styles["waitlist-error"]} role="alert">
                  <IconAlertCircle size={17} stroke={1.5} aria-hidden="true" />
                  <span>{errorMessage}</span>
                </p>
              )}

              <button
                type="submit"
                disabled={status === "submitting"}
                className={styles["waitlist-submit"]}
              >
                <span>
                  {status === "submitting"
                    ? "Joining the list…"
                    : "Join the waitlist"}
                </span>
                {status === "submitting" ? (
                  <IconLoader2
                    size={20}
                    stroke={1.4}
                    className={styles["waitlist-spinner"]}
                    aria-hidden="true"
                  />
                ) : (
                  <IconArrowUpRight size={22} stroke={1.3} aria-hidden="true" />
                )}
              </button>

              <p id="waitlist-consent" className={styles["waitlist-consent"]}>
                By joining, you agree to receive launch news and updates from
                State of Dominion. Read our{" "}
                <Link href="/privacy-policy">privacy policy</Link>.
              </p>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}
