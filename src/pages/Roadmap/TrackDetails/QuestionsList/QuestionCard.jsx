
import React, { useState } from "react";

const QuestionCard = ({ question, index }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const getDifficultyColor = (difficulty) => {
        switch (difficulty?.toLowerCase()) {
            case "beginner":
                return "bg-green-100 text-green-800 border-green-200";
            case "intermediate":
                return "bg-yellow-100 text-yellow-800 border-yellow-200";
            case "advanced":
                return "bg-red-100 text-red-800 border-red-200";
            default:
                return "bg-gray-100 text-gray-800 border-gray-200";
        }
    };

    const getTypeColor = (type) => {
        switch (type?.toLowerCase()) {
            case "technical":
                return "bg-blue-100 text-blue-800 border-blue-200";
            case "behavioral":
                return "bg-purple-100 text-purple-800 border-purple-200";
            default:
                return "bg-gray-100 text-gray-800 border-gray-200";
        }
    };

    return (
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-200">
            <div className="p-6">
                <div className="flex flex-col md:flex-row gap-10 md:gap-0 items-start justify-between mb-4">
                    <div className="flex items-start space-x-4 rtl:space-x-reverse flex-1">
                        <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                            <span className="text-blue-600 font-semibold">#{index + 1}</span>
                        </div>
                        <div className="flex-1">
                            <h3 className="text-lg font-semibold text-gray-900 mb-3 leading-relaxed">
                                {question.questionText}
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                <span
                                    className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border ${getDifficultyColor(
                                        question.difficultyLevel
                                    )}`}
                                >
                                    {question.difficultyLevel || "Unknown"}
                                </span>
                                <span
                                    className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border ${getTypeColor(
                                        question.questionType
                                    )}`}
                                >
                                    {question.questionType || "Unknown"}
                                </span>
                            </div>
                        </div>
                    </div>

                    <button
                        onClick={() => setIsExpanded(!isExpanded)}
                        className="flex-shrink-0 md:ml-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 text-sm font-medium cursor-pointer"
                    >
                        {isExpanded ? "Hide Answer" : "Show Answer"}
                    </button>
                </div>

                {isExpanded && (
                    <div className="mt-6 p-6 bg-gray-50 rounded-lg border border-gray-200">
                        <div className="flex items-center mb-4">
                            <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                            <h4 className="font-semibold text-gray-900 text-lg">
                                Sample Answer
                            </h4>
                        </div>
                        <p className="text-gray-700 leading-relaxed text-base pl-5 whitespace-pre-wrap">
                            {question.sampleAnswer || "No sample answer provided."}
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default QuestionCard;