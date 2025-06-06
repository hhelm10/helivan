import { BetaworksLogo, DarpaLogo, FactorialLogo } from "./logos/backed-by";
import { JohnsHopkins, MicrosoftLogo, NomicLogo } from "./logos/research";

export const Footer = () => {
  return (
    <div className="flex flex-col gap-0 w-full mt-[20px] bg-[#090F20] pb-8">
      {/* Main footer content - responsive layout */}
      <div className="flex flex-col md:flex-row w-full justify-between items-center md:items-start p-4 md:p-[50px] md:px-[70px] gap-8 md:gap-0">
        {/* Company info */}
        <div className="flex flex-col gap-[28px] items-center md:items-start">
          <div className="text-white text-2xl font-normal text-center md:text-left">// HELIVAN</div>
          <div className="text-white text-med font-normal text-center md:text-left">
            info@helivan.io
          </div>
        </div>

        {/* Research collaborators - visible on all screens */}
        <div className="flex flex-col gap-[12px] items-center md:items-start">
          <div className="text-white text-xl font-light text-center md:text-left">
            Research in collaboration with:
          </div>
          <div className="flex flex-col gap-[6px] items-center md:items-start md:ml-[-12px]">
            <div className="flex flex-row gap-[12px] items-center justify-center md:justify-start">
              <JohnsHopkins />
              <div className="text-white text-base md:text-xl font-light">
                Johns Hopkins University
              </div>
            </div>
            <div className="flex flex-row gap-[12px] items-center justify-center md:justify-start">
              <MicrosoftLogo />
              <div className="text-white text-base md:text-xl font-light">
                Microsoft Research
              </div>
            </div>
            <div className="flex flex-row gap-[12px] items-center pt-4 justify-center md:justify-start md:pl-3">
              <NomicLogo />
              <div className="text-white text-base md:text-xl font-light">
                Nomic AI
              </div>
            </div>
          </div>
        </div>

        {/* Backed by section */}
        <div className="flex flex-col gap-[24px] items-center md:items-start">
          <div className="text-white text-xl font-light text-center md:text-left">Backed by:</div>
          <div className="flex flex-col gap-6 items-center md:items-start">
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <div
                onClick={() => {
                  window.open("https://www.betaworks.com/", "_blank");
                }}
                className="flex flex-row gap-[12px] cursor-pointer border-[#6C8EFF] py-[8px] px-[12px] border-[1px] rounded-[24px]"
              >
                <BetaworksLogo />
                <div className="text-sm md:text-md text-white font-normal">Betaworks</div>
              </div>
              <div
                onClick={() => {
                  window.open("https://www.factorialcap.com/", "_blank");
                }}
                className="flex flex-row gap-[12px] cursor-pointer border-[#6C8EFF] py-[8px] px-[12px] border-[1px] rounded-[24px]"
              >
                <FactorialLogo />
                <div className="text-sm md:text-md font-normal text-white">Factorial</div>
              </div>
            </div>
            <div
              onClick={() => {
                window.open("https://www.darpa.mil/news/2024/AIQ-evaluations", "_blank");
              }}
              className="w-min flex flex-row gap-[12px] cursor-pointer border-[#6C8EFF] py-[8px] px-[12px] border-[1px] rounded-[24px]"
            >
              <div className="flex justify-center items-center bg-white rounded-[4px] w-[24px] h-[24px]">
                <DarpaLogo />
              </div>
              <div className="text-sm md:text-md font-normal text-white">DARPA</div>
            </div>
          </div>
        </div>
      </div>

      {/* Extra vertical space */}
      <div className="h-10 md:h-16"></div>

      {/* Divider */}
      <div className="flex w-full h-[1px] bg-[#B5B7BC]" />

      {/* Bottom copyright & social */}
      <div className="flex flex-col md:flex-row w-full justify-center md:justify-between items-center py-8 md:py-6 md:h-[100px] px-4 md:px-[70px] gap-4 md:gap-0">
        <div className="text-white text-sm md:text-med font-light text-center md:text-left">
          © 2025 Helivan Corp. All rights reserved.
        </div>
        <div
          className="cursor-pointer"
          onClick={() => {
            window.open("https://www.linkedin.com/", "_blank");
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
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <rect width="39" height="39" fill="url(#pattern0_481_57)" />
      <defs>
        <pattern
          id="pattern0_481_57"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use xlinkHref="#image0_481_57" transform="scale(0.00444444)" />
        </pattern>
        <image
          id="image0_481_57"
          width="225"
          height="225"
          preserveAspectRatio="none"
          xlinkHref="data:image/png;base64,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"
        />
      </defs>
    </svg>
  );
};
