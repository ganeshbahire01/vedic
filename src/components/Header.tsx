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
      link: "/appointment",
      variant: "primary",
      text: "Book Appointment",
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
    <header className="sticky top-0 shadow-sm z-40 bg-eggshell h-20 md:h-24 flex justify-center items-center">
      <nav
        className="mx-auto z-10 w-full flex items-center bg-eggshell justify-between  gap-x-10  py-2 px-5 lg:py-2 xl:px-[115px] container"
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
                  className="hover:text-gray-950 text-gray-500"
                >
                  {item?.text}
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center ">
          <div className="hidden lg:flex lg:gap-4">
            <PhoneCall color="green" capHeight={20} width={20} /> 9016531111
          </div>
        </div>
        <div className="flex lg:hidden">
          <SheetDemo />
        </div>
      </nav>
    </header>
  );
};
