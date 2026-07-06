# Sterling & Oak

E-commerce storefront for Sterling & Oak, a watch brand. Built with Next.js
14 (App Router), TypeScript, and Tailwind CSS.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it.

## Structure

- `app/` — routes: home, shop (listing), shop/[slug] (product detail), cart,
  checkout, about, contact
- `components/` — shared UI (Header, Footer, ProductCard, CartDrawer,
  AddToCartButton)
- `lib/` — product data (`products.json`) and cart logic
  (`cart-context.tsx`), backed by `localStorage`. No CMS or database yet.

Checkout is currently a placeholder form; payment processing is not
connected.
