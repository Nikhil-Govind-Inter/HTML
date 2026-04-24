"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Heading } from "@/components/utils/header";
import Image from "next/image";
import parse from "html-react-parser";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

type Slide  = {
  media: {
    type: "image" | "video";
    desktop_path: string;
    mobile_path: string;
    poster: string;
    media_alt: string;
  };
  title: string;
  description: string;
};

export default function HomeHero({ slides }: { slides: Slide[] }) {
  const AUTOPLAY_DELAY = 4000;

  const [progress, setProgress] = useState(1);

  const autoplay = useRef(
    Autoplay({
      delay: AUTOPLAY_DELAY,
      stopOnInteraction: false,
      stopOnMouseEnter: true, // UX improvement
    }),
  );

  const onScroll = useCallback((emblaApi: any) => {
    const scrollProgress = Math.max(0, Math.min(1, emblaApi.scrollProgress()));
    setProgress(scrollProgress * 100);
  }, []);

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: false,
      align: "start",
    },
    [autoplay.current],
  );

  useEffect(() => {
    if (!emblaApi) return;

    emblaApi.on("scroll", onScroll);
    emblaApi.on("reInit", onScroll);

    return () => {
      emblaApi.off("scroll", onScroll);
      emblaApi.off("reInit", onScroll);
    };
  }, [emblaApi, onScroll]);

  return (
    <section className="relative w-full h-[500px] sm:h-[75vh] md:h-[calc(100vh-70px)] overflow-hidden">
      <div className="container mx-auto">
      <div className="absolute bottom-6 right-6 z-30">
        <div className="w-[120px] h-[4px] bg-white/20 rounded-full overflow-hidden">

            <div
              className="h-full bg-white rounded-full"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>
      {/* Carousel */}
      <div className="embla h-full" ref={emblaRef}>
        <div className="flex h-full">
          {slides?.map((slide, index) => (
            <div key={index} className="relative flex-[0_0_100%] h-full">
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 z-10" />

              {/* Media */}
              {slide?.media?.type === "video" ? (
                <video
                  poster={slide?.media?.poster}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover"
                >
                  <source src={slide?.media?.desktop_path} type="video/mp4" />
                </video>
              ) : (
                <>
                  {/* Desktop */}
                  <div className="hidden md:block absolute inset-0">
                    <Image
                      src={slide?.media?.desktop_path}
                      alt={slide?.media?.media_alt}
                      fill
                      className="object-cover"
                      priority={index === 0}
                    />
                  </div>

                  {/* Mobile */}
                  <div className="block md:hidden absolute inset-0">
                    <Image
                      src={slide?.media?.mobile_path}
                      alt={slide?.media?.media_alt}
                      fill
                      className="object-cover"
                      priority={index === 0}
                    />
                  </div>
                </>
              )}

              {/* Content */}
              <div className="absolute z-20 text-white w-full h-full flex items-center justify-center text-center px-4">
                <div className="container mx-auto">
                  <Heading
                    as="h1"
                    size="heading1"
                    className="leading-tight mb-3"
                  >
                    {slide?.title}
                  </Heading>

                  <div className="text-xs md:text-sm lg:text-base">
                    {parse(slide?.description)}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
