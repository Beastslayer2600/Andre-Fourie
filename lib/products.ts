import productsData from "./products.json";
import type { Product } from "./types";

const products = productsData as Product[];

export function getAllProducts(): Product[] {
  return products;
}

export function getFeaturedProducts(): Product[] {
  return products.filter((product) => product.featured);
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug);
}

export function getAllProductSlugs(): string[] {
  return products.map((product) => product.slug);
}

export function getAllCategories(): string[] {
  return Array.from(new Set(products.map((product) => product.category))).sort();
}

// Same category first, then nearest in price, so the row is always full.
export function getRelatedProducts(slug: string, limit = 4): Product[] {
  const current = getProductBySlug(slug);
  if (!current) return [];

  const others = products.filter((product) => product.slug !== slug);
  const sameCategory = others.filter(
    (product) => product.category === current.category
  );
  const rest = others
    .filter((product) => product.category !== current.category)
    .sort(
      (a, b) =>
        Math.abs(a.price - current.price) - Math.abs(b.price - current.price)
    );

  return [...sameCategory, ...rest].slice(0, limit);
}

const CURRENCY_SYMBOLS: Record<string, string> = {
  ZAR: "R",
};

// Formats manually instead of via Intl.NumberFormat/toLocaleString: their
// ICU-generated separators can differ between Node and the browser and
// trigger a hydration mismatch.
export function formatPrice(price: number, currency: string): string {
  const symbol = CURRENCY_SYMBOLS[currency] ?? currency;
  const grouped = Math.round(price)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return `${symbol} ${grouped}`;
}
