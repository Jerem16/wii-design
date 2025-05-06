/* eslint-disable @next/next/no-css-tags */
import type { Metadata } from "next";
import MetaData from "./MetaData.js"
import localFont from "next/font/local";
import "./globals.css";
import "@assets/styles/main.scss"
import NavInterface from "@components/00-Header/NavInterface.jsx"
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
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin=""/>
                <link rel="preload" href="/img/logo1.svg" as="image" type="image/svg+xml" />
                <link rel="preload" href="./deferCss.css" as="style" />
                <link
                    rel="stylesheet"
                    href="./deferCss.css"
                    fetchPriority="low"
                />
            </head>
            <body className={`${Roboto.variable}`} id="top">
                <NavInterface />
                <main>
                    {children}
                </main>
            </body>
        </html>
    );
}
