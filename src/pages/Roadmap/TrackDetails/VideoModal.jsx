
import { useState } from "react";
import { useApi } from "../../../context/ApiContext"
const VideoWithModal = ({ title, description, technologyId }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const {
        allTechnologies,
        loading,
        error
    } = useApi();

    const technology = allTechnologies.find(
        (tech) => tech.technologyId === Number(technologyId)
    );

    const getVideoId = (url) => {
        const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|shorts\/))([\w-]{11})/);
        return match ? match[1] : null;
    };
    const videoId = getVideoId(technology.videoUrl);
    const embedUrl = `https://www.youtube.com/embed/${videoId}`;

    if (loading) return <Loader />;
    if (error) return <ErrorMessage message={error} />;


    const openVideo = (e) => {
        e?.preventDefault();
        setIsModalOpen(true);
    };

    const closeVideo = () => setIsModalOpen(false);

    return (
        <>
            {/* Video Section */}
            <div className="mt-16 flex flex-col lg:flex-row items-start gap-10 max-w-6xl mx-auto">
                {/* Video Card */}
                <div
                    className="flex-1 w-full min-h-[220px] sm:min-h-[280px] md:min-h-[400px] relative rounded-2xl overflow-hidden shadow-xl bg-gray-200 group cursor-pointer"
                    onClick={openVideo}
                >
                    <img
                        src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
                        alt="video thumbnail"
                        className="absolute inset-0 w-full h-full object-cover"
                    />

                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-all"></div>

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
                        {description}
                    </p>
                </div>
            </div>

            {/* Video Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
                    <div className="relative w-full max-w-4xl bg-black rounded-2xl overflow-hidden shadow-2xl">
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

                        <div className="relative pt-[56.25%]">
                            <iframe
                                className="absolute inset-0 w-full h-full"
                                src={`${embedUrl}?autoplay=1&mute=1&playsinline=1&rel=0&modestbranding=1&enablejsapi=1&origin=https://yourdomain.com`}
                                title={title}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                playsInline
                                muted
                                sandbox="allow-scripts allow-same-origin allow-presentation"
                            />
                        </div>

                    </div>
                </div>
            )}
        </>
    );
};

export default VideoWithModal;