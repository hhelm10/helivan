'use client'
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import DownTriangle from "@/components/down-triangle";

const meta1 =
  {title: 'Comparing GenAI to Humans //',
    arxiv: 'https://arxiv.org/abs/2309.08913',
    arxiv_title: 'A Statistical Turing Test for Generative Models',
    snippet: `Generative AI is producing human-expert level content across various domains and its content is often propagated as if it were created by human users.
    Statistical frameworks to assess the proximity of human-produced content and machine-produced content are necessary to understand risks associated with deep-fakes. 
    Our framework provides a statistical pattern recognition perspective to evaluating the detectability of a machine.`,
    tldr: 'GPT-4 (Sept 2023) is detectable given enough machine-produced content. GPT-3 is more detectable than GPT-4 across human detection classifiers.'
};

const meta2 =
  {title: 'Defining the Data Kernel //',
    arxiv: 'https://arxiv.org/abs/2305.05126',
    arxiv_title: 'Comparing Foundation Models using Data Kernels',
    snippet: `Foundation models are notoriously complicated to understand. 
    In some cases, an embedding function associated with a foundation model is available -- either as an explicit decoding layer or as a simple function of intermediary layers.
    The relative positions of the embeddings of input data provide insights into how the model relates high-level concepts.
    Embeddings across models is typically impossible due to incongruities in the dimensionality or basis vectors of the embedding spaces.
    We introduce the data kernel to rectify this issue and demonstrate that it can be used to automatically discover systematic differences in the data used to train models.`,
    tldr: 'The data kernel enables comparison of embedding spaces across models. It is useful for automatically discovering systematic differences in pre-training data.'
};

const metas = [meta1, meta2];
const delay = 10000;

function getHTML(index) {
    const title = metas[index].title
    const arxiv = metas[index].arxiv
    const arxiv_title = metas[index].arxiv_title
    const snippet = metas[index].snippet
    const tldr = metas[index].tldr 
    return (
        <div className="mt-8 ws-normal slide items-center" key={index}> 
            <div className="text-center text-blue-6 text-4xl italic mt-4">
                <p><b> {title} </b></p>
            </div>
            <div className="flex-wrap text-center text-blue-6 text-xl italic mt-2 underline">
                <a href={arxiv}> {arxiv_title}</a>
            </div>
            <div className="text-blue-6 text-2xl mt-8">
                {snippet}
            </div>
            <div className="text-blue-6 text-xlarge mt-8 italic">
                <p> <b>TLDR:</b> {tldr}
                </p>
            </div>
        </div>
    )
}

function Slideshow(metas) {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);
  const indices = [...Array(2).keys()];

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === 2 - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div className="slideshow">
      <div
        className="mt-10 slideshowSlider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {indices.map((idx) => getHTML(idx))}
      </div>
      <div className="mt-2 slideshowDots">
      {indices.map((idx) => (
          <div
            key={idx}
            className={`slideshowDot${index === idx ? " active" : ""}`}
            onClick={() => {
              setIndex(idx);
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default function Landing() {    
    return (
        <div>
            <div className="mt-4 text-8xl text-blue-6">
                <center><p> Helivan Research</p></center>
            </div> 
            <div className="text-4xl text-blue-4 italic">
                <center> <p> applied principled statistics //<br></br>on the cutting edge</p> </center>
            </div>
            <div> <Slideshow/></div>
            <div className="mt-8 text-4xl text-blue-4 text-center">
             <p> In collaboration with </p>
            </div>
            <div className="mt-4 mb-4 flex flex-row items-center justify-center gap-150">
                <img src={"/msr_logo.png"} width='225px'/>
                <img src={"/nomic_dark_logo.png"} width='120px'/>
                <img src={"/jhu-logo.png"} width='425px'/>
                <img src={"/Palate_Logo.png"} width='200px'/>
            </div>
        </div>
    )
    //     <div>
    //         <div>
    //             <br></br>
    //         </div>
    //         <div className="text-8xl text-blue-6">
    //             <center><p> Helivan Research</p></center>
    //         </div> 
    //         <div className="text-4xl text-blue-4 italic">
    //             <center> <p> applied principled statistics //<br></br>on the cutting edge</p> </center>
    //         </div>
    //         {/* <div className="mt-8 flex flex-row items-center justify-center slideshow-container"> */}
    //         <div className="slideshow-container">
    //                 <div className="panel panel1"> 
    //                     <div className="text-center text-blue-6 text-4xl italic mt-4">
    //                         <p><b> Comparing GenAI to Humans </b></p>
    //                     </div>
    //                     <div className="text-center text-blue-6 text-xl italic mt-2 underline">
    //                     <a href="https://arxiv.org/abs/2309.08913"> A Statistical Turing Test for Generative Models</a>
    //                     </div>
    //                     <div className="text-blue-6 text-2xl mt-8">
    //                         <p> Generative AI is producing human-expert level content across various domains and its content is often propagated as if it were created by human users.
    //                             Statistical frameworks to assess the proximity of human-produced content and machine-produced content are necessary to understand risks associated with deep-fakes. 
    //                             Our framework provides a statistical pattern recognition perspective to evaluating the detectability of a machine.
    //                         </p>
    //                     </div>
    //                     <div className="text-blue-6 text-lg mt-8 italic">
    //                         <p> <b>TLDR:</b> GPT-4 (Sept 2023) is detectable given enough machine-produced content. GPT-3 is more detectable than GPT-4 across human detection classifiers.
    //                         </p>
    //                     </div>
    //                 </div>
    //                 <div className="panel panel1"> 
    //                     <div className="text-center text-blue-6 text-4xl italic mt-4">
    //                         <p><b> Comparing GenAI to Humans </b></p>
    //                     </div>
    //                     <div className="text-center text-blue-6 text-xl italic mt-2 underline">
    //                     <a href="https://arxiv.org/abs/2309.08913"> A Statistical Turing Test for Generative Models</a>
    //                     </div>
    //                     <div className="text-blue-6 text-2xl mt-8">
    //                         <p> Generative AI is producing human-expert level content across various domains and its content is often propagated as if it were created by human users.
    //                             Statistical frameworks to assess the proximity of human-produced content and machine-produced content are necessary to understand risks associated with deep-fakes. 
    //                             Our framework provides a statistical pattern recognition perspective to evaluating the detectability of a machine.
    //                         </p>
    //                     </div>
    //                     <div className="text-blue-6 text-lg mt-8 italic">
    //                         <p> <b>TLDR:</b> GPT-4 (Sept 2023) is detectable given enough machine-produced content. GPT-3 is more detectable than GPT-4 across human detection classifiers.
    //                         </p>
    //                     </div>
    //                 </div>
    //                 <div className="panel panel1"> 
    //                     <div className="text-center text-blue-6 text-4xl italic mt-4">
    //                         <p><b> Comparing GenAI to Humans </b></p>
    //                     </div>
    //                     <div className="text-center text-blue-6 text-xl italic mt-2 underline">
    //                     <a href="https://arxiv.org/abs/2309.08913"> A Statistical Turing Test for Generative Models</a>
    //                     </div>
    //                     <div className="text-blue-6 text-2xl mt-8">
    //                         <p> Generative AI is producing human-expert level content across various domains and its content is often propagated as if it were created by human users.
    //                             Statistical frameworks to assess the proximity of human-produced content and machine-produced content are necessary to understand risks associated with deep-fakes. 
    //                             Our framework provides a statistical pattern recognition perspective to evaluating the detectability of a machine.
    //                         </p>
    //                     </div>
    //                     <div className="text-blue-6 text-lg mt-8 italic">
    //                         <p> <b>TLDR:</b> GPT-4 (Sept 2023) is detectable given enough machine-produced content. GPT-3 is more detectable than GPT-4 across human detection classifiers.
    //                         </p>
    //                     </div>
    //                 {/* </div> */}
    //             </div>
    //         </div>
    //     </div>
    // );
}
