import React from "react";
import { Link, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function FrontendPage() {
  const { slug, subSlug } = useParams();
  const { t } = useTranslation();

  if (subSlug === "web-development") {
    const webSubTracks = [
      {
        title: t("frontend"),
        desc: "Learn how to build user interfaces and interactive web experiences using modern technologies.",
        details: [
          "Progress through HTML, CSS, JavaScript, frameworks, UI patterns, design systems, and accessibility best practices."
        ],
        tools: ["React", "Tailwind", "TypeScript", "Git"],
        outcome: "Build production-ready web interfaces",
        link: `/trackdetails/${slug}/${subSlug}/frontend`
      },
      {
        title: t("backend"),
        desc: "Build powerful server-side applications and APIs.",
        details: [
          "Learn Node.js, Express, Databases, RESTful APIs, and security best practices."
        ],
        tools: ["Node.js", "Express", "MongoDB", "PostgreSQL"],
        outcome: "Create robust backend services",
        link: `/trackdetails/${slug}/${subSlug}/backend`
      },
      {
        title: t("fullstack"),
        desc: "Combine frontend and backend to build complete web applications.",
        details: [
          "Integrate frontend frameworks with backend services, manage state, and deploy full-stack apps."
        ],
        tools: [
          "React", "Node.js", "Express", "MongoDB", "Git"
        ],
        outcome: "Deliver end-to-end web applications",
        link: `/trackdetails/${slug}/${subSlug}/fullstack`
      },
    ];

    return (
      <div className="min-h-screen bg-gray-50 py-16 px-6">
        <div className="max-w-4xl mx-auto text-center mt-4">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            {t("developerRoadmap")}
          </h1>
          <p className="text-gray-900 text-sm text-center mb-8">
            {t("introText")}
          </p>

          <div className="w-32 h-1 bg-gray-900 mx-auto mb-10"></div>
        </div>

        <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
          {t("webTracks")}
        </h1>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
          {webSubTracks.map((item) => (
            <Link
              key={item.title}
              to={item.link}
              className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition-all duration-300 border hover:-translate-y-1"
            >
              <h2 className="text-xl font-bold text-blue-500 mb-2">{item.title}</h2>
              <p className="text-gray-600 text-sm mb-3">{item.desc}</p>

              {item.details.map((detail, i) => (
                <p key={i} className="text-gray-700 text-xs mb-2">{detail}</p>
              ))}

              <p className="text-gray-900 font-semibold mb-2">
                <div className="text-blue-500">Core Tools:</div> {item.tools.join(", ")}
              </p>

              <p className="text-gray-800 font-medium">
                <div className="text-blue-500">Outcome:</div> {item.outcome}
              </p>
            </Link>
          ))}
        </div>
      </div>
    );
  }

  // باقي الصفحات 
  return (
    <div className="min-h-screen bg-gray-50 py-20 text-center">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">
        {subSlug}
      </h2>

      <p className="text-gray-600">
        {t("moreDetails")}
      </p>
    </div>
  );
}
