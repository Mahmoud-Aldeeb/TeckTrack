import React ,{ useState } from "react";
import { useTranslation } from "react-i18next";

export default function Nav() {
  const { t, i18n } = useTranslation();
  const [active, setActive] = useState("Home"); // default active link

  const changeLang = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("lang", lang);
    document.body.dir = lang === "ar" ? "rtl" : "ltr"; 
  };

  const links = ["Home", "Roadmaps", "Companies", "Reviews"];

  return (
    <nav className="bg-[var(--color-white)] shadow-sm">
      <div className="container mx-auto flex flex-wrap items-center justify-between py-3 px-6">
        {/* Brand */}
        <a href="#" className="flex items-center gap-2">
          <img src="src/assets/logo1.png" alt="Logo" className="w-11 h-12" />
          <span className="text-[var(--color-secondary)] text-2xl font-bold">
            TechTrack
          </span>
        </a>

        {/* Toggler for small screens */}
        <button
          className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100"
          data-collapse-toggle="navbar-default"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>

        {/* Links */}
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white text-[--color-text]">
            {links.map((link) => (
              <li key={link}>
                <a
                  href="#"
                  onClick={() => setActive(link)}
                  className={`block py-2 px-3 hover:text-[var(--color-primary)] hover:underline ${
                    active === link ? "text-[var(--color-primary)] underline" : ""
                  }`}
                >
                  {t(link)}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Language Buttons */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => changeLang("en")}
            className={`px-3 py-1.5 rounded-full text-sm font-medium border transition-all duration-300 ${
              i18n.language === "en"
                ? "bg-[var(--color-primary)] text-white border-[var(--color-primary)] shadow-sm"
                : "border-gray-300 text-gray-700 hover:bg-gray-100"
            }`}
          >
            EN
          </button>

          <button
            onClick={() => changeLang("ar")}
            className={`px-3 py-1.5 rounded-full text-sm font-medium border transition-all duration-300 ${
              i18n.language === "ar"
                ? "bg-[var(--color-primary)] text-white border-[var(--color-primary)] shadow-sm"
                : "border-gray-300 text-gray-700 hover:bg-gray-100"
            }`}
          >
            AR
          </button>
        </div>

        {/* Sign Up Button */}
        <button className="bg-[var(--color-primary)] text-[var(--color-white)] font-medium text-lg w-40 h-12 rounded-full hover:bg-[var(--color-secondary)] transition-all">
          {t("signup")}
        </button>
      </div>
    </nav>
  );
}