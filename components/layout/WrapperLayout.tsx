import { useRouter } from "next/router";
import React from "react";
import Header from "../header/Header";
import styles from "./wrapper.module.css";

const WrapperLayout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  return (
    <div
      className={`bg-gray-900 text-white min-h-screen flex flex-col py-3 px-5`}
    >
      <Header />
      <div className={styles.wrapper_outer_cont}>{children}</div>
    </div>
  );
};

export default WrapperLayout;
