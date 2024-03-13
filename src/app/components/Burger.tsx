"use client";
import {useState, useRef, useEffect} from "react";
import {FaWrench, FaCamera} from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";

export default function Burger() {
    const [open, setOpen] = useState(false);
    const navRef = useRef<HTMLDivElement>(null);
    const buttonRef = useRef<HTMLButtonElement>(null);
    useEffect(() => {
        document.body.addEventListener("click", (e) => {
            if (navRef.current && !navRef.current.contains(e.target as Node) && buttonRef.current && !buttonRef.current.contains(e.target as Node)) {
                setOpen(false);
            }
        });
    }, []);

    return (
        <>
        <button ref={buttonRef} className="max-sm:block md:hidden relative group z-20" onClick={() => setOpen((open)=>!open)}>
            <div
                className={"flex flex-col justify-between w-[25px] h-[25px] transform transition-all duration-300 origin-center overflow-hidden"}>
                <div
                    className={`bg-beige h-[2px] w-8 transform transition-all duration-300 origin-left ${open && "translate-x-10"} `}/>
                <div
                    className={`bg-beige h-[2px] w-8 rounded transform transition-all duration-300 ${open && "translate-x-10"}  delay-75`}/>
                <div
                    className={`bg-beige h-[2px] w-8 transform transition-all duration-300 origin-left ${open && "translate-x-10"}  delay-150`}/>
                <div className={`absolute items-center justify-between transform transition-all duration-500 top-2.5 -translate-x-10 ${open && "translate-x-0"} flex w-0 ${open && "w-12"}`}>
                    <div
                        className={`absolute bg-beige h-[2px] w-7 rotate-0 transform transition-all duration-500 ${open && "rotate-45"}  delay-300`}/>
                    <div
                        className={`bg-beige h-[2px] w-7 -rotate-0 transform transition-all duration-500 ${open && "-rotate-45"}  delay-300`}/>
                </div>
            </div>
        </button>
            <nav ref={navRef} className={`max-sm:flex md:hidden absolute z-10 right-0 top-0 h-screen ${open && "translate-x-0 shadow-lg drop-shadow-xl" || "translate-x-full"} flex-col px-8 py-12 w-3/4 transform transition-transform overflow-x-hidden text-2xl  text-right gap-y-8 bg-[rgba(0,0,0,0.5)] backdrop-blur-2xl`}>
                <span className={"flex justify-end items-center gap-x-2 mt-4"}>Services<FaWrench/></span>
                <span className={"flex justify-end items-center gap-x-2"}>Demos<FaCamera/></span>
                <span className={"flex justify-end items-center gap-x-2"}>About Us<FaPeopleGroup/></span>
            </nav>
        </>
    )
}
