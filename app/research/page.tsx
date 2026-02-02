"use client";
import { Footer } from "@/components/footer";
import Header from "@/components/header";
import { FadeIn } from "@/components/NewLanding";

// Floating orb component for background decoration
const FloatingOrb = ({
  className,
  size = "400px",
  color = "rgba(0, 71, 125, 0.08)",
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

interface Article {
  url: string;
  title: string;
  subtitle: string;
  tags?: string[];
  venue?: string;
}

export default function Research() {
  const papers2025: Article[] = [
    {
      url: "https://arxiv.org/abs/2512.05013",
      title: "Detecting Perspective Shifts in Multi-agent Systems",
      subtitle:
        "Methods for detecting when agents in multi-agent systems experience shifts in their perspectives or behaviors.",
      tags: ["Monitor"],
    },
    {
      url: "https://arxiv.org/abs/2509.10963",
      title:
        "Testing for LLM response differences: the case of a composite null consisting of semantically irrelevant query perturbations",
      subtitle:
        "Statistical testing framework for detecting meaningful differences in LLM responses under query perturbations.",
      tags: ["Evaluate"],
    },
    {
      url: "https://arxiv.org/abs/2506.00077",
      title:
        "Gaussian mixture models as a proxy for interacting language models",
      subtitle:
        "Using Gaussian mixture models to approximate and analyze the behavior of interacting language model systems.",
      tags: ["Monitor"],
    },
    {
      url: "https://arxiv.org/abs/2505.00006",
      title: "Toward a Digital Twin of U.S. Congress",
      subtitle:
        "Empirical evidence that a collection of language models parameterized by real people's data satisfies the definition of a digital twin.",
      tags: ["Monitor"],
    },
    {
      url: "https://arxiv.org/abs/2410.01106",
      title:
        "Statistical inference on black-box generative models in the data kernel perspective space",
      subtitle:
        "Providing theoretical and empirical support for predicting the behavior of generative models using vector representations.",
      tags: ["Evaluate"],
      venue: "ACL 2025",
    },
  ];

  const papers2024: Article[] = [
    {
      url: "https://arxiv.org/abs/2412.06834",
      title:
        "Investigating social alignment via mirroring in a system of interacting language models",
      subtitle:
        'Investigating the effect of a simple "mirroring" mechanism on the dynamics of a system of interacting language models.',
      tags: ["Monitor"],
    },
    {
      url: "https://aclanthology.org/2024.emnlp-main.711/",
      title: "Tracking the perspectives of interacting language models",
      subtitle:
        "Methods for tracking how language models' perspectives evolve through interaction.",
      tags: ["Monitor"],
      venue: "EMNLP 2024",
    },
    {
      url: "https://arxiv.org/abs/2409.17308",
      title:
        "Consistent estimation of generative model representations in the data kernel perspective space",
      subtitle:
        "Providing theoretical support for using vector representations of populations of generative models.",
      tags: ["Evaluate"],
    },
    {
      url: "https://arxiv.org/abs/2406.06573",
      title:
        "MedFuzz: Exploring the robustness of large language models in medical question answering",
      subtitle:
        "Systematic evaluation of LLM robustness in medical QA through adversarial perturbations and fuzzing techniques.",
      tags: ["Evaluate"],
    },
  ];

  const papers2023: Article[] = [
    {
      url: "https://arxiv.org/abs/2309.08913",
      title: "A statistical Turing test for generative models",
      subtitle:
        "A statistical framework for evaluating whether generative model outputs are distinguishable from real data.",
      tags: ["Evaluate"],
    },
    {
      url: "https://arxiv.org/abs/2305.05126",
      title: "Comparing Foundation Models using Data Kernels",
      subtitle:
        "A method for comparing foundation models by analyzing their behavior through data kernel representations.",
      tags: ["Evaluate"],
    },
  ];

  const totalPapers = papers2025.length + papers2024.length + papers2023.length;

  return (
    <div className="flex w-full min-h-screen bg-white flex-col overflow-hidden">
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 px-4 md:px-8 lg:px-16">
        {/* Background decorations */}
        <FloatingOrb
          className="top-0 -right-40"
          size="500px"
          color="rgba(0, 71, 125, 0.05)"
        />
        <FloatingOrb
          className="top-40 -left-40"
          size="400px"
          color="rgba(17, 68, 113, 0.04)"
        />

        <div className="relative max-w-6xl mx-auto">
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#F6F7F9] border border-[#AFBEC6]/50 rounded-full text-sm text-[#486884] mb-6">
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
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
              Technical reports & published papers
            </div>
          </FadeIn>

          <FadeIn delay={100}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-[#114471] mb-4 leading-tight">
              Advancing the science of{" "}
              <span className="bg-gradient-to-r from-[#114471] to-[#3596FF] bg-clip-text text-transparent">
                AI systems
              </span>
            </h1>
          </FadeIn>

          <FadeIn delay={200}>
            <p className="text-[#486884] text-lg md:text-xl max-w-2xl leading-relaxed">
              Our research focuses on understanding and building monitoring and evaluation tools for models, agents, and multi-agent systems.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Papers Section */}
      <section className="relative py-12 px-4 md:px-8 lg:px-16 flex-1">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <div className="flex items-center justify-between mb-12">
              <h2 className="text-2xl md:text-3xl font-semibold text-[#114471]">
                Publications
              </h2>
              <span className="text-sm text-[#486884] bg-white px-4 py-2 rounded-full border border-[#AFBEC6]/50">
                {totalPapers} papers
              </span>
            </div>
          </FadeIn>

          {/* 2025 */}
          <FadeIn>
            <h3 className="text-xl font-semibold text-[#114471] mb-6 flex items-center gap-3">
              <span className="bg-gradient-to-r from-[#114471] to-[#3596FF] bg-clip-text text-transparent">2025</span>
              <span className="h-px flex-1 bg-[#AFBEC6]/50" />
            </h3>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch mb-12">
            {papers2025.map((article, idx) => (
              <FadeIn key={idx} delay={50 + idx * 50}>
                <div className="h-full">
                  <ResearchCard {...article} />
                </div>
              </FadeIn>
            ))}
          </div>

          {/* 2024 */}
          <FadeIn>
            <h3 className="text-xl font-semibold text-[#114471] mb-6 flex items-center gap-3">
              <span className="bg-gradient-to-r from-[#114471] to-[#3596FF] bg-clip-text text-transparent">2024</span>
              <span className="h-px flex-1 bg-[#AFBEC6]/50" />
            </h3>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch mb-12">
            {papers2024.map((article, idx) => (
              <FadeIn key={idx} delay={50 + idx * 50}>
                <div className="h-full">
                  <ResearchCard {...article} />
                </div>
              </FadeIn>
            ))}
          </div>

          {/* 2023 */}
          <FadeIn>
            <h3 className="text-xl font-semibold text-[#114471] mb-6 flex items-center gap-3">
              <span className="bg-gradient-to-r from-[#114471] to-[#3596FF] bg-clip-text text-transparent">2023</span>
              <span className="h-px flex-1 bg-[#AFBEC6]/50" />
            </h3>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
            {papers2023.map((article, idx) => (
              <FadeIn key={idx} delay={50 + idx * 50}>
                <div className="h-full">
                  <ResearchCard {...article} />
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Collaborators Section */}
      <section className="relative py-20 px-4 md:px-8 lg:px-16 bg-[#F6F7F9]">
        <div className="max-w-6xl mx-auto text-center">
          <FadeIn>
            <h2 className="text-2xl md:text-3xl font-semibold text-[#114471] mb-4">
              Research Partners
            </h2>
            <p className="text-[#486884] text-lg mb-12">
              Collaborating with leading institutions to advance AI research
            </p>
          </FadeIn>

          <FadeIn delay={100}>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
              <div className="flex flex-col items-center gap-2 opacity-70 hover:opacity-100 transition-opacity">
                <div className="text-[#114471] font-semibold text-lg">
                  Johns Hopkins University
                </div>
              </div>
              <div className="flex flex-col items-center gap-2 opacity-70 hover:opacity-100 transition-opacity">
                <div className="text-[#114471] font-semibold text-lg">
                  Microsoft Research
                </div>
              </div>
              <div className="flex flex-col items-center gap-2 opacity-70 hover:opacity-100 transition-opacity">
                <div className="text-[#114471] font-semibold text-lg">
                  Nomic AI
                </div>
              </div>
              <div className="flex flex-col items-center gap-2 opacity-70 hover:opacity-100 transition-opacity">
                <div className="text-[#114471] font-semibold text-lg">
                  Jataware Corp
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 px-4 bg-gradient-to-b from-[#F6F7F9] to-white">
        <div className="max-w-3xl mx-auto text-center">
          <FadeIn>
            <h2 className="text-2xl md:text-3xl font-semibold text-[#114471] mb-4">
              Interested in collaborating?
            </h2>
            <p className="text-[#486884] text-lg mb-8">
              We're always looking for research partners and collaborators.
            </p>
            <a
              href="mailto:info@helivan.io"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-[#114471] to-[#00477D] text-white font-medium rounded-xl hover:shadow-lg hover:shadow-[#114471]/25 transition-all duration-300 hover:-translate-y-0.5"
            >
              Get in touch
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
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </div>
  );
}

const ResearchCard = ({
  title,
  subtitle,
  url,
  tags = [],
  venue,
}: Article) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex flex-col p-6 bg-white border border-[#AFBEC6]/50 rounded-2xl hover:border-[#114471]/30 hover:shadow-xl hover:shadow-[#114471]/5 transition-all duration-300 hover:-translate-y-1 h-full"
    >
      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#114471]/5 via-transparent to-[#3596FF]/5 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300" />

      <div className="relative flex flex-col h-full">
        {/* Header with venue badge and link icon */}
        <div className="flex items-start justify-between mb-3">
          {venue ? (
            <span className="px-3 py-1 text-xs font-semibold text-white bg-gradient-to-r from-[#114471] to-[#00477D] rounded-full">
              {venue}
            </span>
          ) : (
            <span className="px-3 py-1 text-xs font-medium text-[#486884] bg-[#F6F7F9] rounded-full">
              arXiv
            </span>
          )}
          <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[#F6F7F9] group-hover:bg-[#114471] transition-colors duration-300">
            <svg
              className="w-4 h-4 text-[#486884] group-hover:text-white transition-colors duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </div>
        </div>

        {/* Title */}
        <h3 className="text-base md:text-lg font-semibold text-[#114471] mb-2 leading-snug group-hover:text-[#00477D] transition-colors">
          {title}
        </h3>

        {/* Subtitle */}
        <p className="text-[#486884] text-sm leading-relaxed mb-4 flex-grow">
          {subtitle}
        </p>

        {/* Tags */}
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-auto">
            {tags.map((tag, idx) => (
              <span
                key={idx}
                className="px-2 py-1 text-xs font-medium text-[#486884] bg-[#F6F7F9] rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </a>
  );
};
