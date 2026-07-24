"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ href, label }: { href: string; label: string }) => {
  const pathname = usePathname();
  const active = pathname === href || pathname?.startsWith(`${href}/`);

  return (
    <Link
      href={href}
      className={`transition-colors pb-[2px] border-b-2 ${
        active
          ? "text-midnight font-semibold border-drift-amber"
          : "text-brand-muted border-transparent hover:text-midnight"
      }`}
    >
      {label}
    </Link>
  );
};

/* Inline mark (not an <img>) so the thesis page's fig 4 can flip
   #logoBar/#logoSeg into the drift state. */
const Mark = () => (
  <svg width="26" height="26" viewBox="0 0 96 96" aria-label="helivan">
    <rect
      x="16"
      y="44.5"
      width="64"
      height="7"
      rx="2"
      transform="rotate(-28.6 48 48)"
      fill="#0A1638"
    />
    <rect x="30" y="26" width="14" height="56" rx="3" fill="#0A1638" />
    <rect
      id="logoSeg"
      x="66.5"
      y="44.5"
      width="13.5"
      height="7"
      rx="2"
      transform="rotate(-28.6 48 48)"
      fill="#F59E0B"
      opacity="0"
    />
    <rect id="logoBar" x="52" y="14" width="14" height="56" rx="3" fill="#0A1638" />
  </svg>
);

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-mist/90 backdrop-blur border-b border-hairline/60">
      <div className="max-w-[920px] mx-auto flex items-center gap-6 px-6 py-[18px]">
        <Link
          href="/"
          className="flex items-center gap-2.5 font-grotesk font-bold text-[15px] tracking-[0.075em] text-midnight"
        >
          <Mark />
          HELIVAN
        </Link>
        <nav className="ml-auto flex items-center gap-5 text-[13.5px] font-medium">
          <NavLink href="/thesis" label="thesis" />
          <NavLink href="/research" label="research" />
          <NavLink href="/apps" label="apps" />
        </nav>
      </div>
    </header>
  );
}
