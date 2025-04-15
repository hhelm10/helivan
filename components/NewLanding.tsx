import Link from "next/link";

// Beam component with exact properties specified
export const DiagonalBeam = ({
  top,
  left,
  height,
}: {
  top: string;
  left: string;
  height: string;
}) => {
  return (
    <div
      className="absolute pointer-events-none"
      style={{
        top,
        left,
        width: "91.452px",
        height,
        background:
          "radial-gradient(1458.4% 281.38% at 50.04% 49.98%, #6C8EFF 0%, rgba(108, 142, 255, 0.00) 100%)",
        transform: "rotate(-45.534deg)",
        filter: "blur(77px)",
        flexShrink: 0,
      }}
    ></div>
  );
};

export const NewLanding = () => {
  return (
    <div className="flex w-full min-h-screen bg-[#090F20] flex-col">
      {/* Container for all the light beams */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Three beams with exact specified properties but different heights and positions */}
        <DiagonalBeam top="-60%" left="25%" height="800px" />
        <DiagonalBeam top="-45%" left="25%" height="1100px" />
        <DiagonalBeam top="-35%" left="0%" height="800px" />
      </div>

      {/* Main content - this will be on top of the beams */}
      <div className="relative z-10">
        <div className="w-full flex justify-between pt-12 px-24">
          <div className="text-white font-normal text-3xl font-[Alexandria] leading-normal font-alexandria">
            // HELIVAN
          </div>
          <div className="flex flex-row items-center space-x-6">
            <Link
              href="/about"
              className="font-alexandria text-white font-light text-xl font-[Alexandria] leading-9 hover:text-blue-300 transition-colors"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="font-alexandria text-white font-light text-xl font-[Alexandria] leading-9 hover:text-blue-300 transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>
        <div className="flex flex-col w-full h-full justify-center align-center text-center">
          <div className="text-white pt-44 w-full text-8xl text-center font-light">
            AI-POWERED
          </div>
          <div className="text-white pt-0 w-full text-8xl text-center font-light">
            OPINION ANALYTICS
          </div>
          <div className="text-2xl text-white pt-10 w-full flex justify-center text-center">
            We help you understand the motivations behind legislative voting.
          </div>
        </div>
        <div className="pt-48">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="full"
            height="243"
            viewBox="0 0 1728 243"
            fill="none"
          >
            <g filter="url(#filter0_d_179_460)">
              <path
                d="M-89 166.5C-89 166.5 231.852 43 866.403 43C1434.91 43 1813 166.5 1813 166.5V226H-89V166.5Z"
                fill="#090F20"
              />
            </g>
            <defs>
              <filter
                id="filter0_d_179_460"
                x="-119"
                y="0"
                width="1962"
                height="243"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="-13" />
                <feGaussianBlur stdDeviation="15" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0.422021 0 0 0 0 0.556883 0 0 0 0 1 0 0 0 1 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_179_460"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_179_460"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
        </div>
        <div className="pt-48 w-full px-24 flex justify-between align-center">
          {/* LHS */}
          <div className="pt-40 w-[500px] font-raleway">
            <div className="font-bold text-5xl text-white font-raleway">
              Ask
            </div>
            <div className="font-bold text-4xl text-white font-raleway">
              Relevant Questions
            </div>
            <div className="text-xl text-white pt-4 font-raleway">
              Input questions into our software to generate an overview of
              relevant data expressed through digital twins.
            </div>
            <div className="flex justify-between w-full items-center mt-10">
              <div className=" flex items-center align-center justify-center px-8 w-min h-[50px] border-[1px] border-white rounded-[110px]">
                <div className="text-white text-xl font-alexandria">Role</div>
              </div>
              <div className="text-white text-base font-alexandria w-[300px] justify-self-start">
                Discover topics you care about
              </div>
            </div>
            <div className="mt-5 h-[1px] w-full flex bg-white" />
            <div className="flex justify-between w-full items-center mt-10">
              <div className="flex items-center align-center justify-center px-8 w-min h-[50px] border-[1px] border-white rounded-[110px]">
                <div className="text-white text-xl font-alexandria">
                  Benefit
                </div>
              </div>
              <div className="text-white text-base font-alexandria w-[300px] justify-self-start">
                Easily accessible synthesis of political opinions
              </div>
            </div>
            <div className="mt-5 h-[1px] w-full flex bg-white" />
            <div className="flex justify-between w-full items-center mt-10">
              <div className="flex items-center align-center justify-center px-8 w-min h-[50px] border-[1px] border-white rounded-[110px]">
                <div className="text-white text-xl font-alexandria">Target</div>
              </div>
              <div className="text-white text-base font-alexandria w-[300px] justify-self-start">
                Voters, educational institutions
              </div>
            </div>
            <div className="mt-5 h-[1px] w-full flex bg-white" />
            <div className="font-bold text-5xl text-white font-raleway pt-[500px]">
              Explore
            </div>
            <div className="font-bold text-4xl text-white font-raleway">
              Geometry of Opinions
            </div>
            <div className="text-xl text-white pt-4 font-raleway">
              View a map of congressional opinions and examine digital twins to
              explore specific positions on bills.
            </div>
            <div className="flex justify-between w-full items-center mt-10">
              <div className=" flex items-center align-center justify-center px-8 w-min h-[50px] border-[1px] border-white rounded-[110px]">
                <div className="text-white text-xl font-alexandria">Role</div>
              </div>
              <div className="text-white text-base font-alexandria w-[300px] justify-self-start">
                Discover topics you care about
              </div>
            </div>
            <div className="mt-5 h-[1px] w-full flex bg-white" />
            <div className="flex justify-between w-full items-center mt-10">
              <div className="flex items-center align-center justify-center px-8 w-min h-[50px] border-[1px] border-white rounded-[110px]">
                <div className="text-white text-xl font-alexandria">
                  Benefit
                </div>
              </div>
              <div className="text-white text-base font-alexandria w-[300px] justify-self-start">
                Easily accessible synthesis of political opinions
              </div>
            </div>
            <div className="mt-5 h-[1px] w-full flex bg-white" />
            <div className="flex justify-between w-full items-center mt-10">
              <div className="flex items-center align-center justify-center px-8 w-min h-[50px] border-[1px] border-white rounded-[110px]">
                <div className="text-white text-xl font-alexandria">Target</div>
              </div>
              <div className="text-white text-base font-alexandria w-[300px] justify-self-start">
                Voters, educational institutions
              </div>
            </div>
            <div className="mt-5 h-[1px] w-full flex bg-white" />
            <div className="font-bold text-5xl text-white font-raleway pt-[500px]">
              Interact
            </div>
            <div className="font-bold text-4xl text-white font-raleway">
              with Individuals
            </div>
            <div className="text-xl text-white pt-4 font-raleway">
              Chat with AI generated personas and pick their brains about
              established and incoming policy changes.
            </div>
            <div className="flex justify-between w-full items-center mt-10">
              <div className=" flex items-center align-center justify-center px-8 w-min h-[50px] border-[1px] border-white rounded-[110px]">
                <div className="text-white text-xl font-alexandria">Role</div>
              </div>
              <div className="text-white text-base font-alexandria w-[300px] justify-self-start">
                Discover topics you care about
              </div>
            </div>
            <div className="mt-5 h-[1px] w-full flex bg-white" />
            <div className="flex justify-between w-full items-center mt-10">
              <div className="flex items-center align-center justify-center px-8 w-min h-[50px] border-[1px] border-white rounded-[110px]">
                <div className="text-white text-xl font-alexandria">
                  Benefit
                </div>
              </div>
              <div className="text-white text-base font-alexandria w-[300px] justify-self-start">
                Easily accessible synthesis of political opinions
              </div>
            </div>
            <div className="mt-5 h-[1px] w-full flex bg-white" />
            <div className="flex justify-between w-full items-center mt-10">
              <div className="flex items-center align-center justify-center px-8 w-min h-[50px] border-[1px] border-white rounded-[110px]">
                <div className="text-white text-xl font-alexandria">Target</div>
              </div>
              <div className="text-white text-base font-alexandria w-[300px] justify-self-start">
                Voters, educational institutions
              </div>
            </div>
            <div className="mt-5 h-[1px] w-full flex bg-white" />
            <div className="font-bold text-5xl text-white font-raleway pt-[500px]">
              Predict
            </div>
            <div className="font-bold text-4xl text-white font-raleway">
              Coming Soon
            </div>
            <div className="text-xl text-white pt-4 font-raleway">
              Investigate likely positions on topics that may predict
              legislator’s voting.
            </div>
            <div className="flex justify-between w-full items-center mt-10">
              <div className=" flex items-center align-center justify-center px-8 w-min h-[50px] border-[1px] border-white rounded-[110px]">
                <div className="text-white text-xl font-alexandria">Role</div>
              </div>
              <div className="text-white text-base font-alexandria w-[300px] justify-self-start">
                Discover topics you care about
              </div>
            </div>
            <div className="mt-5 h-[1px] w-full flex bg-white" />
            <div className="flex justify-between w-full items-center mt-10">
              <div className="flex items-center align-center justify-center px-8 w-min h-[50px] border-[1px] border-white rounded-[110px]">
                <div className="text-white text-xl font-alexandria">
                  Benefit
                </div>
              </div>
              <div className="text-white text-base font-alexandria w-[300px] justify-self-start">
                Easily accessible synthesis of political opinions
              </div>
            </div>
            <div className="mt-5 h-[1px] w-full flex bg-white" />
            <div className="flex justify-between w-full items-center mt-10">
              <div className="flex items-center align-center justify-center px-8 w-min h-[50px] border-[1px] border-white rounded-[110px]">
                <div className="text-white text-xl font-alexandria">Target</div>
              </div>
              <div className="text-white text-base font-alexandria w-[300px] justify-self-start">
                Voters, educational institutions
              </div>
            </div>
            <div className="mt-5 h-[1px] w-full flex bg-white" />
          </div>
          {/* Divider */}
          <div className="flex flex-col items-center">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="14"
                viewBox="0 0 15 14"
                fill="none"
              >
                <ellipse
                  cx="7.5"
                  cy="6.98473"
                  rx="7.5"
                  ry="6.98473"
                  fill="#BBCBFD"
                />
              </svg>
            </div>
            <div className="bg-[#BBCBFD] w-[3px] h-80" />
            <div className="flex items-center justify-center w-24 h-24 border-[3px] border-[#BBCBFD] rounded-full">
              <span className="text-white text-3xl font-alexandria">1</span>
            </div>
            <div className="bg-[#BBCBFD] w-[3px] h-[900px]" />
            <div className="flex items-center justify-center w-24 h-24 border-[3px] border-[#BBCBFD] rounded-full">
              <span className="text-white text-3xl font-alexandria">2</span>
            </div>
            <div className="bg-[#BBCBFD] w-[3px] h-[900px]" />
            <div className="flex items-center justify-center w-24 h-24 border-[3px] border-[#BBCBFD] rounded-full">
              <span className="text-white text-3xl font-alexandria">3</span>
            </div>
            <div className="bg-[#BBCBFD] w-[3px] h-[900px]" />
            <div className="flex items-center justify-center w-24 h-24 border-[3px] border-[#BBCBFD] rounded-full">
              <span className="text-white text-3xl font-alexandria">4</span>
            </div>
            <div className="bg-[#BBCBFD] w-[3px] h-[500px]" />
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="14"
                viewBox="0 0 15 14"
                fill="none"
              >
                <ellipse
                  cx="7.5"
                  cy="6.98473"
                  rx="7.5"
                  ry="6.98473"
                  fill="#BBCBFD"
                />
              </svg>
            </div>
          </div>
          {/* RHS */}
          <div className="flex flex-col pt-40">
            <div className="shadow-[0px_0px_24px_1px_#6C8EFF] border-[1px] border-white rounded-[12px] w-[500px] h-[520px]" />
            <div className="mt-[470px] shadow-[0px_0px_24px_1px_#6C8EFF] border-[1px] border-white rounded-[12px] w-[500px] h-[520px]" />
            <div className="mt-[470px] shadow-[0px_0px_24px_1px_#6C8EFF] border-[1px] border-white rounded-[12px] w-[500px] h-[520px]" />
            <div className="mt-[470px] shadow-[0px_0px_24px_1px_#6C8EFF] border-[1px] border-white rounded-[12px] w-[500px] h-[520px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewLanding;
