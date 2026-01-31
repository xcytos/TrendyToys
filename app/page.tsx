"use client";

import { Header } from "../components/layout/header";
import { Footer } from "../components/layout/footer";
import { Section } from "../components/layout/section";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Carousel } from "../components/ui/carousel";
import { ProductTile } from "../components/toys/ProductTile";
import { mockProducts } from "../lib/mock/products";
import { mockCategories } from "../lib/mock/categories";
import { mockTestimonials } from "../lib/mock/testimonials";
import { useThemeStore } from "../lib/store/theme";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function HomePage() {
  const trending = mockProducts.filter(
    (product) => product.featured && product.status === "active"
  );
  const pastelMode = useThemeStore((state) => state.pastelMode);
  const heroHeadline = useThemeStore((state) => state.heroHeadline);
  const heroSubheadline = useThemeStore((state) => state.heroSubheadline);
  const router = useRouter();
  const [heroVisible, setHeroVisible] = useState(false);

  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      setHeroVisible(true);
    }, 40);
    return () => window.clearTimeout(timeoutId);
  }, []);

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <Section className="relative overflow-hidden py-16">
          <div
            className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${
              pastelMode
                ? "from-primary-soft via-accent-purple/10 to-secondary-soft"
                : "from-primary via-accent-purple/20 to-secondary"
            }`}
          />
          <div
            className={`relative z-10 grid gap-10 text-center transition-all duration-500 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] md:text-left ${
              heroVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-4 opacity-0"
            }`}
          >
            <div className="flex flex-col items-center gap-8 md:items-start">
              <Badge>
                Trendy • Modern • Playful
              </Badge>
              <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-text-main sm:text-5xl">
                {heroHeadline}
              </h1>
              <p className="max-w-2xl text-base text-text-muted">
                {heroSubheadline}
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4 md:justify-start">
                <Button type="button" onClick={() => router.push("/shop")}>
                  Shop trending toys
                </Button>
                <Button
                  type="button"
                  variant="ghost"
                  onClick={() => {
                    const element = document.getElementById("trending-toys");
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                >
                  Browse by age
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => router.push("/contact")}
                >
                  Talk to us
                </Button>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative w-full max-w-md overflow-hidden rounded-3xl bg-surface shadow-lg shadow-primary/20">
                <div className="absolute left-4 top-4 rounded-full bg-background/80 px-3 py-1 text-[11px] font-medium text-text-soft">
                  Happy customers • Demo photos
                </div>
                <div className="aspect-[4/3] bg-surface-muted">
                  <img
                    src="/hero-kids-1.jpg"
                    alt="Kids playing with Trendy Toys"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </Section>

        <Section id="trending-toys">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-2xl font-semibold text-text-main">
              Trending Toys
            </h2>
          </div>
          <Carousel>
            {trending.map((product) => (
              <div key={product.id} className="w-64">
                <ProductTile product={product} />
              </div>
            ))}
          </Carousel>
        </Section>

        <Section>
          <h2 className="mb-6 text-2xl font-semibold text-text-main">
            Shop by Category
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {mockCategories.map((category) => (
              <button
                key={category.id}
                type="button"
                onClick={() =>
                  router.push(
                    `/shop?category=${encodeURIComponent(category.name)}`
                  )
                }
                className="flex flex-col items-start rounded-xl bg-surface-muted px-4 py-5 text-left text-sm font-semibold text-text-main shadow-xs transition-transform duration-150 hover:-translate-y-0.5 hover:shadow-[0_0_18px_rgba(59,130,246,0.25)]"
              >
                <span>{category.name}</span>
                <span className="mt-1 text-[11px] font-normal uppercase tracking-wide text-text-soft">
                  Browse {category.name.toLowerCase()}
                </span>
              </button>
            ))}
          </div>
        </Section>

        <Section>
          <h2 className="mb-6 text-2xl font-semibold text-text-main">
            Playtime snapshots
          </h2>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="overflow-hidden rounded-2xl bg-surface-muted shadow-sm">
              <div className="aspect-[4/3] bg-surface">
                <img
                  src="/hero-kids-2.jpg"
                  alt="Child stacking colorful toys"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="px-4 py-3 text-sm text-text-muted">
                Soft, rounded shapes that photograph beautifully in real homes.
              </div>
            </div>
            <div className="overflow-hidden rounded-2xl bg-surface-muted shadow-sm">
              <div className="aspect-[4/3] bg-surface">
                <img
                  src="/hero-kids-3.jpg"
                  alt="Parents and child playing together"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="px-4 py-3 text-sm text-text-muted">
                Show how your toys bring parents and kids together.
              </div>
            </div>
            <div className="overflow-hidden rounded-2xl bg-surface-muted shadow-sm">
              <div className="aspect-[4/3] bg-surface">
                <img
                  src="/hero-toys-flatlay.jpg"
                  alt="Flatlay of Trendy Toys products"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="px-4 py-3 text-sm text-text-muted">
                Highlight your hero products in a simple flatlay shot.
              </div>
            </div>
          </div>
        </Section>

        <Section>
          <h2 className="mb-6 text-2xl font-semibold text-text-main">
            Age-based browsing
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
            {["0–3", "4–6", "7–10", "10+"].map((age) => (
              <button
                key={age}
                type="button"
                onClick={() =>
                  router.push(`/shop?age=${encodeURIComponent(age)}`)
                }
                className="flex flex-col items-start rounded-xl bg-surface px-4 py-5 text-left text-sm font-semibold text-text-main shadow-sm transition-transform duration-150 hover:-translate-y-0.5 hover:shadow-[0_0_18px_rgba(236,72,153,0.25)]"
              >
                <span className="mb-1 text-xs uppercase text-text-soft">
                  Age
                </span>
                <span className="text-lg">
                  {age}
                </span>
                <span className="mt-1 text-[11px] font-normal text-text-soft">
                  See toys best for {age}
                </span>
              </button>
            ))}
          </div>
        </Section>

        <Section>
          <h2 className="mb-6 text-2xl font-semibold text-text-main">
            Parents love TrendyToys
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            {mockTestimonials.map((item) => (
              <div
                key={item.id}
                className="rounded-xl bg-surface px-5 py-5 text-sm text-text-muted shadow-sm"
              >
                <div className="mb-2 text-base font-semibold text-text-main">
                  {item.name}
                </div>
                <p>
                  {item.quote}
                </p>
              </div>
            ))}
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  );
}
