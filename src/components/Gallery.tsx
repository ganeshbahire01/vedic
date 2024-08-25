"use client";
import Image from "next/image";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
type Props = {};
import Autoplay from "embla-carousel-autoplay";
const Gallery = (props: Props) => {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );
  return (
    <div className="container py-12 lg:py-16 px-4">
      <h1 className="text-xl font-bold tracking-tight text-gray-900 sm:text-3xl text-center">
        Gallery
      </h1>
      <div className="lg:flex justify-between gap-4 mt-10">
        <Carousel
          plugins={[plugin.current]}
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <CarouselContent>
            <CarouselItem className="md:basis-1/3">
              <Image
                src="/about.webp"
                alt="treatments"
                width={600}
                height={300}
                className="rounded-xl mx-auto"
              />
            </CarouselItem>
            <CarouselItem className="md:basis-1/3">
              <Image
                src="/about.webp"
                alt="treatments"
                width={600}
                height={300}
                className="rounded-xl mx-auto"
              />
            </CarouselItem>
            <CarouselItem className="md:basis-1/3">
              <Image
                src="/about.webp"
                alt="treatments"
                width={600}
                height={300}
                className="rounded-xl mx-auto"
              />
            </CarouselItem>
            <CarouselItem className="md:md:basis-1/3">
              <Image
                src="/about.webp"
                alt="treatments"
                width={600}
                height={300}
                className="rounded-xl mx-auto"
              />
            </CarouselItem>
            <CarouselItem className="md:basis-1/3">
              <Image
                src="/about.webp"
                alt="treatments"
                width={600}
                height={300}
                className="rounded-xl mx-auto"
              />
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </div>
    </div>
  );
};

export default Gallery;
