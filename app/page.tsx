import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import ProductCard from "@/components/ProductCard";
import { getFeaturedProducts } from "@/lib/products";
import { WHATSAPP_LINK } from "@/lib/site-config";

const BRANDS = [
  { title: "Rolex", blurb: "Explore →", image: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?q=80&w=900&auto=format&fit=crop" },
  { title: "Patek Philippe", blurb: "Explore →", image: "https://images.unsplash.com/photo-1587836374828-4dbafa94cf0e?q=80&w=900&auto=format&fit=crop" },
  { title: "Audemars Piguet", blurb: "Explore →", image: "https://images.unsplash.com/photo-1614164185128-ce4ff69862c7?q=80&w=900&auto=format&fit=crop" },
];

const TRUST = [
  {
    icon: "✓",
    title: "Authenticity Guaranteed",
    body: "Every watch is carefully verified for authenticity before it is offered.",
  },
  {
    icon: "◈",
    title: "Direct Communication",
    body: "Real answers on WhatsApp. No bots, no pressure — just clear information.",
  },
  {
    icon: "↺",
    title: "Secure & Discreet",
    body: "Secure payment options and discreet nationwide delivery.",
  },
];

const REVIEWS = [
  {
    quote: "Beautifully finished watch and it arrived faster than I expected. Would buy again.",
    author: "Thabo M., Cape Town",
  },
  {
    quote: "Quick WhatsApp response, honest answers about the movement and case, smooth process.",
    author: "Sarah K., Johannesburg",
  },
  {
    quote: "Great value for the build quality. The packaging alone felt premium.",
    author: "Johan van der Berg, Pretoria",
  },
];

export default function HomePage() {
  const featuredProducts = getFeaturedProducts().slice(0, 4);

  return (
    <>
      {/* HERO */}
      <section className="hero-bleed relative flex min-h-screen items-center">
        <div className="mx-auto w-full max-w-6xl px-8">
          <FadeIn className="max-w-[640px]">
            <p className="mb-[18px] text-xs uppercase tracking-[0.25em] text-gold">
              Authentic Luxury Timepieces
            </p>
            <h1 className="mb-5 font-serif text-[38px] font-semibold leading-[1.1] sm:text-[56px]">
              Rolex, Patek, AP
              <br />
              <em className="italic text-gold">sourced</em> for you.
            </h1>
            <p className="mb-8 max-w-[480px] text-base text-muted">
              Authentic Rolex, Patek Philippe, Audemars Piguet, Omega and more — carefully sourced and ready for you. Message us for current availability and pricing.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/shop"
                className="rounded-sm bg-gold px-[30px] py-[15px] text-[13px] font-medium uppercase tracking-[0.08em] text-background transition-colors hover:bg-white"
              >
                View Collection
              </Link>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-sm border border-white/40 px-[30px] py-[15px] text-[13px] font-medium uppercase tracking-[0.08em] transition-colors hover:border-gold hover:text-gold"
              >
                Chat on WhatsApp
              </a>
            </div>
          </FadeIn>
        </div>

        <div className="scroll-cue absolute bottom-8 left-1/2 -translate-x-1/2 text-center text-[11px] uppercase tracking-[0.2em] text-muted opacity-70">
          Scroll
        </div>
      </section>

      {/* BRANDS */}
      <section className="bg-background-alt py-[110px]">
        <div className="mx-auto max-w-6xl px-8">
          <FadeIn className="mx-auto mb-[60px] max-w-[640px] text-center">
            <p className="text-xs uppercase tracking-[0.25em] text-gold">
              Featured Brands
            </p>
            <h2 className="mb-4 mt-3.5 font-serif text-4xl font-semibold">
              The collection
            </h2>
            <p className="text-[15px] text-muted">
              Rolex · Omega · Patek Philippe · Audemars Piguet · Cartier · Panerai · TAG Heuer · Franck Muller
            </p>
          </FadeIn>

          <div className="grid gap-6 md:grid-cols-3">
            {BRANDS.map((brand, index) => (
              <FadeIn key={brand.title} delay={index * 0.08}>
                <Link
                  href="/shop"
                  className="collection-card h-[420px] rounded-sm p-8"
                  style={{ backgroundImage: `url('${brand.image}')` }}
                >
                  <div>
                    <h3 className="mb-1.5 font-serif text-2xl font-semibold">
                      {brand.title}
                    </h3>
                    <p className="text-[13px] tracking-[0.05em] text-gold">
                      {brand.blurb}
                    </p>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section id="featured" className="py-[110px]">
        <div className="mx-auto max-w-6xl px-8">
          <FadeIn className="mx-auto mb-[60px] max-w-[640px] text-center">
            <p className="text-xs uppercase tracking-[0.25em] text-gold">
              Available Now
            </p>
            <h2 className="mb-4 mt-3.5 font-serif text-4xl font-semibold">
              Selected pieces
            </h2>
            <p className="text-[15px] text-muted">
              Availability changes frequently. Message us for current stock and pricing.
            </p>
          </FadeIn>

          <div className="grid grid-cols-2 gap-5 lg:grid-cols-4">
            {featuredProducts.map((product, index) => (
              <FadeIn key={product.id} delay={index * 0.08}>
                <ProductCard product={product} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="border-y border-gold/15 bg-[#22252d] py-[110px]">
        <div className="mx-auto max-w-6xl px-8">
          <FadeIn className="mx-auto mb-[60px] max-w-[640px] text-center">
            <p className="text-xs uppercase tracking-[0.25em] text-gold">
              Why Sterling &amp; Oak
            </p>
            <h2 className="mt-3.5 font-serif text-4xl font-semibold">
              Trusted sourcing
            </h2>
          </FadeIn>

          <div className="grid gap-10 text-center md:grid-cols-3">
            {TRUST.map((item, index) => (
              <FadeIn key={item.title} delay={index * 0.08}>
                <div className="mx-auto mb-[18px] flex h-[52px] w-[52px] items-center justify-center rounded-full border border-gold text-xl text-gold">
                  {item.icon}
                </div>
                <h3 className="mb-2.5 text-lg font-semibold">{item.title}</h3>
                <p className="text-sm text-muted">{item.body}</p>
              </FadeIn>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/about"
              className="inline-block rounded-sm border border-white/40 px-[18px] py-2.5 text-xs font-medium uppercase tracking-[0.08em] transition-colors hover:border-gold hover:text-gold"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section id="reviews" className="py-[110px]">
        <div className="mx-auto max-w-6xl px-8">
          <FadeIn className="mx-auto mb-[60px] max-w-[640px] text-center">
            <p className="text-xs uppercase tracking-[0.25em] text-gold">
              Customer Reviews
            </p>
            <h2 className="mt-3.5 font-serif text-4xl font-semibold">
              Trusted by our customers
            </h2>
          </FadeIn>

          <div className="grid gap-6 md:grid-cols-3">
            {REVIEWS.map((review, index) => (
              <FadeIn
                key={review.author + index}
                delay={index * 0.08}
                className="rounded-sm border border-gold/10 bg-background-alt p-8"
              >
                <div className="mb-4 tracking-[2px] text-sm text-gold">★★★★★</div>
                <p className="mb-5 text-sm italic text-muted">
                  &ldquo;{review.quote}&rdquo;
                </p>
                <p className="text-[13px] font-medium">— {review.author}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BAND */}
      <section className="bg-gradient-to-br from-[#22252d] to-background py-[90px] text-center">
        <div className="mx-auto max-w-2xl px-8">
          <h2 className="mb-4 font-serif text-[32px] font-semibold">
            Looking for a specific reference?
          </h2>
          <p className="mb-8 text-muted">
            Message us on WhatsApp — real answers, no bots.
          </p>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-sm bg-gold px-[30px] py-[15px] text-[13px] font-medium uppercase tracking-[0.08em] text-background transition-colors hover:bg-white"
          >
            Message Us on WhatsApp
          </a>
          <p className="mt-4 text-sm text-muted">071 304 9269</p>
        </div>
      </section>
    </>
  );
}
