import type { Metadata } from "next";
import ProductCard from "@/components/ProductCard";
import { getAllProducts } from "@/lib/products";

export const metadata: Metadata = {
  title: "Shop | Sterling & Oak",
};

export default function ShopPage() {
  const products = getAllProducts();

  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <h1 className="mb-10 text-3xl font-semibold tracking-tight">Shop</h1>
      <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
