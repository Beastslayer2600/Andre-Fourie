"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/lib/cart-context";
import { formatPrice } from "@/lib/products";

export default function CartDrawer() {
  const { items, isDrawerOpen, closeDrawer, updateQuantity, removeItem, totalPrice } =
    useCart();

  if (!isDrawerOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      <button
        type="button"
        aria-label="Close cart"
        onClick={closeDrawer}
        className="absolute inset-0 bg-black/60"
      />

      <div className="relative flex h-full w-full max-w-sm flex-col bg-background-alt p-6 shadow-xl">
        <div className="flex items-center justify-between">
          <h2 className="font-serif text-lg font-semibold">Your Cart</h2>
          <button type="button" onClick={closeDrawer} className="text-sm text-muted hover:text-gold">
            Close
          </button>
        </div>

        {items.length === 0 ? (
          <p className="mt-8 text-sm text-muted">Your cart is empty.</p>
        ) : (
          <>
            <ul className="mt-6 flex-1 space-y-4 overflow-y-auto">
              {items.map((item) => (
                <li key={item.slug} className="flex gap-3">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={64}
                    height={64}
                    className="h-16 w-16 rounded-sm bg-background object-cover"
                  />
                  <div className="flex-1">
                    <p className="text-sm font-medium">{item.name}</p>
                    <p className="text-sm text-gold">{formatPrice(item.price, "ZAR")}</p>
                    <div className="mt-2 flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => updateQuantity(item.slug, item.quantity - 1)}
                        className="h-6 w-6 rounded-full border border-gold/40 text-xs text-foreground"
                      >
                        -
                      </button>
                      <span className="text-sm">{item.quantity}</span>
                      <button
                        type="button"
                        onClick={() => updateQuantity(item.slug, item.quantity + 1)}
                        className="h-6 w-6 rounded-full border border-gold/40 text-xs text-foreground"
                      >
                        +
                      </button>
                      <button
                        type="button"
                        onClick={() => removeItem(item.slug)}
                        className="ml-auto text-xs text-muted underline hover:text-gold"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-6 space-y-4 border-t border-gold/15 pt-4">
              <div className="flex items-center justify-between font-medium">
                <span>Subtotal</span>
                <span className="text-gold">{formatPrice(totalPrice, "ZAR")}</span>
              </div>
              <Link
                href="/checkout"
                onClick={closeDrawer}
                className="block rounded-sm bg-gold px-4 py-3 text-center text-sm font-medium uppercase tracking-wide text-background hover:bg-white"
              >
                Checkout
              </Link>
              <Link
                href="/cart"
                onClick={closeDrawer}
                className="block text-center text-sm text-muted underline hover:text-gold"
              >
                View cart
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
