import AboutUs from "@/components/AboutUs";
import ContactUs from "@/components/ContactUs";
import Gallery from "@/components/Gallery";
import Hero from "@/components/Hero";
import Treatments from "@/components/treatments";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      
      <Hero />
      <Treatments />
      <AboutUs />
      <Gallery />
      <ContactUs />
       
    </div>
  );
}
