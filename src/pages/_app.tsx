import "@/styles/globals.css";
import React from "react";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <React.Fragment>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, maximum-scale=1"
        />
      </Head>

      <Component {...pageProps} />
    </React.Fragment>
  );
}
