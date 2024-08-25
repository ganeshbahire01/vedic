import { SheetDemo } from "./sheetDemo";
import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";
import { PhoneCall } from "lucide-react";
export const Header = () => {
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
    <header className="sticky top-0 shadow-sm z-40 bg-white h-20 md:h-24 flex justify-center items-center">
      <nav
        className="mx-auto z-10 w-full flex items-center bg-white justify-between  gap-x-10  py-2 px-5 lg:py-2 xl:px-[32px] "
        aria-label="Global"
      >
        <div className="flex justify-between items-center gap-10">
          <div className="flex justify-center items-center">
            <Link href={"/"} className="flex space-x-3 items-center">
              <div>
                <Image src="/logo.png" alt="logo" height={60} width={60} />
              </div>
            </Link>
          </div>
          <div className="flex justify-between items-center ">
            <div className="hidden lg:flex lg:gap-4">
              {CTAs?.map((item, i) => (
                <Link
                  href={item?.link}
                  className="hover:text-gray-950 text-gray-500 border-b-2 border-white hover:border-b-2 hover:border-gray-950 transition-all duration-300 ease-in-out"
                >
                  {item?.text}
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center ">
          <div className="hidden lg:flex lg:gap-4 justify-center items-center">
            <div className="flex gap-2 justify-center items-center py-2 px-4 border rounded-lg hover:bg-gray-100 cursor-pointer">
              <a href="tel:9016531111" className="flex items-center gap-2">
                <PhoneCall color="green" capHeight={20} width={20} /> 9016531111
              </a>
            </div>
            <Button className="text-white bg-[#93c942] py-2 px-4 rounded-lg  hover:bg-[#a5e840]">
              Book Appointment
            </Button>
          </div>
        </div>
        <div className="flex lg:hidden">
          <SheetDemo />
        </div>
      </nav>
    </header>
  );
};
