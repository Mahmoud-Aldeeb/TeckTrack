import React, { memo, useMemo } from "react";
import { Linkedin, Github, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = memo(function Footer() {
  const columns = useMemo(
    () => [
      {
        title: "Explore",
        links: [
          { label: "Home", url: "/" },
          { label: "Roadmaps", url: "/roadmap" },
          { label: "Companies", url: "/companies" },
        ],
      },
      {
        title: "TechTrack",
        links: [
          { label: "About Us", url: "#" },
          { label: "Contact", url: "#" },
        ],
      },
      {
        title: "Legal",
        links: [
          { label: "Privacy Policy", url: "#" },
          { label: "Terms of Service", url: "#" },
        ],
      },
    ],
    []
  );

  const socialIcons = useMemo(
    () => [
      { Icon: Linkedin, href: "https://linkedin.com" },
      { Icon: Github, href: "https://github.com" },
      { Icon: Twitter, href: "https://twitter.com" },
    ],
    []
  );

  return (
    <footer className="bg-primary-light pt-12 w-full text-text">
      <div className="container mx-auto flex flex-wrap justify-between gap-8 md:gap-12 lg:gap-16 px-8 max-w-7xl">
        <div className="w-full md:w-1/3 lg:w-1/4 mb-8 md:mb-0">
          <Link to="/" className="flex items-center gap-2 mb-6 inline-block">
            <img
              src="/assets/image/logo2.png"
              alt="TechTrack Logo"
              width={40}
              height={48}
              loading="lazy"
              decoding="async"
              fetchPriority="low"
              className="w-10 h-12 object-contain"
              onError={(e) => {
                e.currentTarget.src = "/assets/image/logo-fallback.png";
              }}
            />
            <span className="text-secondary text-2xl font-bold">TechTrack</span>
          </Link>

          <p className="text-sm leading-7 mb-6 text-text max-w-xs">
            Your all-in-one platform to prepare for technical interviews and land your dream job.
          </p>

          <div className="flex gap-3">
            {socialIcons.map(({ Icon, href }, index) => (
              <a
                key={index}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-primary rounded-full flex items-center justify-center hover:bg-secondary transition-transform hover:scale-110"
                aria-label={`Follow us on ${Icon.displayName || "social media"}`}
              >
                <Icon className="text-white w-5 h-5" />
              </a>
            ))}
          </div>
        </div>

        {columns.map((col, i) => (
          <ul
            key={i}
            className="w-[calc(50%-20px)] sm:w-1/3 md:w-auto list-none mb-8 md:mb-0"
          >
            <li className="font-bold text-secondary mb-5 text-base">
              {col.title}
            </li>
            {col.links.map((link, idx) => (
              <li key={idx}>
                <Link
                  to={link.url}
                  className="text-sm hover:text-primary text-text transition-colors inline-block"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        ))}
      </div>

      <div className="mx-auto bg-primary text-white flex justify-center py-2 mt-16">
        <p className="mb-0 text-center text-sm">
          © 2025 TechTrack
          <span className="font-black text-2xl mx-0.5"> | </span>
          All rights reserved
        </p>
      </div>
    </footer>
  );
});

export default Footer;