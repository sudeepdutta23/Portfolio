"use client";
import Image from "next/image";
import React, { useContext } from "react";
import { ThemeContext, THEMES } from "../GlobalThemeProvider";

export const Blogs = () => {
  const { theme } = useContext(ThemeContext);

  const isDark = theme === THEMES.DARK;
  
  return (
    <section
      className="md:pt-[185px] pt-[120px] pb-[100px] md:pb-[160px] relative"
      id="blog"
    >
      <div className="container relative z-10">
        <div className="grid grid-cols-1">
          <div className="text-center max-w-[680px] mx-auto">
            <p className="text-custom text-[20px] md:text-2xl font-medium font-secondary">
              From My Blog
            </p>
            <h3 className={`md:text-[48px] text-[35px] leading-[1.25] mb-[23px] mt-1.5 ${isDark && "text-white"}`}>
              Our Recent Updates, Blog, Tips, Tricks & More
            </h3>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pt-[65px] gap-[25px]">
          <div className="wow fadeInUp cursor-pointer" data-wow-duration="1s">
            {/* <div onclick="toggleModal('modal-id-blog')"> */}
            <div>
              <div className="overflow-hidden group rounded-xl relative">
                <Image
                  src="/assets/img/news/1.jpg"
                  className="scale-100 rounded-xl object-cover w-full h-full min-h-[303px] duration-300 group-hover:scale-110"
                  alt=""
                  width={400}
                  height={400}
                />
                <div className="bg-[#1cbe59] top-[18px] right-[18px] z-20 inline-block absolute rounded-xl text-center py-3 px-5">
                  <h3 className="text-2xl text-white leading-[1.2]">23</h3>
                  <span className="text-white text-sm">Dec</span>
                </div>
              </div>
              <div className="mt-5">
                <p className="text-custom font-medium font-secondary">
                  <a href="#">Web Development</a>
                </p>
                <h4 className="mt-1 leading-[1.4] text-[21px]">
                  <a href="#" className={`hover:text-custom ${isDark && "text-white"}`}>
                    Jim Morisson Says when the musics over turn off the light
                  </a>
                </h4>
              </div>
            </div>
          </div>
          <div
            className="wow fadeInUp cursor-pointer"
            data-wow-duration="1s"
            data-wow-delay="0.2s"
          >
            {/* <div onclick="toggleModal('modal-id-blog-two')"> */}
            <div>
              <div className="overflow-hidden group rounded-xl relative">
                <Image
                  src="/assets/img/news/2.jpg"
                  className="scale-100 rounded-xl object-cover w-full h-full min-h-[303px] duration-300 group-hover:scale-110"
                  alt=""
                  width={400}
                  height={400}
                />
                <div className="bg-[#1cbe59] top-[18px] right-[18px] z-20 inline-block absolute rounded-xl text-center py-3 px-5">
                  <h3 className="text-2xl text-white leading-[1.2]">23</h3>
                  <span className="text-white text-sm">Dec</span>
                </div>
              </div>
              <div className="mt-5">
                <p className="text-custom font-medium font-secondary">
                  <a href="#">Branding</a>
                </p>
                <h4 className="mt-1 leading-[1.4] text-[21px]">
                  <a href="#" className={`hover:text-custom ${isDark && "text-white"}`}>
                    How to be appreciated for your hard work as a developer
                  </a>
                </h4>
              </div>
            </div>
          </div>
          <div
            className="wow fadeInUp cursor-pointer"
            data-wow-duration="1s"
            data-wow-delay="0.4s"
          >
            {/* <div onclick="toggleModal('modal-id-blog-three')"> */}
            <div>
              <div className="overflow-hidden group rounded-xl relative">
                <Image
                  src="/assets/img/news/3.jpg"
                  className="scale-100 rounded-xl object-cover w-full h-full min-h-[303px] duration-300 group-hover:scale-110"
                  alt=""
                  width={400}
                  height={400}
                />
                <div className="bg-[#1cbe59] top-[18px] right-[18px] z-20 inline-block absolute rounded-xl text-center py-3 px-5">
                  <h3 className="text-2xl text-white leading-[1.2]">23</h3>
                  <span className="text-white text-sm">Dec</span>
                </div>
              </div>
              <div className="mt-5">
                <p className="text-custom font-medium font-secondary">
                  <a href="#">Social Media</a>
                </p>
                <h4 className="mt-1 leading-[1.4] text-[21px]">
                  <a href="#" className={`hover:text-custom ${isDark && "text-white"}`}>
                    How designers and developers can collaborate better
                  </a>
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="top-[250px] left-[115px] absolute hidden lg:block wow zoomIn"
        data-wow-duration="1s"
      >
        <Image
          src="/assets/img/brushes/news/1.png"
          alt=""
          width={130}
          height={130}
        />
      </div>
      <div
        className="top-0 right-0 absolute hidden lg:block wow zoomIn"
        data-wow-duration="1s"
      >
        <Image
          src="/assets/img/brushes/news/2.png"
          alt=""
          width={360}
          height={360}
        />
      </div>
    </section>
  );
};
