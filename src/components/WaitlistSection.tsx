"use client";

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
      className={styles.section}
      aria-labelledby="waitlist-title"
    >
      <Reveal className={styles.content}>
        <h2 id="waitlist-title">Be the first to know.</h2>
        <p className={styles.introduction}>
          Receive news of our first collection.
        </p>
        <div aria-live="polite" aria-atomic="true">
          {status === "success" && (
            <div className={styles.success}>
              <p>You’re on the list.</p>
              <p>Thank you. We’ll be in touch when the collection arrives.</p>
            </div>
          )}
        </div>
        {status !== "success" && (
          <form
            onSubmit={handleSubmit}
            className={styles.form}
            aria-busy={status === "submitting"}
          >
            <div className={styles.fields}>
              <div className={styles.field}>
                <label htmlFor="waitlist-first-name">First name</label>
                <input
                  id="waitlist-first-name"
                  name="firstName"
                  type="text"
                  autoComplete="given-name"
                  required
                  disabled={status === "submitting"}
                />
              </div>
              <div className={styles.field}>
                <label htmlFor="waitlist-email">Email address</label>
                <input
                  id="waitlist-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  disabled={status === "submitting"}
                  aria-describedby="waitlist-consent"
                />
              </div>
            </div>
            {status === "error" && (
              <p className={styles.error} role="alert">
                {errorMessage}
              </p>
            )}
            <button
              type="submit"
              disabled={status === "submitting"}
              className={styles.submit}
            >
              {status === "submitting" ? "Subscribing…" : "Subscribe"}
            </button>
            <p id="waitlist-consent" className={styles.consent}>
              By subscribing, you agree to receive launch updates.
              <br />
              Please read our <Link href="/privacy-policy">privacy policy</Link>
              .
            </p>
          </form>
        )}
      </Reveal>
    </section>
  );
}
