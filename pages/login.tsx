import Head from "next/head";
import React from "react";

const Login = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen flex justify-center items-center p-5">
      <Head>
        <title>Login</title>
      </Head>
      <div className="mx-auto container w-10/12 w-md-full">
        <h1 className="font-extrabold text-center text-3xl mb-10 pb-6">
          Welcome to ChatZee
        </h1>

        {/* social login */}
        <div className="flex flex-wrap items-center justify-center text-black font-semibold">
          <button className="bg-white rounded-xl mx-0 md:mx-3 py-3 px-8 md:w-64 w-full mb-3 md:mb-0">
            Continue with Google
          </button>
          <button className="bg-white rounded-xl mx-0 md:mx-3 py-3 px-8 md:w-64 w-full mb">
            Continue with Facebook
          </button>
        </div>
        {/* social login */}

        <div className="w-5/6 mx-auto flex items-center my-6 justify-center">
          <hr className="bg-red w-2/6 mt-2" />
          <div className="divider w-0/6 text-center mx-2">or</div>
          <hr className="bg-red w-2/6 mt-2" />
        </div>

        {/* login with email */}
        <form className="flex flex-col justify-center items-center mx-auto w-full sm:w-6/12 lg:w-4/12 xl:w-3/12">
          <input
            type="email"
            placeholder="Email"
            className="mb-3 w-full px-3 py-2 focus:border-4 border-4 border-white text-black font-base invalid:red focus:border-sky-200 outline-none rounded-xl bg-white focus:bg-sky-200 box-shadow"
          />
          <input
            placeholder="Password"
            type="password"
            className="mb-3 w-full px-3 py-2 focus:border-4 border-4 border-white text-black font-base invalid:red focus:border-sky-200 outline-none rounded-xl bg-white focus:bg-sky-200 box-shadow"
          />

          <button className="bg-sky-400 text-white font-semibold w-full py-3 rounded-xl mt-3 hover:bg-sky-500">
            Sign in
          </button>
        </form>
        {/* login with email */}

        {/* bottom links */}
        <div className="text-center mt-4">
          Don&apos;t have an account?
          <span className="pl-1 text-sky-400 hover:text-blue-600 cursor-pointer">
            Sign up
          </span>
        </div>
        {/* bottom links */}
      </div>
    </div>
  );
};

export default Login;
