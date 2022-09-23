import React from "react";
import "../styles/globals.css";
import ReactGA from "react-ga";

function MyApp({ Component, pageProps }) {
  ReactGA.initialize(process.env.ID_ANALYTICS);
  return <Component {...pageProps} />;
}

export default MyApp;
