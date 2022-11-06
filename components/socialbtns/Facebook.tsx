import Image from "next/image";
import React from "react";

const Facebook = () => {
  return (
    <button className="bg-white rounded-xl mx-0 md:mx-3 py-2.5 px-5 md:w-64 w-full flex justify-center items-center mb">
      <Image
        className="mr-2"
        src="/icons/facebook.svg"
        alt="googleIcon"
        width={22}
        height={22}
      />
      Continue with Facebook
    </button>
  );
};

export default Facebook;
