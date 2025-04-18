"use client";
import Image from "next/image";
import React, { useContext } from "react";
import { ThemeContext, THEMES } from "../GlobalThemeProvider";

export const Portfolio = () => {
  const { theme } = useContext(ThemeContext);

  const isDark = theme === THEMES.DARK;

  return (
    <section
      className="pt-[113px] md:pt-[185px] pb-[88px] md:pb-[165px] relative"
      id="portfolio"
    >
      <div className="container relative z-10">
        <div className="grid grid-cols-1">
          <div className="text-center max-w-[680px] mx-auto">
            <p className="text-custom text-[20px] md:text-2xl font-medium font-secondary">
              Portfolio
            </p>
            <h3 className={`md:text-[48px] text-[35px] leading-[1.25] mb-[23px] mt-1.5 ${isDark && "text-white"}`}>
              My Amazing Works
            </h3>
            <p className={`text-muted dark:text-darkmuted text-lg leading-[30px] ${isDark && "text-white"}`}>
              Most common methods for designing websites that work well on
              desktop is responsive and adaptive design
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1">
          <div className="md:pt-[78px] pt-[53px] pb-[46px] md:pb-[56px]">
            <ul
              className="flex items-center gap-4 flex-wrap lg:gap-[50px] justify-center"
              id="menu-filter"
            >
              <li className="shrink-0">
                <a
                  href="#"
                  className="hover:text-custom active text-base duration-300"
                  data-filter="*"
                >
                  All
                </a>
              </li>
              <li className="shrink-0">
                <a
                  href="#"
                  className={`${isDark && "text-white"} hover:text-custom text-base duration-300`}
                  data-filter=".youtube"
                >
                  Youtube
                </a>
              </li>
              <li className="shrink-0">
                <a
                  href="#"
                  className={`${isDark && "text-white"} hover:text-custom text-base duration-300`}
                  data-filter=".vimeo"
                >
                  Vimeo
                </a>
              </li>
              <li className="shrink-0">
                <a
                  href="#"
                  className={`${isDark && "text-white"} hover:text-custom text-base duration-300`}
                  data-filter=".soundcloud"
                >
                  Soundcloud
                </a>
              </li>
              <li className="shrink-0">
                <a
                  href="#"
                  className={`${isDark && "text-white"} hover:text-custom text-base duration-300`}
                  data-filter=".popup"
                >
                  Popup
                </a>
              </li>
              <li className="shrink-0">
                <a
                  href="#"
                  className={`${isDark && "text-white"} hover:text-custom text-base duration-300`}
                  data-filter=".detail"
                >
                  Detail
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="dizme_tm_portfolio_titles"></div>
        <div
          className="md:flex work-filter wow fadeInUp"
          data-wow-duration="1s"
        >
          <div className="lg:w-1/3 md:w-1/3 p-3 youtube">
            <div className="rounded-xl overflow-hidden group relative">
              <div
                className="main-img-box"
                data-title="Mockup Shape"
                data-category="Youtube"
              >
                <a
                  className="img-zoom relative"
                  href="assets/img/portfolio/1.jpg"
                >
                  <div className="main group-hover:scale-110 overflow-hidden">
                    <Image
                      src="/assets/img/portfolio/1.jpg"
                      className="object-cover w-full h-full"
                      alt=""
                      width={800}
                      height={800}
                    />
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 md:w-1/3 p-3 vimeo">
            <div className="rounded-xl overflow-hidden group relative">
              <div
                className="main-img-box"
                data-title="Ave Bottle"
                data-category="Vimeo"
              >
                <a
                  className="img-zoom relative"
                  href="assets/img/portfolio/2.jpg"
                >
                  <div className="main group-hover:scale-110 overflow-hidden">
                    <Image
                      src="/assets/img/portfolio/4.jpg"
                      className="object-cover w-full h-full"
                      alt=""
                      width={800}
                      height={800}
                    />
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 md:w-1/3 p-3 soundcloud">
            <div className="rounded-xl overflow-hidden group relative">
              <div
                className="main-img-box"
                data-title="Magic Art"
                data-category="Soundcloud"
              >
                <a
                  className="img-zoom relative"
                  href="assets/img/portfolio/3.jpg"
                >
                  <div className="main group-hover:scale-110 overflow-hidden">
                    <Image
                      src="/assets/img/portfolio/2.jpg"
                      className="object-cover w-full h-full"
                      alt=""
                      width={800}
                      height={800}
                    />
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 md:w-1/3 p-3 popup">
            <div className="rounded-xl overflow-hidden group relative">
              <div
                className="main-img-box"
                data-title="Blue Lemon"
                data-category="Popup"
              >
                <a
                  className="img-zoom relative"
                  href="assets/img/portfolio/4.jpg"
                >
                  <div className="main group-hover:scale-110 overflow-hidden">
                    <Image
                      src="/assets/img/portfolio/5.jpg"
                      className="object-cover w-full h-full"
                      alt=""
                      width={800}
                      height={800}
                    />
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 md:w-1/3 p-3 detail">
            <div className="rounded-xl overflow-hidden group relative">
              <div
                className="main-img-box"
                data-title="Art Stone"
                data-category="Popup"
              >
                <a
                  className="img-zoom relative"
                  href="assets/img/portfolio/5.jpg"
                >
                  <div className="main group-hover:scale-110 overflow-hidden">
                    <Image
                      src="/assets/img/portfolio/3.jpg"
                      className="object-cover w-full h-full"
                      alt=""
                      width={800}
                      height={800}
                    />
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 md:w-1/3 p-3 youtube">
            <div className="rounded-xl overflow-hidden group relative">
              <div
                className="main-img-box"
                data-title="Global Evolution"
                data-category="Detail"
              >
                <a
                  className="img-zoom relative"
                  href="assets/img/portfolio/6.jpg"
                >
                  <div className="main group-hover:scale-110 overflow-hidden">
                    <Image
                      src="/assets/img/portfolio/6.jpg"
                      className="object-cover w-full h-full"
                      alt=""
                      width={800}
                      height={800}
                    />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="left-[50px] top-[150px] absolute hidden lg:block wow zoomIn"
        data-wow-duration="1s"
      >
        <Image
          src="/assets/img/brushes/portfolio/1.png"
          alt=""
          width={100}
          height={100}
        />
      </div>
      <div
        className="right-[10px] bottom-[51px] absolute hidden lg:block wow fadeInRight"
        data-wow-duration="1s"
      >
        <Image
          src="/assets/img/brushes/portfolio/2.png"
          alt=""
          width={100}
          height={100}
        />
      </div>
    </section>
  );
};
