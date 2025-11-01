import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Card } from "../../../componants/ui/Card";

const AnimationCard = () => {
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 1025);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth > 1025);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const fakeData = [
    {
      id: 1,
      title: "Thndr",
      description:
        "Thndr is a digital investment platform that is designed to simplify investing...",
      location: "1 Location",
      stacks: ["Redis", "React", "Node.js", "Node.js", "Node.js"],
      bgColor: "#ffff00",
      image: "src/assets/image/LOGO-Yellow 2.png",
    },
    {
      id: 2,
      title: "Payrails",
      description:
        "Payrails is a payment operating system for global enterprises that want to effectively manage all aspects of...",
      location: "2 Locations",
      stacks: ["MongoDB", "Express", "Vue.js", "Vue.js"],
      bgColor: "#5757E8",
      image: "src/assets/image/LOGO-Yellow 3.png",
    },
    {
      id: 3,
      title: "Pemo",
      description:
        "The smartest company cards that automate expenses for MENA businesses. We help businesses...",
      location: "2 Locations",
      stacks: [
        "Firebase",
        "React",
        "Tailwind",
        "Node.js",
        "Vue.js",
        "Node.js",
        "Vue.js",
      ],
      bgColor: "#D2F0E4",
      image: "src/assets/image/LOGO-Yellow 3.png",
    },
  ];

  return (
    <>
      {isLargeScreen ? (
        <div className="w-[calc(100%-30px)] sm:w-1/2 flex justify-center items-center gap-3 h-[580px] overflow-y-hidden">
          <motion.div
            className="left flex flex-col justify-center items-center gap-3"
            animate={{ y: ["80%", "-80%"] }}
            transition={{
              duration: 22,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <div className="flex flex-col gap-3">
              {fakeData.map((item) => (
                <Card
                  key={item.id}
                  title={item.title}
                  description={item.description}
                  location={item.location}
                  stacks={item.stacks}
                  image={item.image}
                  bgColor={item.bgColor}
                />
              ))}
            </div>
          </motion.div>

          <motion.div
            className="right flex flex-col justify-center items-center gap-3"
            animate={{ y: ["-80%", "80%"] }}
            transition={{
              duration: 22,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <div className="flex flex-col gap-3">
              {fakeData.map((item) => (
                <Card
                  key={item.id}
                  title={item.title}
                  description={item.description}
                  location={item.location}
                  stacks={item.stacks}
                  image={item.image}
                  bgColor={item.bgColor}
                />
              ))}
            </div>
          </motion.div>
        </div>
      ) : (
        <div className="w-[calc(100%-30px)] sm:w-1/2 flex justify-center items-center gap-3 h-[580px] overflow-y-hidden">
          <motion.div
            className="left flex flex-col justify-center items-center gap-3"
            animate={{ y: ["100%", "-100%"] }}
            transition={{
              duration: 22,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <div className="flex flex-col gap-6">
              {fakeData.map((item) => (
                <Card
                  key={item.id}
                  title={item.title}
                  description={item.description}
                  location={item.location}
                  stacks={item.stacks}
                  image={item.image}
                  bgColor={item.bgColor}
                />
              ))}
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
};

export default AnimationCard;
