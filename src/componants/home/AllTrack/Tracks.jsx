
import React from 'react';
import Info from './Info';
import Circles from './Circles';

const Tracks = () => {
    return (
        <section className="w-full py-12 md:py-16 lg:py-20 bg-white my-10">
            <div className="max-w-7xl mx-auto ">
                <div className="flex flex-col lg:flex-row items-center justify-center gap-10 md:gap-16">
                    <Circles />
                    <Info />
                </div>
            </div>
        </section>
    );
};

export default Tracks;