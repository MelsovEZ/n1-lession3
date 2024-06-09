'use client';
import Link from "next/link";
import React, {useContext} from "react";
import MyContext from "@/app/context/MyContext";

const Navbar: React.FC = () => {
    const username = useContext(MyContext);
    return (
        <nav className="p-4 border-b-2">
            <div className="container mx-auto">
                <Link href='/'>
                    <strong><h1 className="text-2xl">Hello, {username}!</h1></strong>
                </Link>
            </div>
        </nav>
    );
}

export default Navbar;