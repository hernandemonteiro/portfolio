import NextNProgress from "nextjs-progressbar";
import React from "react";
import { Analytics } from "@vercel/analytics/react";
import "../styles/_app.scss";
import Head from "next/head";
import Image from "next/image";
import ComponentOrDocs, { initialProps } from "doc_docs";
import logo from "../../public/favicon.png";

function MyApp({ Component, pageProps, router, dirs }) {
  return (
    <>
      <Head>
        <title>Hernande Monteiro - seu blog tech quentinho e atual!</title>
        <meta
          name="description"
          content="Criado para inspirar o mundo do desenvolvimento!"
        />
        <link rel="shortcut icon" href="./favicon.png" />
      </Head>
      {/* <ComponentOrDocs
        route={router}
        configDirs={dirs}
        Component={Component}
        pageProps={pageProps}
        // layout configs:
        projectLogo={
          <div style={{ display: "flex", alignItems: "center" }}>
            <Image width={50} height={50} src={logo} alt={"logotipo"} />
            <h3 style={{ marginLeft: "2%" }}>Hernande Monteiro</h3>
          </div>
        }
        // socials:
        github="https://github.com/hernandemonteiro/personal_blog"
        website="https://hernandemonteiro.vercel.app"
        instagram="https://instagram.com/monteiro.ops"
      /> */}
      <Component {...pageProps}/>
      <NextNProgress />
      <Analytics />
    </>
  );
}
MyApp.getInitialProps = async () => {
  const dirs = await initialProps();
  return {
    dirs,
  };
};
export default MyApp;
