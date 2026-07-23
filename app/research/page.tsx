"use client";
import { Footer } from "@/components/footer";
import Header from "@/components/header";
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

interface Article {
  url: string;
  title: string;
  subtitle: string;
  tags?: string[];
  venue?: string;
}

export default function Research() {
  const papers2026: Article[] = [
    {
      url: "https://arxiv.org/abs/2512.05013",
      title: "Detecting Perspective Shifts in Multi-agent Systems",
      subtitle:
        "Methods for detecting when agents in multi-agent systems experience shifts in their perspectives or behaviors.",
      tags: ["Monitor"],
      venue: "ICML 2026",
    },
    {
      url: "https://arxiv.org/abs/2605.07096v1",
      title: "Query-efficient model evaluation using cached responses",
      subtitle:
        "Leveraging cached responses from previously-evaluated models to reduce the number of queries needed for accurately evaluating new models on benchmarks.",
      tags: ["Evaluate"],
      venue: "ICML 2026",
    },
    {
      url: "https://arxiv.org/abs/2605.07878",
      title: "Black-box model classification under the discriminative factorization",
      subtitle:
        "A framework for evaluating query set quality when classifying black-box AI models, demonstrating exponential decay of classification error with query budget.",
      tags: ["Evaluate"],
    },
    {
      url: "https://arxiv.org/abs/2605.11135",
      title: "Control charts for multi-agent systems",
      subtitle:
        "Extending adaptive control charts to automated monitoring of open-ended multi-agent systems, revealing a fundamental tension between agent learning and robustness to slowly-defecting adversaries.",
      tags: ["Monitor"],
    },
    {
      url: "https://arxiv.org/abs/2605.26409",
      title: "Jailbreak susceptibility prediction and mitigation via the behavioral geometry of models",
      subtitle:
        "Efficient susceptibility prediction and effective defense transfer for jailbreak defense / blue teaming.",
      tags: ["Evaluate"],
    },
    {
      url: "https://arxiv.org/abs/2605.27463",
      title: "When prompt perturbations break your A/B test: A valid statistical test for generative surveying",
      subtitle:
        "Valid & robust statistical analysis of generative surveying data.",
      tags: ["Evaluate"],
    },
    {
      url: "https://arxiv.org/abs/2505.00006",
      title: "Toward a Digital Twin of U.S. Congress",
      subtitle:
        "Empirical evidence that a collection of language models parameterized by real people's data satisfies the definition of a digital twin.",
      tags: ["Monitor"],
      venue: "ACL 2026",
    },
    {
      url: "https://openreview.net/forum?id=bYZZQdXDfA&noteId=W36dqMum1O",
      title: "A Model of The Language Process",
      subtitle:
        "Expanding the capabilities of prediction with explicit time-conditioning.",
      tags: ["Monitor"],
      venue: "ACL 2026",
    },
  ];

  const papers2025: Article[] = [
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

  const totalPapers = papers2026.length + papers2025.length + papers2024.length + papers2023.length;

  return (
    <div className="flex w-full min-h-screen bg-[#F4F7FC] flex-col overflow-hidden">
      <Header />

      {/* Hero Section */}
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
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
              technical reports & published papers
            </div>
          </FadeIn>

          <FadeIn delay={100}>
            <h1 className="font-grotesk text-4xl md:text-5xl lg:text-6xl font-semibold text-[#0A1638] mb-4 leading-tight">
              advancing the science of{" "}
              <span className="text-[#0A1638]">
                agent evaluation and monitoring
              </span>
            </h1>
          </FadeIn>

          <FadeIn delay={200}>
            <p className="text-[#5C6B8A] text-lg md:text-xl max-w-2xl leading-relaxed">
              our research focuses on developing statistically principled monitoring and evaluation tools for models, agents, and multi-agent systems.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Papers Section */}
      <section className="relative py-12 px-4 md:px-8 lg:px-16 flex-1">
        <div className="max-w-6xl mx-auto">
          {/* 2026 */}
          <FadeIn>
            <h3 className="text-xl font-semibold text-[#0A1638] mb-6 flex items-center gap-3">
              <span className="text-[#0A1638]">2026</span>
              <span className="w-8 h-px bg-drift-amber" /><span className="h-px flex-1 bg-[#DFE6F2]/50" />
            </h3>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch mb-12">
            {papers2026.map((article, idx) => (
              <FadeIn key={idx} delay={50 + idx * 50}>
                <div className="h-full">
                  <ResearchCard {...article} />
                </div>
              </FadeIn>
            ))}
          </div>

          {/* 2025 */}
          <FadeIn>
            <h3 className="text-xl font-semibold text-[#0A1638] mb-6 flex items-center gap-3">
              <span className="text-[#0A1638]">2025</span>
              <span className="w-8 h-px bg-drift-amber" /><span className="h-px flex-1 bg-[#DFE6F2]/50" />
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
            <h3 className="text-xl font-semibold text-[#0A1638] mb-6 flex items-center gap-3">
              <span className="text-[#0A1638]">2024</span>
              <span className="w-8 h-px bg-drift-amber" /><span className="h-px flex-1 bg-[#DFE6F2]/50" />
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
            <h3 className="text-xl font-semibold text-[#0A1638] mb-6 flex items-center gap-3">
              <span className="text-[#0A1638]">2023</span>
              <span className="w-8 h-px bg-drift-amber" /><span className="h-px flex-1 bg-[#DFE6F2]/50" />
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
      <section className="relative py-20 px-4 md:px-8 lg:px-16 bg-[#F4F7FC]">
        <div className="max-w-6xl mx-auto text-center">
          <FadeIn>
            <h2 className="font-grotesk text-2xl md:text-3xl font-semibold text-[#0A1638] mb-4">
              research partners
            </h2>
            <p className="text-[#5C6B8A] text-lg mb-12">
              collaborating with leading institutions to advance AI research
            </p>
          </FadeIn>

          <FadeIn delay={100}>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
              <a href="https://ai.jhu.edu/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2 opacity-70 hover:opacity-100 transition-opacity">
                <img src="/jhu-logo.png" alt="Johns Hopkins University" className="h-12 w-48 object-contain" />
                <div className="text-[#0A1638] font-semibold text-lg">
                  Johns Hopkins University
                </div>
              </a>
              <a href="https://www.microsoft.com/en-us/research/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2 opacity-70 hover:opacity-100 transition-opacity">
                <img src="/msr_logo.png" alt="Microsoft Research" className="h-12 w-40 object-contain" />
                <div className="text-[#0A1638] font-semibold text-lg">
                  Microsoft Research
                </div>
              </a>
              <a href="https://www.nomic.ai/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2 opacity-70 hover:opacity-100 transition-opacity">
                <img src="/nomic_logo.svg" alt="Nomic AI" className="h-16 w-16 object-contain" />
                <div className="text-[#0A1638] font-semibold text-lg">
                  Nomic AI
                </div>
              </a>
              <a href="https://www.jataware.com/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2 opacity-70 hover:opacity-100 transition-opacity">
                <div className="h-16 w-16 flex items-center justify-center bg-[#5C6B8A] rounded text-white font-bold text-lg">J</div>
                <div className="text-[#0A1638] font-semibold text-lg">
                  Jataware Corp
                </div>
              </a>
              <a href="https://www.calcifercomputing.com/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2 opacity-70 hover:opacity-100 transition-opacity">
                <img src="/calco_prof.png" alt="Calcifer Computing" className="h-16 w-16 rounded object-cover" />
                <div className="text-[#0A1638] font-semibold text-lg">
                  Calcifer Computing
                </div>
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 px-4 bg-gradient-to-b from-[#F4F7FC] to-white">
        <div className="max-w-3xl mx-auto text-center">
          <FadeIn>
            <h2 className="font-grotesk text-2xl md:text-3xl font-semibold text-[#0A1638] mb-4">
              interested in collaborating?
            </h2>
            <p className="text-[#5C6B8A] text-lg mb-8">
              we're always looking for research partners and collaborators.
            </p>
            <a
              href="mailto:info@helivan.io"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-[#0A1638] to-[#263C5C] text-white font-medium rounded-xl hover:shadow-lg hover:shadow-[#0A1638]/25 transition-all duration-300 hover:-translate-y-0.5"
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
      className="group relative flex flex-col p-6 bg-white border border-[#DFE6F2]/50 rounded-2xl hover:border-[#0A1638]/30 hover:shadow-xl hover:shadow-[#0A1638]/5 transition-all duration-300 hover:-translate-y-1 h-full"
    >
      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0A1638]/5 via-transparent to-[#33507A]/5 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300" />

      <div className="relative flex flex-col h-full">
        {/* Header with venue badge and link icon */}
        <div className="flex items-start justify-between mb-3">
          {venue ? (
            <span className="px-3 py-1 text-xs font-semibold text-white bg-gradient-to-r from-[#0A1638] to-[#263C5C] rounded-full">
              {venue}
            </span>
          ) : (
            <span className="px-3 py-1 text-xs font-medium text-[#5C6B8A] bg-[#F4F7FC] rounded-full">
              arXiv
            </span>
          )}
          <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[#F4F7FC] group-hover:bg-[#0A1638] transition-colors duration-300">
            <svg
              className="w-4 h-4 text-[#5C6B8A] group-hover:text-white transition-colors duration-300"
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
        <h3 className="text-base md:text-lg font-semibold text-[#0A1638] mb-2 leading-snug group-hover:text-[#263C5C] transition-colors">
          {title}
        </h3>

        {/* Subtitle */}
        <p className="text-[#5C6B8A] text-sm leading-relaxed mb-4 flex-grow">
          {subtitle}
        </p>

        {/* Tags */}
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-auto">
            {tags.map((tag, idx) => (
              <span
                key={idx}
                className="px-2 py-1 text-xs font-medium text-[#5C6B8A] bg-[#F4F7FC] rounded-full"
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
