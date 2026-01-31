"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useCartStore } from "../../lib/store/cart";
import { cn } from "../../lib/utils/cn";

export function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const cartItems = useCartStore((state) => state.items);
  const cartCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const links = [
    { href: "/shop", label: "Shop" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" }
  ];

  const isActive = (href: string) =>
    href === "/"
      ? pathname === "/"
      : pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header className="border-b border-border-subtle bg-surface/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-xl font-semibold text-text-main">
          TrendyToys
        </Link>

        <button
          type="button"
          className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-surface-muted text-sm text-text-main shadow-sm transition hover:bg-surface md:hidden"
          onClick={() => setMobileOpen((open) => !open)}
        >
          {mobileOpen ? "✕" : "☰"}
        </button>

        <nav className="hidden items-center gap-6 text-sm font-medium text-text-muted md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "transition hover:text-text-main",
                isActive(link.href) && "text-text-main"
              )}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/cart"
            className={cn(
              "flex items-center gap-2 rounded-full bg-primary px-3 py-1 text-sm font-semibold text-slate-50 shadow-sm transition hover:bg-primary-strong",
              isActive("/cart") && "ring-2 ring-focus-ring ring-offset-2"
            )}
          >
            <span>Cart</span>
            {cartCount > 0 && (
              <span className="flex h-5 min-w-[1.25rem] items-center justify-center rounded-full bg-surface text-xs font-semibold text-primary">
                {cartCount}
              </span>
            )}
          </Link>
        </nav>
      </div>

      {mobileOpen && (
        <div className="border-t border-border-subtle bg-surface px-6 py-3 text-sm text-text-muted md:hidden">
          <div className="flex flex-col gap-3">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "rounded-md px-1 py-1 transition hover:bg-surface-muted hover:text-text-main",
                  isActive(link.href) && "bg-surface-muted text-text-main"
                )}
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/cart"
              className="flex items-center justify-between rounded-md bg-primary px-3 py-2 text-sm font-semibold text-slate-50 shadow-sm transition hover:bg-primary-strong"
              onClick={() => setMobileOpen(false)}
            >
              <span>Cart</span>
              {cartCount > 0 && (
                <span className="flex h-5 min-w-[1.25rem] items-center justify-center rounded-full bg-surface text-xs font-semibold text-primary">
                  {cartCount}
                </span>
              )}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
