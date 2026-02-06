/* eslint-disable @next/next/no-css-tags */
import type { Metadata } from "next";
import MetaData from "./MetaData.js"
import localFont from "next/font/local";
import "./globals.css";
import "@assets/styles/main.scss"
import NavInterface from "@components/00-Header/NavInterface.jsx"
import { SearchProvider } from "@/features/desktop-nav/vendor/adaptable/utils/context/SearchContext";
const Roboto = localFont({
    src: "/fonts/Roboto.woff2",
    variable: "--Roboto",
    weight: "100 900",
    display: "swap", 
});
export const metadata : Metadata  = MetaData ;

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="fr">
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    crossOrigin=""
                />
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/css2?family=Carlito:wght@400;700&family=Roboto:wght@400;500;700&display=swap"
                />
                <link
                    rel="preload"
                    href="/img/logo1.svg"
                    as="image"
                    type="image/svg+xml"
                />
                <link rel="preload" href="/deferCss.css" as="style" />
                <link rel="preload" href="/desktopDeferNav.css" as="style" media="(min-width: 1024px)" />
                <link
                    rel="stylesheet"
                    href="/deferCss.css"
                    fetchPriority="low"
                />
                <link
                    rel="stylesheet"
                    href="/desktopDeferNav.css"
                    media="(min-width: 1024px)"
                    fetchPriority="low"
                />
                {/* <script
                    type="application/json"
                    id="lazy-icon-data"
                    src="/assets/iconsPaths.json"
                    defer
                    fetchPriority="low"
                ></script> */}
            </head>
            <body className={`${Roboto.variable}`} >
                <SearchProvider>
                    <NavInterface />

                    <main>
                        <div className="fixed-menu" id="top"></div>
                        {children}
                    </main>
                </SearchProvider>
            </body>
        </html>
    );
}
