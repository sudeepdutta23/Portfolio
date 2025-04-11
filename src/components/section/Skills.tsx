import Image from "next/image";
import React from "react";

export const Skills = () => {
  return (
    <section>
      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[200px] items-center">
          <div>
            <div className="mb-[23px] wow fadeInUp" data-wow-duration="1s">
              <p className="text-custom text-[20px] md:text-2xl font-medium font-secondary">
                Design is Life
              </p>
              <h3 className="md:text-[48px] text-[35px] leading-[1.25] mt-1.5">
                I Develop Skills Regularly to Keep Me Update
              </h3>
            </div>
            <p
              className="text-muted dark:text-darkmuted lg:max-w-[485px] leading-[30px] wow fadeInUp"
              data-wow-duration="1s"
            >
              Most common methods for designing websites that work well on
              desktop is responsive and adaptive design
            </p>
            <div
              className="pt-[30px] space-y-[22px] wow fadeInUp"
              data-wow-duration="1s"
            >
              <div
                className="w-full mb-[22px] relative"
                data-value="85"
                data-color="#f75023"
              >
                <div className="mb-[9px] block">
                  <span className="text-lg font-medium font-secondary inline-block">
                    Reactjs/Nextjs
                  </span>
                  <span className="absolute right-[15%] text-custom">85%</span>
                </div>
                <div className="w-full bg-[#e7e5f1] rounded-full h-2">
                  <div
                    className="bg-custom h-2 rounded-full"
                    style={{ width: "85%" }}
                  ></div>
                </div>
              </div>
              <div
                className="w-full mb-[22px] relative"
                data-value="95"
                data-color="#f75023"
              >
                <div className="mb-[9px] block">
                  <span className="text-lg font-medium font-secondary inline-block">
                    Nodejs
                  </span>
                  <span className="absolute right-[5%] text-custom">95%</span>
                </div>
                <div className="w-full bg-[#e7e5f1] rounded-full h-2">
                  <div
                    className="bg-[#1cbe59] h-2 rounded-full"
                    style={{ width: "95%" }}
                  ></div>
                </div>
              </div>
              <div
                className="w-full mb-[22px] relative"
                data-value="75"
                data-color="#f75023"
              >
                <div className="mb-[9px] block">
                  <span className="text-lg font-medium font-secondary inline-block">
                    Mysql/Mongo
                  </span>
                  <span className="absolute right-[25%] text-custom">75%</span>
                </div>
                <div className="w-full bg-[#e7e5f1] rounded-full h-2">
                  <div
                    className="bg-[#8067f0] h-2 rounded-full"
                    style={{ width: "75%" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div>
              <Image
                src="/assets/img/skills/1.jpg"
                className="max-h-[800px] mx-auto dark:hidden"
                alt=""
                width={700}
                height={700}
              />
              <Image
                src="/assets/img/skills/2.jpg"
                className="max-h-[800px] mx-auto hidden dark:block"
                alt=""
                width={700}
                height={700}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
