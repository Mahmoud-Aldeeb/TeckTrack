// src/pages/Companies/Companies.jsx
import React, { useState, useMemo } from 'react';
import { Search } from "lucide-react";
import { motion, AnimatePresence } from 'framer-motion';
import Card from '../../componants/ui/Card';
import { useApi } from '../../context/ApiContext';
import Loader from '../../componants/ui/Loader';
import ErrorMessage from '../../componants/ui/Error';
import SEO from '../../componants/ui/SEO';

const Companies = () => {
  const { companies = [], CompanyTechnologies = [], loading, error } = useApi();

  const cardsPerPage = 8;
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCompanies = useMemo(() => {
    if (!searchTerm.trim()) return companies;
    return companies.filter(c =>
      c.companyName?.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [companies, searchTerm]);

  const totalPages = Math.ceil(filteredCompanies.length / cardsPerPage);
  const startIndex = (currentPage - 1) * cardsPerPage;
  const visibleCompanies = filteredCompanies.slice(startIndex, startIndex + cardsPerPage);

  const getCompanyTechs = (companyId) => {
    return CompanyTechnologies
      .filter(t => t.companyId === companyId)
      .map(t => t.notes?.trim())
      .filter(Boolean);
  };

  // Dynamic SEO based on search
  const pageTitle = searchTerm
    ? `Search Results for "${searchTerm}" - Companies | TeckTrack`
    : 'All Tech Companies in Egypt & Middle East | TeckTrack';

  const pageDescription = searchTerm
    ? `Found ${filteredCompanies.length} companies matching "${searchTerm}". Discover the best software and tech companies in the region with TeckTrack.`
    : 'Complete directory of the largest and most important technology and software companies in Egypt and the Middle East. Reviews, tech stacks, jobs, and more - TeckTrack';

  if (loading) return <Loader />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <>
      {/* ================================== SEO ==================================*/}

      <SEO
        title={pageTitle}
        description={pageDescription}
        url="https://teck-track.vercel.app/companies"
      />




      {/* ================================== Page Content ================================== */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-25">
        {/* Search Bar */}
        <div className="flex items-center w-full max-w-3xl mx-auto mt-10 border border-gray-300 rounded-full px-3 py-2 focus-within:shadow-md transition">
          <Search className="text-gray-500 w-5 h-5 mr-2" />
          <input
            type="text"
            placeholder="Search for a company..."
            className="flex-1 outline-none text-gray-700 text-sm sm:text-base"
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setCurrentPage(1);
            }}
          />
          <button
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 py-1.5 sm:px-6 sm:py-2 rounded-full text-sm transition"
            onClick={() => setCurrentPage(1)}
          >
            Search
          </button>
        </div>

        <div className="mt-10 mb-20">
          <div className="flex-1">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentPage + searchTerm}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 gap-y-8 place-items-center"
              >
                {visibleCompanies.length === 0 ? (
                  <p className="col-span-full text-center text-gray-500 text-xl">
                    {searchTerm
                      ? `No companies found matching "${searchTerm}"`
                      : 'No companies available at the moment'}
                  </p>
                ) : (
                  visibleCompanies.map((company, i) => (
                    <motion.div
                      key={company.companyId}
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <Card
                        company={company}
                        companyTechs={getCompanyTechs(company.companyId)}
                      />
                    </motion.div>
                  ))
                )}
              </motion.div>
            </AnimatePresence>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center gap-2 mt-12 text-sm text-gray-600 flex-wrap">
                <button
                  onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                  disabled={currentPage === 1}
                  className={`px-5 py-2 rounded-lg font-medium transition ${currentPage === 1 ? 'text-gray-400 cursor-not-allowed' : 'hover:bg-gray-100 border border-gray-300'}`}
                >
                  Previous
                </button>

                {Array.from({ length: Math.min(7, totalPages) }, (_, i) => {
                  let page;
                  if (totalPages <= 7) page = i + 1;
                  else if (currentPage <= 4) page = i + 1;
                  else if (currentPage >= totalPages - 3) page = totalPages - 6 + i;
                  else page = currentPage - 3 + i;

                  return page > 0 && page <= totalPages ? (
                    <button
                      key={page}
                      onClick={() => setCurrentPage(page)}
                      className={`w-10 h-10 rounded-lg font-medium transition ${currentPage === page ? 'bg-blue-600 text-white' : 'hover:bg-gray-100 border border-gray-300'}`}
                    >
                      {page}
                    </button>
                  ) : null;
                })}

                <button
                  onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                  disabled={currentPage === totalPages}
                  className={`px-5 py-2 rounded-lg font-medium transition ${currentPage === totalPages ? 'text-gray-400 cursor-not-allowed' : 'hover:bg-gray-100 border border-gray-300'}`}
                >
                  Next
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Companies;