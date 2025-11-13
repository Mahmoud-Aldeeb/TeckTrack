import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Loader from '../../../../componants/ui/Loader';
import ErrorMessage from '../../../../componants/ui/Error';
import { useApi } from "../../../../context/ApiContext";



const QuestionsList = ({
    technologyId,
    showSearch = true,
    showFilters = true
}) => {
    const { getInterviewQuestions, getTechnologiesId } = useApi();
    const [questions, setQuestions] = useState([]);
    const [filteredQuestions, setFilteredQuestions] = useState([]);
    const [technology, setTechnology] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedDifficulty, setSelectedDifficulty] = useState('all');


    const difficultyLevels = [...new Set(questions.map(q => q.difficultyLevel))];




    useEffect(() => {
        const fetchTechnologies = async () => {
            try {
                // const res = await axios.get(`http://techtrack.runasp.net/api/Technology/${technologyId}`);
                const res = await getTechnologiesId(technologyId);
                const technologyData = res.data.data || res.data;
                setTechnology(technologyData);
            } catch (err) {
                console.error("Error fetching track:", err);
            }
        };
        fetchTechnologies();
    }, [technologyId]);

    console.log("Current technologyId in QuestionsList:", technologyId);
    useEffect(() => {
        const fetchQuestionsForTrack = async () => {
            try {
                setLoading(true);
                // const response = await axios.get(apiUrl);
                const response = await getInterviewQuestions();

                let questionsData = response.data;
                const TechnologiesQuestions = questionsData.filter(tech => {
                    return tech.technologyId === parseInt(technologyId);
                });


                console.log("All questions:", questionsData);
                console.log("Current technologyId:", technologyId);
                console.log("Filtered questions:", TechnologiesQuestions);

                setQuestions(TechnologiesQuestions);
                setFilteredQuestions(TechnologiesQuestions);
                setLoading(false);
            } catch (err) {
                console.error("Error fetching questions:", err);
                setError("Failed to load questions. Please try again later.");
                setLoading(false);
            }
        };

        fetchQuestionsForTrack();
    }, [technologyId]);


    useEffect(() => {
        let filtered = filteredQuestions;


        if (searchTerm) {
            filtered = filtered.filter(question =>
                question.questionText?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                question.sampleAnswer?.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }


        if (selectedDifficulty !== 'all') {
            filtered = filtered.filter(question => question.difficultyLevel === selectedDifficulty);
        }

        setFilteredQuestions(filtered);
    }, [searchTerm, selectedDifficulty, questions]);

    const handleResetFilters = () => {
        setSearchTerm('');
        setSelectedDifficulty('all');
    };

    if (!technologyId) {
        return <Loader />;
    }

    if (loading) {
        return <Loader />;
    }

    if (error) {
        return <ErrorMessage message={error} />;
    }

    return (
        <div className="w-full max-w-6xl mx-auto p-6">
            {/* Header */}
            <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    Technical Interview Questions
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                    Explore a comprehensive collection of technical and behavioral questions to prepare for your next interview
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
                                    {difficultyLevels.map(difficulty => (
                                        <option key={difficulty} value={difficulty}>
                                            {difficulty}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        )}
                    </div>

                    {/* Reset Filters Button */}
                    {(searchTerm || selectedDifficulty !== 'all') && (
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
            <div className="mb-6 flex justify-between items-center">
                <p className="text-gray-600">
                    Showing {filteredQuestions.length} of {questions.length} questions
                </p>

                {/* Quick Stats */}
                <div className="flex gap-4 text-sm text-gray-500">
                    <span>Technical: {questions.filter(q => q.questionType === 'technical').length}</span>
                    <span>Behavioral: {questions.filter(q => q.questionType === 'behavioral').length}</span>
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

const QuestionCard = ({ question, index }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const getDifficultyColor = (difficulty) => {
        switch (difficulty?.toLowerCase()) {
            case 'beginner':
                return 'bg-green-100 text-green-800 border-green-200';
            case 'intermediate':
                return 'bg-yellow-100 text-yellow-800 border-yellow-200';
            case 'advanced':
                return 'bg-red-100 text-red-800 border-red-200';
            default:
                return 'bg-gray-100 text-gray-800 border-gray-200';
        }
    };

    const getTypeColor = (type) => {
        switch (type?.toLowerCase()) {
            case 'technical':
                return 'bg-blue-100 text-blue-800 border-blue-200';
            case 'behavioral':
                return 'bg-purple-100 text-purple-800 border-purple-200';
            default:
                return 'bg-gray-100 text-gray-800 border-gray-200';
        }
    };

    return (
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-200">
            <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                    <div className="flex items-start space-x-4 rtl:space-x-reverse flex-1">
                        <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                            <span className="text-blue-600 font-semibold">#{index + 1}</span>
                        </div>
                        <div className="flex-1">
                            <h3 className="text-lg font-semibold text-gray-900 mb-3 leading-relaxed">
                                {question.questionText}
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border ${getDifficultyColor(question.difficultyLevel)}`}>
                                    {question.difficultyLevel}
                                </span>
                                <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border ${getTypeColor(question.questionType)}`}>
                                    {question.questionType}
                                </span>

                            </div>
                        </div>
                    </div>

                    <button
                        onClick={() => setIsExpanded(!isExpanded)}
                        className="flex-shrink-0 ml-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 text-sm font-medium"
                    >
                        {isExpanded ? 'Hide Answer' : 'Show Answer'}
                    </button>
                </div>

                {isExpanded && (
                    <div className="mt-6 p-6 bg-gray-50 rounded-lg border border-gray-200">
                        <div className="flex items-center mb-4">
                            <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                            <h4 className="font-semibold text-gray-900 text-lg">Sample Answer</h4>
                        </div>
                        <p className="text-gray-700 leading-relaxed text-base pl-5">
                            {question.sampleAnswer}
                        </p>


                    </div>
                )}
            </div>
        </div>
    );
};

export default QuestionsList;