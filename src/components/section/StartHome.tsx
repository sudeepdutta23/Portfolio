import Image from "next/image";
import React from "react";

export const StartHome = () => {
  return (
    <section
      className="bg-[url('/assets/img/slider/1.jpg')] flex items-center dark:bg-[url('/assets/img/slider/2.html')] bg-center bg-cover lg:h-screen py-24 relative dizme_tm_header"
      id="home"
    >
      <div className="container">
        <div className="grid lg:grid-cols-2 items-center gap-[25px]">
          <div className="order-2 lg:order-1">
            <h3 className="text-custom text-[21px] text-center lg:text-left lg:text-[25px] xl:text-[45px] leading-[1.3] font-medium font-secondary">
              Hello, I&apos;m
            </h3>
            <h1 className="text-[42px] lg:text-[60px] xl:text-[85px] text-center lg:text-left mb-[11px] lg:mb-[18px] leading-[1.3] font-medium font-secondary">
              Sudeep Dutta
            </h1>
            <p className="lg:mb-9 mb-[15px] text-lg lg:text-[19px] xl:text-[28px] text-center lg:text-left font-medium">
              A <span className="text-[#1cbe59]">Interactive Systems Innovator</span> From{" "}
              <span className="text-[#8067f0] dark:text-[#f0c45c]">
                India
              </span>
            </p>
            <p className="lg:mb-[42px] text-muted dark:text-white mb-[30px] text-base text-center lg:text-left xl:text-[23px] leading-[1.5] max-w-[640px] mx-auto lg:ml-0">
              {/* I&apos;m creative designer based in New York, and I&apos;m very passionate
              and dedicated to my work. */}
              I&apos;m passionate about learning and adapting to new technologies.With a problem-solving mindset.
            </p>
            <div className="flex items-center justify-center lg:justify-start gap-[25px]">
              <a href="#about" className="btn-custom relative">
                About Me
              </a>
              <ul className="flex items-center gap-2">
                <li>
                  <a href="https://www.facebook.com/sudeepdutta23" target="_blank">
                    <i className="icon-facebook-1"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="icon-twitter-1"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="icon-linkedin-1"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="icon-behance"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <div className="relative">
              <Image
                src="/assets/img/slider/avatar.jpg"
                className="mx-auto max-w-[250px] lg:max-w-[400px] xl:max-w-[650px]"
                alt=""
                width={600}
                height={600}
              />
              <span className="left-24 shadow-[24px_0px_72px_rgb(54,32,152,0.3)] top-5 hidden lg:flex items-center rounded-lg bg-white w-[75px] h-[75px] absolute anim_moveBottom">
                <Image
                  className="w-10 h-10 mx-auto"
                  src="/assets/img/svg/skills/nodejs.png"
                  alt=""
                  width={300}
                  height={300}
                />
              </span>
              <span className="right-[110px] shadow-[24px_0px_72px_rgb(54,32,152,0.3)] top-20 hidden lg:flex items-center rounded-lg bg-white w-[75px] h-[75px] absolute anim_moveBottom">
                <Image
                  className="w-10 h-10 mx-auto"
                  src="/assets/img/svg/skills/mongo.png"
                  alt=""
                  width={300}
                  height={300}
                />
              </span>
              <span className="left-[100px] shadow-[24px_0px_72px_rgb(54,32,152,0.3)] bottom-20 hidden lg:flex items-center rounded-lg bg-white w-[75px] h-[75px] absolute anim_moveBottom">
                <Image
                  className="w-10 mx-auto h-10"
                  src="/assets/img/svg/skills/reactjs.png"
                  alt=""
                  width={300}
                  height={300}
                />
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="dizme_tm_down text-center max-[1024px]:!bottom-6">
        <a className="anchor inline-block" href="#process">
          <svg
            width="26px"
            height="100%"
            viewBox="0 0 247 390"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            style={{ fillRule: "evenodd", clipRule: "evenodd", strokeLinecap: "round", strokeLinejoin: "round", strokeMiterlimit: 1.5 }}
          >
            <path
              id="wheel"
              d="M123.359,79.775l0,72.843"
              fill="none"
              className="stroke-[20px] stroke-dark dark:stroke-white"
            />
            <path
              id="mouse"
              fill="none"
              d="M236.717,123.359c0,-62.565 -50.794,-113.359 -113.358,-113.359c-62.565,0 -113.359,50.794 -113.359,113.359l0,143.237c0,62.565 50.794,113.359 113.359,113.359c62.564,0 113.358,-50.794 113.358,-113.359l0,-143.237Z"
              className="stroke-[20px] stroke-dark dark:stroke-white"
            />
          </svg>
        </a>
      </div>
    </section>
  );
};
