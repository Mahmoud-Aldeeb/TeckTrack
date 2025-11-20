import React from "react";
import Info from "../../../componants/ui/Info";
import AnimationCard from "./AnimationCard";

const Opportunity = () => {
  return (
    <div className="flex flex-col md:flex-row gap-4 md:gap-8 lg:gap-16 items-center justify-center container mx-auto mt-10 sm:mt-32 mb-10">
      <Info
        head="Unlock Your Career Potential"
        title="Master Technical Interviews with Confidence"
        paragraph="Access hundreds of real interview questions from top tech companies, structured roadmaps, and expert-curated content to help you land your dream job."
        btn="Explore Companies"
        url="/companies"
      />
      <AnimationCard />
    </div>
  );
};

export default React.memo(Opportunity);