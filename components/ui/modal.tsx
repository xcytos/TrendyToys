import type { ReactNode } from "react";
import { cn } from "../../lib/utils/cn";

type ModalProps = {
  open: boolean;
  onClose?: () => void;
  children: ReactNode;
  className?: string;
};

export function Modal(props: ModalProps) {
  if (!props.open) return null;

  return (
    <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/40">
      <div
        className={cn(
          "max-h-[90vh] w-full max-w-lg rounded-lg bg-surface p-6 shadow-lg",
          props.className
        )}
      >
        {props.children}
      </div>
    </div>
  );
}
