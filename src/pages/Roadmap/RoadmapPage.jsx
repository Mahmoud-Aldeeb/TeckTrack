
import React from 'react';
import TrackCard from '../Roadmap/TrackCard';
import { Helmet } from "react-helmet";
import { useEffect, useState } from 'react';
import axios from 'axios';
import Loader from '../../componants/ui/Loader';
import ErrorMessage from '../../componants/ui/Error';



const RoadmapPage = () => {
    const [tracks, setTracks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const imagesMap = {
        "Software Development": "/src/assets/image/Software.webp",
        "DevOps & Infrastructure": "/src/assets/image/Devops.webp",
        "Data & AI": "/src/assets/image/AI.webp",
        "Design & User Experience": "/src/assets/image/Design.webp",
    };
    useEffect(() => {
        const fetchTracks = async () => {
            try {
                setLoading(true);
                const response = await axios.get('http://techtrack.runasp.net/api/Category');
                const formattedTracks = response.data.map(item => ({
                    id: item.categoryId,
                    title: item.categoryName,
                    desc: item.description,
                    img: imagesMap[item.categoryName] || "/src/assets/image/software.webp"
                }));

                setTracks(formattedTracks);


                // const filteredData = response.data.slice(0, -1);

                // const formattedTracks = filteredData.map(item => ({
                //     id: item.categoryId,
                //     title: item.categoryName,
                //     desc: item.description,
                //     img: imagesMap[item.categoryName] || "/src/assets/image/software.webp"
                // }));

                // setTracks(formattedTracks);
                setLoading(false);
            } catch (err) {
                console.error("Error fetching tracks:", err);
                setError("Failed to load tracks. Please try again later.");
                setLoading(false);
            }
        };

        fetchTracks();
    }, []);
    console.log(tracks);
    if (error) {
        return <ErrorMessage message={error} />;
    }


    if (loading) {
        return <Loader />;
    }



    return (
        <>

            <Helmet>
                <title>Tracks - TechTrack</title>
                <meta
                    name="description"
                    content="Discover the roadmap to learning every specialization in programming and technology."
                />
            </Helmet>
            <div className="min-h-screen bg-white pt-16 sm:pt-20 flex flex-col items-center">


                <section className="w-full max-w-4xl px-4 sm:px-6 lg:px-8 py-10 sm:py-12 lg:py-16 text-center">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-5 lg:mb-6 leading-tight">
                        Your Developer Growth Roadmap
                    </h1>
                    <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed mb-6 sm:mb-8 max-w-3xl mx-auto">
                        The developer journey can feel overwhelming — so we’ve organized a structured roadmap to help you learn step-by-step. Each phase introduces new concepts, tools, and real-world skills used by companies today. Whether you’re just starting or advancing your career, this roadmap guides you toward confidence and clarity.
                    </p>
                    <div className="w-2xs md:w-lg h-px bg-black  mx-auto"></div>
                </section>


                <section className="w-full max-w-6xl px-4 sm:px-6 lg:px-8 pb-16 sm:pb-20">
                    <div className="
                        grid 
                        grid-cols-1 
                        sm:grid-cols-2 
                        lg:grid-cols-2 
                        xl:grid-cols-2
                        gap-6 
                        sm:gap-8 
                        lg:gap-10
                        place-items-center
                        w-full
                    ">
                        {tracks.map((track, index) => (
                            <div
                                key={index || track.categoryId}
                                className="
                                    w-full
                                    max-w-xs
                                    sm:max-w-sm
                                    md:max-w-md
                                    lg:max-w-lg
                                    xl:max-w-xl
                                    col-span-1
                                "
                            >
                                <TrackCard
                                    title={track.title}
                                    desc={track.desc}
                                    img={track.img}
                                />
                            </div>
                        ))}
                    </div>
                </section>

            </div>
        </>
    );
};

export default RoadmapPage;