import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-black/10">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-10 text-sm sm:flex-row sm:items-center sm:justify-between">
        <p>&copy; {new Date().getFullYear()} Sterling &amp; Oak. All rights reserved.</p>
        <nav className="flex gap-6">
          <Link href="/shop" className="hover:opacity-70">
            Shop
          </Link>
          <Link href="/about" className="hover:opacity-70">
            About
          </Link>
          <Link href="/contact" className="hover:opacity-70">
            Contact
          </Link>
        </nav>
      </div>
    </footer>
  );
}
