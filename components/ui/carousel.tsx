import type { ReactNode } from "react";
import { cn } from "../../lib/utils/cn";

type CarouselProps = {
  children: ReactNode;
  className?: string;
};

export function Carousel(props: CarouselProps) {
  const { children, className } = props;
  return (
    <div
      className={cn(
        "flex gap-4 overflow-x-auto pb-2 [&>*]:shrink-0",
        className
      )}
    >
      {children}
    </div>
  );
}

