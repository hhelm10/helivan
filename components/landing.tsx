'use client'
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import DownTriangle from "@/components/down-triangle";

const meta1 =
  {title: 'Comparing GenAI to Humans //',
    arxiv: 'https://arxiv.org/abs/2309.08913',
    arxiv_title: 'A Statistical Turing Test for Generative Models',
    snippet: `Generative AI is producing human-expert level content across various domains. 
    This content is often propagated as if it were created by a human user.
    It is necessary to formalize the human-detection problem to most effectively assess the proximity of human-produced content and machine-produced content. 
    The framework we present leverages classical pattern recognition to equip every human-detection problem with an interpretable detactability measure.
    The empirical version of the measure can be used to rank the human-ness of different models in general settings.`,
    tldr: 'GPT-4 (Sept 2023) is detectable given enough machine-produced content. GPT-3 is more detectable than GPT-4 across human detection classifiers.'
};

const meta2 =
  {
    title: 'Defining the Data Kernel //',
    arxiv: 'https://arxiv.org/abs/2305.05126',
    arxiv_title: 'Comparing Foundation Models using Data Kernels',
    snippet: `Foundation models are notoriously complicated to understand. 
    In some cases, an embedding function associated with a foundation model is available.
    The relative positions of the embeddings of input data provide insights into how the model relates high-level concepts, which is often sufficent for a single model.
    Comparisons across models is more challenging -- embeddings are typically natively incompatible due to incongruities in the dimensionality or basis vectors of the embedding spaces.
    We introduce the data kernel to rectify this issue and demonstrate that it can be used to automatically discover systematic differences in the data used to train models.`,
    tldr: 'The data kernel enables comparison of the embedding spaces across models. It can be used to understand how models interpret and represent high-level concepts.'
  }

const slides = [meta1, meta2];
const delay = 10000;

function getHTML(index, slideIndex) {
    const title = slides[index].title
    const arxiv = slides[index].arxiv
    const arxiv_title = slides[index].arxiv_title
    const snippet = slides[index].snippet
    const tldr = slides[index].tldr 
    return (
        <div 
        key={index} 
        className={`slide ${index === slideIndex ? 'active' : ''}`}
        > 
            <div className="text-blue-6 text-4xl italic">
                <p><b> {title} </b></p>
            </div>
            <div className="text-blue-6 text-xl italic mt-2 underline">
                <a href={arxiv}> {arxiv_title}</a>
            </div>
            <div className="text-blue-6 text-2xl mt-8">
                <p>{snippet}</p>
            </div>
            <div className="text-blue-6 text-2xl mt-8 italic">
                <p> <b>TLDR:</b> {tldr}
                </p>
            </div>
        </div>
    )
}

function Slideshow() {
  const [slideIndex, setSlideIndex] = useState(0);

  const changeSlide = (n) => {
    let newIndex = slideIndex + n;
    if (newIndex >= slides.length) newIndex = 0;
    if (newIndex < 0) newIndex = slides.length - 1;
    setSlideIndex(newIndex);
  };

  const goToSlide = (index) => {
    setSlideIndex(index);
  };
  
  return (
    <div className="slideshow-container">
      {
      slides.map((slide, index) => getHTML(index, slideIndex))
      }
        {/* // <div
          // key={index}
          // className={`slide ${index === slideIndex ? 'active' : ''}`}
        // >
        //  </>
        // </div>
      // ))} */}
      <button className="prev" onClick={() => changeSlide(-1)}>&#10094;</button>
      <button className="next" onClick={() => changeSlide(1)}>&#10095;</button>
      <div className="dots-container">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === slideIndex ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
}


export default function Landing() {    
    return (
        <div>
            <div className="mt-4 text-8xl text-blue-6">
                <center><p> Helivan // Research</p></center>
            </div> 
            <div className="text-4xl text-blue-4 italic mt-4">
                <center> <p> principled statistics, next-gen applications </p> </center>
            </div>
            <div className="mt-12"><Slideshow/></div>
            <div className="mt-8 text-2xl text-blue-4 text-center">
             <p> In collaboration with </p>
            </div>
            <div className="mt-6 mb-4 flex flex-row items-center justify-center gap-150">
                <img src={"/msr_logo.png"} width='225px'/>
                <img src={"/nomic_dark_logo.png"} width='120px'/>
                <img src={"/jhu-logo.png"} width='425px'/>
                <img src={"/Palate_Logo.png"} width='200px'/>
            </div>
        </div>
    )
}
