import Link from "next/link";

export default function Header() {
  return (
    <div className="w-full flex justify-between pt-12 px-24">
      <Link href="/" className="font-light text-white text-3xl  leading-normal">
        // HELIVAN
      </Link>

      <div className="flex flex-row items-center space-x-6">
        <Link
          href="/research"
          className="font-light text-white font-light text-xl leading-9 hover:text-blue-300 transition-colors"
        >
          Research
        </Link>
        <Link href="https://facebook.com" target="_blank">
          <div className="bg-[#090F20] cursor-pointer shadow-[0px_0px_2px_1.5px_#6C8EFF] flex items-center align-center justify-center px-6 py-2  border-[1px] border-white rounded-[110px]">
            <div className="font-light text-white text-xl">Sign Up</div>
          </div>
        </Link>
      </div>
    </div>
  );
}
