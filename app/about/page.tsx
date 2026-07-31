import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

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
              alt="Sterling & Oak watch"
              width={800}
              height={800}
              className="aspect-square w-full object-cover"
            />
          </div>
          <div className="flex flex-col gap-4 text-muted">
            <p>
              [PLACEHOLDER — REPLACE] Sterling &amp; Oak was founded on a simple idea: a
              good watch should outlive its trends. Every piece pairs a proven movement
              with materials chosen to age well — brushed steel, sapphire crystal,
              leather that gets better with wear.
            </p>
            <p>
              We design every model in-house and build in small batches, so each watch
              gets real attention before it ships. No borrowed names, no shortcuts —
              just a design we&apos;re proud to put our name on.
            </p>
            <p>
              [PLACEHOLDER — REPLACE] Add the client&apos;s real founding story, team
              background, and what makes Sterling &amp; Oak worth trusting.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-gold/10 bg-background-alt">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="mb-2 text-xs uppercase tracking-[0.25em] text-gold">What We Stand For</p>
          <h2 className="mb-10 font-serif text-2xl font-semibold tracking-tight sm:text-3xl">
            Our values
          </h2>
          <div className="grid gap-10 sm:grid-cols-3">
            <div>
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full border border-gold text-gold">
                ✓
              </div>
              <h3 className="mb-2 font-semibold">Built to Last</h3>
              <p className="text-sm text-muted">
                Proven movements and durable materials, not disposable fashion.
              </p>
            </div>
            <div>
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full border border-gold text-gold">
                ◈
              </div>
              <h3 className="mb-2 font-semibold">Honest Design</h3>
              <p className="text-sm text-muted">
                Every model is our own — no borrowed names, no imitation.
              </p>
            </div>
            <div>
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full border border-gold text-gold">
                ♥
              </div>
              <h3 className="mb-2 font-semibold">Stand Behind It</h3>
              <p className="text-sm text-muted">
                We back every watch we sell, before and after purchase.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20 text-center">
        <h2 className="mb-4 font-serif text-2xl font-semibold tracking-tight">
          Want to know more?
        </h2>
        <p className="mb-8 text-muted">Reach out anytime — we&apos;re happy to talk watches.</p>
        <Link
          href="/contact"
          className="inline-block rounded-sm bg-gold px-8 py-3 text-sm font-medium uppercase tracking-wide text-background hover:bg-white"
        >
          Get in Touch
        </Link>
      </section>
    </>
  );
}
