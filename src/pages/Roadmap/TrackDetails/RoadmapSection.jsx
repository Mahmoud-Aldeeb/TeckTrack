import React from "react";
import Loader from "../../../componants/ui/Loader";

const RoadmapSection = ({ roadmap, loading, error, displayTitle }) => {
    if (loading) {
        return <Loader />;
    }

    if (error) {
        return <ErrorMessage message={error} />;
    }

    if (!roadmap) {
        return (
            <section className="bg-gradient-to-b from-white to-primary-light py-20 px-6 mt-10 rounded-2xl shadow-lg">
                <div className="max-w-6xl mx-auto text-center">
                    <p className="text-gray-500 text-lg">No roadmap available for this track.</p>
                </div>
            </section>
        );
    }

    return (
        <section className="bg-gradient-to-b from-white to-primary-light py-20 px-6 mt-10 rounded-2xl shadow-lg">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
                    {displayTitle}
                </h2>
                <p className="text-lg text-text max-w-3xl mx-auto mb-12">
                    {roadmap.description}
                </p>

                <div className="relative border-l-4 border-primary max-w-4xl mx-auto">
                    {roadmap.roadmapSteps?.length > 0 ? (
                        roadmap.roadmapSteps
                            .sort((a, b) => a.stepOrder - b.stepOrder)
                            .map((step, index) => (
                                <RoadmapStep
                                    key={step.roadmapStepId}
                                    step={step}
                                    index={index}
                                />
                            ))
                    ) : (
                        <p className="text-gray-500">No steps available for this roadmap.</p>
                    )}
                </div>
            </div>
        </section>
    );
};


const RoadmapStep = ({ step, index }) => (
    <div className="mb-10 ml-6 group relative">
        <div className="absolute -left-3.5 w-7 h-7 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm group-hover:scale-110 transition-transform shadow-md">
            {index + 1}
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 border border-primary/20">
            <h3 className="text-2xl font-semibold text-secondary mb-2">
                {step.stepTitle}
            </h3>
            <p className="text-gray-700 leading-relaxed">
                {step.stepDescription}
            </p>
        </div>
    </div>
);

export default RoadmapSection;





