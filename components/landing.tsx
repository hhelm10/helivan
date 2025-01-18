'use client'
import { useState, useRef, useEffect } from "react";
import Link from "next/link";

export default function Landing() {    
    return (
    <div className="min-h-[100vh] w-[100vw]" style={{backgroundColor: '#e0edff'}}>
        <div className="flex flex-col items-center justify-start pt-[25vh]">
            <div>
                 <a href="/"> <img src={"/logo-v2.png"} className="w-[300px] sm:w-[400px]"/> </a> 
            </div>
            <div className="mt-8">
                <h2 className="text-xl text-blue-4 text-center italic">Digital Twins for Social Systems</h2>
            </div>
            <div className="mt-4">
                <h2 className="text-l text-blue-4 text-center">info@helivan.io</h2>
            </div>

        </div>

        <div className="w-full max-w-6xl mx-auto px-4 py-16 flex items-center justify-center">
            <div className="flex flex-col sm:flex-row overflow-x-auto gap-6 pb-4 snap-x snap-mandatory">
                <div className="flex-shrink-0 w-80 snap-center">
                    <Link href="https://arxiv.org/abs/2412.06834">
                        <div className="bg-white p-6 rounded-lg shadow-lg h-full hover:shadow-[rgb(33,60,102)] transition-shadow">
                            <h3 className="font-semibold text-lg mb-2">Investigating Social Alignment in Interacting Language Models</h3>
                            <p className="text-gray-600 text-sm"></p>
                            <div className="mt-4 text-sm text-blue-4">Read More →</div>
                        </div>
                    </Link>
                </div>

                <div className="flex-shrink-0 w-80 snap-center">
                    <Link href="https://aclanthology.org/2024.emnlp-main.90/">
                        <div className="bg-white p-6 rounded-lg shadow-lg h-full hover:shadow-[rgb(33,60,102)] transition-shadow">
                            <h3 className="font-semibold text-lg mb-2">Tracking the Perspectives of Interacting Language Models</h3>
                            <p className="text-gray-600 text-sm"></p>
                            <div className="mt-4 text-sm text-blue-4">Read More →</div>
                        </div>
                    </Link>
                </div>

                <div className="flex-shrink-0 w-80 snap-center">
                    <Link href="https://arxiv.org/abs/2309.08913">
                        <div className="bg-white p-6 rounded-lg shadow-lg h-full hover:shadow-[rgb(33,60,102)] transition-shadow">
                            <h3 className="font-semibold text-lg mb-2">A Statistical Turing Test for Generative Models</h3>
                            <p className="text-gray-600 text-sm"></p>
                            <div className="mt-4 text-sm text-blue-4">Read More →</div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>

    </div>
    )
}
