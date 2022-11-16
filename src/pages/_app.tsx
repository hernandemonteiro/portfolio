import NextNProgress from "nextjs-progressbar";
import React from "react";
import { Analytics } from "@vercel/analytics/react";
import "../styles/_app.scss";
import Head from "next/head";
import Image from "next/image";
import { initialProps } from "doc_docs/core";
import ComponentOrDocs from "doc_docs";
import logo from "../../public/favicon.png";

const configDocs = initialProps();

export default function MyApp({ Component, pageProps, router }) {
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
      {router.route.match("/docs") ? (
        <ComponentOrDocs
          route={router.route}
          dirs={configDocs.dirs}
          subDirs={configDocs.subDirs}
          Component={Component}
          pageProps={pageProps}
          projectLogo={
            <div style={{ display: "flex", alignItems: "center" }}>
              <Image width={50} height={50} src={logo} alt={"logotipo"} />
              <h3 style={{ marginLeft: "2%" }}>Hernande Monteiro</h3>
            </div>
          }
          github="https://github.com/hernandemonteiro/personal_blog"
          website="https://hernandemonteiro.vercel.app"
          instagram="https://instagram.com/monteiro.ops"
        />
      ) : (
        <Component {...pageProps} />
      )}
    </>
  );
}
