import NextNProgress from "nextjs-progressbar";
import React from "react";
import { Analytics } from "@vercel/analytics/react";
import "../styles/_app.scss";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NextNProgress />
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}

export default MyApp;
