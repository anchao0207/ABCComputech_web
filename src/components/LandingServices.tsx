import Image from "next/image";

function ServiceCard({
  name,
  desc,
  img,
  reverse = false,
}: {
  name: string;
  desc: string;
  img: string;
  reverse?: boolean;
}) {
  return (
    <div
      className={`flex w-full ${
        reverse ? "justify-start" : "justify-end"
      } items-center text-balance`}
    >
      <div className="flex w-full">
        {reverse ? (
          <div className="w-full flex flex-col sm:flex-row gap-5">
            <div className="flex flex-col w-full sm:w-2/5 justify-center text-end gap-2 md:gap-5">
              <div className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold">{name}</div>
              <div className="text-sm md:text-base lg:text-lg xl:text-xl">{desc}</div>
            </div>
            <div className="w-full sm:w-3/5 flex justify-start">
              <Image
                src={img}
                alt="Computech Logo"
                width={600}
                height={600}
                style={{ objectFit: "contain" }}
                priority
              />
            </div>
          </div>
        ) : (
          <div className="w-full flex flex-col sm:flex-row gap-5">
            <div className="w-full sm:w-3/5 flex justify-end">
              <Image
                src={img}
                alt="Computech Logo"
                width={600}
                height={600}
                priority
                style={{ objectFit: "contain" }}
              />
            </div>
            <div className="flex flex-col w-full sm:w-2/5 justify-center gap-2 md:gap-5">
              <div className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold">{name}</div>
              <div className="text-sm md:text-base lg:text-lg xl:text-xl via-slate-100">{desc}</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default function LandingServices() {
  const content = [
    {
      name: "Cloud Services",
      desc: "Business large and small are moving some or all of their IT functions to the cloud and computech is leading the charge. Your business can realize the benefit of anywhere, anytime computing while minimizing IT costs and maximizing uptime and service levels.",
    },
    {
      name: "IT Consultation",
      desc: "Our company Services are custom to fit to meet the needs of each business we work with. Manage IT Services and technical support needs vary, and your model is based on fitting the specific computer solutions required for each engagement.",
    },
    {
      name: "Cyber Security",
      desc: "With millions of individuals and businesses alike falling victim to various identity thefts or money grabbing scams, it is important to know that you have the highest level of network security available, so that all of your vital information is safe and secure.",
    },
    {
      name: "CIO Services",
      desc: "A Chief Information Officer (CIO) is a trusted technological adviser who specializes in developing effective, efficient IT strategies for businesses throughout Southern California.",
    },
    {
      name: "Microsoft Office 365",
      desc: "Office 365 is Microsoft’s cloud-based hosting service, combining the features of Exchange Online, SharePoint Online, and Lync Online.",
    },
    {
      name: "Software Development",
      desc: "Program and develop Customer Relation Management (CRM), Mobile application for iPhone and Android, Website Design and development, Database installation and programing, Set up and program Material Requirements Planning MRP Software.",
    },
  ];

  let flicker = true;

  return (
    <div className="relative flex flex-col p-14 lg:p-20 w-full gap-10">
      <div className="text-4xl lg:text-6xl text-center">What we offer</div>
      <>
        {content.map((c) => {
          flicker = !flicker;
          return (
            <ServiceCard
              key={c.name}
              name={c.name}
              img="/placeholder.webp"
              desc={c.desc}
              reverse={flicker}
            />
          );
        })}
      </>
    </div>
  );
}
