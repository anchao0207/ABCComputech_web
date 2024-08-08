export default function LandingAbout({title, subtitle, desc, connectButton = false}:{title:string, subtitle?:string, desc?:string, connectButton?:boolean}) {
  return (
    <div className="w-full bg-white border rounded-xl shadow-sm sm:flex">
      <div className="shrink-0 relative w-full sm:w-1/2 rounded-t-xl overflow-hidden pt-[40%] sm:pt-[20%] sm:rounded-s-xl md:rounded-se-none ">
        <img
          className="size-full absolute top-0 start-0 object-cover"
          src="https://images.unsplash.com/photo-1680868543815-b8666dba60f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80"
          alt="Card Image"
        />
      </div>
      <div className="flex flex-wrap">
        <div className="p-4 flex flex-col h-full sm:p-7 md:p-10">
          <h3 className="text-4xl lg:text-6xl font-bold text-gray-800 dark:text-white">
            {title}
          </h3>
          {
            subtitle &&
          <h4 className="text-lg sm:text-xl lg:text-4xl text-balance mt-1 text-gray-800">
            {subtitle}
          </h4>
          }
          {desc &&
          <p className="mt-5 text-sm sm:text-base lg:text-xl text-gray-500 dark:text-neutral-400">
            {desc}
          </p>}
          {connectButton &&
            <button
            type="button"
            className="lg:w-fit py-3 px-5 md:px-10 lg:px-20 mt-5 sm:mt-10 inline-flex items-center justify-center gap-x-2 text-sm md:text-base font-semibold rounded-lg border border-transparent bg-blue-100 text-blue-800 hover:bg-blue-200 disabled:opacity-50 disabled:pointer-events-none transition duration-300 ease-in-out dark:hover:bg-blue-900 dark:text-blue-400"
            >
            Connect
          </button>
          }
        </div>
      </div>
    </div>
  );
}
