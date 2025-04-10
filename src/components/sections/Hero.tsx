import Link from "next/link";
import React from "react";

export const Hero = () => {
  return (
    <section id="welcome-hero" className="welcome-hero">
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <div className="header-text">
              <h2>
                hi <span>,</span> i am <br /> Sudeep <br /> Dutta <span>.</span>{" "}
              </h2>
              <p>full stack developer</p>
              <Link href="assets/download/Resume.pdf" target="_blank" download="resume">
                download resume
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
