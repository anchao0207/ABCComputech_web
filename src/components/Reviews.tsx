function Card({ className }: { className: string }) {
  return (
    <div
      className={`${className} flex flex-col bg-white border-2 border-t-4 border-t-blue-600 shadow-md rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:border-t-blue-500 dark:shadow-neutral-700/70`}
    >
      <div className="p-4 md:p-5">
        <div className="flex w-full items-center gap-5">
          <img
            className="inline-block size-[62px] rounded-full"
            src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
            alt="Avatar"
          />
          <div className="flex flex-col gap-0.5">
            <h3 className="sm:text-xl lg:text-4xl font-bold text-gray-800 dark:text-white">
              Patrice Mills CPA
            </h3>
            <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-x-3">
              <div className="flex items-center gap-x-2">
                <h4 className="font-semibold text-gray-800 dark:text-white">
                  5.0
                </h4>

                <div className="flex">
                  <svg
                    className="shrink-0 size-4 text-yellow-400 dark:text-yellow-600"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                  </svg>
                  <svg
                    className="shrink-0 size-4 text-yellow-400 dark:text-yellow-600"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                  </svg>
                  <svg
                    className="shrink-0 size-4 text-yellow-400 dark:text-yellow-600"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                  </svg>
                  <svg
                    className="shrink-0 size-4 text-yellow-400 dark:text-yellow-600"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                  </svg>
                  <svg
                    className="shrink-0 size-4 text-yellow-400 dark:text-yellow-600"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                  </svg>
                </div>
              </div>
                <span className="inline-flex items-center gap-x-1 text-base text-blue-600 decoration-2 hover:underline font-medium">
                  2 weeks ago
                </span>
            </div>
          </div>
        </div>
        <p className="mt-2 text-sm sm:text-base lg:text-xl text-pretty text-gray-500 dark:text-neutral-400">
          I've been working with Computech for more than 3 years and I'm
          continually impressed by their expertise and professionalism. They
          provide top-notch IT solutions tailored to our needs, and their
          proactive approach ensures smooth operations. Highly recommend them
          for any business looking for reliable IT support!
        </p>
      </div>
    </div>
  );
}
export default function Reviews() {
  return (
    <div className="flex flex-col md:flex-row w-full justify-center items-center align-middle py-10 px-10 sm:px-20">
      <div className="m-10 text-center w-4/5 text-4xl font-bold">
        What people said about us
      </div>
      <div className="relative flex flex-col w-full justify-center items-center">
        <Card className="-rotate-1 z-30" />
        <Card className="hidden lg:block -rotate-3 z-20"/>
        <Card className="hidden lg:block rotate-1 z-10 "/>
        <Card className="rotate-3 z-0  "/>
      </div>
    </div>
  );
}
