import Image from "next/image";
import React from "react";

type Props = {};

const AboutUs = (props: Props) => {
  return (
    <div className="lg:flex py-12 lg:py-36  container justify-between items-center text-center">
      <div className="lg:w-1/2 ">
        <div>
          <h1 className="text-xl font-bold tracking-tight text-gray-900 sm:text-3xl">
            About Us
          </h1>
        </div>
        <div className="relative mt-6 text-lg leading-8 text-gray-600">
          <b>Shri Vishwastha Ayurvedalay</b> is a one-stop solution for
          authentic Indian healthcare, blending modern treatment with ancient
          wisdom. With a rich legacy, we provide customized Ayurvedic medicines
          and Panchakarma therapies, using state-of-the-art facilities and a
          highly trained staff. Our clinics are located across three key cities:
          Chhatrapati SambhajiNagar (Aurangabad), Pune, and Nashik, offering
          easy access to holistic healthcare.
        </div>
      </div>
      <div className="lg:w-1/2 mt-10 lg:mt-0">
        <Image
          src="/about.webp"
          alt="treatments"
          width={600}
          height={300}
          className="rounded-xl mx-auto"
        />
      </div>
    </div>
  );
};

export default AboutUs;
