import { Heading } from "@/components/utils/header";
import Image from "next/image";
import parse from "html-react-parser";
const sliderImages = [
  {
    src: "/Images/Health Screening 1.jpg",
    alt: "Slider Image 1",
  },
  {
    src: "/Images/Orthopaedic 1.jpg",
    alt: "Slider Image 2",
  },
  {
    src: "/Images/Ophthalmology 1.jpg",
    alt: "Slider Image 3",
  },
  {
    src: "/Images/Neurology 1.jpg",
    alt: "Slider Image 4",
  },
  {
    src: "/Images/Pediatrics 1.jpg",
    alt: "Slider Image 5",
  },
];

type homeHeroData = {
  media: {
    type: string;
    path: string;
    mobile_path: string;
    alt: string;
  };
  title: string;
  description: string;
};

export default function HomeHero({ data }: { data: homeHeroData }) {
  return (
    <section className="w-full h-full relative">
      <div className="absolute inset-0 w-full h-full bg-black/40 z-1"></div>
      <div className="w-full aspect-[16/9] -z-1 md:aspect-[21/7] h-screen md:h-auto relative">
        {data?.media?.type === "video" ? (
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          >
            <source src={data?.media?.path} type="video/mp4" />
          </video>
        ) : (
          <>
            <div className="max-sm:hidden absolute inset-0">
              <Image
                src={data?.media?.path}
                alt={data?.media?.alt}
                fill
                className="object-cover"
                priority
              />
            </div>

            <div className="md:hidden absolute inset-0">
              <Image
                src={data?.media?.mobile_path}
                alt={data?.media?.alt}
                fill
                className="object-cover"
                priority
              />
            </div>
          </>
        )}
      </div>

      <div className="absolute z-10 text-white w-full h-full max-md:top-0 max-md:left-0 bottom-[-100px] max-md:flex max-md:items-center text-center max-md:justify-center">
        <div className="container mx-auto px-4">
          <Heading
            as="h1"
            size="heading1"
            className="line-clamp-4 leading-tight mb-2 xl:mb-3 2xl:mb-4"
          >
            {data?.title}
          </Heading>
          <div className="text-[8px] xl:text-[10px] 2xl:text-[12px]">
            {parse(data?.description)}
          </div>
        </div>
      </div>
    </section>
  );
}
