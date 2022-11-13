import { signIn } from "next-auth/react";
import Image from "next/image";
import React, { useState } from "react";

const Google = () => {
  // Hooks and vars
  const [loading, setLoading] = useState(false);

  // Functions
  const signInWithGoogle = async () => {
    setLoading(true);
    await signIn("google", { redirect: false });
  };

  return (
    <button
      disabled={loading}
      className={`bg-white rounded-xl mx-0 md:mx-3 py-2.5 px-5 md:w-64 w-full flex justify-center items-center mb-3 md:mb-0 ${
        loading ? "animate-pulse" : "cursor-pointer"
      }`}
      onClick={signInWithGoogle}
    >
      <>
        <Image
          className={`mr-2 ${loading ? "animate-spin" : ""}`}
          src="/icons/google.svg"
          alt="googleIcon"
          width={30}
          height={30}
        />
        Continue with Google
      </>
    </button>
  );
};

export default Google;
