"use client";
import React, { useContext } from "react";
import Image from "next/image";
import { ThemeContext } from "./GlobalThemeProvider";

export const Header = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="fixed top-0 w-full z-40">
      <nav className="py-[25px] relative ease-in-out duration-500 mobile-nav max-[768px]:shadow-[0px_0px_10px_rgb(0,0,0,0.1)] max-[768px]:py-[10px] max-[768px]:bg-white max-[768px]:dark:py-[20px] max-[768px]:dark:bg-semidark darkHeaderMobile">
        <div className="container">
          <div className="flex items-center justify-between md:block">
            <div className="justify-between items-center flex w-full">
              <div className="z-50 relative">
                <a href="index.html">
                  <Image
                    width={80}
                    height={80}
                    src={`/assets/img/logo/sudeep_${theme}_logo.png`}
                    className="lg:max-w-[150px] max-w-[90px] dark:hidden"
                    alt=""
                  />
                </a>
              </div>{" "}
              <div>
                <button className="block md:hidden outline-none mobile-menu-button">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
              <div className="hidden md:block">
                <ul className="list-none flex space-x-2 lg:space-x-[30px] items-center">
                  <li
                    className={`${theme == "dark" && "text-white"} home active`}
                  >
                    <a
                      href="#home"
                      className={`font-medium hover:text-custom font-secondary ease-in-out duration-300 inline-block leading-6 p-2`}
                    >
                      Home
                    </a>
                  </li>
                  <li className={`${theme == "dark" && "text-white"} about`}>
                    <a
                      href="#about"
                      className={`font-medium hover:text-custom font-secondary ease-in-out duration-300 inline-block leading-6 p-2`}
                    >
                      About
                    </a>
                  </li>
                  <li
                    className={`${theme == "dark" && "text-white"} portfolio`}
                  >
                    <a
                      href="#portfolio"
                      className={`font-medium hover:text-custom font-secondary ease-in-out duration-300 inline-block leading-6 p-2`}
                    >
                      Portfolio
                    </a>
                  </li>
                  <li className={`${theme == "dark" && "text-white"} service`}>
                    <a
                      href="#service"
                      className={`font-medium hover:text-custom font-secondary ease-in-out duration-300 inline-block leading-6 p-2`}
                    >
                      Service
                    </a>
                  </li>
                  <li className={`${theme == "dark" && "text-white"} blog`}>
                    <a
                      href="#blog"
                      className={`font-medium hover:text-custom font-secondary ease-in-out duration-300 inline-block leading-6 p-2`}
                    >
                      Blog
                    </a>
                  </li>
                  <li className={`${theme == "dark" && "text-white"} contact`}>
                    <a
                      href="#contact"
                      className={`font-medium hover:text-custom font-secondary ease-in-out duration-300 inline-block leading-6 p-2`}
                    >
                      Contact
                    </a>
                  </li>
                  <a
                    href="#"
                    className={`btn-outline-custom relative ${
                      theme == "dark" && "text-white"
                    }`}
                  >
                    Download CV
                  </a>
                </ul>
              </div>
            </div>
          </div>
          <div className="hidden mobile-menu md:hidden">
            <div className="pt-5">
              <ul>
                <li className="home active">
                  <a
                    href="#home"
                    className={`text-base font-medium hover:text-custom font-secondary ease-in-out duration-300 inline-block leading-6 p-2 ${
                      theme == "dark" && "text-white"
                    }`}
                  >
                    Home
                  </a>
                </li>
                <li className="about">
                  <a
                    href="#about"
                    className={`text-base font-medium hover:text-custom font-secondary ease-in-out duration-300 inline-block leading-6 p-2 ${
                      theme == "dark" && "text-white"
                    }`}
                  >
                    About
                  </a>
                </li>
                <li className="portfolio">
                  <a
                    href="#portfolio"
                    className={`text-base font-medium hover:text-custom font-secondary ease-in-out duration-300 inline-block leading-6 p-2 ${
                      theme == "dark" && "text-white"
                    }`}
                  >
                    Portfolio
                  </a>
                </li>
                <li className="service">
                  <a
                    href="#service"
                    className={`text-base font-medium hover:text-custom font-secondary ease-in-out duration-300 inline-block leading-6 p-2 ${
                      theme == "dark" && "text-white"
                    }`}
                  >
                    Service
                  </a>
                </li>
                <li className="blog">
                  <a
                    href="#blog"
                    className={`text-base font-medium hover:text-custom font-secondary ease-in-out duration-300 inline-block leading-6 p-2 ${
                      theme == "dark" && "text-white"
                    }`}
                  >
                    Blog
                  </a>
                </li>
                <li className="contact">
                  <a
                    href="#contact"
                    className={`text-base font-medium hover:text-custom font-secondary ease-in-out duration-300 inline-block leading-6 p-2 ${
                      theme == "dark" && "text-white"
                    }`}
                  >
                    Contact
                  </a>
                </li>
                <a
                  href="#"
                  className={`btn-outline-custom relative ${
                    theme == "dark" && "text-white"
                  }`}
                >
                  Download CV
                </a>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};
