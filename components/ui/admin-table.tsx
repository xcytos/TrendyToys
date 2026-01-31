import type { ReactNode } from "react";
import { cn } from "../../lib/utils/cn";

type AdminTableProps = {
  headers: string[];
  children: ReactNode;
  className?: string;
};

export function AdminTable(props: AdminTableProps) {
  const { headers, children, className } = props;
  return (
    <div className={cn("overflow-x-auto rounded-lg border border-border-subtle bg-surface", className)}>
      <table className="min-w-full text-left text-sm">
        <thead className="bg-surface-muted text-xs font-semibold uppercase text-text-soft">
          <tr>
            {headers.map((header) => (
              <th key={header} className="px-4 py-3">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>{children}</tbody>
      </table>
    </div>
  );
}

