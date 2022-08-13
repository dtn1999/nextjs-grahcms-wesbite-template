/* eslint-disable import/no-unresolved */
import { createHygraphClient, hygraphFetcher } from "@app/lib";
import "@app/styles/globals.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import type { AppContext, AppProps } from "next/app";
import App from "next/app";
import React from "react";

import { SWRConfig } from "swr";
import { AnimatePresence, motion } from "framer-motion";

const variants = {
  hidden: { opacity: 0 },
  enter: { opacity: 1 },
  exit: { opacity: 0 },
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SWRConfig
      value={{
        fetcher: hygraphFetcher,
        suspense: true,
      }}
    >
      <AnimatePresence exitBeforeEnter>
        <motion.main
          variants={variants} // Pass the variant object into Framer Motion
          initial="hidden" // Set the initial state to variants.hidden
          animate="enter" // Animated state to variants.enter
          exit="exit" // Exit state (used later) to variants.exit
          transition={{ type: "linear" }}
        >
          <Component {...pageProps} />
        </motion.main>
      </AnimatePresence>
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
