import Burger from "@/app/components/Burger";
import Link from "next/link";
export default function Header(){
    return (
        <header className={"fixed top-0 left-1/2 -translate-x-1/2 z-50 w-full   bg-[rgba(0,0,0,0.2)] backdrop-blur-sm "}>
            <div className={"w-full  flex flex-row max-w-screen-xl justify-between font-main font-bold px-6 py-4 md:px-8 md:py-8 lg:mx-auto lg:px-16 2xl:px-0"}>
                <Link href={"/"}><h3 className={"font-heading font-bold text-beige text-2xl md:text-3xl lg:text-5xl cursor-pointer hover:text-orange hover:translate-y-2  transition-all"}>Car Detailing</h3></Link>
            <Burger/>
            <nav className={"hidden md:flex md:text-2xl text-beige flex-row min-w-1/2 justify-end gap-x-20 font-light lg:text-3xl md:flex-shrink-0"}>
                <a href="#services" className={"hover-underline-animation"}>Services</a>
                <a  href="#our-work" className={"hover-underline-animation"}>Our Work</a>
                <a  href="#about-us" className={"hover-underline-animation"}>About Us</a>
            </nav>
            </div>
        </header>
    )
}
