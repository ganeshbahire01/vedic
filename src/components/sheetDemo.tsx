"use client";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import { Button } from "./ui/button";
import { Menu, PhoneCall } from "lucide-react";

export function SheetDemo() {
  const [show, isShow] = useState(false);
  const CTAs = [
    {
      link: "/about-us",
      variant: "secondary",
      text: "About Us",
    },
    {
      link: "/procedure",
      variant: "primary",
      text: "Procedure",
    },
    {
      link: "/blog",
      variant: "secondary",
      text: "Blog",
    },
    {
      link: "/testimonials",
      variant: "primary",
      text: "Testimonials",
    },
    {
      link: "/contact-us",
      variant: "outline",
      text: "Contact Us",
    },
  ];

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="secondary">
          <Menu color="black" capHeight={20} width={20} />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <div className="grid grid-cols-1 m-auto w-full gap-2 px-4 z-50">
          {CTAs?.map((item, i) => (
            <SheetClose asChild>
              <>
                <Link href={item?.link} className="flex">
                  {item?.text}
                </Link>
                <hr />
              </>
            </SheetClose>
          ))}
          <div className="lg:flex lg:gap-4 justify-center items-center mt-4">
            <div className="flex gap-2 justify-center items-center py-2 px-4 border rounded-lg">
              <PhoneCall color="green" capHeight={20} width={20} /> 9016531111
            </div>
            <Button className="text-white bg-[#93c942] py-2 px-4 rounded-lg w-full mt-2 hover:bg-[#a5e840]">
              Book Appointment
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
