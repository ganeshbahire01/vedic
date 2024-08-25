import Treatments from "@/components/treatments";
import React from "react";
import { treatments } from "../../data/data";
import Image from "next/image";
import { Button } from "@/components/ui/button";

type Props = {};

const page = (props: Props) => {
  return (
    <div className="container lg:my-16">
      <div className="mb-8 font-bold text-4xl Lg:text-5xl text-center">
        <h2>Procedure</h2>
      </div>
      <div className="grid grid-cols-1 gap-16 text-center lg:text-left justify-center items-center">
        {treatments.map((item, index) => (
          <div className="md:flex gap-8" key={item.title}>
            <div className="md:w-1/2">
              <h3 className="my-4 font-bold text-3xl">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
            {index % 2 === 1 ? (
              <div className=" flex items-start justify-end md:order-first md:w-1/2 mt-5 md:mt-0">
                <Image
                  src={item.image}
                  alt="treatment"
                  width={475}
                  height={475}
                  className="rounded-xl m-auto"
                />
              </div>
            ) : (
              <div className="lg:w-1/2 mt-5 md:mt-0">
                <Image
                  src={item.image}
                  alt="treatment"
                  width={475}
                  height={475}
                  className="rounded-xl m-auto"
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
