"use client";

import { useEffect, useMemo, useState } from "react";
import { mockProducts } from "../../lib/mock/products";
import { mockCategories } from "../../lib/mock/categories";
import { ProductTile } from "../../components/toys/ProductTile";
import { Select } from "../../components/ui/select";
import { Header } from "../../components/layout/header";

type Filters = {
  category: string;
  age: string;
  sort: string;
  inStockOnly: boolean;
  featuredOnly: boolean;
};

const initialFilters: Filters = {
  category: "all",
  age: "all",
  sort: "popular",
  inStockOnly: false,
  featuredOnly: false
};

function normalizeAgeValue(value: string) {
  return value.replace(/\s/g, "").replace("–", "-");
}

function parseAgeRange(value: string) {
  const normalized = normalizeAgeValue(value);
  if (!normalized) {
    return null;
  }
  if (normalized.endsWith("+")) {
    const base = Number(normalized.slice(0, -1));
    if (Number.isNaN(base)) {
      return null;
    }
    return { min: base, max: Infinity };
  }
  const parts = normalized.split("-");
  if (parts.length === 0) {
    return null;
  }
  const min = Number(parts[0]);
  const max = Number(parts[1] ?? parts[0]);
  if (Number.isNaN(min) || Number.isNaN(max)) {
    return null;
  }
  return { min, max };
}

function ageMatchesFilter(productAge: string, filterAge: string) {
  const productRange = parseAgeRange(productAge);
  const filterRange = parseAgeRange(filterAge);
  if (!productRange || !filterRange) {
    return true;
  }
  return (
    productRange.min <= filterRange.max && productRange.max >= filterRange.min
  );
}

export default function ShopPage() {
  const [filters, setFilters] = useState<Filters>(initialFilters);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!isLoading) return;
    const timeoutId = window.setTimeout(() => {
      setIsLoading(false);
    }, 400);
    return () => window.clearTimeout(timeoutId);
  }, [isLoading]);

  const products = useMemo(() => {
    let list = mockProducts.filter(
      (product) => product.status === "active"
    );

    if (filters.category !== "all") {
      list = list.filter((p) => p.category === filters.category);
    }

    if (filters.age !== "all") {
      list = list.filter((p) => ageMatchesFilter(p.ageRange, filters.age));
    }

    if (filters.inStockOnly) {
      list = list.filter((p) => p.availability === "inStock");
    }

    if (filters.featuredOnly) {
      list = list.filter((p) => p.featured);
    }

    if (filters.sort === "price-low") {
      list = list.sort((a, b) => a.price - b.price);
    } else if (filters.sort === "price-high") {
      list = list.sort((a, b) => b.price - a.price);
    }

    return list;
  }, [filters]);

  const activeFiltersCount =
    (filters.category !== "all" ? 1 : 0) +
    (filters.age !== "all" ? 1 : 0) +
    (filters.inStockOnly ? 1 : 0) +
    (filters.featuredOnly ? 1 : 0);

  const handleChange = (next: Partial<Filters>) => {
    setFilters((prev) => ({ ...prev, ...next }));
    setIsLoading(true);
  };

  const handleReset = () => {
    setFilters(initialFilters);
    setIsLoading(true);
  };

  return (
    <>
      <Header />
      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <h1 className="mb-2 text-3xl font-semibold">
              Shop Toys
            </h1>
            <p className="text-sm text-text-muted">
              Filter by category, age, and price. All data is demo-only.
            </p>
          </div>
          <div className="flex flex-col gap-3 md:flex-row md:items-end">
            <Select
              value={filters.category}
              onChange={(event) =>
                handleChange({
                  category: event.target.value
                })
              }
            >
              <option value="all">
                All categories
              </option>
              {mockCategories.map((category) => (
                <option key={category.id} value={category.name}>
                  {category.name}
                </option>
              ))}
            </Select>
            <Select
              value={filters.age}
              onChange={(event) =>
                handleChange({
                  age: event.target.value
                })
              }
            >
              <option value="all">
                All ages
              </option>
              <option value="0–3">
                0–3
              </option>
              <option value="4–6">
                4–6
              </option>
              <option value="7–10">
                7–10
              </option>
              <option value="10+">
                10+
              </option>
            </Select>
            <Select
              value={filters.sort}
              onChange={(event) =>
                handleChange({
                  sort: event.target.value
                })
              }
            >
              <option value="popular">
                Popular
              </option>
              <option value="price-low">
                Price: Low to high
              </option>
              <option value="price-high">
                Price: High to low
              </option>
            </Select>
            <div className="flex items-center gap-3 text-xs text-text-muted">
              {activeFiltersCount > 0 && (
                <span className="rounded-full bg-surface-muted px-3 py-1 text-[11px] font-medium text-text-main">
                  {activeFiltersCount} filter
                  {activeFiltersCount > 1 ? "s" : ""} applied
                </span>
              )}
              {(activeFiltersCount > 0 || filters.sort !== "popular") && (
                <button
                  type="button"
                  onClick={handleReset}
                  className="text-xs font-medium text-primary-strong underline-offset-2 hover:underline"
                >
                  Reset
                </button>
              )}
            </div>
          </div>
        </div>

        <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() =>
                handleChange({
                  inStockOnly: !filters.inStockOnly
                })
              }
              className={`rounded-full border px-3 py-1 text-xs font-medium transition-colors ${
                filters.inStockOnly
                  ? "border-primary bg-primary-soft text-text-main"
                  : "border-surface-muted bg-surface text-text-muted hover:border-primary-soft"
              }`}
            >
              In-stock only
            </button>
            <button
              type="button"
              onClick={() =>
                handleChange({
                  featuredOnly: !filters.featuredOnly
                })
              }
              className={`rounded-full border px-3 py-1 text-xs font-medium transition-colors ${
                filters.featuredOnly
                  ? "border-secondary bg-secondary-soft text-text-main"
                  : "border-surface-muted bg-surface text-text-muted hover:border-secondary-soft"
              }`}
            >
              Featured picks
            </button>
          </div>
          <div className="text-xs text-text-muted">
            Showing{" "}
            <span className="font-semibold text-text-main">
              {products.length}
            </span>{" "}
            toy{products.length === 1 ? "" : "s"}
          </div>
        </div>

        {isLoading ? (
          <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {Array.from({ length: 8 }).map((_, index) => (
              <div
                key={index}
                className="flex flex-col overflow-hidden rounded-xl bg-surface shadow-sm"
              >
                <div className="aspect-square animate-pulse bg-surface-muted" />
                <div className="space-y-2 px-4 py-3">
                  <div className="h-3 w-2/3 animate-pulse rounded bg-surface-muted" />
                  <div className="h-3 w-1/3 animate-pulse rounded bg-surface-muted" />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {products.map((product) => (
              <ProductTile key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </>
  );
}
