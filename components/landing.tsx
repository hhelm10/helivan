'use client'
import { useState, useRef, useEffect } from "react";
import Link from "next/link";

export default function Landing() {    
    return (
    <div>
        <div className="static-header">
            <div> <a href="/"> <img src={"/logo-v2.png"} width='202rem'/> </a> </div>
                <div className="text-2xl text-blue-4 float-right word-spacing-20pt font-impact center-vertical">
                    <a href="/claros"> 
                        <span> claros</span>
                    </a>
                    <a href="/explore"> 
                        <span> explore</span>
                    </a>
                    <a href="/research"> 
                        <span> research</span>
                    </a>
                    {/* <a href="/about"> 
                        <span> about</span>
                    </a> */}
                </div>
            </div>
            <div className="font-deja-vu text-2xl text-blue-1" style={{marginTop: '3rem', textAlign: 'left'}}>
                <p style={{marginLeft:'5%', marginRight:'5%'}}> A digital twin is a virtual construct of a physical or social object that sufficiently captures the behavior of the physical / social object.</p>
                <p className="mt-6" style={{marginLeft:'25%',marginRight:'5%'}}> At Helivan, we combine the capabilities of modern language models and dynamic data streams to develop and study digital twins of groups of individuals – such as U.S. Congress. </p>
                <p className="mt-6" style={{marginLeft:'45%',marginRight:'5%'}}>While only approximations of the groups of individuals, our digital twins provide insights into topic-specific perspectives of each individual and are oftentimes capable of predicting actions of the physical / social object. </p>
                <p className="mt-6 font-bold" style={{textAlign: 'right', marginLeft:'65%',marginRight:'5%'}}>ask. explore. interact. predict. improve. </p>
                <p className="mt-6" style={{textAlign: 'right', marginLeft:'65%',marginRight:'5%'}}>coming soon. </p>

            </div>
            <div className="flex flex-row items-center justify-center"style={{marginTop: '6rem'}}>
                <img src="/digital_twin_gif_3_seconds.gif" alt="digital-twin-cycle"  width="65%"/>
            </div>
        </div>
    )
}
