import localFont from "next/font/local";

export const isMobile = (width: number) =>{
    return width <= 500;
}

export const hkgrotesk = localFont({
    src: [{path: "../../public/fonts/HankenGrotesk-VariableFont_wght.ttf", weight: "100 900"}],
    variable: "--font-main"
})
export const hkgroteskWide = localFont({
    src: [{path: "../../public/fonts/HKGroteskWide-Black.otf", weight: "900"},
        {path: "../../public/fonts/HKGroteskWide-Bold.otf", weight: "700"},
        {path: "../../public/fonts/HKGroteskWide-Medium.otf", weight: "500"},
        {path: "../../public/fonts/HKGroteskWide-Light.otf", weight: "300"}],
    variable: "--font-heading"
})

export function debounce<F extends (...args: any[]) => any>(func: F, wait: number) {
    let timeout: ReturnType<typeof setTimeout> | null;
    return function executedFunction(...args: Parameters<F>) {
        const later = () => {
            clearTimeout(timeout!);
            func(...args);
        };
        if(timeout) clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

export function isInSight(element: HTMLElement){
    const rect = element.getBoundingClientRect();

    let inSightVertically = (rect.bottom > 0 && rect.top < (window.innerHeight || document.documentElement.clientHeight));
    let inSightHorizontally = (rect.right > 0 && rect.left < (window.innerWidth || document.documentElement.clientWidth));

    return inSightVertically && inSightHorizontally;
}