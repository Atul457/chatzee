import Image from "next/image";
import React from "react";

const Google = () => {
  return (
    <button className="bg-white rounded-xl mx-0 md:mx-3 py-2.5 px-5 md:w-64 w-full flex justify-center items-center mb-3 md:mb-0">
      <Image
        className="mr-2"
        src="/icons/google.svg"
        alt="googleIcon"
        width={30}
        height={30}
      />
      Continue with Google
    </button>
  );
};

export default Google;
