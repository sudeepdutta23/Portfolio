import Image from "next/image";
import React from "react";

export const Testimonial = () => {
  return (
    <section className="relative pb-[127px] md:pb-[187px]">
      <div className="px-4 lg:px-0 relative z-10">
        <div className="grid grid-cols-1">
          <div className="text-center max-w-[680px] mx-auto">
            <p className="text-custom text-[20px] md:text-2xl font-medium font-secondary">
              Testimonials
            </p>
            <h3 className="md:text-[48px] text-[35px] leading-[1.25] mb-[23px] mt-1.5">
              What My Clients Say
            </h3>
            <p className="text-muted dark:text-darkmuted text-lg leading-[30px]">
              Most common methods for designing websites that work well on
              desktop is responsive and adaptive design
            </p>
          </div>
        </div>
        <div className="bg-testimonials grid grid-cols-1 mt-20 relative bg-cover bg-top">
          <div id="owl-demo" className="owl-carousel">
            <div className="text-center max-w-[900px] mx-auto">
              <div className="mb-[35px]">
                <Image
                  className="!w-[65px] mx-auto"
                  src="/assets/img/svg/testimonials/quote.svg"
                  alt=""
                  width={100}
                  height={100}
                />
              </div>
              <div>
                <p className="md:text-[30px] text-xl text-muted dark:text-darkmuted italic leading-[1.6]">
                  I rarely like to write reviews, but the Marketify team truly
                  deserve a standing ovation for their customer support,
                  customisation and most importantly, friendliness and
                  professionalism. Many thanks once again for everything and
                  hope that I get to deal with you again in the near future.
                </p>
              </div>
              <div className="flex items-center gap-[25px] mt-[51px] justify-center">
                <Image
                  src="/assets/img/testimonials/4.jpg"
                  className="!w-[60px] rounded-full"
                  alt=""
                  width={100}
                  height={100}
                />
                <div className="text-start">
                  <h5 className="font-secondary text-2xl font-medium">
                    Mike Anderson
                  </h5>
                  <p className="text-muted dark:text-darkmuted text-base leading-7">
                    Vivaco Studio
                  </p>
                </div>
              </div>
            </div>
            <div className="text-center max-w-[900px] mx-auto">
              <div className="mb-[35px]">
                <Image
                  className="!w-[65px] mx-auto"
                  src="/assets/img/svg/testimonials/quote.svg"
                  alt=""
                  width={100}
                  height={100}
                />
              </div>
              <div>
                <p className="md:text-[30px] text-xl text-muted dark:text-darkmuted italic leading-[1.6]">
                  I rarely like to write reviews, but the Marketify team truly
                  deserve a standing ovation for their customer support,
                  customisation and most importantly, friendliness and
                  professionalism. Many thanks once again for everything and
                  hope that I get to deal with you again in the near future.
                </p>
              </div>
              <div className="flex items-center gap-[25px] mt-[51px] justify-center">
                <Image
                  src="/assets/img/testimonials/4.jpg"
                  className="!w-[60px] rounded-full"
                  alt=""
                  width={100}
                  height={100}
                />
                <div className="text-start">
                  <h5 className="font-secondary text-2xl font-medium">
                    Mike Anderson
                  </h5>
                  <p className="text-muted dark:text-darkmuted text-base leading-7">
                    Vivaco Studio
                  </p>
                </div>
              </div>
            </div>
            <div className="text-center max-w-[900px] mx-auto">
              <div className="mb-[35px]">
                <Image
                  className="!w-[65px] mx-auto"
                  src="/assets/img/svg/testimonials/quote.svg"
                  alt=""
                  width={100}
                  height={100}
                />
              </div>
              <div>
                <p className="md:text-[30px] text-xl text-muted dark:text-darkmuted italic leading-[1.6]">
                  I rarely like to write reviews, but the Marketify team truly
                  deserve a standing ovation for their customer support,
                  customisation and most importantly, friendliness and
                  professionalism. Many thanks once again for everything and
                  hope that I get to deal with you again in the near future.
                </p>
              </div>
              <div className="flex items-center gap-[25px] mt-[51px] justify-center">
                <Image
                  src="/assets/img/testimonials/4.jpg"
                  className="!w-[60px] rounded-full"
                  alt=""
                  width={100}
                  height={100}
                />
                <div className="text-start">
                  <h5 className="font-secondary text-2xl font-medium">
                    Mike Anderson
                  </h5>
                  <p className="text-muted dark:text-darkmuted text-base leading-7">
                    Vivaco Studio
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="absolute right-5 -top-[120px] hidden lg:block wow fadeInRight"
        data-wow-duration="1s"
      >
        <Image
          src="/assets/img/brushes/testimonials/1.png"
          alt=""
          width={100}
          height={100}
        />
      </div>
    </section>
  );
};
