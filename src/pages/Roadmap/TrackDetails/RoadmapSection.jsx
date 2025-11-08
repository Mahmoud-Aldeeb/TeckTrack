// import React from "react";
// import Loader from "../../../componants/ui/Loader";

// const RoadmapSection = ({ roadmap, loading, error, displayTitle }) => {
//     if (loading) {
//         return <Loader />;
//     }

//     if (error) {
//         return <ErrorMessage message={error} />;
//     }

//     if (!roadmap) {
//         return (
//             <section className="bg-gradient-to-b from-white to-primary-light py-20 px-6 mt-10 rounded-2xl shadow-lg">
//                 <div className="max-w-6xl mx-auto text-center">
//                     <p className="text-gray-500 text-lg">No roadmap available for this track.</p>
//                 </div>
//             </section>
//         );
//     }

//     return (
//         <section className="bg-gradient-to-b from-white to-primary-light py-20 px-6 mt-10 rounded-2xl shadow-lg">
//             <div className="max-w-6xl mx-auto text-center">
//                 <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
//                     {displayTitle}
//                 </h2>
//                 <p className="text-lg text-text max-w-3xl mx-auto mb-12">
//                     {roadmap.description}
//                 </p>

//                 <div className="relative border-l-4 border-primary max-w-4xl mx-auto">
//                     {roadmap.roadmapSteps?.length > 0 ? (
//                         roadmap.roadmapSteps
//                             .sort((a, b) => a.stepOrder - b.stepOrder)
//                             .map((step, index) => (
//                                 <RoadmapStep
//                                     key={step.roadmapStepId}
//                                     step={step}
//                                     index={index}
//                                 />
//                             ))
//                     ) : (
//                         <p className="text-gray-500">No steps available for this roadmap.</p>
//                     )}
//                 </div>
//             </div>
//         </section>
//     );
// };


// const RoadmapStep = ({ step, index }) => (
//     <div className="mb-10 ml-6 group relative">
//         <div className="absolute -left-3.5 w-7 h-7 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm group-hover:scale-110 transition-transform shadow-md">
//             {index + 1}
//         </div>
//         <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 border border-primary/20">
//             <h3 className="text-2xl font-semibold text-secondary mb-2">
//                 {step.stepTitle}
//             </h3>
//             <p className="text-gray-700 leading-relaxed">
//                 {step.stepDescription}
//             </p>
//         </div>
//     </div>
// );

// export default RoadmapSection;





// components/RoadmapFinalWithArcs.jsx

import React from 'react';
// import cup from '../../../assets/image/cup.png '
// 1. بيانات خريطة الطريق (Data) - تم الحفاظ على المواقع
// ==========================================================

const roadmapData = [
    { id: 1, title: "What is backend development?", color: "bg-orange-500", x: "left-[35%]", y: "top-[10%]" },
    { id: 2, title: "HTTP & REST basics", color: "bg-yellow-500", x: "left-[70%]", y: "top-[20%]" },
    { id: 3, title: "Request/response cycle", color: "bg-blue-500", x: "left-[15%]", y: "top-[30%]" },
    { id: 4, title: "Basic routing concepts", color: "bg-red-500", x: "left-[20%]", y: "top-[50%]" },
    { id: 5, title: "Introduction to server-side programming", color: "bg-purple-600", x: "left-[65%]", y: "top-[50%]" },
    { id: 6, title: "Environment setup & CLI basics", color: "bg-green-500", x: "left-[60%]", y: "top-[70%]" },
    { id: 7, title: "JSON & data formats", color: "bg-red-400", x: "left-[25%]", y: "top-[80%]" },
];

// ==========================================================
// 2. مكون الكأس والمنصة (جاهز كنظام SVG) - بدون تغيير
// ==========================================================

// const TrophyAndPodiumIcon = () => (
//     <svg
//         xmlns="http://www.w3.org/2000/svg"
//         viewBox="0 0 100 100"
//         className="w-24 h-24"
//     >
//         <rect x="20" y="85" width="60" height="10" rx="3" className="fill-blue-500" />
//         <rect x="30" y="75" width="40" height="10" rx="2" className="fill-blue-400" />
//         <path
//             d="M60 30h-5c0-10-7-15-15-15V10h-5v5c-8 0-15 5-15 15H40v-5h-5v5h-5c0 10 7 15 15 15V75h10V45c8 0 15-5 15-15zM50 20c5 0 8 3 8 10h-16c0-7 3-10 8-10z"
//             className="fill-yellow-500"
//         />
//         <path d="M60 35 Q 70 30, 70 45 T 60 55" fill="none" stroke="#f59e0b" strokeWidth="2" />
//         <path d="M40 35 Q 30 30, 30 45 T 40 55" fill="none" stroke="#f59e0b" strokeWidth="2" />
//         <text x="50" y="84" className="text-2xl font-bold fill-white" textAnchor="middle">1</text>
//     </svg>
// );


// ==========================================================
// 3. مكون العقدة (Node Component) - بدون تغيير
// ==========================================================

const RoadmapNode = ({ title, color, x, y }) => {
    const nodeClasses = `absolute p-2 rounded-lg text-white text-sm font-semibold whitespace-nowrap shadow-xl transition-transform hover:scale-[1.05] ${color} ${x} ${y}`;
    return (
        <div className={nodeClasses} style={{ transform: 'translate(-50%, -50%)' }}>
            {title}
        </div>
    );
};


// ==========================================================
// 4. المكون الرئيسي (Roadmap) - تحديث مسارات الـ SVG
// ==========================================================

const RoadmapSection = () => {

    // نقاط المسار الرئيسية (بكسل تقريبي)
    const p = {
        start: [350, 100],
        n1: [700, 100],
        n2: [700, 300],
        n3: [150, 300],
        n4: [150, 500],
        n5: [650, 500],
        n6: [650, 700],
        n7: [250, 700],
        end: [250, 850], // نهاية المسار قبل الكأس
    };

    // نصف قطر الانحناء (ربع الدائرة)
    const r = 30;

    // المسار الكلي باستخدام L (خط مستقيم) و A (قوس دائري)
    const SVG_PATH_D = `
    M ${p.start[0]} ${p.start[1]} 
    L ${p.n1[0] - r} ${p.n1[1]} 
    A ${r} ${r} 0 0 1 ${p.n1[0]} ${p.n1[1] + r}
    L ${p.n2[0]} ${p.n2[1] - r} 
    A ${r} ${r} 0 0 1 ${p.n2[0] - r} ${p.n2[1]}
    L ${p.n3[0] + r} ${p.n3[1]}
    A ${r} ${r} 0 0 0 ${p.n3[0]} ${p.n3[1] + r}
    L ${p.n4[0]} ${p.n4[1] - r}
    A ${r} ${r} 0 0 1 ${p.n4[0] + r} ${p.n4[1]}
    L ${p.n5[0] - r} ${p.n5[1]}
    A ${r} ${r} 0 0 1 ${p.n5[0]} ${p.n5[1] + r}
    L ${p.n6[0]} ${p.n6[1] - r}
    A ${r} ${r} 0 0 1 ${p.n6[0] - r} ${p.n6[1]}
    L ${p.n7[0] + r} ${p.n7[1]}
    A ${r} ${r} 0 0 0 ${p.n7[0]} ${p.n7[1] + r}
    L ${p.end[0]} ${p.end[1]}
  `;

    // تقسيم المسار للألوان - نستخدم نفس النقاط لإنشاء أجزاء منفصلة
    const pathSegments = [
        // 1. برتقالي
        { d: `M ${p.start[0]} ${p.start[1]} L ${p.n1[0] - r} ${p.n1[1]} A ${r} ${r} 0 0 1 ${p.n1[0]} ${p.n1[1] + r}`, stroke: "#f97316" },
        // 2. أصفر
        { d: `M ${p.n1[0]} ${p.n1[1] + r} L ${p.n2[0]} ${p.n2[1] - r} A ${r} ${r} 0 0 1 ${p.n2[0] - r} ${p.n2[1]}`, stroke: "#f59e0b" },
        // 3. أزرق
        { d: `M ${p.n2[0] - r} ${p.n2[1]} L ${p.n3[0] + r} ${p.n3[1]} A ${r} ${r} 0 0 0 ${p.n3[0]} ${p.n3[1] + r}`, stroke: "#3b82f6" },
        // 4. أحمر
        { d: `M ${p.n3[0]} ${p.n3[1] + r} L ${p.n4[0]} ${p.n4[1] - r} A ${r} ${r} 0 0 1 ${p.n4[0] + r} ${p.n4[1]}`, stroke: "#ef4444" },
        // 5. بنفسجي
        { d: `M ${p.n4[0] + r} ${p.n4[1]} L ${p.n5[0] - r} ${p.n5[1]} A ${r} ${r} 0 0 1 ${p.n5[0]} ${p.n5[1] + r}`, stroke: "#9333ea" },
        // 6. أخضر
        { d: `M ${p.n5[0]} ${p.n5[1] + r} L ${p.n6[0]} ${p.n6[1] - r} A ${r} ${r} 0 0 1 ${p.n6[0] - r} ${p.n6[1]}`, stroke: "#22c55e" },
        // 7. أحمر/وردي
        { d: `M ${p.n6[0] - r} ${p.n6[1]} L ${p.n7[0] + r} ${p.n7[1]} A ${r} ${r} 0 0 0 ${p.n7[0]} ${p.n7[1] + r}`, stroke: "#f87171" },
        // 8. سماوي (للكأس)
        { d: `M ${p.n7[0]} ${p.n7[1] + r} L ${p.end[0]} ${p.end[1]}`, stroke: "#06b6d4" },
    ];


    return (
        <div className="relative w-full max-w-[1000px] h-[950px] mx-auto my-10 bg-white">

            {/* طبقة الـ SVG للمسار */}
            <svg
                className="absolute inset-0"
                viewBox="0 0 1000 950"
                xmlns="http://www.w3.org/2000/svg"
            >
                {/* الخط الكامل الخلفي (الرمادي الفاتح) */}
                <path
                    d={SVG_PATH_D}
                    fill="none"
                    stroke="#e5e7eb"
                    strokeWidth="10"
                    strokeLinejoin="round" // لتحسين مظهر الزوايا
                    strokeLinecap="round"
                />

                {/* الخطوط الملونة */}
                {pathSegments.map((segment, index) => (
                    <path
                        key={index}
                        d={segment.d}
                        fill="none"
                        stroke={segment.stroke}
                        strokeWidth="8"
                        strokeLinejoin="round"
                        strokeLinecap="round"
                    />
                ))}

            </svg>

            {/* طبقة Nodes */}
            {roadmapData.map((node) => (
                <RoadmapNode
                    key={node.id}
                    title={node.title}
                    color={node.color}
                    x={node.x}
                    y={node.y}
                />
            ))}

            {/* الكأس والمنصة في النهاية */}
            <div className="absolute left-[25%] bottom-[5%] translate-x-[-50%]">
                {/* <TrophyAndPodiumIcon /> */}

                <img src="/assets/image/cup.png" alt="" />
            </div>

        </div>
    );
};

export default RoadmapSection;