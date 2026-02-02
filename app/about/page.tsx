import { Header } from "../components/layout/header";

export default function AboutPage() {
  return (
    <>
      <Header />
      <div className="mx-auto max-w-4xl px-6 py-10">
        <h1 className="mb-6 text-3xl font-semibold">
          About TrendyToys
        </h1>
        <p className="mb-4 text-sm text-text-muted">
          TrendyToys is a concept brand that combines modern, premium design with
          playful, kid-friendly experiences. This website is a UI-first demo that
          showcases what a future toy ecommerce experience could feel like.
        </p>
        <h2 className="mb-2 text-xl font-semibold">
          Mission
        </h2>
        <p className="mb-4 text-sm text-text-muted">
          Create joyful digital experiences that make it easy for parents to
          discover safe, exciting toys while giving kids a magical way to browse.
        </p>
        <h2 className="mb-2 text-xl font-semibold">
          Safety philosophy
        </h2>
        <p className="mb-4 text-sm text-text-muted">
          In a real implementation, TrendyToys would highlight clear age ranges,
          certifications, and quality checks. In this demo, safety messaging and
          flows are visual only, with no real products or logistics behind them.
        </p>
      </div>
    </>
  );
}
