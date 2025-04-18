"use client";
import Image from "next/image";
import React, { useContext } from "react";
import { ThemeContext, THEMES } from "../GlobalThemeProvider";

export const StartServices = () => {
  const { theme } = useContext(ThemeContext);

  const isDark = theme === THEMES.DARK;

  return (
    <section
      className="md:pt-[178px] pt-[120px] pb-[98px] md:pb-[160px] relative"
      id="service"
    >
      <div className="container relative z-10">
        <div className="grid grid-cols-1">
          <div className="text-center max-w-[680px] mx-auto">
            <p className="text-custom text-[20px] md:text-2xl font-medium font-secondary">
              Services
            </p>
            <h3
              className={`md:text-[48px] text-[35px] leading-[1.25] mb-[23px] mt-1.5 ${
                isDark && "text-white"
              }`}
            >
              What I Do for Clients
            </h3>
            <p
              className={`text-muted dark:text-darkmuted text-lg leading-[30px] ${
                isDark && "text-white"
              }`}
            >
              Most common methods for designing websites that work well on
              desktop is responsive and adaptive design
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 pt-[86px] gap-[25px]">
          <div className="cursor-pointer wow fadeInLeft" data-wow-duration="1s">
            <div
              //   onclick="toggleModal('modal-id')"
              className={`shadow-[18px_0px_87px_rgba(10,15,17,0.07)] bg-white dark:bg-semilight p-8 lg:p-[65px] rounded-xl space-y-6 lg:space-y-0 lg:flex items-start gap-12 tilt-effect ${
                isDark && "semi_dark_theme"
              }`}
            >
              <div className="shrink-0 relative inline-block">
                <Image
                  className="top-5/7 -translate-y-1/2 absolute inset-x-0 w-[45px] h-[45px] mx-auto"
                  src="/assets/img/svg/service/anchor.svg"
                  alt=""
                  height={500}
                  width={500}
                />
                <Image
                  src="/assets/img/brushes/service/1.png"
                  className="dark:hidden"
                  alt=""
                  height={100}
                  width={100}
                />
                <Image
                  src="/assets/img/brushes/service/dark/1.png"
                  className="dark:block hidden"
                  alt=""
                  height={100}
                  width={100}
                />
              </div>
              <div>
                <h3 className={`text-[30px] mb-4 ${isDark && "text-white"}`}>
                  Solution Architect
                </h3>
                <p className="text-[21px] mb-5 font-medium font-secondary text-dark dark:text-white">
                  <span>
                    <span className={`${isDark && "text-white"}`}>
                      Starts from{" "}
                    </span>
                    <span className="text-2xl text-custom">$99</span>
                  </span>
                </p>
                <p
                  className={`text-muted dark:text-darkmuted text-lg leading-[30px] ${
                    isDark && "text-white"
                  }`}
                >
                  As a Solution Architect, I design and guide the implementation
                  of robust and scalable technology solutions aligned with
                  business objectives.
                </p>
              </div>
            </div>
          </div>
          <div
            className="cursor-pointer wow fadeInRight"
            data-wow-duration="1s"
            data-wow-delay="0.2s"
          >
            <div
              //   onclick="toggleModaltwo('modal-id-two')"
              className={`shadow-[18px_0px_87px_rgba(10,15,17,0.07)] bg-white dark:bg-semilight p-8 lg:p-[65px] rounded-xl space-y-6 lg:space-y-0 lg:flex items-start gap-12 tilt-effect ${
                isDark && "semi_dark_theme"
              }`}
            >
              <div className="shrink-0 relative inline-block">
                <Image
                  className="top-5/7 -translate-y-1/2 absolute inset-x-0 w-[45px] h-[45px] mx-auto"
                  src="/assets/img/svg/service/physics.svg"
                  alt=""
                  height={500}
                  width={500}
                />
                <Image
                  src="/assets/img/brushes/service/2.png"
                  className="dark:hidden"
                  alt=""
                  height={100}
                  width={100}
                />
                <Image
                  src="/assets/img/brushes/service/dark/2.png"
                  className="dark:block hidden"
                  alt=""
                  height={100}
                  width={100}
                />
              </div>
              <div>
                <h3 className={`text-[30px] mb-4 ${isDark && "text-white"}`}>
                  Graphic Design
                </h3>
                <p className="text-[21px] mb-5 font-medium font-secondary text-dark dark:text-white">
                  <span>
                    <span className={`${isDark && "text-white"}`}>
                      Starts from{" "}
                    </span>
                    <span className="text-2xl text-custom">$199</span>
                  </span>
                </p>
                <p
                  className={`text-muted dark:text-darkmuted text-lg leading-[30px] ${
                    isDark && "text-white"
                  }`}
                >
                  Web design refers to the design of websites that are displayed
                  on the internet. It usually refers to the user experience
                  aspects of website development
                </p>
              </div>
            </div>
          </div>
          <div className="cursor-pointer wow fadeInLeft" data-wow-duration="1s">
            <div
              //   onclick="toggleModalthree('modal-id-three')"
              className={`shadow-[18px_0px_87px_rgba(10,15,17,0.07)] bg-white dark:bg-semilight p-8 lg:p-[65px] rounded-xl space-y-6 lg:space-y-0 lg:flex items-start gap-12 tilt-effect ${
                isDark && "semi_dark_theme"
              }`}
            >
              <div className="shrink-0 relative inline-block">
                <Image
                  className="top-5/7 -translate-y-1/2 absolute inset-x-0 w-[45px] h-[45px] mx-auto"
                  src="/assets/img/svg/service/contact.svg"
                  alt=""
                  height={500}
                  width={500}
                />
                <Image
                  src="/assets/img/brushes/service/3.png"
                  className="dark:hidden"
                  alt=""
                  height={100}
                  width={100}
                />
                <Image
                  src="/assets/img/brushes/service/dark/3.png"
                  className="dark:block hidden"
                  alt=""
                  height={100}
                  width={100}
                />
              </div>
              <div>
                <h3 className={`text-[30px] mb-4 ${isDark && "text-white"}`}>
                  Fullstack Web Development
                </h3>
                <p className="text-[21px] mb-5 font-medium font-secondary text-dark dark:text-white">
                  <span>
                    <span className={`${isDark && "text-white"}`}>
                      Starts from{" "}
                    </span>
                    <span className="text-2xl text-custom">$299</span>
                  </span>
                </p>
                <p
                  className={`text-muted dark:text-darkmuted text-lg leading-[30px] ${
                    isDark && "text-white"
                  }`}
                >
                  Proficient in both front-end and back-end technologies, I
                  build comprehensive web applications.
                </p>
              </div>
            </div>
          </div>
          <div
            className="cursor-pointer wow fadeInRight"
            data-wow-duration="1s"
            data-wow-delay="0.2s"
          >
            <div
              //   onclick="toggleModalfour('modal-id-four')"
              className={`shadow-[18px_0px_87px_rgba(10,15,17,0.07)] bg-white dark:bg-semilight p-8 lg:p-[65px] rounded-xl space-y-6 lg:space-y-0 lg:flex items-start gap-12 tilt-effect ${
                isDark && "semi_dark_theme"
              }`}
            >
              <div className="shrink-0 relative inline-block">
                <Image
                  className="top-5/7 -translate-y-1/2 absolute inset-x-0 w-[45px] h-[45px] mx-auto"
                  src="/assets/img/svg/service/web.svg"
                  alt=""
                  height={500}
                  width={500}
                />
                <Image
                  src="/assets/img/brushes/service/4.png"
                  className="dark:hidden"
                  alt=""
                  height={100}
                  width={100}
                />
                <Image
                  src="/assets/img/brushes/service/dark/4.png"
                  className="dark:block hidden"
                  alt=""
                  height={100}
                  width={100}
                />
              </div>
              <div>
                <h3 className={`text-[30px] mb-4 ${isDark && "text-white"}`}>
                  Mobile Development
                </h3>
                <p className="text-[21px] mb-5 font-medium font-secondary text-dark dark:text-white">
                  <span>
                    <span className={`${isDark && "text-white"}`}>
                      Starts from{" "}
                    </span>
                    <span className="text-2xl text-custom">$399</span>
                  </span>
                </p>
                <p
                  className={`text-muted dark:text-darkmuted text-lg leading-[30px] ${
                    isDark && "text-white"
                  }`}
                >
                  Specializing in native mobile development, I build
                  high-performance and feature-rich applications for both
                  android and ios.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="top-[300px] left-0 absolute hidden lg:block wow fadeInLeft"
        data-wow-duration="1s"
      >
        <Image
          src="/assets/img/brushes/service/5.png"
          alt=""
          height={460}
          width={460}
        />
      </div>
      <div
        className="top-0 right-0 absolute hidden lg:block wow zoomIn"
        data-wow-duration="1s"
      >
        <Image
          src="/assets/img/brushes/service/6.png"
          alt=""
          height={460}
          width={460}
        />
      </div>
    </section>
  );
};
