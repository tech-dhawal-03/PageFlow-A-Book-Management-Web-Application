"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { cn } from "@/lib/utils";

const Header = () => {
    const pathname = usePathname();

    return (
        <header className="text-white mt-10 flex justify-between gap-5 ">
            <Link
                href="/"
            //TO-DO:1 - Add logo here
            >
                PageFlow
            </Link>

            <ul className="flex flex-row gap-8 items-center">
                <li>
                    <Link 
                     href="/" 
                     className={cn("text-base cursor-pointer capitalize", pathname==='/' ? "text-light-200" : "text-light-100")}>
                        Home
                    </Link>
                </li>

                <li>
                    <Link href="/about">About</Link>
                </li>
            </ul>
        </header>
    );
};

export default Header;
