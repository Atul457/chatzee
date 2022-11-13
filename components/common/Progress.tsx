import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { IProgress } from "../../helpers/types";

const Progress = () => {
  // Hooks and vars
  const router = useRouter();
  const [progress, setProgress] = useState<IProgress>(null);

  useEffect(() => {
    const handleStart = () => {
      setProgress("start");
    };
    const handleStop = () => {
      setProgress("done");
      setTimeout(() => {
        setProgress(null);
      }, 200);
    };

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleStop);
    router.events.on("routeChangeError", handleStop);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleStop);
      router.events.off("routeChangeError", handleStop);
    };
  }, [router]);
  return (
    <div
      className={`fixed left-0 top-[-1px] border-b-4 border-[#00ffff] z-[100] animate-pulse`}
      style={{
        opacity: progress ? 1 : 0,
        width: progress ? (progress === "start" ? "20%" : "100%") : "0px",
        transition: "all .2s linear",
      }}
    ></div>
  );
};

export default Progress;
