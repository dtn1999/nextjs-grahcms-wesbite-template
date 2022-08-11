import { createHygraphClient, hygraphFetcher } from "@app/lib";
import "@app/styles/globals.css";
import request from "graphql-request";
import type { AppContext, AppProps } from "next/app";
import App from "next/app";
import React from "react";

import { SWRConfig } from "swr";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SWRConfig
      value={{
        fetcher: hygraphFetcher,
        suspense: true,
      }}
    >
      <Component {...pageProps} />
    </SWRConfig>
  );
}

MyApp.getInitialProps = async (appContext: AppContext) => {
  const appProps = await App.getInitialProps(appContext);
  const { locale } = appContext.ctx;
  const hygraph = createHygraphClient(false);
  return {
    ...appProps,
    pageProps: {},
  };
};
export default MyApp;
