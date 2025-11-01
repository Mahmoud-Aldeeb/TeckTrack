export const Card = ({ title, description, location, stacks, image, bgColor }) => {
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