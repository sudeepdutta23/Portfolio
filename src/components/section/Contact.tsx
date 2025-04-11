import Image from "next/image";
import React from "react";

export const Contact = () => {
  return (
    <section
      className="md:pt-[190px] pt-[123px] pb-[120px] md:pb-[200px] relative"
      id="contact"
    >
      <div className="container">
        <div className="grid grid-cols-1">
          <div className="text-center max-w-[680px] mx-auto">
            <p className="text-custom text-[20px] md:text-2xl font-medium font-secondary">
              Contact Me
            </p>
            <h3 className="md:text-[48px] text-[35px] leading-[1.25] mb-[23px] mt-1.5">
              I Want To Hear From You
            </h3>
            <p className="text-muted dark:text-darkmuted text-lg leading-[30px]">
              Please fill out the form on this section to contact with me. Or
              call between 9:00 a.m. and 8:00 p.m. ET, Monday through Friday
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 mt-20 gap-[25px]">
          <div className="space-y-[15px] wow fadeInLeft" data-wow-duration="1s">
            <div className="flex items-center gap-[25px]">
              <div className="shrink-0 h-[88px] w-[88px] leading-[88px] rounded-full bg-[#fedfd7] inline-block text-center text-2xl">
                <i className="icon-location text-custom"></i>
              </div>
              <div>
                <h5 className="md:text-[30px] text-[25px]">Address</h5>
                <p className="text-lg mt-1.5 text-muted dark:text-darkmuted leading-8">
                  42, Dhirenpara, Itabhata, Guwahati, Assam.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-[25px]">
              <div className="shrink-0 h-[88px] w-[88px] leading-[88px] rounded-full bg-[#ddf5e6] inline-block text-center text-2xl">
                <i className="icon-mail-1 text-[#1cbe59]"></i>
              </div>
              <div>
                <h5 className="md:text-[30px] text-[25px]">Email</h5>
                <p className="text-lg mt-1.5 text-muted dark:text-darkmuted leading-8">
                  duttasudeep105@gmail.com
                </p>
              </div>
            </div>
            <div className="flex items-center gap-[25px]">
              <div className="shrink-0 h-[88px] w-[88px] leading-[88px] rounded-full bg-[#ece8fd] inline-block text-center text-2xl">
                <i className="icon-phone text-[#8067f0]"></i>
              </div>
              <div>
                <h5 className="md:text-[30px] text-[25px]">Phone</h5>
                <p className="text-lg mt-1.5 text-muted dark:text-darkmuted leading-8">
                  +600 058 7566
                </p>
              </div>
            </div>
          </div>
          <div className="right wow fadeInRight" data-wow-duration="1s">
            <form>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div>
                  <label className="block">
                    <input
                      type="text"
                      className="form-input"
                      placeholder="Your Name"
                      required
                    />
                  </label>
                </div>
                <div>
                  <label className="block">
                    <input
                      type="email"
                      className="form-input"
                      placeholder="Your Email"
                      required
                    />
                  </label>
                </div>
                <div>
                  <label className="block">
                    <input
                      type="text"
                      className="form-input"
                      placeholder="Your Phone"
                      required
                    />
                  </label>
                </div>
                <div>
                  <label className="block">
                    <input
                      type="text"
                      className="form-input"
                      placeholder="Subject"
                      required
                    />
                  </label>
                </div>
                <div className="md:col-span-2">
                  <label className="block">
                    <textarea
                      className="form-input h-auto"
                      rows={7}
                      placeholder="Write your message here"
                      required
                    ></textarea>
                  </label>
                </div>
                <div className="md:col-span-2">
                  <label className="block">
                    <a href="#" className="btn-custom">
                      {" "}
                      Submit Now
                    </a>
                  </label>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div
        className="top-[100px] absolute left-0 hidden lg:block wow fadeInLeft"
        data-wow-duration="1s"
      >
        <Image
          src="/assets/img/brushes/contact/1.png"
          alt=""
          width={180}
          height={180}
        />
      </div>
      <div
        className="absolute bottom-[100px] right-[150px] hidden lg:block wow fadeInRight"
        data-wow-duration="1s"
      >
        <Image
          src="/assets/img/brushes/contact/2.png"
          alt=""
          width={180}
          height={180}
        />
      </div>
    </section>
  );
};
