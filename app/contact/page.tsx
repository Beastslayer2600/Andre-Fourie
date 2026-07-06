import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Sterling & Oak",
};

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="mb-6 text-3xl font-semibold tracking-tight">Contact</h1>
      <p className="opacity-70">
        Questions about an order or a product? Reach us at{" "}
        <a href="mailto:hello@sterlingandoak.com" className="underline">
          hello@sterlingandoak.com
        </a>
        .
      </p>
    </section>
  );
}
