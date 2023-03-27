import "../styles/globals.css";
import type { AppProps } from "next/app";
import Themeprovider from "../provider/themeprovider";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Themeprovider>
      {" "}
      <Component {...pageProps} />{" "}
    </Themeprovider>
  );
}
