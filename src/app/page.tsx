import Hero from "@/components/Hero";
import Treatments from "@/components/treatments";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-[#e0bea366]">
      <Hero />
      <Treatments />
    </div>
  );
}
