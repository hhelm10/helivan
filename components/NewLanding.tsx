import { useEffect, useRef, useState } from "react";
import { Footer } from "./footer";
import Header from "./header";
import Link from "next/link";

// FadeIn component to wrap around elements we want to animate
export const FadeIn = ({
  children,
  delay = 0,
  threshold = 0.1,
}: {
  children: React.ReactNode;
  delay?: number;
  threshold?: number;
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold }
    );

    const currentElement = domRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [threshold]);

  return (
    <div
      ref={domRef}
      className={`transition-all duration-1000 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

// Floating orb component for background decoration
const FloatingOrb = ({
  className,
  size = "400px",
  color = "rgba(0, 71, 125, 0.08)",
  delay = 0,
}: {
  className?: string;
  size?: string;
  color?: string;
  delay?: number;
}) => (
  <div
    className={`absolute rounded-full blur-3xl pointer-events-none animate-pulse ${className}`}
    style={{
      width: size,
      height: size,
      background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
      animationDelay: `${delay}ms`,
      animationDuration: "4s",
    }}
  />
);

// Grid pattern background
const GridPattern = () => (
  <div
    className="absolute inset-0 pointer-events-none opacity-[0.03]"
    style={{
      backgroundImage: `
        linear-gradient(to right, #114471 1px, transparent 1px),
        linear-gradient(to bottom, #114471 1px, transparent 1px)
      `,
      backgroundSize: "60px 60px",
    }}
  />
);

// Feature card component
const FeatureCard = ({
  icon,
  title,
  description,
  delay = 0,
  status,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay?: number;
  status?: "live" | "beta" | "coming-soon";
}) => {
  const statusColors = {
    live: "bg-green-500",
    beta: "bg-yellow-500",
    "coming-soon": "bg-[#486884]",
  };

  const statusText = {
    live: "Live",
    beta: "Beta",
    "coming-soon": "Coming Soon",
  };

  return (
    <FadeIn delay={delay}>
      <div className="group relative h-full p-6 bg-white/80 backdrop-blur-sm border border-[#AFBEC6]/50 rounded-2xl hover:border-[#114471]/30 hover:shadow-xl hover:shadow-[#114471]/5 transition-all duration-300">
        <div className="absolute inset-0 bg-gradient-to-br from-[#114471]/5 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300" />
        <div className="relative flex flex-col h-full">
          <div className="flex items-start justify-between mb-4">
            <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-[#114471] to-[#00477D] rounded-xl text-white group-hover:scale-110 transition-transform duration-300">
              {icon}
            </div>
            {status && (
              <div className="flex items-center gap-2">
                <span
                  className={`w-2 h-2 rounded-full ${statusColors[status]} ${status === "live" ? "animate-pulse" : ""}`}
                />
                <span className="text-xs text-[#486884] font-medium uppercase tracking-wider">
                  {statusText[status]}
                </span>
              </div>
            )}
          </div>
          <h3 className="text-lg font-semibold text-[#114471] mb-2">{title}</h3>
          <p className="text-[#486884] text-sm leading-relaxed flex-grow">{description}</p>
        </div>
      </div>
    </FadeIn>
  );
};

export const NewLanding = () => {
  return (
    <div className="flex w-full min-h-screen bg-white flex-col overflow-hidden">
      <Header />

      {/* Hero Section */}
      <section className="relative flex flex-col w-full min-h-[85vh] justify-center items-center px-4 py-20 md:py-32">
        {/* Background decorations */}
        <GridPattern />
        <FloatingOrb
          className="top-20 -left-40"
          size="600px"
          color="rgba(0, 71, 125, 0.06)"
          delay={0}
        />
        <FloatingOrb
          className="top-40 -right-40"
          size="500px"
          color="rgba(17, 68, 113, 0.05)"
          delay={1000}
        />
        <FloatingOrb
          className="bottom-20 left-1/4"
          size="400px"
          color="rgba(0, 71, 125, 0.04)"
          delay={2000}
        />

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#F6F7F9] border border-[#AFBEC6]/50 rounded-full text-sm text-[#486884] mb-8">
              <span className="w-2 h-2 bg-yellow-500 rounded-full" />
              AgentWatch and Quench now in BETA
            </div>
          </FadeIn>

          <FadeIn delay={100}>
            <h1 className="text-[#114471] text-4xl md:text-6xl lg:text-7xl text-center font-semibold max-w-4xl mx-auto leading-[1.1] tracking-tight">
              Agent{" "}
              <span className="bg-gradient-to-r from-[#114471] via-[#00477D] to-[#3596FF] bg-clip-text text-transparent">
                monitoring
              </span>{" "}
              and model{" "}
              <span className="bg-gradient-to-r from-[#00477D] to-[#3596FF] bg-clip-text text-transparent">
                evaluations
              </span>{" "}
              at scale.
            </h1>
          </FadeIn>

          <FadeIn delay={200}>
            <p className="text-[#486884] text-lg md:text-xl lg:text-2xl text-center mt-8 max-w-2xl mx-auto leading-relaxed">
              We build monitoring and evaluation tools for the next generation of AI systems. From research to production.
            </p>
          </FadeIn>

          <FadeIn delay={300}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
              <Link
                href="/apps"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-[#114471] to-[#00477D] text-white font-medium rounded-xl hover:shadow-lg hover:shadow-[#114471]/25 transition-all duration-300 hover:-translate-y-0.5"
              >
                Explore Apps
                <svg
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
              <Link
                href="/research"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white border border-[#AFBEC6] text-[#114471] font-medium rounded-xl hover:border-[#114471] hover:bg-[#F6F7F9] transition-all duration-300"
              >
                View Research
              </Link>
            </div>
          </FadeIn>
        </div>

      </section>

      {/* Features Section */}
      <section className="relative py-12 px-4 bg-gradient-to-b from-white to-[#F6F7F9]">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
            <FeatureCard
              icon={
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              }
              title="Agent Monitoring"
              description="Real-time observability for multi-agent systems. Detect behavioral change and emergent behaviors."
              status="beta"
              delay={100}
            />
            <FeatureCard
              icon={
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <circle cx="12" cy="12" r="10" strokeWidth={2} />
                  <circle cx="12" cy="12" r="6" strokeWidth={2} />
                  <circle cx="12" cy="12" r="2" strokeWidth={2} />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 2v4m0 12v4"
                  />
                </svg>
              }
              title="System Evaluation"
              description="Efficient evaluation frameworks for AI systems. Easily integrated into existing evaluation flows."
              status="beta"
              delay={200}
            />
            <FeatureCard
              icon={
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              }
              title="Research"
              description="Public technical reports and published papers on monitoring and evaluating models, agents, and multi-agent systems."
              delay={300}
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default NewLanding;
