import React, { useEffect, useState } from "react";
import AuthLayout from "../components/layout/AuthLayout";
import SocialBtns from "../components/socialbtns/SocialBtns";
import { unstable_getServerSession } from "next-auth";
import { GetServerSidePropsContext } from "next";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { authOptions } from "./api/auth/[...nextauth]";
import { useSession, signIn } from "next-auth/react";
import { IApiRes, IUserCredentials } from "../helpers/types";
import { apiStatuses, signInUrl } from "../utils/providers";
import { useRouter } from "next/router";
import ViewsLoader from "../components/common/ViewsLoader";
import Message from "../components/common/Message";

const Login = () => {
  // Hooks and vars
  const [password, setPassword] = useState(true);
  const { data: session } = useSession();
  const router = useRouter();
  const [apiRes, setapiRes] = useState<IApiRes>({
    status: "idle",
    message: "",
  });
  const [userCredentials, setUserCredentials] = useState<IUserCredentials>({
    email: "",
    password: "",
  });

  useEffect(() => {
    if (session) router.push("/chat");
  }, [session, router]);

  // Functions
  // Toggles the pass type
  const togglePass = () => {
    setPassword(!password);
  };

  // Logs the user in
  const login = async () => {
    try {
      setapiRes({ status: "loading", message: "" });
      const res = await signIn("credentials", {
        ...userCredentials,
        redirect: false,
      });
      setapiRes({ ...apiRes, status: "fulfilled" });
      if (res?.error) {
        setapiRes({ status: "rejected", message: res?.error });
      }
    } catch (error: any) {
      console.log(error?.message);
    }
  };

  // handles user credentials
  const handleCredentails = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    if (apiRes.status === apiStatuses.rejected)
      setapiRes({
        message: "",
        status: "idle",
      });
    setUserCredentials({
      ...userCredentials,
      [name]: value,
    });
  };

  // Is fired on submit
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    login();
  };

  return (
    <AuthLayout
      pageName="Login"
      link="/register"
      linkName="Sign up"
      title="Login to Continue"
      linkDesc="Don't have an account?"
    >
      <SocialBtns />

      <div className="w-5/6 mx-auto flex items-center my-6 justify-center">
        <hr className="bg-red w-2/6 mt-1" />
        <div className="divider w-0/6 text-center mx-2">or</div>
        <hr className="bg-red w-2/6 mt-1" />
      </div>

      {/* login with email */}
      <form
        className="flex flex-col justify-center items-center mx-auto w-full sm:w-6/12 lg:w-4/12 xl:w-3/12"
        action={signInUrl}
        onSubmit={handleSubmit}
      >
        <input
          type="email"
          required
          name="email"
          onChange={handleCredentails}
          value={userCredentials.email}
          placeholder="Email"
          className="mb-3 w-full px-3 py-2 focus:border-4 border-4 border-white text-black font-base invalid:red outline-none rounded-xl bg-white  box-shadow"
        />
        <div className="relative flex items-center w-full mb-3 bg-white box-shadow rounded-xl focus:border-sky-200 focus:border-4 border-4 border-white group">
          <input
            placeholder="Password"
            required
            name="password"
            value={userCredentials.password}
            onChange={handleCredentails}
            type={password ? "password" : "text"}
            className="w-full bg-white border-white px-3 py-2 text-black font-base invalid:red  outline-none"
          />
          <span onClick={togglePass} className="cursor-pointer right-5 w-10">
            {!password ? (
              <FaEye color="black" size={20} />
            ) : (
              <FaEyeSlash color="black" size={20} />
            )}
          </span>
        </div>

        {apiRes.status === apiStatuses.rejected ? (
          <Message isError={true} message={apiRes.message} />
        ) : null}

        <button
          className="hover:bg-[#00ccff] font-semibold w-full py-3 rounded-xl mt-3 bg-[#00EAFF] flex justify-center text-black h-12"
          type="submit"
        >
          {apiRes.status === apiStatuses.loading ? (
            <ViewsLoader color="white" size="sm" bgColor="white" />
          ) : (
            "Sign in"
          )}
        </button>
      </form>
    </AuthLayout>
  );
};

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await unstable_getServerSession(
    context.req,
    context.res,
    authOptions
  );

  if (session)
    return {
      redirect: {
        destination: "/chat",
        permanent: false,
      },
    };
  return {
    props: {},
  };
}

export default Login;
