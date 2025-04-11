import React from "react";

export const Footer = () => {
  return (
    <section className="py-[60px] relative bg-[#f2f5fb] dark:bg-[#3f4453]">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-center">
          <div>
            <p className="text-muted dark:text-darkmuted text-base text-center md:text-left">
              Developed with love by{" "}
              <a
                href="https://themeforest.net/user/marketify"
                className="font-bold"
              >
                Marketify
              </a>{" "}
              © 2022
            </p>
          </div>
          <div>
            <ul className="flex items-center gap-10 justify-center md:justify-end text-base">
              <li>
                <a
                  href="#"
                  className="text-muted dark:text-darkmuted hover:text-custom duration-300"
                >
                  Terms & Condition{" "}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted dark:text-darkmuted hover:text-custom duration-300"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
