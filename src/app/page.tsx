import Image from "next/image";
import Hero from "@/app/sections/Hero";
import Services from "@/app/sections/Services";

export default function Home() {
  return (
      <div className={`w-screen h-full overflow-x-hidden overscroll-x-none flex flex-col`}>
          <Hero/>
          <Services/>
      </div>
  );
}
