import Image from "next/image";
import { notFound } from "next/navigation";
import AddToCartButton from "@/components/AddToCartButton";
import { formatPrice, getAllProductSlugs, getProductBySlug } from "@/lib/products";

export function generateStaticParams() {
  return getAllProductSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const product = getProductBySlug(params.slug);
  return { title: product ? `${product.name} | Sterling & Oak` : "Sterling & Oak" };
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = getProductBySlug(params.slug);

  if (!product) {
    notFound();
  }

  return (
    <section className="mx-auto grid max-w-6xl gap-10 px-6 py-16 sm:grid-cols-2">
      <Image
        src={product.image}
        alt={product.name}
        width={600}
        height={600}
        className="aspect-square w-full rounded-lg bg-black/5 object-cover"
        priority
      />

      <div className="flex flex-col gap-6">
        <div>
          <p className="text-sm uppercase tracking-wide opacity-60">{product.category}</p>
          <h1 className="mt-1 text-3xl font-semibold tracking-tight">{product.name}</h1>
          <p className="mt-2 text-xl">{formatPrice(product.price, product.currency)}</p>
        </div>

        <p className="opacity-70">{product.description}</p>

        <dl className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <dt className="opacity-60">Movement</dt>
            <dd className="font-medium">{product.movement}</dd>
          </div>
          <div>
            <dt className="opacity-60">Case size</dt>
            <dd className="font-medium">{product.caseSize}</dd>
          </div>
          <div>
            <dt className="opacity-60">Strap</dt>
            <dd className="font-medium">{product.strap}</dd>
          </div>
        </dl>

        <AddToCartButton product={product} />
      </div>
    </section>
  );
}
