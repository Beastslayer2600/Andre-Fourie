import { notFound } from "next/navigation";
import AddToCartButton from "@/components/AddToCartButton";
import ProductCard from "@/components/ProductCard";
import ProductGallery from "@/components/ProductGallery";
import {
  formatPrice,
  getAllProductSlugs,
  getProductBySlug,
  getRelatedProducts,
} from "@/lib/products";

export function generateStaticParams() {
  return getAllProductSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const product = getProductBySlug(params.slug);
  if (!product) return { title: "Sterling & Oak" };
  return {
    title: `${product.brand} ${product.name} | Sterling & Oak`,
    description: product.description,
  };
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = getProductBySlug(params.slug);

  if (!product) {
    notFound();
  }

  const relatedProducts = getRelatedProducts(product.slug);
  const isEnquiry = product.price === 0;

  return (
    <>
      <section className="mx-auto grid max-w-6xl gap-10 px-6 py-16 sm:grid-cols-2">
        <ProductGallery images={product.images} name={product.name} />

        <div className="flex flex-col gap-6">
          <div>
            <p className="text-sm uppercase tracking-wide text-gold-dim">
              {product.brand} · {product.category}
            </p>
            <h1 className="mt-1 font-serif text-3xl font-semibold tracking-tight">
              {product.name}
            </h1>
            <p className="mt-2 text-xl text-gold">
              {isEnquiry ? "Price on request" : formatPrice(product.price, product.currency)}
            </p>
          </div>

          <p className="text-muted">{product.description}</p>

          <dl className="grid grid-cols-2 gap-4 border-y border-gold/15 py-6 text-sm">
            <div>
              <dt className="text-xs uppercase tracking-wide text-gold-dim">Movement</dt>
              <dd className="mt-1 font-medium">{product.movement}</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-wide text-gold-dim">Case size</dt>
              <dd className="mt-1 font-medium">{product.caseSize}</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-wide text-gold-dim">Strap</dt>
              <dd className="mt-1 font-medium">{product.strap}</dd>
            </div>
          </dl>

          <AddToCartButton product={product} />

          <p className="flex items-center gap-2 text-xs text-muted">
            {isEnquiry
              ? "✓ Authenticity guaranteed · ✓ Honest condition reports · ✓ Secure delivery"
              : "✓ Backed by our quality guarantee · ✓ Secure payment · ✓ Return policy applies"}
          </p>
        </div>
      </section>

      {relatedProducts.length > 0 && (
        <section className="mx-auto max-w-6xl px-6 pb-24">
          <h2 className="mb-8 font-serif text-2xl font-semibold tracking-tight">
            You may also like
          </h2>
          <div className="grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-4">
            {relatedProducts.map((related) => (
              <ProductCard key={related.id} product={related} />
            ))}
          </div>
        </section>
      )}
    </>
  );
}
