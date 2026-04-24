import { Heading } from "@/components/utils/header";
import Image from "next/image";

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

export default function HomeHero() {
  return (
    <section className="w-full h-auto relative">
      <div className="w-full aspect-[16/9] md:aspect-[21/7]">
        <Image
          src="/Images/Neurology 1.jpg"
          alt="Hero Image"
          fill
          className="object-cover"
          priority
        />
      </div>

        <div className="z-10 absolute text-white bottom-[100px] left-0 px-4">
      <div className="container ">
          <Heading
            as="h1"
            size="heading1"
            className="line-clamp-4 leading-tight mb-2 xl:mb-3 2xl:mb-4"
          >
            Welcome to Our Clinic
          </Heading>
          <p>Providing quality healthcare services for you and your family.</p>
        </div>
      </div>
    </section>
  );
}
