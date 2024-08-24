import Image from "next/image";
import React from "react";

type Props = {};

const Gallery = (props: Props) => {
  return (
    <div className="container py-12 lg:py-16 ">
      <h1 className="text-xl font-bold tracking-tight text-gray-900 sm:text-3xl text-center">
        Gallery
      </h1>
      <div className="lg:flex justify-between gap-4 mt-10">
        <div className="mt-10 lg:mt-0">
          <Image
            src="/about.webp"
            alt="treatments"
            width={600}
            height={300}
            className="rounded-xl mx-auto"
          />
        </div>{" "}
        <div className="mt-10 lg:mt-0">
          <Image
            src="/about.webp"
            alt="treatments"
            width={600}
            height={300}
            className="rounded-xl mx-auto"
          />
        </div>{" "}
        <div className="mt-10 lg:mt-0">
          <Image
            src="/about.webp"
            alt="treatments"
            width={600}
            height={300}
            className="rounded-xl mx-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
