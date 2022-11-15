import NextNProgress from "nextjs-progressbar";
import React from "react";
import { Analytics } from "@vercel/analytics/react";
import "../styles/_app.scss";
import Head from "next/head";
import Image from "next/image";
import { initialProps } from "doc_docs/dist/core";
import ComponentOrDocs from "doc_docs/dist";
import logo from "../../public/favicon.png";

initialProps(MyApp);

export default function MyApp(props) {

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
      <ComponentOrDocs
        route={props.router.route}
        dirs={props.dirs}
        subDirs={props.subDirs}
        Component={props.Component}
        pageProps={props.pageProps}
        
        projectLogo={
          <div style={{display: "flex", alignItems: "center"}}>
            <Image
              width={50}
              height={50}
              src={logo}
              alt={"logotipo"}
            /><h3 style={{marginLeft: "2%"}}>Hernande Monteiro</h3>
          </div>
        }
        github="https://github.com/hernandemonteiro/personal_blog"
        website="https://hernandemonteiro.vercel.app"
        instagram="https://instagram.com/monteiro.ops"
      />
    </>
  );
}