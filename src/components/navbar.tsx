import Image from "next/image";
import Link from "next/link";

export default function NavBar() {
  return (
    <nav
      className="container w-full p-5 md:flex md:items-center md:justify-between"
      aria-label="Global"
    >
      <div className="w-full flex items-center justify-between">
        <Image
          src="/computechicon.png"
          alt="Computech Logo"
          className="w-[200px] lg:w-[250px]"
          width={300}
          height={24}
          priority
        />
        <div className="md:hidden">
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
        className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow md:block text-sm text-blue-900 lg:text-base xl:text-lg "
      >
        <div className="flex flex-col gap-5 mt-5 md:flex-row md:items-center md:justify-end md:mt-0 md:ps-5">
          <Link href="#" className="p-2 hover:text-blue-500">
            Home
          </Link>
          <Link href="#" className="p-2 hover:text-blue-500">
            About
          </Link>

          <div className="hidden md:inline-flex hs-dropdown relative">
            <button
              type="button"
              className="md:hs-dropdown-toggle p-2 inline-flex items-center gap-x-2 disabled:pointer-events-none hover:text-blue-500"
            >
              Actions
              <svg
                className="md:hs-dropdown-open:rotate-180 size-4"
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
                <path d="m6 9 6 6 6-6"></path>
              </svg>
            </button>

            <div className="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 w-56 hidden z-10 mt-2 min-w-60 bg-white shadow-md rounded-lg p-2">
              <Link
                className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg hover:text-blue-500"
                href="#"
              >
                Managed IT Cloud
              </Link>
              <Link
                className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg hover:text-blue-500"
                href="#"
              >
                IT Consultation
              </Link>
              <Link
                className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg hover:text-blue-500"
                href="#"
              >
                Microsoft Office 365
              </Link>
              <Link
                className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg hover:text-blue-500"
                href="#"
              >
                G-Suite
              </Link>
              <Link
                className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg hover:text-blue-500"
                href="#"
              >
                Cyber Security
              </Link>
              <Link
                className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg hover:text-blue-500"
                href="#"
              >
                Cio Services
              </Link>
            </div>
          </div>

          <div className="md:hidden p-2">
            <button
              type="button"
              className="hs-collapse-toggle inline-flex items-center gap-x-2 rounded-lg disabled:pointer-events-none"
              id="hs-basic-collapse"
              data-hs-collapse="#hs-basic-collapse-heading"
            >
              Collapse
              <svg
                className=" flex-shrink-0 size-4"
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
                <path d="m6 9 6 6 6-6"></path>
              </svg>
            </button>
            <div
              id="hs-basic-collapse-heading"
              className="hs-collapse hidden w-full overflow-hidden transition-[height] duration-300"
              aria-labelledby="hs-basic-collapse"
            >
              <div className="mt-5">
                <Link
                  className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg hover:text-blue-500"
                  href="#"
                >
                  Managed IT Cloud
                </Link>
                <Link
                  className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg hover:text-blue-500"
                  href="#"
                >
                  IT Consultation
                </Link>
                <Link
                  className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg hover:text-blue-500"
                  href="#"
                >
                  Microsoft Office 365
                </Link>
                <Link
                  className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg hover:text-blue-500"
                  href="#"
                >
                  G-Suite
                </Link>
                <Link
                  className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg hover:text-blue-500"
                  href="#"
                >
                  Cyber Security
                </Link>
                <Link
                  className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg hover:text-blue-500"
                  href="#"
                >
                  Cio Services
                </Link>
              </div>
            </div>
          </div>

          <Link href="#" className="p-2 text-nowrap hover:text-blue-500">
            Contact Us
          </Link>
        </div>
      </div>
    </nav>
  );
}
