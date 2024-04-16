import {items} from "../components/ContactBar";
import Link from "next/link";
import AnimatedText from "@/app/components/animationWrappers/AnimatedText";
import MenuItem from "@/app/components/animationWrappers/MenuItem";

export default function Contact(){
    return <section id="contact" className={"bg-black pb-12 mt-12 w-full flex flex-col px-6 md:px-12 lg:max-w-screen-xl xl:px-0 items-center lg:max-auto lg:items-start lg:mx-auto"}>
        <AnimatedText el="h1" className={"uppercase text-center lg:text-left"} text={"Contact Us"}/>
        <div className={"w-full max-w-[300px] md:max-w-[600px] flex flex-col gap-y-8 mt-8 md:gap-y-12 md:mt-12 lg:max-w-screen-lg"}>
        {items.map((item, index) => (
            <MenuItem item={item} index={index} key={index}/>
        ))}
        </div>

        <footer className={"mx-auto pt-16"}>Design and Code: <Link target={"_blank"} href={"https://github.com/DBryja"} className={"underline text-orange"}>Dawid Bryja</Link></footer>
    </section>
}