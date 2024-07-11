'use client'
import { useState, useRef, useEffect } from "react";
import Link from "next/link";

export default function Landing() {    
    return (
        <div>
            <div className="static-header">
              <p className='text-blue-1 text-bold text-4xl font-arial-black'> <a href="/"> HLVN// </a>
                <span className="float-right word-spacing-20pt font-latin">
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
            <div className="text-8xl text-blue-6">
                <center><p> Helivan // Research</p></center>
            </div> 
            <div className="items-center justify-center mt-6">
                <center> <img src={"/general.svg"} width='25%'/> </center>
            </div>
            <div className="text-2xl text-blue-4 italic mt-4">
                <center> <p> principled statistics, next-gen applications </p> </center>
            </div>
            <div className="mt-2text-xl text-blue-4 text-center">
             <p> In collaboration with </p>
            </div>
            <div className="mt-4 flex flex-row items-center justify-center gap-50">
                <img src={"/msr_logo.png"} width='225px'/>
                <img src={"/nomic_dark_logo.png"} width='120px'/>
                <img src={"/jhu-logo.png"} width='425px'/>
                <img src={"/Palate_Logo.png"} width='200px'/>
            </div>
        </div>
    )
}
