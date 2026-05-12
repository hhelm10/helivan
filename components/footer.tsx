export const Footer = () => {
  return (
    <div className="flex flex-col gap-0 w-full mt-auto bg-[#F6F7F9] pb-8">
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
