import {FiMapPin, FiPhone, } from "react-icons/fi";
import {FaRegEnvelope, FaRegClock} from "react-icons/fa6";

export const items = [
    {
        icon: <FiMapPin/>,
        text: "196 Charlotte, Nc 92143"
    },
    {
        icon: <FiPhone/>,
        text: "(704) 555-5555"
    },
    {
        icon: <FaRegEnvelope/>,
        text: "CarDetailing@email.com"
    },
    {
        icon: <FaRegClock/>,
        text: "Open: Mon-Fri 8am-5pm",
    }
]

export default function ContactBar(){
    return (
        <>
        <div className={"pb-2 mt-16 flex flex-col w-full gap-y-4 font-light backdrop-blur-sm " +
            "md:grid md:mt-32 md:text-2xl md:grid-cols-[5fr_4fr] md:grid-rows-2  " +
            "lg:flex lg:flex-row lg:justify-between lg:items-center lg:gap-y-0 lg:text-2xl lg:mt-32 lg:px-0 lg:w-full lg:mx-auto lg:no-wrap"
        }>
            {items.map((item, index) => (
                <div key={index} className={`flex gap-x-4 items-center max-sm:justify-between w-full md:justify-start md:py-3 lg:justify-start lg:max-w-fit lg:px-0 lg:mx-0`}>
                    {item.icon}
                    <span>{item.text}</span>
                </div>
            ))}
        </div>
            <span className={"mt-4 w-full h-0.5 bg-beige opacity-50 block"} />
        </>
    )
}