import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

export default function Header() {
  const [activeTab, setActiveTab] = useState<string | null>(null);

  return (
    <div className="w-full flex flex-col md:flex-row justify-center md:justify-between items-center py-4 px-4 md:px-8 lg:px-16 bg-white border-b border-[#AFBEC6]">
      <Link href="/" className="flex items-center mb-4 md:mb-0">
        <Image
          src="/favicon.png"
          alt="HELIVAN"
          width={40}
          height={40}
          className="h-8 md:h-10 w-auto"
        />
        <span className="font-medium text-[#212C5C] text-xl md:text-2xl leading-normal ml-3">
          HELIVAN
        </span>
      </Link>

      <nav className="flex flex-row items-center space-x-2 md:space-x-8">
        <Link
          href="/research"
          className={`font-medium text-[#486884] text-base md:text-lg px-4 py-2 rounded-lg transition-colors hover:bg-[#F6F7F9] hover:text-[#114471] ${
            activeTab === 'research' ? 'bg-[#F6F7F9] text-[#114471]' : ''
          }`}
          onClick={() => setActiveTab('research')}
        >
          Research
        </Link>
        <Link
          href="/apps"
          className={`font-medium text-[#486884] text-base md:text-lg px-4 py-2 rounded-lg transition-colors hover:bg-[#F6F7F9] hover:text-[#114471] ${
            activeTab === 'apps' ? 'bg-[#F6F7F9] text-[#114471]' : ''
          }`}
          onClick={() => setActiveTab('apps')}
        >
          Apps
        </Link>
      </nav>
    </div>
  );
}
