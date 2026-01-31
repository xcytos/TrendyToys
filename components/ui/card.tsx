import type { ReactNode } from "react";
import { cn } from "../../lib/utils/cn";

type CardVariant = "default" | "elevated" | "pastel";

type CardProps = {
  children: ReactNode;
  className?: string;
  variant?: CardVariant;
};

export function Card(props: CardProps) {
  const { variant = "default", className, children } = props;

  const base = "rounded-lg bg-surface shadow-sm";
  const variantClass =
    variant === "elevated"
      ? "shadow-md"
      : variant === "pastel"
        ? "bg-gradient-to-br from-primary-soft to-secondary-soft"
        : "";

  return (
    <div className={cn(base, variantClass, className)}>
      {children}
    </div>
  );
}
