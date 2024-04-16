"use client";
import React, { useState} from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import type {Swiper as SwiperType} from "swiper";
import {EffectCoverflow, Pagination} from "swiper/modules";
import Image from "next/image";
import {debounce} from "@/utils"
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import {motion} from "framer-motion";
import AnimatedText from "@/app/components/animationWrappers/AnimatedText";

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


const slidesPerView = () => {
    if(typeof window !== "undefined"){
        const width = window.innerWidth;
        if(width < 700) return 1.5;
        else if(width <= 1024) return 2;
        else return 3;
    }
}


const contents = [
    {
        desc: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id es Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatu",
        title: "Ceramic Coating",
        name: "John S.",
        img: {
            src: "/slides/slide1.webp",
            alt: "audi tt",
        }
    },
    {
        desc: "Occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id es Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium",
        title: "Paint Protection",
        name: "Paul G.",
        img: {
            src: "/slides/slide2.webp",
            alt: "mazda",
        }
    },
    {
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        title: "Paint Correction",
        name: "Alice B.",
        img: {
            src: "/slides/slide3.webp",
            alt: "alpine",
        }
    },
    {
        desc: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        title: "Car Detailing",
        name: "Bob C.",
        img: {
            src: "/slides/slide4.webp",
            alt: "range rover",
        }
    },
    {
        desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        title: "Waxing & Polishing",
        name: "Charlie D.",
        img: {
            src: "/slides/slide5.webp",
            alt: "porshe",
        }
    }
]

export default function OurWork(){
    const [currentSlide, setCurrentSlide] = useState(0);

    return (
    <section id={"our-work"} className={"w-full bg-black flex flex-col  items-center justify-between max-w-screen-xl lg:mx-auto"}>
        <div className={"flex flex-col w-full px-6 min-h-52 md:min-h-60 lg:flex-row"}>
            <div className={"lg:flex-shrink-0 lg:pr-24"}>
                <AnimatedText text={"OUR WORK"} el={"h1"} once/>
                <motion.span aria-hidden
                             initial={"hidden"}
                             animate={"visible"}
                             variants={defaultAnimations}
                             className={"block"}
                             key={currentSlide}
                            >
                    <h4 className={"text-right font-heading font-light leading-tight md:text-3xl lg:text-left"}>{contents[currentSlide].title}</h4>
                    <h4 className={"text-right font-heading font-bold leading-tight md:text-3xl lg:text-left"}>for {contents[currentSlide].name}</h4>
                </motion.span>
            </div>
            <AnimatedText text={`“${contents[currentSlide].desc}”`} key={currentSlide} el={"p"} once className={"text-sm md:text-lg md:pr-28 lg:pr-0 "}/>
        </div>
        <Swiper
            effect={"coverflow"}
            grabCursor={true}
            onSlideChange={debounce((swiper: SwiperType) => setCurrentSlide(swiper.realIndex), 100)}
            centeredSlides={true}
            slidesPerView={slidesPerView()}
            coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 300,
                modifier: 1,
            }}
            loop={true}
            pagination={{clickable: true}}
            modules={[EffectCoverflow, Pagination]}
            className={"w-full self-end max-w-screen-xl  h-[50vh] overflow-hidden " + " after:right-0 after:bg-gradient-to-l after:from-black after:to-transparent " + " before:left-0 before:bg-gradient-to-r before:from-black before:to-transparent "}
            style={{
            //@ts-ignore
                "--swiper-pagination-color": "#FF6D1F",
                "--swiper-pagination-bullet-inactive-color": "#FF6D1F",
                "--swiper-pagination-bullet-inactive-opacity": "0.3",
                "--swiper-pagination-bullet-size": "1rem",
                "--swiper-pagination-bullet-horizontal-gap": "8px",
                "--swiper-pagination-bullet-border-radius": "4px",
            }}
        >
            {contents.map((content, i) => (
                <SwiperSlide key={i} className={"flex items-center justify-center"} onClick={(e)=>console.log(e.currentTarget.dataset.swiperSlideIndex, e.currentTarget)}>
                    <Image src={content.img.src} alt={content.img.alt} className={"rounded-[25px] object-cover"} fill sizes={"(max-width: 500px) 350px, (max-width: 1000px) 400px, 600px"}/>
                </SwiperSlide>
            ))}
        </Swiper>
    </section>)
}