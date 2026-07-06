"use client";

import Link from "next/link";
import { useCart } from "@/lib/cart-context";

const NAV_LINKS = [
  { href: "/shop", label: "Shop" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const { totalItems, openDrawer } = useCart();

  return (
    <header className="sticky top-0 z-40 border-b border-black/10 bg-background/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-lg font-semibold tracking-wide">
          Sterling &amp; Oak
        </Link>

        <nav className="hidden gap-8 text-sm font-medium sm:flex">
          {NAV_LINKS.map((link) => (
            <Link key={link.href} href={link.href} className="hover:opacity-70">
              {link.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          onClick={openDrawer}
          className="relative text-sm font-medium hover:opacity-70"
          aria-label="Open cart"
        >
          Cart
          {totalItems > 0 && (
            <span className="absolute -right-3 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-foreground text-xs text-background">
              {totalItems}
            </span>
          )}
        </button>
      </div>
    </header>
  );
}
