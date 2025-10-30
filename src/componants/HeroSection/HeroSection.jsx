import heroImg from "../../assets/home-asstes/bg.png";
import heroVector from "../../assets/home-asstes/Vector.png";
import arrowVector from "../../assets/home-asstes/arrow-up-right.png";

function HeroSection() {
  return (
    <>
      <section
       className="relative w-full h-screen overflow-hidden bg-black flex flex-col items-center justify-center"
      aria-label="Hero section - TechTrack"
    >
      {/* 1) Scrolling background */}
      <style>{`
        @keyframes scroll {
          0% { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(-50%, 0, 0); }
        }

        .animate-scroll {
          animation: scroll 7s linear infinite;
        }

        .hero-bg {
          display: flex;
          width: 200%;
          height: 100%;
          animation: scroll 7s linear infinite;
        }

        .hero-bg img {
          width: 50%;
          height: 100%;
          object-fit: cover;
          display: block;
          margin-right: -1px; /* fixes thin line between images */
        }

        @media (max-width: 640px) {
          .max-w-4xl {
            padding-left: 1rem;
            padding-right: 1rem;
          }
        }
      `}</style>

      {/* Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="hero-bg">
          <img
            src={heroImg}
            alt="tech icons background"
            draggable="false"
          />
          <img
            src={heroImg}
            alt=""
            aria-hidden="true"
            draggable="false"
          />
        </div>
      </div>

        {/* Content — slightly higher now */}
        <div className="relative z-20 max-w-3xl px-6 text-center text-[#333333] mt-2">
          {/* Tag */}
          <div className="mb-8 flex items-center justify-center gap-2 rounded-full bg-blue-600/10 px-6 py-3 text-sm font-medium text-blue-900 border-none shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur-md backdrop-saturate-150 w-fit m-auto">
            <img
              src={heroVector}
              alt="Hero background"
              className="h-auto w-4 object-cover opacity-90"
            />
            Start Your Tech Career
          </div>

          {/* Heading */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-Roboto leading-normal mb-6">
            Discover Your Ultimate Path in Egypt’s Tech World
          </h1>

          {/* Paragraph */}
          <p className="text-sm sm:text-base md:text-lg text-[#000000] font-semibold max-w-3xl mx-auto mb-8 font-Roboto">
            Step into Egypt’s tech world with comprehensive Roadmaps, top
            companies, standout projects, watch intro videos to understand each
            field and learn from renowned developers and Master your career path
            with step by step.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            {/* Primary Button */}
            <a
              href="#startjourney"
              className="inline-flex items-center justify-center gap-3 px-10 py-2 rounded-full bg-linear-to-r from-blue-500 to-indigo-600 text-white font-medium font-[18] shadow-lg transition-all duration-300 hover:brightness-130 focus:outline-none focus:ring-4"
              aria-label="Explore roadmaps"
            >
              Start Your Journey
              <img
                src={arrowVector}
                alt="arrow"
                className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>

            {/* Secondary Button */}
            <a
              href="#companies"
              className="inline-flex items-center justify-center gap-3 px-10 py-2 rounded-full border-3 border-[#1E58F9] text-[#1E58F9] font-medium transition-all duration-300 hover:border-[#1e58f9d3] hover:border-2 hover:text-[#1e58f9b7]"
              aria-label="Watch intro videos"
            >
              Explore Companies
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default HeroSection;
