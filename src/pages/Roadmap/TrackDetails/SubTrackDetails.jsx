import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Loader from "../../../componants/ui/Loader";
import ErrorMessage from "../../../componants/ui/Error";

export default function TrackListPage() {
  const { slug, subSlug } = useParams();
  const navigate = useNavigate();

  const [subCategory, setSubCategory] = useState(null);
  const [tracks, setTracks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Helper: Convert names to slugs
  const createSlug = (name) => {
    return name
      ?.toLowerCase()
      .replace(/ & /g, "-")
      .replace(/ /g, "-")
      .replace(/[^\w-]+/g, "");
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        // 1️⃣ Get all subcategories
        const subResponse = await axios.get("http://techtrack.runasp.net/api/SubCategories");
        const allSubs = subResponse.data.filter(item =>
          item.subCategoryName !== "string" && item.description !== "string"
        );

        // 2️⃣ Find current subcategory
        const foundSub = allSubs.find(
          (sub) => createSlug(sub.subCategoryName) === subSlug
        );

        if (!foundSub) {
          setError("Subcategory not found");
          setLoading(false);
          return;
        }

        setSubCategory(foundSub);

        // 3️⃣ Get all tracks and filter them by subCategoryId
        const trackResponse = await axios.get("http://techtrack.runasp.net/api/Track");
        const filteredTracks = trackResponse.data.filter(
          (track) => track.subCategoryId === foundSub.subCategoryId
        );

        setTracks(filteredTracks);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching tracks:", err);
        setError("Failed to load tracks. Please try again later.");
        setLoading(false);
      }
    };

    fetchData();
  }, [subSlug]);

  if (loading) return <Loader />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-6">
      {/* Header Section */}
      <div className="max-w-4xl mx-auto text-center mt-4">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          {subCategory?.subCategoryName || "Specialization"}
        </h1>
        <p className="text-gray-700 text-sm mb-8">
          {subCategory?.description || "Explore learning tracks for this specialization"}
        </p>
        <div className="w-32 h-1 bg-gray-900 mx-auto mb-10"></div>
      </div>

      {/* Tracks Section */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto px-4">
        {tracks.map((track) => (
          <div
            key={track.trackId}
            className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition-all duration-300 border hover:-translate-y-1 flex flex-col h-full"
          >
            <h2 className="text-xl font-bold text-blue-500 mb-2">
              {track.trackName}
            </h2>

            <p className="text-gray-600 text-sm mb-4 flex-grow">
              {track.description || "No description available."}
            </p>

            <div className="text-gray-700 text-xs mb-3">
              <span className="font-semibold text-blue-500">Difficulty:</span>{" "}
              {track.difficultyLevel || "Various Levels"}
            </div>

            {track.estimatedDuration && (
              <div className="text-gray-700 text-xs mb-3">
                <span className="font-semibold text-blue-500">Duration:</span>{" "}
                {track.estimatedDuration} hours
              </div>
            )}

            <Link
              to={`/trackdetails/${slug}/${subSlug}/${createSlug(track.trackName)}`}
              className="mt-auto inline-block px-4 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition-colors"
            >
              View Track Details
            </Link>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {tracks.length === 0 && (
        <div className="text-center py-12">
          <div className="text-gray-400 text-6xl mb-4">🧩</div>
          <h3 className="text-xl font-semibold text-gray-600 mb-2">
            No Tracks Found
          </h3>
          <p className="text-gray-500 max-w-md mx-auto">
            This subcategory doesn’t have any tracks yet.
          </p>
          <button
            onClick={() => navigate(-1)}
            className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Go Back
          </button>
        </div>
      )}
    </div>
  );
}