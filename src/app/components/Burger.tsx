"use client";
import {useState, useRef, useEffect} from "react";
import {FaWrench, FaCamera} from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";

export default function Burger() {
    const [open, setOpen] = useState(false);
    const navRef = useRef<HTMLDivElement>(null);
    const buttonRef = useRef<HTMLDivElement>(null);

    const closeMenu = (e: MouseEvent) => {
        if (navRef.current && !navRef.current.contains(e.target as Node) && buttonRef.current && !buttonRef.current.contains(e.target as Node)) {
            setOpen(false);
        }}

    useEffect(() => {
        document.body.addEventListener("click",  closeMenu);
        return () => {
            document.body.removeEventListener("click", closeMenu);
        }
    }, []);

    return (
        <>
        <div ref={buttonRef} className="max-sm:block md:hidden relative group z-20 bg-none " onClick={() => setOpen((open)=>!open)}>
            <div
                className={"flex flex-col justify-between w-[25px] h-[25px] transform transition-all duration-200 origin-center overflow-hidden"}>
                <div
                    className={`bg-beige h-[2px] w-8 transform transition-all duration-200 origin-left ${open && "translate-x-10"} `}/>
                <div
                    className={`bg-beige h-[2px] w-8 transform transition-all duration-200 ${open && "translate-x-10"}  delay-50`}/>
                <div
                    className={`bg-beige h-[2px] w-8 transform transition-all duration-300 origin-left ${open && "translate-x-10"}  delay-100`}/>
                <div className={`absolute items-center justify-between transform transition-all duration-500 top-2.5 -translate-x-10 ${open && "translate-x-0"} flex w-0 ${open && "w-12"}`}>
                    <div
                        className={`absolute bg-beige h-[2px] w-7 rotate-0 transform transition-all duration-500 ${open && "rotate-45"}  delay-200`}/>
                    <div
                        className={`bg-beige h-[2px] w-7 -rotate-0 transform transition-all duration-500 ${open && "-rotate-45"}  delay-200`}/>
                </div>
            </div>
        </div>
            <nav ref={navRef} className={`max-sm:flex md:hidden absolute z-10 right-0 top-0 h-min rounded-b-3xl w-full ${open && "translate-y-0 shadow-lg drop-shadow-xl" || "-translate-y-full"} flex-col px-8 py-12 w-3/4 transform transition-transform duration-300 overflow-x-hidden text-3xl  text-right gap-y-8 bg-black`}>
                <a href="#services" onClick={()=>setOpen(false)} className={"flex hover-orange justify-between items-center gap-x-2 mt-4"}>Services<FaWrench/></a>
                <a href="#our-work" onClick={()=>setOpen(false)} className={"flex hover-orange justify-between items-center gap-x-2"}>Our Work<FaCamera/></a>
                <a href="#about-us" onClick={()=>setOpen(false)} className={"flex hover-orange justify-between items-center gap-x-2"}>About Us<FaPeopleGroup/></a>
            </nav>
        </>
    )
}
