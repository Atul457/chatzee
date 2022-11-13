import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";
import React, { useState } from "react";
import Message from "../../components/common/Message";
import ViewsLoader from "../../components/common/ViewsLoader";
import { IUserCredentials, ILoggerInUserDetails } from "../../helpers/types";
import { IApiRes } from "../../helpers/types";
import { apiStatuses } from "../../utils/providers";

const NextAuth = () => {
  // Hooks and vars
  const { data: session, status } = useSession();
  const userDetails = session?.user as ILoggerInUserDetails;
  const [apiRes, setapiRes] = useState<IApiRes>({
    status: "idle",
    message: "",
  });
  const [userCredentials, setUserCredentials] = useState<IUserCredentials>({
    email: "",
    password: "",
  });
  const signInUrl = "/api/auth/callback/credentials";
  // Functions

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

  // Logs the user out
  const logout = async () => {
    setapiRes({ status: "loading", message: "" });
    await signOut({ redirect: false });
    setapiRes({ ...apiRes, status: "fulfilled" });
  };

  // handles user credentials
  const handleCredentails = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
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

  if (status === apiStatuses.loading)
    return (
      <ViewsLoader
        color="#0d8ffb"
        className="flex justify-center w-full md:mt-20"
        size="lg"
      />
    );

  return (
    <div className="text-center w-full">
      <h1 className="text-2xl mb-5 md:mt-20">NextAuth</h1>
      <div className="mt-4 md:w-[25%] mx-auto">
        {session ? (
          <>
            <div className="text-xl font-bold mb-3">
              Welcome {userDetails.name}
            </div>
            <div className="w-full mb-3 bg-sky-400 text-black rounded-xl p-3 flex items-center">
              <div className="w-[30px] h-[30px] rounded-full overflow-hidden relative mr-3">
                <Image
                  src={userDetails.image}
                  fill={true}
                  alt="user_profile_pic"
                />
              </div>
              <div className="text-black">{userDetails.email}</div>
            </div>
            <button
              className="rounded-md px-3 py-2 h-[40px] m-2 mx-auto cursor-pointer w-2/3 bg-red-500 flex justify-center"
              onClick={logout}
            >
              {apiRes.status === "loading" ? (
                <ViewsLoader color="white" size="sm" bgColor="blue" />
              ) : (
                "logout"
              )}
            </button>
          </>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col justify-center w-full"
            action={signInUrl}
            method="POST"
          >
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={userCredentials.email}
              className="w-100 mb-2 rounded-md py-2 px-2 text-black"
              required
              onChange={handleCredentails}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={userCredentials.password}
              className="w-100 mb-2 rounded-md py-2 px-2 text-black"
              required
              onChange={handleCredentails}
            />

            {apiRes.status === apiStatuses.rejected ? (
              <Message isError={true} message={apiRes.message} />
            ) : null}

            <button
              className="rounded-md px-3 py-2 h-[40px] m-2 mx-auto cursor-pointer bg-green-500 w-2/3 flex justify-center"
              type="submit"
            >
              {apiRes.status === apiStatuses.loading ? (
                <ViewsLoader color="white" size="sm" bgColor="blue" />
              ) : (
                "login"
              )}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default NextAuth;
