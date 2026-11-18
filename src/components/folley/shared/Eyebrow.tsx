import type { ReactNode } from "react";

export function Eyebrow({
  children,
  light = false,
}: {
  children: ReactNode;
  light?: boolean;
}) {
  return (
    <p
      className={`flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.18em] ${
        light ? "text-background/70" : "text-primary"
      }`}
    >
      <span className="h-px w-7 bg-current" />
      {children}
    </p>
  );
}