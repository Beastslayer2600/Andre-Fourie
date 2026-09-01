import type { Metadata } from "next";
import Link from "next/link";
import { WHATSAPP_LINK } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "FAQ | Sterling & Oak",
};

const FAQS = [
  {
    q: "Are the watches authentic?",
    a: "Yes. Every watch we offer is carefully verified for authenticity. We only deal in genuine pieces.",
  },
  {
    q: "Do you have the watch in stock right now?",
    a: "Availability changes frequently. Message us on WhatsApp with the model you are looking for and we will confirm current stock and condition immediately.",
  },
  {
    q: "What is the condition of the watches?",
    a: "We provide honest condition reports (including box and papers status) for every piece. Ask us for details on any specific watch.",
  },
  {
    q: "How does payment work?",
    a: "We accept secure bank transfer (EFT) and other verified payment methods. Full details are given once a piece is reserved.",
  },
  {
    q: "Do you ship?",
    a: "Yes. We offer secure, insured and discreet delivery across South Africa and selected international destinations.",
  },
  {
    q: "Is there a warranty or return policy?",
    a: "This is discussed case by case depending on the piece. We stand behind authenticity and will be transparent about the terms before you commit.",
  },
  {
    q: "Can I request a specific reference or configuration?",
    a: "Absolutely. Tell us the exact reference, dial, bracelet or year preference and we will source it if possible.",
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
        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block rounded-sm bg-gold px-8 py-3 text-sm font-medium uppercase tracking-wide text-background hover:bg-white"
        >
          Message on WhatsApp
        </a>
        <p className="mt-3 text-sm text-muted">071 304 9269</p>
      </div>
    </section>
  );
}
