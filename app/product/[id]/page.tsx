"use client";

import { useEffect, useState } from "react";
import { useProductsStore } from "../../../lib/store/products";
import { mockProducts } from "../../../lib/mock/products";
import { formatPrice } from "../../../lib/utils/format";
import { Carousel } from "../../../components/ui/carousel";
import { ProductTile } from "../../../components/toys/ProductTile";
import { useCartStore } from "../../../lib/store/cart";
import { Button } from "../../../components/ui/button";
import { Badge } from "../../../components/ui/badge";
import { useRouter, useParams } from "next/navigation";

type ProductPageParams = {
  id: string;
};

export default function ProductPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [justAdded, setJustAdded] = useState(false);
  const addItem = useCartStore((state) => state.addItem);
  const router = useRouter();
  const params = useParams<ProductPageParams>();
  const productId = params.id;
  const productsFromStore = useProductsStore((state) => state.products);
  const products =
    productsFromStore.length > 0 ? productsFromStore : mockProducts;

  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      setIsLoading(false);
    }, 450);
    return () => window.clearTimeout(timeoutId);
  }, []);

  const product = products.find((item) => item.id === productId);

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

  const related = products.filter(
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
    <div className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary-soft via-accent-purple/10 to-secondary-soft" />
      <div className="relative mx-auto max-w-6xl px-6 py-10">
        <div className="mb-8 flex flex-col gap-4">
          <button
            type="button"
            onClick={() => router.push("/shop")}
            className="inline-flex w-fit items-center gap-2 text-xs font-medium text-text-soft underline-offset-2 hover:text-text-main hover:underline"
          >
            <span aria-hidden="true">
              ←
            </span>
            <span>
              Back to shop
            </span>
          </button>
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="space-y-3">
              <Badge>
                TrendyToys • {product.category}
              </Badge>
              <h1 className="text-3xl font-semibold tracking-tight text-text-main sm:text-4xl">
                {product.name}
              </h1>
              <p className="max-w-2xl text-sm text-text-muted">
                {product.description}
              </p>
            </div>
            <div className="flex flex-col items-start gap-2 md:items-end">
              <div className="text-2xl font-semibold text-primary-strong">
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
          </div>
          <div className="flex flex-wrap gap-2 text-[11px] text-text-soft">
            <span className="rounded-full bg-background/80 px-3 py-1">
              Age {product.ageRange}
            </span>
            <span className="rounded-full bg-background/80 px-3 py-1">
              Category: {product.category}
            </span>
            <span className="rounded-full bg-background/80 px-3 py-1">
              Demo experience • No real checkout
            </span>
          </div>
        </div>

        <div className="grid items-start gap-8 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]">
          <div className="rounded-2xl bg-surface shadow-lg shadow-primary/15">
            <div className="relative aspect-square overflow-hidden rounded-2xl bg-surface">
              <div className="absolute left-4 top-4 rounded-full bg-background/80 px-3 py-1 text-[11px] font-medium text-text-soft">
                Demo photo
              </div>
              <img
                src={product.imageUrl}
                alt={product.name}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
          <div className="rounded-2xl bg-background/80 p-6 shadow-sm backdrop-blur">
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
                  <div className="flex flex-wrap items-center gap-3">
                    <button
                      type="button"
                      onClick={() =>
                        router.push(
                          `/shop?category=${encodeURIComponent(product.category)}`
                        )
                      }
                      className="rounded-full bg-surface px-3 py-1 text-[11px] font-medium text-text-soft underline-offset-2 hover:text-text-main hover:underline"
                    >
                      View more in {product.category}
                    </button>
                  </div>
                  <div className="mt-2 text-sm text-text-muted">
                    Carefully curated for modern playrooms and colorful kids&apos;
                    spaces. This demo product shows how your real toy details
                    could look.
                  </div>
                  <div className="mt-4">
                    <p className="mb-2 text-sm font-semibold text-text-main">
                      Why kids love this
                    </p>
                    <ul className="list-disc space-y-1 pl-5 text-sm text-text-muted">
                      <li>
                        Bright, modern colors that feel right at home in trendy
                        spaces.
                      </li>
                      <li>Soft edges and playful shapes for everyday adventures.</li>
                      <li>
                        Makes playtime, photos, and room styling feel a little more
                        magical.
                      </li>
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
    </div>
  );
}
