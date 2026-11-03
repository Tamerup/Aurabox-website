// A drawn front of the Aurabox top unit. All sizes are in cqw, so the parent
// must set `container-type: inline-size` (see .ab-machine-box in redesign.css).

const BOTTLES = [
  { w: 6.2, h: 9.5, r: 0.7, cw: 3.4, ch: 3.0 },
  { w: 5.4, h: 12.0, r: 1.6, cw: 2.8, ch: 2.6 },
  { w: 5.6, h: 13.5, r: 2.6, cw: 2.2, ch: 2.0 },
  { w: 6.4, h: 9.0, r: 0.6, cw: 2.8, ch: 3.6 },
  { w: 4.8, h: 11.5, r: 0.5, cw: 3.4, ch: 1.9 },
];
const BUTTON_CENTERS = [10.5, 20, 29.5, 39, 48.5];
const PICK = 2;

const cq = (n: number) => `${n}cqw`;

export function MachineFront({
  pick = 0,
  tap = 0,
  spray = 0,
  led = 0.6,
  screen,
}: {
  pick?: number;
  tap?: number;
  spray?: number;
  led?: number;
  screen: React.ReactNode;
}) {
  const ledGlow = `0 0 2.2cqw 0.6cqw rgba(255,196,90,${led})`;
  return (
    <>
      <div className="ab-mf">
        <div className="ab-mf-sheen" aria-hidden />
        <div className="ab-mf-label" style={{ left: cq(7), top: cq(3.6) }}>
          1 · GUIDE YOUR WRIST TO THE FRAGRANCE NOZZLE
        </div>

        <div className="ab-glass">
          <div className="ab-glass-light" aria-hidden />
          <div className="ab-shelf">
            {BOTTLES.map((b, i) => (
              <div key={i} className="ab-bottle-col">
                <div className="ab-bottle-cap" style={{ width: cq(b.cw), height: cq(b.ch) }} />
                <div className="ab-bottle" style={{ width: cq(b.w), height: cq(b.h), borderRadius: cq(b.r) }}>
                  <div
                    className="ab-bottle-liquid"
                    style={{ borderRadius: `0 0 ${cq(Math.max(b.r - 0.3, 0.2))} ${cq(Math.max(b.r - 0.3, 0.2))}` }}
                  />
                  {i === PICK && (
                    <div className="ab-ring" style={{ borderRadius: cq(b.r + 0.6), opacity: pick }} />
                  )}
                </div>
              </div>
            ))}
          </div>
          <div className="ab-glass-glare" aria-hidden />
        </div>

        <div className="ab-mf-label" style={{ left: cq(7), top: cq(28) }}>
          4 · PRESS THE BUTTON
        </div>
        {BUTTON_CENTERS.map((c, i) => (
          <div key={i} className="ab-btn" style={{ left: cq(c - 2.7) }}>
            <div className="ab-btn-dot" />
            <div className="ab-btn-knob" />
            {i === PICK && <div className="ab-ring ab-ring--btn" style={{ opacity: pick }} />}
          </div>
        ))}
        <div className="ab-nozzle-glow" style={{ opacity: spray }} aria-hidden />

        <div className="ab-mf-label" style={{ left: cq(57), top: cq(3.6) }}>
          1 · CHOOSE YOUR FRAGRANCE
        </div>
        <div className="ab-screen">
          {screen}
          <div className="ab-screen-glare" aria-hidden />
        </div>

        <div className="ab-reader" style={{ boxShadow: `inset 0 0 0 0.45cqw #D4AF37, inset 0 0 0 0.7cqw #000, 0 0 2.6cqw 0.6cqw rgba(212,175,55,${tap})` }}>
          <div className="ab-reader-inner">
            <svg viewBox="0 0 24 24" fill="none" stroke="#e8eefc" strokeWidth="1.6" strokeLinecap="round" aria-hidden>
              <path d="M8.5 8.2a5 5 0 0 1 0 7.6M11.6 5.8a9 9 0 0 1 0 12.4M14.8 3.4a13 13 0 0 1 0 17.2" />
            </svg>
          </div>
        </div>
        <div className="ab-reader-led" aria-hidden />
        <div className="ab-mf-label" style={{ left: cq(78), top: cq(22.5) }}>
          2 · MAKE THE PAYMENT
        </div>

        <div className="ab-mark">AURABOX</div>
        <div className="ab-mark-sub">Feel The Luxury</div>
        <div className="ab-vend">LUXURY FRAGRANCE VENDING</div>
        <div className="ab-vend-sub">www.aurabox.fi</div>

        <div className="ab-led" style={{ left: cq(0.7), boxShadow: ledGlow }} aria-hidden />
        <div className="ab-led" style={{ right: cq(0.7), boxShadow: ledGlow }} aria-hidden />
      </div>
      <div className="ab-mist-wrap" style={{ opacity: spray }} aria-hidden>
        <div className="ab-mist" />
        <div className="ab-mist ab-mist--2" />
        <div className="ab-mist ab-mist--3" />
      </div>
    </>
  );
}

export function MachineSide({ led = 0.6, side }: { led?: number; side: "left" | "right" }) {
  return (
    <div className="ab-side">
      <div
        className="ab-side-led"
        style={{ [side === "left" ? "left" : "right"]: cq(0.6), boxShadow: `0 0 2cqw 0.5cqw rgba(255,196,90,${led})` }}
      />
    </div>
  );
}
