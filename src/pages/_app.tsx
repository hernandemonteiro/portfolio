import NextNProgress from "nextjs-progressbar";
import React from "react";
import { Analytics } from "@vercel/analytics/react";
import "./_app.scss";
import Head from "next/head";
import Image from "next/image";
import ComponentOrDocs from "doc_docs";
import logo from "../../public/favicon.png";
import { AppProps } from "next/app";

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <React.StrictMode>
      <Head>
        <title>Hernande Monteiro - seu blog tech quentinho e atual!</title>
        <meta
          name="description"
          content="Blog sobre tecnologia e programação! /n Criado para inspirar e te atualizar sobre o mundo do desenvolvimento!"
        />
      </Head>
      <ComponentOrDocs
        route={router}
        Component={Component}
        pageProps={pageProps}
        // menu:
        configDirs={{
          dirs: ["components", "env"],
          subDirs: {
            api: ["index.tsx"],
            components: ["index.tsx", "about-me"],
          },
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
    </React.StrictMode>
  );
}

export default MyApp;
