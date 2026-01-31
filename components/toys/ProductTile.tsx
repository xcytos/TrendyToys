import type { ToyProduct } from "../../lib/mock/products";
import Link from "next/link";
import { Card } from "../ui/card";
import { formatPrice } from "../../lib/utils/format";
import Image from "next/image";

type ProductTileProps = {
  product: ToyProduct;
};

export function ProductTile(props: ProductTileProps) {
  const { product } = props;

  return (
    <Link href={`/product/${product.id}`} className="block">
      <Card className="flex flex-col overflow-hidden rounded-xl bg-surface shadow-sm transition-transform duration-200 hover:-translate-y-1 hover:shadow-[0_0_24px_rgba(236,72,153,0.25)]">
        <div className="relative aspect-square overflow-hidden bg-surface">
          <Image
            src={product.imageUrl}
            alt={product.name}
            fill
            className="h-full w-full object-cover"
            sizes="(min-width: 768px) 256px, 100vw"
          />
        </div>
        <div className="flex flex-1 flex-col gap-1 px-4 py-3">
          <div className="text-sm font-semibold">
            {product.name}
          </div>
          <div className="text-xs text-text-soft">
            Age {product.ageRange}
          </div>
          <div className="mt-2 text-sm font-semibold text-primary-strong">
            {formatPrice(product.price)}
          </div>
        </div>
      </Card>
    </Link>
  );
}
