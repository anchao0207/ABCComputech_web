"use client"
import Layout from "@components/components/Layout";
import {motion} from "framer-motion"
import LandingAbout from "@components/components/LandingAbout";

export default function Page() {

  // const transition = { duration: 4, yoyo: Infinity, ease: "easeInOut" }

  
  return (
    <Layout>
      <div className="flex justify-center h-full bg-gradient-to-tr from-gray-800 to-slate-400">
        <div className="flex flex-col lg:grid grid-cols-2 w-full mx-10 my-10 md:mx-24 md:my-20 items-center self-center text-gray-800 transition duration-700 dark:text-white gap-10 lg:gap-20">
          <div className="flex flex-col w-full sm:w-3/4 justify-self-center items-center gap-10">
            <div className="flex flex-col justify-center gap-5 text-white text-balance">
              <h2 className="text-2xl sm:text-5xl font-bold">SMART - RESPONSIVE - IMAGINATIVE</h2>
              <p className="text-lg sm:text-3xl">Computech is a leading small and mid-sized business technology consulting and managed IT service provider.</p>
            </div>
            {/* <button
              type="button"
              className="lg:w-fit py-3 px-5 md:px-10 lg:px-20 inline-flex items-center justify-center gap-x-2 text-sm md:text-base font-semibold rounded-lg border border-transparent bg-blue-100 text-blue-800 hover:bg-blue-200 disabled:opacity-50 disabled:pointer-events-none transition duration-300 ease-in-out dark:hover:bg-blue-900 dark:text-blue-400"
            >
              Read More
            </button> */}
          </div>
          <div className="w-3/4 bg-black bg-gradient-to-br from-black to-zinc-300/70 p-5 rounded-lg">
      <form action="#">
        <div className="flex flex-col gap-5">
          <div className="text-white text-base md:text-xl xl:text-2xl text-balance">
            Take Advantage of a Free Business IT Evaluation and Consultation
          </div>
          <div className="flex flex-col sm:grid sm:grid-cols-2 gap-4">
            <div className="flex rounded-lg shadow-sm">
              <input
                type="text"
                placeholder="First Name"
                className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm rounded-lg text-xs sm:text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
              />
            </div>
            <div className="flex rounded-lg shadow-sm">
              <input
                type="text"
                placeholder="Last Name"
                className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm rounded-lg text-xs sm:text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
              />
            </div>
          </div>
          <div className="flex flex-col md:grid xl:grid lg:flex grid-cols-2 gap-4">
            <div className="flex rounded-lg shadow-sm">
              <input
                type="text"
                placeholder="Email"
                className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm rounded-lg text-xs sm:text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
              />
            </div>
            <div className="flex rounded-lg shadow-sm">
              <input
                type="number"
                placeholder="Phone"
                className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm rounded-lg text-xs sm:text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
              />
            </div>
          </div>
          <button
            type="button"
            className="py-3 px-5 md:px-10 lg:px-20 inline-flex justify-center items-center gap-x-2 text-base font-semibold rounded-lg border border-transparent bg-blue-800 text-white hover:bg-blue-500 transition duration-300 ease-in-out disabled:opacity-50 disabled:pointer-events-none dark:hover:bg-blue-900 dark:text-blue-400"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
        </div>
      </div>
      <div className="flex flex-col p-5 md:p-10 max-w-6xl place-self-center gap-10">
      <div className="flex flex-col w-full justify-center items-center text-pretty">
        <h3 className="text-4xl text-balance mt-1 text-gray-800 font-bold">
          Computech
        </h3>
        <p className="mt-5 text-sm sm:text-base lg:text-xl text-gray-500 dark:text-neutral-400">
        Computech is dedicated to providing first class IT services to businesses that want to grow and cut costs. With monthly rates, and our month to month plan you get strategic IT support. Our goal is to give you a better service with the lower cost and help you reach your business goals. We value long term relationships with our clients and will work closely with your business to ensure that you have the resources you need to be successful.
              </p>
        <p className="mt-5 text-sm sm:text-base lg:text-xl text-gray-500 dark:text-neutral-400">
        Our mission is to provide clients with solutions through our complete spectrum of consulting, managing and outsourcing services. Our company goal is to provide complete customer satisfaction for small to medium sized businesses.
</p>
<p className="mt-5 text-sm sm:text-base lg:text-xl text-gray-500 dark:text-neutral-400">
Computech’s client base includes many of the most successful companies in Southern California. Our clients range widely from manufactures, retail, wholesalers, financial firms, culinary industries, pharmaceutical and the entertainment industry, through everyday small to medium size businesses.
</p>
<p className="mt-5 text-sm sm:text-base lg:text-xl text-gray-500 dark:text-neutral-400">
In the internet age, Computech has become a valuable partner to its clients in by providing them with end-to-end consulting, application support, implementation and infrastructure services. By integrating the highest level of professionals and technology, we increase our client’s productivity and profitability while making life easier for their day to day operations.
</p>
<p className="mt-5 text-sm sm:text-base lg:text-xl text-gray-500 dark:text-neutral-400">
We offer you a variety of IT management plans and solutions that fit with your business. We will spend the time to understand your business and makes sure the necessary need of your business with technology. By providing solutions to control information technology we have helped businesses run faster and more reliably than ever before.
        </p>
      </div>
    </div>
    <div className="w-full bg-white border rounded-xl shadow-sm sm:flex">
      <div className="shrink-0 relative w-full sm:w-1/2 rounded-t-xl overflow-hidden pt-[40%] sm:pt-[20%] sm:rounded-s-xl md:rounded-se-none ">
        <img
          className="size-full absolute top-0 start-0 object-cover"
          src="https://images.unsplash.com/photo-1680868543815-b8666dba60f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80"
          alt="Card Image"
        />
      </div>
      <div className="flex flex-wrap">
        <div className="p-4 flex flex-col justify-center h-full sm:p-7 md:p-10">
          <h3 className="text-xl lg:text-3xl font-bold text-gray-800 dark:text-white">
            Here's how you'll benefit from Computech and our business solutions:
          </h3>
        <div className="mt-7 text-sm sm:text-base lg:text-xl text-gray-500 dark:text-neutral-400">

          <ul className="list-disc list-outside px-10 flex flex-col gap-2 text-pretty">
            <li>
              Save money on products - We only select the very best in software.
            </li>
            <li>
              Never go without IT support again - We're here for your night and day.
            </li>
            <li>
              Maximize efficiency on the road - We offer both on-site and remote supprot.
            </li>
            <li>
              Benefit from proactive IT solutions - We manage problems before they affect your business.
            </li>
          </ul>
          </div>
        </div>
      </div>
    </div>
      {/* <div className="w-1/2">

      <svg xmlns="http://www.w3.org/2000/svg" width="451" height="437">
        <motion.path
          d="M 239 17 C 142 17 48.5 103 48.5 213.5 C 48.5 324 126 408 244 408 C 362 408 412 319 412 213.5 C 412 108 334 68.5 244 68.5 C 154 68.5 102.68 135.079 99 213.5 C 95.32 291.921 157 350 231 345.5 C 305 341 357.5 290 357.5 219.5 C 357.5 149 314 121 244 121 C 174 121 151.5 167 151.5 213.5 C 151.5 260 176 286.5 224.5 286.5 C 273 286.5 296.5 253 296.5 218.5 C 296.5 184 270 177 244 177 C 218 177 197 198 197 218.5 C 197 239 206 250.5 225.5 250.5 C 245 250.5 253 242 253 218.5"
          fill="transparent"
          strokeWidth="12"
          stroke="rgba(255, 255, 255, 0.69)"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={transition}
        />
      </svg>
      </div> */}
    </Layout>
  );
}
