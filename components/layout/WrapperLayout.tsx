import React from "react";
import Header from "../header/Header";
import styles from "./wrapper.module.css";

const WrapperLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={`bg-gray-900 text-white min-h-screen `}>
      <div className="container mx-auto flex flex-col pb-3 px-5">
        <Header />
        <main className={styles.wrapper_outer_cont}>{children}</main>
      </div>
    </div>
  );
};

export default WrapperLayout;
