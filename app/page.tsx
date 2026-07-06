import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import { getFeaturedProducts } from "@/lib/products";

export default function HomePage() {
  const featuredProducts = getFeaturedProducts();

  return (
    <>
      <section className="mx-auto flex max-w-6xl flex-col items-start gap-6 px-6 py-24">
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
          Timeless watches, built to last.
        </h1>
        <p className="max-w-xl text-lg opacity-70">
          Sterling &amp; Oak crafts watches for people who want something that
          still tells the right time in twenty years.
        </p>
        <Link
          href="/shop"
          className="rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background hover:opacity-90"
        >
          Shop the collection
        </Link>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-24">
        <h2 className="mb-6 text-xl font-semibold">Featured</h2>
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </>
  );
}
