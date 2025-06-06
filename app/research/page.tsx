"use client";
import { Footer } from "@/components/footer";
import Header from "@/components/header";
import { FadeIn } from "@/components/NewLanding";

export default async function Research() {
  const articles = [
    {
      url: "https://arxiv.org/pdf/2505.00006",
      title:
        "Toward a Digital Twin of U.S. Congress",
      num: "01",
      subtitle:
        "Empirical evidence that a collection of language models parameterized by real people's data satisfies the definition of a digital twin.",
    },
    {
      url: "https://arxiv.org/abs/2410.01106",
      title:
        "Statistical inference on black-box generative models in the data kernel perspective space",
      num: "02",
      subtitle:
        "Providing theoretical and empirical support for predicting the behavior of generative models using vector representations of population of models.",
    },
    {
      url: "https://arxiv.org/abs/2412.06834",
      title:
        "Investigating social alignment via mirroring in a system of interacting language models",
      num: "03",
      subtitle:
        'Investigating the effect of a simple "mirroring" mechanism on the dynamics of a system of interacting language models.',
    },
    {
      url: "https://arxiv.org/abs/2409.17308",
      title:
        "Consistent estimation of generative model representations in the data kernel perspective space",

      num: "04",
      subtitle:
        "Providing theoretical support for using vector representations of populations of generative model.",
    },
  ];
  return (
    <div className="flex w-full min-h-screen bg-[#090F20] flex-col">
      <div className="absolute inset-0 overflow-hidden">
        {/* Three beams with exact specified properties but different heights and positions */}
        <div className="flex flex-col items-center gap-1">
          <Squiggles />
        </div>
      </div>

      {/* Main content - this will be on top of the beams */}
      <div className="relative z-10">
        <Header />
        <div className="font-light flex flex-col w-full h-full justify-center align-center text-center px-4 md:px-0">
          <FadeIn>
            <div className="text-white pt-16 md:pt-20 lg:pt-44 w-full text-3xl lg:text-6xl text-center font-light">
              RESEARCH
            </div>
            <div className="font-light text-base md:text-lg lg:text-2xl text-white pt-6 md:pt-8 lg:pt-[67px] w-full max-w-3xl mx-auto flex justify-center text-center px-4 md:px-6 lg:px-0">
              Our research has allowed us to be the first to provide statistical
              evidence that ...
            </div>
          </FadeIn>
        </div>
        <div className="pt-12 md:pt-16 lg:pt-24 flex flex-col w-full h-full items-center align-center">
          <FadeIn>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="32"
              viewBox="0 0 30 41"
              fill="none"
              className="md:w-[30px] md:h-[41px]"
            >
              <path
                d="M17 2C17 0.89543 16.1046 -4.82823e-08 15 0C13.8954 4.82823e-08 13 0.895431 13 2L17 2ZM13.5858 40.4142C14.3668 41.1953 15.6332 41.1953 16.4142 40.4142L29.1421 27.6863C29.9232 26.9052 29.9232 25.6389 29.1421 24.8579C28.3611 24.0768 27.0948 24.0768 26.3137 24.8579L15 36.1716L3.68629 24.8579C2.90524 24.0768 1.63891 24.0768 0.857865 24.8579C0.0768166 25.6389 0.0768167 26.9052 0.857866 27.6863L13.5858 40.4142ZM13 2L13 39L17 39L17 2L13 2Z"
                fill="white"
              />
            </svg>
          </FadeIn>
        </div>
        <div className="flex flex-col items-center justify-center min-h-screen px-4 md:px-8 lg:px-0">
          <div className="relative flex justify-center items-center w-full">
            {/* Container for all article boxes */}
            <div className="relative flex flex-col items-center lg:flex-row gap-5 lg:gap-0 mt-8 md:mt-0 mx-auto">
              {articles.map((article, idx) => {
                return <ResearchBox key={idx} index={idx} {...article} />;
              })}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

const ResearchBox = ({
  num,
  title,
  subtitle,
  url,
  index,
}: {
  num: string;
  title: string;
  subtitle: string;
  url: string;
  index: number;
}) => {
  // Calculate z-index: first item (index 0) should have highest z-index
  // Start at 30 and decrease by 10 for each item, ensuring it never goes below 0
  const baseZIndex = Math.max(0, 30 - index * 10);

  // First item shouldn't have negative margin on desktop
  const marginClass = index > 0 ? "lg:-ml-10" : "";

  return (
    <div
      className={`relative rounded-3xl bg-gray-900 ${marginClass} transition-all duration-300 p-4 md:p-[30px] lg:p-[40px] flex flex-col gap-3 md:gap-4 lg:gap-[27px] w-full md:max-w-[320px] lg:w-[350px] mx-auto lg:mx-0 h-[280px] md:h-[400px]`}
      style={{
        boxShadow: "0px 0px 74px 0px rgba(0, 123, 255, 0.30)",
        backgroundColor: "#090F20",
        transition: "0.2s",
        cursor: "pointer",
        zIndex: baseZIndex,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.zIndex = "30";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.zIndex = baseZIndex.toString();
      }}
      onClick={() => {
        window.open(url, "_blank");
      }}
    >
      <div className="flex flex-row w-full justify-between align-center">
        <div className="text-white text-xl md:text-2xl lg:text-4xl">{num}</div>
        <Arrow />
      </div>
      <div className="text-md md:text-lg lg:text-lg text-white h-auto">{title}</div>
      <div className="text-sm md:text-md lg:text-md font-light text-white h-auto">{subtitle}</div>
    </div>
  );
};

const Arrow = () => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="md:w-[18px] md:h-[18px] lg:w-[20px] lg:h-[20px]"
    >
      <path
        d="M0.93934 17.0106C0.353553 17.5964 0.353553 18.5461 0.93934 19.1319C1.52513 19.7177 2.47487 19.7177 3.06066 19.1319L0.93934 17.0106ZM19.5712 1.99998C19.5712 1.17155 18.8997 0.499981 18.0712 0.499981L4.57125 0.499981C3.74282 0.499981 3.07125 1.17155 3.07125 1.99998C3.07125 2.82841 3.74282 3.49998 4.57125 3.49998H16.5712V15.5C16.5712 16.3284 17.2428 17 18.0712 17C18.8997 17 19.5712 16.3284 19.5712 15.5L19.5712 1.99998ZM3.06066 19.1319L19.1319 3.06064L17.0106 0.939321L0.93934 17.0106L3.06066 19.1319Z"
        fill="white"
      />
    </svg>
  );
};

const Squiggles = () => {
  return (
    <svg
      width="1728"
      height="719"
      viewBox="0 0 1728 719"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 378.374C260.127 393.209 418.883 479.06 666.097 416.361C879.74 362.177 974.724 198.983 1172.81 117.961C1392.11 28.2619 1480.17 23.2547 1728 1"
        stroke="url(#paint0_linear_222_66)"
        stroke-opacity="0.6"
      />
      <path
        d="M0 387.374C260.127 402.209 418.883 488.06 666.097 425.361C879.74 371.177 974.724 207.983 1172.81 126.961C1392.11 37.2619 1480.17 32.2547 1728 10"
        stroke="url(#paint1_linear_222_66)"
        stroke-opacity="0.6"
      />
      <path
        d="M0 396.374C260.127 411.209 418.883 497.06 666.097 434.361C879.74 380.177 974.724 216.983 1172.81 135.961C1392.11 46.2619 1480.17 41.2547 1728 19"
        stroke="url(#paint2_linear_222_66)"
        stroke-opacity="0.6"
      />
      <path
        d="M0 405.374C260.127 420.209 418.883 506.06 666.097 443.361C879.74 389.177 974.724 225.983 1172.81 144.961C1392.11 55.2619 1480.17 50.2547 1728 28"
        stroke="url(#paint3_linear_222_66)"
        stroke-opacity="0.6"
      />
      <path
        d="M0 414.374C260.127 429.209 418.883 515.06 666.097 452.361C879.74 398.177 974.724 234.983 1172.81 153.961C1392.11 64.2619 1480.17 59.2547 1728 37"
        stroke="url(#paint4_linear_222_66)"
        stroke-opacity="0.6"
      />
      <path
        d="M0 423.374C260.127 438.209 418.883 524.06 666.097 461.361C879.74 407.177 974.724 243.983 1172.81 162.961C1392.11 73.2619 1480.17 68.2547 1728 46"
        stroke="url(#paint5_linear_222_66)"
        stroke-opacity="0.6"
      />
      <path
        d="M0 432.374C260.127 447.209 418.883 533.06 666.097 470.361C879.74 416.177 974.724 252.983 1172.81 171.961C1392.11 82.2619 1480.17 77.2547 1728 55"
        stroke="url(#paint6_linear_222_66)"
        stroke-opacity="0.6"
      />
      <path
        d="M0 441.374C260.127 456.209 418.883 542.06 666.097 479.361C879.74 425.177 974.724 261.983 1172.81 180.961C1392.11 91.2619 1480.17 86.2547 1728 64"
        stroke="url(#paint7_linear_222_66)"
        stroke-opacity="0.6"
      />
      <path
        d="M0 450.374C260.127 465.209 418.883 551.06 666.097 488.361C879.74 434.177 974.724 270.983 1172.81 189.961C1392.11 100.262 1480.17 95.2547 1728 73"
        stroke="url(#paint8_linear_222_66)"
        stroke-opacity="0.6"
      />
      <path
        d="M0 459.374C260.127 474.209 418.883 560.06 666.097 497.361C879.74 443.177 974.724 279.983 1172.81 198.961C1392.11 109.262 1480.17 104.255 1728 82"
        stroke="url(#paint9_linear_222_66)"
        stroke-opacity="0.6"
      />
      <path
        d="M0 468.374C260.127 483.209 418.883 569.06 666.097 506.361C879.74 452.177 974.724 288.983 1172.81 207.961C1392.11 118.262 1480.17 113.255 1728 91"
        stroke="url(#paint10_linear_222_66)"
        stroke-opacity="0.6"
      />
      <path
        d="M0 477.374C260.127 492.209 418.883 578.06 666.097 515.361C879.74 461.177 974.724 297.983 1172.81 216.961C1392.11 127.262 1480.17 122.255 1728 100"
        stroke="url(#paint11_linear_222_66)"
        stroke-opacity="0.6"
      />
      <path
        d="M0 486.374C260.127 501.209 418.883 587.06 666.097 524.361C879.74 470.177 974.724 306.983 1172.81 225.961C1392.11 136.262 1480.17 131.255 1728 109"
        stroke="url(#paint12_linear_222_66)"
        stroke-opacity="0.6"
      />
      <path
        d="M0 495.374C260.127 510.209 418.883 596.06 666.097 533.361C879.74 479.177 974.724 315.983 1172.81 234.961C1392.11 145.262 1480.17 140.255 1728 118"
        stroke="url(#paint13_linear_222_66)"
        stroke-opacity="0.6"
      />
      <path
        d="M0 504.374C260.127 519.209 418.883 605.06 666.097 542.361C879.74 488.177 974.724 324.983 1172.81 243.961C1392.11 154.262 1480.17 149.255 1728 127"
        stroke="url(#paint14_linear_222_66)"
        stroke-opacity="0.6"
      />
      <path
        d="M0 513.374C260.127 528.209 418.883 614.06 666.097 551.361C879.74 497.177 974.724 333.983 1172.81 252.961C1392.11 163.262 1480.17 158.255 1728 136"
        stroke="url(#paint15_linear_222_66)"
        stroke-opacity="0.6"
      />
      <path
        d="M0 522.374C260.127 537.209 418.883 623.06 666.097 560.361C879.74 506.177 974.724 342.983 1172.81 261.961C1392.11 172.262 1480.17 167.255 1728 145"
        stroke="url(#paint16_linear_222_66)"
        stroke-opacity="0.6"
      />
      <path
        d="M0 531.374C260.127 546.209 418.883 632.06 666.097 569.361C879.74 515.177 974.724 351.983 1172.81 270.961C1392.11 181.262 1480.17 176.255 1728 154"
        stroke="url(#paint17_linear_222_66)"
        stroke-opacity="0.6"
      />
      <path
        d="M0 540.374C260.127 555.209 418.883 641.06 666.097 578.361C879.74 524.177 974.724 360.983 1172.81 279.961C1392.11 190.262 1480.17 185.255 1728 163"
        stroke="url(#paint18_linear_222_66)"
        stroke-opacity="0.6"
      />
      <path
        d="M0 549.374C260.127 564.209 418.883 650.06 666.097 587.361C879.74 533.177 974.724 369.983 1172.81 288.961C1392.11 199.262 1480.17 194.255 1728 172"
        stroke="url(#paint19_linear_222_66)"
        stroke-opacity="0.6"
      />
      <path
        d="M0 558.374C260.127 573.209 418.883 659.06 666.097 596.361C879.74 542.177 974.724 378.983 1172.81 297.961C1392.11 208.262 1480.17 203.255 1728 181"
        stroke="url(#paint20_linear_222_66)"
        stroke-opacity="0.6"
      />
      <path
        d="M0 567.374C260.127 582.209 418.883 668.06 666.097 605.361C879.74 551.177 974.724 387.983 1172.81 306.961C1392.11 217.262 1480.17 212.255 1728 190"
        stroke="url(#paint21_linear_222_66)"
        stroke-opacity="0.6"
      />
      <path
        d="M0 576.374C260.127 591.209 418.883 677.06 666.097 614.361C879.74 560.177 974.724 396.983 1172.81 315.961C1392.11 226.262 1480.17 221.255 1728 199"
        stroke="url(#paint22_linear_222_66)"
        stroke-opacity="0.6"
      />
      <path
        d="M0 585.374C260.127 600.209 418.883 686.06 666.097 623.361C879.74 569.177 974.724 405.983 1172.81 324.961C1392.11 235.262 1480.17 230.255 1728 208"
        stroke="url(#paint23_linear_222_66)"
        stroke-opacity="0.6"
      />
      <path
        d="M0 594.374C260.127 609.209 418.883 695.06 666.097 632.361C879.74 578.177 974.724 414.983 1172.81 333.961C1392.11 244.262 1480.17 239.255 1728 217"
        stroke="url(#paint24_linear_222_66)"
        stroke-opacity="0.6"
      />
      <path
        d="M0 603.374C260.127 618.209 418.883 704.06 666.097 641.361C879.74 587.177 974.724 423.983 1172.81 342.961C1392.11 253.262 1480.17 248.255 1728 226"
        stroke="url(#paint25_linear_222_66)"
        stroke-opacity="0.6"
      />
      <path
        d="M0 612.374C260.127 627.209 418.883 713.06 666.097 650.361C879.74 596.177 974.724 432.983 1172.81 351.961C1392.11 262.262 1480.17 257.255 1728 235"
        stroke="url(#paint26_linear_222_66)"
        stroke-opacity="0.6"
      />
      <path
        d="M0 621.374C260.127 636.209 418.883 722.06 666.097 659.361C879.74 605.177 974.724 441.983 1172.81 360.961C1392.11 271.262 1480.17 266.255 1728 244"
        stroke="url(#paint27_linear_222_66)"
        stroke-opacity="0.6"
      />
      <path
        d="M0 630.374C260.127 645.209 418.883 731.06 666.097 668.361C879.74 614.177 974.724 450.983 1172.81 369.961C1392.11 280.262 1480.17 275.255 1728 253"
        stroke="url(#paint28_linear_222_66)"
        stroke-opacity="0.6"
      />
      <path
        d="M0 639.374C260.127 654.209 418.883 740.06 666.097 677.361C879.74 623.177 974.724 459.983 1172.81 378.961C1392.11 289.262 1480.17 284.255 1728 262"
        stroke="url(#paint29_linear_222_66)"
        stroke-opacity="0.6"
      />
      <path
        d="M0 648.374C260.127 663.209 418.883 749.06 666.097 686.361C879.74 632.177 974.724 468.983 1172.81 387.961C1392.11 298.262 1480.17 293.255 1728 271"
        stroke="url(#paint30_linear_222_66)"
        stroke-opacity="0.6"
      />
      <path
        d="M0 657.374C260.127 672.209 418.883 758.06 666.097 695.361C879.74 641.177 974.724 477.983 1172.81 396.961C1392.11 307.262 1480.17 302.255 1728 280"
        stroke="url(#paint31_linear_222_66)"
        stroke-opacity="0.6"
      />
      <defs>
        <linearGradient
          id="paint0_linear_222_66"
          x1="0"
          y1="220"
          x2="1728"
          y2="220"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#011557" />
          <stop offset="1" stop-color="#3596FF" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_222_66"
          x1="0"
          y1="229"
          x2="1728"
          y2="229"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#011557" />
          <stop offset="1" stop-color="#3596FF" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_222_66"
          x1="0"
          y1="238"
          x2="1728"
          y2="238"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#011557" />
          <stop offset="1" stop-color="#3596FF" />
        </linearGradient>
        <linearGradient
          id="paint3_linear_222_66"
          x1="0"
          y1="247"
          x2="1728"
          y2="247"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#011557" />
          <stop offset="1" stop-color="#3596FF" />
        </linearGradient>
        <linearGradient
          id="paint4_linear_222_66"
          x1="0"
          y1="256"
          x2="1728"
          y2="256"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#011557" />
          <stop offset="1" stop-color="#3596FF" />
        </linearGradient>
        <linearGradient
          id="paint5_linear_222_66"
          x1="0"
          y1="265"
          x2="1728"
          y2="265"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#011557" />
          <stop offset="1" stop-color="#3596FF" />
        </linearGradient>
        <linearGradient
          id="paint6_linear_222_66"
          x1="0"
          y1="274"
          x2="1728"
          y2="274"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#011557" />
          <stop offset="1" stop-color="#3596FF" />
        </linearGradient>
        <linearGradient
          id="paint7_linear_222_66"
          x1="0"
          y1="283"
          x2="1728"
          y2="283"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#011557" />
          <stop offset="1" stop-color="#3596FF" />
        </linearGradient>
        <linearGradient
          id="paint8_linear_222_66"
          x1="0"
          y1="292"
          x2="1728"
          y2="292"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#011557" />
          <stop offset="1" stop-color="#3596FF" />
        </linearGradient>
        <linearGradient
          id="paint9_linear_222_66"
          x1="0"
          y1="301"
          x2="1728"
          y2="301"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#011557" />
          <stop offset="1" stop-color="#3596FF" />
        </linearGradient>
        <linearGradient
          id="paint10_linear_222_66"
          x1="0"
          y1="310"
          x2="1728"
          y2="310"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#011557" />
          <stop offset="1" stop-color="#3596FF" />
        </linearGradient>
        <linearGradient
          id="paint11_linear_222_66"
          x1="0"
          y1="319"
          x2="1728"
          y2="319"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#011557" />
          <stop offset="1" stop-color="#3596FF" />
        </linearGradient>
        <linearGradient
          id="paint12_linear_222_66"
          x1="0"
          y1="328"
          x2="1728"
          y2="328"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#011557" />
          <stop offset="1" stop-color="#3596FF" />
        </linearGradient>
        <linearGradient
          id="paint13_linear_222_66"
          x1="0"
          y1="337"
          x2="1728"
          y2="337"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#011557" />
          <stop offset="1" stop-color="#3596FF" />
        </linearGradient>
        <linearGradient
          id="paint14_linear_222_66"
          x1="0"
          y1="346"
          x2="1728"
          y2="346"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#011557" />
          <stop offset="1" stop-color="#3596FF" />
        </linearGradient>
        <linearGradient
          id="paint15_linear_222_66"
          x1="0"
          y1="355"
          x2="1728"
          y2="355"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#011557" />
          <stop offset="1" stop-color="#3596FF" />
        </linearGradient>
        <linearGradient
          id="paint16_linear_222_66"
          x1="0"
          y1="364"
          x2="1728"
          y2="364"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#011557" />
          <stop offset="1" stop-color="#3596FF" />
        </linearGradient>
        <linearGradient
          id="paint17_linear_222_66"
          x1="0"
          y1="373"
          x2="1728"
          y2="373"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#011557" />
          <stop offset="1" stop-color="#3596FF" />
        </linearGradient>
        <linearGradient
          id="paint18_linear_222_66"
          x1="0"
          y1="382"
          x2="1728"
          y2="382"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#011557" />
          <stop offset="1" stop-color="#3596FF" />
        </linearGradient>
        <linearGradient
          id="paint19_linear_222_66"
          x1="0"
          y1="391"
          x2="1728"
          y2="391"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#011557" />
          <stop offset="1" stop-color="#3596FF" />
        </linearGradient>
        <linearGradient
          id="paint20_linear_222_66"
          x1="0"
          y1="400"
          x2="1728"
          y2="400"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#011557" />
          <stop offset="1" stop-color="#3596FF" />
        </linearGradient>
        <linearGradient
          id="paint21_linear_222_66"
          x1="0"
          y1="409"
          x2="1728"
          y2="409"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#011557" />
          <stop offset="1" stop-color="#3596FF" />
        </linearGradient>
        <linearGradient
          id="paint22_linear_222_66"
          x1="0"
          y1="418"
          x2="1728"
          y2="418"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#011557" />
          <stop offset="1" stop-color="#3596FF" />
        </linearGradient>
        <linearGradient
          id="paint23_linear_222_66"
          x1="0"
          y1="427"
          x2="1728"
          y2="427"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#011557" />
          <stop offset="1" stop-color="#3596FF" />
        </linearGradient>
        <linearGradient
          id="paint24_linear_222_66"
          x1="0"
          y1="436"
          x2="1728"
          y2="436"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#011557" />
          <stop offset="1" stop-color="#3596FF" />
        </linearGradient>
        <linearGradient
          id="paint25_linear_222_66"
          x1="0"
          y1="445"
          x2="1728"
          y2="445"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#011557" />
          <stop offset="1" stop-color="#3596FF" />
        </linearGradient>
        <linearGradient
          id="paint26_linear_222_66"
          x1="0"
          y1="454"
          x2="1728"
          y2="454"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#011557" />
          <stop offset="1" stop-color="#3596FF" />
        </linearGradient>
        <linearGradient
          id="paint27_linear_222_66"
          x1="0"
          y1="463"
          x2="1728"
          y2="463"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#011557" />
          <stop offset="1" stop-color="#3596FF" />
        </linearGradient>
        <linearGradient
          id="paint28_linear_222_66"
          x1="0"
          y1="472"
          x2="1728"
          y2="472"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#011557" />
          <stop offset="1" stop-color="#3596FF" />
        </linearGradient>
        <linearGradient
          id="paint29_linear_222_66"
          x1="0"
          y1="481"
          x2="1728"
          y2="481"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#011557" />
          <stop offset="1" stop-color="#3596FF" />
        </linearGradient>
        <linearGradient
          id="paint30_linear_222_66"
          x1="0"
          y1="490"
          x2="1728"
          y2="490"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#011557" />
          <stop offset="1" stop-color="#3596FF" />
        </linearGradient>
        <linearGradient
          id="paint31_linear_222_66"
          x1="0"
          y1="499"
          x2="1728"
          y2="499"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#011557" />
          <stop offset="1" stop-color="#3596FF" />
        </linearGradient>
      </defs>
    </svg>
  );
};
