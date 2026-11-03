"use client";

import { MachineFront } from "@/components/ui/MachineFront";
import { useScrollProgress } from "@/hooks/useScrollProgress";
import { useLang } from "@/i18n/LanguageContext";

const clamp = (v: number) => Math.max(0, Math.min(1, v));
const SCREEN_LIST = ["Layton Exclusif", "Le Male Elixir", "Baccarat Rouge 540", "Atomic Rose", "Sailing Day"];

export function HowItWorks() {
  const { t } = useLang();
  const { ref, progress: hp } = useScrollProgress<HTMLElement>();
  const idx = Math.min(2, Math.floor(hp * 3));

  const screen = (
    <>
      {t.how.panes.map((pane, i) => (
        <div key={i} className="ab-pane" style={{ opacity: i === idx ? 1 : 0 }} aria-hidden={i !== idx}>
          <div className="ab-pane-kick">{pane.kicker}</div>
          <div className="ab-pane-title">{pane.title}</div>
          {i === 0 && (
            <div className="ab-pane-list">
              {SCREEN_LIST.map((n, j) => (
                <span key={n} className={j === 2 ? "is-pick" : undefined}>
                  {n}
                </span>
              ))}
            </div>
          )}
          {pane.sub && <div className="ab-pane-sub">{pane.sub}</div>}
        </div>
      ))}
    </>
  );

  return (
    <section ref={ref} id="how" className="ab-how ab-rule" aria-label={t.how.label}>
      <div className="ab-how-stage">
        <div className="ab-container ab-how-grid">
          <div className="flex flex-col gap-6">
            <div className="ab-label">{t.how.label}</div>
            <div className="ab-how-text">
              {t.how.steps.map(([title, line], i) => (
                <div
                  key={i}
                  className="ab-moment ab-how-step"
                  aria-hidden={i !== idx}
                  style={{ opacity: i === idx ? 1 : 0, transform: `translateY(${i < idx ? -28 : i > idx ? 28 : 0}px)`, justifyContent: "flex-start" }}
                >
                  <div className="ab-label ab-label--mist">0{i + 1} / 03</div>
                  <h3>{title}</h3>
                  <p className="ab-lead max-w-[380px]">{line}</p>
                </div>
              ))}
            </div>
            <div className="ab-progress">
              {t.how.steps.map((_, i) => (
                <div key={i} style={{ width: 72 }}>
                  <div style={{ width: `${clamp(hp * 3 - i) * 100}%` }} />
                </div>
              ))}
            </div>
          </div>
          <div className="ab-how-media">
            <div className="ab-how-glow" aria-hidden />
            <div className="ab-machine-box" role="img" aria-label="Illustration of the Aurabox top unit showing the current step">
              <MachineFront pick={hp > 0.02 ? 1 : 0} tap={idx === 1 ? 1 : 0} spray={idx === 2 ? 1 : 0} led={0.7} screen={screen} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
