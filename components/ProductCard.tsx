"use client";

import Image from "next/image";
import Link from "next/link";
import { formatPrice } from "@/lib/products";
import { useCart } from "@/lib/cart-context";
import type { Product } from "@/lib/types";

export default function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCart();

  return (
    <div className="group flex flex-col overflow-hidden rounded-sm border border-gold/10 bg-background-alt transition-all duration-200 hover:-translate-y-1.5 hover:border-gold/40">
      <Link href={`/shop/${product.slug}`} className="relative block overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          width={400}
          height={400}
          className="aspect-square w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <span className="absolute left-3.5 top-3.5 rounded-sm border border-gold/30 bg-background/85 px-2.5 py-1.5 text-[10px] uppercase tracking-[0.08em] text-gold">
          {product.inStock ? "In Stock" : "Sold Out"}
        </span>
      </Link>

      <div className="flex flex-1 flex-col p-5">
        <p className="mb-1.5 text-[11px] uppercase tracking-[0.08em] text-gold-dim">
          {product.category} &middot; {product.strap}
        </p>
        <Link
          href={`/shop/${product.slug}`}
          className="mb-2 text-[17px] font-medium leading-snug transition-colors hover:text-gold"
        >
          {product.name}
        </Link>

        <div className="mt-auto flex items-center justify-between pt-2">
          <span className="font-semibold text-gold">
            {formatPrice(product.price, product.currency)}
          </span>
          <span className="text-xs text-muted">{product.caseSize}</span>
        </div>

        <button
          type="button"
          onClick={() => addItem(product)}
          disabled={!product.inStock}
          className="mt-4 rounded-sm border border-gold px-4 py-2 text-xs font-medium uppercase tracking-wide text-gold transition-colors hover:bg-gold hover:text-background disabled:cursor-not-allowed disabled:border-muted/30 disabled:text-muted/50 disabled:hover:bg-transparent"
        >
          {product.inStock ? "Add to Cart" : "Out of Stock"}
        </button>
      </div>
    </div>
  );
}
