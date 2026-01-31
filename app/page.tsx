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
            className={`relative z-10 flex flex-col items-center gap-8 text-center transition-all duration-500 ${
              heroVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-4 opacity-0"
            }`}
          >
            <Badge>
              Trendy • Modern • Playful
            </Badge>
            <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-text-main sm:text-5xl">
              {heroHeadline}
            </h1>
            <p className="max-w-2xl text-base text-text-muted">
              {heroSubheadline}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
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
              <div
                key={category.id}
                className="rounded-xl bg-surface-muted px-4 py-5 text-sm font-semibold text-text-main shadow-xs"
              >
                {category.name}
              </div>
            ))}
          </div>
        </Section>

        <Section>
          <h2 className="mb-6 text-2xl font-semibold text-text-main">
            Age-based browsing
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
            {["0–3", "4–6", "7–10", "10+"].map((age) => (
              <div
                key={age}
                className="flex flex-col items-start rounded-xl bg-surface px-4 py-5 text-sm font-semibold text-text-main shadow-sm"
              >
                <span className="mb-1 text-xs uppercase text-text-soft">
                  Age
                </span>
                <span className="text-lg">
                  {age}
                </span>
              </div>
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
