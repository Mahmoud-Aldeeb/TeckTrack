import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Info = () => {
  const { t } = useTranslation();

  return (
    <div className='w-1/2'>
      <p className='bg-primary-light w-64 text-text-primary font-medium rounded-4xl h-10 flex items-center justify-center text-[16px]'>
        {t("Your Tech Journey Starts Here")}
      </p>
      <div className='my-6 flex gap-5 flex-col'>
        <h1 className='text-neutral-800 text-4xl font-bold leading-normal'>
          {t("Explore Your Personalized Tech Career Roadmaps")}
        </h1>
        <p className='text-2xl font-medium leading-normal'>
          {t("Find the perfect learning path for your tech career where each roadmap shows you the key skills to master and the latest technologies used in every track while guiding you through engaging intro videos and real projects so you can confidently prepare for the most common interview questions all in one place.")}
        </p>
      </div>
      <Link to='/' className='bg-primary hover:bg-secondary duration-300 px-4 py-2.5 flex w-52 gap-4 justify-center items-center rounded-3xl text-white'>
        {t("View All Tracks")} <img src="src/assets/arrow-up-right.png" alt="arrow icon" className='w-5 h-5' />
      </Link>
    </div>
  )
}

export default Info;
