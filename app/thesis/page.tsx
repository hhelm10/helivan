"use client";
import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import Header from "@/components/header";
import { Footer } from "@/components/footer";

/* ---------- deterministic rng (stable across SSR + client) ---------- */
const mulberry32 = (seed: number) => {
  let a = seed;
  return () => {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
};

const gauss = (rng: () => number) => {
  const u = Math.max(rng(), 1e-9);
  const v = rng();
  return Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * v);
};

/* ---------- palette ---------- */
const MIDNIGHT = "#0A1638";
const STEEL = "#33507A";
const STEEL_DEEP = "#263C5C";
const STEEL_TINT = "#C9D6E8";
const MUTED = "#5C6B8A";
const AMBER = "#F59E0B";
const GREEN = "#10B981";
const HAIRLINE = "#DFE6F2";

const lerpColor = (a: string, b: string, t: number) => {
  const pa = [1, 3, 5].map((i) => parseInt(a.slice(i, i + 2), 16));
  const pb = [1, 3, 5].map((i) => parseInt(b.slice(i, i + 2), 16));
  const c = pa.map((v, i) => Math.round(v + (pb[i] - v) * Math.min(Math.max(t, 0), 1)));
  return `rgb(${c[0]},${c[1]},${c[2]})`;
};

const scoreColor = (s: number) => lerpColor(STEEL_TINT, MIDNIGHT, s);

/* ---------- the mark, steady and drifted ---------- */
const Mark = ({ drift, size = 36 }: { drift: boolean; size?: number }) => (
  <svg viewBox="0 0 96 96" width={size} height={size} aria-hidden="true">
    <rect x="16" y="44.5" width="64" height="7" rx="2" transform="rotate(-28.6 48 48)" fill={MIDNIGHT} />
    <rect x="30" y="26" width="14" height="56" rx="3" fill={MIDNIGHT} />
    {drift && (
      <rect x="66.5" y="44.5" width="13.5" height="7" rx="2" transform="rotate(-28.6 48 48)" fill={AMBER} />
    )}
    <rect x="52" y="14" width="14" height="56" rx="3" fill={drift ? AMBER : MIDNIGHT} />
  </svg>
);

/* ---------- figure chrome ---------- */
const Figure = ({
  tag,
  title,
  subtitle,
  children,
  caption,
}: {
  tag: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  caption: React.ReactNode;
}) => (
  <figure className="my-10 bg-white border border-hairline rounded-2xl p-5 md:p-7">
    <div className="font-mono text-xs text-brand-muted mb-1">{tag}</div>
    <div className="font-grotesk font-semibold text-midnight text-lg">{title}</div>
    {subtitle && <div className="text-brand-muted text-sm mt-0.5">{subtitle}</div>}
    <div className="mt-4">{children}</div>
    <figcaption className="text-brand-muted text-[13px] leading-relaxed mt-4">
      {caption}
    </figcaption>
  </figure>
);

const FigButton = ({
  onClick,
  active = false,
  disabled = false,
  children,
}: {
  onClick: () => void;
  active?: boolean;
  disabled?: boolean;
  children: React.ReactNode;
}) => (
  <button
    onClick={onClick}
    disabled={disabled}
    className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors disabled:opacity-40 ${
      active
        ? "bg-steel text-white"
        : "bg-white border border-hairline text-steel hover:border-steel"
    }`}
  >
    {children}
  </button>
);

/* ================================================================
   fig 1 — a population of agents
================================================================ */
type P = { x: number; y: number; vx: number; vy: number };

const Fig1 = () => {
  const W = 640;
  const H = 240;
  const initial = useMemo(() => {
    const rng = mulberry32(11);
    return Array.from({ length: 7 }, () => ({
      x: 60 + rng() * (W - 120),
      y: 40 + rng() * (H - 80),
      vx: 0,
      vy: 0,
    }));
  }, []);
  const [agents, setAgents] = useState<P[]>(initial);
  const [interacting, setInteracting] = useState(false);
  const seedRef = useRef(100);

  const addAgent = () => {
    const rng = mulberry32(seedRef.current++);
    setAgents((a) => [
      ...a,
      { x: 40 + rng() * (W - 80), y: 30 + rng() * (H - 60), vx: 0, vy: 0 },
    ]);
  };

  useEffect(() => {
    if (!interacting) return;
    const rng = mulberry32(7);
    const id = setInterval(() => {
      setAgents((prev) =>
        prev.map((p, i) => {
          let ax = (rng() - 0.5) * 0.9;
          let ay = (rng() - 0.5) * 0.9;
          prev.forEach((q, j) => {
            if (i === j) return;
            const dx = q.x - p.x;
            const dy = q.y - p.y;
            const d = Math.hypot(dx, dy);
            if (d < 140 && d > 1) {
              // gentle attraction at range, repulsion when crowded
              const f = d < 46 ? -0.035 : 0.011;
              ax += (dx / d) * f * (140 - d);
              ay += (dy / d) * f * (140 - d);
            }
          });
          const vx = (p.vx + ax * 0.14) * 0.86;
          const vy = (p.vy + ay * 0.14) * 0.86;
          return {
            x: Math.min(Math.max(p.x + vx, 24), W - 24),
            y: Math.min(Math.max(p.y + vy, 22), H - 22),
            vx,
            vy,
          };
        })
      );
    }, 50);
    return () => clearInterval(id);
  }, [interacting]);

  const edges: [P, P][] = [];
  if (interacting) {
    for (let i = 0; i < agents.length; i++)
      for (let j = i + 1; j < agents.length; j++) {
        const d = Math.hypot(agents[i].x - agents[j].x, agents[i].y - agents[j].y);
        if (d < 140) edges.push([agents[i], agents[j]]);
      }
  }

  return (
    <div>
      <svg viewBox={`0 0 ${W} ${H}`} className="w-full rounded-xl border border-hairline bg-mist">
        {edges.map(([a, b], i) => (
          <line key={i} x1={a.x} y1={a.y} x2={b.x} y2={b.y} stroke={STEEL_TINT} strokeWidth={1.2} />
        ))}
        {agents.map((p, i) => (
          <g key={i}>
            <circle cx={p.x} cy={p.y} r={9} fill={STEEL} opacity={0.15} />
            <circle cx={p.x} cy={p.y} r={5} fill={i === 0 ? MIDNIGHT : STEEL} />
          </g>
        ))}
      </svg>
      <div className="flex items-center gap-3 mt-3">
        <FigButton onClick={addAgent}>add an agent</FigButton>
        <FigButton onClick={() => setInteracting((v) => !v)} active={interacting}>
          interactions: {interacting ? "on" : "off"}
        </FigButton>
        <span className="font-mono text-xs text-brand-muted ml-auto">n = {agents.length}</span>
      </div>
    </div>
  );
};

/* ================================================================
   fig 2 — one map, three views
================================================================ */
type Agent2 = { id: number; type: number; score: number; x: number; y: number; jitter: number };

const TYPE_SHAPES = 6;

const Shape = ({
  type,
  x,
  y,
  fill,
  r = 5,
  onEnter,
  onLeave,
}: {
  type: number;
  x: number;
  y: number;
  fill: string;
  r?: number;
  onEnter?: () => void;
  onLeave?: () => void;
}) => {
  const common = {
    fill,
    onMouseEnter: onEnter,
    onMouseLeave: onLeave,
    style: { cursor: "default" } as React.CSSProperties,
  };
  switch (type % TYPE_SHAPES) {
    case 0:
      return <circle cx={x} cy={y} r={r} {...common} />;
    case 1:
      return <rect x={x - r} y={y - r} width={2 * r} height={2 * r} rx={1.5} {...common} />;
    case 2:
      return (
        <polygon
          points={`${x},${y - r * 1.2} ${x - r * 1.1},${y + r} ${x + r * 1.1},${y + r}`}
          {...common}
        />
      );
    case 3:
      return (
        <polygon
          points={`${x},${y - r * 1.3} ${x + r * 1.3},${y} ${x},${y + r * 1.3} ${x - r * 1.3},${y}`}
          {...common}
        />
      );
    case 4:
      return (
        <path
          d={`M${x - r * 1.2} ${y - r * 0.4} h${r * 0.8} v-${r * 0.8} h${r * 0.8} v${r * 0.8} h${r * 0.8} v${r * 0.8} h-${r * 0.8} v${r * 0.8} h-${r * 0.8} v-${r * 0.8} h-${r * 0.8} z`}
          {...common}
        />
      );
    default:
      return (
        <polygon
          points={Array.from({ length: 10 }, (_, i) => {
            const rr = i % 2 === 0 ? r * 1.4 : r * 0.6;
            const a = (Math.PI / 5) * i - Math.PI / 2;
            return `${x + rr * Math.cos(a)},${y + rr * Math.sin(a)}`;
          }).join(" ")}
          {...common}
        />
      );
  }
};

const Fig2 = () => {
  const W = 640;
  const H = 280;
  const data = useMemo(() => {
    const rng = mulberry32(42);
    const centers = [
      [0.2, 0.28],
      [0.44, 0.7],
      [0.62, 0.24],
      [0.82, 0.62],
      [0.3, 0.78],
      [0.78, 0.86],
    ];
    // two clusters share a score — same number, different agents
    const baseScores = [0.72, 0.71, 0.45, 0.44, 0.58, 0.3];
    const agents: Agent2[] = [];
    for (let i = 0; i < 100; i++) {
      const type = i % TYPE_SHAPES;
      const [cx, cy] = centers[type];
      agents.push({
        id: i,
        type,
        x: cx + gauss(rng) * 0.045,
        y: cy + gauss(rng) * 0.045,
        score: Math.min(Math.max(baseScores[type] + gauss(rng) * 0.03, 0.05), 0.95),
        jitter: rng(),
      });
    }
    // trajectories for five agents (one per early cluster)
    const trails = [0, 1, 2, 3, 4].map((t) => {
      const [cx, cy] = centers[t];
      let px = cx;
      let py = cy;
      const pts: [number, number][] = [[px, py]];
      for (let s = 0; s < 26; s++) {
        px = cx + (px - cx) * 0.82 + gauss(rng) * 0.016;
        py = cy + (py - cy) * 0.82 + gauss(rng) * 0.016;
        pts.push([px, py]);
      }
      return { center: [cx, cy] as [number, number], pts };
    });
    return { agents, trails, centers };
  }, []);

  const [view, setView] = useState<"benchmark" | "map" | "time">("map");
  const [hover, setHover] = useState<Agent2 | null>(null);

  const sx = (x: number) => 30 + x * (W - 60);
  const sy = (y: number) => 20 + y * (H - 50);

  return (
    <div>
      <div className="flex items-center gap-2 mb-3 flex-wrap">
        <FigButton onClick={() => setView("benchmark")} active={view === "benchmark"}>
          benchmark
        </FigButton>
        <FigButton onClick={() => setView("map")} active={view === "map"}>
          the map
        </FigButton>
        <FigButton onClick={() => setView("time")} active={view === "time"}>
          over time
        </FigButton>
        <span className="font-mono text-xs text-brand-muted ml-auto">
          {hover
            ? `agent-${String(hover.id).padStart(3, "0")} · type ${hover.type + 1} · score ${hover.score.toFixed(2)}`
            : "hover / tap a point"}
        </span>
      </div>
      <svg viewBox={`0 0 ${W} ${H}`} className="w-full rounded-xl border border-hairline bg-mist">
        {view === "benchmark" && (
          <g>
            <line x1={30} y1={H - 34} x2={W - 30} y2={H - 34} stroke={MUTED} strokeWidth={1} />
            {[0, 0.25, 0.5, 0.75, 1].map((v) => (
              <g key={v}>
                <line x1={sx(v)} y1={H - 34} x2={sx(v)} y2={H - 29} stroke={MUTED} strokeWidth={1} />
                <text x={sx(v)} y={H - 14} textAnchor="middle" fontSize={10} fill={MUTED} fontFamily="var(--font-mono)">
                  {v.toFixed(2)}
                </text>
              </g>
            ))}
            <text x={W - 30} y={H - 44} textAnchor="end" fontSize={10} fill={MUTED} fontFamily="var(--font-mono)">
              score →
            </text>
            {data.agents.map((a) => (
              <Shape
                key={a.id}
                type={a.type}
                x={sx(a.score)}
                y={H - 60 - a.jitter * (H - 130)}
                r={4.5}
                fill={scoreColor(a.score)}
                onEnter={() => setHover(a)}
                onLeave={() => setHover(null)}
              />
            ))}
          </g>
        )}
        {view === "map" && (
          <g>
            {data.agents.map((a) => (
              <Shape
                key={a.id}
                type={a.type}
                x={sx(a.x)}
                y={sy(a.y)}
                r={4.5}
                fill={scoreColor(a.score)}
                onEnter={() => setHover(a)}
                onLeave={() => setHover(null)}
              />
            ))}
          </g>
        )}
        {view === "time" && (
          <g>
            {data.trails.map((t, i) => (
              <g key={i}>
                <ellipse
                  cx={sx(t.center[0])}
                  cy={sy(t.center[1])}
                  rx={46}
                  ry={34}
                  fill={STEEL_TINT}
                  opacity={0.35}
                />
                <polyline
                  points={t.pts.map(([px, py]) => `${sx(px)},${sy(py)}`).join(" ")}
                  fill="none"
                  stroke={STEEL}
                  strokeWidth={1.4}
                  opacity={0.85}
                />
                <circle
                  cx={sx(t.pts[t.pts.length - 1][0])}
                  cy={sy(t.pts[t.pts.length - 1][1])}
                  r={4}
                  fill={MIDNIGHT}
                />
              </g>
            ))}
          </g>
        )}
      </svg>
      <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-3">
        {Array.from({ length: TYPE_SHAPES }, (_, t) => (
          <span key={t} className="inline-flex items-center gap-1.5 font-mono text-[11px] text-brand-muted">
            <svg width={14} height={14} viewBox="-7 -7 14 14">
              <Shape type={t} x={0} y={0} r={4} fill={STEEL} />
            </svg>
            {t === 0 ? "prompt type 1" : `type ${t + 1}`}
          </span>
        ))}
      </div>
    </div>
  );
};

/* ================================================================
   fig 3 — drift through the geometry
================================================================ */
const Fig3 = () => {
  const W = 640;
  const H = 230;
  const T = 100;
  const THRESH = 0.62;
  const DRIFT_IDX = 2;

  const series = useMemo(() => {
    const rng = mulberry32(9);
    const baselines = [0.18, 0.27, 0.33, 0.24, 0.4];
    return baselines.map((b, idx) => {
      let v = b;
      const pts: number[] = [];
      for (let t = 0; t <= T; t++) {
        v = b + (v - b) * 0.9 + gauss(rng) * 0.018;
        let out = v;
        if (idx === DRIFT_IDX) {
          if (t >= 45 && t < 70) out = v + Math.min((t - 45) / 10, 1) * 0.62;
          else if (t >= 70) out = v + Math.max(1 - (t - 70) / 10, 0) * 0.62;
        }
        pts.push(Math.min(Math.max(out, 0.04), 1.06));
      }
      return pts;
    });
  }, []);

  const [t, setT] = useState(0);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    if (!playing) return;
    const id = setInterval(() => {
      setT((v) => {
        if (v >= T) {
          setPlaying(false);
          return v;
        }
        return v + 1;
      });
    }, 70);
    return () => clearInterval(id);
  }, [playing]);

  const sx = (tt: number) => 34 + (tt / T) * (W - 60);
  const sy = (v: number) => H - 26 - v * (H - 52);
  const driftNow = series[DRIFT_IDX][t] > THRESH;
  const recovered = t >= 85;

  return (
    <div>
      <div className="flex flex-wrap items-center gap-3 mb-3">
        <FigButton onClick={() => setPlaying(true)} disabled={playing || t >= T}>
          ▶ play
        </FigButton>
        <FigButton
          onClick={() => {
            setPlaying(false);
            setT(0);
          }}
        >
          reset
        </FigButton>
        <span className="font-mono text-xs text-brand-muted whitespace-nowrap">t = {t}</span>
        <span className="flex items-center gap-2 w-full sm:w-auto sm:ml-auto">
          <span
            className={`font-mono text-xs whitespace-nowrap ${
              driftNow ? "text-drift-amber" : recovered && t > 0 ? "text-pass-green" : "text-brand-muted"
            }`}
          >
            {driftNow
              ? "⚠ drift detected · agent-03"
              : recovered && t > 0
                ? "✓ recovered · verified"
                : "monitoring"}
          </span>
          <span className="ml-auto sm:ml-0">
            <Mark drift={driftNow} size={34} />
          </span>
        </span>
      </div>
      <svg viewBox={`0 0 ${W} ${H}`} className="w-full rounded-xl border border-hairline bg-mist">
        {/* normal band */}
        <rect x={34} y={sy(THRESH)} width={W - 60} height={sy(0.04) - sy(THRESH)} fill={STEEL_TINT} opacity={0.28} />
        <line
          x1={34}
          y1={sy(THRESH)}
          x2={W - 26}
          y2={sy(THRESH)}
          stroke={MUTED}
          strokeWidth={1}
          strokeDasharray="5 4"
        />
        <text x={W - 28} y={sy(THRESH) - 6} textAnchor="end" fontSize={10} fill={MUTED} fontFamily="var(--font-mono)">
          normal range
        </text>
        <text x={34} y={H - 8} fontSize={10} fill={MUTED} fontFamily="var(--font-mono)">
          time →
        </text>
        {series.map((pts, idx) => {
          if (idx === DRIFT_IDX) {
            const segs = [];
            for (let i = 1; i <= t; i++) {
              const above = pts[i - 1] > THRESH && pts[i] > THRESH;
              segs.push(
                <line
                  key={i}
                  x1={sx(i - 1)}
                  y1={sy(pts[i - 1])}
                  x2={sx(i)}
                  y2={sy(pts[i])}
                  stroke={above ? AMBER : STEEL_DEEP}
                  strokeWidth={above ? 2.2 : 1.6}
                />
              );
            }
            return <g key={idx}>{segs}</g>;
          }
          return (
            <polyline
              key={idx}
              points={pts
                .slice(0, t + 1)
                .map((v, i) => `${sx(i)},${sy(v)}`)
                .join(" ")}
              fill="none"
              stroke={STEEL}
              strokeWidth={1.4}
              opacity={0.75}
            />
          );
        })}
        {/* current positions */}
        {t > 0 &&
          series.map((pts, idx) => (
            <circle
              key={idx}
              cx={sx(t)}
              cy={sy(pts[t])}
              r={4}
              fill={idx === DRIFT_IDX ? (driftNow ? AMBER : STEEL_DEEP) : STEEL}
            />
          ))}
        {/* intervention marker */}
        {t >= 70 && (
          <g>
            <line x1={sx(70)} y1={18} x2={sx(70)} y2={H - 26} stroke={GREEN} strokeWidth={1} strokeDasharray="3 3" />
            <text x={sx(70) + 5} y={26} fontSize={10} fill={GREEN} fontFamily="var(--font-mono)">
              intervention
            </text>
          </g>
        )}
      </svg>
    </div>
  );
};

/* ================================================================
   fig 4 — susceptibility and defense transfer
================================================================ */
const Fig4 = () => {
  const W = 640;
  const H = 260;
  const data = useMemo(() => {
    const rng = mulberry32(23);
    const agents = Array.from({ length: 40 }, (_, i) => {
      const x = 0.08 + rng() * 0.84;
      const y = 0.1 + rng() * 0.8;
      const s = Math.min(Math.max(0.12 + 0.75 * (x * 0.65 + (1 - y) * 0.35) + gauss(rng) * 0.05, 0.05), 0.98);
      return { id: i, x, y, s };
    });
    const star = agents.reduce((m, a) => (a.s > m.s ? a : m), agents[0]);
    return { agents, star };
  }, []);

  const [defended, setDefended] = useState(false);
  const R = 0.24;
  const isNeighbor = (a: { x: number; y: number }) =>
    Math.hypot(a.x - data.star.x, a.y - data.star.y) < R;

  const sx = (x: number) => 30 + x * (W - 60);
  const sy = (y: number) => 18 + y * (H - 44);

  return (
    <div>
      <div className="flex items-center gap-3 mb-3">
        <FigButton onClick={() => setDefended(true)} active={defended}>
          apply defense
        </FigButton>
        <FigButton onClick={() => setDefended(false)}>reset</FigButton>
        <span className="inline-flex items-center gap-2 font-mono text-[11px] text-brand-muted ml-auto">
          color = predicted susceptibility
          <svg width={64} height={8}>
            <defs>
              <linearGradient id="suscGrad" x1="0" x2="1">
                <stop offset="0" stopColor={STEEL} />
                <stop offset="1" stopColor={AMBER} />
              </linearGradient>
            </defs>
            <rect width={64} height={8} rx={4} fill="url(#suscGrad)" />
          </svg>
        </span>
      </div>
      <svg viewBox={`0 0 ${W} ${H}`} className="w-full rounded-xl border border-hairline bg-mist">
        {defended && (
          <circle
            cx={sx(data.star.x)}
            cy={sy(data.star.y)}
            r={(R * (W - 60) + R * (H - 44)) / 2}
            fill={GREEN}
            opacity={0.07}
            stroke={GREEN}
            strokeDasharray="4 4"
            strokeOpacity={0.5}
          />
        )}
        {data.agents.map((a) => {
          const shielded = defended && isNeighbor(a);
          const fill = shielded ? lerpColor(STEEL, AMBER, a.s * 0.2) : lerpColor(STEEL, AMBER, a.s);
          return (
            <g key={a.id}>
              {shielded && (
                <circle cx={sx(a.x)} cy={sy(a.y)} r={9} fill="none" stroke={GREEN} strokeWidth={1.4} opacity={0.8} />
              )}
              <circle cx={sx(a.x)} cy={sy(a.y)} r={5} fill={fill} style={{ transition: "fill 600ms" }} />
            </g>
          );
        })}
        {/* star = most vulnerable */}
        <text
          x={sx(data.star.x)}
          y={sy(data.star.y) - 10}
          textAnchor="middle"
          fontSize={13}
          fill={defended ? GREEN : AMBER}
        >
          ★
        </text>
      </svg>
    </div>
  );
};

/* ================================================================
   the page
================================================================ */
const Kicker = ({ children }: { children: React.ReactNode }) => (
  <div className="font-mono text-[13px] text-steel tracking-wide mt-16 mb-3">{children}</div>
);

const H2 = ({ children }: { children: React.ReactNode }) => (
  <h2 className="font-grotesk text-2xl md:text-3xl font-semibold text-midnight mb-4">{children}</h2>
);

const Body = ({ children }: { children: React.ReactNode }) => (
  <p className="text-[#2B3A5C] text-base md:text-[17px] leading-relaxed mb-4">{children}</p>
);

const Observation = ({ n, title, children }: { n: string; title: string; children: React.ReactNode }) => (
  <div className="flex gap-4 py-3 border-b border-hairline last:border-b-0">
    <span className="font-mono text-sm text-steel shrink-0 pt-0.5">{n}</span>
    <p className="text-[#2B3A5C] text-base leading-relaxed">
      <b className="text-midnight font-semibold">{title}</b> {children}
    </p>
  </div>
);

export default function ThesisPage() {
  return (
    <div className="flex w-full min-h-screen bg-mist flex-col">
      <Header />

      <main className="w-full max-w-[46rem] mx-auto px-5 py-16 md:py-24 flex-1">
        {/* title */}
        <div className="font-mono text-[13px] text-brand-muted mb-4">the helivan thesis</div>
        <h1 className="font-grotesk text-3xl md:text-5xl font-semibold text-midnight leading-[1.15] tracking-tight">
          the world is filling with ai agents. someone has to understand them
          <span className="text-drift-amber">.</span>
        </h1>
        <p className="text-[#2B3A5C] text-lg md:text-xl leading-relaxed mt-6">
          helivan builds the instruments: statistical tools for evaluating and monitoring
          populations of generative agents. if it can be queried, it can be measured. the
          figures below actually behave — poke at them.
        </p>

        {/* 00 */}
        <Kicker>00 · why this needs a science</Kicker>
        <Body>
          every population that matters gets a science. people got epidemiology. economies got
          national accounts. the weather got the weather service. ai agents — already answering
          customers, writing software, moving money — are next. so far, they run unmeasured.
        </Body>
        <Body>
          you don&apos;t need to see inside something to understand it. we never see inside each
          other — we know people by what they do. the same works for machines, rigorously.
        </Body>

        {/* 01 */}
        <Kicker>01 · four observations</Kicker>
        <Body>everything we build follows from four plain observations.</Body>
        <div className="my-6">
          <Observation n="01" title="you can't look inside.">
            agents sit behind an api: you ask, they answer. everything else is hidden.
          </Observation>
          <Observation n="02" title="the model isn't the agent.">
            behavior comes from the whole package — model, instructions, data, tools. change any
            piece and you have a different agent.
          </Observation>
          <Observation n="03" title="agents don't sit still.">
            every interaction nudges their state, and their behavior moves with it.
          </Observation>
          <Observation n="04" title="agents are related.">
            they share models, prompts, and tools. measure one and you&apos;ve learned about its
            relatives.
          </Observation>
        </div>
        <Body>
          together, the object we study:{" "}
          <b className="text-midnight font-semibold">
            a population of agents, knowable only through its behavior.
          </b>{" "}
          its members may or may not interact.
        </Body>

        <Figure
          tag="fig 1 · interactive"
          title="a population of agents"
          subtitle="interaction is optional; statistics are not."
          caption={
            <>
              a quiet fleet is a population. a delegation pipeline is a population. so is a vendor
              shortlist. and when agents interact, they change each other — one more reason to
              watch the whole.
            </>
          }
        >
          <Fig1 />
        </Figure>

        <Body>
          we say <i>agent</i> throughout. a model on its own is the simplest agent; everything
          here applies to it too.
        </Body>

        {/* 02 */}
        <Kicker>02 · a map of behavior</Kicker>
        <Body>
          our core move: ask every agent the same questions, compare the answers. alike lands
          close; different lands far. the population becomes a map — the behavioral geometry.
        </Body>
        <Body>
          a benchmark crushes the map to one number per agent. the map remembers what the number
          forgets — including when two identical scores are two very different agents.
        </Body>
        <Body>
          the map has a time axis, too. keep measuring, and each agent traces out its own normal
          range:
        </Body>

        <Figure
          tag="fig 2 · real data + interactive"
          title="one map, three views"
          subtitle="scores, places, and trajectories — the same population."
          caption={
            <>
              100 agents: one base model, 100 system prompts. color = score, shape = prompt type.
              benchmark collapses everything onto one axis; the map shows same-type agents
              clustering — same score, different agents. over time follows five inside their
              normal regions (positions real, measured with Quench; trajectories illustrative).{" "}
              <a
                href="https://quench.helivan.io"
                target="_blank"
                rel="noopener noreferrer"
                className="text-steel underline hover:text-midnight"
              >
                explore this run ↗
              </a>
            </>
          }
        >
          <Fig2 />
        </Figure>

        <Body>
          abnormal only means something once you know normal. the map learns normal, per agent.
          and because relatives inform each other (observation 04), placing a new agent takes a
          handful of questions — cents, not dollars. cheap enough to never stop looking.
        </Body>

        {/* 03 */}
        <Kicker>03 · noticing change</Kicker>
        <Body>
          agents change constantly — updates, new tools, new data, occasionally an attack. most
          changes are fine. the job is catching the ones that aren&apos;t, with receipts: which
          agent, how big, when.
        </Body>

        <Figure
          tag="fig 3 · interactive"
          title="drift through the geometry"
          subtitle="catching a prompt-injected agent as it leaves its population. watch the logo."
          caption={
            <>
              five agents, re-measured continuously — what AgentWatch automates. at t ≈ 45 one is
              prompt-injected and crosses the band; a signal fires (so does our logo).
              intervention at t ≈ 70 brings it home — recovery verified by the same measurement.
              illustrative.
            </>
          }
        >
          <Fig3 />
        </Figure>

        <Body>
          then fix it — roll back, restore, quarantine — and the instrument that raised the alarm
          confirms the fix took.
        </Body>

        {/* 04 */}
        <Kicker>04 · safety, before the incident</Kicker>
        <Body>
          detection reacts. the map predicts. whether an agent can be jailbroken is a behavior,
          and behaviors show up on the map: where an agent sits predicts how vulnerable it is —
          before anyone attacks it.
        </Body>
        <Body>
          and fixes spread the way weaknesses do: a defense built for one agent protects the
          agents that behave like it. patch one, protect the neighborhood.
        </Body>

        <Figure
          tag="fig 4 · interactive"
          title="susceptibility and defense transfer"
          subtitle="predict who's vulnerable; patch one, protect the neighbors."
          caption={
            <>
              susceptibility predicted from position alone (amber high, steel low) — no attacks
              run. defending the most vulnerable agent (★) shields its behavioral neighbors:
              defense transfer. illustrative;{" "}
              <Link href="/research" className="text-steel underline hover:text-midnight">
                see the research
              </Link>
              .
            </>
          }
        >
          <Fig4 />
        </Figure>

        {/* 05 */}
        <Kicker>05 · the same three questions, everywhere</Kicker>
        <Body>
          safety teams, platform teams, procurement, auditors, regulators, labs — the questions
          are always the same three:{" "}
          <b className="text-midnight font-semibold">
            what is this agent, has it changed, compared to what?
          </b>
        </Body>
        <ul className="my-5 space-y-2.5">
          {[
            ["a provider silently updates the base model.", "which of your agents changed, and by how much?"],
            ["two vendors claim equivalent capability.", "one map shows whether they behave alike."],
            ["a coding agent gets a new tool.", "is it still the agent you audited?"],
            ["one agent is hardened against a jailbreak family.", "defense transfer extends the fix to its neighbors."],
            ["a pipeline degrades.", "the map localizes which member drifted, and when."],
            ["a model behind an api.", "does today's model behave like the one you evaluated?"],
          ].map(([q, a], i) => (
            <li key={i} className="flex gap-3 text-[#2B3A5C] text-base leading-relaxed">
              <span className="text-steel shrink-0 pt-1">
                <svg width={10} height={10} viewBox="0 0 10 10">
                  <circle cx={5} cy={5} r={2.5} fill="currentColor" />
                </svg>
              </span>
              <span>
                <b className="text-midnight font-medium">{q}</b> {a}
              </span>
            </li>
          ))}
        </ul>
        <Body>one map, one set of statistics, all of them.</Body>

        {/* 06 */}
        <Kicker>06 · where this goes</Kicker>
        <Body>
          measurement becomes a permanent layer of the ai economy — as unremarkable, and as
          load-bearing, as the weather service. shared maps. public baselines. instruments anyone
          can point at any agent, no permission required.
        </Body>
        <Body>
          getting there is a science as much as a product. the methods are published, the
          benchmarks open, the tools ship as the papers do.
        </Body>

        {/* 07 */}
        <Kicker>07 · what we hold to</Kicker>
        <div className="my-6">
          <Observation n="01" title="observe behavior, not architecture.">
            every agent is a black box; we study what it does — all that reaches the world, and
            all that scales.
          </Observation>
          <Observation n="02" title="represent before you judge.">
            the map comes before any metric. a score is a question you ask of the map, not a
            substitute for it.
          </Observation>
          <Observation n="03" title="measure with valid inference.">
            claims of change earn a hypothesis test. we quantify uncertainty rather than narrate
            it — hence the error bars in our logo.
          </Observation>
          <Observation n="04" title="watch continuously.">
            a snapshot is not safety. behavior is a trajectory; keep an instrument on it.
          </Observation>
          <Observation n="05" title="make looking cheap.">
            measurement that is too costly to repeat protects no one. we drive the price of
            looking down until looking is the default.
          </Observation>
        </div>

        <p className="text-midnight text-lg md:text-xl font-medium leading-relaxed mt-10">
          the agents will keep changing. our work is to make sure that when they do, someone is
          measuring it.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mt-10">
          <Link
            href="/apps"
            className="inline-flex items-center justify-center px-6 py-3.5 bg-steel text-white font-medium rounded-xl hover:bg-steel-deep transition-all duration-300"
          >
            explore the apps
          </Link>
          <Link
            href="/research"
            className="inline-flex items-center justify-center px-6 py-3.5 bg-white border border-hairline text-steel font-medium rounded-xl hover:border-steel transition-all duration-300"
          >
            read the research
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
