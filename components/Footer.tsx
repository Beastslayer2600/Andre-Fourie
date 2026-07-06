import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-black/10">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-12 text-sm sm:grid-cols-3">
        <div>
          <p className="font-semibold">Sterling &amp; Oak</p>
          <p className="mt-2 opacity-60">Timeless watches, built to last.</p>
        </div>

        <div>
          <p className="font-semibold">Contact</p>
          <ul className="mt-2 space-y-1">
            <li>
              <a href="mailto:hello@sterlingandoak.com" className="opacity-60 hover:opacity-100">
                hello@sterlingandoak.com
              </a>
            </li>
            <li>
              {/* [PLACEHOLDER — REPLACE] with the store's real WhatsApp number */}
              <a
                href="https://wa.me/27000000000"
                target="_blank"
                rel="noopener noreferrer"
                className="opacity-60 hover:opacity-100"
              >
                WhatsApp us
              </a>
            </li>
          </ul>
        </div>

        <div>
          <p className="font-semibold">Explore</p>
          <ul className="mt-2 space-y-1">
            <li>
              <Link href="/shop" className="opacity-60 hover:opacity-100">
                Shop
              </Link>
            </li>
            <li>
              <Link href="/about" className="opacity-60 hover:opacity-100">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className="opacity-60 hover:opacity-100">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-black/10">
        <p className="mx-auto max-w-6xl px-6 py-6 text-sm opacity-60">
          &copy; {new Date().getFullYear()} Sterling &amp; Oak. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
