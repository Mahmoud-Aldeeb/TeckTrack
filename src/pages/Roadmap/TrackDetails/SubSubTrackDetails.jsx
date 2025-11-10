import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import QuestionsList from "../TrackDetails/QuestionsList/QuestionsList";
import VideoWithModal from "./VideoModal";
import RoadmapSection from "./RoadmapLine";
import { Btn } from "../../../componants/ui/Btn";

export default function SubSubTrackDetails() {
  const { slug, subSlug, subSubSlug } = useParams();
  const [roadmap, setRoadmap] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const title = subSubSlug?.replace(/-/g, " ") || "Topic";

  // === Fetch roadmap data ===
  useEffect(() => {
    const fetchRoadmap = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          "http://techtrack.runasp.net/api/Roadmap"
        );

        console.log("Fetched Roadmap Data:", response.data);

        // Format URL slug for matching
        const formattedSlug = subSubSlug?.replace(/-/g, " ").toLowerCase();
        console.log("Searching for roadmap matching:", formattedSlug);

        // Match roadmap: slug can be partial or simplified
        const matched = response.data.find((r) =>
          r.title?.toLowerCase().includes(formattedSlug)
        );

        setRoadmap(matched || null);
      } catch (err) {
        console.error("Error fetching roadmap:", err);
        setError("Failed to load roadmap 😢");
      } finally {
        setLoading(false);
      }
    };

    fetchRoadmap();
  }, [subSubSlug]);

  // Clean display title without the word "Roadmap"
  const displayTitle = roadmap?.title.replace(/roadmap/i, "").trim() || title;

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-light to-white text-text flex flex-col">
      {/* === MAIN CONTENT === */}
      <main className="flex-1 container mx-auto px-6 py-16 md:py-24 text-left">
        {/* === HEADER SECTION === */}
        <div className="max-w-5xl mx-auto space-y-8 mt-8">
          <h1 className="text-4xl md:text-5xl font-bold text-secondary border-l-6 border-primary pl-4 capitalize">
            {title}
          </h1>
          <p className="text-text text-lg leading-relaxed max-w-3xl">
            Here are the details for{" "}
            <span className="font-semibold">{title}</span> in{" "}
            <span className="font-semibold">{subSlug?.replace(/-/g, " ")}</span>{" "}
            track of{" "}
            <span className="font-semibold">{slug?.replace(/-/g, " ")}</span>.
            Dive into the latest technologies and frameworks shaping the
            future of development.
          </p>
        </div>



        {/* === VIDEO SECTION WITH MODAL === */}
        <VideoWithModal
          title={title}
          subSlug={subSlug}
          slug={slug}
        />
      </main>

      {/* === ROADMAP SECTION === */}
      <RoadmapSection
        roadmap={roadmap}
        loading={loading}
        error={error}
        displayTitle={displayTitle}
      />
      {/* === QUESTIONS SECTION === */}
      <QuestionsList
        apiUrl="http://techtrack.runasp.net/api/InterviewQuestion"
        limit={10}
        showSearch={true}
        showFilters={true}
      />

    </div>
  );
}


//another roadmap design



// export default function SubSubTrackDetails() {
//   const { slug, subSlug, subSubSlug } = useParams();
//   const [isOpen, setIsOpen] = useState(false);
//   const [roadmaps, setRoadmaps] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [expanded, setExpanded] = useState(null);

//   const openVideo = (e) => {
//     e.preventDefault();
//     setIsOpen(true);
//   };
//   const closeVideo = () => setIsOpen(false);

//   const title = subSubSlug?.replace(/-/g, " ") || "Topic";

//   // 🎯 Fetch all roadmaps and filter by track name (subSlug)
//   useEffect(() => {
//     const fetchRoadmaps = async () => {
//       try {
//         const res = await axios.get("http://techtrack.runasp.net/api/Roadmap");
//         // Filter by subSlug (track name) — adjust if you use trackId instead
//         const filtered = res.data.filter(
//           (item) =>
//             item.trackId &&
//             subSlug &&
//             subSlug.toLowerCase().includes(
//               item.title.toLowerCase().split(" ")[0]
//             )
//         );
//         setRoadmaps(filtered);
//       } catch (err) {
//         console.error("Failed to fetch roadmap:", err);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchRoadmaps();
//   }, [subSlug]);

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-primary-light to-white text-text flex flex-col">
//       {/* === MAIN CONTENT === */}
//       <main className="flex-1 container mx-auto px-6 py-16 md:py-24 text-left">
//         {/* === HEADER SECTION === */}
//         <div className="max-w-5xl mx-auto space-y-8 mt-8">
//           <h1 className="text-4xl md:text-5xl font-bold text-secondary border-l-6 border-primary pl-4 capitalize">
//             {title}
//           </h1>
//           <p className="text-text text-lg leading-relaxed max-w-3xl">
//             Here are the details for{" "}
//             <span className="font-semibold">{title}</span> in{" "}
//             <span className="font-semibold">
//               {subSlug?.replace(/-/g, " ")}
//             </span>{" "}
//             track of{" "}
//             <span className="font-semibold">
//               {slug?.replace(/-/g, " ")}
//             </span>
//             . Dive into the latest technologies and frameworks shaping the
//             future of development.
//           </p>
//         </div>

//         {/* === 🧭 ROADMAP SECTION === */}
//         {!loading && roadmaps.length > 0 && (
//           <section className="mt-20 max-w-6xl mx-auto">
//             <motion.h2
//               className="text-3xl font-semibold text-secondary text-center mb-12"
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6 }}
//             >
//               🚀 Career Roadmap
//             </motion.h2>

//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//               {roadmaps.map((roadmap) => (
//                 <motion.div
//                   key={roadmap.roadmapId}
//                   whileHover={{ scale: 1.02 }}
//                   transition={{ type: "spring", stiffness: 250 }}
//                   className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl border border-primary/20 shadow-lg p-6"
//                 >
//                   <h3 className="text-2xl font-semibold mb-3 text-secondary">
//                     {roadmap.title}
//                   </h3>
//                   <p className="text-gray-600 mb-4">{roadmap.description}</p>

//                   <div className="space-y-3">
//                     {roadmap.roadmapSteps?.map((step, index) => (
//                       <div
//                         key={step.roadmapStepId}
//                         className={`bg-white/60 rounded-lg p-4 cursor-pointer border transition-all ${
//                           expanded === step.roadmapStepId
//                             ? "border-primary"
//                             : "border-transparent"
//                         }`}
//                         onClick={() =>
//                           setExpanded(
//                             expanded === step.roadmapStepId
//                               ? null
//                               : step.roadmapStepId
//                           )
//                         }
//                       >
//                         <div className="flex justify-between items-center">
//                           <h4 className="font-medium text-lg text-secondary">
//                             {index + 1}. {step.stepTitle}
//                           </h4>
//                           <ChevronDown
//                             className={`text-primary transition-transform duration-300 ${
//                               expanded === step.roadmapStepId
//                                 ? "rotate-180"
//                                 : ""
//                             }`}
//                           />
//                         </div>
//                         {expanded === step.roadmapStepId && (
//                           <p className="text-gray-700 mt-2">
//                             {step.stepDescription}
//                           </p>
//                         )}
//                       </div>
//                     ))}
//                   </div>
//                 </motion.div>
//               ))}
//             </div>
//           </section>
//         )}

//         {/* === VIDEO + DESCRIPTION === */}
//         <div className="mt-16 flex flex-col md:flex-row items-start gap-10 max-w-6xl mx-auto">
//           {/* Video Card */}
//           <div
//             className="flex-1 w-full min-h-[220px] sm:min-h-[280px] md:min-h-[400px] relative rounded-2xl overflow-hidden shadow-xl bg-gradient-to-r from-primary-light to-white group cursor-pointer"
//             onClick={openVideo}
//           >
//             <div className="absolute inset-0 flex items-center justify-center z-10">
//               <div className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   viewBox="0 0 24 24"
//                   fill="currentColor"
//                   className="w-10 h-10 text-primary"
//                 >
//                   <path d="M8 5v14l11-7z" />
//                 </svg>
//               </div>
//             </div>
//           </div>

//           {/* Description */}
//           <div className="flex-1 bg-white shadow-md rounded-2xl p-8 border border-primary/20">
//             <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-secondary">
//               About This Topic
//             </h2>
//             <p className="text-base md:text-lg text-text leading-relaxed mb-4">
//               This section dives deep into the{" "}
//               <span className="font-semibold">{title}</span> area of{" "}
//               {subSlug?.replace(/-/g, " ")}. You’ll explore advanced tools,
//               frameworks, and techniques that make modern web development
//               efficient, accessible, and scalable.
//             </p>
//             <p className="text-base md:text-lg text-text leading-relaxed">
//               Expect hands-on projects, coding challenges, and real-world case
//               studies. By the end, you’ll be confident in building and deploying
//               production-ready applications that perform beautifully across all
//               platforms.
//             </p>
//           </div>
//         </div>
//       </main>

//       {/* === VIDEO MODAL === */}
//       {isOpen && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
//           <div className="relative w-full max-w-4xl bg-black rounded-2xl overflow-hidden shadow-2xl">
//             {/* Close Button */}
//             <button
//               onClick={closeVideo}
//               className="absolute top-3 right-3 z-10 text-white bg-white/10 hover:bg-white/20 rounded-full p-2 transition"
//             >
//               <svg
//                 className="w-6 h-6"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M6 18L18 6M6 6l12 12"
//                 />
//               </svg>
//             </button>

//             {/* Video Frame */}
//             <div className="relative pt-[56.25%]">
//               <iframe
//                 className="absolute inset-0 w-full h-full"
//                 src={`https://www.youtube.com/embed/dQw4w9WgXcQ`}
//                 title={`${title} video`}
//                 frameBorder="0"
//                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                 allowFullScreen
//               />
//             </div>
//           </div>
//         </div>
//       )}

//       {/* === INTERVIEW QUESTIONS SECTION === */}
//       <QuestionsList
//         apiUrl="http://techtrack.runasp.net/api/InterviewQuestion"
//         limit={10}
//         showSearch={true}
//         showFilters={true}
//       />
//     </div>
//   );
// }