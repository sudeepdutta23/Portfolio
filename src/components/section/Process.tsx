"use client";
import Image from "next/image";
import React, { useContext } from "react";
import { ThemeContext, THEMES } from "../GlobalThemeProvider";

export const Process = () => {
  const { theme } = useContext(ThemeContext);

  const isDark = theme === THEMES.DARK;
  return (
    <section className="md:pt-[190px] pt-[135px] pb-[70px]" id="process">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[50px]">
          <div className="text-center wow fadeInUp" data-wow-duration="1s">
            <div>
              <span className="relative inline-block dark:hidden">
                <Image
                  src={`/assets/img/brushes/process/${isDark ? "dark/" : ""}1.png`}
                  className="md:max-w-[125px] max-w-[90px] mx-auto"
                  alt=""
                  width={100}
                  height={100}
                />
                <Image
                  src={`/assets/img/svg/process/target${isDark ? "-2" : ""}.svg`}
                  className="top-4/5 -translate-y-1/2 absolute inset-x-0 w-[45px] md:w-[60px] h-[45px] md:h-[60px] mx-auto"
                  alt=""
                  width={100}
                  height={100}
                />
              </span>
            </div>
            <div className="mt-[30px]">
              <h3 className={`text-2xl ${isDark && "text-white"}`}>Pixel Perfect</h3>
              <p className={`mx-auto text-muted dark:text-darkmuted mt-5 leading-[30px] ${isDark && "text-white"}`}>
                Most common methods for designing websites that work well on
                desktop is responsive and adaptive design.
              </p>
            </div>
          </div>
          <div
            className="text-center wow fadeInUp"
            data-wow-duration="1s"
            data-wow-delay="0.2s"
          >
            <div>
              <span className="relative inline-block dark:hidden">
                <Image
                  src={`/assets/img/brushes/process/${isDark ? "dark/" : ""}2.png`}
                  className="md:max-w-[125px] max-w-[90px] mx-auto"
                  alt=""
                  width={100}
                  height={100}
                />
                <Image
                  src={`/assets/img/svg/process/brush${isDark ? "-2" : ""}.svg`}
                  className="top-4/5 -translate-y-1/2 absolute inset-x-0 w-[45px] md:w-[60px] h-[45px] md:h-[60px] mx-auto"
                  alt=""
                  width={100}
                  height={100}
                />
              </span>
            </div>
            <div className="mt-[30px]">
              <h3 className={`text-2xl ${isDark && "text-white"}`}>High Quality</h3>
              <p className={`mx-auto text-muted dark:text-darkmuted mt-5 leading-[30px] ${isDark && "text-white"}`}>
                Most common methods for designing websites that work well on
                desktop is responsive and adaptive design.
              </p>
            </div>
          </div>
          <div
            className="text-center wow fadeInUp"
            data-wow-duration="1s"
            data-wow-delay="0.4s"
          >
            <div>
              <span className="relative inline-block dark:hidden">
                <Image
                  src={`/assets/img/brushes/process/${isDark ? "dark/" : ""}3.png`}
                  className="md:max-w-[125px] max-w-[90px] mx-auto"
                  alt=""
                  width={100}
                  height={100}
                />
                <Image
                  src={`/assets/img/svg/process/energy${isDark ? "-2" : ""}.svg`}
                  className="top-4/5 -translate-y-1/2 absolute inset-x-0 w-[45px] md:w-[60px] h-[45px] md:h-[60px] mx-auto"
                  alt=""
                  width={100}
                  height={100}
                />
              </span>
            </div>
            <div className="mt-[30px]">
              <h3 className={`text-2xl ${isDark && "text-white"}`}>Awesome Idea</h3>
              <p className={`mx-auto text-muted dark:text-darkmuted mt-5 leading-[30px] ${isDark && "text-white"}`}>
                Most common methods for designing websites that work well on
                desktop is responsive and adaptive design.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
