import Image from "next/image";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import ProductCard from "@/components/ProductCard";
import { getFeaturedProducts } from "@/lib/products";

const REVIEWS = [
  {
    quote:
      "Beautifully finished watch and it arrived faster than I expected. Would buy again.",
    author: "Placeholder Review",
  },
  {
    quote:
      "Quick WhatsApp response, honest answers about the movement and case, smooth checkout.",
    author: "Placeholder Review",
  },
  {
    quote: "Great value for the build quality. The packaging alone felt premium.",
    author: "Placeholder Review",
  },
];

export default function HomePage() {
  const featuredProducts = getFeaturedProducts().slice(0, 4);

  return (
    <>
      {/* Full-bleed hero */}
      <section className="relative min-h-[85vh] w-full overflow-hidden bg-background text-white">
        <Image
          src="/placeholder/hero-watch.svg"
          alt="Sterling & Oak watch on a dark background"
          fill
          priority
          className="object-cover object-right"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-transparent" />

        <div className="relative mx-auto flex min-h-[85vh] max-w-6xl flex-col justify-center px-6 py-24">
          <FadeIn className="max-w-xl">
            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-gold">
              Sterling &amp; Oak
            </p>
            <h1 className="font-serif text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">
              Timeless watches, built to last.
            </h1>
            <p className="mt-6 text-lg text-white/70">
              Precision movements, hand-finished cases, and designs that
              won&apos;t look dated in twenty years.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/shop"
                className="inline-block rounded-sm bg-gold px-8 py-4 text-sm font-medium uppercase tracking-wide text-background transition-opacity hover:opacity-90"
              >
                Shop the collection
              </Link>
              {/* [PLACEHOLDER — REPLACE] with the store's real WhatsApp number */}
              <a
                href="https://wa.me/27000000000"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-sm border border-white/40 px-8 py-4 text-sm font-medium uppercase tracking-wide text-white transition-colors hover:border-gold hover:text-gold"
              >
                Chat on WhatsApp
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Featured products */}
      <section id="featured" className="mx-auto max-w-6xl px-6 py-24">
        <FadeIn>
          <p className="mb-2 text-sm uppercase tracking-[0.3em] text-gold-dim">
            The collection
          </p>
          <h2 className="mb-10 font-serif text-2xl font-semibold tracking-tight sm:text-3xl">
            Featured pieces
          </h2>
        </FadeIn>
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-4">
          {featuredProducts.map((product, index) => (
            <FadeIn key={product.id} delay={index * 0.08}>
              <ProductCard product={product} />
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Brand story */}
      <section className="border-y border-gold/10 bg-background-alt text-white">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <FadeIn className="max-w-2xl">
            <p className="mb-2 text-sm uppercase tracking-[0.3em] text-gold">
              Our story
            </p>
            <h2 className="mb-6 font-serif text-2xl font-semibold tracking-tight sm:text-3xl">
              Made to be worn, not stored.
            </h2>
            <p className="text-white/70">
              [PLACEHOLDER — REPLACE] Sterling &amp; Oak was founded on a
              simple idea: a good watch should outlive its trends. Every
              piece pairs a proven movement with materials chosen to age
              well — brushed steel, sapphire crystal, leather that gets
              better with wear. We build in small batches and stand behind
              every watch we sell.
            </p>
            <Link
              href="/about"
              className="mt-8 inline-block border-b border-gold pb-1 text-sm font-medium text-gold transition-opacity hover:opacity-80"
            >
              Read more about us
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" className="mx-auto max-w-6xl px-6 py-24">
        <FadeIn className="mb-12 max-w-xl">
          <p className="mb-2 text-sm uppercase tracking-[0.3em] text-gold-dim">
            Customer reviews
          </p>
          <h2 className="font-serif text-2xl font-semibold tracking-tight sm:text-3xl">
            Trusted by our customers
          </h2>
        </FadeIn>
        <div className="grid gap-6 sm:grid-cols-3">
          {REVIEWS.map((review, index) => (
            <FadeIn
              key={review.author + index}
              delay={index * 0.08}
              className="rounded-sm border border-gold/15 bg-background-alt p-8"
            >
              <div className="mb-4 tracking-widest text-gold">★★★★★</div>
              <p className="mb-6 text-sm italic text-white/70">&ldquo;{review.quote}&rdquo;</p>
              <p className="text-sm font-medium">— {review.author}</p>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* CTA band */}
      <section className="border-t border-gold/10 bg-background-alt py-20 text-center">
        <div className="mx-auto max-w-2xl px-6">
          <h2 className="mb-4 font-serif text-2xl font-semibold tracking-tight sm:text-3xl">
            Have a question about a piece?
          </h2>
          <p className="mb-8 text-white/70">
            Chat with us directly on WhatsApp — real answers, no bots.
          </p>
          {/* [PLACEHOLDER — REPLACE] with the store's real WhatsApp number */}
          <a
            href="https://wa.me/27000000000"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-sm bg-gold px-8 py-4 text-sm font-medium uppercase tracking-wide text-background hover:opacity-90"
          >
            Message Us on WhatsApp
          </a>
        </div>
      </section>
    </>
  );
}
