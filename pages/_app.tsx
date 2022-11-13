import "../styles/globals.css";
import type { AppProps } from "next/app";
import Wrapper from "../components/layout/WrapperLayout";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import { SessionProvider } from "next-auth/react";
import Progress from "../components/common/Progress";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <SessionProvider session={session}>
      <Provider store={store}>
        <Progress />
        <Wrapper>
          <Component {...pageProps} />
        </Wrapper>
      </Provider>
    </SessionProvider>
  );
}
