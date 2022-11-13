import { useSession } from "next-auth/react";
import React, { cloneElement } from "react";
import Header from "../header/Header";
import styles from "./wrapper.module.css";
import { ILoggerInUserDetails } from "../../helpers/types";
import { apiStatuses } from "../../utils/providers";
import ViewsLoader from "../common/ViewsLoader";

const WrapperLayout = ({ children }: { children: React.ReactElement }) => {
  // Hooks and vars
  const { data: session, status } = useSession();
  const userDetails = session?.user as ILoggerInUserDetails;
  const updatedChildren = cloneElement(children, { userDetails });

  if (status === apiStatuses.loading)
    return (
      <div className="w-screen h-screen flex items-center justify-center bg-slate-900">
        {" "}
        <ViewsLoader
          color="#0d8ffb"
          className="flex justify-center w-full md:mt-40"
          size="xl"
        />
      </div>
    );

  return (
    <div className={`bg-slate-900 text-white min-h-screen md:px-1`}>
      <div className="container mx-auto flex flex-col pb-3">
        <Header userDetails={userDetails} />
        <main className={styles.wrapper_outer_cont}>{updatedChildren}</main>
      </div>
    </div>
  );
};

export default WrapperLayout;
