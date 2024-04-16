"use client"
import {motion, useInView} from "framer-motion";
import type {Item} from "@/app/components/ContactBar";
import {useRef} from "react";

const defaultAnimations = {
    hidden: {
        opacity: 0,
        y: "50%",
        rotate: "5deg",
    },
    visible: {
        opacity: 2,
        y: "0%",
        rotate: "0deg",
    }
}

export default function MenuItem({item, index}: {item: Item, index: number | string}) {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, {amount: 0.8});

    return <motion.div key={index} ref={ref} initial={"hidden"} animate={isInView ? "visible" : "hidden"}
         className={`flex gap-x-4 items-center justify-between md:py-3 lg:justify-start lg:max-w-fit lg:px-0 lg:mx-0 w-full`}>
        <motion.span className={"text-2xl md:text-5xl lg:text-6xl lg:mr-8"} variants={defaultAnimations}>{item.icon}</motion.span>
        <motion.span className={"whitespace-nowrap text-lg md:text-3xl lg:text-4xl"} variants={defaultAnimations}>{item.text}</motion.span>
    </motion.div>
}