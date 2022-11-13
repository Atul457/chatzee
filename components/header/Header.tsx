import Link from "next/link";
import React, { useState } from "react";
import styles from "./header.module.css";
import { defaultProps } from "../../helpers/types";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import Image from "next/image";

const Header = (props: defaultProps) => {
  // Hooks and vars
  const [expandMenu, setExpandMenu] = useState(false);
  const userDetails = props?.userDetails;
  const router = useRouter();
  const { status } = useSession();

  // Functions
  const toggleExpandMenu = (valueToSet?: boolean): void => {
    setExpandMenu(valueToSet ?? !expandMenu);
  };

  // Logs the user out
  const logout = async () => {
    toggleExpandMenu(false);
    await signOut({ redirect: false });
    router.push("/login");
  };

  return (
    <header className="w-full sticky top-0 bg-slate-900 md:px-1 w-100 py-4 md:py-5 z-[99]">
      <div className="flex justify-between flex-wrap items-center relative px-5">
        <Link href="/chat">
          <span className="mr-3">
            <span className="text-3xl md:text-3xl text-white font-bold">
              ChatZee
            </span>
          </span>
        </Link>

        <section className="links_sec pl-5  items-center text-white cursor-pointer hidden md:flex">
          {!userDetails ? (
            <>
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
            </>
          ) : (
            <>
              <span
                className="text-lg font-semibold hover:text-slate-300 cursor-pointer"
                onClick={logout}
              >
                Logout
              </span>
              <div className="w-[30px] h-[30px] rounded-full overflow-hidden relative ml-3">
                <Image
                  src={userDetails.image}
                  fill={true}
                  alt="user_profile_pic"
                />
              </div>
            </>
          )}
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

        {/* Expandable menu */}
        <div
          className={`absolute top-[50px] py-3 bg-slate-900 w-full ${
            styles.expandable
          } ${!expandMenu ? styles.collapsed : ""} left-0 px-5`}
        >
          {!userDetails ? (
            <>
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
            </>
          ) : (
            <div
              className="text-md font-semibold cursor-pointer border-b-2 pt-0 w-full border-white py-3 text-white"
              onClick={logout}
            >
              Logout
            </div>
          )}
        </div>
        {/* Expandable menu */}
      </div>
    </header>
  );
};

export default Header;
