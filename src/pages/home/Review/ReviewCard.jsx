import React from "react";

function ReviewCard({ image, name, role, text, rating }) {
  return (
    <div className="bg-white rounded-2xl shadow-[0_8px_24px_rgba(0,0,0,0.08)] hover:shadow-[0_12px_30px_rgba(0,0,0,0.12)] transition-all duration-300 p-6 w-[320px] flex-shrink-0 flex flex-col justify-between text-left border border-gray-100">

      <div className="flex items-center justify-between mb-4">
        <div className="flex gap-1 text-yellow-400 text-lg">
          {Array(rating || 5)
            .fill(0)
            .map((_, i) => (
              <span key={i}>★</span>
            ))}
        </div>
        <div className="bg-blue-600 text-white text-sm font-semibold w-8 h-8 rounded-full flex items-center justify-center shadow-md">
          {rating || "5"}
        </div>
      </div>


      <p className="text-gray-700 text-sm leading-relaxed mb-5 italic">
        “{text}”
      </p>


      <div className="flex items-center gap-3 mt-auto border-t border-gray-100 pt-3">
        <img
          src={image}
          alt={name}
          className="w-11 h-11 rounded-full object-cover border-2 border-blue-500 shadow-sm"
        />
        <div>
          <h3 className="text-gray-900 font-semibold text-base">{name}</h3>
          <p className="text-gray-500 text-sm">{role}</p>
        </div>
      </div>
    </div>
  );
}

export default ReviewCard;
