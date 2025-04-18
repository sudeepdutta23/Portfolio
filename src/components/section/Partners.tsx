"use client";
import Image from "next/image";
import React, { useContext } from "react";
import { ThemeContext } from "../GlobalThemeProvider";

export const Partners = () => {
  const { theme } = useContext(ThemeContext);
  const basePath = `/assets/img/partners/${theme == "light" ? "dark" : "light"}`
  return (
    <section className="relative pb-8">
      <div className="container relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 border-2 border-[#eee] dark:border-[#555] rounded-[10px]">
          <div
            className="border-b-2 border-[#eee] dark:border-[#555] wow fadeIn"
            data-wow-duration="1s"
          >
            <a
              href="#"
              className="opacity-50 hover:opacity-100 cursor-pointer duration-300 h-[180px] flex items-center"
            >
              <Image
                src={`${basePath}/1.png`}
                className="mx-auto max-w-[88%] dark:hidden"
                alt=""
                width={150}
                height={150}
              />
              <Image
                src={`${basePath}/1.png`}
                className="mx-auto max-w-[88%] hidden dark:block"
                alt=""
                width={150}
                height={150}
              />
            </a>
          </div>
          <div
            className="border-l-2 border-b-2 border-[#eee] dark:border-[#555] wow fadeIn"
            data-wow-duration="1s"
            data-wow-delay="0.2s"
          >
            <a
              href="#"
              className="opacity-50 hover:opacity-100 cursor-pointer duration-300 h-[180px] flex items-center"
            >
              <Image
                src={`${basePath}/2.png`}
                className="mx-auto max-w-[88%] dark:hidden"
                alt=""
                width={150}
                height={150}
              />
              <Image
                src={`${basePath}/2.png`}
                className="mx-auto max-w-[88%] hidden dark:block"
                alt=""
                width={150}
                height={150}
              />
            </a>
          </div>
          <div
            className="md:border-l-2 border-b-2 border-[#eee] dark:border-[#555] wow fadeIn"
            data-wow-duration="1s"
            data-wow-delay="0.4s"
          >
            <a
              href="#"
              className="opacity-50 hover:opacity-100 cursor-pointer duration-300 h-[180px] flex items-center"
            >
              <Image
                src={`${basePath}/3.png`}
                className="mx-auto max-w-[88%] dark:hidden"
                alt=""
                width={150}
                height={150}
              />
              <Image
                src={`${basePath}/3.png`}
                className="mx-auto max-w-[88%] hidden dark:block"
                alt=""
                width={150}
                height={150}
              />
            </a>
          </div>
          <div
            className="border-l-2 border-b-2 border-[#eee] dark:border-[#555] wow fadeIn"
            data-wow-duration="1s"
            data-wow-delay="0.6s"
          >
            <a
              href="#"
              className="opacity-50 hover:opacity-100 cursor-pointer duration-300 h-[180px] flex items-center"
            >
              <Image
                src={`${basePath}/4.png`}
                className="mx-auto max-w-[88%] dark:hidden"
                alt=""
                width={150}
                height={150}
              />
              <Image
                src={`${basePath}/4.png`}
                className="mx-auto max-w-[88%] hidden dark:block"
                alt=""
                width={150}
                height={150}
              />
            </a>
          </div>
          <div
            className="border-[#eee] dark:border-[#555] border-b-2 md:border-b-0 wow fadeIn"
            data-wow-duration="1s"
          >
            <a
              href="#"
              className="opacity-50 hover:opacity-100 cursor-pointer duration-300 h-[180px] flex items-center"
            >
              <Image
                src={`${basePath}/5.png`}
                className="mx-auto max-w-[88%] dark:hidden"
                alt=""
                width={150}
                height={150}
              />
              <Image
                src={`${basePath}/5.png`}
                className="mx-auto max-w-[88%] hidden dark:block"
                alt=""
                width={150}
                height={150}
              />
            </a>
          </div>
          <div
            className="border-l-2 border-[#eee] dark:border-[#555] border-b md:border-b-0 wow fadeIn"
            data-wow-duration="1s"
            data-wow-delay="0.2s"
          >
            <a
              href="#"
              className="opacity-50 hover:opacity-100 cursor-pointer duration-300 h-[180px] flex items-center"
            >
              <Image
                src={`${basePath}/6.png`}
                className="mx-auto max-w-[88%] dark:hidden"
                alt=""
                width={150}
                height={150}
              />
              <Image
                src={`${basePath}/6.png`}
                className="mx-auto max-w-[88%] hidden dark:block"
                alt=""
                width={150}
                height={150}
              />
            </a>
          </div>
          <div
            className="md:border-l-2 border-[#eee] dark:border-[#555] wow fadeIn"
            data-wow-duration="1s"
            data-wow-delay="0.4s"
          >
            <a
              href="#"
              className="opacity-50 hover:opacity-100 cursor-pointer duration-300 h-[180px] flex items-center"
            >
              <Image
                src={`${basePath}/7.png`}
                className="mx-auto max-w-[88%] dark:hidden"
                alt=""
                width={150}
                height={150}
              />
              <Image
                src={`${basePath}/7.png`}
                className="mx-auto max-w-[88%] hidden dark:block"
                alt=""
                width={150}
                height={150}
              />
            </a>
          </div>
          <div
            className="border-l-2 border-[#eee] dark:border-[#555] wow fadeIn"
            data-wow-duration="1s"
            data-wow-delay="0.6s"
          >
            <a
              href="#"
              className="opacity-50 hover:opacity-100 cursor-pointer duration-300 h-[180px] flex items-center"
            >
              <Image
                src={`${basePath}/8.png`}
                className="mx-auto max-w-[88%] dark:hidden"
                alt=""
                width={150}
                height={150}
              />
              <Image
                src={`${basePath}/8.png`}
                className="mx-auto max-w-[88%] hidden dark:block"
                alt=""
                width={150}
                height={150}
              />
            </a>
          </div>
        </div>
      </div>
      <div
        className="-top-[170px] left-0 absolute hidden lg:block"
        data-wow-duration="1s"
      >
        <Image
          src="/assets/img/brushes/partners/1.png"
          alt=""
          width={300}
          height={300}
        />
      </div>
    </section>
  );
};
