import React, { useEffect, useState, useMemo } from "react";
import { motion } from "framer-motion";
import Card from "../../../componants/ui/Card";
import { useApi } from "../../../context/ApiContext";
import Loader from "../../../componants/ui/Loader";
import ErrorMessage from "../../../componants/ui/Error";

const AnimationCard = () => {
  const { companies = [], CompanyTechnologies = [], loading, error } = useApi();
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 1025);

  useEffect(() => {
    const handleResize = () => setIsLargeScreen(window.innerWidth > 1025);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const safeCompanies = Array.isArray(companies) ? companies : [];
  const safeTechs = Array.isArray(CompanyTechnologies) ? CompanyTechnologies : [];

  const getCompanyTechs = useMemo(() => {
    const techMap = new Map();
    safeTechs.forEach(t => {
      if (!t.companyId || !t.notes?.trim()) return;
      if (!techMap.has(t.companyId)) techMap.set(t.companyId, []);
      techMap.get(t.companyId).push(t.notes.trim());
    });
    return (companyId) => techMap.get(companyId) || [];
  }, [safeTechs]);

  const validCompanies = safeCompanies.slice(0, 6);

  const leftCards = useMemo(() =>
    validCompanies
      .filter((_, i) => i < 3)
      .map(c => ({ company: c, techs: getCompanyTechs(c.companyId) })),
    [validCompanies, getCompanyTechs]
  );

  const rightCards = useMemo(() =>
    validCompanies
      .filter((_, i) => i >= 3)
      .map(c => ({ company: c, techs: getCompanyTechs(c.companyId) })),
    [validCompanies, getCompanyTechs]
  );

  const mobileCards = useMemo(() =>
    validCompanies
      .filter((_, i) => i < 3)
      .map(c => ({ company: c, techs: getCompanyTechs(c.companyId) })),
    [validCompanies, getCompanyTechs]
  );

  if (loading) return <Loader />;
  if (error) return <ErrorMessage message={error} />;

  const animationProps = {
    animate: { y: isLargeScreen ? ["80%", "-80%"] : ["100%", "-100%"] },
    transition: { duration: 22, repeat: Infinity, ease: "linear" }
  };

  const oppositeAnimation = {
    animate: { y: ["-80%", "80%"] },
    transition: { duration: 22, repeat: Infinity, ease: "linear" }
  };

  return (
    <div className="w-[calc(100%-30px)] sm:w-1/2 flex justify-center items-center gap-3 h-[580px] overflow-hidden">
      {isLargeScreen ? (
        <>
          {leftCards.length > 0 && (
            <motion.div className="flex flex-col justify-center items-center gap-3" {...animationProps}>
              <div className="flex flex-col gap-3">
                {leftCards.map(({ company, techs }) => (
                  <Card key={company.companyId} company={company} companyTechs={techs} />
                ))}
              </div>
            </motion.div>
          )}
          {rightCards.length > 0 && (
            <motion.div className="flex flex-col justify-center items-center gap-3" {...oppositeAnimation}>
              <div className="flex flex-col gap-3">
                {rightCards.map(({ company, techs }) => (
                  <Card key={company.companyId} company={company} companyTechs={techs} />
                ))}
              </div>
            </motion.div>
          )}
        </>
      ) : (
        mobileCards.length > 0 && (
          <motion.div className="flex flex-col justify-center items-center gap-3" {...animationProps}>
            <div className="flex flex-col gap-6">
              {mobileCards.map(({ company, techs }) => (
                <Card key={company.companyId} company={company} companyTechs={techs} />
              ))}
            </div>
          </motion.div>
        )
      )}
    </div>
  );
};

export default React.memo(AnimationCard);