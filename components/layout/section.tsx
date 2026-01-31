import type { ReactNode } from "react";
import { cn } from "../../lib/utils/cn";

type SectionProps = {
  id?: string;
  className?: string;
  children: ReactNode;
};

export function Section(props: SectionProps) {
  const { id, className, children } = props;
  return (
    <section id={id} className={cn("mx-auto max-w-6xl px-6 py-10", className)}>
      {children}
    </section>
  );
}

