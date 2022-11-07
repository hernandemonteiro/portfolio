import NextNProgress from "nextjs-progressbar";
import React from "react";
import { Analytics } from "@vercel/analytics/react";
import "../styles/_app.scss";
import Head from "next/head";
import { ComponentOrDocs, readDirs, readNavDir } from "../../nextDocsPackage/dir";


function MyApp(props) {
  return (
    <>
      <NextNProgress />
      <Analytics />
      <Head>
        <title>Hernande Monteiro - seu blog tech quentinho e atual!</title>
        <meta
          name="description"
          content="Criado para inspirar o mundo do desenvolvimento!"
        />
        <link rel="shortcut icon" href="./favicon.png" />
      </Head>
      {ComponentOrDocs(props)}
    </>
  );
}

MyApp.getInitialProps = ({ Component, ctx }) => {
  const dirs = readDirs("./src/pages/docs/");
  const navDir = readNavDir("./src/pages/docs");
  let pageProps = { dirs: dirs, navDir: navDir };

  return pageProps;
};

export default MyApp;
