import type { SelectHTMLAttributes } from "react";
import { cn } from "../../lib/utils/cn";

type SelectProps = SelectHTMLAttributes<HTMLSelectElement>;

export function Select(props: SelectProps) {
  const { className, children, ...rest } = props;
  return (
    <select
      className={cn(
        "h-10 w-full rounded-md border border-border-subtle bg-surface px-3 text-sm text-text-main outline-none ring-offset-background transition focus:border-border-strong focus:ring-2 focus:ring-focus-ring",
        className
      )}
      {...rest}
    >
      {children}
    </select>
  );
}

