import React from "react";
import Tracks from "./AllTrack/Tracks";
import Opportunity from "./Opportunity/Opportunity";
import Reviews from "./Review/Reviews";
import HeroSection from "./HeroSection/HeroSection";
import SEO from "../../componants/ui/SEO";

const Home = () => {
  return (
    <>

      <SEO
        title={"TeckTrack – Tech Companies Directory & Developer Roadmaps in Egypt & Middle East"}
        description={"Complete directory of tech & software companies in Egypt and the Middle East + free step-by-step developer roadmaps (Frontend, Backend, Mobile, DevOps, AI, Cybersecurity…)."}
        url={"https://teck-track.vercel.app"}
      />

      <div>
        <HeroSection />
        <Tracks />
        <Opportunity />
        <Reviews />
      </div>
    </>
  );
};


export default Home;
