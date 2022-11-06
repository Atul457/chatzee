import React, { useState } from "react";
import AuthLayout from "../components/layout/AuthLayout";
import SocialBtns from "../components/socialbtns/SocialBtns";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Register = () => {
  // Hooks and vars
  const [password, setPassword] = useState(false);

  // Functions
  const togglePass = () => {
    setPassword(!password);
  };

  return (
    <AuthLayout
      pageName="login"
      link="/login"
      linkName="Sign in"
      title="Register to Continue"
      linkDesc="Already have an account?"
    >
      <SocialBtns />

      <div className="w-5/6 mx-auto flex items-center my-6 justify-center">
        <hr className="bg-red w-2/6 mt-1" />
        <div className="divider w-0/6 text-center mx-2">or</div>
        <hr className="bg-red w-2/6 mt-1" />
      </div>

      {/* Register with email */}
      <form className="flex flex-col justify-center items-center mx-auto w-full sm:w-6/12 lg:w-4/12 xl:w-3/12">
        <input
          type="email"
          placeholder="Email"
          className="mb-3 w-full px-3 py-2 focus:border-4 border-4 border-white text-black font-base invalid:red outline-none rounded-xl bg-white  box-shadow"
        />
        <div className="relative flex items-center w-full mb-3 bg-white box-shadow rounded-xl focus:border-sky-200 focus:border-4 border-4 border-white group">
          <input
            placeholder="Password"
            type={password ? "password" : "text"}
            className="w-80 bg-white border-white px-3 py-2 text-black font-base invalid:red  outline-none"
          />
          <span onClick={togglePass} className="cursor-pointer right-5 w-10">
            {!password ? (
              <FaEye color="black" size={20} />
            ) : (
              <FaEyeSlash color="black" size={20} />
            )}
          </span>
        </div>

        <button className="hover:bg-[#00ccff] font-semibold w-full py-3 rounded-xl mt-3 bg-[#00EAFF] text-black">
          Sign up
        </button>
      </form>
    </AuthLayout>
  );
};

export default Register;
