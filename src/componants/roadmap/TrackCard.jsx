// src/components/TrackCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import PrimaryButton from '../common/Button';

const TrackCard = ({ title, desc, img }) => {
    const slug = title.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-');

    return (
        <div className={`
            relative overflow-hidden rounded-2xl 
             
            h-[517px] 
            w-[400px] max-w-sm sm:max-w-md md:max-w-lg mx-auto
            group
        `}>
            {/* الصورة الخلفية */}
            <div className="absolute inset-0">
                <img
                    src={img}
                    alt={title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                />
            </div>

            {/* طبقة داكنة فوق الصورة */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/20"></div>

            {/* المحتوى */}
            <div className="relative z-10 flex flex-col justify-between h-full py-8 px-4 text-white">
                {/* العنوان */}
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 md:mb-3 tracking-tight">
                    {title}:
                </h3>

                {/* الوصف */}
                <p className="text-xs sm:text-sm md:text-base leading-relaxed mb-4 md:mb-6 opacity-90 line-clamp-3 md:line-clamp-4">
                    {desc}
                </p>

                {/* الزر */}
                <PrimaryButton
                     to={`/trackdetails/${slug}`} 
                    className="self-end"
                >
                    View Details
                </PrimaryButton>
            </div>
        </div>
    );
};

export default TrackCard;