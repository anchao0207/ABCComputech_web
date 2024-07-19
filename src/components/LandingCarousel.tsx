
function CarouselInfo({ header, desc }: { header: string; desc: string }) {
  return (
    <div className="hs-carousel-slide">
      <div className="flex justify-center h-full bg-gradient-to-tr from-gray-800 to-slate-400">
        <div className="grid grid-cols-2 w-full mx-24 my-20 self-center text-4xl text-gray-800 transition duration-700 dark:text-white gap-20">
          <div className="flex flex-col w-2/3 justify-center justify-self-end gap-10">
            <div className="flex flex-col justify-center gap-5 text-white">
              <h2 className="text-3xl">{header}</h2>
              <p className="text-lg">{desc}</p>
            </div>
            <button
              type="button"
              className="w-fit py-3 px-20 inline-flex items-center gap-x-2 text-base font-semibold rounded-lg border border-transparent bg-blue-100 text-blue-800 hover:bg-blue-200 disabled:opacity-50 disabled:pointer-events-none dark:hover:bg-blue-900 dark:text-blue-400"
            >
              Read More
            </button>
          </div>
          <CarouselForm />
        </div>
      </div>
    </div>
  );
}

function CarouselForm() {
  return (
    <div>
      <form action="#">
      <div>
    <div className="sm:flex rounded-lg shadow-sm">
      <span className="py-3 px-4 inline-flex items-center min-w-fit w-full border-r-2 border-gray-200 bg-gray-50 text-sm text-gray-500 -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:w-auto sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg dark:bg-neutral-700 dark:border-neutral-700 dark:text-neutral-400">First and last name</span>
      <input type="text" className="py-3 px-4 pe-11 block w-full border-r-2 border-gray-200 shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"/>
      <input type="text" className="py-3 px-4 pe-11 block w-full border-gray-200 shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"/>
    </div>
  </div>
      </form>
    </div>
  );
}

export default function LandingCarousel() {
  return (
    <div
      data-hs-carousel='{
            "loadingClasses": "opacity-0",
            "isAutoPlay": false
          }'
      className="relative w-full"
    >
      <div className="hs-carousel relative overflow-hidden w-full bg-white rounded-lg">
        <div className="hs-carousel-body  flex flex-nowrap transition-transform duration-700 opacity-0">
          <CarouselInfo
            header="Smart Responsive Imaginative Services"
            desc="A leading business technology consulting and managed IT service
              provider, designs and builds powerful, meaningful IT (Information
              Technology) and Internet solutions for small and mid-sized
              businesses."
          ></CarouselInfo>
          <CarouselInfo
            header="Manage IT Services and Powerful Information Technology Solutions"
            desc="Computech Managed IT Services provide ultra-responsive technical services, 
              insightful IT consulting, and business-changing cloud solutions. 
              Learn how our expertise can help your business leverage its IT investments."
          ></CarouselInfo>
        </div>
      </div>

      <button
        type="button"
        className="hs-carousel-prev hs-carousel:disabled:opacity-50 disabled:pointer-events-none absolute inset-y-0 start-0 inline-flex justify-center items-center w-[46px] h-full text-cyan-300 hover:bg-cyan-500/20 hover:text-gray-800 rounded-e-lg dark:text-white dark:hover:bg-white/10"
      >
        <span className="text-2xl" aria-hidden="true">
          <svg
            className="flex-shrink-0 size-5"
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
            <path d="m15 18-6-6 6-6"></path>
          </svg>
        </span>
        <span className="sr-only">Previous</span>
      </button>
      <button
        type="button"
        className="hs-carousel-next hs-carousel:disabled:opacity-50 disabled:pointer-events-none absolute inset-y-0 end-0 inline-flex justify-center items-center w-[46px] h-full text-cyan-300 hover:bg-cyan-500/20 hover:text-gray-800 rounded-e-lg dark:text-white dark:hover:bg-white/10"
      >
        <span className="sr-only">Next</span>
        <span className="text-2xl" aria-hidden="true">
          <svg
            className="flex-shrink-0 size-5"
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
            <path d="m9 18 6-6-6-6"></path>
          </svg>
        </span>
      </button>

      <div className="hs-carousel-pagination flex justify-center absolute bottom-3 start-0 end-0 space-x-2">
        <span className="hs-carousel-active:bg-cyan-200 hs-carousel-active:border-cyan-200 size-3 border border-gray-400 rounded-full cursor-pointer"></span>
        <span className="hs-carousel-active:bg-cyan-200 hs-carousel-active:border-cyan-200 size-3 border border-gray-400 rounded-full cursor-pointer"></span>
      </div>
    </div>
  );
}
