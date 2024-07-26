export default function LandingAbout() {
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
            COMPUTECH
          </h3>
          <h4 className="text-lg sm:text-xl lg:text-4xl text-balance mt-1 text-gray-800">
            Business IT Solution
          </h4>
          <p className="mt-5 text-sm sm:text-base lg:text-xl text-gray-500 dark:text-neutral-400">
            Abccomputech is dedicated to providing first class IT services to
            businesses that want to grow and cut costs. With monthly rates, and
            our month to month plan you get strategic IT support. Our goal is to
            give you a better service with the lower cost and help you reach
            your business goals. We value long term relationships with out
            clients and will work closely with your business to ensure that you
            have the resources you need to be successful.
          </p>
          <button
            type="button"
            className="lg:w-fit py-3 px-5 md:px-10 lg:px-20 mt-5 sm:mt-10 inline-flex items-center justify-center gap-x-2 text-sm md:text-base font-semibold rounded-lg border border-transparent bg-blue-100 text-blue-800 hover:bg-blue-200 disabled:opacity-50 disabled:pointer-events-none transition duration-300 ease-in-out dark:hover:bg-blue-900 dark:text-blue-400"
          >
            Connect
          </button>
        </div>
      </div>
    </div>
  );
}
