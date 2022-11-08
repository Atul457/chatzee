import Head from "next/head";
import Link from "next/link";
import React from "react";
import IAuthLayoutProps from "../../helpers/types";

const AuthLayout = (props: IAuthLayoutProps) => {
  const { children, pageName, link, linkName, title, linkDesc } = props;

  return (
    <>
      <Head>
        <title>{pageName} - ChatZee</title>
      </Head>

      <div className="w-full flex flex-col justify-center items-center lg:mt-20 md:mt-4 mt-5">
        <div className="mx-auto container w-10/12 w-md-full">
          <h1 className="font-extrabold text-center md:text-3xl text-2xl mb-8 pb-2">
            {title}
          </h1>

          <div className="flex flex-col-reverse md:flex-col">{children}</div>

          {/* bottom links */}
          <div className="text-center mt-6 md:mt-4">
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
