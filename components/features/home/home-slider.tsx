
'use client';

type slider = {
    media: {
        media_path: string,
        media_alt: string,
    },
    title: string
}


import { Heading } from "@/components/utils/header";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { useEffect, useRef } from "react";

export default function CardSlider({ cards }: { cards: slider[] }) {
    const [emblaRef, emblaApi] = useEmblaCarousel({
        align: "start",
        containScroll: "trimSnaps",
        loop: true, // 🔥 smooth scrolling
        skipSnaps: true
    });

    const intervalRef = useRef<NodeJS.Timeout | null>(null);


    // 🔥 Auto scroll logic
    useEffect(() => {
        if (!emblaApi) return;

        const startAutoScroll = () => {
            stopAutoScroll(); // prevent duplicates
            intervalRef.current = setInterval(() => {
                emblaApi.scrollNext(); // 👈 scroll 1 card at a time
            }, 2500); // adjust speed here
        };

        const stopAutoScroll = () => {
            if (intervalRef.current) clearInterval(intervalRef.current);
        };

        startAutoScroll();

    }, [emblaApi]);

    return (
        <div className="relative py-[50px_75px] bg-gray-100">

            <div className="container mx-auto px-4">


                <Heading as="h1" size={"heading1"} className="mb-4">
                    Our Services
                </Heading>

                {/* Carousel */}
                <div className="overflow-hidden" ref={emblaRef}>


                    <div className="flex -ml-4">
                        {cards.map((card, index) => (
                            <div
                                key={index}
                                className="
                                pl-4
                flex-[0_0_100%]
                sm:flex-[0_0_50%]
                md:flex-[0_0_33.33%]
                lg:flex-[0_0_25%]    /* 👈 4 cards */
              "
                            >
                                <div className="bg-white overflow-hidden hover:scale-101 transition duration-300 ease-in-out">
                                    <div className="relative aspect-square">

                                        <Image
                                            fill
                                            src={card?.media?.media_path}
                                            alt={card?.media?.media_alt}
                                            className="w-full h-40 object-cover inset-0 absolute"
                                        />
                                    </div>
                                    <div className="p-4 bg-gray-100">
                                        <Heading as="h3" size={"heading3"}>
                                            {card?.title}
                                        </Heading>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </div>
    );
}