import { cn } from "@/lib/utils";

export function Eyebrow({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "font-label text-[10px] font-medium uppercase tracking-[0.45em] text-gold",
        className,
      )}
    >
      {children}
    </span>
  );
}
