import type { Metadata } from "next";
import ShopGrid from "@/components/ShopGrid";
import { getAllCategories, getAllProducts } from "@/lib/products";

export const metadata: Metadata = {
  title: "Shop | Sterling & Oak",
  description: "Browse the full Sterling & Oak collection.",
};

export default function ShopPage() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <h1 className="mb-2 text-3xl font-semibold tracking-tight">Shop</h1>
      <p className="mb-10 opacity-60">The full Sterling &amp; Oak collection.</p>
      <ShopGrid products={getAllProducts()} categories={getAllCategories()} />
    </section>
  );
}
