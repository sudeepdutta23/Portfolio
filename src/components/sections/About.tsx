import Image from "next/image";
import React from "react";

export const About = () => {
  return (
    <section id="about" className="about">
      <div className="section-heading text-center">
        <h2>about me</h2>
      </div>
      <div className="container">
        <div className="about-content">
          <div className="row">
            <div className="col-sm-6">
              <div className="single-about-txt">
                <h3>
                  As a Product Engineer at Smart Energy Water, I develop and
                  maintain web applications for the energy and water sectors,
                  using React Hooks, Redux, and HTML5. I collaborate with
                  cross-functional teams to deliver solutions that meet the
                  needs and expectations of clients and stakeholders, while
                  ensuring high-quality standards and best practices.
                </h3>
                <p>
                  I have a Bachelor of Computer Science Application from
                  Pragjyotish College, where I gained a solid foundation in
                  information technology and software development. I am
                  passionate about learning and adapting to new technologies and
                  frameworks, and I have earned two certifications in React
                  Hooks and React: Working with APIs from LinkedIn. I am also a
                  motivated and innovative coder, with a strong work ethic and a
                  problem-solving mindset. I enjoy working in a supportive and
                  energetic team environment, where I can contribute to the
                  success and growth of the organization.
                </p>
                <div className="row">
                  <div className="col-sm-4">
                    <div className="single-about-add-info">
                      <h3>phone</h3>
                      <p>600-058-7566</p>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="single-about-add-info">
                      <h3>email</h3>
                      <p>
                        duttasudeep105
                        <br />
                        @gmail.com
                      </p>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="single-about-add-info">
                      <h3>website</h3>
                      <p>www.brownsine.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-offset-1 col-sm-5">
              <div className="single-about-img">
                <Image
                  src="/assets/images/sudeepAbout.jpg"
                  alt="profile_image"
                  width={400}
                  height={400}
                />
                <div className="about-list-icon">
                  <ul>
                    <li>
                      <a href="#">
                        <i className="fa fa-facebook" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-dribbble" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-twitter" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-linkedin" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-instagram" aria-hidden="true"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
