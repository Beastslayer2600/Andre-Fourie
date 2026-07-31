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

const PRICE_BANDS = [
  { id: "all", label: "Any price", test: () => true },
  { id: "u5", label: "Under R5,000", test: (p: number) => p < 5000 },
  { id: "5-10", label: "R5,000 – R10,000", test: (p: number) => p >= 5000 && p < 10000 },
  { id: "10-15", label: "R10,000 – R15,000", test: (p: number) => p >= 10000 && p < 15000 },
  { id: "15p", label: "R15,000+", test: (p: number) => p >= 15000 },
];

export default function ShopGrid({
  products,
  categories,
}: {
  products: Product[];
  categories: string[];
}) {
  const [category, setCategory] = useState("All");
  const [band, setBand] = useState("all");
  const [inStockOnly, setInStockOnly] = useState(false);
  const [sort, setSort] = useState<SortOption>("featured");

  const visible = useMemo(() => {
    const priceTest =
      PRICE_BANDS.find((b) => b.id === band)?.test ?? (() => true);

    const filtered = products.filter(
      (p) =>
        (category === "All" || p.category === category) &&
        priceTest(p.price) &&
        (!inStockOnly || p.inStock)
    );

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
        sorted.sort(
          (a, b) => Number(b.featured) - Number(a.featured) || a.price - b.price
        );
        break;
    }
    return sorted;
  }, [products, category, band, inStockOnly, sort]);

  const reset = () => {
    setCategory("All");
    setBand("all");
    setInStockOnly(false);
  };

  const filtersActive =
    category !== "All" || band !== "all" || inStockOnly;

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
        <label className="flex items-center gap-2">
          <span className="text-muted">Price</span>
          <select
            value={band}
            onChange={(e) => setBand(e.target.value)}
            className="rounded-sm border border-gold/25 bg-background-alt px-3 py-1.5 text-foreground"
          >
            {PRICE_BANDS.map((b) => (
              <option key={b.id} value={b.id}>
                {b.label}
              </option>
            ))}
          </select>
        </label>

        <label className="flex cursor-pointer items-center gap-2 text-muted">
          <input
            type="checkbox"
            checked={inStockOnly}
            onChange={(e) => setInStockOnly(e.target.checked)}
            className="h-4 w-4 accent-[color:var(--gold)]"
          />
          In stock only
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
