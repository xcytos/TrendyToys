"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { useProductsStore } from "../../../../../lib/store/products";
import type {
  ToyAvailability,
  ToyStatus
} from "../../../../../lib/mock/products";
import { Input } from "../../../../../components/ui/input";
import { Button } from "../../../../../components/ui/button";

type EditPageProps = {
  params: {
    id: string;
  };
};

export default function AdminEditProductPage(props: EditPageProps) {
  const router = useRouter();
  const product = useProductsStore((state) =>
    state.products.find((item) => item.id === props.params.id)
  );
  const updateProduct = useProductsStore((state) => state.updateProduct);
  const [saving, setSaving] = useState(false);

  if (!product) {
    return (
      <div className="mx-auto max-w-3xl px-6 py-10">
        <h1 className="mb-2 text-2xl font-semibold">
          Product not found
        </h1>
        <p className="text-sm text-text-muted">
          This demo editor works only for products that exist in the in-memory
          catalog.
        </p>
      </div>
    );
  }

  const [draft, setDraft] = useState({
    name: product.name,
    price: String(product.price),
    category: product.category,
    ageRange: product.ageRange,
    description: product.description,
    imageUrl: product.imageUrl,
    status: product.status as ToyStatus,
    availability: product.availability as ToyAvailability,
    featured: product.featured
  });

  const handleSave = () => {
    setSaving(true);
    const parsedPrice = Number(draft.price || 0);
    updateProduct(product.id, {
      name: draft.name,
      price: parsedPrice,
      category: draft.category,
      ageRange: draft.ageRange,
      description: draft.description,
      imageUrl: draft.imageUrl,
      status: draft.status,
      availability: draft.availability,
      featured: draft.featured
    });
    window.setTimeout(() => {
      router.push("/admin/products");
    }, 300);
  };

  return (
    <div className="mx-auto max-w-3xl px-6 py-10">
      <h1 className="mb-4 text-3xl font-semibold">
        Edit product
      </h1>
      <p className="mb-6 text-sm text-text-muted">
        Changes are applied to the in-memory demo catalog and reflected across
        the public site immediately.
      </p>
      <div className="space-y-4 text-sm">
        <div className="space-y-1">
          <label className="font-medium text-text-main">
            Name
          </label>
          <Input
            value={draft.name}
            onChange={(event) =>
              setDraft((prev) => ({ ...prev, name: event.target.value }))
            }
          />
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="space-y-1">
            <label className="font-medium text-text-main">
              Price
            </label>
            <Input
              type="number"
              value={draft.price}
              onChange={(event) =>
                setDraft((prev) => ({ ...prev, price: event.target.value }))
              }
            />
          </div>
          <div className="space-y-1">
            <label className="font-medium text-text-main">
              Age range
            </label>
            <Input
              value={draft.ageRange}
              onChange={(event) =>
                setDraft((prev) => ({ ...prev, ageRange: event.target.value }))
              }
            />
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="space-y-1">
            <label className="font-medium text-text-main">
              Category
            </label>
            <Input
              value={draft.category}
              onChange={(event) =>
                setDraft((prev) => ({ ...prev, category: event.target.value }))
              }
            />
          </div>
          <div className="space-y-1">
            <label className="font-medium text-text-main">
              Image URL
            </label>
            <Input
              value={draft.imageUrl}
              onChange={(event) =>
                setDraft((prev) => ({ ...prev, imageUrl: event.target.value }))
              }
            />
          </div>
        </div>
        <div className="space-y-1">
          <label className="font-medium text-text-main">
            Description
          </label>
          <textarea
            rows={4}
            className="w-full rounded-md border border-border-subtle bg-surface px-3 py-2 text-sm text-text-main outline-none ring-offset-background transition focus:border-border-strong focus:ring-2 focus:ring-focus-ring"
            value={draft.description}
            onChange={(event) =>
              setDraft((prev) => ({
                ...prev,
                description: event.target.value
              }))
            }
          />
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          <div className="space-y-1">
            <label className="font-medium text-text-main">
              Status
            </label>
            <select
              className="h-10 w-full rounded-md border border-border-subtle bg-surface px-3 text-xs text-text-main outline-none ring-offset-background transition focus:border-border-strong focus:ring-2 focus:ring-focus-ring"
              value={draft.status}
              onChange={(event) =>
                setDraft((prev) => ({
                  ...prev,
                  status: event.target.value as ToyStatus
                }))
              }
            >
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>
          </div>
          <div className="space-y-1">
            <label className="font-medium text-text-main">
              Availability
            </label>
            <select
              className="h-10 w-full rounded-md border border-border-subtle bg-surface px-3 text-xs text-text-main outline-none ring-offset-background transition focus:border-border-strong focus:ring-2 focus:ring-focus-ring"
              value={draft.availability}
              onChange={(event) =>
                setDraft((prev) => ({
                  ...prev,
                  availability: event.target.value as ToyAvailability
                }))
              }
            >
              <option value="inStock">In stock</option>
              <option value="outOfStock">Out of stock</option>
            </select>
          </div>
          <div className="flex items-end gap-2">
            <button
              type="button"
              className={`flex h-10 items-center justify-center rounded-md border px-3 text-xs font-medium ${
                draft.featured
                  ? "border-primary bg-primary-soft text-text-main"
                  : "border-border-subtle bg-surface text-text-muted"
              }`}
              onClick={() =>
                setDraft((prev) => ({ ...prev, featured: !prev.featured }))
              }
            >
              {draft.featured ? "Featured" : "Mark as featured"}
            </button>
          </div>
        </div>
        <div className="mt-4 flex gap-3">
          <Button type="button" onClick={handleSave} disabled={saving}>
            {saving ? "Saving…" : "Save changes (demo)"}
          </Button>
          <button
            type="button"
            className="text-xs text-text-muted underline-offset-2 hover:underline"
            onClick={() => router.push("/admin/products")}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

