function Card({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="flex flex-col justify-between bg-white border shadow-sm rounded-xl p-4 md:p-5 dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70">
      <div>
        <h3 className="text-base lg:text-lg font-bold text-gray-800 dark:text-white">
          {title}
        </h3>
        <p className="mt-2 text-gray-500 dark:text-neutral-400">{desc}</p>
      </div>
      <a
        className="mt-3 inline-flex items-center gap-x-1 text-sm font-semibold rounded-lg border border-transparent text-blue-600 decoration-2 hover:text-blue-700 hover:underline focus:underline focus:outline-none focus:text-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-600 dark:focus:text-blue-600"
        href="#"
      >
        read more...
        <svg
          className="shrink-0 size-4"
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
      </a>
    </div>
  );
}

export default function LandingManage() {
  return (
    <div className="flex flex-col p-5 md:p-10 max-w-6xl place-self-center gap-10">
      <div className="flex flex-col w-full justify-center items-center text-balance text-center">
        <h3 className="text-lg sm:text-xl lg:text-4xl text-balance mt-1 text-gray-800 font-bold">
          Manage Cloud Services
        </h3>
        <p className="mt-5 text-sm sm:text-base lg:text-xl text-gray-500 dark:text-neutral-400">
          Cloud services are not all created equally, and many solutions may not
          be appropriate for your specific business needs. With advancement in
          technology, cloud computing is an inevitable technological phenomena
          to both business enterprises and individuals. In cloud computing, your
          data is technically stored in an external server. This ensures that
          your data is secure and that you can access your data, on demand,
          remotely provided that you have internet access and login credentials.
          Essentially, cloud computing is a managed (externally) services which
          encompasses IT models such as software as a service (SaaS), platform
          as a service (PaaS) as well as infrastructure as a service (IaaS).
        </p>
      </div>
      <div className="flex flex-col sm:grid grid-cols-2 lg:grid-cols-4 w-full gap-5">
        <Card
          title="Email"
          desc="No more hosting your Exchange in your server room, move email to the cloud."
        />
        <Card
          title="Backup"
          desc="Backup and disaster recovery services for maximum reliability."
        />
        <Card
          title="Servers"
          desc="Many businesses no longer need servers in their office. Does yours?"
        />
        <Card
          title="Managed"
          desc="Managed private clouds bring the best of the cloud and on-premises together."
        />
      </div>
    </div>
  );
}
