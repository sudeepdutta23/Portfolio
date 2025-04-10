import React from "react";

export const Education = () => {
  return (
    <section id="education" className="education">
      <div className="section-heading text-center">
        <h2>education</h2>
      </div>
      <div className="container">
        <div className="education-horizontal-timeline">
          <div className="row">
            <div className="col-sm-6">
              <div className="single-horizontal-timeline">
                <div className="experience-time">
                  <h2>2023 - 2025</h2>
                  <h3>
                    master <span>of </span> computer science
                  </h3>
                </div>
                <div className="timeline-horizontal-border">
                  <i className="fa fa-circle" aria-hidden="true"></i>
                  <span className="single-timeline-horizontal"></span>
                </div>
                <div className="timeline">
                  <div className="timeline-content">
                    <h4 className="title">manipal university jaipur</h4>
                    <h5>jaipur, INDIA</h5>
                    <p className="description">
                      The Manipal Education and Medical Group is an established
                      leader in the field of education, research and healthcare.
                      In a span of over seven decades, it has transformed the
                      lives of more than 3,00,000 students from over 59
                      countries.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="single-horizontal-timeline">
                <div className="experience-time">
                  <h2>2016 - 2019</h2>
                  <h3>
                    bachelor <span>of </span> computer science
                  </h3>
                </div>
                <div className="timeline-horizontal-border">
                  <i className="fa fa-circle" aria-hidden="true"></i>
                  <span className="single-timeline-horizontal"></span>
                </div>
                <div className="timeline">
                  <div className="timeline-content">
                    <h4 className="title">guwahati university</h4>
                    <h5>guwahati, INDIA</h5>
                    <p className="description">
                      Gauhati University (GU) is one of the premier institutions
                      of higher education in Northeast India and one of the most
                      sought-after postgraduate institutions. They have been a
                      top-ranking institute as per the NIRF rank list and is a
                      NAAC A+ Grade institution.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="col-sm-4">
              <div className="single-horizontal-timeline">
                <div className="experience-time">
                  <h2>2004 - 2008</h2>
                  <h3>
                    bachelor <span>of </span> creative design
                  </h3>
                </div>
                <div className="timeline-horizontal-border">
                  <i className="fa fa-circle" aria-hidden="true"></i>
                  <span
                    className="single-timeline-horizontal spacial-horizontal-line
									"
                  ></span>
                </div>
                <div className="timeline">
                  <div className="timeline-content">
                    <h4 className="title">university of bolton</h4>
                    <h5>bolton, united kingdome</h5>
                    <p className="description">
                      Duis aute irure dolor in reprehenderit in vol patate velit
                      esse cillum dolore eu fugiat nulla pari. Excepteur sint
                      occana inna tecat cupidatat non proident.
                    </p>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};
