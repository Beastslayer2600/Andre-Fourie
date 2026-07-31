"use client";

import { useState, type FormEvent } from "react";

// [PLACEHOLDER — REPLACE] with the store's real WhatsApp number
const WHATSAPP_LINK = "https://wa.me/27000000000";

export default function ContactPage() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    // Front-end placeholder only — needs to be wired to email/CRM before launch.
    setSent(true);
  }

  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <p className="mb-2 text-xs uppercase tracking-[0.25em] text-gold">Get In Touch</p>
      <h1 className="mb-3 font-serif text-3xl font-semibold tracking-tight sm:text-4xl">
        Contact Sterling &amp; Oak
      </h1>
      <p className="mb-12 max-w-xl text-muted">
        Questions about a piece, an order, or a warranty? We&apos;re a message away.
      </p>

      <div className="grid gap-10 sm:grid-cols-2">
        <div className="space-y-5">
          <div className="flex gap-4 rounded-sm border border-gold/15 bg-background-alt p-6">
            <div className="flex h-11 w-11 flex-none items-center justify-center rounded-full border border-gold text-gold">
              ✆
            </div>
            <div>
              <h3 className="font-semibold">WhatsApp</h3>
              <p className="mt-1 text-sm text-muted">
                The fastest way to reach us — real answers, no bots.
              </p>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-block text-sm text-gold underline"
              >
                Message us on WhatsApp
              </a>
            </div>
          </div>

          <div className="flex gap-4 rounded-sm border border-gold/15 bg-background-alt p-6">
            <div className="flex h-11 w-11 flex-none items-center justify-center rounded-full border border-gold text-gold">
              ✉
            </div>
            <div>
              <h3 className="font-semibold">Email</h3>
              <p className="mt-1 text-sm text-muted">
                <a href="mailto:hello@sterlingandoak.com" className="underline hover:text-gold">
                  hello@sterlingandoak.com
                </a>
              </p>
            </div>
          </div>

          <div className="flex gap-4 rounded-sm border border-gold/15 bg-background-alt p-6">
            <div className="flex h-11 w-11 flex-none items-center justify-center rounded-full border border-gold text-gold">
              ⏱
            </div>
            <div>
              <h3 className="font-semibold">Response Time</h3>
              <p className="mt-1 text-sm text-muted">
                We typically respond within a few hours during business days.
              </p>
            </div>
          </div>
        </div>

        <div>
          {sent ? (
            <div className="rounded-sm border border-gold/15 bg-background-alt p-8 text-center">
              <p className="font-semibold text-gold">Message sent</p>
              <p className="mt-2 text-sm text-muted">
                Placeholder confirmation — this form isn&apos;t wired to email/CRM yet.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <label className="flex flex-col gap-1 text-sm">
                Name
                <input
                  type="text"
                  required
                  placeholder="Your name"
                  className="rounded-sm border border-gold/25 bg-background-alt px-3 py-2 text-foreground placeholder:text-muted/50"
                />
              </label>
              <label className="flex flex-col gap-1 text-sm">
                Email
                <input
                  type="email"
                  required
                  placeholder="you@example.com"
                  className="rounded-sm border border-gold/25 bg-background-alt px-3 py-2 text-foreground placeholder:text-muted/50"
                />
              </label>
              <label className="flex flex-col gap-1 text-sm">
                Message
                <textarea
                  required
                  rows={5}
                  placeholder="Tell us what you're looking for..."
                  className="rounded-sm border border-gold/25 bg-background-alt px-3 py-2 text-foreground placeholder:text-muted/50"
                />
              </label>
              <button
                type="submit"
                className="mt-2 rounded-sm bg-gold px-6 py-3 text-sm font-medium uppercase tracking-wide text-background hover:bg-white"
              >
                Send Message
              </button>
              <p className="text-xs text-muted">
                This form is a front-end placeholder — needs to be wired to email/CRM before launch.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
