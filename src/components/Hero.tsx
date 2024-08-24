import Image from "next/image";
import React from "react";

type Props = {};

const Hero = (props: Props) => {
  return (
    <div>
      <div
        className="w-full h-screen object-cover bg-no-repeat"
        style={{ backgroundImage: "url('/hero.webp')" }}
      >
        <div className="">
          <h1>we Provide Effective</h1>
          <p>Ayurvedic Treatments</p>
          <button className="text-white bg-[#93c942] py-2 px-3 rounded-lg">
            Book Appointment
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
