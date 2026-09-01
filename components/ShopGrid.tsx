"use client";

import { useMemo, useState } from "react";
import ProductCard from "@/components/ProductCard";
import type { Product } from "@/lib/types";

type SortOption = "featured" | "name" | "brand";

const SORT_LABELS: Record<SortOption, string> = {
  featured: "Featured",
  name: "Name: A to Z",
  brand: "Brand: A to Z",
};

export default function ShopGrid({
  products,
  categories,
}: {
  products: Product[];
  categories: string[];
}) {
  const [category, setCategory] = useState("All");
  const [inStockOnly, setInStockOnly] = useState(false);
  const [sort, setSort] = useState<SortOption>("featured");

  const visible = useMemo(() => {
    const filtered = products.filter(
      (p) =>
        (category === "All" || p.category === category) &&
        (!inStockOnly || p.inStock)
    );

    const sorted = [...filtered];
    switch (sort) {
      case "name":
        sorted.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "brand":
        sorted.sort((a, b) => a.brand.localeCompare(b.brand) || a.name.localeCompare(b.name));
        break;
      case "featured":
      default:
        sorted.sort(
          (a, b) => Number(b.featured) - Number(a.featured) || a.name.localeCompare(b.name)
        );
        break;
    }
    return sorted;
  }, [products, category, inStockOnly, sort]);

  const reset = () => {
    setCategory("All");
    setInStockOnly(false);
  };

  const filtersActive = category !== "All" || inStockOnly;

  return (
    <div>
      {/* Category chips */}
      <div className="mb-5 flex flex-wrap gap-2">
        {["All", ...categories].map((option) => (
          <button
            key={option}
            type="button"
            onClick={() => setCategory(option)}
            aria-pressed={category === option}
            className={`rounded-full border px-4 py-1.5 text-sm transition-colors ${
              category === option
                ? "border-gold bg-gold text-background"
                : "border-gold/25 text-muted hover:border-gold hover:text-gold"
            }`}
          >
            {option}
          </button>
        ))}
      </div>

      {/* Secondary controls */}
      <div className="mb-6 flex flex-wrap items-center gap-x-6 gap-y-3 border-y border-gold/10 py-4 text-sm">
        <label className="flex cursor-pointer items-center gap-2 text-muted">
          <input
            type="checkbox"
            checked={inStockOnly}
            onChange={(e) => setInStockOnly(e.target.checked)}
            className="h-4 w-4 accent-[color:var(--gold)]"
          />
          Available only
        </label>

        <label className="flex items-center gap-2">
          <span className="text-muted">Sort</span>
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value as SortOption)}
            className="rounded-sm border border-gold/25 bg-background-alt px-3 py-1.5 text-foreground"
          >
            {(Object.keys(SORT_LABELS) as SortOption[]).map((option) => (
              <option key={option} value={option}>
                {SORT_LABELS[option]}
              </option>
            ))}
          </select>
        </label>

        <span className="ml-auto text-muted">
          {visible.length} {visible.length === 1 ? "watch" : "watches"}
        </span>

        {filtersActive && (
          <button
            type="button"
            onClick={reset}
            className="text-gold underline underline-offset-4 hover:text-white"
          >
            Clear filters
          </button>
        )}
      </div>

      {visible.length === 0 ? (
        <p className="py-20 text-center text-muted">
          No watches match those filters.{" "}
          <button
            type="button"
            onClick={reset}
            className="text-gold underline underline-offset-4"
          >
            Clear them
          </button>{" "}
          to see the full collection.
        </p>
      ) : (
        <div className="grid grid-cols-2 gap-5 md:grid-cols-3 xl:grid-cols-4">
          {visible.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}
