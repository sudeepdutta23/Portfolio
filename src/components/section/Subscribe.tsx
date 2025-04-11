import React from 'react'

export const Subscribe = () => {
  return (
    <section>
            <div className="container">
                <div className="relative rounded-xl py-[90px] px-7 md:px-[86px]">
                    <div className="bg-[#8067f0]/90 absolute inset-0 rounded-xl"></div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 relative gap-y-10 lg:gap-y-0 items-center gap-4">
                        <div className="text-white wow fadeInLeft" data-wow-duration="1s">
                            <p className="md:text-[21px] text-[19px] font-medium font-secondary">Subscribe Now</p>
                            <h4 className="mt-4 text-[35px] md:text-5xl">Get My Newsletter</h4>
                            <p className="mt-4 text-lg">Get latest news, updates, tips and trics in your inbox</p>
                        </div>
                        <div>
                            <div className="relative wow fadeInRight" data-wow-duration="1s">
                                <input type="email" className="form-input custom-mail" placeholder="Your email here" />
                                <input type="submit" value="Send Now" className="sub-btn" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  )
}
