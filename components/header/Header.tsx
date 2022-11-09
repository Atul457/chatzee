import Link from "next/link";
import React, { useState } from "react";
import styles from "./header.module.css";

const Header = () => {
  // Hooks and vars
  const [expandMenu, setExpandMenu] = useState(false);

  // Functions
  const toggleExpandMenu = (valueToSet?: boolean) => {
    setExpandMenu(valueToSet ?? !expandMenu);
  };

  return (
    <header className="w-full sticky top-0 bg-slate-900 md:px-1 w-100 py-4 md:py-5 z-[99]">
      <div className="flex justify-between flex-wrap items-center relative">
        <Link href="/chat">
          <span className="mr-3">
            <span className="text-3xl md:text-3xl text-white font-bold">
              ChatZee
            </span>
          </span>
        </Link>

        <section className="links_sec pl-5  items-center text-white cursor-pointer hidden md:flex">
          <Link href="/login">
            <span className="mr-3 text-lg font-semibold hover:text-slate-300">
              Login
            </span>
          </Link>
          <Link href="/register">
            <span className="text-lg font-semibold hover:text-slate-300">
              Register
            </span>
          </Link>
        </section>

        {/* toggler */}
        <button
          className="toggler border-white rounded-md border-2 py-1.5 px-2 cursor-pointer inline-block md:hidden"
          onClick={() => toggleExpandMenu()}
        >
          <svg
            className="w-5 h-5 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
        {/* toggler */}

        {/* expandable menu */}
        {expandMenu ? (
          <div
            className={`absolute top-[50px] py-3 bg-slate-900 w-full ${styles.expandable}`}
          >
            <Link
              href="/login"
              className="block"
              onClick={() => toggleExpandMenu(false)}
            >
              <div className="text-md font-semibold border-white pb-3 text-white">
                Login
              </div>
            </Link>
            <Link
              href="/register"
              className="block"
              onClick={() => toggleExpandMenu(false)}
            >
              <div className="text-md font-semibold border-white py-3 text-white">
                Register
              </div>
            </Link>
          </div>
        ) : null}
        {/* expandable menu */}
      </div>
    </header>
  );
};

export default Header;
