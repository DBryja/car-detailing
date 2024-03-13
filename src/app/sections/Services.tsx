import Button from "@/app/components/Button";
import Image from "next/image";
import {ReactNode} from "react";
import Link from "next/link";

interface Card {
    title: string;
    img: {
        src: string;
        alt: string;
    };
    description: string;
}
const cards: Card[] = [
    {
        title: "LOREM IPSUM",
        img: {
            src: "/img1.jpg",
            alt: "car in garage"
        },
        description: "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatu Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatu."
    },
    {
        title: "LOREM IPSUM",
        img: {
            src: "/img2.jpg",
            alt: "polishing"
        },
        description: "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatu Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatu."
    },
    {
        title: "LOREM IPSUM",
        img: {
            src: "/img3.jpg",
            alt: "car interior"
        },
        description: "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatu Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatu."
    },
]

export default function Services(){
    return (
        <section className={"w-screen h-full overflow-x-hidden overscroll-x-none flex flex-col items-center min-h-screen bg-black px-6 md:px-12 lg:flex-row lg:items-start lg:max-w-screen-xl lg:mx-auto lg:justify-between lg:gap-x-40 xl:px-0"}>
            <div className={"flex flex-col gap-y-4"}>
                <h2 className={"uppercase tracking-widest text-center lg:text-left"}>Services</h2>
                <p className={"text-center font-[200] md:text-2xl md:px-12 md:mb-12 lg:text-left lg:px-0"}>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id es</p>
                <Button href={"#"} full>CONTACT</Button>
            </div>
            <div className={"flex flex-col mt-12 gap-y-12 md:gap-y-24 lg:mt-0"}>
            {cards.map((card, index) => (<ServiceCard key={index} card={card} />))}
            </div>
        </section>
    )
}

function ServiceCard({card}: {card: Card}){
    return (
        <div className={"flex flex-col w-full md:grid md:grid-rows-1 md:grid-cols-[2fr_3fr] md:gap-x-8"}>
            <div className={"w-full aspect-[2/1] md:aspect-[3/5] relative overflow-hidden"}>
                <Image src={card.img.src} alt={card.img.alt} fill className="object-cover" quality={100} sizes={"(max-width: 500px) 100vw, (max-width: 1000px) 50vw, 33vw"}/>
            </div>
            <div className={"flex flex-col"}>
                <h3 className={"text-right uppercase mt-2 md:text-left"}>{card.title}</h3>
                <p className={"font-thin md:text-2xl md:mt-12"}>{card.description}</p>
                <Link className={"relative font-heading md:text-2xl md:mt-auto hover-orange"
                    // " before:block before:w-1/2 before:scale-x-[0.3] before:origin-left  before:h-0.5 before:bg-orange before:absolute before:left-0 before:bottom-0 " +
                } href={`/services/${card.title.toLowerCase().replace(" ", "-")}`}>View details</Link>
            </div>
        </div>
    )
}