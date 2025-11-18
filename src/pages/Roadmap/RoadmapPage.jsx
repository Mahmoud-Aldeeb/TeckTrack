import React from "react";
import TrackCard from "../Roadmap/TrackCard";
import Loader from "../../componants/ui/Loader";
import ErrorMessage from "../../componants/ui/Error";

import { useApi } from "../../context/ApiContext";


const RoadmapPage = () => {


  const { categories, loading, error } = useApi();
  const tracks = categories
    .map(item => ({
      categoryId: item.categoryId,
      title: item.categoryName,
      desc: item.description,
      img: item.imageUrl || '/src/assets/image/software.webp',
    }))
    .reverse();

  if (error) {
    return <ErrorMessage message={error} />;
  }
  if (loading) {
    return <Loader />;
  }



  return (
    <>

      {/* ==================== React 19 Native Metadata (ثابتة + قوية) ==================== */}
      <title>Developer Roadmap 2025 - Step by Step Learning Path | TeckTrack</title>
      <meta
        name="description"
        content="Free structured developer roadmap for 2025. Learn Web Development, Mobile, Data Science, DevOps, Cybersecurity and more – step by step with real company skills."
      />
      <link rel="canonical" href="https://teck-track.vercel.app/roadmap" />

      {/* Open Graph / Facebook */}
      <meta property="og:title" content="Developer Roadmap 2025 - From Zero to Pro | TeckTrack" />
      <meta property="og:description" content="The complete step-by-step learning path used by top tech companies. Choose your track and start growing today!" />
      <meta property="og:image" content="https://teck-track.vercel.app/og-companies.jpg" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:url" content="https://teck-track.vercel.app/roadmap" />
      <meta property="og:type" content="website" />

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "name": "Developer Learning Roadmaps 2025",
            "description": "Structured learning paths for different tech careers: Web Development, Mobile, Data Science, DevOps, and more.",
            "url": "https://teck-track.vercel.app/roadmap",
            "numberOfItems": tracks.length,
            "itemListElement": tracks.map((track, index) => ({
              "@type": "ListItem",
              "position": index + 1,
              "item": {
                "@type": "LearningResource",
                "name": track.title,
                "description": track.desc || `Learning path for ${track.title}`,
                "url": `https://teck-track.vercel.app/roadmap/${track.categoryId}`,
                "educationalLevel": "Beginner to Advanced",
              }
            }))
          })
        }}
      />


      <div className="min-h-screen bg-white pt-16 sm:pt-20 flex flex-col items-center">


        <section className="w-full max-w-4xl px-4 sm:px-6 lg:px-8 my-10 sm:my-12 lg:my-15 text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-5 lg:mb-6 leading-tight">
            Your Developer Growth Roadmap
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed mb-6 sm:mb-8 max-w-3xl mx-auto h-24">
            The developer journey can feel overwhelming — so we’ve organized a structured roadmap to help you learn step-by-step. Each phase introduces new concepts, tools, and real-world skills used by companies today. Whether you’re just starting or advancing your career, this roadmap guides you toward confidence and clarity.
          </p>
          <div className="w-2xs md:w-lg h-px bg-black  mx-auto"></div>
        </section>


        <section className="w-full  px-4 sm:px-6 lg:px-8  pb-16 sm:pb-20">
          <div className="
                        grid 
                        grid-cols-1 
                        sm:grid-cols-2 
                        lg:grid-cols-2 
                        xl:grid-cols-2
                        xl:w-10/12
                        mx-auto
                        gap-6 
                        sm:gap-8 
                        lg:gap-10
                        xl:gap-12
                        place-items-center
                        w-full

                    ">
            {tracks.map((track) => (
              <div
                key={track.categoryId}

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
                  categoryId={track.categoryId}
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



