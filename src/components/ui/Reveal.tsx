"use client";

import { useInView } from "@/hooks/useInView";
import { cn } from "@/lib/utils";

export function Reveal({
  as: Tag = "div",
  className,
  children,
  delay = 0,
}: {
  as?: "div" | "p" | "h2" | "span";
  className?: string;
  children: React.ReactNode;
  delay?: number;
}) {
  const { ref, inView } = useInView<HTMLElement>({ amount: 0.2 });
  return (
    <Tag
      ref={ref as React.Ref<never>}
      className={cn("ab-reveal", inView && "in-view", className)}
      style={{ transitionDelay: `${delay}s` }}
    >
      {children}
    </Tag>
  );
}
