import ContactBar from "@/app/components/ContactBar";
import Button from "@/app/components/Button";
import AnimatedText from "@/app/components/animationWrappers/AnimatedText";
import React from "react";
import SlideIn from "@/app/components/animationWrappers/SlideIn";

export default function Hero(){
    return (
        <section className={"relative w-full min-h-[650px] md:min-h-[850px] bg-hero md:bg-heroTablet lg:bg-heroDesktop bg-no-repeat bg-cover top-0 " +
            " after:block after:absolute after:w-full after:bottom-0 after:inset-x-0 after:h-[15vh] after:bg-gradient-to-t after:from-black after:to-transparent after:pointer-events-none "}>
            <div className={"bg-[rgba(0,0,0,0.4)] inset-0 absolute px-6 md:px-12 flex flex-col md:justify-start md:items-start"}>
                <div className={"lg:max-w-screen-xl lg:mx-auto "}>
                    <ContactBar/>
                    <AnimatedText text={"Stand out from the crowd"} el={"h1"} once
                                  className={"uppercase mt-4 pr-4 tracking-widest leading-snug md:pr-0 md:mt-12"}/>

                    <AnimatedText delay={1} text={"We will make Your car shine"} el={"h3"} once className={"mt-4 pr-16 font-medium md:mt-12"}/>

                    <SlideIn once delay={1.1}>
                        <Button href={"#contact"}
                               className={"mt-8 mx-auto max-sm:w-min md:mx-0 md:mt-12 whitespace-nowrap  "} filled>
                            MAKE AN APPOINTMENT</Button>
                    </SlideIn>
                </div>
            </div>
        </section>
    )
}