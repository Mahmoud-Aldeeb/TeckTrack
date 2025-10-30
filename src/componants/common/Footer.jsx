import React from "react";
import { Linkedin, Github, Twitter } from "lucide-react";
export default function Footer() {
    return (
        <footer className="bg-[var(--color-primary-light)] py-12 w-full text-[--text-color]">
            <div className="container mx-auto flex flex-wrap justify-between gap-8 md:gap-12 lg:gap-16 px-8 max-w-7xl">
                {/* Left Section */}
                <div className="w-full md:w-1/3 lg:w-1/4 mb-8 md:mb-0">
                    <a href="#" className="flex items-center gap-2 mb-6">
                        <img src="/src/assets/logo2.png" alt="Logo" className="w-10 h-12" />
                        <span className="text-[var(--color-secondary)] text-2xl font-bold">
                            TechTrack
                        </span>
                    </a>
                    <p className="text-sm leading-7 mb-6 text-[var(--color-text)] max-w-xs">
                        Empowering learners in Egypt to explore every tech field through
                        clear roadmaps, essential technologies, and company insights.
                    </p>
                    <div className="flex gap-3">
                        <a
                            href="#"
                            className="w-9 h-9 bg-[var(--color-primary)] rounded-full flex items-center justify-center hover:bg-[var(--secondary-color)] transition-transform hover:scale-110"
                        >
                            <Linkedin className="text-[var(--color-white)] w-5 h-5" />
                        </a>
                        <a
                            href="#"
                            className="w-9 h-9 bg-[var(--color-primary)] rounded-full flex items-center justify-center hover:bg-[var(--secondary-color)] transition-transform hover:scale-110"
                        >
                            <Github className="text-[var(--color-white)] w-5 h-5" />
                        </a>
                        <a
                            href="#"
                            className="w-9 h-9 bg-[var(--color-primary)] rounded-full flex items-center justify-center hover:bg-[var(--secondary-color)] transition-transform hover:scale-110"
                        >
                            <Twitter className="text-[var(--color-white)] w-5 h-5" />
                        </a>
                    </div>
                </div>

                {/* Explore */}
                <ul className="w-1/2 sm:w-1/3 md:w-auto list-none mb-8 md:mb-0">
                    <li className="font-bold text-[var(--secondary-color)] mb-5 text-base">Explore</li>
                    <li className="mb-4"><a href="#" className="text-sm hover:text-[var(--color-primary)] text-[var(--color-text)] transition-colors">Home</a></li>
                    <li className="mb-4"><a href="#" className="text-sm hover:text-[var(--color-primary)] text-[var(--color-text)] transition-colors">Roadmaps</a></li>
                    <li className="mb-4"><a href="#" className="text-sm hover:text-[var(--color-primary)] text-[var(--color-text)] transition-colors">Companies</a></li>
                    <li className="mb-4"><a href="#" className="text-sm hover:text-[var(--color-primary)] text-[var(--color-text)] transition-colors">Reviews</a></li>
                </ul>

                {/* TechTrack */}
                <ul className="w-1/2 sm:w-1/3 md:w-auto list-none mb-8 md:mb-0">
                    <li className="font-bold text-[var(--secondary-color)] mb-5 text-base">TechTrack</li>
                    <li className="mb-4"><a href="#" className="text-sm hover:text-[var(--color-primary)] text-[var(--color-text)] transition-colors">About Us</a></li>
                    <li className="mb-4"><a href="#" className="text-sm hover:text-[var(--color-primary)] text-[var(--color-text)] transition-colors">Contact</a></li>
                </ul>

                {/* Legal */}
                <ul className="w-1/2 sm:w-1/3 md:w-auto list-none">
                    <li className="font-bold text-[var(--secondary-color)] mb-5 text-base">Legal</li>
                    <li className="mb-4"><a href="#" className="text-sm hover:text-[var(--color-primary)] text-[var(--color-text)] transition-colors">Privacy Policy</a></li>
                    <li className="mb-4"><a href="#" className="text-sm hover:text-[var(--color-primary)] text-[var(--color-text)] transition-colors">Terms of Service</a></li>
                </ul>
            </div>
        </footer>
    )
}

