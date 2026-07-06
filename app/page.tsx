import Image from "next/image";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import ProductCard from "@/components/ProductCard";
import { getFeaturedProducts } from "@/lib/products";

export default function HomePage() {
  const featuredProducts = getFeaturedProducts().slice(0, 4);

  return (
    <>
      {/* Full-bleed hero */}
      <section className="relative min-h-[85vh] w-full overflow-hidden bg-[#0e0d0b] text-white">
        <Image
          src="/placeholder/hero-watch.svg"
          alt="Sterling & Oak watch on a dark background"
          fill
          priority
          className="object-cover object-right"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0e0d0b] via-[#0e0d0b]/70 to-transparent" />

        <div className="relative mx-auto flex min-h-[85vh] max-w-6xl flex-col justify-center px-6 py-24">
          <FadeIn className="max-w-xl">
            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#d4af37]">
              Sterling &amp; Oak
            </p>
            <h1 className="text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">
              Timeless watches, built to last.
            </h1>
            <p className="mt-6 text-lg text-white/70">
              Precision movements, hand-finished cases, and designs that
              won&apos;t look dated in twenty years.
            </p>
            <Link
              href="/shop"
              className="mt-10 inline-block rounded-full bg-[#d4af37] px-8 py-4 text-sm font-medium text-[#0e0d0b] transition-opacity hover:opacity-90"
            >
              Shop the collection
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* Featured products */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <FadeIn>
          <p className="mb-2 text-sm uppercase tracking-[0.3em] text-[#b8923a]">
            The collection
          </p>
          <h2 className="mb-10 text-2xl font-semibold tracking-tight sm:text-3xl">
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
      <section className="bg-[#0e0d0b] text-white">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <FadeIn className="max-w-2xl">
            <p className="mb-2 text-sm uppercase tracking-[0.3em] text-[#d4af37]">
              Our story
            </p>
            <h2 className="mb-6 text-2xl font-semibold tracking-tight sm:text-3xl">
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
              className="mt-8 inline-block border-b border-[#d4af37] pb-1 text-sm font-medium text-[#d4af37] transition-opacity hover:opacity-80"
            >
              Read more about us
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
