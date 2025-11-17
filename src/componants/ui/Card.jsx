
// import React, { useState, useEffect, useMemo } from 'react';
// import Loader from './Loader';
// import ErrorMessage from './Error';
// import { useApi } from '../../context/ApiContext';

// const Card = ({ companyIndex = 0, searchTerm = '' }) => {
//   const { getCompanies, getCompanyTechnologies } = useApi();

//   const [companies, setCompanies] = useState([]);
//   const [allTechnologies, setAllTechnologies] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchCompanies = async () => {
//       try {
//         setLoading(true);
//         const res = await getCompanies();
//         setCompanies(res.data);
//       } catch (err) {
//         setError("Failed to load companies.");
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchCompanies();
//   }, [getCompanies]);


//   useEffect(() => {
//     const fetchAllTechnologies = async () => {
//       try {
//         const res = await getCompanyTechnologies();
//         setAllTechnologies(res.data);
//       } catch (err) {
//         console.error("Failed to load technologies:", err);
//         setError("Failed to load technologies.");
//       }
//     };
//     fetchAllTechnologies();
//   }, [getCompanyTechnologies]);


//   const filteredCompanies = useMemo(() => {
//     if (!searchTerm.trim()) return companies;
//     return companies.filter(company =>
//       company.companyName?.toLowerCase().includes(searchTerm.toLowerCase())
//     );
//   }, [companies, searchTerm]);

//   const currentCompany = filteredCompanies[companyIndex];
//   const bgColor = '#fff';


//   const companyTechs = useMemo(() => {
//     if (!currentCompany || !allTechnologies.length) return [];

//     return allTechnologies
//       .filter(tech => tech.companyId === currentCompany.companyId)
//       .map(tech => tech.notes?.trim())


//   }, [currentCompany, allTechnologies]);

//   if (error) return <ErrorMessage message={error} />;
//   if (loading) return <Loader />;
//   if (!currentCompany) return null;

//   return (
//     <a
//       href={currentCompany.websiteUrl}
//       target="_blank"
//       rel="noopener noreferrer"
//       className="block"
//     >
//       <div

//         className={`border-2 border-[#042B95] shadow-2xl  rounded-3xl py-8 px-3 xl:p-8
//                     h-[350px] flex flex-col
//                     w-full md:w-[250px] xl:w-[286px] 2xl:w-[350px]
//                     justify-center items-center
//                     hover:shadow-xl transition-shadow duration-300`}
//         style={{ backgroundColor: bgColor }}
//       >

//         <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
//           {currentCompany.companyName?.charAt(0) || 'C'}
//         </div>


//         <p className="titleBrand text-lg mt-3 font-[500] text-center text-gray-900">
//           {currentCompany.companyName}
//         </p>


//         <div className="flex justify-center items-center bg-[#CDDAFE] mt-2 px-3 py-1 rounded-full">
//           <p className="text-sm text-indigo-700 font-medium">
//             {currentCompany.industry}
//           </p>
//         </div>


//         <div className="contentCard my-4 text-center flex-1 overflow-hidden">
//           <p className="text-[14px] font-[400] leading-[150%] line-clamp-3 text-gray-700">
//             {currentCompany.description}
//           </p>
//         </div>


//         <div className="stackCompany flex justify-center items-center gap-2 flex-wrap mt-2">
//           {companyTechs.slice(0, 2).map((tech, index) => (
//             <div
//               key={index}
//               className="px-3 py-1.5 bg-white border border-gray-300 rounded-full text-xs font-medium text-gray-700 shadow-sm"
//             >
//               {tech}
//             </div>
//           ))}
//           {companyTechs.length > 2 && (
//             <div className="px-3 py-1.5 bg-white border border-gray-300 rounded-full text-xs font-medium text-gray-600">
//               +{companyTechs.length - 2}
//             </div>
//           )}
//           {companyTechs.length === 0 && (
//             <p className="text-xs text-gray-500">No tech stack</p>
//           )}
//         </div>


//         {/* <div className="mt-auto pt-3">
//             <span className="text-xs text-blue-600 font-medium hover:underline hover:text-blue-900 transition duration-100">
//               Visit Website
//             </span>
//           </div> */}
//       </div>
//     </a>
//   );
// };

// export default Card;





// src/componants/ui/Card.jsx
import React from 'react';

const Card = ({ company, companyTechs = [] }) => {
  if (!company) return null;

  return (
    <a href={company.websiteUrl} target="_blank" rel="noopener noreferrer" className="block">
      <div className={`
        border-2 border-[#042B95] shadow-2xl rounded-3xl py-8 px-3 xl:p-8
        h-[350px] flex flex-col w-full md:w-[250px] xl:w-[286px] 2xl:w-[350px]
        justify-center items-center hover:shadow-xl transition-shadow duration-300
      `} style={{ backgroundColor: '#fff' }}>

        <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
          {company.companyName?.charAt(0) || 'C'}
        </div>

        <p className="titleBrand text-lg mt-3 font-[500] text-center text-gray-900">
          {company.companyName}
        </p>

        <div className="flex justify-center items-center bg-[#CDDAFE] mt-2 px-3 py-1 rounded-full">
          <p className="text-sm text-indigo-700 font-medium">{company.industry}</p>
        </div>

        <div className="contentCard my-4 text-center flex-1 overflow-hidden">
          <p className="text-[14px] font-[400] leading-[150%] line-clamp-3 text-gray-700">
            {company.description}
          </p>
        </div>

        <div className="stackCompany flex justify-center items-center gap-2 flex-wrap mt-2">
          {companyTechs.slice(0, 2).map((tech, i) => (
            <div key={i} className="px-3 py-1.5 bg-white border border-gray-300 rounded-full text-xs font-medium text-gray-700 shadow-sm">
              {tech}
            </div>
          ))}
          {companyTechs.length > 2 && (
            <div className="px-3 py-1.5 bg-white border border-gray-300 rounded-full text-xs font-medium text-gray-600">
              +{companyTechs.length - 2}
            </div>
          )}
          {companyTechs.length === 0 && (
            <p className="text-xs text-gray-500">No tech stack</p>
          )}
        </div>
      </div>
    </a>
  );
};

export default Card;