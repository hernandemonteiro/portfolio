import NextNProgress from "nextjs-progressbar";
import React from "react";
import { Analytics } from "@vercel/analytics/react";
import "../styles/_app.scss";
import Head from "next/head";
import Image from "next/image";
import ComponentOrDocs from "doc_docs";
import logo from "../../public/favicon.png";

function MyApp({ Component, pageProps, router }) {
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
      <ComponentOrDocs
        route={router}
        Component={Component}
        pageProps={pageProps}
        // menu:
        configDirs={{
          dirs: ["components", "api", "env"],
          subDirs: { api: ["index.tsx", "Owner_info"] },
        }}
        // logo:
        projectLogo={
          <div style={{ display: "flex", alignItems: "center" }}>
            <Image width={50} height={50} src={logo} alt={"logotipo"} />
            <h3>Hernande Monteiro</h3>
          </div>
        }
        // socials:
        github="https://github.com/hernandemonteiro/personal_blog"
        website="https://hernandemonteiro.vercel.app"
        instagram="https://instagram.com/monteiro.ops"
      />
      <NextNProgress />
      <Analytics />
    </>
  );
}

export default MyApp;
