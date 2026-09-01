import type { Metadata } from "next";
import Image from "next/image";
import { WHATSAPP_LINK } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "About | Sterling & Oak",
};

export default function AboutPage() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-6 py-16">
        <p className="mb-2 text-xs uppercase tracking-[0.25em] text-gold">Our Story</p>
        <h1 className="mb-10 font-serif text-3xl font-semibold tracking-tight sm:text-4xl">
          About Sterling &amp; Oak
        </h1>

        <div className="grid gap-10 sm:grid-cols-2 sm:items-center">
          <div className="overflow-hidden rounded-sm border border-gold/10 bg-background-alt">
            <Image
              src="https://images.unsplash.com/photo-1524592094714-0f0654e20314?q=80&w=1000&auto=format&fit=crop"
              alt="Luxury watch"
              width={800}
              height={800}
              className="aspect-square w-full object-cover"
            />
          </div>
          <div className="flex flex-col gap-4 text-muted">
            <p>
              Sterling &amp; Oak specialises in authentic luxury timepieces from the world&apos;s most respected manufactures.
            </p>
            <p>
              We source Rolex, Patek Philippe, Audemars Piguet, Omega, Cartier, Panerai, TAG Heuer and Franck Muller watches for discerning clients across South Africa and beyond. Every piece is carefully verified for authenticity and condition before it is offered.
            </p>
            <p>
              We keep communication simple and direct. No pressure, no fluff — just clear answers and reliable service. Whether you are looking for a classic Submariner, a Nautilus, a Royal Oak or a specific Daytona, message us and we will tell you exactly what is available.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-gold/10 bg-background-alt">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="mb-2 text-xs uppercase tracking-[0.25em] text-gold">What We Stand For</p>
          <h2 className="mb-10 font-serif text-2xl font-semibold tracking-tight sm:text-3xl">
            Our standards
          </h2>
          <div className="grid gap-10 sm:grid-cols-3">
            <div>
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full border border-gold text-gold">
                ✓
              </div>
              <h3 className="mb-2 font-semibold">Authenticity Guaranteed</h3>
              <p className="text-sm text-muted">
                Every watch is carefully verified for authenticity.
              </p>
            </div>
            <div>
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full border border-gold text-gold">
                ◈
              </div>
              <h3 className="mb-2 font-semibold">Honest Reporting</h3>
              <p className="text-sm text-muted">
                Transparent condition reports including box and papers status.
              </p>
            </div>
            <div>
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full border border-gold text-gold">
                ♥
              </div>
              <h3 className="mb-2 font-semibold">Direct Service</h3>
              <p className="text-sm text-muted">
                Real answers on WhatsApp. Secure payment and discreet delivery.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20 text-center">
        <h2 className="mb-4 font-serif text-2xl font-semibold tracking-tight">
          Looking for a specific piece?
        </h2>
        <p className="mb-8 text-muted">Message us on WhatsApp — we&apos;re happy to help.</p>
        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block rounded-sm bg-gold px-8 py-3 text-sm font-medium uppercase tracking-wide text-background hover:bg-white"
        >
          Chat on WhatsApp
        </a>
        <p className="mt-4 text-sm text-muted">071 304 9269</p>
      </section>
    </>
  );
}
