import { useEffect, useRef, useState } from "react";
import { Footer } from "./footer";
import Header from "./header";

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
      className={`transition-opacity duration-1000 ease-in-out ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

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
        <DiagonalBeam top="-60%" left="0%" height="700px" />
        <DiagonalBeam top="-45%" left="0%" height="900px" />
        <DiagonalBeam top="-35%" left="0%" height="700px" />
      </div>

      {/* Main content - this will be on top of the beams */}
      <div className="relative z-10">
        <Header />
        <div className="flex flex-col w-full h-full justify-center align-center text-center">
          <FadeIn>
            <div className="text-white pt-44 w-full text-4xl md:text-5xl lg:text-7xl text-center font-light">
              GENERATING OPINIONS THAT MATTER.
            </div>
            <div className="text-white pt-6 w-full text-3xl md:text-4xl lg:text-6xl text-center font-light">
              TO YOU.
            </div>
            <div className="text-lg md:text-xl lg:text-2xl text-white pt-10 w-full flex justify-center text-center font-light">
              Informed-opinion generation and population analysis is here.
            </div>
          </FadeIn>
        </div>
        <div className="pt-48">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="auto"
            viewBox="0 0 1728 243"
            preserveAspectRatio="xMidYMid meet"
            className="w-full h-auto max-h-[243px]"
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
        {/* <div className="pt-48 w-full px-4 md:px-8 lg:px-24 flex flex-col xl:flex-row justify-center xl:justify-between gap-8 align-center">
         // LHS
          <div className="pt-10 xl:pt-[300px] w-full max-w-[500px] mx-auto xl:mx-0 font-raleway">
            <FadeIn>
              <div className="font-lorin font-bold text-3xl md:text-4xl lg:text-5xl text-white text-center font-raleway">
                Create
              </div>
              <div className="font-lorin font-bold text-lg md:text-xl lg:text-2xl text-white text-center font-raleway pt-8">
              Entire opinion landscapes based on your document
              </div>
            
            </FadeIn>
            
            // Mobile GIF for Select section - hidden on xl screens
            <div className="mt-8 flex justify-center xl:hidden">
              <div className="shadow-[0px_0px_24px_1px_#6C8EFF] border-[1px] border-white rounded-[12px] overflow-hidden">
                <img
                  src="/gifs/Select.GIF"
                  alt="Select GIF"
                  className="w-full max-w-[600px] h-auto object-contain block"
                />
              </div>
            </div>
            
            // Section 1
            <div className="mt-36 md:mt-0">
              <FadeIn>
              <div className="font-lorin font-bold text-3xl md:text-4xl lg:text-5xl text-white text-center font-raleway md:pt-[300px] xl:pt-[750px]">
                Explore
              </div>
              <div className="font-lorin font-bold text-lg md:text-xl lg:text-2xl text-white text-center font-raleway pt-8">
              Similarities of different individuals and demographics for document-specific subtopics
              </div>
                
                
              </FadeIn>
            </div>
            
            // Mobile GIF for Ask section - hidden on xl screens
            <div className="mt-8 flex justify-center xl:hidden">
              <div className="shadow-[0px_0px_24px_1px_#6C8EFF] border-[1px] border-white rounded-[12px] overflow-hidden">
                <img
                  src="/gifs/Ask.GIF"
                  alt="Ask GIF"
                  className="w-full max-w-[600px] h-auto object-contain block"
                />
              </div>
            </div>

            // Section 2 
            <div className="mt-36 md:mt-0">
              <FadeIn>
                
                <div className="font-lorin font-bold text-3xl md:text-4xl lg:text-5xl text-white text-center font-raleway md:pt-[300px] xl:pt-[750px]">
                Interact
              </div>
              <div className="font-lorin font-bold text-lg md:text-xl lg:text-2xl text-white text-center font-raleway pt-8">
              Directly with individuals, panels, or crowds to better understand their positions
              </div>
                
              </FadeIn>
            </div>
            
            // Mobile GIF for Explore section - hidden on xl screens
            <div className="mt-8 flex justify-center xl:hidden">
              <div className="shadow-[0px_0px_24px_1px_#6C8EFF] border-[1px] border-white rounded-[12px] overflow-hidden">
                <img
                  src="/gifs/Explore.GIF"
                  alt="Explore GIF"
                  className="w-full max-w-[600px] h-auto object-contain block"
                />
              </div>
            </div>

            // Section 3 
            <div className="mt-36 md:mt-0">
              <FadeIn>
                <div className="font-lorin font-bold text-3xl md:text-4xl lg:text-5xl text-white text-center font-raleway md:pt-[300px] xl:pt-[700px]">
                Predict
              </div>
              <div className="font-lorin font-bold text-lg md:text-xl lg:text-2xl text-white text-center font-raleway pt-8">
              Individual and demographic behavior relevant to your content
              </div>
                
              </FadeIn>
            </div>
            
            // Mobile GIF for Interact section - hidden on xl screens 
            <div className="mt-8 flex justify-center xl:hidden">
              <div className="shadow-[0px_0px_24px_1px_#6C8EFF] border-[1px] border-white rounded-[12px] overflow-hidden">
                <img
                  src="/gifs/Interact.GIF"
                  alt="Interact GIF"
                  className="w-full max-w-[600px] h-auto object-contain block"
                />
              </div>
            </div>
          </div>

         // Divider - Hide on mobile, show on xl 
          <div className="hidden xl:flex flex-col items-center">
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
            <FadeIn threshold={0.5}>
              <div className="flex items-center justify-center w-24 h-24 border-[3px] border-[#BBCBFD] rounded-full">
                <span className="font-lorin text-white text-3xl ">1</span>
              </div>
            </FadeIn>
            <div className="bg-[#BBCBFD] w-[3px] h-[770px]" />
            <FadeIn threshold={0.5}>
              <div className="flex items-center justify-center w-24 h-24 border-[3px] border-[#BBCBFD] rounded-full">
                <span className="font-lorin text-white text-3xl ">2</span>
              </div>
            </FadeIn>
            <div className="bg-[#BBCBFD] w-[3px] h-[860px]" />
            <FadeIn threshold={0.5}>
              <div className="flex items-center justify-center w-24 h-24 border-[3px] border-[#BBCBFD] rounded-full">
                <span className="font-lorin text-white text-3xl ">3</span>
              </div>
            </FadeIn>
            <div className="bg-[#BBCBFD] w-[3px] h-[770px]" />
            <FadeIn threshold={0.5}>
              <div className="flex items-center justify-center w-24 h-24 border-[3px] border-[#BBCBFD] rounded-full">
                <span className="font-lorin text-white text-3xl ">4</span>
              </div>
            </FadeIn>
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

          // RHS - Only show on xl screens
          <div className="hidden xl:flex flex-col pt-[220px]">
            <FadeIn delay={200}>
              <div className="flex justify-center">
                <div className="shadow-[0px_0px_24px_1px_#6C8EFF] border-[1px] border-white rounded-[12px] overflow-hidden">
                  <img
                    src="/gifs/Create.GIF"
                    alt="Create GIF"
                    className="w-full h-full object-cover block"
                  />
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={200}>
              <div className="mt-[510px] flex justify-center">
                <div className="shadow-[0px_0px_24px_1px_#6C8EFF] border-[1px] border-white rounded-[12px] overflow-hidden">
                  <img
                    src="/gifs/Explore.GIF"
                    alt="Explore GIF"
                    className="w-[600px] min-w-[600px] h-auto object-contain block"
                  />
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={200}>
              <div className="mt-[570px] flex justify-center">
                <div className="shadow-[0px_0px_24px_1px_#6C8EFF] border-[1px] border-white rounded-[12px] overflow-hidden mt-10">
                  <img
                    src="/gifs/Interact.GIF"
                    alt="Interact GIF"
                    className="w-[600px] min-w-[600px] h-auto object-contain block"
                  />
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={200}>
              <div className="mt-[520px] flex justify-center">
                <div className="shadow-[0px_0px_24px_1px_#6C8EFF] border-[1px] border-white rounded-[12px] overflow-hidden">
                  <img
                    src="/gifs/Predict.GIF"
                    alt="Predict GIF"
                    className="w-[600px] min-w-[600px] h-auto object-contain block"
                  />
                </div>
              </div>
            </FadeIn>
          </div>
        </div> */}
        <Footer />
      </div>
    </div>
  );
};

export default NewLanding;
