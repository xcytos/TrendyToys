import type { InputHTMLAttributes } from "react";
import { cn } from "../../lib/utils/cn";

type InputProps = InputHTMLAttributes<HTMLInputElement>;

export function Input(props: InputProps) {
  const { className, ...rest } = props;
  return (
    <input
      className={cn(
        "h-10 w-full rounded-md border border-border-subtle bg-surface px-3 text-sm text-text-main outline-none ring-offset-background transition focus:border-border-strong focus:ring-2 focus:ring-focus-ring",
        className
      )}
      {...rest}
    />
  );
}

