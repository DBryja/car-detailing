import Image from "next/image";
import Hero from "@/app/sections/Hero";
import Services from "@/app/sections/Services";
import AboutUs from "@/app/sections/AboutUs";
import Contact from "@/app/sections/Contact";
import OurWork from "@/app/sections/OurWork";

export default function Home() {
  return (
      <div className={`w-screen h-full overflow-x-hidden overscroll-x-none flex flex-col gap-y-6 md:gap-y-24`}>
          <Hero/>
          <Services/>
          <AboutUs/>
          <OurWork/>
          <Contact/>
      </div>
  );
}
