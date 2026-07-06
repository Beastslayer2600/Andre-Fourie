"use client";

import { useMemo, useState } from "react";
import ProductCard from "@/components/ProductCard";
import type { Product } from "@/lib/types";

type SortOption = "featured" | "price-asc" | "price-desc" | "name";

const SORT_LABELS: Record<SortOption, string> = {
  featured: "Featured",
  "price-asc": "Price: Low to High",
  "price-desc": "Price: High to Low",
  name: "Name: A to Z",
};

export default function ShopGrid({
  products,
  categories,
}: {
  products: Product[];
  categories: string[];
}) {
  const [category, setCategory] = useState<string>("All");
  const [sort, setSort] = useState<SortOption>("featured");

  const visible = useMemo(() => {
    const filtered =
      category === "All"
        ? products
        : products.filter((product) => product.category === category);

    const sorted = [...filtered];
    switch (sort) {
      case "price-asc":
        sorted.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        sorted.sort((a, b) => b.price - a.price);
        break;
      case "name":
        sorted.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "featured":
        sorted.sort((a, b) => Number(b.featured) - Number(a.featured));
        break;
    }
    return sorted;
  }, [products, category, sort]);

  return (
    <div>
      <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
        <div className="flex flex-wrap gap-2">
          {["All", ...categories].map((option) => (
            <button
              key={option}
              type="button"
              onClick={() => setCategory(option)}
              aria-pressed={category === option}
              className={`rounded-full border px-4 py-1.5 text-sm transition-colors ${
                category === option
                  ? "border-foreground bg-foreground text-background"
                  : "border-foreground/25 hover:border-foreground"
              }`}
            >
              {option}
            </button>
          ))}
        </div>

        <label className="flex items-center gap-2 text-sm">
          <span className="opacity-60">Sort</span>
          <select
            value={sort}
            onChange={(event) => setSort(event.target.value as SortOption)}
            className="rounded-full border border-foreground/25 bg-background px-3 py-1.5"
          >
            {(Object.keys(SORT_LABELS) as SortOption[]).map((option) => (
              <option key={option} value={option}>
                {SORT_LABELS[option]}
              </option>
            ))}
          </select>
        </label>
      </div>

      <p className="mb-6 text-sm opacity-60">
        {visible.length} {visible.length === 1 ? "watch" : "watches"}
      </p>

      <div className="grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-3 xl:grid-cols-4">
        {visible.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
