import Link from "next/link";

// [PLACEHOLDER — REPLACE] with the store's real WhatsApp number
const WHATSAPP_LINK = "https://wa.me/27000000000";

export default function Footer() {
  return (
    <footer className="border-t border-gold/15 bg-background">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 text-sm sm:grid-cols-4">
        <div>
          <p className="font-serif text-base font-semibold tracking-wide">
            STERLING <span className="text-gold">&amp;</span> OAK
          </p>
          <p className="mt-3 max-w-[220px] text-muted">
            Timeless watches, built to last. Placeholder copy — final brand story pending.
          </p>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.08em] text-gold">Shop</p>
          <ul className="mt-4 space-y-2">
            <li>
              <Link href="/shop" className="text-muted hover:text-gold">
                Collection
              </Link>
            </li>
            <li>
              <Link href="/#featured" className="text-muted hover:text-gold">
                Featured Pieces
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.08em] text-gold">Company</p>
          <ul className="mt-4 space-y-2">
            <li>
              <Link href="/about" className="text-muted hover:text-gold">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/#reviews" className="text-muted hover:text-gold">
                Reviews
              </Link>
            </li>
            <li>
              <Link href="/faq" className="text-muted hover:text-gold">
                FAQ
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.08em] text-gold">Contact</p>
          <ul className="mt-4 space-y-2">
            <li>
              <a href="mailto:hello@sterlingandoak.com" className="text-muted hover:text-gold">
                hello@sterlingandoak.com
              </a>
            </li>
            <li>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-gold"
              >
                WhatsApp us
              </a>
            </li>
            <li>
              <Link href="/contact" className="text-muted hover:text-gold">
                Contact Form
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gold/10">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-2 px-6 py-6 text-xs text-muted">
          <span>&copy; {new Date().getFullYear()} Sterling &amp; Oak. All rights reserved.</span>
          <span>Design by Fortitudo Studio</span>
        </div>
      </div>
    </footer>
  );
}
