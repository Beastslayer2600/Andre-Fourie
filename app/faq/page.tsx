import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "FAQ | Sterling & Oak",
};

const FAQS = [
  {
    q: "What payment methods do you accept?",
    a: "Placeholder — to be confirmed once a payment processor is connected (e.g. card, EFT).",
  },
  {
    q: "Do you ship internationally?",
    a: "Placeholder — shipping regions (South Africa only vs. international) need to be confirmed with the client before launch.",
  },
  {
    q: "What's your return policy?",
    a: "Placeholder — final return window and conditions to be confirmed with the client.",
  },
  {
    q: "Is there a warranty on purchases?",
    a: "Placeholder — warranty terms to be confirmed with the client.",
  },
  {
    q: "Can I ask about a specific watch before buying?",
    a: "Yes — message us on WhatsApp any time and we'll answer any questions about a piece.",
  },
];

export default function FAQPage() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-16">
      <p className="mb-2 text-xs uppercase tracking-[0.25em] text-gold">Support</p>
      <h1 className="mb-10 font-serif text-3xl font-semibold tracking-tight sm:text-4xl">
        Frequently Asked Questions
      </h1>

      <div className="divide-y divide-gold/15">
        {FAQS.map((item) => (
          <details key={item.q} className="group py-5">
            <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
              {item.q}
              <span className="ml-4 text-gold group-open:hidden">+</span>
              <span className="ml-4 hidden text-gold group-open:inline">–</span>
            </summary>
            <p className="mt-3 text-sm text-muted">{item.a}</p>
          </details>
        ))}
      </div>

      <div className="mt-14 text-center">
        <p className="mb-4 text-muted">Didn&apos;t find your answer?</p>
        <Link
          href="/contact"
          className="inline-block rounded-sm bg-gold px-8 py-3 text-sm font-medium uppercase tracking-wide text-background hover:bg-white"
        >
          Contact Us
        </Link>
      </div>
    </section>
  );
}
