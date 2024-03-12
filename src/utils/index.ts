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