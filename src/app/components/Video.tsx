"use client";
import {isInSight} from "@/utils";
import {useRef, useState, useEffect} from "react";

export default function Video({src}:{src:string}) {
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        function handleScroll(){
            const vid = videoRef.current!;
            isInSight(vid) ? vid.play() : vid.pause();
        }
        document.addEventListener("scroll", handleScroll);
            return () => {
                document.removeEventListener("scroll", handleScroll);
            }
    }, []);

    return (
        <video className={" w-full h-full object-cover"} loop muted preload={"auto"} ref={videoRef}>
            <source src={src}/>
        </video>
    )
}