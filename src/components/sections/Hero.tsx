"use client";

import { MachineFront, MachineSide } from "@/components/ui/MachineFront";
import { useScrollProgress } from "@/hooks/useScrollProgress";
import { useLang } from "@/i18n/LanguageContext";

const clamp = (v: number) => Math.max(0, Math.min(1, v));
const ease = (t: number) => (t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2);

// Camera per moment: rotation, tilt, zoom and pan (cqw) of the 3D machine
const CAMS = [
  { ry: -30, rx: 8, z: 1, tx: 0, ty: 0 },
  { ry: -8, rx: 4, z: 1.55, tx: 31, ty: 22 }, // bottles and buttons
  { ry: 38, rx: 8, z: 1, tx: 0, ty: 0 }, // the other side
  { ry: -14, rx: 10, z: 1.05, tx: 0, ty: 0 },
];
const IDLE = { ry: -18, rx: 8, z: 1, tx: 0, ty: 0 };

export function Hero() {
  const { t } = useLang();
  const { ref, progress: p, width: w } = useScrollProgress<HTMLElement>();
  const mobile = w < 820;

  const h = ease(clamp(p / 0.15));
  const s = clamp((p - 0.15) / 0.8);
  const n = t.moments.length;
  const idx = Math.min(n - 1, Math.floor(s * n));
  const active = h > 0.55;

  const shift = mobile ? 0 : h * Math.min(w * 0.2, 290);
  const ty = mobile ? -60 * h : 0;
  const scale = mobile ? 0.82 - 0.12 * h : 1 - 0.06 * h;
  const pulse = 0.5 + 0.5 * Math.abs(Math.sin(s * Math.PI * n));
  const cam = active ? CAMS[Math.min(idx, CAMS.length - 1)] : IDLE;
  const led = active && idx === n - 1 ? 0.95 : 0.55;

  const screen = (
    <div className="ab-pane">
      <div className="ab-pane-logo">A</div>
      <div className="ab-pane-kick">{active ? `0${idx + 1} / 0${n}` : t.hero.welcome}</div>
      <div className="ab-pane-title">{active ? t.moments[idx][0] : t.hero.touch}</div>
    </div>
  );

  return (
    <section ref={ref} id="experience" className="ab-hero" aria-label="Aurabox">
      <div id="top" className="ab-hero-stage">
        <div className="ab-hero-spot" aria-hidden style={{ transform: `translateX(${shift}px)` }} />
        <div
          className="ab-hero-glow"
          aria-hidden
          style={{
            transform: `translateX(${shift}px)`,
            background: `radial-gradient(circle, rgba(212,175,55,${(0.16 + 0.16 * h * pulse).toFixed(3)}), rgba(212,175,55,0) 62%)`,
          }}
        />
        <div className="ab-hero-floor" aria-hidden />

        <h1 className="m-0 font-light">
          <span className="ab-hero-word ab-hero-word--l" style={{ opacity: 1 - h, transform: `translateX(${-h * 280}px)` }}>
            <span className="ab-hero-enter">Feel The</span>
          </span>
          <span className="ab-hero-word ab-hero-word--r" style={{ opacity: 1 - h, transform: `translateX(${h * 280}px)` }}>
            <span className="ab-hero-enter">Luxury.</span>
          </span>
        </h1>

        <div
          className="ab-hero-machine"
          style={{ transform: `translate(-50%, -50%) translate(${shift}px, ${ty}px) scale(${scale})` }}
        >
          <div className="ab-hero-machine-inner">
            <div
              aria-hidden
              className="absolute"
              style={{ left: "-30%", right: "-30%", bottom: "-6cqw", height: "16cqw", background: "radial-gradient(ellipse at 50% 50%, rgba(0,0,0,0.95), rgba(0,0,0,0) 70%)" }}
            />
            <div
              role="img"
              aria-label="Illustration of the Aurabox machine: five bottles behind glass, a button under each, a touchscreen and a gold-framed card reader, with gold LED strips down both sides"
              className="ab-3d"
              style={{ transform: `translate(${cam.tx}cqw, ${cam.ty}cqw) scale(${cam.z}) rotateX(${-cam.rx}deg) rotateY(${cam.ry}deg)` }}
            >
              <div className="ab-face" style={{ inset: 0, transform: "translateZ(11cqw)" }}>
                <MachineFront pick={active && idx === 1 ? 1 : 0} tap={0} led={led} screen={screen} />
              </div>
              <div className="ab-face" style={{ inset: 0, transform: "rotateY(180deg) translateZ(11cqw)", background: "#070707", borderRadius: "2.6cqw" }} />
              <div className="ab-face" style={{ left: "39cqw", top: 0, width: "22cqw", height: "60cqw", transform: "rotateY(90deg) translateZ(50cqw)" }}>
                <MachineSide side="right" led={led} />
              </div>
              <div className="ab-face" style={{ left: "39cqw", top: 0, width: "22cqw", height: "60cqw", transform: "rotateY(-90deg) translateZ(50cqw)" }}>
                <MachineSide side="left" led={led} />
              </div>
              <div
                className="ab-face"
                style={{ left: 0, top: "19cqw", width: "100cqw", height: "22cqw", transform: "rotateX(90deg) translateZ(30cqw)", background: "linear-gradient(180deg, #161616, #0c0c0c)", borderRadius: "1.2cqw" }}
              />
            </div>
          </div>
        </div>

        <div className="ab-hero-foot" style={{ opacity: 1 - h }}>
          <p className="max-w-[720px] px-6 text-center font-serif text-[22px] font-light leading-snug text-[#ececec] md:text-[26px]">{t.hero.b2b}</p>
          <p className="ab-label px-6 text-center" style={{ letterSpacing: "0.4em" }}>{t.hero.promise}</p>
          <a href="#contact" className="ab-btn-s mt-1" style={{ minHeight: 52, pointerEvents: h > 0.9 ? "none" : undefined }}>
            {t.hero.cta} <span className="ab-dash" aria-hidden />
          </a>
        </div>

        <div className="ab-moments">
          {t.moments.map(([title, line, cat], i) => (
            <div
              key={i}
              className="ab-moment"
              aria-hidden={i !== idx || !active}
              style={{
                opacity: i === idx ? clamp((h - 0.55) * 2.2) : 0,
                transform: `translateY(${i < idx ? -28 : i > idx ? 28 : 0}px)`,
              }}
            >
              <div className="ab-label">
                0{i + 1} / 0{n} · {cat}
              </div>
              <h2>{title}</h2>
              <p className="ab-lead">{line}</p>
            </div>
          ))}
        </div>

        <div className="ab-progress ab-hero-progress" style={{ opacity: clamp((h - 0.5) * 2) }}>
          {t.moments.map((_, i) => (
            <div key={i}>
              <div style={{ width: `${clamp(s * n - i) * 100}%` }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
