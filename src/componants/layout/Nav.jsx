import React, { useEffect, useState, useMemo, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NavLink, useLocation } from "react-router-dom";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 1024);
  const location = useLocation();
  const activePath = location.pathname;

  const links = useMemo(
    () => [
      { name: "Home", path: "/" },
      { name: "Roadmaps", path: "/roadmap" },
      { name: "Companies", path: "/companies" },
    ],
    []
  );

  useEffect(() => {
    const handleResize = () => setIsLargeScreen(window.innerWidth > 1024);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [activePath]);

  const closeMenu = useCallback(() => setIsOpen(false), []);

  const menuVariants = {
    hidden: { x: "100%", opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { type: "spring", stiffness: 100, damping: 15 } },
    exit: { x: "100%", opacity: 0, transition: { duration: 0.3 } },
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.3 } },
    exit: { opacity: 0, transition: { duration: 0.3 } },
  };

  const getIsActive = (path) => (path === "/" ? activePath === "/" : activePath.startsWith(path));

  return (
    <nav className="bg-white shadow-sm fixed w-full top-0 left-0 z-50">
      <div className="container mx-auto flex flex-wrap items-center justify-between py-3 px-6">
        <NavLink to="/" className="flex items-center gap-2">
          <img
            src="/assets/image/logo1.png"
            alt="TechTrack Logo"
            width={44}
            height={48}
            loading="lazy"
            decoding="async"
            fetchPriority="high"
            className="w-11 h-12 object-contain"
          />
          <span className="text-secondary text-2xl font-bold">TechTrack</span>
        </NavLink>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="inline-flex items-center p-2 text-gray-600 rounded-lg md:hidden hover:bg-gray-100"
          aria-label="Toggle menu"
        >
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              variants={overlayVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={closeMenu}
              className="fixed inset-0 bg-black/55 z-20 md:hidden"
            />
          )}
        </AnimatePresence>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed top-[72px] right-0 w-full bg-white shadow-2xl z-40 flex flex-col items-start ps-10 py-10 space-y-8 text-lg font-medium md:hidden"
            >
              {links.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `relative pb-2 transition-colors ${isActive || getIsActive(link.path) ? "text-primary font-semibold" : "text-gray-700 hover:text-primary"}`
                  }
                  onClick={closeMenu}
                >
                  {link.name}
                </NavLink>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        <div className="hidden md:flex items-center space-x-8">
          {links.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `relative pb-2 transition-colors ${isActive || getIsActive(link.path) ? "text-primary font-semibold after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary" : "text-gray-700 hover:text-primary"}`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        {isLargeScreen && <div className="hidden lg:block lg:w-40 xl:w-60" />}
      </div>
    </nav>
  );
};

export default React.memo(Nav);