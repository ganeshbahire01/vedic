import React from "react";
import { treatments } from "../data/data";
import Image from "next/image";
import { Button } from "./ui/button";

type Props = {};

const Treatments = (props: Props) => {
  return (
    <div className="container text-center py-16">
      <div className="mb-8 font-bold text-4xl">
        <h2>Treatments</h2>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 text-center">
        {treatments.map((item) => (
          <div className="w-full" key={item.title}>
            <Image
              src={item.image}
              alt="treatment"
              width={275}
              height={275}
              className="rounded-xl m-auto"
            />
            <h3 className="my-4 font-bold text-xl">{item.title}</h3>
            <p className="text-gray-600 line-clamp-4">{item.description}</p>
            <Button className="text-white bg-[#93c942] py-2 px-4 rounded-lg mt-4 hover:bg-[#a5e840]">
              Enquire Now
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Treatments;
