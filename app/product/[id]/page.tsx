"use client";

import { useEffect, useState } from "react";
import { mockProducts } from "../../../lib/mock/products";
import { formatPrice } from "../../../lib/utils/format";
import { Carousel } from "../../../components/ui/carousel";
import { ProductTile } from "../../../components/toys/ProductTile";
import { useCartStore } from "../../../lib/store/cart";
import { Button } from "../../../components/ui/button";

type ProductPageProps = {
  params: {
    id: string;
  };
};

export default function ProductPage(props: ProductPageProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [justAdded, setJustAdded] = useState(false);
  const addItem = useCartStore((state) => state.addItem);

  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      setIsLoading(false);
    }, 450);
    return () => window.clearTimeout(timeoutId);
  }, []);

  const product = mockProducts.find((item) => item.id === props.params.id);

  if (!product) {
    return (
      <div className="mx-auto max-w-4xl px-6 py-10">
        <h1 className="mb-2 text-2xl font-semibold">
          Toy not found
        </h1>
        <p className="text-sm text-text-muted">
          This is a demo catalog. Choose a toy from the Shop page.
        </p>
      </div>
    );
  }

  const related = mockProducts.filter(
    (item) => item.id !== product.id && item.category === product.category
  );

  const handleAddToCart = () => {
    addItem(product);
    setJustAdded(true);
    window.setTimeout(() => {
      setJustAdded(false);
    }, 900);
  };

  return (
    <div className="mx-auto max-w-6xl px-6 py-10">
      <div className="grid gap-8 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]">
        <div className="rounded-xl bg-surface-muted p-8 shadow-sm">
          <div className="aspect-square overflow-hidden rounded-xl bg-surface">
            <img
              src={product.imageUrl}
              alt={product.name}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
        <div className="flex flex-col gap-4">
          {isLoading ? (
            <>
              <div className="h-7 w-1/2 animate-pulse rounded bg-surface-muted" />
              <div className="h-6 w-24 animate-pulse rounded bg-surface-muted" />
              <div className="h-4 w-32 animate-pulse rounded bg-surface-muted" />
              <div className="mt-4 space-y-2">
                <div className="h-3 w-full animate-pulse rounded bg-surface-muted" />
                <div className="h-3 w-5/6 animate-pulse rounded bg-surface-muted" />
                <div className="h-3 w-2/3 animate-pulse rounded bg-surface-muted" />
              </div>
              <div className="mt-6 h-10 w-40 animate-pulse rounded bg-surface-muted" />
            </>
          ) : (
            <>
              <h1 className="text-3xl font-semibold">
                {product.name}
              </h1>
              <div className="flex items-center gap-3">
                <div className="text-lg font-semibold text-primary-strong">
                  {formatPrice(product.price)}
                </div>
                <span
                  className={`rounded-full px-3 py-1 text-xs font-medium ${
                    product.availability === "inStock"
                      ? "bg-secondary-soft text-text-main"
                      : "bg-surface-muted text-text-soft"
                  }`}
                >
                  {product.availability === "inStock"
                    ? "In stock (demo)"
                    : "Out of stock (demo)"}
                </span>
              </div>
              <div className="text-sm text-text-muted">
                Age range: {product.ageRange}
              </div>
              <div className="mt-4 text-sm text-text-muted">
                {product.description}
              </div>
              <div className="mt-4">
                <p className="mb-2 text-sm font-semibold text-text-main">
                  Why kids love this
                </p>
                <ul className="list-disc space-y-1 pl-5 text-sm text-text-muted">
                  <li>
                    Bright, modern colors inspired by the Trendy Toy House
                    theme.
                  </li>
                  <li>Designed for playful, safe exploration.</li>
                  <li>Makes the entire browsing experience feel magical.</li>
                </ul>
              </div>
              <div className="mt-6 flex flex-col gap-2 sm:flex-row sm:items-center">
                <Button
                  type="button"
                  onClick={handleAddToCart}
                  className="w-full sm:w-auto"
                >
                  {justAdded ? "Added ✓" : "Add to cart"}
                </Button>
                <span className="text-xs text-text-muted">
                  Demo only — adds to the in-browser cart, no real checkout.
                </span>
              </div>
            </>
          )}
        </div>
      </div>

      {related.length > 0 && (
        <div className="mt-12">
          <h2 className="mb-4 text-2xl font-semibold text-text-main">
            Related toys
          </h2>
          <Carousel>
            {related.map((item) => (
              <div key={item.id} className="w-64">
                <ProductTile product={item} />
              </div>
            ))}
          </Carousel>
        </div>
      )}
    </div>
  );
}
