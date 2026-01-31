"use client";

import { useState } from "react";
import { useCartStore } from "../../lib/store/cart";
import { formatPrice } from "../../lib/utils/format";
import { Header } from "../../components/layout/header";
import { Button } from "../../components/ui/button";
import { Modal } from "../../components/ui/modal";

export default function CartPage() {
  const items = useCartStore((state) => state.items);
  const updateQuantity = useCartStore((state) => state.updateQuantity);
  const removeItem = useCartStore((state) => state.removeItem);
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const [removingId, setRemovingId] = useState<string | null>(null);
  const [orderConfirmed, setOrderConfirmed] = useState(false);

  const subtotal = items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const shipping = items.length > 0 ? 4.99 : 0;
  const total = subtotal + shipping;

  return (
    <>
      <Header />
      <div className="mx-auto max-w-4xl px-6 py-10">
        <h1 className="mb-6 text-3xl font-semibold">
          Cart
        </h1>

        {items.length === 0 ? (
          <p className="text-sm text-text-muted">
            Your cart is empty. Add toys from the Shop or Home page.
          </p>
        ) : (
          <div className="grid gap-8 md:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]">
            <div className="space-y-4">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between rounded-lg bg-surface px-4 py-3 shadow-sm transition-all duration-200"
                >
                  <div>
                    <div className="text-sm font-semibold">
                      {item.name}
                    </div>
                    <div className="text-xs text-text-soft">
                      Age {item.ageRange}
                    </div>
                    <button
                      type="button"
                      className="mt-1 text-xs text-primary-strong"
                      onClick={() => {
                        setRemovingId(item.id);
                        window.setTimeout(() => {
                          removeItem(item.id);
                          setRemovingId(null);
                        }, 150);
                      }}
                    >
                      {removingId === item.id ? "Removing…" : "Remove"}
                    </button>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        className="h-8 w-8 rounded-full bg-surface-muted text-sm"
                        onClick={() =>
                          updateQuantity(
                            item.id,
                            Math.max(1, item.quantity - 1)
                          )
                        }
                      >
                        −
                      </button>
                      <span className="w-8 text-center text-sm">
                        {item.quantity}
                      </span>
                      <button
                        type="button"
                        className="h-8 w-8 rounded-full bg-surface-muted text-sm"
                        onClick={() =>
                          updateQuantity(item.id, item.quantity + 1)
                        }
                      >
                        +
                      </button>
                    </div>
                    <div className="text-sm font-semibold text-primary-strong">
                      {formatPrice(item.price * item.quantity)}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="rounded-lg bg-surface px-4 py-4 shadow-sm">
              <h2 className="mb-4 text-base font-semibold text-text-main">
                Summary
              </h2>
              <div className="space-y-2 text-sm text-text-muted">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>{formatPrice(subtotal)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping (demo)</span>
                  <span>{formatPrice(shipping)}</span>
                </div>
                <div className="mt-3 flex justify-between text-sm font-semibold text-text-main">
                  <span>Total</span>
                  <span>{formatPrice(total)}</span>
                </div>
              </div>
              <Button
                className="mt-4 w-full"
                onClick={() => setCheckoutOpen(true)}
              >
                Proceed to demo checkout
              </Button>
            </div>
          </div>
        )}

        <Modal
          open={checkoutOpen}
          onClose={() => {
            setCheckoutOpen(false);
            setOrderConfirmed(false);
          }}
        >
          <h2 className="mb-3 text-lg font-semibold text-text-main">
            Demo checkout
          </h2>
          <p className="mb-4 text-sm text-text-muted">
            This is a high-fidelity demo experience. No real payments are
            processed. Use this screen to walk through the flow with investors or
            stakeholders.
          </p>
          {orderConfirmed ? (
            <div className="space-y-3">
              <div className="rounded-md bg-primary-soft px-3 py-2 text-xs text-text-main">
                Order confirmed (demo only). In a real build, you would now see a
                receipt and email confirmation.
              </div>
              <Button
                className="w-full"
                onClick={() => {
                  setCheckoutOpen(false);
                  setOrderConfirmed(false);
                }}
              >
                Close
              </Button>
            </div>
          ) : (
            <div className="space-y-3">
              <Button
                className="w-full"
                onClick={() => setOrderConfirmed(true)}
              >
                Confirm demo order
              </Button>
              <button
                type="button"
                className="w-full text-xs text-text-muted underline-offset-2 hover:underline"
                onClick={() => {
                  setCheckoutOpen(false);
                  setOrderConfirmed(false);
                }}
              >
                Cancel
              </button>
            </div>
          )}
        </Modal>
      </div>
    </>
  );
}
