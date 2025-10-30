
import React from 'react';
import { Link } from 'react-router-dom';

const PrimaryButton = ({ to, children, className = '', ...props }) => {
    return (
        <Link
            to={to}
            className={`
                bg-primary hover:bg-secondary duration-300 
                px-7 py-3 flex w-fit gap-3 justify-center items-center 
                rounded-3xl text-white font-medium
                ${className}
            `.trim()}
            {...props}
        >
            <span>{children}</span>
            <img
                src="src/assets/arrow-up-right.png"
                alt="arrow icon"
                className="w-5 h-5"
            />
        </Link>
    );
};

export default PrimaryButton;