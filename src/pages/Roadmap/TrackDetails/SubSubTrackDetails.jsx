import React, { useState } from "react";
import { useParams } from "react-router-dom";

export default function SubSubTrackDetails() {
  const { slug, subSlug, subSubSlug } = useParams();
  const [isOpen, setIsOpen] = useState(false);

  const openVideo = (e) => {
    e.preventDefault();
    setIsOpen(true);
  };

  const closeVideo = () => setIsOpen(false);

  const title = subSubSlug?.replace(/-/g, " ") || "Topic";

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-light to-white text-text flex flex-col">
      {/* === MAIN CONTENT === */}
      <main className="flex-1 container mx-auto px-6 py-16 md:py-24 text-left">
        {/* === HEADER SECTION === */}
        <div className="max-w-5xl mx-auto space-y-8 mt-8">
          <h1 className="text-4xl md:text-5xl font-bold text-secondary border-l-6 border-primary pl-4 capitalize">
            {title}
          </h1>
          <p className="text-text text-lg leading-relaxed max-w-3xl">
            Here are the details for{" "}
            <span className="font-semibold">{title}</span> in{" "}
            <span className="font-semibold">
              {subSlug?.replace(/-/g, " ")}
            </span>{" "}
            track of{" "}
            <span className="font-semibold">
              {slug?.replace(/-/g, " ")}
            </span>
            . Dive into the latest technologies and frameworks shaping the
            future of development.
          </p>
        </div>

        {/* === VIDEO + DESCRIPTION === */}
        <div className="mt-16 flex flex-col md:flex-row items-start gap-10 max-w-6xl mx-auto">
          {/* Video Card */}
          <div
            className="flex-1 w-full min-h-[220px] sm:min-h-[280px] md:min-h-[400px] relative rounded-2xl overflow-hidden shadow-xl bg-gradient-to-r from-primary-light to-white group cursor-pointer"
            onClick={openVideo}
          >
            <div className="absolute inset-0 flex items-center justify-center z-10">
              <div className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-10 h-10 text-primary"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="flex-1 bg-white shadow-md rounded-2xl p-8 border border-primary/20">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-secondary">
              About This Topic
            </h2>
            <p className="text-base md:text-lg text-text leading-relaxed mb-4">
              This section dives deep into the{" "}
              <span className="font-semibold">{title}</span> area of{" "}
              {subSlug?.replace(/-/g, " ")}. You’ll explore advanced tools,
              frameworks, and techniques that make modern web development
              efficient, accessible, and scalable.
            </p>
            <p className="text-base md:text-lg text-text leading-relaxed">
              Expect hands-on projects, coding challenges, and real-world case
              studies. By the end, you’ll be confident in building and deploying
              production-ready applications that perform beautifully across all
              platforms.
            </p>
          </div>
        </div>
      </main>

      {/* === VIDEO MODAL === */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
          <div className="relative w-full max-w-4xl bg-black rounded-2xl overflow-hidden shadow-2xl">
            {/* Close Button */}
            <button
              onClick={closeVideo}
              className="absolute top-3 right-3 z-10 text-white bg-white/10 hover:bg-white/20 rounded-full p-2 transition"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Video Frame */}
            <div className="relative pt-[56.25%]">
              <iframe
                className="absolute inset-0 w-full h-full"
                src={`https://www.youtube.com/embed/dQw4w9WgXcQ`}
                title={`${title} video`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
