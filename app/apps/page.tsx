"use client";
import Header from "@/components/header";
import { Footer } from "@/components/footer";
import { FadeIn } from "@/components/NewLanding";

// Floating orb component for background decoration
const FloatingOrb = ({
  className,
  size = "400px",
  color = "rgba(51, 80, 122, 0.08)",
}: {
  className?: string;
  size?: string;
  color?: string;
}) => (
  <div
    className={`absolute rounded-full blur-3xl pointer-events-none animate-pulse ${className}`}
    style={{
      width: size,
      height: size,
      background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
      animationDuration: "4s",
    }}
  />
);

interface AppCardProps {
  title: string;
  description: string;
  href: string;
  icon: React.ReactNode;
  titleIcon?: string;
  status?: "live" | "coming-soon" | "beta";
  features?: string[];
}

const AppCard = ({
  title,
  description,
  href,
  icon,
  titleIcon,
  status = "live",
  features = [],
}: AppCardProps) => {
  const statusColors = {
    live: "bg-pass-green",
    beta: "bg-drift-amber",
    "coming-soon": "bg-[#5C6B8A]",
  };

  const statusText = {
    live: "live",
    beta: "beta",
    "coming-soon": "coming soon",
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex flex-col p-8 bg-white/80 backdrop-blur-sm border border-[#DFE6F2]/50 rounded-2xl hover:border-[#0A1638]/30 hover:shadow-2xl hover:shadow-[#0A1638]/10 transition-all duration-300 hover:-translate-y-1"
    >
      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0A1638]/5 via-transparent to-[#33507A]/5 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300" />

      <div className="relative">
        {/* Header with icon and status */}
        <div className="flex items-start justify-between mb-6">
          <div className="flex items-center justify-center w-14 h-14 bg-gradient-to-br from-[#0A1638] to-[#263C5C] rounded-xl text-white group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-[#0A1638]/25 transition-all duration-300">
            {icon}
          </div>
          <div className="flex items-center gap-2">
            <span
              className={`w-2 h-2 rounded-full ${statusColors[status]} ${status === "live" ? "animate-pulse" : ""}`}
            />
            <span className="text-xs text-[#5C6B8A] font-medium tracking-wider">
              {statusText[status]}
            </span>
          </div>
        </div>

        {/* Title */}
        <div className="flex items-center gap-2 mb-3">
          {titleIcon && (
            <img src={titleIcon} alt="" className="w-10 h-10" />
          )}
          <h3 className="text-2xl font-semibold text-[#0A1638] group-hover:text-[#263C5C] transition-colors">
            {title}
          </h3>
        </div>

        {/* Description */}
        <p className="text-[#5C6B8A] text-base leading-relaxed mb-6">
          {description}
        </p>

        {/* Features list */}
        {features.length > 0 && (
          <ul className="space-y-2 mb-6">
            {features.map((feature, idx) => (
              <li
                key={idx}
                className="flex items-center gap-2 text-sm text-[#5C6B8A]"
              >
                <svg
                  className="w-4 h-4 text-[#263C5C]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                {feature}
              </li>
            ))}
          </ul>
        )}

        {/* CTA */}
        <div className="flex items-center text-[#263C5C] font-medium group-hover:text-[#0A1638]">
          {status === "coming-soon" ? "get notified" : "go to web application"}
          <svg
            className="ml-2 w-4 h-4 transform group-hover:translate-x-2 transition-transform duration-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </div>
      </div>
    </a>
  );
};

// Icons
const AgentWatchIcon = () => (
  <svg
    className="w-7 h-7"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
    />
  </svg>
);

const QuenchIcon = () => (
  <svg
    className="w-7 h-7"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <circle cx="12" cy="12" r="10" strokeWidth={1.5} />
    <circle cx="12" cy="12" r="6" strokeWidth={1.5} />
    <circle cx="12" cy="12" r="2" strokeWidth={1.5} />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12 2v4m0 12v4"
    />
  </svg>
);

export default function AppsPage() {
  return (
    <div className="flex w-full min-h-screen bg-[#F4F7FC] flex-col [overflow-x:clip]">
      <Header />

      {/* Hero section */}
      <section className="relative py-20 px-4 md:px-8 lg:px-16">
        {/* Background decorations */}
        <FloatingOrb
          className="top-0 -right-40"
          size="500px"
          color="rgba(51, 80, 122, 0.05)"
        />
        <FloatingOrb
          className="top-40 -left-40"
          size="400px"
          color="rgba(38, 60, 92, 0.04)"
        />

        <div className="relative max-w-6xl mx-auto">
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#F4F7FC] border border-[#DFE6F2]/50 rounded-full text-sm text-[#5C6B8A] mb-6">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                />
              </svg>
              applications
            </div>
          </FadeIn>

          <FadeIn delay={100}>
            <h1 className="font-grotesk text-4xl md:text-5xl lg:text-6xl font-semibold text-[#0A1638] mb-4 leading-tight">
              tools for AI{" "}
              <span className="text-[#0A1638]">
                monitoring and evaluation
              </span>
            </h1>
          </FadeIn>

          <FadeIn delay={200}>
            <p className="text-[#5C6B8A] text-lg md:text-xl max-w-2xl leading-relaxed">
              monitor multi-agent systems and evaluate system performance with
              our suite of purpose-built tools.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Apps grid */}
      <section className="relative py-12 px-4 md:px-8 lg:px-16 flex-1">
        <div className="max-w-6xl mx-auto">
          <FadeIn delay={300}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <AppCard
                title="AgentWatch"
                description="AI agents drift over time due to model updates, fine-tuning, or changing contexts. AgentWatch tracks your agents and alerts you when behaviors shift—so you maintain trust, consistency, and reliability."
                href="https://agentwatch.helivan.io"
                icon={<AgentWatchIcon />}
                titleIcon="/agent-watch-icon.svg"
                status="beta"
                features={[
                  "Continuous monitoring with daily automated scans",
                  "Change detection alerts for behavior drift",
                  "Multi-agent tracking and comparison",
                  "Track up to 100 agents per project",
                ]}
              />
              <AppCard
                title="Quench"
                description="Evaluate models with a fraction of the queries / cost. Quench uses behavior similarity to cached models, letting you explore 25x more configurations with the same budget."
                href="https://quench.helivan.io"
                icon={<QuenchIcon />}
                titleIcon="/quench-favicon.svg"
                status="beta"
                features={[
                  "Python SDK for easy integration",
                  "15-20 queries vs 500 for full evaluation",
                  "Public and private benchmarks",
                  "~$0.40 per evaluation vs $10+ traditional",
                ]}
              />
            </div>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </div>
  );
}
