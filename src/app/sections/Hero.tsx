"use client";
import Image from "next/image";
import ContactBar from "@/app/components/ContactBar";
import {GiSparkles} from "react-icons/gi";
import Button from "@/app/components/Button";

export default function Hero(){
    return (
        <div className={"relative w-full h-screen bg-hero md:bg-heroTablet lg:bg-heroDesktop bg-no-repeat bg-cover top-0"}>
            <div className={"bg-[rgba(0,0,0,0.4)] inset-0 absolute px-6 md:px-12 flex flex-col md:justify-start md:items-start"}>
                <div className={"lg:max-w-screen-2xl lg:mx-auto"}>
                <ContactBar/>
                <h1 className={"uppercase mt-4 pr-4 tracking-widest leading-snug md:pr-0 md:mt-12"}>
                    stand out from the crowd
                </h1>
                <h3 className={"mt-4 pr-12 font-medium md:mt-12"}>
                    ⭐ We will make Your car shine ⭐
                </h3>
                <Button href={"#" } className={"mt-8 mx-auto max-sm:w-min md:mx-0 md:mt-12 "} filled>MAKE AN APPOINTMENT</Button>
                </div>
            </div>
        </div>
    )
}