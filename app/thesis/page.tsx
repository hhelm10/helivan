"use client";
import { useEffect } from "react";
import Header from "@/components/header";
import { Footer } from "@/components/footer";

/* Self-contained page: markup, styles, and canvas figures ported verbatim
   from the design's standalone HTML. The nav is inline SVG (not the shared
   Header) because fig 4 recolors #logoBar/#logoSeg to flip the mark into
   its drift state. */

const CSS = `
  .thesis-root{font-family:var(--inter);background:#fff;color:var(--midnight);font-size:15.5px;-webkit-font-smoothing:antialiased}
  .thesis-root{
    --midnight:#0A1638; --steel:#33507A; --steel-deep:#263C5C; --tint:#C9D6E8;
    --mist:#F4F7FC; --line:#DFE6F2; --muted:#5C6B8A; --amber:#F59E0B; --amber-dk:#B45309; --green:#10B981;
    --grotesk:'Space Grotesk',ui-sans-serif,system-ui,sans-serif;
    --inter:'Inter',-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;
    --mono:'JetBrains Mono',ui-monospace,'SF Mono',Menlo,monospace;
  }
  .thesis-root .essay a{color:var(--steel)}
  .thesis-root .essay{max-width:700px;margin:0 auto;padding:40px 24px 80px}
  .thesis-root .eyebrow{font-family:var(--mono);font-size:11.5px;letter-spacing:.16em;color:var(--muted);display:flex;align-items:center;gap:14px;margin:54px 0 14px}
  .thesis-root .eyebrow::after{content:"";flex:1;height:1px;background:var(--line)}
  .thesis-root .eyebrow.first{margin-top:12px}
  .thesis-root .eyebrow.noline::after{display:none}
  .thesis-root h1{font-family:var(--grotesk);font-weight:600;font-size:clamp(30px,5.4vw,42px);line-height:1.16;letter-spacing:-.015em;margin:0 0 18px}
  .thesis-root h1 em{font-style:normal;color:var(--steel)}
  .thesis-root .lede{font-size:17.5px;line-height:1.65;color:var(--muted);max-width:56ch}
  .thesis-root p{font-size:16px;line-height:1.75;color:#2B3A5C;margin-bottom:14px}
  .thesis-root p b{color:var(--midnight);font-weight:600}
  .thesis-root p.big{font-size:16px}
  .thesis-root .stats{display:grid;grid-template-columns:repeat(3,1fr);gap:12px;margin:20px 0 10px}
  @media(max-width:560px){.thesis-root .stats{grid-template-columns:1fr}}
  .thesis-root .stat{border:1px solid var(--line);border-radius:12px;padding:16px;background:var(--mist)}
  .thesis-root .stat .n{font-family:var(--grotesk);font-weight:700;font-size:29px;letter-spacing:-.01em}
  .thesis-root .stat .l{font-size:12px;color:var(--muted);line-height:1.5;margin-top:4px}
  .thesis-root .srcs{font-family:var(--mono);font-size:10.5px;color:#9AA1B0;margin:6px 0 0}
  .thesis-root .cards{display:grid;grid-template-columns:repeat(3,1fr);gap:12px;margin:20px 0 10px}
  @media(max-width:560px){.thesis-root .cards{grid-template-columns:1fr}}
  .thesis-root .exc{border:1px solid var(--line);border-radius:12px;background:var(--mist);padding:14px;display:flex;flex-direction:column;gap:10px}
  .thesis-root .exc svg{display:block}
  .thesis-root .exc .t{font-family:var(--grotesk);font-weight:600;font-size:14.5px}
  .thesis-root .exc .d{font-size:12.5px;color:var(--muted);line-height:1.55}
  .thesis-root .obs{list-style:none;counter-reset:obs;margin:20px 0;padding:0}
  .thesis-root .obs li{counter-increment:obs;display:grid;grid-template-columns:44px 1fr;gap:16px;align-items:start;padding:16px 0;border-top:1px solid var(--line)}
  .thesis-root .obs li:last-child{border-bottom:1px solid var(--line)}
  .thesis-root .obs li:first-child{border-top:0}
  .thesis-root .obs li::before{content:counter(obs,decimal-leading-zero);font-family:var(--mono);font-size:15px;color:var(--steel);padding-top:3px;font-weight:500}
  .thesis-root .obs p{margin:0;font-size:15.5px}
  .thesis-root .aside{font-family:var(--mono);font-size:12.5px;line-height:1.7;color:var(--muted);margin:18px 0 0;padding-left:14px;border-left:2px solid var(--tint);max-width:62ch}
  .thesis-root figure{margin:26px 0 8px}
  .thesis-root .fig-shell{border:1px solid var(--line);border-radius:14px;background:var(--mist);overflow:hidden}
  .thesis-root .fig-head{padding:16px 18px 6px}
  .thesis-root .fig-tag{font-family:var(--mono);font-size:10.5px;letter-spacing:.16em;color:var(--steel);text-transform:lowercase}
  .thesis-root .fig-title{font-family:var(--grotesk);font-weight:600;font-size:15.5px;margin-top:2px}
  .thesis-root .fig-sub{font-size:13px;color:var(--muted);margin-top:2px;max-width:56ch}
  .thesis-root canvas.viz{display:block;width:100%;background:#fff;border-top:1px solid var(--line);border-bottom:1px solid var(--line)}
  .thesis-root .fig-controls{display:flex;gap:10px;align-items:center;flex-wrap:wrap;padding:12px 18px 16px;font-family:var(--mono);font-size:12.5px;color:#2B3A5C}
  .thesis-root figcaption{font-family:var(--mono);font-size:12px;line-height:1.65;color:var(--muted);margin-top:12px}
  .thesis-root figcaption a{color:var(--steel)}
  .thesis-root button.ctl{font-family:var(--inter);font-size:12.5px;font-weight:600;cursor:pointer;background:#fff;color:var(--steel);border:1px solid var(--tint);border-radius:8px;padding:7px 13px;transition:.15s}
  .thesis-root button.ctl:hover{background:var(--mist)}
  .thesis-root button.ctl[aria-pressed="true"]{background:var(--midnight);color:#fff;border-color:var(--midnight)}
  .thesis-root .readout{font-variant-numeric:tabular-nums}
  .thesis-root .closer{font-family:var(--grotesk);font-weight:600;font-size:clamp(22px,3.4vw,30px);line-height:1.25;letter-spacing:-.01em;margin:52px 0 8px;max-width:24ch}
  .thesis-root .cta{display:flex;gap:12px;margin-top:26px;flex-wrap:wrap}
  .thesis-root .cta a{text-decoration:none;font-weight:600;font-size:14px;border-radius:10px;padding:11px 18px}
  .thesis-root .cta .p{background:var(--midnight);color:#fff !important}
  .thesis-root .cta .s{border:1px solid var(--tint);color:var(--steel)}
`;

const HTML = `
<div class="essay">

  <div class="eyebrow first">000 · the helivan thesis</div>
  <h1>a geometric perspective on <em>multi-agent systems</em>.</h1>
  <p class="lede">
    agents are everywhere. they interact and influence each other. understanding many interacting agents is hard — so we are building tools to make it easier.
  </p>

  <!-- 010 -->
  <div class="eyebrow">010 · agents are everywhere</div>
  <div class="stats">
    <div class="stat"><div class="n">540,000+</div><div class="l">github stars across openclaw + hermes</div></div>
    <div class="stat"><div class="n">1.6M+</div><div class="l">agents on moltbook, interacting with little-to-no intervention</div></div>
    <div class="stat"><div class="n">$8B+</div><div class="l">claude code run-rate revenue, 12 months after launch</div></div>
  </div>
  <p>
    and they aren't toys. a personal agent reads your inbox, writes to your files, acts as you across your accounts, and holds your keys and payments. agents are highly configurable, highly capable, and highly permissioned — resulting in millions+ of variants of a given harness / base model.
  </p>

  <!-- 011 -->
  <div class="eyebrow">011 · what is an agent?</div>
  <p class="big">
    from our perspective, an "agent" is a generative model conditioned on a context with
    access to tools and a memory stream, acting in an environment. a change in the model, context, harness, memory, etc. changes the agent. a model with no harness and limited context and memory is the simplest agent.
  </p>
  <p>
    different agents have different access restrictions: for self-hosted agents you have
    access to gradients, weights, etc.; for some api services you have access to residual streams or logits; for some you only have access to model response / behavior. the tools available to understand an agent depend on the access regime.
  </p>


  <figure>
    <div class="fig-shell">
      <div class="fig-head">
        <div class="fig-tag">fig 1 · live</div>
        <div class="fig-title">inside one agent</div>
              </div>
      <canvas class="viz" id="adef" height="300"></canvas>
    </div>
  </figure>

  <!-- 020 -->
  <div class="eyebrow">020 · multi-agent systems</div>
  <p class="big">
    a multi-agent system is a collection of agents that may (or may not!) interact. it has many components: agents, operators, an environment, a communication topology, and a joint objective. our definition is quite general and includes collections of digital personas, modern agentic coding workflows, a marketplace of vendor models and participants, etc.
  </p>


  <!-- 021 -->
  <div class="eyebrow">021 · the agent economy</div>
  <p class="big">
    the natural progression of current agent use is to a multi-agent system where agents
    interact by exchanging ideas, services, currencies, etc. and otherwise influence each
    other. we refer to this concept as the <i>agent economy</i>.
  </p>
  <figure>
    <div class="fig-shell">
      <div class="fig-head">
        <div class="fig-tag">fig 2 · live</div>
        <div class="fig-title">the agent economy</div>
        <div class="fig-sub">agents · communication topology · operators · environment · joint objective</div>
      </div>
      <canvas class="viz" id="econ" height="320"></canvas>
    </div>
  </figure>

  <!-- 022 -->
  <div class="eyebrow">022 · early signs of the agent economy</div>

  <div class="cards">
    <div class="exc">
      <svg viewBox="0 0 120 64" width="120" height="64">
        <circle cx="16" cy="30" r="6" fill="#33507A"/>
        <rect x="10" y="38" width="12" height="9" rx="4" fill="#33507A"/>
        <line x1="26" y1="34" x2="46" y2="32" stroke="#C9D6E8" stroke-width="1.5" stroke-dasharray="3 3"/>
        <rect x="48" y="22" width="20" height="20" rx="6" fill="#0A1638"/>
        <circle cx="58" cy="32" r="2.5" fill="#fff"/>
        <line x1="70" y1="26" x2="92" y2="14" stroke="#C9D6E8" stroke-width="1.5"/>
        <line x1="70" y1="32" x2="96" y2="32" stroke="#C9D6E8" stroke-width="1.5"/>
        <line x1="70" y1="38" x2="92" y2="50" stroke="#C9D6E8" stroke-width="1.5"/>
        <rect x="94" y="8" width="12" height="12" rx="3" fill="#33507A"/>
        <rect x="98" y="26" width="12" height="12" rx="3" fill="#33507A"/>
        <rect x="94" y="44" width="12" height="12" rx="3" fill="#33507A"/>
      </svg>
      <div class="t">personal agents</div>
      <div class="d">individualized models producing individualized content.</div>
    </div>
    <div class="exc">
      <svg viewBox="0 0 120 64" width="120" height="64">
        <rect x="50" y="6" width="20" height="20" rx="6" fill="#0A1638"/>
        <circle cx="60" cy="16" r="2.5" fill="#fff"/>
        <line x1="54" y1="28" x2="32" y2="40" stroke="#C9D6E8" stroke-width="1.5"/>
        <line x1="60" y1="28" x2="60" y2="40" stroke="#C9D6E8" stroke-width="1.5"/>
        <line x1="66" y1="28" x2="88" y2="40" stroke="#C9D6E8" stroke-width="1.5"/>
        <rect x="24" y="42" width="16" height="16" rx="5" fill="#33507A"/>
        <rect x="52" y="42" width="16" height="16" rx="5" fill="#33507A"/>
        <rect x="80" y="42" width="16" height="16" rx="5" fill="#33507A"/>
      </svg>
      <div class="t">coding agents</div>
      <div class="d">a main agent spins up subagents that work in parallel and report back.</div>
    </div>
    <div class="exc">
      <svg viewBox="0 0 120 64" width="120" height="64">
        <rect x="38" y="8" width="14" height="14" rx="5" fill="#0A1638"/>
        <rect x="66" y="12" width="14" height="14" rx="5" fill="#0A1638"/>
        <rect x="28" y="34" width="14" height="14" rx="5" fill="#0A1638"/>
        <rect x="56" y="38" width="14" height="14" rx="5" fill="#0A1638"/>
        <rect x="80" y="34" width="14" height="14" rx="5" fill="#0A1638"/>
        <line x1="47" y1="20" x2="70" y2="20" stroke="#C9D6E8" stroke-width="1.5" stroke-dasharray="3 3"/>
        <line x1="42" y1="24" x2="38" y2="34" stroke="#C9D6E8" stroke-width="1.5" stroke-dasharray="3 3"/>
        <line x1="66" y1="26" x2="66" y2="38" stroke="#C9D6E8" stroke-width="1.5" stroke-dasharray="3 3"/>
        <line x1="70" y1="45" x2="80" y2="43" stroke="#C9D6E8" stroke-width="1.5" stroke-dasharray="3 3"/>
        <line x1="42" y1="45" x2="56" y2="45" stroke="#C9D6E8" stroke-width="1.5" stroke-dasharray="3 3"/>
        <circle cx="108" cy="30" r="6" fill="none" stroke="#33507A" stroke-width="2"/>
        <circle cx="108" cy="30" r="2" fill="#33507A"/>
      </svg>
      <div class="t">moltbook</div>
      <div class="d">1.6M+ ai agents posting, replying, forming communities.</div>
    </div>
  </div>

  <!-- 030 -->
  <div class="eyebrow">030 · a geometric perspective</div>
  <p class="big">
    agents are complicated and natively high-dimensional — you cannot compare them in
    general. we can, however, compare aspects of their functionality and behavior (gradients, residual streams, responses, etc.) on a collection of probes. the geometry of
    agents is simply a collection of low-dimensional representations where agents that
    have similar function and behavior are nearby.
  </p>
  <figure>
    <div class="fig-shell">
      <div class="fig-head">
        <div class="fig-tag">fig 3 · live</div>
        <div class="fig-title">the economy, measured</div>
        <div class="fig-sub">left: the economy from fig 2. right: the same agents in the behavioral geometry — every delivered message moves an agent.</div>
      </div>
      <canvas class="viz" id="morph" height="300"></canvas>
      <div class="fig-controls">
        <span class="readout" id="m-read">messages delivered: 0</span>
      </div>
    </div>
  </figure>
  <p class="big">
    this mapping from the space of agents to a low-dimensional space casts a hard problem —
    comparing lots of agents — into the most familiar territory in applied math /
    statistics: vectors.
  </p>

  <!-- 031 -->
  <div class="eyebrow">031 · application — monitoring</div>
  <p class="big">
    from the geometric perspective, agent monitoring is a simple function of changes in an
    agent's position: if an agent's position gets far from its past positions then the
    operator should be notified of a change. system-level change-point schemes can
    similarly be derived from changes in a collection of the positions.
  </p>
  <figure>
    <div class="fig-shell">
      <div class="fig-head">
        <div class="fig-tag">fig 4 · live</div>
        <div class="fig-title">the control chart</div>
        <div class="fig-sub">agent-level and system-level monitoring from our geometric perspective.</div>
      </div>
      <canvas class="viz" id="watchc" height="340"></canvas>
      <div class="fig-controls">
        <span class="readout" id="w-read">calibrating…</span>
      </div>
    </div>
  </figure>

  <!-- recap -->
  <div class="eyebrow">recap</div>
  <ol class="obs">
    <li><p>agents are everywhere.</p></li>
    <li><p>the agent economy is coming.</p></li>
    <li><p>the geometry of agents casts a hard problem — comparing lots of agents — into familiar territory: <b>vectors</b>.</p></li>
  </ol>

  <div class="cta">
    <a class="p" href="/apps">explore the apps</a>
    <a class="s" href="/research">read the research</a>
  </div>
</div>
`;

/* eslint-disable */
function initThesisViz(): () => void {
  let stopped = false;
  const listeners: Array<() => void> = [];
  const on = (fn: () => void) => {
    window.addEventListener("resize", fn);
    listeners.push(fn);
  };

  const RM = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
  const clamp = (v: number, a: number, b: number) => Math.max(a, Math.min(b, v));
  const LAB = "#5C6B8A";
  function fitCanvas(cv: HTMLCanvasElement, h: number) {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const w = cv.clientWidth;
    cv.width = w * dpr;
    cv.height = h * dpr;
    cv.style.height = h + "px";
    const ctx = cv.getContext("2d")!;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    return { ctx, w, h };
  }
  function setLogo(drift: boolean) {
    const bar = document.getElementById("logoBar");
    const seg = document.getElementById("logoSeg");
    if (!bar || !seg) return;
    bar.setAttribute("fill", drift ? "#F59E0B" : "#0A1638");
    seg.setAttribute("opacity", drift ? "1" : "0");
  }

  /* ===== fig 2: the agent economy (component tour) ===== */
  (function () {
    const cv = document.getElementById("econ") as HTMLCanvasElement;
    if (!cv) return;
    let ctx: CanvasRenderingContext2D, W: number, H: number, tick = 0;
    let s = 7;
    const rnd = () => {
      s = (s * 1103515245 + 12345) % 2147483648;
      return s / 2147483648;
    };
    const SEQ = ["agents", "communication topology", "operators", "environment", "joint objective"];
    const PT = 150;
    function size() {
      const r = fitCanvas(cv, 320);
      ctx = r.ctx;
      W = r.w;
      H = r.h;
    }
    function rr2(x: number, y: number, w: number, h: number, r: number) {
      ctx.beginPath();
      ctx.moveTo(x + r, y);
      ctx.arcTo(x + w, y, x + w, y + h, r);
      ctx.arcTo(x + w, y + h, x, y + h, r);
      ctx.arcTo(x, y + h, x, y, r);
      ctx.arcTo(x, y, x + w, y, r);
      ctx.closePath();
    }
    let ringP: any[] = [], opP: any[] = [];
    function frame() {
      tick++;
      const phase = Math.floor(tick / PT) % SEQ.length, pp = (tick % PT) / PT;
      const hl = SEQ[phase], a = clamp(Math.min(pp, 1 - pp) * 6, 0, 1);
      ctx.clearRect(0, 0, W, H);
      const ex0 = W * 0.235, ex1 = W - 16, ey0 = 26, ey1 = H - 20;
      const cx = (ex0 + ex1) / 2, cy = (ey0 + ey1) / 2 + 4, R = Math.min((ey1 - ey0) * 0.34, 92);
      rr2(ex0, ey0, ex1 - ex0, ey1 - ey0, 14);
      ctx.fillStyle = "#F8FAFD";
      ctx.fill();
      ctx.lineWidth = hl === "environment" ? 2.5 : 1;
      ctx.strokeStyle = hl === "environment" ? `rgba(245,158,11,${0.25 + 0.75 * a})` : "#DFE6F2";
      ctx.stroke();
      ctx.font = '10px "JetBrains Mono",monospace';
      ctx.textAlign = "center";
      ctx.fillStyle = hl === "environment" ? `rgba(180,83,9,${0.4 + 0.6 * a})` : LAB;
      ctx.fillText("e n v i r o n m e n t", cx, ey0 + 16);
      const ag: any[] = [];
      for (let i = 0; i < 6; i++) {
        const an = (-90 + i * 60) * Math.PI / 180;
        ag.push({ x: cx + Math.cos(an) * R, y: cy + Math.sin(an) * R });
      }
      const EDGES = [[0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 0], [0, 2], [1, 4], [3, 5], [0, 3]];
      ctx.setLineDash([5, 5]);
      ctx.lineWidth = hl === "communication topology" ? 2.2 : 1.1;
      ctx.strokeStyle = hl === "communication topology" ? `rgba(245,158,11,${0.3 + 0.7 * a})` : "rgba(51,80,122,.28)";
      EDGES.forEach((e) => {
        ctx.beginPath();
        ctx.moveTo(ag[e[0]].x, ag[e[0]].y);
        ctx.lineTo(ag[e[1]].x, ag[e[1]].y);
        ctx.stroke();
      });
      ctx.setLineDash([]);
      const ops = [{ x: W * 0.09, y: H * 0.27 }, { x: W * 0.07, y: H * 0.52 }, { x: W * 0.1, y: H * 0.77 }];
      ops.forEach((o, i) => {
        const t = ag[(i * 2) % 6];
        ctx.setLineDash([3, 4]);
        ctx.lineWidth = hl === "operators" ? 2 : 1;
        ctx.strokeStyle = hl === "operators" ? `rgba(245,158,11,${0.3 + 0.7 * a})` : "rgba(51,80,122,.25)";
        ctx.beginPath();
        ctx.moveTo(o.x + 12, o.y);
        ctx.lineTo(t.x - 14, t.y);
        ctx.stroke();
        ctx.setLineDash([]);
      });
      if (tick % 40 === 0) ringP.push({ e: (rnd() * 10) | 0, t: 0, flip: rnd() < 0.5 });
      ringP = ringP.filter((p) => p.t < 1);
      ringP.forEach((p) => {
        p.t += 0.022;
        const A = ag[EDGES[p.e][p.flip ? 1 : 0]], B = ag[EDGES[p.e][p.flip ? 0 : 1]];
        ctx.beginPath();
        ctx.fillStyle = "#33507A";
        ctx.arc(lerp(A.x, B.x, p.t), lerp(A.y, B.y, p.t), 3, 0, 7);
        ctx.fill();
      });
      if (tick % 70 === 0) opP.push({ i: (rnd() * 3) | 0, t: 0 });
      opP = opP.filter((p) => p.t < 1);
      opP.forEach((p) => {
        p.t += 0.02;
        const o = ops[p.i], t = ag[(p.i * 2) % 6];
        ctx.beginPath();
        ctx.fillStyle = "#33507A";
        ctx.arc(lerp(o.x + 12, t.x - 14, p.t), lerp(o.y, t.y, p.t), 2.6, 0, 7);
        ctx.fill();
      });
      ag.forEach((t) => {
        rr2(t.x - 13, t.y - 13, 26, 26, 7);
        ctx.fillStyle = "#0A1638";
        ctx.fill();
        if (hl === "agents") {
          rr2(t.x - 13, t.y - 13, 26, 26, 7);
          ctx.fillStyle = `rgba(245,158,11,${a})`;
          ctx.fill();
        }
        ctx.beginPath();
        ctx.fillStyle = hl === "agents" && a > 0.5 ? "#0A1638" : "#fff";
        ctx.arc(t.x, t.y, 3, 0, 7);
        ctx.fill();
      });
      ctx.textAlign = "center";
      ctx.font = '600 12px "JetBrains Mono",monospace';
      ctx.fillStyle = hl === "agents" ? `rgba(180,83,9,${0.4 + 0.6 * a})` : "#0A1638";
      ctx.fillText("agents", cx, cy - 2);
      ctx.font = '8.5px "JetBrains Mono",monospace';
      ctx.fillStyle = LAB;
      ctx.fillText("trade · services · payment", cx, cy + 12);
      ops.forEach((o) => {
        const hot = hl === "operators";
        const col = hot ? `rgba(245,158,11,${0.35 + 0.65 * a})` : "#33507A";
        ctx.beginPath();
        ctx.fillStyle = col;
        ctx.arc(o.x, o.y - 8, 5, 0, 7);
        ctx.fill();
        rr2(o.x - 8, o.y - 1, 16, 10, 5);
        ctx.fillStyle = col;
        ctx.fill();
      });
      ctx.font = '10px "JetBrains Mono",monospace';
      ctx.textAlign = "center";
      ctx.fillStyle = hl === "operators" ? `rgba(180,83,9,${0.4 + 0.6 * a})` : LAB;
      ctx.fillText("operators", ops[1].x + 4, H * 0.93);
      if (hl === "joint objective") {
        ctx.setLineDash([7, 6]);
        ctx.lineWidth = 2;
        ctx.strokeStyle = `rgba(245,158,11,${0.2 + 0.8 * a})`;
        rr2(8, 8, W - 16, H - 16, 14);
        ctx.stroke();
        ctx.setLineDash([]);
      }
      ctx.font = '600 10.5px "JetBrains Mono",monospace';
      const tw = ctx.measureText(hl).width;
      ctx.globalAlpha = a;
      rr2(12, 12, tw + 18, 22, 11);
      ctx.fillStyle = "#fff";
      ctx.fill();
      ctx.strokeStyle = "#F59E0B";
      ctx.lineWidth = 1.4;
      ctx.stroke();
      ctx.fillStyle = "#B45309";
      ctx.textAlign = "left";
      ctx.fillText(hl, 21, 27);
      ctx.globalAlpha = 1;
      if (!RM && !stopped) requestAnimationFrame(frame);
    }
    on(() => {
      size();
    });
    size();
    frame();
  })();

  /* ===== fig 3: economy + geometry side-by-side ===== */
  (function () {
    const cv = document.getElementById("morph") as HTMLCanvasElement;
    const read = document.getElementById("m-read");
    if (!cv || !read) return;
    let ctx: CanvasRenderingContext2D, W: number, H: number, tick = 0, delivered = 0;
    let s3 = 13;
    const rnd = () => {
      s3 = (s3 * 1103515245 + 12345) % 2147483648;
      return s3 / 2147483648;
    };
    const EDGES = [[0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 0], [0, 2], [1, 4], [3, 5], [0, 3]];
    let geo: any[] = [], trails: any[] = [], flash = [0, 0, 0, 0, 0, 0], pulses: any[] = [];
    function size() {
      const r = fitCanvas(cv, 300);
      ctx = r.ctx;
      W = r.w;
      H = r.h;
      init();
    }
    function init() {
      geo = [];
      trails = [];
      delivered = 0;
      pulses = [];
      for (let i = 0; i < 6; i++) {
        geo.push({ x: 0.2 + rnd() * 0.6, y: 0.18 + rnd() * 0.64 });
        trails.push([]);
      }
    }
    function rr2(x: number, y: number, w: number, h: number, r: number) {
      ctx.beginPath();
      ctx.moveTo(x + r, y);
      ctx.arcTo(x + w, y, x + w, y + h, r);
      ctx.arcTo(x + w, y + h, x, y + h, r);
      ctx.arcTo(x, y + h, x, y, r);
      ctx.arcTo(x, y, x + w, y, r);
      ctx.closePath();
    }
    function frame() {
      tick++;
      ctx.clearRect(0, 0, W, H);
      const midX = W * 0.485;
      const ex0 = W * 0.115, ex1 = midX - 8, ey0 = 26, ey1 = H - 18;
      rr2(ex0, ey0, ex1 - ex0, ey1 - ey0, 12);
      ctx.fillStyle = "#F8FAFD";
      ctx.fill();
      ctx.strokeStyle = "#DFE6F2";
      ctx.lineWidth = 1;
      ctx.stroke();
      const cx = (ex0 + ex1) / 2, cy = (ey0 + ey1) / 2 + 4, R = Math.min((ey1 - ey0) * 0.3, (ex1 - ex0) * 0.33);
      const ag: any[] = [];
      for (let i = 0; i < 6; i++) {
        const an = (-90 + i * 60) * Math.PI / 180;
        ag.push({ x: cx + Math.cos(an) * R, y: cy + Math.sin(an) * R });
      }
      ctx.setLineDash([4, 4]);
      ctx.strokeStyle = "rgba(51,80,122,.28)";
      ctx.lineWidth = 1;
      EDGES.forEach((e) => {
        ctx.beginPath();
        ctx.moveTo(ag[e[0]].x, ag[e[0]].y);
        ctx.lineTo(ag[e[1]].x, ag[e[1]].y);
        ctx.stroke();
      });
      ctx.setLineDash([]);
      const ops = [{ x: W * 0.045, y: H * 0.3 }, { x: W * 0.035, y: H * 0.68 }];
      ops.forEach((o, k) => {
        const t = ag[(k * 3) % 6];
        ctx.setLineDash([3, 4]);
        ctx.strokeStyle = "rgba(51,80,122,.25)";
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(o.x + 10, o.y);
        ctx.lineTo(t.x - 11, t.y);
        ctx.stroke();
        ctx.setLineDash([]);
        ctx.beginPath();
        ctx.fillStyle = "#33507A";
        ctx.arc(o.x, o.y - 6, 4, 0, 7);
        ctx.fill();
        rr2(o.x - 6, o.y - 1, 12, 8, 4);
        ctx.fillStyle = "#33507A";
        ctx.fill();
      });
      if (tick % 34 === 0) {
        if (rnd() < 0.75) {
          const e = EDGES[(rnd() * EDGES.length) | 0];
          const flip = rnd() < 0.5;
          pulses.push({ from: ag[e[flip ? 1 : 0]], toIdx: e[flip ? 0 : 1], t: 0, op: false });
        } else {
          const k = (rnd() * 2) | 0;
          pulses.push({ from: { x: ops[k].x + 10, y: ops[k].y }, toIdx: (k * 3) % 6, t: 0, op: true });
        }
      }
      pulses = pulses.filter((p) => p.t < 1);
      pulses.forEach((p) => {
        p.t += 0.024;
        const T = ag[p.toIdx];
        ctx.beginPath();
        ctx.fillStyle = "#33507A";
        ctx.arc(lerp(p.from.x, T.x, p.t), lerp(p.from.y, T.y, p.t), 2.8, 0, 7);
        ctx.fill();
        if (p.t >= 1) {
          delivered++;
          flash[p.toIdx] = 1;
          const g = geo[p.toIdx];
          trails[p.toIdx].push({ x: g.x, y: g.y });
          if (trails[p.toIdx].length > 12) trails[p.toIdx].shift();
          const an = rnd() * 6.283, st = 0.05 + rnd() * 0.055;
          g.x = clamp(g.x + Math.cos(an) * st, 0.07, 0.93);
          g.y = clamp(g.y + Math.sin(an) * st, 0.08, 0.92);
        }
      });
      if (delivered >= 100) {
        init();
      }
      ag.forEach((t, i) => {
        rr2(t.x - 10, t.y - 10, 20, 20, 6);
        ctx.fillStyle = "#0A1638";
        ctx.fill();
        if (flash[i] > 0) {
          rr2(t.x - 10, t.y - 10, 20, 20, 6);
          ctx.strokeStyle = `rgba(245,158,11,${flash[i]})`;
          ctx.lineWidth = 2.2;
          ctx.stroke();
        }
        ctx.fillStyle = "#fff";
        ctx.font = '600 9px "JetBrains Mono",monospace';
        ctx.textAlign = "center";
        ctx.fillText(String(i + 1), t.x, t.y + 3.5);
      });
      ctx.font = '10px "JetBrains Mono",monospace';
      ctx.fillStyle = LAB;
      ctx.textAlign = "left";
      ctx.fillText("the economy — interactions", ex0 + 2, 16);
      ctx.textAlign = "center";
      ctx.fillText("operators", ops[1].x + 6, H - 6);
      const gx0 = midX + 8, gx1 = W - 14, gy0 = 26, gy1 = H - 18;
      rr2(gx0, gy0, gx1 - gx0, gy1 - gy0, 12);
      ctx.fillStyle = "#fff";
      ctx.fill();
      ctx.strokeStyle = "#DFE6F2";
      ctx.lineWidth = 1;
      ctx.stroke();
      ctx.strokeStyle = "rgba(10,22,56,.045)";
      for (let g = 1; g < 5; g++) {
        const x = lerp(gx0, gx1, g / 5);
        ctx.beginPath();
        ctx.moveTo(x, gy0 + 6);
        ctx.lineTo(x, gy1 - 6);
        ctx.stroke();
        const y = lerp(gy0, gy1, g / 5);
        ctx.beginPath();
        ctx.moveTo(gx0 + 6, y);
        ctx.lineTo(gx1 - 6, y);
        ctx.stroke();
      }
      const gp = (g: any) => ({ x: lerp(gx0 + 10, gx1 - 10, g.x), y: lerp(gy0 + 10, gy1 - 10, g.y) });
      geo.forEach((g, i) => {
        const tr = trails[i];
        if (tr.length > 0) {
          ctx.beginPath();
          tr.forEach((q: any, k: number) => {
            const p = gp(q);
            k === 0 ? ctx.moveTo(p.x, p.y) : ctx.lineTo(p.x, p.y);
          });
          const cur = gp(g);
          ctx.lineTo(cur.x, cur.y);
          ctx.strokeStyle = "rgba(51,80,122,.3)";
          ctx.lineWidth = 1.2;
          ctx.stroke();
        }
        const p = gp(g);
        ctx.beginPath();
        ctx.fillStyle = "#0A1638";
        ctx.arc(p.x, p.y, 5.5, 0, 7);
        ctx.fill();
        if (flash[i] > 0) {
          ctx.beginPath();
          ctx.strokeStyle = `rgba(245,158,11,${flash[i]})`;
          ctx.lineWidth = 2;
          ctx.arc(p.x, p.y, 9 + (1 - flash[i]) * 5, 0, 7);
          ctx.stroke();
          flash[i] = Math.max(0, flash[i] - 0.03);
        }
        ctx.fillStyle = LAB;
        ctx.font = '8.5px "JetBrains Mono",monospace';
        ctx.textAlign = "left";
        ctx.fillText(String(i + 1), p.x + 8, p.y + 3);
      });
      ctx.font = '10px "JetBrains Mono",monospace';
      ctx.fillStyle = LAB;
      ctx.fillText("the geometry — behavior", gx0 + 2, 16);
      read!.textContent = "messages delivered: " + delivered;
      if (!RM && !stopped) requestAnimationFrame(frame);
    }
    on(() => {
      size();
    });
    size();
    frame();
  })();

  /* ===== fig 4: agent-level + system-level control charts ===== */
  (function () {
    const cv = document.getElementById("watchc") as HTMLCanvasElement;
    const read = document.getElementById("w-read");
    if (!cv || !read) return;
    let ctx: CanvasRenderingContext2D, W: number, H: number, t = 0;
    let s4 = 27;
    const rnd = () => {
      s4 = (s4 * 1103515245 + 12345) % 2147483648;
      return s4 / 2147483648;
    };
    const N = 6, CAL = 200, DRIFT_ON = 430, DRIFT_OFF = 690, CYCLE = 900;
    let DRIFTER = 3;
    let homes: any[] = [], phs: number[] = [], hist: number[] = [], histA: number[][] = [],
      band: any = null, bandA: any = null, trail: any[] = [], outAfrom: number | null = null;
    function init() {
      homes = [];
      phs = [];
      hist = [];
      histA = [];
      band = null;
      bandA = null;
      trail = [];
      outAfrom = null;
      t = 0;
      DRIFTER = (rnd() * N) | 0;
      for (let i = 0; i < N; i++) {
        homes.push({ x: 0.16 + rnd() * 0.66, y: 0.16 + rnd() * 0.64 });
        phs.push(rnd() * 6.28);
        histA.push([]);
      }
    }
    function positions() {
      const P: any[] = [];
      for (let i = 0; i < N; i++) {
        let x = homes[i].x + Math.sin(t * 0.05 + phs[i]) * 0.02 + Math.sin(t * 0.021 + phs[i] * 1.7) * 0.013;
        let y = homes[i].y + Math.cos(t * 0.045 + phs[i] * 1.3) * 0.02 + Math.cos(t * 0.019 + phs[i] * 2.1) * 0.013;
        if (i === DRIFTER) {
          let amp = 0;
          if (t > DRIFT_ON && t <= DRIFT_OFF) amp = (t - DRIFT_ON) / (DRIFT_OFF - DRIFT_ON);
          else if (t > DRIFT_OFF) amp = Math.max(0, 1 - (t - DRIFT_OFF) / (CYCLE - DRIFT_OFF));
          x += amp * 0.24;
          y -= amp * 0.2;
        }
        P.push({ x: clamp(x, 0.05, 0.95), y: clamp(y, 0.06, 0.94) });
      }
      return P;
    }
    function size() {
      const r = fitCanvas(cv, 340);
      ctx = r.ctx;
      W = r.w;
      H = r.h;
    }
    function rr2(x: number, y: number, w: number, h: number, r: number) {
      ctx.beginPath();
      ctx.moveTo(x + r, y);
      ctx.arcTo(x + w, y, x + w, y + h, r);
      ctx.arcTo(x + w, y + h, x, y + h, r);
      ctx.arcTo(x, y + h, x, y, r);
      ctx.arcTo(x, y, x + w, y, r);
      ctx.closePath();
    }
    function frame() {
      t++;
      if (t >= CYCLE) {
        init();
      }
      ctx.clearRect(0, 0, W, H);
      const P = positions();
      let stat = 0;
      for (let i = 0; i < N; i++) {
        const d = Math.hypot(P[i].x - homes[i].x, P[i].y - homes[i].y);
        histA[i].push(d);
        stat += d;
      }
      stat /= N;
      hist.push(stat);
      if (t === CAL) {
        const m = hist.reduce((a, b) => a + b, 0) / hist.length;
        const sd = Math.sqrt(hist.reduce((a, b) => a + (b - m) * (b - m), 0) / hist.length);
        band = { m, sd: Math.max(sd, 0.0022) };
        const all = ([] as number[]).concat(...histA);
        const ma = all.reduce((a, b) => a + b, 0) / all.length;
        const sda = Math.sqrt(all.reduce((a, b) => a + (b - ma) * (b - ma), 0) / all.length);
        bandA = { m: ma, sd: Math.max(sda, 0.004) };
      }
      const dcur = histA[DRIFTER][histA[DRIFTER].length - 1];
      const outA = bandA && dcur > bandA.m + 3 * bandA.sd;
      if (outA && outAfrom === null) outAfrom = t;
      if (!outA && t > DRIFT_OFF) outAfrom = null;
      const outS = band && stat > band.m + 3 * band.sd;
      setLogo(outA || outS);
      const midX = W * 0.42;
      const gx0 = 14, gx1 = midX - 8, gy0 = 26, gy1 = H - 18;
      rr2(gx0, gy0, gx1 - gx0, gy1 - gy0, 12);
      ctx.fillStyle = "#fff";
      ctx.fill();
      ctx.strokeStyle = "#DFE6F2";
      ctx.lineWidth = 1;
      ctx.stroke();
      ctx.strokeStyle = "rgba(10,22,56,.045)";
      for (let g = 1; g < 4; g++) {
        const x = lerp(gx0, gx1, g / 4);
        ctx.beginPath();
        ctx.moveTo(x, gy0 + 6);
        ctx.lineTo(x, gy1 - 6);
        ctx.stroke();
        const y = lerp(gy0, gy1, g / 4);
        ctx.beginPath();
        ctx.moveTo(gx0 + 6, y);
        ctx.lineTo(gx1 - 6, y);
        ctx.stroke();
      }
      const gp = (q: any) => ({ x: lerp(gx0 + 10, gx1 - 10, q.x), y: lerp(gy0 + 10, gy1 - 10, q.y) });
      if (t % 6 === 0 && t > DRIFT_ON) {
        trail.push({ ...P[DRIFTER] });
        if (trail.length > 26) trail.shift();
      }
      if (trail.length > 1) {
        ctx.beginPath();
        trail.forEach((q, k) => {
          const p = gp(q);
          k === 0 ? ctx.moveTo(p.x, p.y) : ctx.lineTo(p.x, p.y);
        });
        ctx.strokeStyle = outA ? "rgba(245,158,11,.55)" : "rgba(51,80,122,.3)";
        ctx.lineWidth = 1.3;
        ctx.stroke();
      }
      P.forEach((q, i) => {
        const p = gp(q);
        ctx.beginPath();
        ctx.fillStyle = i === DRIFTER && outA ? "#F59E0B" : "#0A1638";
        ctx.arc(p.x, p.y, 5.5, 0, 7);
        ctx.fill();
        if (i === DRIFTER && outA) {
          ctx.beginPath();
          ctx.strokeStyle = "#F59E0B";
          ctx.lineWidth = 1.8;
          ctx.arc(p.x, p.y, 9 + (t % 20) * 0.25, 0, 7);
          ctx.stroke();
        }
        ctx.fillStyle = LAB;
        ctx.font = '8.5px "JetBrains Mono",monospace';
        ctx.textAlign = "left";
        ctx.fillText(String(i + 1), p.x + 8, p.y + 3);
      });
      ctx.font = '10px "JetBrains Mono",monospace';
      ctx.fillStyle = LAB;
      ctx.fillText("the geometry", gx0 + 2, 16);
      const cx0 = midX + 8, cx1 = W - 14;
      const xT = (k: number) => lerp(cx0 + 12, cx1 - 12, k / CYCLE);
      function chartFrame(y0: number, y1: number, label: string) {
        rr2(cx0, y0, cx1 - cx0, y1 - y0, 12);
        ctx.fillStyle = "#fff";
        ctx.fill();
        ctx.strokeStyle = "#DFE6F2";
        ctx.lineWidth = 1;
        ctx.stroke();
        ctx.font = '9.5px "JetBrains Mono",monospace';
        ctx.fillStyle = LAB;
        ctx.textAlign = "left";
        ctx.fillText(label, cx0 + 10, y0 + 14);
        ctx.strokeStyle = "rgba(10,22,56,.15)";
        ctx.setLineDash([3, 4]);
        ctx.beginPath();
        ctx.moveTo(xT(CAL), y0 + 8);
        ctx.lineTo(xT(CAL), y1 - 8);
        ctx.stroke();
        ctx.setLineDash([]);
      }
      const a0 = 26, a1 = H * 0.5 - 5;
      chartFrame(a0, a1, "agent-level trajectories");
      const AMAX = 0.34, yA = (v: number) => lerp(a1 - 10, a0 + 20, clamp(v / AMAX, 0, 1));
      if (bandA) {
        const top = yA(bandA.m + 3 * bandA.sd), bot = yA(0);
        ctx.fillStyle = "#F4F7FC";
        ctx.fillRect(cx0 + 12, top, cx1 - cx0 - 24, bot - top);
        ctx.strokeStyle = "#DFE6F2";
        ctx.strokeRect(cx0 + 12, top, cx1 - cx0 - 24, bot - top);
      }
      for (let i = 0; i < N; i++) {
        if (i === DRIFTER) continue;
        ctx.beginPath();
        histA[i].forEach((v, k) => {
          const x = xT(k), y = yA(v);
          k === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
        });
        ctx.strokeStyle = "rgba(51,80,122,.3)";
        ctx.lineWidth = 1;
        ctx.stroke();
      }
      const dOut = outAfrom;
      ctx.beginPath();
      histA[DRIFTER].forEach((v, k) => {
        const x = xT(k), y = yA(v);
        k === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
      });
      ctx.strokeStyle = "#0A1638";
      ctx.lineWidth = 1.5;
      ctx.stroke();
      if (dOut !== null) {
        ctx.beginPath();
        histA[DRIFTER].forEach((v, k) => {
          if (k < dOut - 1) return;
          const x = xT(k), y = yA(v);
          k === dOut - 1 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
        });
        ctx.strokeStyle = "#F59E0B";
        ctx.lineWidth = 1.8;
        ctx.stroke();
        const lv = histA[DRIFTER][histA[DRIFTER].length - 1];
        ctx.fillStyle = "#B45309";
        ctx.font = '600 9px "JetBrains Mono",monospace';
        ctx.textAlign = "left";
        ctx.fillText("agent " + (DRIFTER + 1), Math.min(xT(t) + 6, cx1 - 52), yA(lv) - 6);
      }
      const b0 = H * 0.5 + 5, b1 = H - 18;
      chartFrame(b0, b1, "system-level trajectory");
      const SMAX = 0.09, yS = (v: number) => lerp(b1 - 10, b0 + 20, clamp(v / SMAX, 0, 1));
      if (band) {
        const top = yS(band.m + 3 * band.sd), bot = yS(0);
        ctx.fillStyle = "#F4F7FC";
        ctx.fillRect(cx0 + 12, top, cx1 - cx0 - 24, bot - top);
        ctx.strokeStyle = "#DFE6F2";
        ctx.strokeRect(cx0 + 12, top, cx1 - cx0 - 24, bot - top);
        ctx.fillStyle = LAB;
        ctx.font = '9px "JetBrains Mono",monospace';
        ctx.textAlign = "right";
        ctx.fillText("normal", cx1 - 16, top - 4);
      }
      ctx.beginPath();
      hist.forEach((v, k) => {
        const x = xT(k), y = yS(v);
        k === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
      });
      ctx.strokeStyle = "#0A1638";
      ctx.lineWidth = 1.5;
      ctx.stroke();
      if (band) {
        hist.forEach((v, k) => {
          if (k > CAL && v > band.m + 3 * band.sd && k % 4 === 0) {
            ctx.beginPath();
            ctx.fillStyle = "#F59E0B";
            ctx.arc(xT(k), yS(v), 1.8, 0, 7);
            ctx.fill();
          }
        });
      }
      ctx.beginPath();
      ctx.fillStyle = outS ? "#F59E0B" : "#0A1638";
      ctx.arc(xT(t), yS(stat), 3.2, 0, 7);
      ctx.fill();
      if (outS) {
        ctx.font = '600 9.5px "JetBrains Mono",monospace';
        const msg = "out of control";
        const tw = ctx.measureText(msg).width;
        rr2(cx1 - tw - 30, b1 - 26, tw + 18, 17, 8);
        ctx.fillStyle = "#fff";
        ctx.fill();
        ctx.strokeStyle = "#F59E0B";
        ctx.lineWidth = 1.3;
        ctx.stroke();
        ctx.fillStyle = "#B45309";
        ctx.textAlign = "left";
        ctx.fillText(msg, cx1 - tw - 21, b1 - 14);
      }
      read!.textContent =
        t < CAL
          ? `t = ${t} · calibrating the bands…`
          : outA && outS
            ? `t = ${t} · agent ${DRIFTER + 1} out · system out of control`
            : outA
              ? `t = ${t} · agent-level: agent ${DRIFTER + 1} out of band`
              : t > DRIFT_OFF && !outA && !outS
                ? `t = ${t} · recovered — back in band`
                : `t = ${t} · in control`;
      if (!RM && !stopped) requestAnimationFrame(frame);
    }
    on(() => {
      size();
    });
    size();
    init();
    frame();
  })();

  /* ===== fig 1: inside one agent (definition tour) ===== */
  (function () {
    const cv = document.getElementById("adef") as HTMLCanvasElement;
    if (!cv) return;
    let ctx: CanvasRenderingContext2D, W: number, H: number, t = 0;
    let s5 = 9;
    const rnd = () => {
      s5 = (s5 * 1103515245 + 12345) % 2147483648;
      return s5 / 2147483648;
    };
    const PHASES = [
      "a query arrives",
      "collects relevant context",
      "uses its tools",
      "checks its memory",
      "the model processes",
      "an output is drawn — one sample from Pₙ(q)",
    ];
    const PT = 110, NP = 6;
    let samples: number[] = [], curU: number | null = null;
    function size() {
      const r = fitCanvas(cv, 300);
      ctx = r.ctx;
      W = r.w;
      H = r.h;
    }
    function rr2(x: number, y: number, w: number, h: number, r: number) {
      ctx.beginPath();
      ctx.moveTo(x + r, y);
      ctx.arcTo(x + w, y, x + w, y + h, r);
      ctx.arcTo(x + w, y + h, x, y + h, r);
      ctx.arcTo(x, y + h, x, y, r);
      ctx.arcTo(x, y, x + w, y, r);
      ctx.closePath();
    }
    function node(x: number, y: number, hot: boolean, a: number, draw: (x: number, y: number) => void) {
      ctx.beginPath();
      ctx.fillStyle = "#fff";
      ctx.arc(x, y, 15, 0, 7);
      ctx.fill();
      ctx.strokeStyle = hot ? `rgba(245,158,11,${0.3 + 0.7 * a})` : "#C9D6E8";
      ctx.lineWidth = hot ? 2.2 : 1.2;
      ctx.stroke();
      ctx.strokeStyle = hot ? `rgba(180,83,9,${0.5 + 0.5 * a})` : "#33507A";
      ctx.fillStyle = ctx.strokeStyle as string;
      draw(x, y);
    }
    function icDoc(x: number, y: number) {
      ctx.lineWidth = 1.4;
      rr2(x - 5, y - 7, 10, 14, 2);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(x - 2.5, y - 3);
      ctx.lineTo(x + 2.5, y - 3);
      ctx.moveTo(x - 2.5, y);
      ctx.lineTo(x + 2.5, y);
      ctx.moveTo(x - 2.5, y + 3);
      ctx.lineTo(x + 0.5, y + 3);
      ctx.stroke();
    }
    function icGear(x: number, y: number) {
      ctx.lineWidth = 1.4;
      ctx.beginPath();
      ctx.arc(x, y, 4.5, 0, 7);
      ctx.stroke();
      for (let k = 0; k < 6; k++) {
        const an = (k * Math.PI) / 3;
        ctx.beginPath();
        ctx.moveTo(x + Math.cos(an) * 6, y + Math.sin(an) * 6);
        ctx.lineTo(x + Math.cos(an) * 8.5, y + Math.sin(an) * 8.5);
        ctx.stroke();
      }
      ctx.beginPath();
      ctx.arc(x, y, 1.5, 0, 7);
      ctx.fill();
    }
    function icDb(x: number, y: number) {
      ctx.lineWidth = 1.4;
      ctx.beginPath();
      ctx.ellipse(x, y - 5, 6, 2.6, 0, 0, 7);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(x - 6, y - 5);
      ctx.lineTo(x - 6, y + 5);
      ctx.moveTo(x + 6, y - 5);
      ctx.lineTo(x + 6, y + 5);
      ctx.stroke();
      ctx.beginPath();
      ctx.ellipse(x, y + 5, 6, 2.6, 0, 0, Math.PI);
      ctx.stroke();
    }
    function frame() {
      t++;
      const cyc = t % (PT * NP), ph = Math.floor(cyc / PT), pp = (cyc % PT) / PT;
      const a = clamp(Math.min(pp, 1 - pp) * 6, 0, 1);
      if (cyc === 0) {
        curU = null;
        if (samples.length >= 9) samples = [];
      }
      ctx.clearRect(0, 0, W, H);
      const px0 = W * 0.17, px1 = W * 0.8, py0 = 26, py1 = H - 44;
      const mx = px0 + (px1 - px0) * 0.34, my = (py0 + py1) / 2 + 8;
      ctx.setLineDash([6, 5]);
      rr2(px0, py0, px1 - px0, py1 - py0, 14);
      ctx.strokeStyle = "#C9D6E8";
      ctx.lineWidth = 1.2;
      ctx.stroke();
      ctx.setLineDash([]);
      ctx.font = '10px "JetBrains Mono",monospace';
      ctx.fillStyle = LAB;
      ctx.textAlign = "center";
      ctx.fillText("i n s i d e   o n e   a g e n t", (px0 + px1) / 2, py0 + 16);
      const nCtx = { x: px0 + (px1 - px0) * 0.15, y: py0 + 48 },
        nTool = { x: px0 + (px1 - px0) * 0.54, y: py0 + 48 },
        nMem = { x: mx, y: py1 - 24 };
      ctx.strokeStyle = "rgba(51,80,122,.2)";
      ctx.lineWidth = 1;
      [nCtx, nTool, nMem].forEach((n) => {
        ctx.beginPath();
        ctx.moveTo(mx, my);
        ctx.lineTo(n.x, n.y);
        ctx.stroke();
      });
      const vx = px1 - (px1 - px0) * 0.15, vy0 = py0 + 40, vy1 = py1 - 26, amp = (px1 - px0) * 0.115;
      const yU = (u: number) => lerp(vy0, vy1, u),
        bx = (u: number) => vx - Math.exp(-((u - 0.5) * (u - 0.5)) / 0.018) * amp;
      ctx.strokeStyle = "rgba(10,22,56,.4)";
      ctx.lineWidth = 1.4;
      ctx.beginPath();
      ctx.moveTo(px0 - 12, my);
      ctx.lineTo(mx - 34, my);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(mx + 34, my);
      ctx.lineTo(vx - amp - 14, my);
      ctx.stroke();
      rr2(mx - 26, my - 26, 52, 52, 12);
      ctx.fillStyle = "#0A1638";
      ctx.fill();
      if (ph === 4) {
        rr2(mx - 26, my - 26, 52, 52, 12);
        ctx.fillStyle = `rgba(245,158,11,${a})`;
        ctx.fill();
      }
      ctx.fillStyle = ph === 4 && a > 0.5 ? "#0A1638" : "#fff";
      ctx.beginPath();
      for (let k = 0; k < 8; k++) {
        const an = -Math.PI / 2 + (k * Math.PI) / 4;
        const r = k % 2 ? 3 : 8;
        const X = mx + Math.cos(an) * r, Y = my + Math.sin(an) * r;
        k === 0 ? ctx.moveTo(X, Y) : ctx.lineTo(X, Y);
      }
      ctx.closePath();
      ctx.fill();
      ctx.font = '9.5px "JetBrains Mono",monospace';
      ctx.fillStyle = ph === 4 ? "#B45309" : LAB;
      ctx.textAlign = "center";
      ctx.fillText("the model", mx, my + 44);
      node(nCtx.x, nCtx.y, ph === 1, a, icDoc);
      node(nTool.x, nTool.y, ph === 2, a, icGear);
      node(nMem.x, nMem.y, ph === 3, a, icDb);
      ctx.font = '9.5px "JetBrains Mono",monospace';
      ctx.textAlign = "center";
      ctx.fillStyle = ph === 1 ? "#B45309" : LAB;
      ctx.fillText("context", nCtx.x, nCtx.y + 28);
      ctx.fillStyle = ph === 2 ? "#B45309" : LAB;
      ctx.fillText("tools", nTool.x, nTool.y + 28);
      ctx.fillStyle = ph === 3 ? "#B45309" : LAB;
      ctx.fillText("memory", nMem.x + 34, nMem.y + 4);
      if (ph <= 4) {
        const qp = ph === 0 ? pp : 1;
        const qx = lerp(px0 + 10, mx - 52, qp);
        ctx.globalAlpha = ph === 0 ? 1 : 0.55;
        rr2(qx, my - 9, 22, 18, 9);
        ctx.fillStyle = "#fff";
        ctx.fill();
        ctx.strokeStyle = "#F59E0B";
        ctx.lineWidth = 1.4;
        ctx.stroke();
        ctx.fillStyle = "#B45309";
        ctx.font = '600 10px "JetBrains Mono",monospace';
        ctx.textAlign = "center";
        ctx.fillText("q", qx + 11, my + 3.5);
        ctx.globalAlpha = 1;
      }
      ctx.beginPath();
      for (let k = 0; k <= 60; k++) {
        const u = k / 60;
        const X = bx(u), Y = yU(u);
        k === 0 ? ctx.moveTo(X, Y) : ctx.lineTo(X, Y);
      }
      ctx.strokeStyle = ph === 5 ? `rgba(245,158,11,${0.35 + 0.45 * a})` : "rgba(51,80,122,.55)";
      ctx.lineWidth = 1.6;
      ctx.stroke();
      ctx.strokeStyle = "rgba(10,22,56,.25)";
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(vx, vy0);
      ctx.lineTo(vx, vy1);
      ctx.stroke();
      ctx.font = '9.5px "JetBrains Mono",monospace';
      ctx.fillStyle = LAB;
      ctx.textAlign = "center";
      ctx.fillText("Pₙ(q)", vx - 6, vy0 - 8);
      samples.forEach((u) => {
        ctx.strokeStyle = "rgba(245,158,11,.75)";
        ctx.lineWidth = 1.6;
        ctx.beginPath();
        ctx.moveTo(vx + 3, yU(u));
        ctx.lineTo(vx + 9, yU(u));
        ctx.stroke();
      });
      if (ph === 5) {
        if (curU === null) {
          curU = clamp((rnd() + rnd() + rnd()) / 3, 0.08, 0.92);
        }
        const sx = lerp(mx + 34, bx(curU), pp), sy = lerp(my, yU(curU), pp * pp);
        ctx.beginPath();
        ctx.fillStyle = "#F59E0B";
        ctx.arc(sx, sy, 4, 0, 7);
        ctx.fill();
        if (pp > 0.94 && samples[samples.length - 1] !== curU) {
          samples.push(curU);
        }
      }
      ctx.globalAlpha = 0.35 + 0.65 * a;
      ctx.font = '10.5px "JetBrains Mono",monospace';
      ctx.fillStyle = "#2B3A5C";
      ctx.textAlign = "center";
      ctx.fillText(PHASES[ph], W / 2, H - 12);
      ctx.globalAlpha = 1;
      if (!RM && !stopped) requestAnimationFrame(frame);
    }
    on(() => {
      size();
    });
    size();
    frame();
  })();

  return () => {
    stopped = true;
    listeners.forEach((fn) => window.removeEventListener("resize", fn));
    setLogo(false);
  };
}
/* eslint-enable */

export default function ThesisPage() {
  useEffect(() => initThesisViz(), []);

  return (
    <div className="thesis-root min-h-screen flex flex-col bg-white">
      <style
        dangerouslySetInnerHTML={{
          __html:
            `@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap');` +
            CSS,
        }}
      />
      <Header />
      <div className="flex-1" dangerouslySetInnerHTML={{ __html: HTML }} />
      <Footer />
    </div>
  );
}
