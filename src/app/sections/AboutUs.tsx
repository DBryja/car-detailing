import Video from "@/app/components/Video";
import AnimatedText from "@/app/components/animationWrappers/AnimatedText";
const paragraphs = [
    {
        title: "EXCEPTUR SINT",
        content: "Occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id es Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium"
    },
    {
        title: "EXCEPTUR SINT",
        content: "Occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id es Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium"
    }
]

export default function AboutUs() {
    return (
        <section id="about-us" className={"relative w-screen overflow-hidden overscroll-x-none md:min-h-[750px]" +
            " before:block before:absolute before:w-full before:top-0 before:inset-x-0 before:h-[15vh] before:bg-gradient-to-b before:from-black before:to-transparent before:z-10" +
        " after:block after:absolute after:w-full after:bottom-0 after:inset-x-0 after:h-[15vh] after:bg-gradient-to-t after:from-black after:to-transparent " +
        " md:min-h-[700px] md:flex md:flex-col md:justify-center"}>
            <div className={"relative z-10 mt-12 w-full h-full flex flex-col px-6 md:px-12 lg:max-w-screen-xl xl:px-0 pb-12 lg:mx-auto"}>
                <AnimatedText text={"About Us"} el={"h1"} once className={"uppercase mb-8 md:text-7xl md:mb-24 lg:text-8xl"}/>
                <div className={"flex flex-col gap-y-8 lg:gap-y-16"}>
                    {paragraphs.map((paragraph, index) => (
                            <div key={index} className={"px-6 border-l-2 border-beige max-w-[700px] md:border-l-4 lg:pl-16 lg:max-w-[1000px]"}>
                                <AnimatedText text={paragraph.title} el={"h2"} className={"md:mb-4 lg:mb-8"} once/>
                                <AnimatedText text={paragraph.content} el={"p"} className={"font-light md:text-2xl lg:text-3xl"} once/>
                            </div>
                    ))}
                </div>
            </div>
            <div className={"absolute inset-x-0 -inset-y-5 w-full pointer-events-none "}>
                <div className={"absolute left-0 top-0 w-full h-full bg-black bg-opacity-80 backdrop-blur-sm"}/>
                <Video src={"/background_vid.webm" }   />
            </div>
        </section>
    )
}