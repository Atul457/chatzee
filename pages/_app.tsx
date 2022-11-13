import "../styles/globals.css";
import type { AppProps } from "next/app";
import Wrapper from "../components/layout/WrapperLayout";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import { SessionProvider } from "next-auth/react";
import { useEffect } from "react";
import { useRouter } from "next/router";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  // Hooks and vars
  const router = useRouter();

  useEffect(() => {
    const handleStart = () => {
      // nProgress.start();
      console.log("start")
    };
    const handleStop = () => {
      // nProgress.done();
      console.log("done")
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
    <SessionProvider session={session}>
      <Provider store={store}>
        <Wrapper>
          <Component {...pageProps} />
        </Wrapper>
      </Provider>
    </SessionProvider>
  );
}
