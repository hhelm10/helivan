import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

export default function Header() {
  const [activeTab, setActiveTab] = useState<string | null>(null);

  return (
    <div className="w-full flex flex-col md:flex-row justify-center md:justify-between items-center py-4 px-4 md:px-8 lg:px-16 bg-mist border-b border-hairline">
      <Link href="/" className="flex items-center mb-4 md:mb-0">
        <Image
          src="/brand/helivan-mark-midnight.svg"
          alt="Helivan"
          width={32}
          height={32}
          className="h-7 md:h-8 w-auto"
        />
        <span className="font-grotesk font-bold text-midnight text-lg md:text-xl tracking-[0.075em] ml-3">
          HELIVAN
        </span>
      </Link>

      <nav className="flex flex-row items-center space-x-2 md:space-x-8">
        <Link
          href="/research"
          className={`font-medium text-steel text-base md:text-lg px-4 py-2 rounded-lg transition-colors hover:bg-steel-tint/30 hover:text-midnight ${
            activeTab === "research" ? "bg-steel-tint/30 text-midnight" : ""
          }`}
          onClick={() => setActiveTab("research")}
        >
          research
        </Link>
        <Link
          href="/apps"
          className={`font-medium text-steel text-base md:text-lg px-4 py-2 rounded-lg transition-colors hover:bg-steel-tint/30 hover:text-midnight ${
            activeTab === "apps" ? "bg-steel-tint/30 text-midnight" : ""
          }`}
          onClick={() => setActiveTab("apps")}
        >
          apps
        </Link>
      </nav>
    </div>
  );
}
