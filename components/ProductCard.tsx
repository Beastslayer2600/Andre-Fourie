"use client";

import Image from "next/image";
import Link from "next/link";
import { formatPrice } from "@/lib/products";
import { useCart } from "@/lib/cart-context";
import type { Product } from "@/lib/types";

export default function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCart();

  return (
    <div className="group flex flex-col">
      <Link href={`/shop/${product.slug}`} className="block overflow-hidden rounded-lg bg-black/5">
        <Image
          src={product.image}
          alt={product.name}
          width={400}
          height={400}
          className="aspect-square w-full object-cover transition-transform group-hover:scale-105"
        />
      </Link>

      <div className="mt-3 flex items-start justify-between gap-4">
        <div>
          <Link href={`/shop/${product.slug}`} className="font-medium hover:opacity-70">
            {product.name}
          </Link>
          <p className="text-sm opacity-60">{product.category}</p>
        </div>
        <p className="font-medium">{formatPrice(product.price, product.currency)}</p>
      </div>

      <button
        type="button"
        onClick={() => addItem(product)}
        disabled={!product.inStock}
        className="mt-3 rounded-full border border-foreground px-4 py-2 text-sm font-medium transition-colors hover:bg-foreground hover:text-background disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:bg-transparent disabled:hover:text-foreground"
      >
        {product.inStock ? "Add to cart" : "Out of stock"}
      </button>
    </div>
  );
}
