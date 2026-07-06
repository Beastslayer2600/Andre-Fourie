"use client";

import Link from "next/link";
import { useCart } from "@/lib/cart-context";
import { formatPrice } from "@/lib/products";

export default function CheckoutPage() {
  const { items, totalPrice } = useCart();

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
    <section className="mx-auto grid max-w-4xl gap-10 px-6 py-16 sm:grid-cols-2">
      <div>
        <h1 className="mb-6 text-2xl font-semibold tracking-tight">Checkout</h1>
        <form
          onSubmit={(event) => event.preventDefault()}
          className="flex flex-col gap-4"
        >
          <label className="flex flex-col gap-1 text-sm">
            Full name
            <input
              type="text"
              required
              className="rounded-md border border-black/15 px-3 py-2"
            />
          </label>
          <label className="flex flex-col gap-1 text-sm">
            Email
            <input
              type="email"
              required
              className="rounded-md border border-black/15 px-3 py-2"
            />
          </label>
          <label className="flex flex-col gap-1 text-sm">
            Shipping address
            <textarea
              required
              rows={3}
              className="rounded-md border border-black/15 px-3 py-2"
            />
          </label>

          <button
            type="submit"
            className="mt-4 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background hover:opacity-90"
          >
            Continue to payment
          </button>
          <p className="text-xs opacity-60">
            Payment processing is not connected yet — this is a placeholder checkout flow.
          </p>
        </form>
      </div>

      <div>
        <h2 className="mb-6 text-lg font-semibold">Order summary</h2>
        <ul className="divide-y divide-black/10">
          {items.map((item) => (
            <li key={item.slug} className="flex items-center justify-between py-3 text-sm">
              <span>
                {item.name} &times; {item.quantity}
              </span>
              <span>{formatPrice(item.price * item.quantity, "ZAR")}</span>
            </li>
          ))}
        </ul>
        <div className="mt-4 flex items-center justify-between border-t border-black/10 pt-4 font-semibold">
          <span>Total</span>
          <span>{formatPrice(totalPrice, "ZAR")}</span>
        </div>
      </div>
    </section>
  );
}
