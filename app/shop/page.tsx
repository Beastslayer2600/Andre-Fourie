import type { Metadata } from "next";
import ShopGrid from "@/components/ShopGrid";
import { getAllCategories, getAllProducts } from "@/lib/products";

export const metadata: Metadata = {
  title: "Shop | Sterling & Oak",
  description:
    "Browse authentic Rolex, Patek Philippe, Audemars Piguet, Omega, Cartier and more — availability and pricing on request.",
};

export default function ShopPage() {
  const products = getAllProducts();

  return (
    <section className="mx-auto max-w-6xl px-8 py-16">
      <p className="mb-2 text-xs uppercase tracking-[0.25em] text-gold">
        The Collection
      </p>
      <h1 className="mb-3 font-serif text-4xl font-semibold tracking-tight">
        Shop
      </h1>
      <p className="mb-10 max-w-xl text-muted">
        {products.length} carefully sourced pieces from Rolex, Patek Philippe,
        Audemars Piguet, Omega and more. Availability and pricing on request.
      </p>
      <ShopGrid products={products} categories={getAllCategories()} />
    </section>
  );
}
