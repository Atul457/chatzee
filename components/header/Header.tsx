import Image from "next/image";
import React, { useState } from "react";
import styles from "./header.module.css";

const Header = () => {
  // Hooks and vars
  const [expandMenu, setExpandMenu] = useState(false);

  // Functions
  const toggleExpandMenu = () => {
    setExpandMenu(!expandMenu);
  };

  return (
    <header className="w-full sticky top-0 bg-gray-900 md:px-1 w-100 py-4 md:py-5 z-[99]">
      <div className="flex justify-between flex-wrap items-center relative">
        <span className="mr-3">
          <Image
            src="/ChatZeeLogo.png"
            alt="Group 30"
            width={120}
            height={45}
          />
        </span>

        <section className="links_sec pl-5  items-center text-slate-300 cursor-pointer hidden md:flex">
          <span className="mr-3 text-lg font-semibold hover:text-[#00EAFF]">
            Login
          </span>
          <span className="text-lg font-semibold hover:text-[#00EAFF]">
            Register
          </span>
        </section>

        {/* toggler */}
        <button
          className="toggler border-[#00EAFF] rounded-md border-2 py-1.5 px-2 cursor-pointer inline-block md:hidden"
          onClick={toggleExpandMenu}
        >
          <svg
            className="w-5 h-5 text-[#00EAFF]"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
        {/* toggler */}

        {/* expandable menu */}
        {expandMenu ? (
          <div
            className={`absolute top-[50px] py-3 bg-gray-900 w-full ${styles.expandable}`}
          >
            <div className="text-md font-semibold border-[#00EAFF] pb-3 text-[#00EAFF]">
              Login
            </div>
            <div className="text-md font-semibold border-[#00EAFF] py-3 text-[#00EAFF]">
              Register
            </div>
          </div>
        ) : null}
        {/* expandable menu */}
      </div>
    </header>
  );
};

export default Header;
