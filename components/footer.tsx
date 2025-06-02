import { BetaworksLogo, DarpaLogo, FactorialLogo } from "./logos/backed-by";
import { JohnsHopkins, MicrosoftLogo, NomicLogo } from "./logos/research";

export const Footer = () => {
  return (
    <div className="flex flex-col gap-0 w-full h-[380px] mt-[20px] bg-[#090F20]">
      {/* I want this div to space items between horizontally */}
      <div className="flex flex-row w-full h-[300px] justify-between items-start h-[300px]  p-[50px] px-[70px]">
        <div className="flex flex-col gap-[28px]">
          <div className="text-white text-2xl font-normal">// HELIVAN</div>
          <div className="text-white text-med font-normal">
            info@helivan.io
          </div>
        </div>
        <div className="flex flex-col gap-[28px]">
          
          <div className="text-white text-xl font-light">
            Research in collaboration with:
          </div>
          <div className="flex flex-col gap-[6px] ml-[-12px]">
            <div className="flex flex-row gap-[12px] items-center justify-start">
              <JohnsHopkins />
            <div className="text-white text-xl font-light">
              Johns Hopkins University
            </div>
            </div>
            <div className="flex flex-row gap-[12px] items-center justify-start">
              <MicrosoftLogo />
            <div className="text-white text-xl font-light">
             Microsoft Research
            </div>
            </div>
            <div className="flex flex-row gap-[24px] items-center pt-4 justify-start pl-3">
              <NomicLogo />
            <div className="text-white text-xl font-light">
              Nomic AI
            </div>
            </div>
            
            
          </div>
        </div>
        <div className="flex flex-col gap-[24px]">
          <div className="text-white text-l font-light">Backed by</div>
          <div className="flex flex-col gap-6">
          <div className="flex flex-row gap-4">
            <div
              onClick={() => {
                window.open("https://www.betaworks.com/", "_blank");
              }}
              className="flex flex-row gap-[12px] cursor-pointer border-[#6C8EFF] py-[8px] px-[12px] border-[1px] rounded-[24px]"
              
            >
              <BetaworksLogo />
              <div className='text-md text-white font-normal'>Betaworks</div>
            </div>
            <div
              onClick={() => {
                window.open("https://www.factorialcap.com/", "_blank");
              }}
              className="flex flex-row gap-[12px] cursor-pointer border-[#6C8EFF] py-[8px] px-[12px] border-[1px] rounded-[24px]"
              
            >
              <FactorialLogo />
              <div className='text-md font-normal text-white'>Factorial</div>
            </div>
            
            </div>
            <div
              onClick={() => {
                window.open("https://www.darpa.mil/news/2024/AIQ-evaluations", "_blank");
              }}
              className="w-min flex flex-row gap-[12px] cursor-pointer border-[#6C8EFF] py-[8px] px-[12px] border-[1px] rounded-[24px]"
              
            >
              <div className="flex justify-center items-center bg-white rounded-[4px] w-[24px] h-[24px]">
              <DarpaLogo /></div>
              <div className='text-md font-normal text-white'>DARPA</div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full h-[1px] bg-[#B5B7BC]" />
      <div className="flex w-full justify-between items-center h-full px-[70px]">
        <div className="text-white text-med font-light">
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

const Betaworks = () => {
  return (
    <svg
      width="45"
      height="45"
      viewBox="0 0 45 45"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      style={{ zIndex: 5 }}
    >
      <rect
        x="0.5"
        y="0.5"
        width="44"
        height="44"
        rx="11.5"
        fill="url(#pattern0_481_46)"
        stroke="white"
      />
      <defs>
        <pattern
          id="pattern0_481_46"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use xlinkHref="#image0_481_46" transform="scale(0.00444444)" />
        </pattern>
        <image
          id="image0_481_46"
          width="225"
          height="225"
          preserveAspectRatio="none"
          xlinkHref="data:image/png;base64,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"
        />
      </defs>
    </svg>
  );
};

const Factorial = () => {
  return (
    <svg
      width="45"
      height="45"
      viewBox="0 0 45 45"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <rect
        x="0.5"
        y="0.5"
        width="44"
        height="44"
        rx="11.5"
        fill="url(#pattern0_481_52)"
        stroke="white"
      />
      <defs>
        <pattern
          id="pattern0_481_52"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use xlinkHref="#image0_481_52" transform="scale(0.005)" />
        </pattern>
        <image
          id="image0_481_52"
          width="200"
          height="200"
          preserveAspectRatio="none"
          xlinkHref="data:image/png;base64,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"
        />
      </defs>
    </svg>
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
