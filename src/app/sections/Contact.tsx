import Items, {items} from "../components/ContactBar";

export default function Contact(){
    return <section className={"bg-black pb-12 mt-12 w-full flex flex-col px-6 md:px-12 lg:max-w-screen-xl xl:px-0 items-center lg:max-auto lg:items-start lg:mx-auto"}>
        <h1 className={"uppercase text-center lg:text-left"}>Contact Us</h1>
        <div className={"w-full max-w-[300px] md:max-w-[600px] flex flex-col gap-y-8 mt-8 md:gap-y-12 md:mt-12 lg:max-w-screen-lg"}>
        {items.map((item, index) => (
            <div key={index} className={`flex gap-x-4 items-center justify-between md:py-3 lg:justify-start lg:max-w-fit lg:px-0 lg:mx-0 w-full`}>
                <span className={"text-2xl md:text-5xl lg:text-6xl lg:mr-8"}>{item.icon}</span>
                <span className={"whitespace-nowrap text-lg md:text-3xl lg:text-4xl"}>{item.text}</span>
            </div>
        ))}
        </div>
    </section>
}