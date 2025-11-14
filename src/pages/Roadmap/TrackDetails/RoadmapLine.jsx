const RoadmapLine = () => {

    const tech = [
        "HTML5",
        "CSS3",
        "JavaScript",
        "React",
        "Node.js",
        "Express.js",
        "MongoDB",

        "Python",
        "Django",
        "Docker",

    ];
    const colors = [
        "#FF8F5F",
        "#5FACFF",
        "#9747FF",
        "#3fb91a",
        "#ff5f5f",
        "#53c1e2",
        "#808080",
    ];

    return (
        <section className="w-full py-20 flex flex-col items-center ">
            {Array.from({ length: Math.ceil(tech.length / 2) }).map((_, i) => {
                const leftIndex = i * 2;
                const rightIndex = i * 2 + 1;
                const isEven = i % 2 === 0;
                const color = (index) => index % colors.length;
                return (

                    <div key={i}>
                        {/* الخط مع العنصرين */}
                        <div className="w-[200px] md:w-[450px] lg:w-[700px] xl:w-[900px] flex justify-center items-center relative">
                            {isEven ? (
                                <>
                                    {/* العنصر على اليسار */}
                                    {tech[leftIndex] && (
                                        <div>
                                            <div
                                                className="px-3 py-2 md:px-5 md:py-3 text-md md:text-2xl font-bold text-amber-50 rounded-2xl w-fit absolute top-[-45px] md:top-[-60px] left-[-20px] md:left-[-30px] shadow-xl/10 "
                                                style={{ backgroundColor: colors[color(leftIndex)] }}
                                            >
                                                {tech[leftIndex]}
                                            </div>
                                            <div
                                                className="w-8 h-8 rounded-full"
                                                style={{ backgroundColor: colors[color(leftIndex)] }}
                                            ></div>
                                        </div>
                                    )}

                                    {/* العنصر على اليمين */}
                                    {tech[rightIndex] && (
                                        <div>
                                            <div
                                                className="px-3 py-2 md:px-5 md:py-3 text-md md:text-2xl font-bold text-amber-50 rounded-2xl w-fit absolute top-[-45px] md:top-[-60px] right-[-20px] md:right-[-30px] shadow-xl/10"
                                                style={{ backgroundColor: colors[color(rightIndex)] }}
                                            >
                                                {tech[rightIndex]}
                                            </div>
                                            <div
                                                className="w-8 h-8 rounded-full absolute top-[50%] right-0 transform translate-y-[-50%]"
                                                style={{ backgroundColor: colors[color(rightIndex)] }}
                                            ></div>
                                        </div>
                                    )}
                                </>
                            ) : (
                                <>
                                    {/* العنصر على اليمين */}
                                    {tech[rightIndex] && (
                                        <div>
                                            <div
                                                className="px-3 py-2 md:px-5 md:py-3 text-md md:text-2xl font-bold text-amber-50 rounded-2xl w-fit absolute top-[-45px] md:top-[-60px] left-[-20px] md:left-[-30px] shadow-xl/10"
                                                style={{ backgroundColor: colors[color(rightIndex)] }}
                                            >
                                                {tech[rightIndex]}
                                            </div>
                                            <div
                                                className="w-8 h-8 rounded-full "
                                                style={{ backgroundColor: colors[color(rightIndex)] }}
                                            ></div>
                                        </div>
                                    )}

                                    {/* العنصر على اليسار */}
                                    {tech[leftIndex] && (
                                        <div className="">
                                            <div className="w-0 h-1 my-[14px]"></div>
                                            <div
                                                className="px-3 py-2 md:px-5 md:py-3 text-md md:text-2xl font-bold text-amber-50 rounded-2xl w-fit absolute top-[-45px] md:top-[-60px] right-[-20px] md:right-[-30px] shadow-xl/10"
                                                style={{ backgroundColor: colors[color(leftIndex)] }}
                                            >
                                                {tech[leftIndex]}
                                            </div>
                                            <div
                                                className="w-8 h-8 rounded-full absolute top-[50%] right-0 transform translate-y-[-50%]"
                                                style={{ backgroundColor: colors[color(leftIndex)] }}
                                            ></div>
                                        </div>
                                    )}
                                </>
                            )}

                            {/* الخط الأفقي */}
                            <div
                                className="w-full h-2 md:h-3"
                                style={{
                                    backgroundColor: colors[color(leftIndex)],
                                }}
                            ></div>
                        </div>

                        {/* نصف دايرة بعد كل صف */}
                        {i < Math.ceil(tech.length / 2) - 1 &&
                            (isEven ? (
                                <div className="w-[200px] md:w-[450px] lg:w-[700px] xl:w-[900px] flex justify-end relative z-[-1]">
                                    <div
                                        className="w-20 md:w-60 h-60 rounded-r-full border-[8px]  md:border-[12px] my-[-22px] me-[-50px] md:me-[-110px]"
                                        style={{
                                            borderColor: colors[color(rightIndex)],
                                            borderLeftColor: "transparent",
                                        }}
                                    ></div>
                                </div>
                            ) : (
                                <div className="w-[200px] md:w-[450px] lg:w-[700px] xl:w-[900px] flex justify-start relative z-[-1]">
                                    <div
                                        className="w-20 md:w-60 h-60 rounded-l-full border-[8px]  md:border-[12px] my-[-22px] ms-[-50px] md:ms-[-110px]"
                                        style={{
                                            borderColor: colors[color(rightIndex)],
                                            borderRightColor: "transparent",
                                        }}
                                    ></div>
                                </div>
                            ))}
                    </div>

                );
            })}
            {tech.length % 2 !== 0 ? (
                ((tech.length + 1) / 2) % 2 !== 0 ? (

                    <div className="mt-[-32px]">
                        <div className="w-[200px] md:w-[450px] lg:w-[700px] xl:w-[900px] flex justify-center  items-center relative">
                            <div>
                                <div
                                    className="px-3 py-2 md:px-5 md:py-3 text-md md:text-2xl font-bold text-black rounded-2xl w-fit absolute top-[-45px] md:top-[-60px] left-[-20px] md:left-[-30px]    "
                                    style={{ backgroundColor: "#e6cf00" }}
                                >
                                    {tech[tech.length - 1]}
                                </div>
                                <div
                                    className="w-8 h-8 rounded-full"
                                    style={{ backgroundColor: "#e6cf00" }}
                                ></div>
                            </div>
                            <div
                                className="w-full h-3 md:h-4"
                                style={{
                                    backgroundColor: "#e6cf00",
                                }}
                            ></div>
                        </div>
                        <div className="w-[200px] md:w-[450px] lg:w-[700px] xl:w-[900px] flex justify-center  items-center relative">
                            <img
                                src="/src/assets/image/cup.png"
                                className="absolute right-[-50px] top-[-180px]"
                                alt="Cup Image"
                            />
                        </div>
                    </div>
                ) : (
                    <div className="mt-[-32px]">
                        <div className="w-[200px] md:w-[450px] lg:w-[700px] xl:w-[900px] flex  justify-center  items-center relative">
                            <div>
                                <div
                                    className="px-3 py-2 md:px-5 md:py-3 text-md md:text-2xl font-bold text-black rounded-2xl w-fit absolute top-[-45px] md:top-[-60px] right-[-20px] md:right-[-30px]    "
                                    style={{ backgroundColor: "#e6cf00" }}
                                >
                                    {tech[tech.length - 1]}
                                </div>
                                <div
                                    className="w-8 h-8 rounded-full absolute top-[16px] right-[-0px] transform translate-y-[-50%]"
                                    style={{ backgroundColor: "#e6cf00" }}
                                ></div>
                            </div>
                            <div
                                className="w-full h-3 md:h-4 mb-[-33px]"
                                style={{
                                    backgroundColor: "#e6cf00",
                                }}
                            ></div>
                        </div>
                        <div className="w-[200px] md:w-[450px] lg:w-[700px] xl:w-[900px] flex justify-center  items-center relative">
                            <img
                                src="/src/assets/image/cup.png"
                                className="absolute left-[-50px] top-[-152px]"
                                alt="Cup Image"
                            />
                        </div>
                    </div>
                )
            ) : (tech.length / 2) % 2 !== 0 ? (
                <div className="mt-[-32px]">
                    <div className="w-[200px] md:w-[450px] lg:w-[700px] xl:w-[900px] flex  justify-center  items-center relative">
                        <div>
                            <div
                                className="px-3 py-2 md:px-5 md:py-3 text-md md:text-2xl font-bold text-black rounded-2xl w-fit absolute top-[-45px] md:top-[-60px] right-[-20px] md:right-[-30px]   "
                                style={{ backgroundColor: "#e6cf00" }}
                            >
                                {tech[tech.length - 1]}
                            </div>
                            <div
                                className="w-8 h-8 rounded-full absolute top-[16px] right-[-0px] transform translate-y-[-50%]"
                                style={{ backgroundColor: "#e6cf00" }}
                            ></div>
                        </div>
                    </div>
                    <div className="w-[200px] md:w-[450px] lg:w-[700px] xl:w-[900px] flex justify-end relative z-[-1]">
                        <div
                            className="w-20 md:w-60 h-60 rounded-r-full border-[8px]  md:border-[12px] my-[10px] me-[-50px] md:me-[-110px]"
                            style={{
                                borderColor: "#e6cf00ff",
                                borderLeftColor: "transparent",
                            }}
                        ></div>
                    </div>
                    <div className="w-[200px] md:w-[450px] lg:w-[700px] xl:w-[900px] flex justify-center  items-center relative">
                        <img
                            src="/src/assets/image/cup.png"
                            className="absolute right-[20px] top-[-182px]"
                            alt="Cup Image"
                        />
                    </div>
                </div>
            ) : (
                <div className="mt-[-32px]">
                    <div className="w-[200px] md:w-[450px] lg:w-[700px] xl:w-[900px] flex justify-center  items-center relative">
                        <div>
                            <div
                                className="px-3 py-2 md:px-5 md:py-3 text-md md:text-2xl font-bold text-black rounded-2xl w-fit absolute top-[-45px] md:top-[-60px] left-[-20px] md:left-[-30px]   "
                                style={{ backgroundColor: "#e6cf00" }}
                            >
                                {tech[tech.length - 1]}
                            </div>
                            <div
                                className="w-8 h-8 rounded-full absolute left-0"
                                style={{ backgroundColor: "#e6cf00" }}
                            ></div>
                        </div>
                    </div>
                    <div className="w-[200px] md:w-[450px] lg:w-[700px] xl:w-[900px] flex justify-start relative z-[-1]">
                        <div
                            className="w-20 md:w-60 h-60 rounded-l-full border-[8px]  md:border-[12px] my-[12px] ms-[-50px] md:ms-[-110px]"
                            style={{
                                borderColor: "#e6cf00",
                                borderRightColor: "transparent",
                            }}
                        ></div>
                    </div>
                    <div className="w-[200px] md:w-[450px] lg:w-[700px] xl:w-[900px] flex justify-center  items-center relative">
                        <img
                            src="/src/assets/image/cup.png"
                            className="absolute left-[20px] top-[-150px]"
                            alt="Cup Image"
                        />
                    </div>
                </div>

            )}
        </section>
    );
};

export default RoadmapLine;
