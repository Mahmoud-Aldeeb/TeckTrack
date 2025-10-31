import React from "react";
import Tracks from "./AllTrack/Tracks";
import Opportunity from "./Opportunity/Opportunity";
import Reviews from "./Review/Reviews";
import { Helmet } from "react-helmet";
import HeroSection from "./HeroSection/HeroSection";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>TechTrack - Build Your Learning Path</title>
        <meta
          name="description"
          content="Discover the roadmap to learning every specialization in programming and technology."
        />
      </Helmet>
      <div>
        <HeroSection/>
        <Tracks />
        <Opportunity />
        <Reviews />
      </div>
    </>
  );
};

export default Home;
