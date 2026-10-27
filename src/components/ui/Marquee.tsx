import { cn } from "@/lib/utils";
 
const css = `
.aura-marquee{overflow:hidden;width:100%}
.aura-marquee-track{display:flex;width:max-content;animation:aura-marquee var(--marquee-speed,42s) linear infinite}
.aura-marquee[data-reverse="true"] .aura-marquee-track{animation-direction:reverse}
.aura-marquee:hover .aura-marquee-track{animation-play-state:paused}
@keyframes aura-marquee{from{transform:translateX(0)}to{transform:translateX(-50%)}}
@media (prefers-reduced-motion:reduce){.aura-marquee-track{animation:none}}
`;
 
export function Marquee<T>({
  items,
  render,
  speed = 42,
  reverse = false,
  className,
}: {
  items: T[];
  render: (item: T, i: number) => React.ReactNode;
  speed?: number;
  reverse?: boolean;
  className?: string;
}) {
  const doubled = [...items, ...items];
  return (
    <div
      className={cn("aura-marquee", className)}
      data-reverse={reverse}
      style={{ ["--marquee-speed" as string]: `${speed}s` }}
    >
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <div className="aura-marquee-track">
        {doubled.map((item, i) => (
          <div key={i} aria-hidden={i >= items.length} className="flex shrink-0">
            {render(item, i % items.length)}
          </div>
        ))}
      </div>
    </div>
  );
}
 
