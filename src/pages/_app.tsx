import "../styles/globals.css";
import "react-datepicker/dist/react-datepicker.css";
import App, { AppContext } from "next/app";
import React from "react";
import type { AppProps } from "next/app";
import NextNProgress from "nextjs-progressbar";

import { createHygraphClient } from "src/lib/client";
import { GET_LAYOUT_REQUEST } from "src/lib/requests/layout";

function MyApp(props: AppProps) {
  const { Component, pageProps } = props;
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}

MyApp.getInitialProps = async (appContext: AppContext) => {
  console.log("start execution of getInitialProps");
  const appProps = await App.getInitialProps(appContext);
  const { locale } = appContext.ctx;
  const hygraph = createHygraphClient(false);
  const { data } = await hygraph.request(GET_LAYOUT_REQUEST, {
    locale: locale || "en",
  });

  if (data.length === 0) {
    return {
      notFound: true,
    };
  }

  const globalData = data[0];
  console.log(globalData);
  return {
    ...appProps,
    pageProps: {
      globalData,
    },
  };
};

export default MyApp;
