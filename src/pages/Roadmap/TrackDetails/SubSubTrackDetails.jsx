import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import VideoWithModal from "./VideoModal";
import RoadmapSection from "./RoadmapLine";
import QuestionsList from "../TrackDetails/QuestionsList/QuestionsList";
import { useApi } from "../../../context/ApiContext";
import Loader from "../../../componants/ui/Loader";
import ErrorMessage from "../../../componants/ui/Error";
import SEO from "../../../componants/ui/SEO";

const SubSubTrackDetails = () => {
  const { trackId, categoryId, subCategoryId } = useParams();
  const {
    tracks,
    allTechnologies,
    categories,
    subCategories,
    loading,
    error,
  } = useApi();

  const [activeTech, setActiveTech] = useState(null);

  const catId = Number(categoryId);
  const subId = Number(subCategoryId);
  const trkId = Number(trackId);

  const track = tracks.find(t => t.trackId === trkId);
  const category = categories.find(c => c.categoryId === catId);
  const subCategory = subCategories.find(s => s.subCategoryId === subId);

  const categoryName = category?.categoryName || "Unknown";
  const subCategoryName = subCategory?.subCategoryName || "Unknown";

  const trackTechnologies = allTechnologies
    .filter(tech => tech.trackId === trkId)
    .filter(tech => tech.technologyName && tech.technologyName !== "string");

  useEffect(() => {
    if (trackTechnologies.length > 0 && !activeTech) {
      setActiveTech(trackTechnologies[0]);
    }
  }, [trackTechnologies.length, activeTech]);

  if (isNaN(catId) || isNaN(subId) || isNaN(trkId)) {
    return <ErrorMessage message="Invalid URL parameters" />;
  }

  if (!track) {
    return <ErrorMessage message="Track not found" />;
  }

  if (loading) return <Loader />;
  if (error) return <ErrorMessage message={error} />;

  const currentTechName = activeTech?.technologyName || track.trackName;
  const pageTitle = `${track.trackName} - ${currentTechName} – ${subCategoryName} | TechTrack`;
  const pageDescription = `${track.description || `Master ${track.trackName} with interactive roadmap, video lessons, and real interview questions.`} Learn ${currentTechName} in ${categoryName}.`;
  const pageUrl = `https://tecktrack.vercel.app/roadmap/${categoryId}/${subCategoryId}/${trackId}`;

  return (
    <>
      <SEO title={pageTitle} description={pageDescription} url={pageUrl} />

      <div className="min-h-screen bg-gradient-to-b from-primary-light to-white text-text flex flex-col">
        <main className="flex-1 container mx-auto px-6 mt-20 py-16 md:py-24 text-left space-y-12">
          <div className="max-w-5xl mx-auto space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-secondary border-l-6 border-primary pl-4 capitalize">
              {track.trackName}
            </h1>
            <p className="text-lg text-gray-700">{track.description}</p>

            <nav className="flex flex-wrap gap-2 text-[12px] md:text-[15px] pb-2">
              <Link to="/roadmap" className="text-gray-500 hover:text-gray-700">Roadmaps</Link>
              <span className="text-gray-400"> / </span>
              <Link to={`/roadmap/${categoryId}`} className="text-gray-500 hover:text-gray-700">{categoryName}</Link>
              <span className="text-gray-400"> / </span>
              <Link to={`/roadmap/${categoryId}/${subCategoryId}`} className="text-gray-500 hover:text-gray-700">{subCategoryName}</Link>
              <span className="text-gray-400"> / </span>
              <span className="text-secondary font-medium">{track.trackName}</span>
            </nav>
          </div>

          {trackTechnologies.length > 0 && (
            <div className="flex justify-center gap-3 flex-wrap">
              {trackTechnologies.map(tech => (
                <button
                  key={tech.technologyId}
                  onClick={() => setActiveTech(tech)}
                  className={`px-5 py-2.5 rounded-full font-semibold transition-all duration-300 whitespace-nowrap ${activeTech?.technologyId === tech.technologyId
                      ? "bg-blue-600 text-white shadow-lg"
                      : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                    }`}
                >
                  {tech.technologyName}
                </button>
              ))}
            </div>
          )}

          {activeTech && (
            <VideoWithModal
              slug={categoryId}
              subSlug={subCategoryId}
              title={activeTech.technologyName}
              description={activeTech.description || ""}
              technologyId={activeTech.technologyId}
            />
          )}
        </main>

        <RoadmapSection
          technologyId={activeTech?.technologyId}
          loading={false}
          error={null}
          displayTitle={currentTechName}
        />

        {activeTech && (
          <QuestionsList
            technologyId={activeTech.technologyId}
            showSearch={true}
            showFilters={true}
          />
        )}
      </div>
    </>
  );
};

export default SubSubTrackDetails;