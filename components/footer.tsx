import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="w-full border-t border-hairline mt-auto">
      <div className="max-w-[920px] mx-auto px-6 py-[22px] flex flex-wrap items-center justify-between gap-x-6 gap-y-3 font-mono text-[12.5px] text-brand-muted">
        <span className="font-grotesk font-bold tracking-[0.075em] text-midnight text-[13px]">
          HELIVAN
        </span>
        <span className="flex flex-wrap items-center gap-x-5 gap-y-2">
          <Link href="/thesis" className="hover:text-midnight transition-colors">
            thesis
          </Link>
          <Link href="/research" className="hover:text-midnight transition-colors">
            research
          </Link>
          <Link href="/apps" className="hover:text-midnight transition-colors">
            apps
          </Link>
          <a href="mailto:info@helivan.io" className="hover:text-midnight transition-colors">
            info@helivan.io
          </a>
          <a
            href="https://www.linkedin.com/company/helivanio/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-midnight transition-colors"
          >
            linkedin
          </a>
        </span>
        <span>© 2026 helivan corp.</span>
      </div>
    </footer>
  );
};
