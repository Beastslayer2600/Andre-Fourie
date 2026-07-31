"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/lib/cart-context";
import { formatPrice } from "@/lib/products";

export default function CartPage() {
  const { items, updateQuantity, removeItem, totalPrice } = useCart();

  if (items.length === 0) {
    return (
      <section className="mx-auto max-w-6xl px-6 py-16 text-center">
        <h1 className="font-serif text-3xl font-semibold tracking-tight">Your cart is empty</h1>
        <Link
          href="/shop"
          className="mt-6 inline-block rounded-sm bg-gold px-6 py-3 text-sm font-medium uppercase tracking-wide text-background hover:bg-white"
        >
          Continue shopping
        </Link>
      </section>
    );
  }

  return (
    <section className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="mb-10 font-serif text-3xl font-semibold tracking-tight">Your Cart</h1>

      <ul className="divide-y divide-gold/10">
        {items.map((item) => (
          <li key={item.slug} className="flex items-center gap-4 py-6">
            <Image
              src={item.image}
              alt={item.name}
              width={80}
              height={80}
              className="h-20 w-20 rounded-sm bg-background-alt object-cover"
            />
            <div className="flex-1">
              <p className="font-medium">{item.name}</p>
              <p className="text-sm text-gold">{formatPrice(item.price, "ZAR")}</p>
            </div>
            <div className="flex items-center gap-3 rounded-full border border-gold/40 px-3 py-1">
              <button
                type="button"
                onClick={() => updateQuantity(item.slug, item.quantity - 1)}
                aria-label="Decrease quantity"
              >
                -
              </button>
              <span className="text-sm">{item.quantity}</span>
              <button
                type="button"
                onClick={() => updateQuantity(item.slug, item.quantity + 1)}
                aria-label="Increase quantity"
              >
                +
              </button>
            </div>
            <p className="w-24 text-right font-medium">
              {formatPrice(item.price * item.quantity, "ZAR")}
            </p>
            <button
              type="button"
              onClick={() => removeItem(item.slug)}
              className="text-sm text-muted underline hover:text-gold"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>

      <div className="mt-8 flex items-center justify-between border-t border-gold/15 pt-6">
        <p className="text-lg font-semibold">Subtotal</p>
        <p className="text-lg font-semibold text-gold">{formatPrice(totalPrice, "ZAR")}</p>
      </div>

      <Link
        href="/checkout"
        className="mt-6 block rounded-sm bg-gold px-6 py-3 text-center text-sm font-medium uppercase tracking-wide text-background hover:bg-white"
      >
        Proceed to checkout
      </Link>
    </section>
  );
}
