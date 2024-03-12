import Link from "next/link";
export default function Button({href, children, filled, className, full, ...props}:{href:string, children:React.ReactNode, className?:string, filled?:boolean, full?:boolean, props?:any}){
    const filledClasses = filled ? " bg-beige text-black " : " border-2 border-beige text-beige ";
    const fullClasses = full ? " w-full " : " ";
    return (
        <button {...props} className={className+ " flex justify-center items-center font-bold py-3 px-6 uppercase rounded-[55px] font-heading leading-sm " + filledClasses + fullClasses +
        " md:leading-normal md:text-2xl md:px-12 md:py-6 lg:px-20 lg:text-3xl"}>
            <Link href={href}>
                    {children}
            </Link>
        </button>
    )
}