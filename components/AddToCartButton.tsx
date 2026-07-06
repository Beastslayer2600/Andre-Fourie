"use client";

import { useState } from "react";
import { useCart } from "@/lib/cart-context";
import type { Product } from "@/lib/types";

export default function AddToCartButton({ product }: { product: Product }) {
  const { addItem } = useCart();
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="flex items-center gap-4">
      <div className="flex items-center gap-3 rounded-full border border-foreground/30 px-4 py-2">
        <button
          type="button"
          onClick={() => setQuantity((q) => Math.max(1, q - 1))}
          className="text-sm"
          aria-label="Decrease quantity"
        >
          -
        </button>
        <span className="text-sm">{quantity}</span>
        <button
          type="button"
          onClick={() => setQuantity((q) => q + 1)}
          className="text-sm"
          aria-label="Increase quantity"
        >
          +
        </button>
      </div>

      <button
        type="button"
        onClick={() => addItem(product, quantity)}
        disabled={!product.inStock}
        className="flex-1 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-40"
      >
        {product.inStock ? "Add to cart" : "Out of stock"}
      </button>
    </div>
  );
}
