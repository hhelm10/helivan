import Link from "next/link";
import { useState } from "react";
import TypeformEmbed from "./TypeformEmbed";

export default function Header() {
  const [showTypeform, setShowTypeform] = useState(false);
  
  return (
    <div className="w-full flex flex-col md:flex-row justify-center md:justify-between items-center pt-6 md:pt-12 px-4 md:px-8 lg:px-24">
      <Link href="/" className="font-light text-white text-2xl md:text-3xl leading-normal mb-4 md:mb-0">
        // HELIVAN
      </Link>

      <div className="flex flex-row items-center space-x-4 md:space-x-6">
        <Link
          href="/research"
          className="font-light text-white font-light text-lg md:text-xl leading-9 hover:text-blue-300 transition-colors md:bg-transparent md:border-0 bg-[#090F20] px-4 py-2 border-[1px] border-white rounded-[110px] flex items-center justify-center"
        >
          Research
        </Link>
        <div 
          onClick={() => setShowTypeform(true)} 
          className="bg-[#090F20] cursor-pointer shadow-[0px_0px_2px_1.5px_#6C8EFF] flex items-center align-center justify-center px-4 md:px-6 py-2 border-[1px] border-white rounded-[110px]"
        >
          <div className="font-light text-white text-lg md:text-xl">Join Waitlist</div>
        </div>
        
        {showTypeform && (
          <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4">
            <div className="bg-[#090F20] p-6 rounded-lg w-[90%] max-w-4xl relative">
              <button 
                onClick={() => setShowTypeform(false)}
                className="absolute top-4 right-4 text-white text-2xl font-light hover:text-blue-300 transition-colors z-10"
              >
                ×
              </button>
              <div className="w-full h-full bg-transparent">
                <TypeformEmbed />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
