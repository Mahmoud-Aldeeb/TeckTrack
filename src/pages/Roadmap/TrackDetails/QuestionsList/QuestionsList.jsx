import React, { useState, useMemo } from "react";
import { useApi } from "../../../../context/ApiContext";
import Loader from "../../../../componants/ui/Loader";
import ErrorMessage from "../../../../componants/ui/Error";
import QuestionCard from "./QuestionCard";

const QuestionsList = ({
  technologyId,
  showSearch = true,
  showFilters = true,
}) => {
  const { interviewQuestions, allTechnologies, loading, error } = useApi();

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDifficulty, setSelectedDifficulty] = useState("all");


  const technology = allTechnologies.find(
    (t) => t.technologyId === parseInt(technologyId)
  );

  const questions = useMemo(() => {
    return interviewQuestions
      .filter((q) => q.technologyId === parseInt(technologyId))
      .filter((q) => q.questionText && q.questionText !== "string");
  }, [interviewQuestions, technologyId]);

  const filteredQuestions = useMemo(() => {
    let filtered = [...questions];

    if (searchTerm) {
      filtered = filtered.filter(
        (q) =>
          q.questionText?.toLowerCase().includes(searchTerm.toLowerCase()) ||
          q.sampleAnswer?.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (selectedDifficulty !== "all") {
      filtered = filtered.filter(
        (q) => q.difficultyLevel === selectedDifficulty
      );
    }

    return filtered;
  }, [questions, searchTerm, selectedDifficulty]);

  const difficultyLevels = [...new Set(questions.map((q) => q.difficultyLevel))];

  const handleResetFilters = () => {
    setSearchTerm("");
    setSelectedDifficulty("all");
  };

  if (!technologyId || !technology) {
    return <ErrorMessage message="Technology not found" />;
  }
  if (loading) return <Loader />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <div className="w-full max-w-6xl mx-auto p-6">
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Technical Interview Questions
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Explore a comprehensive collection of technical and behavioral
          questions to prepare for your next interview
        </p>
      </div>

      {/* Search and Filters */}
      {(showSearch || showFilters) && (
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {showSearch && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Search Questions
                </label>
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search in questions and answers..."
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            )}
            {showFilters && difficultyLevels.length > 0 && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Difficulty Level
                </label>
                <select
                  value={selectedDifficulty}
                  onChange={(e) => setSelectedDifficulty(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="all">All Difficulty Levels</option>
                  {difficultyLevels.map((difficulty) => (
                    <option key={difficulty} value={difficulty}>
                      {difficulty}
                    </option>
                  ))}
                </select>
              </div>
            )}
          </div>

          {(searchTerm || selectedDifficulty !== "all") && (
            <div className="mt-4 text-center">
              <button
                onClick={handleResetFilters}
                className="text-blue-600 hover:text-blue-800 text-sm font-medium"
              >
                Reset All Filters
              </button>
            </div>
          )}
        </div>
      )}

      {/* Results Count */}
      <div className="mb-6 flex flex-col gap-3 sm:gap-0 sm:flex-row justify-start sm:justify-between sm:items-center">
        <p className="text-gray-600">
          Showing {filteredQuestions.length} of {questions.length} questions
        </p>
        <div className="flex gap-4 text-sm text-gray-500">
          <span>
            Technical: {questions.filter((q) => q.questionType.toLowerCase() === "technical").length}
          </span>
          <span>
            Behavioral: {questions.filter((q) => q.questionType.toLowerCase() === "behavioral").length}
          </span>
        </div>
      </div>

      {/* Questions Grid */}
      {filteredQuestions.length === 0 ? (
        <div className="text-center py-12">
          <div className="text-gray-400 text-6xl mb-4">?</div>
          <h3 className="text-xl font-semibold text-gray-600 mb-2">
            No Questions Found
          </h3>
          <p className="text-gray-500">
            No questions match your current search criteria.
          </p>
          <button
            onClick={handleResetFilters}
            className="mt-4 text-blue-600 hover:text-blue-800 font-medium"
          >
            Reset filters
          </button>
        </div>
      ) : (
        <div className="grid gap-6">
          {filteredQuestions.map((question, index) => (
            <QuestionCard
              key={question.questionId || index}
              question={question}
              index={index}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default QuestionsList;