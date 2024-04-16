import Link from "next/link";
export default function Button({href, children, filled, className, full, ...props}:{ href: string, children:React.ReactNode, className?:string, filled?:boolean, full?:boolean, props?:any}){
    const filledClasses = filled ? "filled bg-beige text-black md:!py-6 " : " border-2 border-beige text-beige ";
    const fullClasses = full ? " w-full " : " ";
    return (
        <a href={href}>
            <button {...props}
                    className={className + "flex justify-center items-center font-bold py-3 px-6 uppercase rounded-[55px] font-heading leading-sm cursor-pointer " +
                        " md:leading-normal md:text-2xl md:px-12 md:py-4 lg:px-20 lg:text-3x " + filledClasses + fullClasses
                    }>
                {children}
            </button>
        </a>
)
}