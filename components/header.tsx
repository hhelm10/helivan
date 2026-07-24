import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const NavLink = ({ href, label }: { href: string; label: string }) => {
  const pathname = usePathname();
  const active = pathname === href || pathname?.startsWith(`${href}/`);

  return (
    <Link
      href={href}
      className={`font-medium text-base md:text-lg px-1 py-1.5 border-b-2 transition-colors ${
        active
          ? "text-midnight font-semibold border-drift-amber"
          : "text-steel border-transparent hover:text-midnight"
      }`}
    >
      {label}
    </Link>
  );
};

export default function Header() {
  return (
    <div className="w-full flex flex-row justify-between items-center py-4 px-4 md:px-8 lg:px-16 bg-mist border-b border-hairline">
      <Link href="/" className="flex items-center">
        <Image
          src="/brand/helivan-mark-midnight.svg"
          alt="Helivan"
          width={32}
          height={32}
          className="h-6 md:h-8 w-auto"
        />
        <span className="font-grotesk font-bold text-midnight text-base md:text-xl tracking-[0.075em] ml-2.5 md:ml-3">
          HELIVAN
        </span>
      </Link>

      <nav className="flex flex-row items-center space-x-5 md:space-x-10">
        <NavLink href="/thesis" label="thesis" />
        <NavLink href="/research" label="research" />
        <NavLink href="/apps" label="apps" />
      </nav>
    </div>
  );
}
