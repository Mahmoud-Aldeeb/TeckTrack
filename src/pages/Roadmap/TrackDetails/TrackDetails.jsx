import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import axios from "axios";
import Loader from "../../../componants/ui/Loader";
import ErrorMessage from "../../../componants/ui/Error";

export default function FrontendPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [subCategories, setSubCategories] = useState([]);
  const [currentCategory, setCurrentCategory] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);


        const categoriesResponse = await axios.get('http://techtrack.runasp.net/api/Category');
        const categories = categoriesResponse.data.filter(item =>
          item.categoryName !== "string"
        );

        console.log("All categories without filter:", categories);



        const foundCategory = categories.find(cat =>
          createSlug(cat.categoryName) === slug
        );

        if (!foundCategory) {
          setError("Category not found");
          setLoading(false);
          return;
        }

        setCurrentCategory(foundCategory);


        const subCategoriesResponse = await axios.get('http://techtrack.runasp.net/api/SubCategories');
        const filteredSubCategories = subCategoriesResponse.data.filter(item =>
          item.categoryId === foundCategory.categoryId &&
          item.subCategoryName !== "string" &&
          item.description !== "string"
        );

        setSubCategories(filteredSubCategories);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching data:", err);
        setError("Failed to load data. Please try again later.");
        setLoading(false);
      }
    };

    fetchData();
  }, [slug]);


  const createSlug = (name) => {
    return name
      .toLowerCase()
      .replace(/ & /g, '-')
      .replace(/ /g, '-')
      .replace(/[^\w-]+/g, '');
  };

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <ErrorMessage message={error} />;
  }

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-6">
      <div className="max-w-4xl mx-auto text-center mt-4">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          {currentCategory?.categoryName || "Developer Roadmap"}
        </h1>
        <p className="text-gray-900 text-sm text-center mb-8">
          {currentCategory?.description || "Choose your specialization and start your learning journey"}
        </p>

        <div className="w-32 h-1 bg-gray-900 mx-auto mb-10"></div>
      </div>

      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
        Specialization Tracks
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto px-4">
        {subCategories.map((subCategory) => (
          <Link
            key={subCategory.subCategoryId}
            to={`/trackdetails/${slug}/${createSlug(subCategory.subCategoryName)}`}
            className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition-all duration-300 border hover:-translate-y-1 flex flex-col h-full"
          >
            <h2 className="text-xl font-bold text-blue-500 mb-3">
              {subCategory.subCategoryName}
            </h2>

            <p className="text-gray-600 text-sm mb-4 flex-grow">
              {subCategory.description}
            </p>

            <div className="space-y-3">
              <div>
                <div className="text-blue-500 font-semibold text-sm mb-1">Difficulty:</div>
                <p className="text-gray-700 text-xs">
                  {subCategory.difficultyLevel || "Various Levels"}
                </p>
              </div>

              {subCategory.estimatedDuration > 0 && (
                <div>
                  <div className="text-blue-500 font-semibold text-sm mb-1">Duration:</div>
                  <p className="text-gray-700 text-xs">
                    {subCategory.estimatedDuration} hours
                  </p>
                </div>
              )}
            </div>
          </Link>
        ))}
      </div>

      {/* Empty State */}
      {subCategories.length === 0 && (
        <div className="text-center py-12">
          <div className="text-gray-400 text-6xl mb-4">📚</div>
          <h3 className="text-xl font-semibold text-gray-600 mb-2">
            No Specializations Available
          </h3>
          <p className="text-gray-500 max-w-md mx-auto">
            Currently there are no specialization tracks available for this category.
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