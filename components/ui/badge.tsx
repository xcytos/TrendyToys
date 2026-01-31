import type { ReactNode } from "react";
import { cn } from "../../lib/utils/cn";

type BadgeProps = {
  children: ReactNode;
  className?: string;
};

export function Badge(props: BadgeProps) {
  const { children, className } = props;
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full bg-primary-soft px-3 py-1 text-xs font-semibold text-primary-strong",
        className
      )}
    >
      {children}
    </span>
  );
}

