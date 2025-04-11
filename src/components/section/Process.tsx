import Image from "next/image";
import React from "react";

export const Process = () => {
  return (
    <section className="md:pt-[190px] pt-[135px] pb-[70px]" id="process">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[50px]">
          <div className="text-center wow fadeInUp" data-wow-duration="1s">
            <div>
              <span className="relative inline-block dark:hidden">
                <Image
                  src="/assets/img/brushes/process/1.png"
                  className="md:max-w-[125px] max-w-[90px] mx-auto"
                  alt=""
                  width={100}
                  height={100}
                />
                <Image
                  src="/assets/img/svg/process/target.svg"
                  className="top-4/5 -translate-y-1/2 absolute inset-x-0 w-[45px] md:w-[60px] h-[45px] md:h-[60px] mx-auto"
                  alt=""
                  width={100}
                  height={100}
                />
              </span>
              <span className="relative hidden dark:block">
                <Image
                  src="/assets/img/brushes/process/dark/1.png"
                  className="md:max-w-[125px] max-w-[90px] mx-auto"
                  alt=""
                  width={100}
                  height={100}
                />
                <Image
                  src="/assets/img/svg/process/target-2.svg"
                  className="top-4/5 -translate-y-1/2 absolute inset-x-0 w-[45px] md:w-[60px] h-[45px] md:h-[60px] mx-auto"
                  alt=""
                  width={100}
                  height={100}
                />
              </span>
            </div>
            <div className="mt-[30px]">
              <h3 className="text-2xl">Pixel Perfect</h3>
              <p className="mx-auto text-muted dark:text-darkmuted mt-5 leading-[30px]">
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
                  src="/assets/img/brushes/process/2.png"
                  className="md:max-w-[125px] max-w-[90px] mx-auto"
                  alt=""
                  width={100}
                  height={100}
                />
                <Image
                  src="/assets/img/svg/process/brush.svg"
                  className="top-4/5 -translate-y-1/2 absolute inset-x-0 w-[45px] md:w-[60px] h-[45px] md:h-[60px] mx-auto"
                  alt=""
                  width={100}
                  height={100}
                />
              </span>
              <span className="relative hidden dark:block">
                <Image
                  src="/assets/img/brushes/process/dark/2.png"
                  className="md:max-w-[125px] max-w-[90px] mx-auto"
                  alt=""
                  width={100}
                  height={100}
                />
                <Image
                  src="/assets/img/svg/process/brush-2.svg"
                  className="top-4/5 -translate-y-1/2 absolute inset-x-0 w-[45px] md:w-[60px] h-[45px] md:h-[60px] mx-auto"
                  alt=""
                  width={100}
                  height={100}
                />
              </span>
            </div>
            <div className="mt-[30px]">
              <h3 className="text-2xl">High Quality</h3>
              <p className="mx-auto text-muted dark:text-darkmuted mt-5 leading-[30px]">
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
                  src="/assets/img/brushes/process/3.png"
                  className="md:max-w-[125px] max-w-[90px] mx-auto"
                  alt=""
                  width={100}
                  height={100}
                />
                <Image
                  src="/assets/img/svg/process/energy.svg"
                  className="top-4/5 -translate-y-1/2 absolute inset-x-0 w-[45px] md:w-[60px] h-[45px] md:h-[60px] mx-auto"
                  alt=""
                  width={100}
                  height={100}
                />
              </span>
              <span className="relative hidden dark:block">
                <Image
                  src="/assets/img/brushes/process/dark/3.png"
                  className="md:max-w-[125px] max-w-[90px] mx-auto"
                  alt=""
                  width={100}
                  height={100}
                />
                <Image
                  src="/assets/img/svg/process/energy-2.svg"
                  className="top-4/5 -translate-y-1/2 absolute inset-x-0 w-[45px] md:w-[60px] h-[45px] md:h-[60px] mx-auto"
                  alt=""
                  width={100}
                  height={100}
                />
              </span>
            </div>
            <div className="mt-[30px]">
              <h3 className="text-2xl">Awesome Idea</h3>
              <p className="mx-auto text-muted dark:text-darkmuted mt-5 leading-[30px]">
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
