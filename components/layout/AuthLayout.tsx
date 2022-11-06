import Head from "next/head";
import Link from "next/link";
import React from "react";
import SocialBtns from "../socialbtns/SocialBtns";

interface AuthLayoutProps {
  children: React.ReactNode;
  pageName: string;
  link: string;
  linkName: string;
  title: string;
  linkDesc: string;
}

const AuthLayout = (props: AuthLayoutProps) => {
  const { children, pageName, link, linkName, title, linkDesc } = props;

  return (
    <>
      <Head>
        <title>{pageName}</title>
      </Head>

      <div className="w-full flex flex-col justify-center items-center">
        <div className="mx-auto container w-10/12 w-md-full">
          <h1 className="font-extrabold text-center text-3xl mb-10 pb-6">
            {title}
          </h1>

          {children}

          {/* bottom links */}
          <div className="text-center mt-4">
            {linkDesc}
            <Link href={link}>
              <span className="pl-1 text-[#00EAFF] hover:text-[#00ccff] cursor-pointer">
                {linkName}
              </span>
            </Link>
          </div>
          {/* bottom links */}
        </div>
      </div>
    </>
  );
};

export default AuthLayout;
