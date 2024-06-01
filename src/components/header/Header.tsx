"use client";
import React, { forwardRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import { NAV_LINK_TEXT } from "@/src/app/consts/nav.enum";
import { COMPANY_NAME } from "@/src/app/consts/company-details";
import Logo from "@/public/logo.jpeg";
interface IHeader {
  // heroSectionRef: React.ForwardedRef<unknown>,
  onHandleSelectedNav: (nav: string) => void;
  selectedNav: string;
}
const Header = forwardRef(function Hear(props: IHeader, ref) {
  const { onHandleSelectedNav, selectedNav } = props;

  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <header className="bg-white dark:bg-gray-900 relative">
      <nav
        className=" bg-white dark:bg-gray-900 fixed box-border flex justify-center items-center"
        style={{
          top: "1.5vw",
          left: "50%",
          transform: "translateX(-50%)",
          width: "calc(100% - 100px)",
          borderRadius: "5.82010582010582vw",
          margin: "0 auto",
          background: "#fff",
          zIndex: "99",
          boxShadow: "0 4px 6px rgba(0,0,0,.1)",
        }}
      >
        <div className="container px-6 py-4 mx-auto md:flex md:justify-between md:items-center">
          <div className="flex items-center justify-between">
            <a href="#">
              <Image
                className="w-auto h-6 sm:h-7"
                src={Logo}
                alt=""
                width={8}
                height={8}
              />
              {COMPANY_NAME}
            </a>
            {/* 
              Mobile menu button */}
            <div className="flex md:hidden">
              {isMobileMenuOpen ? (
                <button
                  type="button"
                  className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
                  aria-label="toggle menu"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    // strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      // strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              ) : (
                <button
                  type="button"
                  className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
                  aria-label="toggle menu"
                  onClick={() => setMobileMenuOpen(true)}
                >
                  <svg
                    x-show="isOpen"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      // strokeLinejoin="round"
                      d="M4 8h16M4 16h16"
                    />
                  </svg>
                </button>
              )}
            </div>
          </div>
          <div
            className={clsx(
              `absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white dark:bg-gray-900 md:bg-transparent md:dark:bg-transparent md:mt-0 md:p-0 md:top-0 md:relative md:w-auto md:opacity-100 md:translate-x-0 md:flex md:items-center`,
              isMobileMenuOpen
                ? `translate-x-0 opacity-100`
                : "opacity-0 -translate-x-full"
            )}
          >
            <div className="flex flex-col md:flex-row md:mx-6">
              {NAV_LINK_TEXT.map((nav, index) => (
                <div
                  className={clsx(
                    "my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0 cursor-pointer",
                    nav === selectedNav ? "text-blue-600" : ""
                  )}
                  // href="#"
                  key={`${nav}-${index}`}
                  onClick={() => onHandleSelectedNav(nav)}
                >
                  {nav}
                </div>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
});

Header.propTypes = {};

export default Header;
