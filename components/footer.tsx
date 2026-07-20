import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
  return (
    <div className="flex flex-col gap-0 w-full mt-auto bg-mist pb-8">
      {/* Divider */}
      <div className="flex w-full h-[1px] bg-hairline" />

      {/* Nav & contact */}
      <div className="flex flex-col md:flex-row w-full justify-between items-center pt-8 px-4 md:px-[70px] gap-6 md:gap-0">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/brand/helivan-mark-midnight.svg"
            alt="Helivan"
            width={24}
            height={24}
          />
          <span className="font-grotesk font-bold text-midnight text-sm tracking-[0.075em]">
            HELIVAN
          </span>
        </Link>
        <nav className="flex flex-row items-center gap-6 md:gap-8">
          <Link
            href="/research"
            className="text-brand-muted text-sm font-medium hover:text-midnight transition-colors"
          >
            research
          </Link>
          <Link
            href="/apps"
            className="text-brand-muted text-sm font-medium hover:text-midnight transition-colors"
          >
            apps
          </Link>
          <a
            href="mailto:info@helivan.io"
            className="text-brand-muted text-sm font-medium hover:text-midnight transition-colors"
          >
            info@helivan.io
          </a>
        </nav>
      </div>

      {/* Bottom copyright & social */}
      <div className="flex flex-col md:flex-row w-full justify-center md:justify-between items-center py-6 px-4 md:px-[70px] gap-4 md:gap-0">
        <div className="text-brand-muted text-sm font-normal text-center md:text-left">
          &copy; 2026 helivan corp. all rights reserved.
        </div>
        <div
          className="cursor-pointer"
          onClick={() => {
            window.open("https://www.linkedin.com/company/helivanio/", "_blank");
          }}
        >
          <LinkedIn />
        </div>
      </div>
    </div>
  );
};

const LinkedIn = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
        stroke="#33507A"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect
        x="2"
        y="9"
        width="4"
        height="12"
        stroke="#33507A"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle
        cx="4"
        cy="4"
        r="2"
        stroke="#33507A"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
