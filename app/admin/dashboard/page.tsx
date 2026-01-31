"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useProductsStore } from "../../../lib/store/products";
import { mockProducts } from "../../../lib/mock/products";
import { Button } from "../../../components/ui/button";

export default function AdminDashboardPage() {
  const products = useProductsStore((state) => state.products);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timeoutId = window.setTimeout(() => setMounted(true), 80);
    return () => window.clearTimeout(timeoutId);
  }, []);

  const totalProducts = products.length;
  const categories = new Set(products.map((product) => product.category));
  const mockOrders = mockProducts.length * 3;

  const recentActivity = products.slice(-3).map((product) => ({
    id: product.id,
    label: product.name
  }));

  return (
    <div className="mx-auto max-w-6xl px-6 py-10">
      <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <h1 className="text-3xl font-semibold">
            Admin Dashboard
          </h1>
          <p className="mt-2 text-sm text-text-muted">
            Quick overview of your demo catalog and shortcuts to key admin pages.
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <Link href="/admin/products">
            <Button type="button" size="sm">
              Manage products
            </Button>
          </Link>
          <Link href="/admin/products/new">
            <Button type="button" size="sm" variant="outline">
              Add product
            </Button>
          </Link>
          <Link href="/admin/theme">
            <Button type="button" size="sm" variant="ghost">
              Theme controls
            </Button>
          </Link>
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-[minmax(0,2fr)_minmax(0,1.2fr)]">
        <div className="grid gap-4 md:grid-cols-3">
          <div
            className={`rounded-lg bg-surface px-4 py-4 shadow-sm transition-all duration-500 ${
              mounted ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
            }`}
          >
            <div className="text-xs uppercase text-text-soft">
              Products
            </div>
            <div className="mt-2 text-2xl font-semibold">
              {totalProducts}
            </div>
          </div>
          <div
            className={`rounded-lg bg-surface px-4 py-4 shadow-sm transition-all duration-500 delay-100 ${
              mounted ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
            }`}
          >
            <div className="text-xs uppercase text-text-soft">
              Categories
            </div>
            <div className="mt-2 text-2xl font-semibold">
              {categories.size}
            </div>
          </div>
          <div
            className={`rounded-lg bg-surface px-4 py-4 shadow-sm transition-all duration-500 delay-150 ${
              mounted ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
            }`}
          >
            <div className="text-xs uppercase text-text-soft">
              Mock orders
            </div>
            <div className="mt-2 text-2xl font-semibold">
              {mockOrders}
            </div>
          </div>
        </div>
        <div className="rounded-lg bg-surface px-4 py-4 shadow-sm">
          <div className="mb-2 flex items-center justify-between">
            <h2 className="text-sm font-semibold text-text-main">
              Recent activity
            </h2>
            <span className="text-[11px] uppercase text-text-soft">
              Demo feed
            </span>
          </div>
          {recentActivity.length === 0 ? (
            <p className="text-xs text-text-muted">
              No products in the catalog yet. Add a product to see it appear
              here.
            </p>
          ) : (
            <ul className="space-y-2 text-xs text-text-muted">
              {recentActivity
                .slice()
                .reverse()
                .map((item) => (
                  <li
                    key={item.id}
                    className="flex items-center justify-between rounded-md bg-surface-muted px-3 py-2"
                  >
                    <span>{item.label}</span>
                    <span className="text-[11px] text-text-soft">
                      Updated (demo)
                    </span>
                  </li>
                ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
