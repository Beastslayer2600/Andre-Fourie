import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Sterling & Oak",
};

export default function AboutPage() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="mb-6 text-3xl font-semibold tracking-tight">About Sterling &amp; Oak</h1>
      <p className="opacity-70">
        Sterling &amp; Oak makes watches for people who want something that
        still tells the right time in twenty years. Every piece is built
        around a reliable movement, a case that can take a knock, and a
        design that won&apos;t look dated in five years.
      </p>
    </section>
  );
}
