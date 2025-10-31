import React from "react";
import { useParams } from "react-router-dom";

export default function SubSubTrackDetails() {
  const { slug, subSlug, subSubSlug } = useParams();

  return (
    <div className="min-h-screen bg-gray-50 py-20 px-6 text-center">
      <h1 className="text-4xl font-bold mb-4">{subSubSlug.replace(/-/g, ' ')}</h1>
      <p className="text-gray-700 text-lg max-w-xl mx-auto">
        Here are the details for {subSubSlug.replace(/-/g, ' ')} in {subSlug.replace(/-/g, ' ')} track of {slug.replace(/-/g, ' ')}.
      </p>
    </div>
  );
}
