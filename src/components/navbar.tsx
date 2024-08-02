"use client"

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function NavBar() {
  const [clientWindowHeight, setClientWindowHeight] = useState(0);
  const [aninav, setAninav] = useState('')

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  const handleScroll = () => {
    setClientWindowHeight(window.scrollY);
  };

  useEffect(() => {
    console.log(clientWindowHeight)
    if (clientWindowHeight > 100) {
      setAninav('rounded-3xl md:rounded-full w-4/5 top-5')
    } else {
      setAninav('rounded-none w-full')
    }
  }, [clientWindowHeight]);

  return (
    <nav
      className={`sticky w-full px-10 top-0 py-5 md:flex md:items-center md:justify-between z-20 bg-white ${aninav} transition-all ease-in-out duration-300 `}
      aria-label="Global"
    >
      <div className=" flex items-center justify-between">
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
        className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow md:block text-base text-blue-900 lg:text-lg xl:text-xl "
      >
        <div className="flex flex-col gap-5 mt-5 md:flex-row md:items-center md:justify-end md:mt-0 md:ps-5">
          <Link href="#" className="p-2 hover:text-blue-500">
            Home
          </Link>
          <Link href="#" className="p-2 hover:text-blue-500">
            About
          </Link>

          <div className="hidden md:inline-flex justify-center hs-dropdown relative [--is-collapse:true]">
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

            <div className="hs-dropdown-menu transition-all duration hs-dropdown-open:opacity-100 opacity-0 w-full  hidden z-10 min-w-60 bg-none rounded-lg p-2">
              <div className="top-0 flex justify-center bg-none items-start w-full h-[100vh] before:absolute before:left-0 before:top-0 before:z-[2] before:h-full before:w-full before:bg-[linear-gradient(to_bottom,rgba(0,0,0,0)_0%,rgb(0,0,0,0.8)_100%)] before:content-['']">
                <div className="columns-3 rounded-lg p-5 bg-white shadow-md z-10">
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
          </div>

          <Link href="#" className="p-2 text-nowrap hover:text-blue-500">
            Contact Us
          </Link>

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

          
        </div>
      </div>
    </nav>
  );
}
