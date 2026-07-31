"use client";

import Link from "next/link";
import { useCart } from "@/lib/cart-context";
import { WHATSAPP_LINK } from "@/lib/site-config";

const NAV_LINKS = [
  { href: "/shop", label: "Shop" },
  { href: "/about", label: "About" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];


export default function Header() {
  const { totalItems, openDrawer } = useCart();

  return (
    <header className="sticky top-0 z-40 border-b border-gold/15 bg-background/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <Link
          href="/"
          className="font-serif text-lg font-semibold tracking-[0.08em] text-foreground"
        >
          STERLING <span className="text-gold">&amp;</span> OAK
        </Link>

        <nav className="hidden gap-8 text-sm tracking-wide sm:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-foreground/85 transition-colors hover:text-gold"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-5">
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-sm border border-gold px-4 py-2 text-xs uppercase tracking-wider text-gold transition-colors hover:bg-gold hover:text-background sm:inline-block"
          >
            Chat on WhatsApp
          </a>

          <button
            type="button"
            onClick={openDrawer}
            className="relative text-sm font-medium text-foreground/90 hover:text-gold"
            aria-label="Open cart"
          >
            Cart
            {totalItems > 0 && (
              <span className="absolute -right-3 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-gold text-xs text-background">
                {totalItems}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
