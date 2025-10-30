import React, { useState } from "react";
import { Link } from "react-router-dom";
export default function Nav() {

    const [active, setActive] = useState("Home"); // default active link

    const links = [{name:"Home",path:"/"},
        {name:"Roadmap",path:"/roadmap"} ,
        {name:"Companies",path:"/companies" },
        {name:"Reviews",path:"/reviews"}];

    return (
        <nav className="bg-[var(--color-white)] shadow-sm">
            <div className="container mx-auto flex flex-wrap items-center justify-between py-3 px-6">
                {/* Brand */}
                <a href="#" className="flex items-center gap-2">
                    <img src="src/assets/logo1.png" alt="Logo" className="w-11 h-12" />
                    <span className="text-[var(--color-secondary)] text-2xl font-bold">
                        TechTrack
                    </span>
                </a>

                {/* Toggler for small screens */}
                <button
                    className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100"
                    data-collapse-toggle="navbar-default"
                    aria-controls="navbar-default"
                    aria-expanded="false"
                >
                    <svg
                        className="w-6 h-6"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 17 14"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M1 1h15M1 7h15M1 13h15"
                        />
                    </svg>
                </button>

                {/* Links */}
                <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                    <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white text-[--color-text]">
                        {links.map((link, index) => (
                            <li key={index}>
                                <Link
                                   to={link.path}
                                    onClick={() => setActive(link.name)}
                                    className={`block py-2 px-3 hover:text-[var(--color-primary)] hover:underline
                                         ${ location.pathname === link.path? "text-[var(--color-primary)] underline" : ""
                                        }`}
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Button */}
                <button className="bg-[var(--color-primary)] text-[var(--color-white)] font-medium text-lg w-40 h-12 rounded-full hover:bg-[var(--color-secondary)] transition-all">
                    Sign Up
                </button>
            </div>
        </nav>
    );
}

