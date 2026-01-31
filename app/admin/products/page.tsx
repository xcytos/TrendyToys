"use client";

import Link from "next/link";
import { useState } from "react";
import { useProductsStore } from "../../../lib/store/products";
import { AdminTable } from "../../../components/ui/admin-table";
import { Button } from "../../../components/ui/button";
import { Modal } from "../../../components/ui/modal";
import { Input } from "../../../components/ui/input";

export default function AdminProductsPage() {
  const products = useProductsStore((state) => state.products);
  const updateProduct = useProductsStore((state) => state.updateProduct);
  const deleteProduct = useProductsStore((state) => state.deleteProduct);

  const [modalOpen, setModalOpen] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [draft, setDraft] = useState({
    name: "",
    price: "",
    category: "",
    ageRange: "",
    imageUrl: ""
  });
  const [feedback, setFeedback] = useState("");

  const openForEdit = (id: string) => {
    const product = products.find((item) => item.id === id);
    if (!product) return;
    setEditingId(id);
    setDraft({
      name: product.name,
      price: String(product.price),
      category: product.category,
      ageRange: product.ageRange,
      imageUrl: product.imageUrl
    });
    setModalOpen(true);
  };

  const saveDraft = () => {
    const parsedPrice = Number(draft.price || 0);
    if (!editingId) return;
    updateProduct(editingId, {
      name: draft.name,
      price: parsedPrice,
      category: draft.category,
      ageRange: draft.ageRange,
      imageUrl: draft.imageUrl
    });
    setFeedback(
      editingId ? "Product updated (demo)." : "Product added to catalog (demo)."
    );
    setModalOpen(false);
  };

  return (
    <div className="mx-auto max-w-6xl px-6 py-10">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-3xl font-semibold">
          Products
        </h1>
        <Link href="/admin/products/new">
          <Button type="button">
            Add product
          </Button>
        </Link>
      </div>
      {feedback && (
        <div className="mb-4 rounded-md bg-primary-soft px-3 py-2 text-xs text-text-main">
          {feedback}
        </div>
      )}
      <AdminTable
        headers={[
          "Name",
          "Price",
          "Category",
          "Age",
          "Status",
          "Availability",
          "Actions"
        ]}
      >
        {products.map((product) => (
          <tr key={product.id} className="border-t border-border-subtle">
            <td className="px-4 py-3 text-sm">
              {product.name}
            </td>
            <td className="px-4 py-3 text-sm">
              ${product.price.toFixed(2)}
            </td>
            <td className="px-4 py-3 text-sm">
              {product.category}
            </td>
            <td className="px-4 py-3 text-sm">
              {product.ageRange}
            </td>
            <td className="px-4 py-3 text-sm">
              <button
                type="button"
                className={`rounded-full px-3 py-1 text-xs font-medium ${
                  product.status === "active"
                    ? "bg-primary-soft text-text-main"
                    : "bg-surface-muted text-text-soft"
                }`}
                onClick={() =>
                  updateProduct(product.id, {
                    status: product.status === "active" ? "inactive" : "active"
                  })
                }
              >
                {product.status === "active" ? "Active" : "Inactive"}
              </button>
            </td>
            <td className="px-4 py-3 text-sm">
              <button
                type="button"
                className={`rounded-full px-3 py-1 text-xs font-medium ${
                  product.availability === "inStock"
                    ? "bg-secondary-soft text-text-main"
                    : "bg-surface-muted text-text-soft"
                }`}
                onClick={() =>
                  updateProduct(product.id, {
                    availability:
                      product.availability === "inStock"
                        ? "outOfStock"
                        : "inStock"
                  })
                }
              >
                {product.availability === "inStock"
                  ? "In stock"
                  : "Out of stock"}
              </button>
            </td>
            <td className="px-4 py-3 text-sm">
              <div className="flex gap-2">
                <Link href={`/admin/products/${product.id}/edit`}>
                  <Button type="button" variant="ghost" size="sm">
                    Edit
                  </Button>
                </Link>
                <Button
                  type="button"
                  variant="destructive"
                  size="sm"
                  onClick={() => deleteProduct(product.id)}
                >
                  Delete
                </Button>
              </div>
            </td>
          </tr>
        ))}
      </AdminTable>

      <Modal open={modalOpen} onClose={() => setModalOpen(false)}>
        <h2 className="mb-4 text-lg font-semibold text-text-main">
          {editingId ? "Edit product" : "Add product"}
        </h2>
        <div className="space-y-3 text-sm">
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
              Age range
            </label>
            <Input
              value={draft.ageRange}
              onChange={(event) =>
                setDraft((prev) => ({ ...prev, ageRange: event.target.value }))
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
          <Button type="button" className="mt-2 w-full" onClick={saveDraft}>
            Save (demo)
          </Button>
        </div>
      </Modal>
    </div>
  );
}
