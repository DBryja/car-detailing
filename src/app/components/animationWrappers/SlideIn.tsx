"use client"
import {motion, useInView} from "framer-motion";
import React, {useRef} from "react";

const defaultAnimations = {
    hidden: {
        opacity: 0,
        x: "-10%",
    },
    visible: {
        opacity: 2,
        x: "0%",
    }
}

export default function SlideIn({children, once, delay} : {children: React.ReactElement, once?:boolean, delay?: number}) {
    const ref = useRef<HTMLElement>(null);
    const isInView = useInView(ref, {once: once, amount: 0.5});


    return <motion.span aria-hidden
                        initial={"hidden"}
                        animate={isInView ? "visible" : "hidden"}
                        variants={defaultAnimations}
                        className={"block"}
                        ref={ref}
                        transition={{
                            delay
                        }}>
            {children}
    </motion.span>
}