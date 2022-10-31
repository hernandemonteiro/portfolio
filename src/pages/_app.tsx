import NextNProgress from "nextjs-progressbar";
import React from "react";
import "./_app.scss";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NextNProgress />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
