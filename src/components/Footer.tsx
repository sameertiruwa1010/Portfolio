// src/components/Footer.tsx

import React, { useEffect, useState } from "react";

const Footer: React.FC = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTopBtn(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {/* =========================================================
          BACK TO TOP BUTTON
      ========================================================== */}

      <button
        onClick={scrollToTop}
        className={`fixed bottom-5 right-5 z-[9999] p-3
          bg-green-600 text-white
          border-2 border-green-600
          transition-all duration-300
          hover:bg-green-700
          hover:border-green-700
          focus:ring-4 focus:ring-green-300
          dark:focus:ring-green-800
          ${
            showTopBtn
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-20 pointer-events-none"
          }
        `}
        aria-label="Back to top"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 15l7-7 7 7"
          />
        </svg>
      </button>

      {/* =========================================================
          FOOTER
      ========================================================== */}

      <footer className="bg-white dark:bg-black border-t border-gray-200 dark:border-gray-800">

        <div className="max-w-screen-xl mx-auto px-4 py-8">

          <div className="md:flex md:items-center md:justify-between">

            {/* LEFT SIDE */}

            <div>

              <a
                href="#home"
                className="text-xl font-bold text-gray-900 dark:text-white hover:text-green-500 transition-colors"
              >
                Nyapu<span className="text-green-500">0x</span>
              </a>

              <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                DevOps • Cloud • Linux • Automation
              </p>

            </div>


            {/* RIGHT SIDE LINKS */}

            <ul className="flex flex-wrap items-center gap-6 mt-6 md:mt-0 text-sm text-gray-500 dark:text-gray-400">

              <li>
                <a
                  href="#home"
                  className="hover:text-green-500 transition-colors"
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  href="#services"
                  className="hover:text-green-500 transition-colors"
                >
                  Services
                </a>
              </li>

              <li>
                <a
                  href="#about"
                  className="hover:text-green-500 transition-colors"
                >
                  About
                </a>
              </li>

              <li>
                <a
                  href="#contact"
                  className="hover:text-green-500 transition-colors"
                >
                  Contact
                </a>
              </li>

            </ul>

          </div>


          {/* DIVIDER */}

          <div className="my-6 border-t border-gray-200 dark:border-gray-800"></div>


          {/* BOTTOM */}

          <div className="sm:flex sm:items-center sm:justify-between">

            <span className="text-sm text-gray-500 dark:text-gray-400">

              © {new Date().getFullYear()}{" "}

              <span className="text-gray-900 dark:text-white font-medium">
                Nyapu0x
              </span>

              . All Rights Reserved.

            </span>


            {/* SOCIAL LINKS */}

            <div className="flex items-center gap-5 mt-4 sm:mt-0">

              {/* GITHUB */}

              <a
                href="https://github.com/YOUR_GITHUB_USERNAME"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-gray-500 hover:text-green-500 dark:text-gray-400 transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 2C6.477 2 2 6.477 2 12c0 4.419 2.865 8.167 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.866-.014-1.699-2.782.604-3.369-1.341-3.369-1.341-.455-1.157-1.11-1.465-1.11-1.465-.908-.62.069-.608.069-.608 1.004.071 1.532 1.031 1.532 1.031.892 1.529 2.341 1.087 2.91.831.091-.646.349-1.087.635-1.337-2.221-.253-4.555-1.111-4.555-4.944 0-1.092.39-1.986 1.029-2.686-.103-.253-.446-1.272.098-2.65 0 0 .84-.269 2.75 1.026A9.564 9.564 0 0112 6.828a9.56 9.56 0 012.504.337c1.909-1.295 2.748-1.026 2.748-1.026.546 1.378.203 2.397.1 2.65.64.7 1.028 1.594 1.028 2.686 0 3.842-2.337 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.337-.012 2.416-.012 2.744 0 .267.18.578.688.48A10.002 10.002 0 0022 12c0-5.523-4.477-10-10-10z"
                  />
                </svg>
              </a>


              {/* LINKEDIN */}

              <a
                href="https://www.linkedin.com/in/YOUR_LINKEDIN_USERNAME"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-gray-500 hover:text-green-500 dark:text-gray-400 transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 3A2 2 0 0121 5v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14zM8.34 17.34V9.67H5.79v7.67h2.55zM7.07 8.62c.82 0 1.32-.54 1.32-1.22-.02-.7-.5-1.22-1.3-1.22-.8 0-1.32.52-1.32 1.22 0 .68.5 1.22 1.28 1.22h.02zm4.37 8.72v-4.28c0-.23.02-.46.09-.62.18-.46.6-.93 1.31-.93.93 0 1.3.7 1.3 1.74v4.09h2.55v-4.39c0-2.35-1.25-3.44-2.92-3.44-1.35 0-1.95.74-2.29 1.26h.02V9.67H8.95c.03.72 0 7.67 0 7.67h2.49z" />
                </svg>
              </a>


              {/* EMAIL */}

              <a
                href="mailto:YOUR_EMAIL@example.com"
                aria-label="Email"
                className="text-gray-500 hover:text-green-500 dark:text-gray-400 transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l9 6 9-6M5 6h14a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2z"
                  />
                </svg>
              </a>

            </div>

          </div>

        </div>

      </footer>
    </>
  );
};

export default Footer;