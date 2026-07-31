import type { Metadata } from "next";
import ShopGrid from "@/components/ShopGrid";
import { getAllCategories, getAllProducts } from "@/lib/products";

export const metadata: Metadata = {
  title: "Shop | Sterling & Oak",
  description:
    "Browse the full Sterling & Oak collection — divers, chronographs, GMTs, dress and field watches.",
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
        {products.length} pieces across eight collections — every one designed
        and built in-house.
      </p>
      <ShopGrid products={products} categories={getAllCategories()} />
    </section>
  );
}
