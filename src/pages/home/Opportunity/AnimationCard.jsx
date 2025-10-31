import { motion } from "framer-motion";
import { useState, useEffect } from "react";

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

const Card = ({ title, description, location, stacks, image, bgColor }) => {
  return (
    <div
      className="border-2 border-black rounded-3xl py-8 px-3 xl:p-8 flex flex-col w- md:w-[300px] xl:w-[250px] 2xl:w-[350px] justify-center items-center"
      style={{ backgroundColor: bgColor }}
    >
      <img src={image} alt="Company photo" className="w-1/2 h-1/2 object-contain" />
      <p className="titleBrand text-lg mt-3 font-[500]">{title}</p>
      <div className="flex justify-center items-center bg-[#CDDAFE] mt-2 px-3 py-1 rounded-full">
        <p>{location}</p>
      </div>
      <div className="contentCard my-6">
        <p className="text-[14px] font-[400] leading-[150%]">{description}</p>
      </div>
      <div className="stackCompany flex justify-center items-center gap-2.5 ">
        {stacks.slice(0, 2).map((stack, index) => (
          <div
            key={index}
            className="stack w-fit px-3 py-2 bg-white flex gap-1 rounded-full"
          >
            <p>{stack}</p>
          </div>
        ))}
        {stacks.length > 2 && (
          <div className="stack w-fit px-3 py-2 bg-white flex gap-1 rounded-full">
            <p>+{stacks.length - 2}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AnimationCard;
