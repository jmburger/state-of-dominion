"use client";

import {
  IconAlertCircle,
  IconCircleCheck,
  IconLoader2,
} from "@tabler/icons-react";
import { type FormEvent, useState } from "react";
import Reveal from "./Reveal";

type Status = "idle" | "submitting" | "success" | "error";

export default function WaitlistSection() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    setStatus("submitting");
    setErrorMessage("");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: formData.get("firstName"),
          lastName: formData.get("lastName"),
          email: formData.get("email"),
        }),
      });

      const data = await res.json();

      if (!res.ok || !data.ok) {
        throw new Error(
          data.error || "Something went wrong. Please try again.",
        );
      }

      setStatus("success");
    } catch (err) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again.",
      );
    }
  }

  return (
    <section
      id="subscribe"
      className="relative bg-background py-24 sm:py-32 border-t border-border"
    >
      <div className="max-w-md mx-auto px-5 sm:px-8 text-center">
        <Reveal>
          <h2 className="font-display text-2xl sm:text-3xl">
            Be among the first
          </h2>
        </Reveal>

        {status === "success" ? (
          <Reveal delay={100}>
            <div className="mt-10 flex flex-col items-center gap-3">
              <IconCircleCheck size={36} className="text-foreground/80" />
              <p className="text-sm text-muted leading-relaxed">
                Thank you for joining the waitlist. We&rsquo;ll be in touch when
                the wait is over.
              </p>
            </div>
          </Reveal>
        ) : (
          <Reveal delay={100}>
            <form
              onSubmit={handleSubmit}
              className="mt-10 flex flex-col gap-5 text-left"
            >
              <div>
                <label
                  htmlFor="firstName"
                  className="block text-[0.65rem] tracking-[0.25em] uppercase text-muted mb-2"
                >
                  First name
                </label>
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  required
                  className="w-full bg-transparent border-b border-border pb-2 text-sm text-foreground focus:outline-none focus:border-foreground/60 transition-colors"
                />
              </div>
              <div>
                <label
                  htmlFor="lastName"
                  className="block text-[0.65rem] tracking-[0.25em] uppercase text-muted mb-2"
                >
                  Last name
                </label>
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  className="w-full bg-transparent border-b border-border pb-2 text-sm text-foreground focus:outline-none focus:border-foreground/60 transition-colors"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-[0.65rem] tracking-[0.25em] uppercase text-muted mb-2"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full bg-transparent border-b border-border pb-2 text-sm text-foreground focus:outline-none focus:border-foreground/60 transition-colors"
                />
              </div>

              {status === "error" && errorMessage && (
                <div className="flex items-start gap-2 text-accent text-xs">
                  <IconAlertCircle size={15} className="shrink-0 mt-0.5" />
                  <span>{errorMessage}</span>
                </div>
              )}

              <button
                type="submit"
                disabled={status === "submitting"}
                className="mt-3 inline-flex items-center justify-center gap-2 py-3 text-xs tracking-[0.25em] uppercase border border-foreground/70 hover:bg-foreground hover:text-background transition-colors duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === "submitting" ? (
                  <>
                    <IconLoader2 size={15} className="animate-spin" />
                    Submitting
                  </>
                ) : (
                  "Submit"
                )}
              </button>
            </form>
          </Reveal>
        )}
      </div>
    </section>
  );
}
