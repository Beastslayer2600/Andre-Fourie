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
        <h1 className="text-3xl font-semibold tracking-tight">Your cart is empty</h1>
        <Link
          href="/shop"
          className="mt-6 inline-block rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background hover:opacity-90"
        >
          Continue shopping
        </Link>
      </section>
    );
  }

  return (
    <section className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="mb-10 text-3xl font-semibold tracking-tight">Your cart</h1>

      <ul className="divide-y divide-black/10">
        {items.map((item) => (
          <li key={item.slug} className="flex items-center gap-4 py-6">
            <Image
              src={item.image}
              alt={item.name}
              width={80}
              height={80}
              className="h-20 w-20 rounded-md bg-black/5 object-cover"
            />
            <div className="flex-1">
              <p className="font-medium">{item.name}</p>
              <p className="text-sm opacity-60">{formatPrice(item.price, "ZAR")}</p>
            </div>
            <div className="flex items-center gap-3 rounded-full border border-foreground/30 px-3 py-1">
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
              className="text-sm underline opacity-60 hover:opacity-100"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>

      <div className="mt-8 flex items-center justify-between border-t border-black/10 pt-6">
        <p className="text-lg font-semibold">Subtotal</p>
        <p className="text-lg font-semibold">{formatPrice(totalPrice, "ZAR")}</p>
      </div>

      <Link
        href="/checkout"
        className="mt-6 block rounded-full bg-foreground px-6 py-3 text-center text-sm font-medium text-background hover:opacity-90"
      >
        Proceed to checkout
      </Link>
    </section>
  );
}
