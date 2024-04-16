"use client"
import {motion, useInView} from "framer-motion";
import React, {useRef} from "react";
import classNames from "classnames";

type AnimatedTextProps = {
    text: string;
    el?: React.ElementType
    className?: string;
    once?: boolean;
    delay?: number;
}
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

const AnimatedText = ({text, className, delay, once=true,el: Wrapper ="p",} : AnimatedTextProps) => {
    const ref = useRef<HTMLElement>(null);
    const isInView = useInView(ref, {once: once, amount: 0.8});

    const classes = classNames("block overflow-hidden ", className);
    const splitText = text.split(" ");

    return <Wrapper>
        <motion.span aria-hidden initial={"hidden"} animate={isInView ? "visible" : "hidden"} className={classes}  ref={ref}>
            {splitText.map((char, index) => {
                    return <motion.span key={index} className="inline-block"  variants={defaultAnimations} transition={{delay: delay ? delay + index * 0.01 : index * 0.01}}>
                        {char + "\xa0"}
                    </motion.span>
                }
            )}
        </motion.span>
    </Wrapper>
}

export default AnimatedText;