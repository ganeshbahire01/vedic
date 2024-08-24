import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";

type Props = {};

const Hero = (props: Props) => {
  return (
    <div
      className="h-[400px] md:h-[580px] object-cover bg-repeat-round relative  "
      style={{ backgroundImage: "url('/hero.webp')" }}
    >
      <div className="absolute top-10 left-5 md:top-1/4 md:left-32 max-w-lg ">
        <h1 className="text-3xl leading-[44px] tracking-[-0.02em] font-bold md:text-5xl mt-4 font-work-sans">
          Shree Vishwastha Ayurvedalaya and Panchakarma Centre
        </h1>
        <p className="text-xl leading-7 font-normal mt-4">
          One-stop solution for authentic Indian healthcare solutions, providing
          modern treatment with ancient wisdom
        </p>
        <Button className="text-white bg-[#93c942] py-2 px-4 rounded-lg mt-4 hover:bg-[#a5e840]">
          Book Appointment
        </Button>
      </div>
    </div>
  );
};

export default Hero;
