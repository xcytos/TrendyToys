import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib/utils/cn";
import type { ButtonHTMLAttributes } from "react";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-sm text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
  {
    variants: {
      variant: {
        primary: "bg-primary text-white shadow-sm hover:bg-primary-strong",
        secondary:
          "bg-secondary text-text-main shadow-sm hover:bg-secondary-soft",
        ghost: "bg-transparent text-text-main hover:bg-primary-soft",
        outline:
          "border border-border-subtle bg-surface text-text-main hover:border-border-strong",
        destructive: "bg-red-500 text-white hover:bg-red-600",
        icon: "bg-surface text-text-main hover:bg-surface-muted p-2"
      },
      size: {
        sm: "h-9 px-3",
        md: "h-10 px-4",
        lg: "h-11 px-6"
      }
    },
    defaultVariants: {
      variant: "primary",
      size: "md"
    }
  }
);

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants>;

export function Button(props: ButtonProps) {
  const { className, variant, size, ...rest } = props;
  return (
    <button
      className={cn(buttonVariants({ variant, size }), className)}
      {...rest}
    />
  );
}

export { buttonVariants };
