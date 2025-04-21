/* eslint-disable @next/next/no-css-tags */
import type { Metadata } from "next";
import MetaData from "./MetaData.js"

import "./globals.css";
import "@assets/styles/main.scss"
import NavInterface from "@components/00-Header/NavInterface.jsx"

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
                <link rel="preload" href="./deferCss.css" as="style" />
                <link
                    rel="stylesheet"
                    href="./deferCss.css"
                    fetchPriority="low"
                />
            </head>
            <body id="top">
                <NavInterface />
                <main>
                    {children}
                </main>
            </body>
        </html>
    );
}
