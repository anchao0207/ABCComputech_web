import Image from "next/image";
import Link from "next/link";
import PrelineScript from "./PrelineScript";

export default function NavBar() {
  return (
    <nav
      className="max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between"
      aria-label="Global"
    >
      <div className="lg:container w-full flex items-center justify-between px-12 lg:px-16 xl:px-24 py-5 gap-20">
        <Image
          src="/computechicon.png"
          alt="Computech Logo"
          className="w-[200px] lg:w-[250px]"
          width={300}
          height={24}
          priority
        />
        <div className="sm:hidden">
          <button
            type="button"
            className="hs-collapse-toggle p-2 inline-flex justify-center items-center gap-x-2 rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:pointer-events-none dark:bg-transparent dark:border-neutral-700 dark:text-white dark:hover:bg-white/10"
            data-hs-collapse="#navbar-with-mega-menu"
            aria-controls="navbar-with-mega-menu"
            aria-label="Toggle navigation"
          >
            <svg
              className="hs-collapse-open:hidden flex-shrink-0 size-4"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="3" x2="21" y1="6" y2="6" />
              <line x1="3" x2="21" y1="12" y2="12" />
              <line x1="3" x2="21" y1="18" y2="18" />
            </svg>
            <svg
              className="hs-collapse-open:block hidden flex-shrink-0 size-4"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          </button>
        </div>
      </div>

      <div
        id="navbar-with-mega-menu"
        className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:block text-sm text-blue-900 lg:text-base xl:text-lg "
      >
        {/* flex w-full max-w-3xl justify-between items-center */}
        <div className="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:ps-5">
          <Link href="#" className="p-2 hover:text-blue-500">
            Home
          </Link>
          <Link href="#" className="p-2 hover:text-blue-500">
            About
          </Link>
          <Link href="#" className="p-2 hover:text-blue-500">
            Managed IT Services
          </Link>
          <Link href="#" className="p-2 hover:text-blue-500">
            Contact Us
          </Link>
          <button className="bg-blue-900 hover:bg-blue-500 text-white p-2 lg:p-3 rounded-md">
            <span>Remote Support</span>
          </button>
        </div>
      </div>
      <PrelineScript></PrelineScript>
    </nav>
  );
}
