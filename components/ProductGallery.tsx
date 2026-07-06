"use client";

import Image from "next/image";
import { useState } from "react";

export default function ProductGallery({
  images,
  name,
}: {
  images: string[];
  name: string;
}) {
  const [selected, setSelected] = useState(0);

  return (
    <div className="flex flex-col gap-4">
      <div className="overflow-hidden rounded-lg bg-black/5">
        <Image
          src={images[selected]}
          alt={`${name} — view ${selected + 1} of ${images.length}`}
          width={800}
          height={800}
          className="aspect-square w-full object-cover"
          priority
        />
      </div>

      {images.length > 1 && (
        <div className="grid grid-cols-4 gap-4">
          {images.map((src, index) => (
            <button
              key={src}
              type="button"
              onClick={() => setSelected(index)}
              aria-label={`Show view ${index + 1} of ${name}`}
              aria-current={selected === index}
              className={`overflow-hidden rounded-md bg-black/5 transition-opacity ${
                selected === index
                  ? "ring-2 ring-foreground"
                  : "opacity-70 hover:opacity-100"
              }`}
            >
              <Image
                src={src}
                alt=""
                width={200}
                height={200}
                className="aspect-square w-full object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
