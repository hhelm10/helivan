import { BetaworksLogo, DarpaLogo, FactorialLogo } from "./logos/backed-by";
import { JohnsHopkins, MicrosoftLogo, NomicLogo } from "./logos/research";

export const Footer = () => {
  return (
    <div className="flex flex-col gap-0 w-full mt-auto bg-[#F6F7F9] pb-8">
      {/* Main footer content - responsive layout */}
      <div className="flex flex-col md:flex-row w-full justify-between items-center md:items-start p-4 md:p-[50px] md:px-[70px] gap-8 md:gap-0">
        {/* Company info */}
        <div className="flex flex-col gap-[28px] items-center md:items-start">
          <div className="text-[#114471] text-2xl font-medium text-center md:text-left">
            // HELIVAN
          </div>
          <div className="text-[#486884] text-base font-normal text-center md:text-left">
            info@helivan.io
          </div>
        </div>

        {/* Research collaborators - visible on all screens */}
        <div className="flex flex-col gap-[12px] items-center md:items-start">
          <div className="text-[#114471] text-xl font-medium text-center md:text-left">
            Research in collaboration with:
          </div>
          <div className="flex flex-col gap-[8px] items-center md:items-start">
            <div className="flex flex-row gap-[12px] items-center justify-center md:justify-start">
              <div className="w-[40px] h-[40px] flex items-center justify-center flex-shrink-0">
                <JohnsHopkins />
              </div>
              <div className="text-[#486884] text-base md:text-lg font-normal">
                Johns Hopkins University
              </div>
            </div>
            <div className="flex flex-row gap-[12px] items-center justify-center md:justify-start">
              <div className="w-[40px] h-[40px] flex items-center justify-center flex-shrink-0">
                <MicrosoftLogo />
              </div>
              <div className="text-[#486884] text-base md:text-lg font-normal">
                Microsoft Research
              </div>
            </div>
            <div className="flex flex-row gap-[12px] items-center justify-center md:justify-start">
              <div className="w-[40px] h-[40px] flex items-center justify-center flex-shrink-0">
                <NomicLogo />
              </div>
              <div className="text-[#486884] text-base md:text-lg font-normal">
                Nomic AI
              </div>
            </div>
            <div className="flex flex-row gap-[12px] items-center justify-center md:justify-start">
              <div className="w-[40px] h-[40px] flex items-center justify-center flex-shrink-0 bg-[#486884] rounded text-white font-bold text-sm">
                J
              </div>
              <div className="text-[#486884] text-base md:text-lg font-normal">
                Jataware Corp
              </div>
            </div>
            <div className="flex flex-row gap-[12px] items-center justify-center md:justify-start">
              <div className="w-[40px] h-[40px] flex items-center justify-center flex-shrink-0">
                <img src="/calco_prof.png" alt="Calcifer Computing" className="w-[40px] h-[40px] rounded object-cover" />
              </div>
              <div className="text-[#486884] text-base md:text-lg font-normal">
                Calcifer Computing
              </div>
            </div>
          </div>
        </div>

        {/* Backed by section */}
        <div className="flex flex-col gap-[24px] items-center md:items-start">
          <div className="text-[#114471] text-xl font-medium text-center md:text-left">
            Backed by:
          </div>
          <div className="flex flex-col gap-6 items-center md:items-start">
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <div
                onClick={() => {
                  window.open("https://www.betaworks.com/", "_blank");
                }}
                className="flex flex-row gap-[12px] cursor-pointer border-[#AFBEC6] hover:border-[#114471] py-[8px] px-[12px] border-[1px] rounded-[24px] transition-colors"
              >
                <BetaworksLogo />
                <div className="text-sm md:text-base text-[#486884] font-normal">
                  Betaworks
                </div>
              </div>
              <div
                onClick={() => {
                  window.open("https://www.factorialcap.com/", "_blank");
                }}
                className="flex flex-row gap-[12px] cursor-pointer border-[#AFBEC6] hover:border-[#114471] py-[8px] px-[12px] border-[1px] rounded-[24px] transition-colors"
              >
                <FactorialLogo />
                <div className="text-sm md:text-base font-normal text-[#486884]">
                  Factorial
                </div>
              </div>
            </div>
            <div
              onClick={() => {
                window.open(
                  "https://www.darpa.mil/news/2024/AIQ-evaluations",
                  "_blank"
                );
              }}
              className="w-min flex flex-row gap-[12px] cursor-pointer border-[#AFBEC6] hover:border-[#114471] py-[8px] px-[12px] border-[1px] rounded-[24px] transition-colors"
            >
              <div className="flex justify-center items-center bg-white rounded-[4px] w-[24px] h-[24px]">
                <DarpaLogo />
              </div>
              <div className="text-sm md:text-base font-normal text-[#486884]">
                DARPA
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Extra vertical space */}
      <div className="h-10 md:h-16"></div>

      {/* Divider */}
      <div className="flex w-full h-[1px] bg-[#AFBEC6]" />

      {/* Bottom copyright & social */}
      <div className="flex flex-col md:flex-row w-full justify-center md:justify-between items-center py-8 md:py-6 md:h-[100px] px-4 md:px-[70px] gap-4 md:gap-0">
        <div className="text-[#486884] text-sm md:text-base font-normal text-center md:text-left">
          &copy; 2026 Helivan Corp. All rights reserved.
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
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
        stroke="#486884"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect
        x="2"
        y="9"
        width="4"
        height="12"
        stroke="#486884"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle
        cx="4"
        cy="4"
        r="2"
        stroke="#486884"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
