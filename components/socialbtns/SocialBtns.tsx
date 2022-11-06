import React from "react";
import Facebook from "./Facebook";
import Google from "./Google";

const SocialBtns = () => {
  return (
    <div className="flex flex-wrap items-center justify-center text-black font-semibold">
      <Google />
      <Facebook />
    </div>
  );
};

export default SocialBtns;
