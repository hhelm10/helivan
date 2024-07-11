'use client'
import { useState, useRef, useEffect } from "react";

const meta0 = 
{
    title: 'Towards a digital twin for society //',
    arxiv: 'https://arxiv.org/abs/2406.11938',
    arxiv_title: 'Tracking the perspectives of interacting language models',
    snippet: `Insofar as a single generative AI model is an appropriate proxy for a single human, a collection of genAI models can be considered a proxy for a community.
    While there are necessary precautions to take before claiming any particular simulation result on a collection of models generalizes to human society, in this work we develop a framework and complementary tool to systematically study the effect of interventions and community structure on the evolution of individuals and the entire system.
    Our results demonstrate the importance of cross-community communication, the need for new information to be injected into a system lest the behavior of the individual models become degenerate, and the sensitivity of groups to simple propaganda machines.`,
    tldr: 'The perspective space and its derivatives capture information related to the dynamics of individual models and the entire system.',
    image: 'general.svg'
};

const meta1 =
{
    title: 'Comparing GenAI to Humans //',
    arxiv: 'https://arxiv.org/abs/2309.08913',
    arxiv_title: 'A Statistical Turing Test for Generative Models',
    snippet: `Generative AI is producing human-expert level content across various domains. 
    This content is often propagated as if it were created by a human user.
    It is necessary to formalize the human-detection problem to most effectively assess the proximity of human-produced content and machine-produced content. 
    The framework we present leverages classical pattern recognition to equip every human-detection problem with an interpretable detactability measure.
    The empirical version of the measure can be used to rank the human-ness of different models in general settings.`,
    tldr: 'GPT-4 (Sept 2023) is detectable given enough machine-produced content. GPT-3 is more detectable than GPT-4 across human detection classifiers.',
    image: 'empirical-risks-and-tau-undetectability.png'
};

const meta2 =
{
    title: 'Testing the robustness of GenAI //',
    arxiv: 'https://arxiv.org/abs/2406.06573',
    arxiv_title: 'MedFuzz: Exploring the Robustness of LLMs in Medical Question Answering',
    snippet: `LLMs can pass challenging benchmarks -- but benchmarks are typically artificially simple or the LLMs are overengineered to perform well on them.
    In this work we introduce MedFuzz, a framework designed to challenge the performance of a model on a benchmark by directly attacking the benchmark's underyling assumptions.
    As an example, we design an adversarial method for the MedQA benchmark by targeting the assumption that all of the information presented in the prompt is medically relevant.
    We find that the average accuracy of GPT4 on MedQA is affected by repeated attacks and that the decrease is typically not assignable to the additional content and -- instead -- is assignable to the presence or structure of the additional tokens.`,
    tldr: `GPT-4's performance on MedQA is sensitive to the addition medically irrelevant information in the prompts.`,
    image: 'POST_ATTACK_ACCURACY.png'
};

const meta3 =
  {
    title: 'Defining the Data Kernel //',
    arxiv: 'https://arxiv.org/abs/2305.05126',
    arxiv_title: 'Comparing Foundation Models using Data Kernels',
    snippet: `Foundation models are notoriously complicated to understand. 
    In some cases, an embedding function associated with a foundation model is available.
    The relative positions of the embeddings of input data provide insights into how the model relates high-level concepts, which is often sufficent for a single model.
    Comparisons across models is more challenging -- embeddings are typically natively incompatible due to incongruities in the dimensionality or basis vectors of the embedding spaces.
    We introduce the data kernel to rectify this issue and demonstrate that it can be used to automatically discover systematic differences in the data used to train models.`,
    tldr: 'The data kernel enables comparison of the embedding spaces across models. It can be used to understand how models interpret and represent high-level concepts.',
    image: 'figure2.png'

  }

  const meta4 =
  {
    title: 'Reducing calibration time for wearables //',
    arxiv: 'https://www.mdpi.com/2227-7390/12/5/746',
    arxiv_title: `Approximately Optimal Domain Adaptation with Fisher’s Linear Discriminant`,
    snippet: `Physiological prediction problems such as mental state classification, stress detection, etc. often require user-specific data to properly calibrate the prediction system.
    This is particular relevant for EEG- and ECG-based systems where a small shift in sensor location can cause a large change in the distribution of the signal.
    Since training a system from scratch for each session is typically untenable from the user's perspective, domain adaptation or transfer learning techniques are necessary.
    In this work we derive an optimal domain adaptation technique in the setting where one user's prediction system has access to private derivates of other user's prediction systems.
    We demonstrate that the empirical approximation of the optimal solution is extremely effective at mitigating calibration time for EEG- and ECG-based systems.`,
    tldr: 'Empirical approximation of optimal domain adaptation technique can dramatically reduce amount of calibration data required for wearables.',
    image: `/illustrative-figure-tfld-3d-no-axes.PNG`
  };

  const meta5 =
  {
    title: 'Signal processing meets statistical network analysis for BCI //',
    arxiv: 'https://www.frontiersin.org/articles/10.3389/fnhum.2022.930291/full',
    arxiv_title: 'Mental state classification using multi-graph features',
    snippet: `Brain-Computer interfaces (BCI) have the potential to improve the interaction fidelity between user and machine.
    One of the main challenges in BCI applications is extracting high quality (e.g., features that are informative with respect to mental state / cognition) and transferable (e.g., features that are informative for user 1 and user N) features from the device.
    In this work we introduce multi-graph features based on the time series of pairwise statistical dependence matrices defined on the EEG channels.
    For mental state classification, the proposed multi-graph features are complementary to classical EEG signals such as relative delta, alpha, and beta band power.`,
    tldr: 'Multi-graph features based on statistical network analysis can improve mental state classification.',
    image: '/Hayden_BCI_Flow_1920px_1080px_nobg_v2_4x.png'
  };

const slides = [meta0, meta1, meta2, meta3, meta4, meta5];
const delay = 10000;

export function getHTML(index, slideIndex) {
    const title = slides[index].title
    const arxiv = slides[index].arxiv
    const arxiv_title = slides[index].arxiv_title
    const snippet = slides[index].snippet
    const tldr = slides[index].tldr 
    const image = slides[index].image
    return (
        <div 
        key={index} 
        className={`slide ${index === slideIndex ? 'active' : ''} overflow-auto section`}
        > 
            <div className="text-blue-6 text-2xl italic">
              <p><b> {title} </b></p>
            </div>
            <div className="text-blue-6 text-xl mt-2 flex inline">
              <p>Technical write-up: <u><i><a href={arxiv}> {arxiv_title}</a> </i></u></p>
            </div>
            <div className="mt-6 flex justify-center">
              <img src={image} style={{'height': '300px'}}/>
            </div>
            <div className="text-blue-6 text-xl mt-8">
                <p>{snippet}</p>
            </div>
            <div className="text-blue-6 text-xl mt-4 italic">
                <p> <b>TLDR:</b> {tldr}
                </p>
                <br></br>
                <br></br>
            </div>
        </div>
    )
}

export function Slideshow() {
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

export default async function Projects() {
    return (
    <div>
        <div className="static-header">
            <p className='text-blue-1 text-bold text-4xl'> <a href="/"> HLVN// </a>
            <span className="float-right word-spacing-20pt">
                {/* <a href="/about"> 
                <span className="text-xl text-blue-1 text-bold"> About</span>
                </a> */}
                <a href="/projects"> 
                <span className="text-xl text-blue-1 text-bold"> Projects</span>
                </a>
                <a href="/contact"> 
                <span className="text-xl text-blue-1 text-bold"> Contact</span>
                </a>
            </span>
            </p>
        </div>
        <div className="mt-8"><Slideshow/></div>
    </div>
    );
}

