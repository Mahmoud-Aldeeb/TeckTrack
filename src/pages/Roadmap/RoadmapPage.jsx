// src/pages/RoadmapPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import TrackCard from './TrackCard';

const RoadmapPage = () => {
    const tracks = [
        {
            title: "Software Development",
            desc: "This track teaches the foundation of building scalable, maintainable software. You'll explore programming fundamentals, version control, design patterns, testing, debugging, and software architecture. By the end, you'll be able to write clean, efficient code that solves real problems.",
            img: "/src/assets/image/Software.webp",
        },
        {
            title: "Data & AI",
            desc: "This track guides you through the world of data collection, processing, visualization, and machine learning fundamentals. You'll explore data pipelines, Python libraries, predictive models, AI tools, and responsible AI ethics. Ideal for analytical thinkers looking to build intelligent solutions.",
            img: "/src/assets/image/AI.webp",
        },
        {
            title: "Design & UX",
            desc: "This track covers UI design, user research, wireframing, prototyping, usability testing, accessibility, and interaction patterns. Learn how to design solutions that reduce friction and improve user satisfaction across web and mobile.",
            img: "/src/assets/image/Design.webp",
        },
        {
            title: "DevOps & Cloud",
            desc: "This track prepares you to manage the full lifecycle of software delivery. Learn continuous integration, automation, containerization, cloud deployment, monitoring, and incident response. Perfect for developers who want to improve performance, security, and reliability.",
            img: "/src/assets/image/Devops.webp",
        }
    ];

    return (
        <div className="min-h-screen bg-white mt-20">


            {/* Hero Section */}
            <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 text-center max-w-4xl mx-auto">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
                    Your Developer Growth Roadmap
                </h1>
                <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed mb-6 sm:mb-8 px-2">
                    The developer journey can feel overwhelming — so we’ve organized a structured roadmap to help you learn step-by-step. Each phase introduces new concepts, tools, and real-world skills used by companies today. Whether you’re just starting or advancing your career, this roadmap guides you toward confidence and clarity.
                </p>
                <div className="w-2xs md:w-lg h-px bg-black  mx-auto"></div>
            </section>

            {/* Tracks Grid */}
            <section className="px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16">
                <div className="grid 
                lg:w-2/3
                grid-cols-1 
                sm:grid-cols-2 
                lg:grid-cols-2 
                gap-6 sm:gap-8 
                max-w-7xl mx-auto
            ">
                    {tracks.map((track, index) => (
                        <TrackCard
                            key={index}
                            title={track.title}
                            desc={track.desc}
                            img={track.img}
                        />
                    ))}
                </div>
            </section>


        </div>
    );
};

export default RoadmapPage;