export default function Clients() {
  const LOGOS = [
    <img
      loading="lazy"
      src="https://cdn.builder.io/api/v1/image/assets/TEMP/8ee9f161-df19-4fa7-a2a6-edf9acf0e0d6?apiKey=7e8b177c7c374d8abaf3aebf27f1c17d&"
      className="max-w-10 md:max-w-20 xl:max-w-44"
      alt="Image 1"
    />,
    <img
      loading="lazy"
      src="https://cdn.builder.io/api/v1/image/assets/TEMP/80480f8a-69ad-4c30-88ba-f4e7ee08fc51?apiKey=7e8b177c7c374d8abaf3aebf27f1c17d&"
      className="max-w-10 md:max-w-20 xl:max-w-44"
      alt="Image 2"
    />,
    <img
      loading="lazy"
      src="https://cdn.builder.io/api/v1/image/assets/TEMP/140d376c-13f2-4823-b397-b3de733bf560?apiKey=7e8b177c7c374d8abaf3aebf27f1c17d&"
      className="max-w-10 md:max-w-20 xl:max-w-44"
      alt="Image 3"
    />,
    <img
      loading="lazy"
      src="https://cdn.builder.io/api/v1/image/assets/TEMP/0ae217f1-b695-4661-bd3d-6440eebc2c5c?apiKey=7e8b177c7c374d8abaf3aebf27f1c17d&"
      className="max-w-10 md:max-w-20 xl:max-w-44"
      alt="Image 4"
    />,
    <img
      loading="lazy"
      src="https://cdn.builder.io/api/v1/image/assets/TEMP/67017079-51e1-4245-9bf1-b5957eb66c74?apiKey=7e8b177c7c374d8abaf3aebf27f1c17d&"
      className="max-w-10 md:max-w-20 xl:max-w-44"
      alt="Image 5"
    />,
    <img
      loading="lazy"
      src="https://cdn.builder.io/api/v1/image/assets/TEMP/515313ac-7ec9-4c6e-95db-80dac2f8b960?apiKey=7e8b177c7c374d8abaf3aebf27f1c17d&"
      className="max-w-10 md:max-w-20 xl:max-w-44"
      alt="Image 6"
    />,
    <img
      loading="lazy"
      src="https://cdn.builder.io/api/v1/image/assets/TEMP/c513fc32-3ab9-4cca-911e-0b2642ac7206?apiKey=7e8b177c7c374d8abaf3aebf27f1c17d&"
      className="max-w-10 md:max-w-20 xl:max-w-44"
      alt="Image 7"
    />,
    <img
      loading="lazy"
      src="https://cdn.builder.io/api/v1/image/assets/TEMP/5731a5a7-689f-49ae-abf1-6e6dc00c2043?apiKey=7e8b177c7c374d8abaf3aebf27f1c17d&"
      className="max-w-10 md:max-w-20 xl:max-w-44"
      alt="Image 8"
    />,
    <img
      loading="lazy"
      src="https://cdn.builder.io/api/v1/image/assets/TEMP/cb51d286-530f-42be-9e91-9c850522f127?apiKey=7e8b177c7c374d8abaf3aebf27f1c17d&"
      className="max-w-10 md:max-w-20 xl:max-w-44"
      alt="Image 9"
    />,
    <img
      loading="lazy"
      src="https://cdn.builder.io/api/v1/image/assets/TEMP/44ba8437-f6fd-4a51-bfd3-262d7528f7a4?apiKey=7e8b177c7c374d8abaf3aebf27f1c17d&"
      className="max-w-10 md:max-w-20 xl:max-w-44"
      alt="Image 10"
    />,
  ];

  return (
    <div className="relative w-full py-5 overflow-hidden bg-transparent rounded-lg before:absolute before:left-0 before:top-0 before:z-[2] before:h-full before:w-[150px] before:bg-[linear-gradient(to_right,rgb(111,233,249)_0%,rgba(111,233,249,0)_100%)] before:content-[''] after:absolute after:right-0 after:top-0 after:z-[2] after:h-full after:w-[150px] after:-scale-x-100 after:bg-[linear-gradient(to_right,rgb(28,189,174)_0%,rgb(28,189,174,0)_100%)] after:content-['']">
      <div className="animate-infinite-slider-10 md:animate-infinite-slider-18 xl:animate-infinite-slider-30 overflow-hidden flex w-[calc(10rem*10)] md:w-[calc(18rem*10)] xl:w-[calc(30rem*10)]">
        {LOGOS.map((logo, index) => (
          <div
            className="slide flex w-20 md:w-36 xl:w-60 items-center justify-center"
            key={index}
          >
            {logo}
          </div>
        ))}
        {LOGOS.map((logo, index) => (
          <div
            className="slide flex w-20 md:w-36 xl:w-60 items-center justify-center"
            key={index}
          >
            {logo}
          </div>
        ))}
      </div>
    </div>
  );
}
