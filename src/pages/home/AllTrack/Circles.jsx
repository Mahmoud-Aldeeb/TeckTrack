import React from 'react';
import {
    FiSettings,
    FiDatabase,
    FiSmartphone,
} from 'react-icons/fi';
import { FaReact } from "react-icons/fa";
import { LuPalette } from "react-icons/lu";
import { LuBrainCircuit } from "react-icons/lu";
import { motion } from "framer-motion"; 


const tracks = [
    { name: 'DevOps', icon: <FiSettings className="w-10 h-10" /> },
    { name: 'UI/UX', icon: <LuPalette className="w-10 h-10" /> },
    { name: 'Frontend', icon: <FaReact className="w-10 h-10" /> },
    { name: 'Backend', icon: <FiDatabase className="w-10 h-10" /> },
    { name: 'Mobile Dev', icon: <FiSmartphone className="w-10 h-10" /> },
    { name: 'Data Science', icon: <LuBrainCircuit className="w-10 h-10" /> },
];

const Circles = () => {
    return (
        <div className="w-full md:w-1/2  flex items-center justify-center py-16  duration-300">
            
            <div className="absolute flex items-center justify-center">
                <div className="w-96 h-96 rounded-full  bg-primary-light"></div>
            </div>
            <motion.div
                className="relative w-full h-full"
                initial={{ rotate: 0 }}
                animate={{ rotate: 360 }}
                whileInView={{ scale: 1.1 }}

                transition={{
                    duration: 1,
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatDelay: 2,
                    repeatType: "reverse",

                }}
                style={{ transformOrigin: 'center' }}
            >
                {tracks.map((track, index) => {
                    const angle = (index * 60) - 90;
                    const radius = 180;
                    const x = radius * Math.cos(angle * Math.PI / 180);
                    const y = radius * Math.sin(angle * Math.PI / 180);

                    return (

                        <div
                            key={track.name}
                            className="absolute w-32 h-32 bg-white rounded-full shadow-lg border-2 border-primary flex flex-col items-center justify-center text-center transform transition-all"
                            style={{
                                transform: `translate(${x}px, ${y}px)`,
                                top: '50%',
                                left: '50%',
                                marginTop: '-64px',
                                marginLeft: '-64px',
                            }}
                        >
                            <motion.div
                                className="flex flex-col items-center"
                                initial={{ rotate: 0 }}
                                animate={{ rotate: 360 }}
                                whileInView={{ scale: 1.1 }}
                                transition={{
                                    duration: 1,
                                    repeat: Infinity,
                                    repeatDelay: 2,
                                    repeatType: "reverse",

                                }}
                                style={{ transformOrigin: 'center' }}
                            >
                                <div className="text-primary mb-2 ">
                                    {track.icon}
                                </div>
                                <p className="text-sm font-semibold text-secondary">
                                    {track.name}
                                </p>
                            </motion.div>
                        </div>
                    );
                })}



                <div className="relative  z-10 flex flex-col items-center">
                    <img
                        src="src/assets/image/logo2.png"
                        alt="TechTrack Logo"
                        className="w-15 h-15 mb-3"
                    />
                    <h2 className="text-2xl font-bold text-secondary tracking-tight">
                        TechTrack
                    </h2>
                </div>
            </motion.div>

        </div>
    );
};

export default Circles;