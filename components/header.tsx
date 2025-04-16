import Link from "next/link";

export default function Header() {
  return (
    <div className="w-full flex justify-between pt-12 px-24">
      <Link
        href="/"
        className="text-white font-normal text-3xl font-[Alexandria] leading-normal font-alexandria"
      >
        // HELIVAN
      </Link>
      Link
      <div className="flex flex-row items-center space-x-6">
        <Link
          href="/research"
          className="font-alexandria text-white font-light text-xl font-[Alexandria] leading-9 hover:text-blue-300 transition-colors"
        >
          Research
        </Link>
        <Link href="https://facebook.com" target="_blank">
          <div className="bg-[#090F20] cursor-pointer shadow-[0px_0px_2px_1.5px_#6C8EFF] flex items-center align-center justify-center px-6 py-2  border-[1px] border-white rounded-[110px]">
            <div className="text-white text-xl font-alexandria">Sign Up</div>
          </div>
        </Link>
      </div>
    </div>
  );
}
