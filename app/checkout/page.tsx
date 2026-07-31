"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { useCart } from "@/lib/cart-context";
import { formatPrice } from "@/lib/products";

export default function CheckoutPage() {
  const { items, totalPrice, clearCart } = useCart();
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    // Placeholder flow only — no payment processor connected yet.
    setSubmitted(true);
    clearCart();
  }

  if (submitted) {
    return (
      <section className="mx-auto max-w-xl px-6 py-24 text-center">
        <p className="mb-3 text-xs uppercase tracking-[0.25em] text-gold">Order Received</p>
        <h1 className="mb-4 font-serif text-3xl font-semibold tracking-tight">
          Thank you for your order
        </h1>
        <p className="text-muted">
          This is a placeholder confirmation — no payment has actually been processed and no
          order has been created. Once a payment processor is connected, this step will confirm
          the real order and send a receipt.
        </p>
        <Link
          href="/shop"
          className="mt-8 inline-block rounded-sm bg-gold px-6 py-3 text-sm font-medium uppercase tracking-wide text-background hover:bg-white"
        >
          Continue shopping
        </Link>
      </section>
    );
  }

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
    <section className="mx-auto grid max-w-4xl gap-10 px-6 py-16 sm:grid-cols-2">
      <div>
        <h1 className="mb-6 font-serif text-2xl font-semibold tracking-tight">Checkout</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <label className="flex flex-col gap-1 text-sm">
            Full name
            <input
              type="text"
              required
              className="rounded-sm border border-gold/25 bg-background-alt px-3 py-2 text-foreground"
            />
          </label>
          <label className="flex flex-col gap-1 text-sm">
            Email
            <input
              type="email"
              required
              className="rounded-sm border border-gold/25 bg-background-alt px-3 py-2 text-foreground"
            />
          </label>
          <label className="flex flex-col gap-1 text-sm">
            Shipping address
            <textarea
              required
              rows={3}
              className="rounded-sm border border-gold/25 bg-background-alt px-3 py-2 text-foreground"
            />
          </label>

          <button
            type="submit"
            className="mt-4 rounded-sm bg-gold px-6 py-3 text-sm font-medium uppercase tracking-wide text-background hover:bg-white"
          >
            Continue to Payment
          </button>
          <p className="text-xs text-muted">
            Payment processing is not connected yet — this is a placeholder checkout flow.
          </p>
        </form>
      </div>

      <div>
        <h2 className="mb-6 text-lg font-semibold">Order Summary</h2>
        <ul className="divide-y divide-gold/10">
          {items.map((item) => (
            <li key={item.slug} className="flex items-center justify-between py-3 text-sm">
              <span>
                {item.name} &times; {item.quantity}
              </span>
              <span>{formatPrice(item.price * item.quantity, "ZAR")}</span>
            </li>
          ))}
        </ul>
        <div className="mt-4 flex items-center justify-between border-t border-gold/15 pt-4 font-semibold">
          <span>Total</span>
          <span className="text-gold">{formatPrice(totalPrice, "ZAR")}</span>
        </div>
      </div>
    </section>
  );
}
