import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "solid" | "outline";
  className?: string;
  external?: boolean;
};

export function Button({
  href,
  children,
  variant = "outline",
  className,
  external,
}: ButtonProps) {
  const base =
    "font-label group relative inline-flex items-center justify-center gap-3 px-10 py-4 text-[11px] font-medium uppercase tracking-[0.35em] transition-all duration-500 ease-out";

  const styles =
    variant === "solid"
      ? "bg-gold text-black hover:bg-ivory"
      : "border border-gold/60 text-ivory hover:border-gold hover:bg-gold hover:text-black";

  return (
    <Link
      href={href}
      className={cn(base, styles, className)}
      {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
    >
      <span>{children}</span>
      <span
        aria-hidden
        className="inline-block h-px w-5 origin-left scale-x-100 bg-current transition-transform duration-500 group-hover:scale-x-150"
      />
    </Link>
  );
}
