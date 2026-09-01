"use client";

import { useState } from "react";
import { useCart } from "@/lib/cart-context";
import { WHATSAPP_LINK } from "@/lib/site-config";
import type { Product } from "@/lib/types";

export default function AddToCartButton({ product }: { product: Product }) {
  const { addItem } = useCart();
  const [quantity, setQuantity] = useState(1);
  const isEnquiry = product.price === 0;

  const enquireLink = `${WHATSAPP_LINK}?text=${encodeURIComponent(
    `Hi, I'm interested in the ${product.brand} ${product.name}. Is it available and what is the current price?`
  )}`;

  if (isEnquiry) {
    return (
      <a
        href={enquireLink}
        target="_blank"
        rel="noopener noreferrer"
        className="flex w-full items-center justify-center rounded-sm bg-gold px-6 py-3 text-sm font-medium uppercase tracking-wide text-background transition-colors hover:bg-white"
      >
        Enquire on WhatsApp
      </a>
    );
  }

  return (
    <div className="flex items-center gap-4">
      <div className="flex items-center gap-3 rounded-full border border-gold/40 px-4 py-2">
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
        className="flex-1 rounded-sm bg-gold px-6 py-3 text-sm font-medium uppercase tracking-wide text-background hover:bg-white disabled:cursor-not-allowed disabled:bg-muted/30 disabled:text-muted"
      >
        {product.inStock ? "Add to Cart" : "Out of Stock"}
      </button>
    </div>
  );
}
