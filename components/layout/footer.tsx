export function Footer() {
  return (
    <footer className="border-t border-border-subtle bg-surface">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-6 text-sm text-text-soft sm:flex-row sm:items-center sm:justify-between">
        <span>
          © {new Date().getFullYear()} TrendyToys Demo
        </span>
        <div className="flex flex-wrap items-center gap-4">
          <span className="text-text-muted">
            Safe, playful, modern toy experiences
          </span>
        </div>
      </div>
    </footer>
  );
}
