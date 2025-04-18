"use client";
import React, { useContext } from "react";
import { ThemeContext, THEMES } from "./GlobalThemeProvider";

export const Footer = () => {
  const { theme } = useContext(ThemeContext);

  const isDark = theme === THEMES.DARK;

  return (
    <section className={`py-[60px] relative ${isDark && "semi_dark_theme"}`}>
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-center">
          <div>
            <p className={`text-muted dark:text-darkmuted text-base text-center md:text-left ${isDark && "text-white"}`}>
              Developed with love by{" "}
              <a
                href="https://themeforest.net/user/marketify"
                className="font-bold"
              >
                Sudeep Dutta
              </a>{" "}
              © {new Date().getFullYear()}
            </p>
          </div>
          <div>
            <ul className="flex items-center gap-10 justify-center md:justify-end text-base">
              <li>
                <a
                  href="#"
                  className={`text-muted dark:text-darkmuted hover:text-custom duration-300 ${isDark && "text-white"}`}
                >
                  Terms & Condition{" "}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className={`text-muted dark:text-darkmuted hover:text-custom duration-300 ${isDark && "text-white"}`}
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
