'use client'
import { useState, useRef, useEffect } from "react";

const meta10 = 
{
    title: 'A collection of language models is a digital twin of a social system //',
    arxiv: '',
    arxiv_title: 'coming soon',
    snippet: `A digital twin of complex social systems will enable detailed analysis and valuable inferences related to the behaviors, opinions, and dynamics of the individuals and sub-
              systems therein. In this paper we demonstrate that modern language models and currently available data streams are sufficient for constructing a digital twin of U.S. congresspersons. The digital twin
              of U.S. congresspersons can be used to predict roll-call voting behavior and to quantify the likelihood of a congressperson to cross party lines. Our work is the first to demonstrate that a collection of language models can go beyond generic human-like
              behavior and reasonably satisfy the definition of a digital twin.`,
    tldr: `A collection of language models can reasonably satisfy the National Academy's defintion of a digital twin.`,
    image: 'digital_twin_diagram.png'
};

const meta9 = 
{
    title: 'Simulating social mirroring with generative models //',
    arxiv: 'https://arxiv.org/abs/2412.06834',
    arxiv_title: 'Investigating social alignment via mirroring in a system of interacting language models',
    snippet: `Studying how groups form and evolve is a critical component of sociology. Historically, experiments investigating social dynamics have been difficult to conduct repeatedly and at scale.
This is especially true when attempting to study the effect of a particular social mechanism.
We present a simple framework of interacting agents that isolates the effect of social mirroring on alignment -- an important topic given the recent growth of self-censorship and polarization.
Our findings demonstrate that mirroring, despite being a crucial component of human socialization, can significantly impede a population's capacity to reach consensus.
Further, the similarity of our observations and known social dynamics supports the use of systems of generative agents for understanding group formation and dynamics.`,
    tldr: 'A system of interacting language models can readily demonstrate social behaviors previously observed in human populations.',
    image: 'pnas_plot.png'
};

const meta8 = 
{
    title: 'Classification and regression of black-box generative models //',
    arxiv: 'https://arxiv.org/abs/2410.01106',
    arxiv_title: 'Embedding-based statistical inference on generative models',
    snippet: ``,
    tldr: 'The data kernel perspective space principled and effective representations of generative models for model-level inference.',
    image: 'classification.png'
};

const meta7 = 
{
    title: 'Establishing the consistency of vector representations of black-box generative models //',
    arxiv: 'https://arxiv.org/abs/2409.17308',
    arxiv_title: 'Consistent estimation of generative model representations in the data kernel perspective space',
    snippet: ``,
    tldr: 'The data kernel perspective space is consistent for its population counterpart in regimes with growing number of replicates, queries, and models.',
    image: 'consistency.png'
};


const meta6 = 
{
    title: 'Quantitatively tracking model interactions and dynamics //',
    arxiv: 'https://aclanthology.org/2024.emnlp-main.90',
    arxiv_title: 'Tracking the perspectives of interacting language models',
    snippet: `Insofar as a single generative AI model is an appropriate proxy for a single human, a collection of genAI models can be considered a proxy for a community.
    While there are necessary precautions to take before claiming any particular simulation result on a collection of models generalizes to human society, in this work we develop a framework and complementary tool to systematically study the effect of interventions and community structure on the evolution of individuals and the entire system.
    Our results demonstrate the importance of cross-community communication, the need for new information to be injected into a system lest the behavior of the individual models become degenerate, and the sensitivity of groups to simple propaganda machines.`,
    tldr: 'The perspective space and its derivatives capture information related to the dynamics of individual models and the entire system.',
    image: 'general.svg'
};

const meta5 =
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

const meta4 =
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

  const meta2 =
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

  const meta1 =
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

  const meta0 =
  {
    title: 'Finding the right number of participants //',
    arxiv: 'N/A',
    arxiv_title: 'N/A',
    snippet: `Plant-based products are often more environmentally friendly than their traditional alternatives for the price of a deviation in flavor, texture, etc.
    Companies making plant-based products continuously iterate on product versions to improve marketability to the wider public.
    As such, consumer testing is an integral part of their workflow.
    We partnered with Palate Insights to create a easy-to-use and easy-to-digest tool for companies to determine how many users are required to make a claim related to their product.`,
    tldr: `The easy-to-use sample size calculator can be found at palateinsights.com/sample-size-calculator.`,
    image: '/sample-size-calculator.jpg'
  };

const slides = [meta10, meta9, meta8, meta7, meta6, meta5, meta4, meta3];
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
        className={`slide ${index === slideIndex ? 'active' : ''} overflow-auto section background-blue-1 text-blue-4 font-deja-vu`}
        > 
            <div className="text-4xl mt-4">
              <p><b> {title} </b></p>
            </div>
            <div className="text-2xl mt-2 flex inline">
              <p>Technical write-up: <u><i><a href={arxiv}> {arxiv_title}</a> </i></u></p>
            </div>
            <div className="mt-6 flex justify-center">
              <img src={image} style={{'height': '300px'}}/>
            </div>
            <div className="text-xl mt-8">
                <p>{snippet}</p>
            </div>
            <div className="text-xl mt-4 italic">
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
        <div> <a href="/"> <img src={"/favicon.png"} width='67rem'/> </a> </div>
        <div className="text-blue-4 text-2xl float-right word-spacing-20pt font-impact center-vertical">
            <a href="/claros"> 
                <span> claros</span>
            </a>
            <a href="/explore"> 
                <span> explore</span>
            </a>
            <a href="/research"> 
                <span style={{fontSize:'2rem'}}> research</span>
            </a>
            {/* <a href="/about"> 
                <span> about</span>
            </a> */}
        </div>
      </div>
      <div className="text-xl text-blue-1 font-deja-vu" style={{textAlign: 'left', marginLeft:'12.5%',marginRight:'35%'}}>
      <p className=" text-2xl mt-2"><u> Broad vision. </u></p>
        <p> At Helivan we believe that collections of generative models -- not just a single generative model -- will pervade everyone's social, domestic, and professional lives. 
          These models will be embedded on a user's devices and have access to sensitive information. In some cases, these models will act as an extension of the user and will be able to sufficiently approximate their actions in a given context.
        </p>
        <p className="mt-6">As such, our research is focused on developing statistical methods and data analysis tools for comparing generative models in different accessibility regimes in the absence of an explicit task, for tracking the dynamics of models as they interact with each other and their environments, for understanding the relationship between machine-generated content and human-generated content, and for evaluating and addressing model robustness.</p>          
        <p className="mt-6">Our research has allowed us to be the first to provide statistical evidence that a collection of appropriately defined language models is a "digital twin" for a social system. </p>
      </div>
      <div className="mt-8"><Slideshow/></div>
    </div>
    );
}