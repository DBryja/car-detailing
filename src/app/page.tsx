import Image from "next/image";
import Hero from "@/app/sections/Hero";

export default function Home() {
  return (
      <div className={`w-screen h-full overflow-x-hidden overscroll-x-none flex`}>
          <Hero/>
      </div>
  );
}
