

// import React from 'react';

// const Card = () => {
//   const fakeData = [
//     {
//       id: 1,
//       title: "Thndr",
//       description: "Thndr is a digital investment27 platform that is designed to simplify investing...",
//       location: "1 Location",
//       stacks: ["Redis", "React", "Node.js", "Node.js", "Node.js"],
//       bgColor: "#ffff00",
//       image: "src/assets/image/LOGO-Yellow 2.png",
//     },
//     {
//       id: 2,
//       title: "Payrails",
//       description: "Payrails is a payment operating system for global enterprises that want to effectively manage all aspects of...",
//       location: "2 Locations",
//       stacks: ["MongoDB", "Express", "Vue.js", "Vue.js"],
//       bgColor: "#5757E8",
//       image: "src/assets/image/LOGO-Yellow 3.png",
//     },
//     {
//       id: 3,
//       title: "Pemo",
//       description: "The smartest company cards that automate expenses for MENA businesses. We help businesses...",
//       location: "2 Locations",
//       stacks: ["Firebase", "React", "Tailwind", "Node.js", "Vue.js", "Node.js", "Vue.js"],
//       bgColor: "#D2F0E4",
//       image: "src/assets/image/LOGO-Yellow 3.png",
//     },
//   ];

//   return (
//     <>
//       {fakeData.map((item) => (
//         <div
//           key={item.id}
//           className="border-2 border-black rounded-3xl py-8 px-3 xl:p-8
//                      h-[350px]
//                                flex flex-col
//                                w-full md:w-[250px] xl:w-[286px] 2xl:w-[350px]
//                                justify-center items-center"
//           style={{ backgroundColor: item.bgColor }}
//         >
//           {/* الصورة */}
//           <img
//             src={item.image}
//             alt={`${item.title} logo`}
//             className="w-1/2 h-1/2 object-contain"
//           />

//           {/* العنوان */}
//           <p className="titleBrand text-lg mt-3 font-[500] text-center">
//             {item.title}
//           </p>

//           {/* الموقع */}
//           <div className="flex justify-center items-center bg-[#CDDAFE] mt-2 px-3 py-1 rounded-full">
//             <p className="text-sm">{item.location}</p>
//           </div>

//           {/* الوصف */}
//           <div className="contentCard my-6 text-center">
//             <p className="text-[14px] font-[400] leading-[150%] text-gray-700">
//               {item.description}
//             </p>
//           </div>

//           {/* الـ Stacks */}
//           <div className="stackCompany flex justify-center items-center gap-2.5 flex-wrap">
//             {item.stacks.slice(0, 2).map((stack, index) => (
//               <div
//                 key={index}
//                 className="stack w-fit px-3 py-2 bg-white flex gap-1 rounded-full text-xs font-medium"
//               >
//                 <p>{stack}</p>
//               </div>
//             ))}
//             {item.stacks.length > 2 && (
//               <div className="stack w-fit px-3 py-2 bg-white flex gap-1 rounded-full text-xs font-medium">
//                 <p>+{item.stacks.length - 2}</p>
//               </div>
//             )}
//           </div>
//         </div>
//       ))}
//     </>
//   );
// };

// export default Card;






















import React, { useState, useEffect, useMemo } from 'react';
import axios from 'axios';
import Loader from './Loader';
import ErrorMessage from './Error';
import { useApi } from '../../context/ApiContext';


const colorBg = [
  '#000000', '#FFFF00', '#5757E8',
  '#D2F0E4', '#09090B', '#2A2537',
  '#FFFFFF', '#261B53', '#FEFEFE'
];

const Card = ({ companyIndex = 0, searchTerm = '' }) => {
  const { getCompanies } = useApi();
  const [companies, setCompanies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        setLoading(true);
        setError(null);
        // const response = await axios.get('http://techtrack.runasp.net/api/Company');
        // setCompanies(response.data);
        const res = await getCompanies();
        setCompanies(res.data);
      } catch (err) {

        setError("Failed to load companies. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchCompanies();
  }, []);


  const filteredCompanies = useMemo(() => {
    if (!searchTerm.trim()) return companies;

    return companies.filter(company =>
      company.companyName?.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [companies, searchTerm]);

  const currentCompany = filteredCompanies[companyIndex];
  const bgColor = colorBg[companyIndex % colorBg.length];

  const isBlackBg = bgColor === '#000000' || bgColor === '#09090B' || bgColor === '#261B53';
  const textColorClass = isBlackBg ? 'text-white' : 'text-gray-900';
  const descriptionColorClass = isBlackBg ? 'text-gray-300' : 'text-gray-700';

  if (error) {
    return <ErrorMessage message={error} />;
  }

  if (loading) {
    return <Loader />;
  }


  if (!currentCompany) return null;

  return (
    <a
      href={currentCompany.websiteUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="block"
    >
      <div
        className={`border-2 border-black rounded-3xl py-8 px-3 xl:p-8
                   h-[350px]
                   flex flex-col
                   w-full md:w-[250px] xl:w-[286px] 2xl:w-[350px]
                   justify-center items-center
                   hover:shadow-xl transition-shadow duration-300`}
        style={{ backgroundColor: bgColor }}
      >
        <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
          {currentCompany.companyName?.charAt(0) || 'C'}
        </div>

        <p className={`titleBrand text-lg mt-3 font-[500] text-center ${textColorClass}`}>
          {currentCompany.companyName}
        </p>

        <div className="flex justify-center items-center bg-[#CDDAFE] mt-2 px-3 py-1 rounded-full">
          <p className="text-sm text-indigo-700 font-medium">
            {currentCompany.industry}
          </p>
        </div>

        <div className="contentCard my-4 text-center flex-1 overflow-hidden">
          <p className={`text-[14px] font-[400] leading-[150%] line-clamp-3 ${descriptionColorClass}`}>
            {currentCompany.description}
          </p>
        </div>

        <div className="mt-auto">
          <span className="text-xs text-blue-600 font-medium hover:underline">
            Visit Website
          </span>
        </div>
      </div>
    </a>
  );
};

export default Card;





// // Card.jsx (محدث)
// import React from 'react';

// const colorBg = [
//   '#000000', '#FFFF00', '#5757E8',
//   '#D2F0E4', '#09090B', '#2A2537',
//   '#FFFFFF', '#261B53', '#FEFEFE'
// ];

// const Card = ({ company, index = 0 }) => {
//   if (!company) return null;

//   const bgColor = colorBg[index % colorBg.length];
//   const isBlackBg = ['#000000', '#09090B', '#261B53'].includes(bgColor);
//   const textColor = isBlackBg ? 'text-white' : 'text-gray-900';
//   const descColor = isBlackBg ? 'text-gray-300' : 'text-gray-700';

//   return (
//     <a href={company.websiteUrl} target="_blank" rel="noopener noreferrer" className="block">
//       <div
//         className={`border-2 border-black rounded-3xl py-8 px-3 xl:p-8 h-[350px] flex flex-col w-full md:w-[250px] xl:w-[286px] 2xl:w-[350px] justify-center items-center hover:shadow-xl transition-shadow duration-300`}
//         style={{ backgroundColor: bgColor }}
//       >
//         <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
//           {company.companyName?.charAt(0) || 'C'}
//         </div>

//         <p className={`titleBrand text-lg mt-3 font-[500] text-center ${textColor}`}>
//           {company.companyName}
//         </p>

//         <div className="flex justify-center items-center bg-[#CDDAFE] mt-2 px-3 py-1 rounded-full">
//           <p className="text-sm text-indigo-700 font-medium">{company.industry}</p>
//         </div>

//         <div className="contentCard my-4 text-center flex-1 overflow-hidden">
//           <p className={`text-[14px] font-[400] leading-[150%] line-clamp-3 ${descColor}`}>
//             {company.description}
//           </p>
//         </div>

//         <div className="mt-auto">
//           <span className="text-xs text-blue-600 font-medium hover:underline">
//             Visit Website
//           </span>
//         </div>
//       </div>
//     </a>
//   );
// };

// export default Card;