import type {Metadata} from "next";
import {Inter} from "next/font/google";
import React from "react";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "Blog Post App",
    description: "Coded by Melsov Yernur",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body className={inter.className}>
        <Navbar/>
        {children}
        <Footer/>
        </body>
        </html>
    );
}
