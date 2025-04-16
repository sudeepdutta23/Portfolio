"use client";
import Image from "next/image";
import React, { useContext } from "react";
import { ThemeContext, THEMES } from "../GlobalThemeProvider";

export const About = () => {
   const { theme } = useContext(ThemeContext);
  
    const isDark = theme === THEMES.DARK;

  return (
    <section className="md:pt-[112px] pt-16 relative" id="about">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[90px] items-center">
          <div className="relative space-y-4 md:space-y-0">
            <div>
              <Image
                src="/assets/img/about/1.jpg"
                className="mx-auto dark:hidden"
                alt=""
                width={700}
                height={700}
              />
              <Image
                src="/assets/img/about/2.jpg"
                className="mx-auto hidden dark:block"
                alt=""
                width={700}
                height={700}
              />
            </div>
            <div className="top-[120px] -left-20 md:absolute">
              <div className={`flex gap-[17px] items-center pt-[15px] pr-[30px] pb-[11px] pl-[26px] bg-white dark:bg-semilight shadow-[25px_0px_65px_rgba(54,32,152,0.11)] rounded-lg ${isDark && "text-white semi_dark_theme"}`}>
                <h3 className="text-[50px] text-[#1cbe59]">
                  <span
                    className="dizme_tm_counter stop"
                    data-from="0"
                    data-to="18"
                    data-speed="2000"
                  >
                    18
                  </span>
                </h3>
                <span className="name text-lg font-secondary leading-[1.3] font-medium">
                  Years of
                  <br />
                  Success
                </span>
              </div>
            </div>
            <div className="bottom-[70px] -right-[30px] md:absolute">
              <div className={`flex gap-[17px] items-center pt-[15px] pr-[30px] pb-[11px] pl-[26px] bg-white dark:bg-semilight shadow-[25px_0px_65px_rgba(54,32,152,0.11)] rounded-lg ${isDark && "text-white semi_dark_theme"}`}>
                <h3 className="text-[50px] text-[#6e50f0] dark:text-[#f0c45c]">
                  <span
                    className="dizme_tm_counter stop"
                    data-from="0"
                    data-to="9"
                    data-speed="2000"
                  >
                    9
                  </span>
                  K
                </h3>
                <span className="name text-lg font-secondary leading-[1.3] font-medium">
                  Total
                  <br />
                  Projects
                </span>
              </div>
            </div>
          </div>
          <div className="text-center md:text-left">
            <div className="mb-[25px] lg:max-w-[440px]">
              <p
                className="text-custom text-xl md:text-2xl font-medium font-secondary wow fadeInUp"
                data-wow-duration="1s"
              >
                I&apos;m a Fullstack Web & Mobile developer
              </p>
              <h3
                className={`md:text-[48px] text-[35px] leading-[1.25] mt-1.5 wow fadeInUp ${isDark && "text-white"}`}
                data-wow-duration="1s"
              >
                I Can Design Any system You Want
              </h3>
            </div>
            <p
              className={`text-muted dark:text-darkmuted lg:max-w-[485px] leading-[30px] mb-[47px] wow fadeInUp ${isDark && "text-white"}`}
              data-wow-duration="1s"
            >
              Experienced Product Engineer and Full-Stack Developer,
              specializing in the development and maintenance of robust web
              applications. Skilled in React (with Hooks), Redux, HTML5 on the
              frontend, and proficient in Node.js, Express.js, MySQL, and
              MongoDB on the backend, enabling the delivery of scalable,
              end-to-end solutions. I collaborate with cross-functional teams to
              build high-performance applications that meet both technical
              standards and business goals. With a strong command of RESTful
              APIs, asynchronous programming, and modern architectural patterns,
              I ensure seamless integration between frontend and backend systems
            </p>
            <div className="wow fadeInUp" data-wow-duration="1s">
              <a href="#contact" className="btn-custom">
                Hire Me
              </a>
            </div>
          </div>
        </div>
      </div>
      <div
        className="left-10 top-5 absolute hidden lg:block wow fadeInLeft"
        data-wow-duration="1s"
      >
        <Image
          src="/assets/img/brushes/about/1.png"
          alt=""
          width={150}
          height={150}
        />
      </div>
      <div
        className="-bottom-[50px] right-0 absolute hidden lg:block wow fadeInRight"
        data-wow-duration="1s"
      >
        <Image
          src="/assets/img/brushes/about/2.png"
          alt=""
          width={250}
          height={250}
        />
      </div>
    </section>
  );
};
