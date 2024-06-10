'use client';
import Link from "next/link";
import React, {useContext} from "react";
import MyContext from "@/app/context/MyContext";
import ThemeButton from "@/app/components/ThemeButton";
import {ThemeProvider} from "@/app/context/ThemeContext";
import "../globals.css";

const Navbar: React.FC = () => {
    const username = useContext(MyContext);
    return (
        <ThemeProvider>
            <nav className="p-4 border-b-2">
                <div className="container mx-auto flex justify-between items-center">
                    <Link href='/'>
                        <strong><h1 className="text-2xl">Hello, {username}!</h1></strong>
                    </Link>
                    <ThemeButton/>
                </div>
            </nav>

        </ThemeProvider>
    );
}

export default Navbar;